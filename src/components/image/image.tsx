/**
 * IMPORTS
 */
import { useTheme } from "styled-components";
import { useParams } from "react-router-dom";
import Viewer from "viewerjs";
import "viewerjs/dist/viewer.css";

// components
import { Text } from "../text/text";
import { Button } from "../button/button";

// typings
import { type ImageProps } from "./interface";

// utils
import { handleTrasformStringInUpercaseAndToLowerCase } from "../../utils/transform-upercase";
import { handleTrasformStringInCapitalize } from "../../utils/transform-capitalize";

// styles
import {
	Container,
	WrapperHeader,
	Image,
	WrapperImage,
	WrapperUserMain,
	WrapperUser,
	WrapperTextUser,
	WrapperRow,
	TitleUserOrDate,
	SubTitleUserOrDate,
	FooterImage,
} from "./styles";

const ImageCustom = ({
	type,
	onClickApproved,
	onClickDisapproved,
	imageUri,
	username,
	approvalDate = "",
}: ImageProps) => {
	const theme = useTheme();
	const { idBobina } = useParams();

	const onImageClick = (event: any) => {
		const config: any = {
			modal: true,
			fullscreen: true,
			tooltip: true,
			zoomRatio: 0.8,
			navbar: false,
			backdrop: "static",
			toolbar: {
				zoomIn: 100,
				zoomOut: 100,
				reset: 4,
				rotateLeft: 4,
				rotateRight: 4,
			},
			title: () => `Documento da Bobina ${String(idBobina)}(Aguardando)`,
			hide: () => hide,
		};
		const viewer = new Viewer(event.target, config);
		viewer.show();
		const hide = () => viewer.destroy();
	};

	return (
		<Container>
			{/** HEADER */}
			<WrapperHeader type={type}>
				<Text
					text={handleTrasformStringInUpercaseAndToLowerCase({
						dataString: type,
						to: "toUpperCase",
					})}
					align="center"
					letterHeight={24}
					letterSpacing={0.5}
					color={theme.colors.natural}
					size={18}
					weight="600"
				/>
			</WrapperHeader>

			{/** WRAPPER IMAGE */}
			<WrapperImage>
				<Image
					alt="bobinas"
					src={
						imageUri ??
						"https://www.campoere.com/image/midia/1-60622f283b1d0.jpg&w=470&h=246&crop-to-fit&q=90"
					}
					onClick={event => {
						onImageClick(event);
					}}
				/>
			</WrapperImage>

			{/** WRAPPER USER */}
			<WrapperUserMain>
				<WrapperUser>
					<WrapperTextUser>
						<WrapperRow>
							<TitleUserOrDate>Usuário:</TitleUserOrDate>
							<SubTitleUserOrDate>
								{handleTrasformStringInCapitalize({
									dataString: username ?? "Indefinido",
								})}
							</SubTitleUserOrDate>
						</WrapperRow>
						<WrapperRow>
							<TitleUserOrDate>
								Data <span>aprovação</span>:
							</TitleUserOrDate>
							<SubTitleUserOrDate>
								{approvalDate ?? "Indefinido"}
							</SubTitleUserOrDate>
						</WrapperRow>
					</WrapperTextUser>
				</WrapperUser>
			</WrapperUserMain>

			{/** WRAPPER FOOTER */}
			<FooterImage>
				<Button
					onClick={onClickDisapproved}
					disabled={type === "aprovado" || username}
					width={"44%"}
					weight={600}
					title="Reprovar"
					loading={false}
					backgroundColor={
						username || type === "aprovado"
							? theme.colors.red_300
							: theme.colors.red_500
					}
				/>

				<Button
					onClick={onClickApproved}
					disabled={type === "aprovado" || username}
					width={"44%"}
					weight={600}
					title="Aprovar"
					loading={false}
					backgroundColor={
						username || type === "aprovado"
							? theme.colors.green_150
							: theme.colors.green_200
					}
				/>
			</FooterImage>
		</Container>
	);
};

/**
 * EXPORTS
 */
export { ImageCustom };
