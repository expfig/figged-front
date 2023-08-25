/**
 * IMPORTS
 */
import {
	Container,
	WrapperTitle,
	Title,
	WrapperTitleRighr,
	TitleTwo,
	WrapperBorderCustom,
	BorderCustom,
	SubTitleTwo,
	WrapperTitleBorder,
} from "./styles";

const Header = () => {
	return (
		<>
			<Container>
				<WrapperTitle>
					<Title to={"/"}>Figged</Title>
				</WrapperTitle>

				<WrapperTitleRighr>
					<TitleTwo to={"aprovacao-pedentes"}>Aprovações Pendentes</TitleTwo>
					<TitleTwo to={"aprovation-listing"}>Todas Aprovações</TitleTwo>
				</WrapperTitleRighr>
			</Container>

			<WrapperBorderCustom>
				<BorderCustom>
					<WrapperTitleBorder>
						<SubTitleTwo to={"/"}>Home</SubTitleTwo>
						<span style={{ color: "#666666" }}>/</span>
						<SubTitleTwo to={"aprovation-listing"}>
							Lista de Aprovações
						</SubTitleTwo>
					</WrapperTitleBorder>
				</BorderCustom>
			</WrapperBorderCustom>
		</>
	);
};

/**
 * EXPORTS
 */
export { Header };
