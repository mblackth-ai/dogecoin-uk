import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Gold DOGE mark with a quiet British accent for browser tabs. */
export default function Icon() {
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
        {/* Soft Union accents in corners */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 18,
            height: 18,
            background: "#c8102e",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 18,
            height: 18,
            background: "#012169",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: 18,
            height: 18,
            background: "#012169",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 18,
            height: 18,
            background: "#c8102e",
          }}
        />
        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: 999,
            background: "linear-gradient(145deg, #ffe7a0 0%, #e2b43a 55%, #b8891a 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#1b2a4a",
            fontSize: 28,
            fontWeight: 800,
            fontFamily: "Georgia, serif",
            boxShadow: "0 2px 0 #8f6a12",
          }}
        >
          Ð
        </div>
      </div>
    ),
    { ...size },
  );
}
