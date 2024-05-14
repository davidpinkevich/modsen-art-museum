import { memo } from "react";

import { ARTS_BLOCK } from "@constants/data";
import { Container } from "@styles/Container";
import { type TypeBlockArts } from "@src/types";

import { Card } from "../Card";
import { Loading } from "../Loading";
import { NotFound } from "../NotFound";

import {
  StyledBlockArtInfo,
  StyledBlockArts,
  StyledBlockArtTitle,
  StyledBlockItems,
  StyledItemsWrap
} from "./styled";

const BlockArts: React.FC<TypeBlockArts> = memo(
  ({ data, load, type = "main" }) => {
    return (
      <Container content="center">
        <StyledBlockArts>
          <StyledBlockArtTitle>{ARTS_BLOCK[type].title}</StyledBlockArtTitle>
          <StyledBlockArtInfo>{ARTS_BLOCK[type].info}</StyledBlockArtInfo>
          <StyledItemsWrap type={type}>
            {load && <Loading />}
            {data && !!data.length && !load && (
              <StyledBlockItems type={type}>
                {data.map((item) => (
                  <Card key={item.id} item={item} type={type} />
                ))}
              </StyledBlockItems>
            )}
            {!data?.length && !load && (
              <NotFound type={data ? "main" : "error"} />
            )}
          </StyledItemsWrap>
        </StyledBlockArts>
      </Container>
    );
  }
);

export { BlockArts };
