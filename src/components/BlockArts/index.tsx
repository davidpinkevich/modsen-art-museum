import { memo } from "react";
import { ARTS_BLOCK } from "@constants/data";
import { Loading } from "../Loading";
import { Card } from "../Card";
import { NotFound } from "../NotFound";
import { Container } from "@styles/Container";
import {
  StyledBlockArts,
  StyledBlockArtTitle,
  StyledBlockArtInfo,
  StyledBlockItems,
  StyledItemsWrap
} from "./styled";
import { type TypeBlockArts } from "@src/types";

const BlockArts: React.FC<TypeBlockArts> = memo(
  ({ data, load, type = "main" }) => {
    return (
      <Container content="center">
        <StyledBlockArts>
          <StyledBlockArtTitle>{ARTS_BLOCK[type].title}</StyledBlockArtTitle>
          <StyledBlockArtInfo>{ARTS_BLOCK[type].info}</StyledBlockArtInfo>
          <StyledItemsWrap type={type}>
            {load && <Loading />}
            {!!data.length && !load && (
              <StyledBlockItems type={type}>
                {data.map((item) => (
                  <Card key={item.id} item={item} type={type} />
                ))}
              </StyledBlockItems>
            )}
            {!data.length && !load && <NotFound type={type} />}
          </StyledItemsWrap>
        </StyledBlockArts>
      </Container>
    );
  }
);

export { BlockArts };
