import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Hack DI - Build. Innovate. Disrupt."
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  const logoData = await fetch(new URL("../public/hackdilogo.png", import.meta.url)).then((res) => res.arrayBuffer())

  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: "rgb(4, 13, 14)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 50,
      }}
    >
      <img
        width={400}
        height={400}
        src={logoData || "/placeholder.svg"}
        style={{ objectFit: "contain" }}
        alt="Hack DI Logo"
      />
      <h1 style={{ color: "rgb(225, 186, 67)", fontSize: 70, marginTop: 30 }}>Build. Innovate. Disrupt.</h1>
    </div>,
    {
      ...size,
    },
  )
}
