import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "@pages/MainLayout";
import { Home } from "@pages/Home";
import { FavoritesContext } from "@constants/context";
import { useLocalStorage } from "@hooks/useLocalStorage";

const App: React.FC = () => {
  const [favorites, addFavorite] = useLocalStorage([], "favorites");

  return (
    <BrowserRouter>
      <FavoritesContext.Provider value={{ favorites, addFavorite }}>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="detail" element={<div>detail</div>} />
              <Route path="favorites" element={<div>favorites</div>} />
            </Route>
          </Routes>
        </div>
      </FavoritesContext.Provider>
    </BrowserRouter>
  );
};

export { App };
