/**
 * Html
 * This Html.js file acts as a template that we insert all our generated
 * application code into before sending it to the client as regular HTML.
 * Note we're returning a template string from this function.
 */
const Html = ({ url, body, title, description, styles }) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
      <title>${title}</title>
      <meta name="description" content=${description}>
      <meta property="og:image" content="https://avatars0.githubusercontent.com/u/8919087?s=400&amp;v=4">
      <meta property="og:site_name" content="${title}">
      <meta property="og:type" content="website">
      <meta property="og:title" content="${title}">
      <meta property="og:url" content="${url}">
      <meta property="og:description" content=${description}>
      <meta name="theme-color" content="#1e2327">
      <meta name="u2f-support" content="true">
      <link rel="assets" href="https://assets-cdn.github.com/">
      <link rel="fluid-icon" href="/favicon.ico" title="Spacemango Inc.">
      <link rel="shortcut icon" href="/favicon.ico" title="Spacemango Inc. type="image/x-icon">
      <link rel="mask-icon" href="mask.ico" color="#000000" description="favicon when tab is pinned">
      <link href="https://fonts.googleapis.com/css?family=Lato:400,900" rel="stylesheet">
      <!-- Icons -->
      <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png">
      <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png">
      <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png">
      <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png">
      <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png">
      <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png">
      <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png">
      <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png">
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png">
      <link rel="icon" type="image/png" sizes="192x192"  href="/icons/android-icon-192x192.png">
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png">
      <link rel="manifest" href="/manifest.json">
      <meta name="msapplication-TileColor" content="#ffffff">
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
      <meta name="theme-color" content="#ffffff">
      ${styles}
    </head>
    <body>
      <noscript>
        You need to enable JavaScript to run this app.
      </noscript>
      <div id="root">${body}</div>
    </body>
  </html>
`;

export default Html;