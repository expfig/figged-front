/**
 * IMPORTS
 */

import { toast } from "react-toastify";

// actions-redux
import { actions as ActionApproval } from "../../../features/approval";

// typings
import { type IFunctionDocumentsProps } from "./interface-functions";

/**
 * FUNÇÃO QUE BUSCAR TODOS DOCUMENTOS QUE ESTÃO NOVOS
 */
const handleGetDocumentPending = async ({
	setIsLoading,
	dispatch,
	token,
	setDataPeddingDocuments,
}: IFunctionDocumentsProps) => {
	try {
		setIsLoading(true);

		// response dos documentos novo
		const responseApprovedDocument = await dispatch(
			ActionApproval.fetchAllApprovalsWithApprovedStatus({
				token,
				status: "novo",
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

			setDataPeddingDocuments(responseApprovedDocument.payload.data.data);
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
