import { Routes, Route } from "react-router-dom";
import { Context } from "@constants/context";
import { useLocalStorage } from "@hooks/useLocalStorage";
import { MainLayout } from "@pages/MainLayout";
import { Home } from "@pages/Home";
import { NotFound } from "../NotFound";
import { DetailInfo } from "@pages/DetailInfo";
import { Favorites } from "@pages/Favorites";
import { StyledApp } from "./styled";

const App: React.FC = () => {
  const context = useLocalStorage([], "favorites");

  return (
    <Context.Provider value={context}>
      <StyledApp open={context.open}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="detail-info/:id" element={<DetailInfo />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound type="page" />} />
          </Route>
        </Routes>
      </StyledApp>
    </Context.Provider>
  );
};

export { App };
