import summerImage from "../assets/summer.jpg";
import spaceImage from '../assets/space2.jpg';


const commonTheme = {
    fontFamily: {
        primary: "'Poppins', sans-serif",
        secondary: "Open Sans, sans-serif",
        handwriting1: "Playwrite PE",
        handwriting2: "Playwrite AU TAS",
    },
    fontSizes: {
        xs: "0.8rem",
        sm: "0.9rem",
        md: "1rem",
        lg: "1.1rem",
        xl: "1.2rem",
        xxl: "1.3rem",
        xxxl: "1.5rem",
    },
    fontWeights: {
        normal: 400,
        medium: 600,
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
        lg: "15px",
        xl: "20px",
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

export const summer = {
    colors: {
        primary: "#EE7214",
        secondary: "#fff78a63",
        white: "ghostwhite",
        textColor: "black",
        hoverColor: "white",
        impColor: "#f1fe0064",
        pbarColor: "#d2d2d2",
    },
    images: {
        background1: summerImage,
    },
    mainDiv: {
        color: 'rgba(200, 200, 200, 0.662)',
        shadow: '0px 0px 2px 2px rgba(200, 200, 200, 0.662)'
    },
    ...commonTheme
}

export const space = {
    colors: {
        primary: "blue",
        secondary: "skyblue",
        white: "ghostwhite",
        textColor: "white",
        hoverColor: "#1443ee6e",
        impColor: "ghostwhite",
        pbarColor: "#100736",
    },
    images: {
        background1: spaceImage,
    },
    mainDiv: {
        color: 'rgba(7, 5, 42, 0.647)',
        shadow: 'rgba(7, 5, 42, 0.647)',
    },
    ...commonTheme
}