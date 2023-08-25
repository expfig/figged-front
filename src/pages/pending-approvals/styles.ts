/**
 * IMPORTS
 */
import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-wrap: wrap;
	padding: 0 1rem;
`;

const WrapperContent = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	background-color: transparent;
`;

const WrapperTitle = styled.div`
	width: 100%;
	border-bottom: 2px solid ${({ theme }) => theme.colors.gray_200};
	margin-bottom: 2rem;

	@media screen and (max-width: 768px) {
		:first-child p {
			font-size: 18px;
		}
	}
`;

const WrapperContentNotFound = styled.div`
	width: 100%;
	height: 70vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ImageNotFoundData = styled.img`
	width: 100px;
	height: 100px;
`;

/**
 * EXPORTS
 */
export {
	Container,
	WrapperContent,
	WrapperTitle,
	WrapperContentNotFound,
	ImageNotFoundData,
};
