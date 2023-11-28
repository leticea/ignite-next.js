import { api } from "@/data/api";
import { Product } from "@/data/types/product";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  });
  const products = await response.json();
  return products;
}

export default async function Image({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        About Acme
      </div>
    ),
    {
      ...size,
    }
  );
}
