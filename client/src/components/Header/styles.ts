import styled from "styled-components";

export const HeaderComponent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const LogoComponent = styled.h1`
	font-size: 1.875rem;
	font-weight: 400;

	padding: 1.5rem;

	span {
		font-weight: 700;
	}
`;

export const DescriptionComponent = styled.p`
	display: flex;
	align-items: center;

	font-size: 1.4rem;
	font-weight: 400;
	line-height: 2rem;
	text-align: center;

	padding: 1.5rem;

	height: calc(100vh - 257px);
`;
