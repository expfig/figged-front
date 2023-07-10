/**
 * IMPORTS
 */

const handleTransFormTextInNumber = (paramsText: number | undefined) => {
	if (paramsText) {
		return Number(paramsText);
	} else {
		return "";
	}
};

/**
 * EXPORTS
 */
export { handleTransFormTextInNumber };
