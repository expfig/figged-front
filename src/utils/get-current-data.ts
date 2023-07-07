/**
 * IMPORTS
 */

import { format } from "date-fns";

const handleGetCurrentData = () => {
	const nowDate = format(new Date(Date.now()), "yyyy-MM-dd H:mm:ss.0000");

	if (nowDate) {
		return nowDate;
	} else {
		return "";
	}
};
/**
 * EXPORTS
 */

export { handleGetCurrentData };
