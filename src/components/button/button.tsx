/**
 * IMPORTS
 */
import { Oval } from "react-loader-spinner";
// typings
import { type IButtonProps } from "./interface";

// styles
import { Container, Title } from "./styles";

const Button = ({
	width,
	height,
	backgroundColor,
	color,
	title,
	weight,
	loading,
	dataTestid,
	disabled,
	...rest
}: IButtonProps) => {
	return (
		<Container
			{...rest}
			data-testid={dataTestid}
			width={width}
			height={height}
			backgroundColor={backgroundColor}
			disabled={disabled}
		>
			{loading ? (
				<Oval
					height={22}
					width={22}
					color={"#0d6efd"}
					wrapperClass=""
					visible={true}
					ariaLabel="oval-loading"
					secondaryColor="#FFF"
					strokeWidth={2}
					strokeWidthSecondary={2}
				/>
			) : (
				<Title color={color ?? "#fff"} weight={weight}>
					{title}
				</Title>
			)}
		</Container>
	);
};

/**
 * EXPORTS
 */
export { Button };
