import {
  StyledDetailCardInfo,
  StyledInfoBlock,
  StyledInfoTitle,
  StyledInfoName,
  StyledInfoDate,
  StyledInfoString
} from "./styled";
import { TypeArt } from "@src/types";

const DetailCardInfo: React.FC<TypeArt> = (props) => {
  return (
    <StyledDetailCardInfo>
      <StyledInfoBlock>
        <StyledInfoTitle>{props.title}</StyledInfoTitle>
        <StyledInfoName>{props.artist_title}</StyledInfoName>
        <StyledInfoDate>
          {props.date_start}-{props.date_end}
        </StyledInfoDate>
      </StyledInfoBlock>
      <StyledInfoBlock>
        <StyledInfoTitle>Overview</StyledInfoTitle>
        <StyledInfoString>
          Additional information about the period:{" "}
          <span>{props.date_display}</span>
        </StyledInfoString>
        <StyledInfoString>
          Dimensions: <span>{props.dimensions}</span>
        </StyledInfoString>
        <StyledInfoString>
          Credit Line: <span>{props.credit_line}</span>
        </StyledInfoString>
        <StyledInfoString>
          Place of origin: <span>{props.place_of_origin}</span>
        </StyledInfoString>
        <StyledInfoString>
          <span>{props.is_public_domain ? "Public" : "Not public"}</span>
        </StyledInfoString>
      </StyledInfoBlock>
    </StyledDetailCardInfo>
  );
};

export { DetailCardInfo };
