import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "@pages/MainLayout";
import { Home } from "@pages/Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="detail" element={<div>detail</div>} />
            <Route path="favorites" element={<div>favorites</div>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export { App };
