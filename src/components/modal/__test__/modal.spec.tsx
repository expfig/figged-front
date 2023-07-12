import React from "react";
import { ThemeProvider } from "styled-components";

import { render, screen } from "@testing-library/react";
// import userfireEvent from "@testing-library/user-event";

// styles
import theme from "../../../global/styles/theme";

// components
import { Modal } from "../modal";

const Providers: React.FC = ({ children }: any) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

describe("Modal Component Test", () => {
	it("must be possible to render the modal on screen when the property (isOpen is true).", () => {
		render(
			<Modal isOpen={true} onRequestCloseClick={() => {}}>
				<p>Olá, sou o modal !!!</p>
			</Modal>,
			{
				wrapper: Providers,
			}
		);

		const element = screen.getByText("Olá, sou o modal !!!");

		expect(element).toBeTruthy();
	});
});
