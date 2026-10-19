import { useEffect, useRef } from "react";
import { useCookieConsent } from "./CookieConsent";

export function PsychologyTodayBadge() {
  const { choice } = useCookieConsent();
  const host = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (choice !== "accepted" || !host.current) return;

    const container = document.createElement("div");
    container.id = "pt-seal-container";
    const link = document.createElement("a");
    link.href = "https://www.psychologytoday.com/profile/1673762";
    link.className = "sx-verified-seal";
    link.setAttribute("aria-label", "Verified Psychology Today profile");
    const script = document.createElement("script");
    script.src = "https://member.psychologytoday.com/verified-seal.js";
    script.async = true;
    script.dataset.badge = "10";
    script.dataset.id = "1673762";
    script.dataset.code = "aHR0cHM6Ly93d3cucHN5Y2hvbG9neXRvZGF5LmNvbS9hcGkvdmVyaWZpZWQtc2VhbHMvMTAvcHJvZmlsZS8xNjczNzYyP2NhbGxiYWNrPXN4Y2FsbGJhY2s=";
    container.append(link, script);
    host.current.appendChild(container);

    return () => container.remove();
  }, [choice]);

  return (
    <div className="pt-seal-host" ref={host}>
      {choice !== "accepted" && <a href="https://www.psychologytoday.com/profile/1673762" target="_blank" rel="noreferrer">View Psychology Today profile</a>}
    </div>
  );
}
