/**
 * IMPORTS
 */

interface IProps {
	dataString: string | undefined;
}
const handleTrasformStringInCapitalize = ({ dataString }: IProps) => {
	if (dataString) {
		const result = dataString.charAt(0).toUpperCase() + dataString.substr(1);
		return result;
	}
};

/**
 * EXPORTS
 */
export { handleTrasformStringInCapitalize };
