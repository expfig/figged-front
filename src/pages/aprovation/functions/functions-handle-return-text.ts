/**
 * IMPORTS
 */

// typings
import { type IAprovacaoProps } from "../interface";

import { handleTrasformStringInUpercaseAndToLowerCase } from "../../../utils/transform-upercase";

/**
 * FUNÇÃO QUE RETORNAR UM TEXTO DE ACORDO A PROPIEDADE
 */
interface IFunctionReturnTextProps {
	document: IAprovacaoProps;
	numberDocument: number;
}
const handleReturnText = ({
	document,
	numberDocument,
}: IFunctionReturnTextProps) => {
	if (document?.type === "bobina") {
		return `Documentos da Bobina ${numberDocument} (${handleTrasformStringInUpercaseAndToLowerCase(
			{ dataString: document?.status ?? "", to: "toUpperCase" }
		)})`;
	} else {
		return `Documento do Comprovante da Viagem ${numberDocument} (${handleTrasformStringInUpercaseAndToLowerCase(
			{ dataString: document?.status ?? "", to: "toUpperCase" }
		)})`;
	}
};

/**
 * EXPORTS
 */
export { handleReturnText };
