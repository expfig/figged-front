import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";
import userfireEvent from "@testing-library/user-event";

// component
import { Button } from "../button";

// styles
import theme from "../../../global/styles/theme";

const Providers: React.FC = ({ children }: any) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

describe("Button Component Test", () => {
	it("should be possible to render the Button component.", () => {
		const { getByTestId } = render(<Button dataTestid="component-button" />, {
			wrapper: Providers,
		});

		const buttonElement = getByTestId("component-button");

		expect(buttonElement).toBeTruthy();
	});

	it("should be possible to render the title (Add) if the loding inside the button component is (false)", () => {
		const { getByTestId } = render(
			<Button
				dataTestid="button-component"
				title="Adicionar"
				width={300}
				height={45}
				loading={false}
			/>,
			{
				wrapper: Providers,
			}
		);

		const element = getByTestId("button-component");

		// vamos encontrar o texto passado para o botão
		const textElement = element.firstChild?.textContent;

		expect(textElement).toBe("Adicionar");
	});

	it("should be possible to visualize the loading icon when the button receives the loading property as (true)", () => {
		const { getByTestId } = render(
			<Button
				dataTestid="button-component"
				title="Adicionar"
				width={300}
				height={45}
				loading={true}
			/>,
			{
				wrapper: Providers,
			}
		);

		const elementButton = getByTestId("button-component");

		const elementSvgIcon = getByTestId("oval-loading");

		// espero que encontre um elemento butão em tela
		expect(elementButton).toBeTruthy();

		// espero que encontre um elemento icone
		expect(elementSvgIcon).toBeTruthy();
	});

	it("must be possible to call the function (onClick) at least once from the Button", async () => {
		const onClickTestingMock = jest.fn();

		const { getByTestId } = render(
			<Button
				dataTestid="component-button"
				title="Adiconar Item"
				width={"100%"}
				height={45}
				loading={false}
				onClick={() => onClickTestingMock()}
			/>,
			{
				wrapper: Providers,
			}
		);

		const buttonElement = getByTestId("component-button");

		// encontrou o elemento e vamos selecionar o onClick dele
		await userfireEvent.setup().click(buttonElement);
		await userfireEvent.setup().click(buttonElement);

		// Espero que uma função fictícia seja chamada.
		expect(onClickTestingMock).toHaveBeenCalledTimes(2);
	});
});
