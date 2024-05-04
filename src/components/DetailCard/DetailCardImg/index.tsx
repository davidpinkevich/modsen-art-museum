import { CardButton } from "@components/Card/CardButton";
import { createImage } from "@utils/helpers/createImages";
import { StyledDetailWrap, StyledDetailImg, StyledDetailBtn } from "./styled";
import { type TypeArt } from "@src/types";

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
