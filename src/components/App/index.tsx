import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Context } from "@constants/context";
import { useAppContext } from "@hooks/useAppContext";
import { MainLayout } from "@pages/MainLayout";
import { Home } from "@pages/Home";
import { StyledApp } from "./styled";

const App: React.FC = () => {
  const context = useAppContext();

  return (
    <BrowserRouter>
      <Context.Provider value={context}>
        <StyledApp open={context.open}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="detail" element={<div>detail</div>} />
              <Route path="favorites" element={<div>favorites</div>} />
            </Route>
          </Routes>
        </StyledApp>
      </Context.Provider>
    </BrowserRouter>
  );
};

export { App };
