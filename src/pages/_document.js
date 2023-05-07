import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link rel="icon" href="/logo.svg" />
          <title>Multi Cloud</title>
          <meta name="theme-color" content="#012038" />
          <meta name="background-color" content="#012038" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
