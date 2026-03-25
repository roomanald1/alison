import type { JSX } from "react/jsx-runtime";

export function Banner(element: JSX.Element) {
  return (<div
    style={{
      position: "relative",
      width: "100vw",
      height: "360px",
      marginBottom: "40px",
      background: "linear-gradient(90deg, #64a19c23 0%, #b4d9f165 20%,  #9731ce2c 70%,  #9731ce4d 100%)",
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