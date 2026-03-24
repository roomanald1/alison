import type { JSX } from "react/jsx-runtime";

export function Banner(element: JSX.Element)
{
  return (<div
  style={{
    position: "relative",
    width: "100vw",
    minHeight: "320px",
    maxHeight: "420px",
    overflow: "hidden",
    marginBottom: "40px",
   background: "linear-gradient(90deg, #f2f3f4a2 0%, #b4d9f167 50%, #d0f3d069 100%)",
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
      padding: "0 20px",
      width: "90vw"

    }}
  >
    {element}
  </div>
</div>)
}