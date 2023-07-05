/**
 * IMPORTS
 */

const handleTransFormTextInString = (paramsText: string | undefined) => {
	if (paramsText) {
		return String(paramsText);
	} else {
		return "";
	}
};

/**
 * EXPORTS
 */
export { handleTransFormTextInString };
