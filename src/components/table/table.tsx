/**
 * IMPORTS
 */

import { useEffect, useState } from "react";

import { useTheme } from "styled-components";

import { Link } from "react-router-dom";

import { FiLoader, FiArrowRight, FiArrowLeft } from "react-icons/fi";

// typings
import { type IDataTableProps, type IDataPagesProps } from "./interface";

// utils
import { handleTrasformStringInUpercaseAndToLowerCase } from "../../utils/transform-upercase";
import { hanfleReturnText } from "../../utils/return-text";

// styles
import {
	Container,
	WrapperLoading,
	TableHtml,
	Thead,
	Tr,
	Th,
	Tbody,
	Td,
	FooterTable,
	WrapperTextNoData,
	ButtonPreview,
	TextSpanLeft,
	ButtonNext,
	TextSpanRight,
	WrapperTextFooter,
	TextNumberPage,
} from "./styles";

const Table = ({
	data,
	pages,
	onClickPreview,
	onClickNext,
}: IDataTableProps) => {
	const theme = useTheme();

	const [pagess, setPages] = useState<IDataPagesProps[]>([]);

	useEffect(() => {
		setPages(pages);
	}, [pages]);

	return (
		<Container>
			<>
				{pagess.length ? (
					<>
						<TableHtml>
							<Thead>
								<Tr>
									<Th>ID</Th>
									<Th>Data de criação</Th>
									<Th>Status</Th>
									<Th>Viagem</Th>
									<Th>Bobina</Th>
									<Th>Motorista</Th>
									<Th>Placa</Th>
									<Th>Grupo</Th>
									<Th>Tipo</Th>
								</Tr>
							</Thead>

							<Tbody>
								{data.map(props => (
									<Tr key={String(props?.id)}>
										<Td>{props?.id}</Td>
										<Td>{props?.created_at_formatted}</Td>
										<Td>
											{handleTrasformStringInUpercaseAndToLowerCase({
												dataString: hanfleReturnText(props?.status),
												to: "toUpperCase",
											})}
										</Td>
										<Td>{hanfleReturnText(props?.trip_number)}</Td>
										<Td>{hanfleReturnText(props?.coil_number)}</Td>
										<Td>
											<Link to={`/aprovacao/${props.id}/${props.driver_id}`}>
												{hanfleReturnText(props?.driver_name)}
											</Link>
										</Td>
										<Td>{hanfleReturnText(props?.placa)}</Td>
										<Td>{props?.group_name}</Td>
										<Td>
											{handleTrasformStringInUpercaseAndToLowerCase({
												dataString: props?.type,
												to: "toUpperCase",
											})}
										</Td>
									</Tr>
								))}
							</Tbody>
						</TableHtml>
						<>
							{data.length ? (
								<FooterTable>
									<ButtonPreview
										onClick={() => {
											// @ts-expect-error
											onClickPreview(undefined);
										}}
									>
										<FiArrowLeft size={18} color={theme.colors.natural} />
										<TextSpanLeft>Anterior</TextSpanLeft>
									</ButtonPreview>

									{pagess?.map((page: IDataPagesProps) => (
										<WrapperTextFooter
											key={page?.label}
											background={page?.active}
											onClick={() => {
												onClickNext(Number(page?.label));
												return page.label;
											}}
										>
											<TextNumberPage active={page?.active}>
												{page?.label}
											</TextNumberPage>
										</WrapperTextFooter>
									))}

									<ButtonNext
										onClick={() => {
											// @ts-expect-error
											onClickNext(undefined);
										}}
									>
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
					</>
				) : (
					<WrapperLoading>
						<FiLoader size={34} color={theme.colors.blue_100} />
						<p style={{ marginTop: 12 }}>
							<strong>Carregando, por favor, aguade.</strong>
						</p>
					</WrapperLoading>
				)}
			</>
		</Container>
	);
};
/**
 * EXPORTS
 */
export { Table };
