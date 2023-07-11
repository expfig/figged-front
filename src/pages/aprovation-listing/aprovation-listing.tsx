/**
 * IMPORTS
 */

import { useEffect, useState } from "react";
import { useTheme } from "styled-components";

// redux
import { useAppDispatch } from "../../redux/hooks/useAppDispatch";

// components
import { Text } from "../../components/text";
import { Loading } from "../../components/loading";
import { ImageCustom } from "../../components/image";

// functions
import { handleGetDocumentApprovel } from "./functions/functions-approvation-listing";

// typings
import { type IDocumentsApprovedProps } from "./interface";

// styles
import {
	Container,
	ImageNotFoundData,
	WrapperContent,
	WrapperContentNotFound,
	WrapperTitle,
} from "./styles";

const AprovationListing = () => {
	const theme = useTheme();
	const dispatch = useAppDispatch();

	const token = "ec4c56361ddbb8c058be23575e8bb7cff585c2c9";

	const [dataApprovalDocuments, setDataApprovalDocuments] = useState<
		IDocumentsApprovedProps[]
	>([]);
	const [isLoading, setIsLoading] = useState(false);

	const handleApprovationListing = async () => {
		handleGetDocumentApprovel({
			setIsLoading,
			dispatch,
			token,
			status: "aprovado",
			setDataApprovalDocuments,
		});
	};

	useEffect(() => {
		handleApprovationListing();
	}, []);
	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<Container>
					<WrapperTitle>
						<Text
							marginTop={18}
							text="Documentos Aprovados:"
							align="left"
							letterHeight={24}
							letterSpacing={0.5}
							color={theme.colors.black_100}
							size={24}
							weight="600"
							marginBottom={16}
						/>
					</WrapperTitle>
					<WrapperContent>
						{dataApprovalDocuments.length > 0 ? (
							dataApprovalDocuments.map(
								(documents: IDocumentsApprovedProps) => (
									<ImageCustom
										key={String(documents.id)}
										type={documents.status}
										username={documents?.user}
										approvalDate={documents?.formatted_updated_at}
										imageUri={documents?.file_url}
										onClickApproved={() => {}}
										onClickDisapproved={() => {}}
									/>
								)
							)
						) : (
							<WrapperContentNotFound>
								<ImageNotFoundData
									src="https://img.myloview.com.br/posters/icone-da-pagina-do-arquivo-do-documento-do-prazo-do-horario-400-112384520.jpg"
									alt="not-found"
								/>
								<Text
									marginTop={18}
									text="Nenhum registro encontrado..."
									align="center"
									letterHeight={24}
									letterSpacing={0.5}
									color={theme.colors.black_100}
									size={22}
									weight="600"
								/>
							</WrapperContentNotFound>
						)}
					</WrapperContent>
				</Container>
			)}
		</>
	);
};

/**
 * EXPORTS
 */
export { AprovationListing };
