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
   background: "linear-gradient(90deg, #f2f3f4a8 0%, #b4d9f13b 50%, #d0f3d036 100%)"


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
      padding: "0 20px"
    }}
  >
    {element}
  </div>
</div>)
}