/**
 * IMPORTS
 */

import React from "react";
import { ThemeProvider } from "styled-components";

import { render, screen } from "@testing-library/react";

// components
import { Loading } from "../loading";

// styles
import theme from "../../../global/styles/theme";

const Providers: React.FC = ({ children }: any) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

describe("Component Loading Test", () => {
	it("should renderizar o component", () => {
		const { getByTestId } = render(<Loading dataTestId="loading-component" />, {
			wrapper: Providers,
		});

		const elementLoading = getByTestId("loading-component");

		expect(elementLoading).toBeTruthy();
	});

	it("should be possible to visualize the text (Loading, please wait.) and the loading icon when the component is used", () => {
		const { getByTestId } = render(<Loading dataTestId="loading-component" />, {
			wrapper: Providers,
		});

		// procurando pelo icone
		const elementLoadingIcon = getByTestId("oval-loading");

		// procurando pelo texto xxxx
		const elementLoadingText = screen.getByText(
			"Carregando, por favor, aguade."
		);

		// expero que o icone de loading esteja em tela
		expect(elementLoadingIcon).toBeTruthy();

		// expero que o o texto de loading esteja em tela
		expect(elementLoadingText).toBeTruthy();
	});
});
