/**
 * IMPORTS
 */
import React from "react";
import { ThemeProvider } from "styled-components";

import { render } from "@testing-library/react";

// component
import { Text } from "../text";

// styles
import theme from "../../../global/styles/theme";

const Providers: React.FC = ({ children }: any) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

describe("Text from Test Component", () => {
	it("should, if possible, viazualize the component (text) on screen along with the text that is passed to it", () => {
		const { getByTestId } = render(
			<Text
				dataTestId="text-component"
				marginTop={18}
				text="Text de Teste"
				align="left"
				letterHeight={24}
				letterSpacing={0.5}
				color={theme.colors.black_100}
				size={24}
				weight="600"
				marginBottom={30}
			/>,
			{
				wrapper: Providers,
			}
		);

		const elementTextComponent = getByTestId("text-component");

		expect(elementTextComponent).toBeTruthy();
	});
});
