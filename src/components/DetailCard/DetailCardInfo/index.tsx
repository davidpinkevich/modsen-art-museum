import { type TypeArt } from "@src/types";

import {
  StyledDetailCardInfo,
  StyledInfoBlock,
  StyledInfoDate,
  StyledInfoName,
  StyledInfoString,
  StyledInfoTitle
} from "./styled";

const DetailCardInfo: React.FC<TypeArt> = ({
  title,
  artist_title,
  date_start,
  date_end,
  date_display,
  dimensions,
  credit_line,
  place_of_origin,
  is_public_domain
}) => {
  return (
    <StyledDetailCardInfo>
      <StyledInfoBlock>
        <StyledInfoTitle>{title}</StyledInfoTitle>
        <StyledInfoName>{artist_title}</StyledInfoName>
        <StyledInfoDate>
          {date_start}-{date_end}
        </StyledInfoDate>
      </StyledInfoBlock>
      <StyledInfoBlock>
        <StyledInfoTitle>Overview</StyledInfoTitle>
        <StyledInfoString>
          Additional information about the period: <span>{date_display}</span>
        </StyledInfoString>
        <StyledInfoString>
          Dimensions: <span>{dimensions}</span>
        </StyledInfoString>
        <StyledInfoString>
          Credit Line: <span>{credit_line}</span>
        </StyledInfoString>
        <StyledInfoString>
          Place of origin: <span>{place_of_origin}</span>
        </StyledInfoString>
        <StyledInfoString>
          <span>{is_public_domain ? "Public" : "Not public"}</span>
        </StyledInfoString>
      </StyledInfoBlock>
    </StyledDetailCardInfo>
  );
};

export { DetailCardInfo };
