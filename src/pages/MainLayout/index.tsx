import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { StyledLayout } from "./styled";

const MainLayout: React.FC = () => {
  return (
    <StyledLayout>
      <Header />
      <Outlet />
      <Footer />
    </StyledLayout>
  );
};

export { MainLayout };
