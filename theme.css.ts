/**
 * 
 * 

CSS
.theme_themeClass__l520oi0 {
  --color-brand__l520oi1: blue;
  --font-body__l520oi2: arial;
}
Here we’ve called createTheme with our theme implementation. Based on this, vanilla-extract will return two things:

A class name: a container class for the provided theme variables.
A theme contract: a typed data-structure of CSS variables, matching the shape of the provided theme implementation.
After processing this file, the resulting compiled JS will look something like this:


 */

// // Example result of the compiled JS
// import './theme.css';

// export const vars = {
//   color: {
//     brand: 'var(--color-brand__l520oi1)'
//   },
//   font: {
//     body: 'var(--font-body__l520oi2)'
//   }
// };

// export const themeClass = 'theme_themeClass__l520oi0';

import { createTheme } from "@vanilla-extract/css"

export const [themeClass, vars] = createTheme({
  color: {
    brand: "blue",
  },
  font: {
    body: "arial",
  },
})

export const otherThemeClass = createTheme(vars, {
  color: {
    brand: "red",
  },
  font: {
    body: "helvetica",
  },
})
