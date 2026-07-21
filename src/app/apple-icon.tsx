import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1b2a4a",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, #012169 0%, #012169 28%, #ffffff 28%, #ffffff 36%, #c8102e 36%, #c8102e 64%, #ffffff 64%, #ffffff 72%, #012169 72%)",
            opacity: 0.35,
          }}
        />
        <div
          style={{
            width: 128,
            height: 128,
            borderRadius: 999,
            background: "linear-gradient(145deg, #ffe7a0 0%, #e2b43a 55%, #b8891a 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#1b2a4a",
            fontSize: 78,
            fontWeight: 800,
            fontFamily: "Georgia, serif",
            boxShadow: "0 8px 0 #8f6a12",
          }}
        >
          Ð
        </div>
      </div>
    ),
    { ...size },
  );
}
