/**
 * IMPORTS
 */

import { toast } from "react-toastify";

// actions-redux
import { actions as ActionsDocument } from "../../../features/document";

// typings
import { type IDocumentReproachOneProps } from "./interface-functions";

/**
 * FUNÇÃO QUE REPROVA O COMPROVANTE OU A BOBINA
 */
const handleDocumentReproachOne = async ({
	setLoadingAprovationOrReproach,
	dispatch,

	handleGetCurrentData,
	idImage,
	setIsModalReproach,
	setImageID,
	setIsLoading,
	handlePendingApprovalSeeking,
	messageApproval,
}: IDocumentReproachOneProps) => {
	try {
		setLoadingAprovationOrReproach(true);

		if (!messageApproval) {
			return toast.error("Não foi informado o motivo para a reprovação.", {
				position: "top-right",
				autoClose: 1500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} else {
			const patchData = {
				status: "rejeitado",
				status_reprovado_mensagem: messageApproval,
				sec_users_id: "sgt",
				data_atualizacao_usuario: handleGetCurrentData,
			};

			// response da reprovação
			const responseFailApprovedDocument = await dispatch(
				ActionsDocument.patchOneDocument({
					idDocument: idImage,
					dataOdUpdate: patchData,
				})
			);

			// caso der suceso vamos executar abaixo
			if (responseFailApprovedDocument.payload.data) {
				toast.success("Documento aprovado com sucesso.", {
					position: "top-right",
					autoClose: 1500,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				setIsModalReproach(false);
				setImageID(null);
				setIsLoading(false);

				await handlePendingApprovalSeeking();
				setLoadingAprovationOrReproach(false);
			}
		}
	} catch (error) {
		toast.error("Documento não foi aprovado.", {
			position: "top-right",
			autoClose: 1500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		return error;
	}
};

/**
 * EXPORTS
 */
export { handleDocumentReproachOne };
