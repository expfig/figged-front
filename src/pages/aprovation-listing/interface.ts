/**
 * IMPORTS
 */

interface IDocumentsApprovedProps {
	id: number;
	status: string;
	user: string;
	formatted_updated_at: string | null;
	updated_at: string | null;
	file_url: string;
}

/**
 * EXPORTS
 */
export type { IDocumentsApprovedProps };
