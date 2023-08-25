/**
 * IMPORTS
 */
import styled from "styled-components";
import {
	type TextNumberPageProps,
	type WrapperTextFooterProps,
} from "./interface";

const Container = styled.div`
	width: 100%;
	flex: 1;
	padding: 0 16px; // padding esquerda e direita
`;

const WrapperTitle = styled.div`
	width: 100%;
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray_200};
`;

const FooterTable = styled.div`
	width: 100%;
	height: 8vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: transparent;
`;

const WrapperTextNoData = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-bottom: 34px;
`;

const ButtonPreview = styled.button`
	width: 6rem;
	height: 2rem;
	border-radius: 4px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.colors.blue_100};
	margin-right: 4px;
	padding-right: 8px;
	padding-left: 8px;
`;

const TextSpanLeft = styled.span`
	font-size: 0.9rem;
	color: ${({ theme }) => theme.colors.natural};
	margin-left: 0.75rem;
	cursor: pointer;
`;

const ButtonNext = styled.button`
	width: 6rem;
	height: 2rem;
	border-radius: 4px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.colors.blue_100};
	margin-left: 4px;
	padding: 0 2px;
`;

const TextSpanRight = styled.span`
	font-size: 0.9rem;
	color: ${({ theme }) => theme.colors.natural};
	margin-left: 0.75rem;
	cursor: pointer;
`;

const WrapperTextFooter = styled.button<WrapperTextFooterProps>`
	width: 2.8rem;
	height: 2rem;
	margin: 2px;
	border: 1px solid ${({ theme }) => theme.colors.gray_200};
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme, background }) =>
		background ? theme.colors.blue_100 : theme.colors.natural};

	:hover {
		opacity: 0.8;
		background-color: #b5bac7;
		color: #fff;
	}
`;

const TextNumberPage = styled.p<TextNumberPageProps>`
	font-size: 0.8rem;
	color: ${({ theme, active }) =>
		active ? theme.colors.natural : theme.colors.gray_700};

	:hover {
		color: #fff;
	}
`;
/**
 * EXPORTS
 */
export {
	Container,
	WrapperTitle,
	FooterTable,
	WrapperTextNoData,
	ButtonPreview,
	TextSpanLeft,
	ButtonNext,
	TextSpanRight,
	WrapperTextFooter,
	TextNumberPage,
};
