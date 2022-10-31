import { Archivo, Noto_Sans_KR } from "@next/font/google";
import { PropsWithChildren } from "react";
import "~/styles/global.css";

const notosanskr = Noto_Sans_KR({
  weight: "400",
  variable: "--notosanskr",
  subsets: ["korean"],
});
const archivo = Archivo({
  weight: "700",
  variable: "--archivo",
});
export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <head>
        <title>WAC</title>
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body
        className={`flex h-screen max-h-[-webkit-fill-available] w-full max-w-full flex-col  bg-gray-700 ${notosanskr.variable} ${archivo.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
