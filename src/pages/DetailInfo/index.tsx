import { useDetailInfo } from "@hooks/useDetailInfo";
import { Container } from "@styles/Container";

import { DetailCard } from "@components/DetailCard";
import { Loading } from "@components/Loading";
import { NotFound } from "@components/NotFound";

const DetailInfo: React.FC = () => {
  const { art, loadArt } = useDetailInfo();

  return (
    <Container content="center">
      {art && <DetailCard {...art} />}
      {!art && !loadArt && <NotFound type="error" />}
      {loadArt && <Loading />}
    </Container>
  );
};

export { DetailInfo };
