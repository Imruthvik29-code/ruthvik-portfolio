import { ImageResponse } from "next/og"

export const alt = "Ruthvik Varma Dendukuri portfolio: practical AI systems across machine learning, deep learning, and computer vision."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "72px",
        color: "#f3f5f7",
        backgroundColor: "#111419",
        backgroundImage:
          "linear-gradient(135deg, #111419 0%, #172329 65%, #111419 100%)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "56px",
            height: "56px",
            borderRadius: "14px",
            border: "1px solid #5a7e8b",
            color: "#76c7db",
            fontSize: "23px",
            fontWeight: 700,
          }}
        >
          RV
        </div>
        <span style={{ fontSize: "26px", fontWeight: 600 }}>Ruthvik Varma Dendukuri</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
        <div style={{ fontSize: "76px", fontWeight: 700, letterSpacing: "-4px", lineHeight: 1.05 }}>
          Practical AI systems.
        </div>
        <div style={{ fontSize: "30px", color: "#b8c1c7" }}>
          Machine Learning · Deep Learning · Computer Vision
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "14px", color: "#76c7db", fontSize: "22px" }}>
        <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#76c7db" }} />
        Data Science &amp; AI
      </div>
    </div>,
    size,
  )
}
