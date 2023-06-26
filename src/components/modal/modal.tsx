/**
 * IMPORTS
 */
import ReactModal from "react-modal";

// import { useTheme } from "styled-components";

// // components
// import { Text } from "../text/text";

interface ModalProps {
	children: React.ReactNode;
	isOpen: boolean;
	onRequestCloseClick: () => void;

	// styles-modal
	width?: string;
}
// // styles
const Modal = ({
	children,
	isOpen,
	width,
	onRequestCloseClick,
}: ModalProps) => {
	// const theme = useTheme();

	return (
		<>
			<ReactModal
				isOpen={isOpen}
				shouldCloseOnEsc={isOpen}
				onRequestClose={onRequestCloseClick}
				style={{
					content: {
						width: width ?? "50%",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						backgroundColor: "#fff",
						bottom: "auto",
						borderRadius: 4,
					},
					overlay: {
						width: "100%",
						position: "fixed",
						inset: 0,
						backgroundColor: "rgba(18, 18, 18, 0.7)",
						zIndex: 999999,
					},
				}}
			>
				{children}
			</ReactModal>
		</>
	);
};

/**
 * EXPORTS
 */
export { Modal };
