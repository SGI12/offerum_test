import { createGlobalStyle } from "styled-components";

export const ResetCSSGLobalStyle = createGlobalStyle`

*, *::before, *::after {
	box-sizing: border-box;

}

html,
body {
  width: 100%;
  height: 100%;
  background-color: #1D2532;
}

body {
  margin: 0;
}

[tabindex='-1']:focus {
  outline: none;
}


html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: Inter, Arial, Helvetica, sans-serif;
}
`