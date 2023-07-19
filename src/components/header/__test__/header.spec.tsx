import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";
import theme from "../../../global/styles/theme";

// component
import { Header } from "../header";

const Providers: React.FC = ({ children }: any) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

describe("Teste do componente (Header)", () => {
	it("Deve ser possível renderizar o componente (Header)", () => {
		render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>,
			{
				wrapper: Providers,
			}
		);
	});

	it("Deve ser possível visualizar os titúlos de navegação do o componente (Header)", () => {
		const { getByText } = render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>,
			{
				wrapper: Providers,
			}
		);

		const ElementTitle = getByText("Figged");
		const ElementTitleAprovationPending = getByText("Aprovações Pendentes");
		const ElementTitleAllAproval = getByText("Todas Aprovações");

		expect(ElementTitle.textContent).toBe("Figged");

		expect(ElementTitleAprovationPending.textContent).toBe(
			"Aprovações Pendentes"
		);

		expect(ElementTitleAllAproval.textContent).toBe("Todas Aprovações");
	});

	it("Deve ser possível visualizar os titúlos de navegação do o componente (Header) dentro do (WrapperBorderCustom)", () => {
		const { getByText } = render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>,
			{
				wrapper: Providers,
			}
		);

		const ElementTitleToUpdate = getByText("Home");
		const ElementTitleListOfApprovals = getByText("Lista de Aprovações");

		expect(ElementTitleToUpdate.textContent).toBe("Home");

		expect(ElementTitleListOfApprovals.textContent).toBe("Lista de Aprovações");
	});
});
