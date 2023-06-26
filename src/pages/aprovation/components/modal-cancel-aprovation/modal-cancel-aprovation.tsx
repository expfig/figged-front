/**
 * IMPORTS
 */
import { useState } from "react";
import { useTheme } from "styled-components";

import Select from "react-select";
import { FiX } from "react-icons/fi";

// components
import { Button } from "../../../../components/button";
import { Modal } from "../../../../components/modal";
import { Text } from "../../../../components/text";

// data-mocked
import { options } from "./data-mocked/data-mocked";

// typings
import { type ModalAprovationProps } from "./interface";

// styles
import {
	WrapperHeader,
	WrapperHeaderTitle,
	WrapperMain,
	ButtonClosed,
	WrapperTextDescriptionModal,
	Label,
	TextArea,
	WrapperButtonModal,
} from "./modal-styles";

const ModalCancelAprovation = ({
	isModalOpen,
	onOpenAndClosedClick,
	onAprovationDocumentAndCoil,
}: ModalAprovationProps) => {
	const theme = useTheme();

	const [disapprovalReason, setDisapprovalReason] = useState("");

	return (
		<Modal
			isOpen={isModalOpen}
			width="40%"
			onRequestCloseClick={onOpenAndClosedClick}
		>
			<WrapperHeader>
				<WrapperHeaderTitle>
					<Text
						text="REPROVAÇÃO DE DOCUMENTO"
						align="center"
						letterHeight={24}
						letterSpacing={0.5}
						color={theme.colors.black_200}
						size={18}
						weight="600"
						width={"70%"}
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

			<WrapperMain>
				<WrapperTextDescriptionModal>
					<Text
						text="Você tem certeza que deseja realizar a reprovação do documento/foto selecionada?"
						align="center"
						letterHeight={28}
						letterSpacing={0.5}
						color={theme.colors.gray_500}
						size={18}
						weight="400"
						marginTop={6}
						width={100}
					/>
				</WrapperTextDescriptionModal>

				<Select
					placeholder={"Selecione o motivo da reprovação"}
					styles={{
						control: (baseStyles, state) => ({
							...baseStyles,
							borderColor: state.isFocused ? "grey" : theme.colors.gray_200,
							marginBottom: 12,
						}),
					}}
					options={options}
					onChange={text => {
						setDisapprovalReason(text?.value ? text?.value : "");
					}}
				/>

				{disapprovalReason === "Nenhuma das opção abaixo" && (
					<>
						<Label>Mensagem:</Label>
						<TextArea onChange={() => {}} />
					</>
				)}
			</WrapperMain>

			<WrapperButtonModal>
				<Button
					onClick={onOpenAndClosedClick}
					width={"46%"}
					weight={600}
					title="Cancelar"
					backgroundColor={theme.colors.red_500}
					loading={false}
				/>

				<Button
					onClick={onAprovationDocumentAndCoil}
					width={"46%"}
					weight={600}
					title="Sim, tenho certeza!"
					backgroundColor={theme.colors.green_200}
					loading={false}
				/>
			</WrapperButtonModal>
		</Modal>
	);
};

/**
 * EXPORTS
 */
export { ModalCancelAprovation };
