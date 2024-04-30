import { Link } from "react-router-dom";
import { CardInfo } from "./CardInfo";
import { CardButton } from "./CardButton";
import template from "@assets/icons/template.svg";
import { StyledCard } from "./styled";
import { type TypeCard } from "@src/types";

const Card: React.FC<TypeCard> = ({ item, type }) => {
  return (
    <StyledCard type="small">
      {type === "small" && (
        <Link to={"/"}>
          <img width={80} height={80} src={item.image_id ?? template} />
        </Link>
      )}
      <CardInfo item={item} />
      <CardButton item={item} />
    </StyledCard>
  );
};

export { Card };
