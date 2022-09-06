export const awesomeGrid = {
  mediaQuery: "only screen",
  columns: {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
  },
  gutterWidth: {
    xs: 1,
    sm: 1,
    md: 1.5,
    lg: 1.5,
    xl: 1.5,
  },
  paddingWidth: {
    xs: 1,
    sm: 1,
    md: 1.5,
    lg: 1.5,
    xl: 1.5,
  },
  container: {
    xs: "full", // 'full' = max-width: 100%
    sm: "full", // 'full' = max-width: 100%
    md: "full", // 'full' = max-width: 100%
    lg: 90, // max-width: 1440px
    xl: 90, // max-width: 1440px
  },
  breakpoints: {
    xs: 1,
    sm: 600 / 16, // 768px
    md: 900 / 16, // 1024px
    lg: 1024 / 16, // 1440px
    xl: 1536 / 16, // 1920px
  },
};
