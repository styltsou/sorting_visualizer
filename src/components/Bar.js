import React from "react";
import styled from "styled-components";

const Div = styled.div`
	width: 0.6rem;
	height: ${(props) => `${props.height / 10}rem`};
	margin: auto 1px 0 1px;
	background-color: ${(props) =>
		props.isCompared === true ? "var(--color-green)" : "var(--color-primary)"};
`;

const Bar = ({ height, isCompared }) => {
	return <Div height={height} isCompared={isCompared} />;
};

export default Bar;
