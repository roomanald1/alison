import { createContext, useContext, useState, type ReactNode } from "react";

type ConsentChoice = "accepted" | "rejected" | null;
type ConsentContextValue = {
  choice: ConsentChoice;
  choose: (choice: Exclude<ConsentChoice, null>) => void;
  reset: () => void;
};

const CONSENT_KEY = "alison-site-optional-content-consent";
const CONSENT_MAX_AGE = 180 * 24 * 60 * 60 * 1000;
const ConsentContext = createContext<ConsentContextValue | null>(null);

function readChoice(): ConsentChoice {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;
    const parsed = JSON.parse(stored) as { choice?: ConsentChoice; savedAt?: number };
    if (!parsed.savedAt || Date.now() - parsed.savedAt > CONSENT_MAX_AGE) {
      window.localStorage.removeItem(CONSENT_KEY);
      return null;
    }
    return parsed.choice === "accepted" || parsed.choice === "rejected" ? parsed.choice : null;
  } catch {
    return null;
  }
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [choice, setChoice] = useState<ConsentChoice>(readChoice);

  const choose = (next: Exclude<ConsentChoice, null>) => {
    try {
      window.localStorage.setItem(CONSENT_KEY, JSON.stringify({ choice: next, savedAt: Date.now() }));
    } catch {
      // The choice still applies for this page view if browser storage is unavailable.
    }
    setChoice(next);
  };

  const reset = () => {
    try {
      window.localStorage.removeItem(CONSENT_KEY);
    } catch {
      // The banner will still reopen for this page view.
    }
    setChoice(null);
  };

  return <ConsentContext.Provider value={{ choice, choose, reset }}>{children}</ConsentContext.Provider>;
}

export function useCookieConsent() {
  const value = useContext(ConsentContext);
  if (!value) throw new Error("Cookie consent components must be inside CookieConsentProvider");
  return value;
}

export function CookieConsentBanner() {
  const { choice, choose } = useCookieConsent();
  if (choice !== null) return null;

  return (
    <aside className="cookie-consent" aria-labelledby="cookie-consent-title" aria-describedby="cookie-consent-description">
      <div className="cookie-consent-copy">
        <h2 id="cookie-consent-title">Your privacy choices</h2>
        <p id="cookie-consent-description">
          Optional content from Google Maps and Psychology Today may use cookies or similar technologies and receive basic device information. Choose whether to load it. Your choice is saved for six months. Read our <a href="/privacy">privacy and data use details</a>.
        </p>
      </div>
      <div className="cookie-consent-actions">
        <button type="button" onClick={() => choose("accepted")}>Accept optional content</button>
        <button type="button" onClick={() => choose("rejected")}>Reject optional content</button>
      </div>
    </aside>
  );
}

export function CookieSettingsButton() {
  const { reset } = useCookieConsent();
  return <button className="cookie-settings-button" type="button" onClick={reset}>Cookie settings</button>;
}
