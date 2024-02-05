import type { Metadata } from "next";
import { Providers } from "./providers";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "NFT Minter",
  description: "Oh cool another NFT Minter app!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
