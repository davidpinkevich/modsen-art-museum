import { CardButton } from "@components/Card/CardButton";
import { createImage } from "@utils/helpers/createImages";
import { StyledDetailWrap, StyledDetailImg, StyledDetailBtn } from "./styled";
import { TypeArt } from "@src/types";

const DetailCardImg: React.FC<TypeArt> = (props) => {
  const image_id = createImage(props.image_id);

  return (
    <StyledDetailWrap>
      <StyledDetailImg src={image_id ?? ""} />
      <StyledDetailBtn>
        <CardButton item={{ ...props, image_id }} />
      </StyledDetailBtn>
    </StyledDetailWrap>
  );
};

export { DetailCardImg };
