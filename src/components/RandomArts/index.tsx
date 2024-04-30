import { Loading } from "../Loading";
import { Card } from "../Card";
import { createImages } from "@utils/helpers/createImages";
import { Container } from "@styles/Container";
import {
  StyledRandomArts,
  StyledRandomTitle,
  StyledRandomInfo,
  StyledRandomItems
} from "./styled";
import { type TypeRandomArts } from "@src/types";

const RandomArts: React.FC<TypeRandomArts> = ({ data, load }) => {
  return (
    <Container content="center">
      <StyledRandomArts>
        <StyledRandomTitle>Here some more</StyledRandomTitle>
        <StyledRandomInfo>Other works for you</StyledRandomInfo>
        {load && <Loading />}
        <StyledRandomItems>
          {!load &&
            createImages(data).map((item) => (
              <Card key={item.id} item={item} type="small" />
            ))}
        </StyledRandomItems>
      </StyledRandomArts>
    </Container>
  );
};

export { RandomArts };
