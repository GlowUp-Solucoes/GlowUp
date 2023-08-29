import Script from "next/script";
import React from "react";

const Analytics = () => (
    <>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LBJC2PCNNM"></Script>
        <script
            dangerouslySetInnerHTML={{
                __html:
                `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'G-LBJC2PCNNM');`
            }}
        />
    </>
)

export default Analytics;