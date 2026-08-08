import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vedant Sunil Raut - Software Engineer & Native Android Specialist";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#050505",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          color: "#ffffff",
          position: "relative",
        }}
      >
        {/* Ambient Radial Mesh Background */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "100%",
            background: "radial-gradient(circle, rgba(168,85,247,0.3) 0%, rgba(0,0,0,0) 70%)",
          }}
        />

        {/* Brand Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", zIndex: 10 }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              fontWeight: "bold",
              color: "#ffffff",
            }}
          >
            VR
          </div>
          <div style={{ fontSize: "20px", fontWeight: "600", color: "#a855f7", letterSpacing: "2px" }}>
            VEDANT SUNIL RAUT
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", zIndex: 10, maxWidth: "900px" }}>
          <div style={{ fontSize: "56px", fontWeight: "bold", lineHeight: "1.15", letterSpacing: "-1px" }}>
            Software Engineer at Logituit & Native Android Specialist
          </div>
          <div style={{ fontSize: "24px", color: "#a3a3a3", lineHeight: "1.4" }}>
            Building high-performance Mobile Realities with Kotlin, Jetpack Compose, KMP & Next.js
          </div>
        </div>

        {/* Footer Badges */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", zIndex: 10 }}>
          {["Kotlin", "Jetpack Compose", "KMP", "Next.js", "Clean Architecture"].map((tag, idx) => (
            <div
              key={idx}
              style={{
                padding: "8px 18px",
                borderRadius: "12px",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                fontSize: "16px",
                color: "#e5e5e5",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
