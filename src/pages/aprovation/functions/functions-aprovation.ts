/**
 * IMPORTS
 */

import { toast } from "react-toastify";

// actions-redux
import { actions as ActionsDocument } from "../../../features/document";
import { actions as ActionsApproval } from "../../../features/approval";

// typings
import { type IReduxRequestProps } from "../../../dtos/request-redux";
import {
	type IFunctionAprovationProps,
	type IDataPagesProps,
} from "./interface-functions";

/**
 * FUNÇÃO QUE RETORNAR DOCUMENTO DE UM MOTORISTA
 */
const handleGetAllDocuments = async ({
	setLoading,
	dispatch,
	idAprovacao,
	countPage,
	idDriveName,
	setDocuments,
	setDataTable,
	setLastPage,
	setPagesData,
}: IFunctionAprovationProps) => {
	try {
		setLoading(true);
		const documentDataResponse: IReduxRequestProps = await dispatch(
			ActionsDocument.fetchAllDocuments({ idAprovacao })
		);

		const driverApprovalDataResponse = await dispatch(
			ActionsApproval.fetchAllApprovals({
				page: countPage,
				driverId: Number(idDriveName),
			})
		);
		setDocuments(documentDataResponse.payload.data);
		setDataTable(driverApprovalDataResponse.payload.data.data.data);
		setLastPage(driverApprovalDataResponse.payload.data.data.last_page);

		const responseFiltered =
			driverApprovalDataResponse?.payload?.data?.data?.links.filter(
				(link: IDataPagesProps) =>
					link.label !== "&laquo; Anterior" &&
					link.label !== "..." &&
					link.label !== "Próxima &raquo;"
			);

		setPagesData(responseFiltered);
		setLoading(false);
		toast.success("Busca realizada com sucesso!", {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: false,
		});
		setLoading(false);
	} catch (error) {
		toast.error("Ops, algo deu errado entre contato com suporte!", {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: false,
		});
		return error;
	}
};

/**
 * EXPORTS
 */
export { handleGetAllDocuments };
