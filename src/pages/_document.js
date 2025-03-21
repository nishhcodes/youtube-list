import { Html, Head, Main, NextScript } from "next/document";
import Home from "./index";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
        <Home />
      </body>
    </Html>
  );
}
