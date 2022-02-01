import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @font-face {
            font-family: Akronim;
            src: url("/akronim.woff2");
          }
        `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
