import { createGlobalStyle } from "styled-components";
import "font-awesome/css/font-awesome.css";
const GlobalStyle = createGlobalStyle`

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: 0;
	}

	body {
		background-color: rgb(113, 89, 193) ;
		text-rendering: optimizeLegibility !important;
		-webkit-font-smoothing: antialiased !important;
		font-family: sans-serif;
	}
`;

export default GlobalStyle;
