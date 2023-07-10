/**
 * IMPORTS
 */

import { useEffect, useState } from "react";
import { useTheme } from "styled-components";

// redux
import { useAppDispatch } from "../../redux/hooks/useAppDispatch";
import { actions as ActionApproval } from "../../features/approval";

// components
import { Text } from "../../components/text";
import { Loading } from "../../components/loading";
import { ImageCustom } from "../../components/image";

// styles
import { Container, WrapperContent, WrapperTitle } from "./styles";

const AprovationListing = () => {
	const theme = useTheme();
	const dispatch = useAppDispatch();

	const token = "ec4c56361ddbb8c058be23575e8bb7cff585c2c9";

	const [dataApproval, setDataApproval] = useState<[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const handleApprovationListing = async () => {
		setIsLoading(true);

		const response = await dispatch(
			ActionApproval.fetchAllApprovalsWithApprovedStatus({
				token,
				page: 1,
				status: "novo",
			})
		);

		setDataApproval(response.payload.data.data.data);
		setIsLoading(false);
	};

	useEffect(() => {
		handleApprovationListing();
	}, []);
	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<Container>
					<WrapperTitle>
						<Text
							marginTop={18}
							text="Lista de Documentos Aprovados:"
							align="left"
							letterHeight={24}
							letterSpacing={0.5}
							color={theme.colors.black_200}
							size={24}
							weight="600"
							marginBottom={16}
						/>
					</WrapperTitle>
					<WrapperContent>
						{dataApproval.map((documents: any, index) => (
							<ImageCustom
								key={String(index)}
								type={"aprovado"}
								username={documents?.user}
								approvalDate={documents?.formatted_updated_at}
								imageUri={documents?.file_url}
								onClickApproved={() => {}}
								onClickDisapproved={() => {}}
							/>
						))}
					</WrapperContent>
				</Container>
			)}
		</>
	);
};

/**
 * EXPORTS
 */
export { AprovationListing };
