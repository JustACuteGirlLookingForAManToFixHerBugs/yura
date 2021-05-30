
const React = require("react");
const QAPI = require("./qapi").default;

export const onRenderBody = (
    {
        setHeadComponents,
        setPostBodyComponents,
    }
) => {

  setHeadComponents([
    <style>{`
        body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
        }
    `}</style>,
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Xanh%20Mono:ital,wght@0,400;1,400&display=swap" />,
  ]);

  setPostBodyComponents([
    
    <script
        key="QAPI"
        dangerouslySetInnerHTML={{
            __html: `window.QAPI = ${JSON.stringify(QAPI || {})}`
        }}
    />,
  ]);
}