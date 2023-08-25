/**
 * IMPORTS
 */
import type React from "react";

/**
 * FUNÇÃO QUE LEVA USUÁRIO PRA PROXIMA PAGINA OU A ANTERIOR
 */
interface IFunctionOnClickPagination {
	netxOrPreview: string;
	pageNumber: any;
	setCountPage: React.Dispatch<React.SetStateAction<number>>;
	countPage: number;
}
const handleOnClickPagination = ({
	netxOrPreview,
	pageNumber,
	setCountPage,
	countPage,
}: IFunctionOnClickPagination) => {
	if (netxOrPreview === "next") {
		if (pageNumber) {
			setCountPage(pageNumber);
		} else {
			setCountPage(countPage + 1);
		}
	} else {
		if (pageNumber) {
			setCountPage(pageNumber);
		} else {
			setCountPage(countPage - 1);
		}
	}
};
/**
 * EXPORTS
 */
export { handleOnClickPagination };
