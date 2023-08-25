/**
 * IMPORTS
 */
import { useEffect, useState } from "react";
import { useTheme } from "styled-components";

import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

// components
import { Text } from "../text";

// typings
import { type IDataPagesProps, type IPaginationFooterProps } from "./interface";

// styles
import {
	Container,
	FooterTable,
	WrapperTextNoData,
	ButtonPreview,
	TextSpanLeft,
	ButtonNext,
	TextSpanRight,
	WrapperTextFooter,
	TextNumberPage,
} from "./styles";

const PaginationFooter = ({
	pageData,
	firstPage,
	lastpage,
	isLoadingPagination,
	onClickNext,
	onClickPreview,
	dataTestIdNext,
	dataTestIdPreview,
}: IPaginationFooterProps) => {
	const theme = useTheme();

	const [pages, setPages] = useState<IDataPagesProps[]>([]);

	useEffect(() => {
		setPages(pageData);
	}, [pageData]);

	return (
		<Container>
			<>
				{isLoadingPagination ? (
					<WrapperTextNoData>
						<Text
							text="Carregando páginas..."
							align="center"
							letterHeight={24}
							letterSpacing={0.5}
							color={"#767171"}
							size={16}
							weight="400"
						/>
					</WrapperTextNoData>
				) : (
					<>
						{pages.length ? (
							<FooterTable>
								{pages.length > 1 && (
									<ButtonPreview
										data-testid={dataTestIdPreview}
										onClick={onClickPreview}
									>
										<FiArrowLeft size={18} color={theme.colors.natural} />
										<TextSpanLeft>Anterior</TextSpanLeft>
									</ButtonPreview>
								)}

								{pages?.map((page: IDataPagesProps) => (
									<WrapperTextFooter
										key={page?.label}
										background={page?.active}
										onClick={() => {
											onClickNext(page?.label);
										}}
									>
										<TextNumberPage active={page?.active}>
											{page?.label}
										</TextNumberPage>
									</WrapperTextFooter>
								))}

								{firstPage === lastpage ? (
									<></>
								) : (
									<ButtonNext
										data-testid={dataTestIdNext}
										onClick={onClickNext}
									>
										<TextSpanRight>Próximo</TextSpanRight>
										<FiArrowRight size={18} color={theme.colors.natural} />
									</ButtonNext>
								)}
							</FooterTable>
						) : (
							<WrapperTextNoData>
								<p>Nenhuma informação encontrada....</p>
							</WrapperTextNoData>
						)}
					</>
				)}
			</>
		</Container>
	);
};

/**
 * EXPORTS
 */
export { PaginationFooter };
