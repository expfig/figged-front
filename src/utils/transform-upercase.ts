/**
 * IMPORTS
 */

interface IProps {
	dataString: string;
	to: "toUpperCase" | "toLowerCase";
}
const handleTrasformStringInUpercaseAndToLowerCase = ({
	dataString,
	to,
}: IProps) => {
	if (to === "toUpperCase") {
		return dataString?.toUpperCase();
	} else {
		return dataString?.toLowerCase();
	}
};

/**
 * EXPORTS
 */
export { handleTrasformStringInUpercaseAndToLowerCase };
