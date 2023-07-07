/**
 * IMPORTS
 */

// props do styles WrapperHeader
interface WrapperHeaderProps {
	type?: string;
}

// props do componente ImageCustom
interface ImageProps {
	type: "aprovado" | "pedente" | "reprovado" | "aguardando" | any;
	imageUri: string;
	username?: string | any;
	approvalDate?: string | any;
	onClickDisapproved: () => void;
	onClickApproved: () => void;
}

/**
 * EXPORTS
 */
export type { WrapperHeaderProps, ImageProps };
