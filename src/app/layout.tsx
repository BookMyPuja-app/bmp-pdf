"use client";

import "./globals.css";

import { notoSansRegular, notoSansBold, notoSansSemiBold } from "../../package/src/constants";
import { Font } from "@react-pdf/renderer";

Font.register({
  family: "Noto Sans",
  fontWeight: "normal",
  src: notoSansRegular,
})

Font.register({
  family: "Noto Sans",
  fontWeight: "bold",
  src: notoSansBold,
})

Font.register({
  family: "Noto Sans",
  fontWeight: "semibold",
  src: notoSansSemiBold,
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
