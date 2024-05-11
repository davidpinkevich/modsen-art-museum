import { useDetailInfo } from "@hooks/useDetailInfo";
import { DetailCard } from "@components/DetailCard";
import { NotFound } from "@components/NotFound";
import { Loading } from "@components/Loading";
import { Container } from "@styles/Container";

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
