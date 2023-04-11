import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout"
import Script from "next/script"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`} />
            <Script
                id='google-analytics'
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `,
                }}
            />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
