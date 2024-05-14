import { type TypeArt } from "@src/types";

import { DetailCardImg } from "./DetailCardImg";
import { DetailCardInfo } from "./DetailCardInfo";
import { StyledDetail } from "./styled";

const DetailCard: React.FC<TypeArt> = (props) => {
  return (
    <StyledDetail>
      <DetailCardImg {...props} />
      <DetailCardInfo {...props} />
    </StyledDetail>
  );
};

export { DetailCard };
