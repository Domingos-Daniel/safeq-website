import { ImageResponse } from "next/og";

// Rota para /favicon.ico
export function GET() {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "/favicon.ico",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

// Imagens com tamanhos específicos para diferentes dispositivos
export function generateImageMetadata() {
  return [
    {
      contentType: "image/png",
      size: { width: 16, height: 16 },
      id: "favicon-16",
    },
    {
      contentType: "image/png",
      size: { width: 32, height: 32 },
      id: "favicon-32",
    },
  ];
}

// Gera os ícones dinamicamente
export default async function Icon({ id }: { id: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          background: "#1e3a8a",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: 700,
          fontSize: id === "favicon-16" ? "10px" : "20px",
        }}
      >
        SQ
      </div>
    )
  );
}
