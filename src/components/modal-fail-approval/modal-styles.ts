/**
 * IMPORTS
 */
import styled from "styled-components";

// typings
import { type TextAreaProps, type WrapperButtonProps } from "./interface";

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
	width: 70%;
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
	font-size: 1.1rem;
	width: 100%;
	text-align: start;
	color: ${({ theme }) => theme.colors.gray_500};
	line-height: 28px;
	letter-spacing: 0.5;

	@media screen and (max-width: 768px) {
		font-size: 1rem;
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
	padding: 0 1rem;
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

const WrapperSelect = styled.div`
	width: 100%;
	padding: 0 1rem;
`;

const WrapperTextArea = styled.div`
	width: 100%;
	padding: 0 1rem;
`;

const WrapperButtonModal = styled.div<WrapperButtonProps>`
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
		margin-top: ${({ textArea }) => (textArea ? "140px" : 0)};
	}
`;

const WrapperMain = styled.div`
	width: 100%;
	height: 100%;

	@media screen and (max-width: 768px) {
		height: 10.62rem;
	}
`;

const Label = styled.label`
	display: block;
	color: ${({ theme }) => theme.colors.gray_500};
	line-height: 1.1rem;
	letter-spacing: 0.5;
`;

const TextArea = styled.textarea<TextAreaProps>`
	margin: 1rem 0;
	width: 100%;
	height: 6.25rem;
	color: ${({ theme }) => theme.colors.gray_500};
	font-size: 1rem;
	padding: 16px;
	border: 1px solid ${({ borderColor }) => borderColor};
	border-radius: 4px;
`;

/**
 * EXPORTS
 */
export {
	WrapperHeader,
	WrapperHeaderTitle,
	WrapperMain,
	SubTitle,
	ButtonClosed,
	WrapperTextDescriptionModal,
	WrapperSelect,
	WrapperTextArea,
	Label,
	TextArea,
	WrapperButtonModal,
};
