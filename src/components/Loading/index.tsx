import { SpanOne, SpanThree, SpanTwo, StyledLoading } from "./styled";

const Loading: React.FC = () => {
  return (
    <StyledLoading>
      Search arts
      <SpanOne></SpanOne>
      <SpanTwo></SpanTwo>
      <SpanThree></SpanThree>
    </StyledLoading>
  );
};

export { Loading };
