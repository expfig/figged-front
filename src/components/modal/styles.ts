/**
 * IMPORTS
 */
import ReactModal from "react-modal";
import styled from "styled-components";

const ContainerMdal = styled(ReactModal)`
	width: 100%;
	position: absolute;
	inset: 0;
	background-color: rgba(18, 18, 18, 0.7);
	width: auto;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: #fff;
	bottom: auto;
	border-radius: 4px;
	z-index: 999999;
	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		width: 350px;
		/* height: 100%; */
	}
`;

const WrapperTitle = styled.div`
	width: 100%;
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray_200};
`;

/**
 * EXPORTS
 */
export { ContainerMdal, WrapperTitle };
