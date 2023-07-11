/**
 * IMPORTS
 */
import styled from "styled-components";

// typings
import { type WrapperHeaderProps } from "./interface";

const Container = styled.div`
	width: 30%;
	height: 28.12rem;
	border-radius: 0.25rem;
	border: 1px solid ${({ theme }) => theme.colors.gray_200};
	margin-bottom: 1.5rem;
	display: column;
	align-items: center;
	justify-content: space-around;
	box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
		0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
		0px 10px 15px -3px rgba(0, 0, 0, 0.1);

	// quando a tela atingir 768px
	@media screen and (max-width: 768px) {
		display: block;
		width: 100%;
		height: 30.62rem;
	}
`;

const WrapperHeader = styled.div<WrapperHeaderProps>`
	width: 100%;
	height: 36px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme, type }) =>
		(type === "rejeitado" && theme.colors.red_300) ||
		(type === "aprovado" && theme.colors.green_200) ||
		(type === "novo" && theme.colors.blue_80) ||
		(type === "aguardando" && theme.colors.blue_80)};
	opacity: 0.8;
	border-top-right-radius: 0.25rem;
	border-top-left-radius: 0.25rem;
`;

const WrapperImage = styled.div`
	width: 100%;
	height: 17.5rem;
	cursor: pointer;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
`;

const WrapperUserMain = styled.div`
	width: 100%;
	padding: 0 1rem;
`;

const WrapperUser = styled.div`
	width: 100%;
	height: 45px;
	margin-top: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 0.25rem;
	border: 1px solid ${({ theme }) => theme.colors.gray_200};
`;

const WrapperTextUser = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;
`;

const FooterImage = styled.div`
	width: 100%;
	height: 5.72rem;
	border-radius: 0.25rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0 1rem;

	// quando a tela atingir 768px
	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
		margin-top: 1rem;
	}
`;

/**
 * EXPORTS
 */
export {
	Container,
	WrapperHeader,
	WrapperImage,
	Image,
	WrapperUserMain,
	WrapperUser,
	WrapperTextUser,
	FooterImage,
};
