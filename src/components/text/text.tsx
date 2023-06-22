/**
 * IMPORTS
 */
import React from "react";
import { TextStyled } from "./styles";
import { type ITextProps } from "./interface";

const Text: React.FC<ITextProps> = ({
	id,
	text,
	color,
	size,
	align,
	marginBottom,
	marginTop,
	marginLeft,
	marginRight,
	margin,
	weight,
	textDecoration,
	ellipsis,
	width,
	...rest
}) => (
	<TextStyled
		id={id}
		color={color}
		width={width}
		size={size}
		align={align}
		marginBottom={marginBottom}
		marginTop={marginTop}
		marginLeft={marginLeft}
		marginRight={marginRight}
		margin={margin}
		weight={weight}
		textDecoration={textDecoration}
		ellipsis={ellipsis}
		{...rest}
	>
		{text}
	</TextStyled>
);

/**
 * EXPORTS
 */
export { Text };
