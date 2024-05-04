import { Link } from "react-router-dom";
import { CardInfo } from "./CardInfo";
import { CardButton } from "./CardButton";
import template from "@assets/icons/template.svg";
import { StyledCard, StyledCardWrapper, StyledCardImg } from "./styled";
import { type TypeCard } from "@src/types";

const Card: React.FC<TypeCard> = ({ item, type = "main" }) => {
  return (
    <StyledCardWrapper type={type}>
      <Link to={`/detail-info/${item.id}`}>
        {type === "main" && <StyledCardImg src={item.image_id ?? template} />}
      </Link>
      <StyledCard type={type}>
        {type !== "main" && (
          <Link to={`/detail-info/${item.id}`}>
            <img width={80} height={80} src={item.image_id ?? template} />
          </Link>
        )}
        <CardInfo item={item} />
        <CardButton item={item} />
      </StyledCard>
    </StyledCardWrapper>
  );
};

export { Card };
