/**
 * IMPORTS
 */

// styles
import { ContainerMdal } from "./styles";

interface ModalProps {
	children: React.ReactNode;
	isOpen: boolean;
	onRequestCloseClick: () => void;
	dataTestId?: string;
}
const Modal = ({
	children,
	isOpen,
	onRequestCloseClick,
	dataTestId,
}: ModalProps) => {
	// const theme = useTheme();

	return (
		<>
			<ContainerMdal
				id={dataTestId}
				ariaHideApp={false}
				isOpen={isOpen}
				shouldCloseOnEsc={isOpen}
				onRequestClose={onRequestCloseClick}
				style={{
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
			</ContainerMdal>
		</>
	);
};

/**
 * EXPORTS
 */
export { Modal };
