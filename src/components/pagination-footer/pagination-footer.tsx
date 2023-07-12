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
import { useState } from "react";
import { type IDataPagesProps } from "./interface";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { dataFake } from "./data-fake";

const PaginationFooter = () => {
	const theme = useTheme();
	const [data] = useState<any[]>([1, 2, 3, 4, 5, 7, 8, 9, 10]);
	const [pages] = useState<any[]>(dataFake);

	return (
		<Container>
			<>
				{data.length ? (
					<FooterTable>
						<ButtonPreview onClick={() => {}}>
							<FiArrowLeft size={18} color={theme.colors.natural} />
							<TextSpanLeft>Anterior</TextSpanLeft>
						</ButtonPreview>

						{pages?.map((page: IDataPagesProps) => (
							<WrapperTextFooter
								key={page?.label}
								background={page?.active}
								onClick={() => {}}
							>
								<TextNumberPage active={page?.active}>
									{page?.label}
								</TextNumberPage>
							</WrapperTextFooter>
						))}

						<ButtonNext onClick={() => {}}>
							<TextSpanRight>Próximo</TextSpanRight>
							<FiArrowRight size={18} color={theme.colors.natural} />
						</ButtonNext>
					</FooterTable>
				) : (
					<WrapperTextNoData>
						<p>Nenhuma informação encontrada....</p>
					</WrapperTextNoData>
				)}
			</>
		</Container>
	);
};

/**
 * EXPORTS
 */
export { PaginationFooter };
