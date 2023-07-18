/**
 * IMPORTS
 */
import { useTheme } from "styled-components";
import { FiX } from "react-icons/fi";

// components
import { Button } from "../button";
import { Modal } from "../modal";
import { Text } from "../text";

// typings
import { type ModalAprovationProps } from "./interface";

// styles
import {
	WrapperHeader,
	WrapperHeaderTitle,
	ButtonClosed,
	WrapperTextDescriptionModal,
	WrapperButtonModal,
	SubTitle,
} from "./modal-styles";

const ModalAprovation = ({
	isModalOpen,
	onOpenAndClosedClick,
	onAprovationDocumentAndCoil,
	isLoading = false,
}: ModalAprovationProps) => {
	const theme = useTheme();

	return (
		<Modal isOpen={isModalOpen} onRequestCloseClick={onOpenAndClosedClick}>
			<WrapperHeader>
				<WrapperHeaderTitle>
					<Text
						text="APROVAÇÃO DE DOCUMENTO"
						align="center"
						letterHeight={24}
						letterSpacing={0.5}
						color={theme.colors.black_200}
						size={18}
						weight="600"
					/>
				</WrapperHeaderTitle>

				<ButtonClosed>
					<FiX
						color={theme.colors.black_200}
						size={24}
						onClick={onOpenAndClosedClick}
					/>
				</ButtonClosed>
			</WrapperHeader>

			<WrapperTextDescriptionModal>
				<SubTitle>
					{isLoading
						? "Aprovando documento..."
						: "Você tem certeza que deseja aprovar o documento/foto selecionada?"}
				</SubTitle>
			</WrapperTextDescriptionModal>

			<WrapperButtonModal>
				<Button
					onClick={onOpenAndClosedClick}
					width={"46%"}
					weight={600}
					title="Cancelar"
					backgroundColor={theme.colors.red_500}
					color={theme.colors.natural}
					loading={false}
				/>

				<Button
					onClick={onAprovationDocumentAndCoil}
					width={"46%"}
					weight={600}
					title="Sim, tenho certeza!"
					backgroundColor={theme.colors.green_200}
					color={theme.colors.natural}
					loading={isLoading}
				/>
			</WrapperButtonModal>
		</Modal>
	);
};

/**
 * EXPORTS
 */
export { ModalAprovation };
