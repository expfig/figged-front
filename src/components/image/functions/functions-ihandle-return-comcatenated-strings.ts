/**
 * IMPORTS
 */

// typings
import { type IHandleReturnComcatenatedStringsProps } from "./functions-interface";

// utlis
import { handleTrasformStringInCapitalize } from "../../../utils/transform-capitalize";

const handleReturnComcatenatedStrings = ({
	userWhoApproved,
	data,
}: IHandleReturnComcatenatedStringsProps) => {
	if (userWhoApproved && data) {
		const username: string | undefined = handleTrasformStringInCapitalize({
			dataString: userWhoApproved,
		});
		return `${String(username) + ` Data:${data}`}`;
	} else {
		return "Não Definido";
	}
};

/**
 * EXPORTS
 */
export { handleReturnComcatenatedStrings };
