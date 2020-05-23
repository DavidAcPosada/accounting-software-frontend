import { css } from "styled-components";

export const flex = ({ 
    direction = 'column',
    wrap = 'no-wrap', 
    justifyContent = 'center', 
    alignItems = 'center'
}) => 
    css`
        display: flex;
        flex-direction: ${direction};
        flex-wrap: ${wrap};
        justify-content: ${justifyContent};
        align-items: ${alignItems};
    `