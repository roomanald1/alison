import type { JSX } from "react/jsx-runtime";

export function Banner({children}: {children: JSX.Element}) {
  return (<div
    style={{
      width: "100vw",
      display: "flex",
  flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      height: "220px",
      marginBottom: "40px",
      background: "linear-gradient(90deg, var(--brand-color2) 0%,  var(--brand-color3) 20%,  var(--brand-color4) 70%,   var(--brand-color5) 100%)",
    }}
  >

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {children}
      </div>
  </div>)
}