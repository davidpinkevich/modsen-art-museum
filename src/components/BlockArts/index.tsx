import { ARTS_BLOCK } from "@constants/data";
import { Loading } from "../Loading";
import { Card } from "../Card";
import { createImages } from "@utils/helpers/createImages";
import {
  StyledBlockArts,
  StyledBlockArtTitle,
  StyledBlockArtInfo,
  StyledBlockItems
} from "./styled";
import { Container } from "@styles/Container";
import { type TypeBlockArts } from "@src/types";

const BlockArts: React.FC<TypeBlockArts> = ({ data, load, type = "main" }) => {
  return (
    <Container content="center">
      <StyledBlockArts>
        <StyledBlockArtTitle>{ARTS_BLOCK[type].title}</StyledBlockArtTitle>
        <StyledBlockArtInfo>{ARTS_BLOCK[type].info}</StyledBlockArtInfo>
        {load && <Loading />}
        <StyledBlockItems type={type}>
          {!load &&
            createImages(data).map((item) => (
              <Card key={item.id} item={item} type={type} />
            ))}
        </StyledBlockItems>
      </StyledBlockArts>
    </Container>
  );
};

export { BlockArts };
