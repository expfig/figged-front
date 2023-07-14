/**
 * IMPORTS
 */

import { toast } from "react-toastify";

// actions-redux
import { actions as ActionApproval } from "../../../features/approval";

// typings
import { type IFunctionDocumentsProps } from "./interface-functions";
import { type IDataPagesProps } from "../interface";

/**
 * FUNÇÃO QUE BUSCAR TODOS DOCUMENTOS QUE FORAM APROVADOS
 */
const handleGetDocumentApprovel = async ({
	setIsLoading,
	dispatch,
	token,
	page,
	status,
	setDataPages,
	setLastpage,
	setDataApprovalDocuments,
}: IFunctionDocumentsProps) => {
	try {
		setIsLoading(true);

		// response de documentos
		const responseApprovedDocument = await dispatch(
			ActionApproval.fetchAllApprovalsWithApprovedStatus({
				token,
				page,
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
					(link: IDataPagesProps) =>
						link.label !== "&laquo; Anterior" &&
						link.label !== "..." &&
						link.label !== "Próxima &raquo;"
				);
			setLastpage(responseApprovedDocument.payload.data.data.last_page);
			setDataPages(responseFiltered);
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
