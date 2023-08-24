import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        --orange-bg: #2f2618;
        --orange: #ff9d01;
        --magenta: #ff005c;
        --gray-bg: #18191a;
        --yellow-bg: #FFBA00;
        --btn-gradient: linear-gradient(to right, #ba8b02, #181818);
        --btn-gradient-secondary: linear-gradient(140deg, #3B3022, #3B2329);
    }
    html{
        scroll-behavior: smooth;
    }
    body {
        margin: 0;
        padding: 0;
        background-image: url("https://res.cloudinary.com/dmloe0isx/image/upload/v1689637059/f7fkzaeguddmwmddhqvu.jpg");
        background-size: cover;
        background-position: center center;
        font-family: 'Montserrat', sans-serif;
        color: white;

    }
    a {
        text-decoration: none;
        color: white;
    }
    a:visited {
        color: white;
    }
    li {
        list-style: none;
    }
`;