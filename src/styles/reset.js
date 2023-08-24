import { createGlobalStyle } from "styled-components";

export const ResetStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    button{
        cursor: pointer;
        background: transparent;
        border: none;
        border-radius: 0.25rem;
    }

    a{
        color: unset;
        text-decoration: none;
        justify-content: center;
        align-items: center;
        height: 100%;
        display: flex;
        width: 100%;
    }

    ul, ol{
        list-style: none;
    }

    input{
        border-radius: 0;
        border: none;
        background: transparent;
        outline: none;
        border-radius: 0.25rem;
    }

    img{
        max-width: 100%;
    }

`;
