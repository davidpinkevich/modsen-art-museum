import { Link } from "react-router-dom";

import { LINK_PATH } from "@constants/data";
import { cutString } from "@utils/helpers/cutString";
import { type TypeCard } from "@src/types";

import {
  StyledCardInfo,
  StyledCardName,
  StyledCardPublic,
  StyledCardTitle
} from "./styled";

const CardInfo: React.FC<TypeCard> = ({ item }) => {
  return (
    <StyledCardInfo>
      <Link to={`/${LINK_PATH.DETAIL}/${item.id}`}>
        <StyledCardTitle>{cutString(item.title)}</StyledCardTitle>
      </Link>
      <StyledCardName>{cutString(item.artist_title)}</StyledCardName>
      <StyledCardPublic>
        {item.is_public_domain ? "Public" : "Not Public"}
      </StyledCardPublic>
    </StyledCardInfo>
  );
};

export { CardInfo };
