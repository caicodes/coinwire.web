import { style, globalStyle } from "@vanilla-extract/css"

export const container = style({
  padding: 0,
})

export const box = style({
  alignItems: "center",
  textAlign: "center",
  display: "grid",
  height: 150,
  width: 150,
})

export const yo1 = style({
  padding: 8,
  background: "rgba(0,0,0,.1618)",
  marginTop: 0,
})
export const yo2 = style({ padding: 8 })
export const yo3 = style({ padding: 8 })
export const yo4 = style({ padding: 8 })

globalStyle("body", {
  margin: 0,
  WebkitTapHighlightColor: "var(--accent-color)",
})

export const acLandingStyle = style({
  vars: {
    "--my-global-variable": "purple",
  },
})

export const myStyle = style({
  "@media": {
    "screen and (min-width: 768px)": {
      padding: 10,
    },
    "(prefers-reduced-motion)": {
      transitionProperty: "color",
    },
  },
})

export const myStyle2 = style({
  ":hover": {
    color: "pink",
  },
  ":first-of-type": {
    color: "blue",
  },
  "::before": {
    content: "",
  },
})

export const link = style({
  selectors: {
    "&:hover:not(:active)": {
      border: "2px solid aquamarine",
    },
    "nav li > &": {
      textDecoration: "underline",
    },
  },
})
