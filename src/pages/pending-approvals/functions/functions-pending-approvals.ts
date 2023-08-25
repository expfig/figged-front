/**
 * IMPORTS
 */

import { toast } from "react-toastify";

// actions-redux
import { actions as ActionApproval } from "../../../features/approval";

// typings
import { type IReduxRequestProps } from "../../../dtos/request-redux";
import {
	type IFunctionDataPagesProps,
	type IFunctionDocumentsProps,
} from "./interface-functions";

/**
 * FUNÇÃO QUE BUSCAR TODOS DOCUMENTOS QUE ESTÃO NOVOS
 */
const handleGetDocumentPending = async ({
	setIsLoading,
	dispatch,
	setDataPeddingDocuments,
	setLastPage,
	setPagesData,
	status,
	countPage,
}: IFunctionDocumentsProps) => {
	try {
		setIsLoading(true);

		// response dos documentos novo
		const responsePendigDocument: IReduxRequestProps = await dispatch(
			ActionApproval.fetchAllApprovalsWithApprovedAndPendingStatus({
				page: countPage,
				status,
			})
		);

		// caso der suceso vamos executar abaixo
		if (responsePendigDocument.payload.data) {
			toast.success("Busca realizada com sucesso!", {
				position: "top-right",
				autoClose: 1500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});

			const responseFiltered =
				responsePendigDocument.payload.data.data.links.filter(
					(link: IFunctionDataPagesProps) =>
						link.label !== "&laquo; Anterior" &&
						link.label !== "..." &&
						link.label !== "Próxima &raquo;"
				);

			setLastPage(responsePendigDocument.payload.data.data.last_page);
			setPagesData(responseFiltered);

			setDataPeddingDocuments(responsePendigDocument.payload.data.data.data);
		}
	} catch (error: any) {
		toast.error("Ops, algo deu errado entre contato com suporte!", {
			position: "top-right",
			autoClose: 1500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		setDataPeddingDocuments([]);
		return error.message;
	} finally {
		setIsLoading(false);
	}
};

/**
 * EXPORTS
 */
export { handleGetDocumentPending };
