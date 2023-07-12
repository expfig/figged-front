/**
 * IMPORTS
 */

import { toast } from "react-toastify";

// actions-redux
import { actions as ActionApproval } from "../../../features/approval";

// typings
import { type IFunctionDocumentsProps } from "./interface-functions";

/**
 * FUNÇÃO QUE BUSCAR TODOS DOCUMENTOS QUE FORAM APROVADOS
 */
const handleGetDocumentApprovel = async ({
	setIsLoading,
	dispatch,
	token,
	setDataApprovalDocuments,
}: IFunctionDocumentsProps) => {
	try {
		setIsLoading(true);

		// response da reprovação
		const responseApprovedDocument = await dispatch(
			ActionApproval.fetchAllApprovalsWithApprovedStatus({
				token,
				status: "aprovado",
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

			setDataApprovalDocuments(responseApprovedDocument.payload.data.data.data);
			setIsLoading(false);
		}
	} catch (error: any) {
		toast.error(
			"Error em encontrar os documento aprovados, tente mais tarde.",
			{
				position: "top-right",
				autoClose: 1500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			}
		);
		setDataApprovalDocuments([]);
		return error.message;
	} finally {
		setIsLoading(false);
	}
};

/**
 * EXPORTS
 */
export { handleGetDocumentApprovel };
