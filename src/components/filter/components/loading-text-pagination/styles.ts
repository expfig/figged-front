/**
 * IMPORTS
 */
import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const WrapperTitle = styled.div`
	width: 100%;
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray_200};
`;

/**
 * EXPORTS
 */
export { Container, WrapperTitle };
