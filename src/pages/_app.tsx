import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from "next-themes";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {MDXProvider} from "@mdx-js/react";
import {AnchorHTMLAttributes, ClassAttributes, HTMLAttributes, OlHTMLAttributes} from "react";
import mdxComponentsStyles from "@/styles/MdxComponents.module.css";
import {Heading2} from "@/components/MDX/Header2";
import {Heading3} from "@/components/MDX/Header3";
import Script from "next/script";
import * as process from "process";

const components = {
    h1: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => <h1 {...props} className={mdxComponentsStyles.h1}/>,
    h2: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => <Heading2 {...props} className={mdxComponentsStyles.h2}/>,
    h3: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => <Heading3 {...props} className={mdxComponentsStyles.h3}/>,
    p: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLParagraphElement> & HTMLAttributes<HTMLParagraphElement>) => <p {...props} className={mdxComponentsStyles.text}/>,
    a: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} className={mdxComponentsStyles.a}/>,
    ol: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLOListElement> & OlHTMLAttributes<HTMLOListElement>) => <ol {...props} className={mdxComponentsStyles.ol} />,
    ul: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLUListElement> & HTMLAttributes<HTMLUListElement>) => <ul {...props} className={mdxComponentsStyles.ul} />
};

export default function App({Component, pageProps}: AppProps) {
    return (
        <MDXProvider components={components}>
            <ThemeProvider>
                <Navigation />
                <Component {...pageProps} />
                <Footer />
            </ThemeProvider>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
            />
            <Script
                strategy="afterInteractive"
                id="google-analytics"
            >
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
                `}
            </Script>
        </MDXProvider>
    );
};
