import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout"
import Script from "next/script"

export default function mApp({ Component, pageProps }: AppProps) {
    return (
        <>
            
            <Script
                strategy="afterInteractive"
                src= {`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />

            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>

            <Layout>
                <Component {...pageProps} />
            </Layout>
            
        </>
    );
}
