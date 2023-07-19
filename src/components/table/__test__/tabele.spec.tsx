/**
 * IMPORTS
 */
import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { render } from "@testing-library/react";
import userfireEvent from "@testing-library/user-event";

import theme from "../../../global/styles/theme";

// components
import { Table } from "../table";

// mock-data
import { pages, dataTable } from "../__mock-data__/mock-table";

const Providers: React.FC = ({ children }: any) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

describe("Table test of components", () => {
	it("should render o table component", () => {
		render(
			<Table
				data={[]}
				pages={[]}
				firstPage={1}
				lastPage={2}
				isLoading={false}
				onClickNext={(pageCount: number) => {
					return pageCount;
				}}
				onClickPreview={(pageCount: number) => {}}
			/>,
			{
				wrapper: Providers,
			}
		);
	});

	it("should be possible to view the icon and the loading text when the isLoading property is set to false", () => {
		const { getByTestId, getByText } = render(
			<Table
				data={[]}
				pages={[]}
				firstPage={1}
				lastPage={2}
				isLoading={true}
				onClickNext={(pageCount: number) => {
					return pageCount;
				}}
				onClickPreview={(pageCount: number) => {}}
			/>,
			{
				wrapper: Providers,
			}
		);

		const elementIconSvgOval = getByTestId("oval-loading");
		const textLoadingPleaseWait = getByText("Carregando, por favor, aguarde.");

		expect(elementIconSvgOval).toBeTruthy();

		expect(textLoadingPleaseWait.textContent).toBe(
			"Carregando, por favor, aguarde."
		);
	});

	it("should be possible to render the title of the table correctly being them (ID, Date created, Status, Trip, Coil, Driver, Plate, Group, Type)", () => {
		const { getByText } = render(
			<BrowserRouter>
				<Table
					data={dataTable}
					pages={pages}
					firstPage={1}
					lastPage={2}
					isLoading={false}
					onClickNext={(pageCount: number) => {
						return pageCount;
					}}
					onClickPreview={(pageCount: number) => {}}
				/>
			</BrowserRouter>,
			{
				wrapper: Providers,
			}
		);

		const ElementTitleID = getByText("ID");
		const ElementTitleCreatedAt = getByText("Data de criação");
		const ElementTitleStatus = getByText("Status");
		const ElementTitleTrip = getByText("Viagem");
		const ElementTitleCoil = getByText("Bobina");
		const ElementTitleDriver = getByText("Motorista");
		const ElementTitleGroup = getByText("Grupo");
		const ElementTitleType = getByText("Tipo");

		expect(ElementTitleID.textContent).toBe("ID");
		expect(ElementTitleCreatedAt.textContent).toBe("Data de criação");
		expect(ElementTitleStatus.textContent).toBe("Status");
		expect(ElementTitleTrip.textContent).toBe("Viagem");
		expect(ElementTitleCoil.textContent).toBe("Bobina");
		expect(ElementTitleDriver.textContent).toBe("Motorista");
		expect(ElementTitleGroup.textContent).toBe("Grupo");
		expect(ElementTitleType.textContent).toBe("Tipo");
	});

	it("must be possible to call the onClickNext function at least once", async () => {
		const handleMockOnclickNext = jest.fn();
		const handleMockOnclickPreview = jest.fn();

		const { getByTestId } = render(
			<BrowserRouter>
				<Table
					data={dataTable}
					pages={pages}
					firstPage={1}
					lastPage={2}
					isLoading={false}
					onClickNext={(pageCount: number) => {
						handleMockOnclickNext();
						return pageCount;
					}}
					onClickPreview={(pageCount: number) => {
						handleMockOnclickPreview();
					}}
				/>
			</BrowserRouter>,
			{
				wrapper: Providers,
			}
		);

		const elementButtonClickNext = getByTestId("button-clickNext");
		const elementButtonClickPreview = getByTestId("button-clickPreview");

		await userfireEvent.setup().click(elementButtonClickNext);

		await userfireEvent.setup().click(elementButtonClickPreview);

		// espero que uma função fictícia seja chamada.
		expect(handleMockOnclickNext).toHaveBeenCalledTimes(1);

		// espero que uma função fictícia seja chamada.
		expect(handleMockOnclickPreview).toHaveBeenCalledTimes(1);
	});
});
