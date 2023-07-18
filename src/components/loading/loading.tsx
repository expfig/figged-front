/**
 * IMPORTS
 */
import { useTheme } from "styled-components";
import { Oval } from "react-loader-spinner";

// typings
import { type LoadingProps } from "./interface";

// styles
import { ContainerLoading, WrapperIcon } from "./styles";

const Loading = ({
	dataTestId,
	color = "#0d6efd",
	size = 34,
}: LoadingProps) => {
	const theme = useTheme();
	return (
		<ContainerLoading data-testid={dataTestId ?? "component-loading"}>
			<WrapperIcon>
				<Oval
					ariaLabel="oval-loading"
					width={size}
					height={size}
					visible={true}
					color={color}
					wrapperClass=""
					secondaryColor="#3c3535"
					strokeWidth={2}
					strokeWidthSecondary={2}
				/>
				<p style={{ marginTop: 12 }}>
					<strong style={{ color: theme.colors.black_100 }}>
						Carregando, por favor, aguade.
					</strong>
				</p>
			</WrapperIcon>
		</ContainerLoading>
	);
};

/**
 * EXPORTS
 */
export { Loading };
