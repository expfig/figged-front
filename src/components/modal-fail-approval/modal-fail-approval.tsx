/**
 * IMPORTS
 */
import { useState } from "react";
import { useTheme } from "styled-components";

import Select from "react-select";
import { FiX } from "react-icons/fi";

// components
import { Button } from "../button";
import { Modal } from "../modal";
import { Text } from "../text";

// data-mocked
import { options } from "./data-mocked/data-mocked";

// typings
import { type ModalAprovationProps } from "./interface";

// styles
import {
	WrapperHeader,
	WrapperHeaderTitle,
	SubTitle,
	WrapperMain,
	ButtonClosed,
	WrapperTextDescriptionModal,
	WrapperSelect,
	WrapperTextArea,
	Label,
	TextArea,
	WrapperButtonModal,
} from "./modal-styles";

const ModalFailApproval = ({
	isModalOpen,
	onOpenAndClosedClick,
	onAprovationDocumentAndCoil,
	onSelectOption,
	onChangeTextArea,
	isLoading = false,
}: ModalAprovationProps) => {
	const theme = useTheme();

	const [disapprovalReason, setDisapprovalReason] = useState("");
	const [onFocused, setOnFocused] = useState(false);

	return (
		<Modal isOpen={isModalOpen} onRequestCloseClick={onOpenAndClosedClick}>
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
					<SubTitle>
						Você tem certeza que deseja realizar a reprovação do documento/foto
						selecionada?
					</SubTitle>
				</WrapperTextDescriptionModal>

				<WrapperSelect>
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
							onSelectOption(text?.value ? text?.value : "");
						}}
					/>
				</WrapperSelect>

				{disapprovalReason === "Nenhuma das opção abaixo" && (
					<WrapperTextArea>
						<Label>Mensagem:</Label>
						<TextArea
							onChange={onChangeTextArea}
							onFocus={() => {
								setOnFocused(true);
							}}
							onBlur={() => {
								setOnFocused(false);
							}}
							borderColor={
								onFocused ? theme.colors.blue_100 : theme.colors.gray_500
							}
						/>
					</WrapperTextArea>
				)}
			</WrapperMain>

			<WrapperButtonModal
				textArea={disapprovalReason === "Nenhuma das opção abaixo"}
			>
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
					loading={isLoading}
				/>
			</WrapperButtonModal>
		</Modal>
	);
};

/**
 * EXPORTS
 */
export { ModalFailApproval };
