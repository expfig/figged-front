/**
 * Document status types.
 */

/**
 * Document types.
 */

interface DocumentDataProps {
	id: number | null;
	status: string;
	user: string;
	file_url: string;
}

export interface Document {
	code: number;
	data: DocumentDataProps[];
}

/**
 * Document state interface.
 */
export interface IDocumentState {
	[x: string]: any;
	document: Document;
}

/**
 * Document slice name.
 */
export const NAME = "document";
