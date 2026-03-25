import type { JSX } from "react/jsx-runtime";

export function Banner(element: JSX.Element)
{
  return (<div
  style={{
    position: "relative",
    width: "100vw",
    height: "360px",
    marginBottom: "40px",
   background: "linear-gradient(90deg, #f2f3f4a2 0%, #b4d9f167 20%, #9731ce21 100%)",
  }}
>

  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      color: "#333",
      width: "90vw"

    }}
  >
    {element}
  </div>
</div>)
}