import { Link } from "react-router-dom";
import { CardInfo } from "./CardInfo";
import { CardButton } from "./CardButton";
import { LINK_PATH } from "@constants/data";
import template from "@assets/icons/template.svg";
import { StyledCard, StyledCardWrapper, StyledCardImg } from "./styled";
import { type TypeCard } from "@src/types";

const Card: React.FC<TypeCard> = ({ item, type = "main" }) => {
  return (
    <StyledCardWrapper type={type}>
      <Link to={`/${LINK_PATH.DETAIL}/${item.id}`}>
        {type === "main" && (
          <StyledCardImg type="main" src={item.image_id ?? template} />
        )}
      </Link>
      <StyledCard type={type}>
        {type !== "main" && (
          <Link to={`/${LINK_PATH.DETAIL}/${item.id}`}>
            <StyledCardImg type="small" src={item.image_id ?? template} />
          </Link>
        )}
        <CardInfo item={item} />
        <CardButton item={item} />
      </StyledCard>
    </StyledCardWrapper>
  );
};

export { Card };
