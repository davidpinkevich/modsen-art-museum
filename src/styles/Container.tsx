import styled from "styled-components";

const breakPoints = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px"
};

const Container = styled.div`
  max-width: 1310px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
`;

export { Container };
