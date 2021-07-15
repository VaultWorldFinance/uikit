import React from "react";
import styled, { keyframes } from "styled-components";
import PanIcon from "./PanIcon";
import { SpinnerProps } from "./types";

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(10px);
	}
	100% {
		transform: translatey(0px);
	}
`;

const Container = styled.div`
  position: relative;
`;

const FloatingPanIcon = styled(PanIcon)`
  position: absolute;
  top: 40px;
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <FloatingPanIcon width={`${size}px`} />
    </Container>
  );
};

export default Spinner;