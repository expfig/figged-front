/**
 * IMPORTS
 */

import { toast } from "react-toastify";

// actions-redux
import { actions as ActionApproval } from "../../../features/approval";

// typings
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
	token,
	setDataPeddingDocuments,
	setLastPage,
	setPagesData,
	status,
	countPage,
}: IFunctionDocumentsProps) => {
	try {
		setIsLoading(true);

		// response dos documentos novo
		const responseApprovedDocument = await dispatch(
			ActionApproval.fetchAllApprovalsWithApprovedStatus({
				token,
				page: countPage,
				status,
			})
		);

		// caso der suceso vamos executar abaixo
		if (responseApprovedDocument.payload.data) {
			toast.success("Documentos encontrados com sucesso.", {
				position: "top-right",
				autoClose: 1500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});

			const responseFiltered =
				responseApprovedDocument.payload.data.data.links.filter(
					(link: IFunctionDataPagesProps) =>
						link.label !== "&laquo; Anterior" &&
						link.label !== "..." &&
						link.label !== "Próxima &raquo;"
				);

			setLastPage(responseApprovedDocument.payload.data.data.last_page);
			setPagesData(responseFiltered);

			setDataPeddingDocuments(responseApprovedDocument.payload.data.data.data);
			setIsLoading(false);
		}
	} catch (error: any) {
		toast.error("Error em encontrar os documento novos, tente mais tarde.", {
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
