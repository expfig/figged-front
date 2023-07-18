/**
 * IMPORTS
 */

interface ModalAprovationProps {
	isModalOpen: boolean;
	isLoading: boolean;
	onAprovationDocumentAndCoil: () => void;
	onOpenAndClosedClick: () => void;
	onSelectOption: (value: any) => string;
	onChangeTextArea: (value: any) => string;
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
