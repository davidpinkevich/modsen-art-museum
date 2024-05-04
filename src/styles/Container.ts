import styled from "styled-components";

const Container = styled.div<{ content: string }>`
  display: flex;
  justify-content: ${(props) =>
    props.content === "center" ? "center" : "space-between"};
  max-width: 1310px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
`;

export { Container };
