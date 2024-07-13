const theme = {
    colors: {
        primary: "#EE7214",
        secondary: "#fff78a63",
        white: "#fff",
        black: "#000",
    },
    fontSizes: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "22px",
        xxl: "28px",
        xxxl: "32px",
    },
    fontWeights: {
        normal: 400,
        medium: 500,
        bold: 700,
        black: 900,
    },
    lineHeights: {
        normal: "normal",
        none: "1",
        shorter: "1.25",
        short: "1.375",
        base: "1.5",
        tall: "1.625",
        taller: "2",
    },
    letterSpacings: {
        normal: "normal",
        caps: "0.2em",
    },
    radii: {
        sm: "5px",
        md: "10px",
        lg: "16px",
        full: "9999px",
        circle: "50%",
    },
    shadows: {
        sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
        none: "none",
    },
    space: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "32px",
        xl: "64px",
        xxl: "128px",
        xxxl: "256px",
        base: (n = 1) => `${5*n}px`,
    },
    breakpoints: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
    },

}

export default theme;
