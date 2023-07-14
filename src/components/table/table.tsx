/**
 * IMPORTS
 */

import { useEffect, useState } from "react";

import { useTheme } from "styled-components";

import { Link } from "react-router-dom";
import { Text } from "../text";
import { FiLoader } from "react-icons/fi";

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
	ImageNotFoundData,
	WrapperImageNotFoundData,
	// ButtonPreview,
	// TextSpanLeft,
	// ButtonNext,
	// TextSpanRight,
	// WrapperTextFooter,
	// TextNumberPage,
} from "./styles";
import { PaginationFooter } from "../pagination-footer";

const Table = ({
	data,
	pages,
	onClickPreview,
	onClickNext,
	firstPage,
	lastPage,
}: IDataTableProps) => {
	const theme = useTheme();

	const [pageData, setPageData] = useState<IDataPagesProps[]>([]);

	useEffect(() => {
		setPageData(pages);
	}, [pages]);

	return (
		<Container>
			<>
				{pageData.length ? (
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
									<PaginationFooter
										pageData={pageData}
										firstPage={firstPage}
										lastpage={lastPage}
										isLoadingPagination={false}
										onClickNext={(paramsPage: number) => {
											onClickNext(paramsPage);
										}}
										onClickPreview={(paramsPage: number) => {
											onClickPreview(paramsPage);
										}}
									/>
								</FooterTable>
							) : (
								<WrapperImageNotFoundData>
									<ImageNotFoundData
										src="https://img.myloview.com.br/posters/icone-da-pagina-do-arquivo-do-documento-do-prazo-do-horario-400-112384520.jpg"
										alt="not-found"
									/>
									<Text
										width={"100%"}
										text={`Nenhum registro encontrado...`}
										align="center"
										letterHeight={18}
										letterSpacing={0.5}
										color={theme.colors.black_100}
										size={18}
										weight="600"
									/>
								</WrapperImageNotFoundData>
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
