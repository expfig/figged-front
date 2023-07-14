/**
 * IMPORTS
 */
import { useTheme } from "styled-components";

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
import { useEffect, useState } from "react";
import { type IDataPagesProps } from "./interface";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const PaginationFooter = ({
	pageData,
	firstPage,
	lastpage,
	onClickNext,
	onClickPreview,
	isLoadingPagination,
}: any) => {
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
						<p>carrregando...</p>
					</WrapperTextNoData>
				) : (
					<>
						{pages.length ? (
							<FooterTable>
								{pages.length > 1 && (
									<ButtonPreview onClick={onClickPreview}>
										<FiArrowLeft size={18} color={theme.colors.natural} />
										<TextSpanLeft>Anterior</TextSpanLeft>
									</ButtonPreview>
								)}

								{pages?.map((page: IDataPagesProps) => (
									<WrapperTextFooter
										key={page?.label}
										background={page?.active}
										onClick={() => onClickNext(page?.label)}
									>
										<TextNumberPage active={page?.active}>
											{page?.label}
										</TextNumberPage>
									</WrapperTextFooter>
								))}

								{firstPage === lastpage ? (
									<></>
								) : (
									<ButtonNext onClick={onClickNext}>
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
