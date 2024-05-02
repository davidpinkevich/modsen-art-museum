import { Link } from "react-router-dom";
import { CardInfo } from "./CardInfo";
import { CardButton } from "./CardButton";
import template from "@assets/icons/template.svg";
import { StyledCard, StyledCardWrapper, StyledCardImg } from "./styled";
import { type TypeCard } from "@src/types";

const Card: React.FC<TypeCard> = ({ item, type = "main" }) => {
  return (
    <StyledCardWrapper type={type}>
      {type === "main" && <StyledCardImg src={item.image_id ?? template} />}
      <StyledCard type={type}>
        {type !== "main" && (
          <Link to={"/"}>
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
