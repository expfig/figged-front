/**
 * IMPORTS
 */
import { FiLoader } from "react-icons/fi";

// typings
import { type LoadingProps } from "./interface";

// styles
import { ContainerLoading, WrapperIcon } from "./styles";

const Loading = ({ color = "#0d6efd", size = 34 }: LoadingProps) => {
	return (
		<ContainerLoading>
			<WrapperIcon>
				<FiLoader size={size} color={color} />
				<p style={{ marginTop: 12 }}>
					<strong>Carregando, por favor, aguade.</strong>
				</p>
			</WrapperIcon>
		</ContainerLoading>
	);
};

/**
 * EXPORTS
 */
export { Loading };
