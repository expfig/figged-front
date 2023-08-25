/**
 * IMPORTS
 */
import { useTheme } from "styled-components";
import { Oval } from "react-loader-spinner";

// components
import { Text } from "../../../text/text";

// styles
import { Container } from "./styles";

const LoadingTextPagination = () => {
	const theme = useTheme();
	return (
		<Container>
			<Oval
				height={34}
				width={34}
				color={theme.colors.blue_80}
				wrapperClass=""
				visible={true}
				ariaLabel="oval-loading"
				secondaryColor={theme.colors.brown_300}
				strokeWidth={2}
				strokeWidthSecondary={2}
			/>

			<Text
				marginTop={18}
				text="Carregando..."
				align="center"
				letterHeight={24}
				letterSpacing={0.5}
				color={"#767171"}
				size={16}
				weight="400"
			/>
		</Container>
	);
};

/**
 * EXPORTS
 */
export { LoadingTextPagination };
