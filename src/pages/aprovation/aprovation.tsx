/* eslint-disable @typescript-eslint/no-misused-promises */
/**
 * IMPORTS
 */

import { useState } from "react";
import { useTheme } from "styled-components";
import { useParams } from "react-router-dom";

// components
import { ImageCustom } from "../../components/image";
import { Text } from "../../components/text";
import { Table } from "../../components/table";

// screen-specific-component
import { ModalAprovation } from "./components/modal-aprovation/modal-aprovation";
import { ModalCancelAprovation } from "./components/modal-cancel-aprovation";

// styles
import { ContainerMain, WrapperImage, WrapperTitle } from "./styles";

const Aprovation = () => {
	const theme = useTheme();

	const { idBobina } = useParams();

	const [isModal, setIsModal] = useState(false);
	const [isModalReproach, setIsModalReproach] = useState(false);

	const handleAprovarionDocumentOrCoil = () => {
		try {
			alert("aprovou!");
		} catch (error) {
			return error;
		}
	};

	return (
		<ContainerMain>
			{isModal && (
				<ModalAprovation
					isModalOpen={isModal}
					onOpenAndClosedClick={() => {
						setIsModal(!isModal);
					}}
					onAprovationDocumentAndCoil={() => {
						handleAprovarionDocumentOrCoil();
					}}
				/>
			)}
			{isModalReproach && (
				<ModalCancelAprovation
					isModalOpen={isModalReproach}
					onOpenAndClosedClick={() => {
						setIsModalReproach(!isModalReproach);
					}}
					onAprovationDocumentAndCoil={() => {
						handleAprovarionDocumentOrCoil();
					}}
				/>
			)}

			<WrapperTitle>
				<Text
					width={"100%"}
					marginTop={18}
					text={`Documento do Comprovante da Viagem ${JSON.stringify(
						idBobina
					)} (Aguardando)`}
					align="left"
					letterHeight={24}
					letterSpacing={0.5}
					color={theme.colors.black_200}
					size={24}
					weight="600"
					marginBottom={16}
				/>
			</WrapperTitle>
			<WrapperImage>
				<ImageCustom
					type="pedente"
					onClickApproved={() => {
						setIsModal(!isModal);
					}}
					onClickDisapproved={() => {
						setIsModalReproach(!isModalReproach);
					}}
				/>
				<ImageCustom
					type="pedente"
					onClickApproved={() => {
						setIsModal(!isModal);
					}}
					onClickDisapproved={() => {
						setIsModalReproach(!isModalReproach);
					}}
				/>
				<ImageCustom
					type="pedente"
					onClickApproved={() => {
						setIsModal(!isModal);
					}}
					onClickDisapproved={() => {
						setIsModalReproach(!isModalReproach);
					}}
				/>
			</WrapperImage>
			<Table />
		</ContainerMain>
	);
};

/**
 * EXPORTS
 */
export { Aprovation };
