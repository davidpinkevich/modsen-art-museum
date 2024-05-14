import { Routes, Route } from "react-router-dom";
import { Context } from "@constants/context";
import { useLocalStorage } from "@hooks/useLocalStorage";
import { MainLayout } from "@pages/MainLayout";
import { Home } from "@pages/Home";
import { NotFound } from "../NotFound";
import { DetailInfo } from "@pages/DetailInfo";
import { Favorites } from "@pages/Favorites";
import { StyledApp } from "./styled";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "detail-info/:id", element: <DetailInfo /> },
      { path: "favorites", element: <Favorites /> },
      { path: "*", element: <NotFound type="page" /> }
    ]
  }
];

const App: React.FC = () => {
  const context = useLocalStorage([], "favorites");

  return (
    <Context.Provider value={context}>
      <StyledApp open={context.open}>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element}>
              {route.children &&
                route.children.map((child, childIndex) => (
                  <Route key={childIndex} {...child} />
                ))}
            </Route>
          ))}
        </Routes>
      </StyledApp>
    </Context.Provider>
  );
};

export { App };
