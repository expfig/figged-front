/**
 * IMPORTS
 */

const handleScrollTop = (btn: any) => {
	btn?.addEventListener("click", function () {
		window.scrollTo(0, 0);
	});
};

/**
 * EXPORTS
 */
export { handleScrollTop };
