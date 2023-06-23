/**
 * IMPORTS
 */
import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	height: 100vh;
	position: absolute;
	z-index: 9999;
	background-color: #000000;
	opacity: 0.2;

	box-shadow: -3px 0px 50px 29px rgba(18, 18, 18, 0.96);

	-webkit-box-shadow: -3px 0px 50px 29px rgba(18, 18, 18, 0.96);

	-moz-box-shadow: -3px 0px 50px 29px rgba(18, 18, 18, 0.96);
`;

const WrapperTitle = styled.div`
	width: 100%;
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray_200};
`;

/**
 * EXPORTS
 */
export { Container, WrapperTitle };
