import { DetailCardImg } from "./DetailCardImg";
import { DetailCardInfo } from "./DetailCardInfo";
import { StyledDetail } from "./styled";
import { TypeArt } from "@src/types";

const DetailCard: React.FC<TypeArt> = (props) => {
  return (
    <StyledDetail>
      <DetailCardImg {...props} />
      <DetailCardInfo {...props} />
    </StyledDetail>
  );
};

export { DetailCard };
