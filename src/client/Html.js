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
      <meta name="viewport" content="width=device-width">
      <title>${title}</title>
      <meta name="description" content=${description}>
      <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="Scroogey UI">
      <meta property="og:image" content="https://avatars0.githubusercontent.com/u/8919087?s=400&amp;v=4">
      <meta property="og:site_name" content="${title}">
      <meta property="og:type" content="website">
      <meta property="og:title" content="${title}">
      <meta property="og:url" content="${url}">
      <meta property="og:description" content=${description}>
      <link rel="assets" href="https://assets-cdn.github.com/">
      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
      <meta name="theme-color" content="#1e2327">
      <meta name="u2f-support" content="true">
      ${styles}
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
    </body>
  </html>
`;

export default Html;