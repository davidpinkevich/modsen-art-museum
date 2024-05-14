import { createImage } from "@utils/helpers/createImages";
import { type TypeArt } from "@src/types";

import { CardButton } from "@components/Card/CardButton";

import { StyledDetailBtn, StyledDetailImg, StyledDetailWrap } from "./styled";

const DetailCardImg: React.FC<TypeArt> = (props) => {
  const image = createImage(props.image_id);

  return (
    <StyledDetailWrap>
      <StyledDetailImg src={image ?? ""} />
      <StyledDetailBtn>
        <CardButton item={{ ...props, image_id: image }} />
      </StyledDetailBtn>
    </StyledDetailWrap>
  );
};

export { DetailCardImg };
