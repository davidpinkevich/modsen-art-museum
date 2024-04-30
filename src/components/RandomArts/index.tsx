import { Loading } from "../Loading";
import { Card } from "../Card";
import { createImages } from "@utils/helpers/createImages";
import { Container } from "@styles/Container";
import {
  StyledRandomArts,
  StyledBlockArtTitle,
  StyledBlockArtInfo,
  StyledRandomItems
} from "./styled";
import { type TypeRandomArts } from "@src/types";

const RandomArts: React.FC<TypeRandomArts> = ({ data, load }) => {
  return (
    <Container content="center">
      <StyledRandomArts>
        <StyledBlockArtTitle>Here some more</StyledBlockArtTitle>
        <StyledBlockArtInfo>Other works for you</StyledBlockArtInfo>
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
