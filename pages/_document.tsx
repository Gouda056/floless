import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta name="theme-color" />
      <link rel="fav icon" href="/images/favIcon.png" />
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      ></link>
      <meta name="emotion-insertion-point" content="" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
