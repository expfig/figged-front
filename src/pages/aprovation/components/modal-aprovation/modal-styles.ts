/**
 * IMPORTS
 */
import styled from "styled-components";

const WrapperHeader = styled.div`
	width: 100%;
	height: 2.4rem;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

const WrapperHeaderTitle = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;

	@media screen and (max-width: 968px) {
		width: 100%;
		justify-content: center;
		align-items: center;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

const SubTitle = styled.p`
	font-size: 18px;
	width: 60%;
	text-align: center;
	color: ${({ theme }) => theme.colors.gray_500};
	line-height: 28px;
	letter-spacing: 0.5;

	@media screen and (max-width: 768px) {
		font-size: 1rem;
		width: 100%;
	}
`;

const ButtonClosed = styled.button`
	width: 3.12rem;
	height: 3.12rem;
	border-radius: 1.62rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const WrapperTextDescriptionModal = styled.div`
	width: 100%;
	height: 4.38rem;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 1rem;
	margin-bottom: auto;
	border-top: 1px solid ${({ theme }) => theme.colors.gray_350};
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray_350};

	@media screen and (max-width: 968px) {
		background-color: transparent;
		height: 6rem;
	}

	@media screen and (max-width: 768px) {
		background-color: transparent;
		height: 5.38rem;
	}
`;

const WrapperButtonModal = styled.div`
	width: 100%;
	height: 4.38rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 2rem;
	padding: 0 1rem;

	@media screen and (max-width: 768px) {
		height: 6rem;
		flex-direction: column;
	}
`;

/**
 * EXPORTS
 */
export {
	WrapperHeader,
	WrapperHeaderTitle,
	SubTitle,
	ButtonClosed,
	WrapperTextDescriptionModal,
	WrapperButtonModal,
};
