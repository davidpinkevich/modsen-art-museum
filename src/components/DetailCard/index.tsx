import { DetailCardImg } from "./DetailCardImg";
import { DetailCardInfo } from "./DetailCardInfo";
import { StyledDetail } from "./styled";
import { type TypeArt } from "@src/types";

const DetailCard: React.FC<TypeArt> = (props) => {
  return (
    <StyledDetail>
      <DetailCardImg {...props} />
      <DetailCardInfo {...props} />
    </StyledDetail>
  );
};

export { DetailCard };
