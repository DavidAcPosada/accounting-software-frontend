import { createGlobalStyle } from "styled-components";
import { blackColor } from "./_vars";

export default createGlobalStyle`
    * {
        margin: 0;
        border: 0;
        padding: 0;
    }

    body {
        font-family: 'Roboto', Arial;
        color: ${blackColor};
    }
`