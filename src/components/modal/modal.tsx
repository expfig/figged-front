/**
 * IMPORTS
 */
import ReactModal from "react-modal";

import { useTheme } from "styled-components";

// // components
import { Text } from "../text/text";

// // styles

const Modal = () => {
	const theme = useTheme();

	// const customStyles = {
	// 	content: {
	// 		top: "50%",
	// 		left: "50%",
	// 		right: "auto",
	// 		bottom: "auto",
	// 		marginRight: "-50%",
	// 		transform: "translate(-50%, -50%)",
	// 		width: "50%",
	// 		backgroundColor: "#fff",
	// 		borderRadius: 4,
	// 	},
	// };
	return (
		<>
			<ReactModal
				isOpen={false}
				style={{
					overlay: {
						position: "fixed",
						inset: 0,
						backgroundColor: "rgba(18, 18, 18, 0.7)",
						zIndex: 999999,
					},
				}}
				shouldCloseOnEsc={true}
			>
				<Text
					text="Úsuario:"
					align="center"
					letterHeight={24}
					letterSpacing={0.5}
					color={theme.colors.black_200}
					size={18}
					weight="600"
					marginLeft={12}
					width={"30%"}
				/>
			</ReactModal>
		</>
	);
};

/**
 * EXPORTS
 */
export { Modal };
