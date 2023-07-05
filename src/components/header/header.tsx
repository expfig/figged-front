/**
 * IMPORTS
 */
import { useNavigate } from "react-router-dom";
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
	const navigate = useNavigate();

	const handleReloadPage = () => {
		navigate("/");
		window.location.reload();
	};
	return (
		<>
			<Container>
				<WrapperTitle>
					<Title to={"/"} onClick={handleReloadPage}>
						Figged
					</Title>
				</WrapperTitle>

				<WrapperTitleRighr>
					<TitleTwo to={"aprovacao-pedentes"}>Aprovação Pendentes</TitleTwo>
					<TitleTwo to={"aprovation-listing"}>Todas Aprovação</TitleTwo>
				</WrapperTitleRighr>
			</Container>

			<WrapperBorderCustom>
				<BorderCustom>
					<WrapperTitleBorder>
						<SubTitleTwo to={"aprovation-listing"}>
							Lista de Aprovações
						</SubTitleTwo>
						<span>/</span>
						<SubTitleTwo to={"aprovacao"}>Atualizar</SubTitleTwo>
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
