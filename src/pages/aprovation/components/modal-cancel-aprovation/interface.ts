/**
 * IMPORTS
 */

interface ModalAprovationProps {
	isModalOpen: boolean;
	onAprovationDocumentAndCoil: () => void;
	onOpenAndClosedClick: () => void;
}

// interface do styles-WrapperButton
interface WrapperButtonProps {
	textArea: boolean;
}

// interface do styles-TextArea
interface TextAreaProps {
	borderColor: string;
}
/**
 * EXPORTS
 */
export type { ModalAprovationProps, WrapperButtonProps, TextAreaProps };
