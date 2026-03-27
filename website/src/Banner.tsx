import type { JSX } from "react/jsx-runtime";

export function Banner(element: JSX.Element) {
  return (<div
    style={{
      position: "relative",
      width: "100vw",
      height: "360px",
      marginBottom: "40px",
      background: "linear-gradient(90deg, var(--brand-color2) 0%,  var(--brand-color3) 20%,  var(--brand-color4) 70%,   var(--brand-color5) 100%)",
    }}
  >

    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",

        width: "90vw"
      }}
    >
      {element}
    </div>
  </div>)
}