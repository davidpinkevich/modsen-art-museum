import React from "react";
import { Outlet } from "react-router-dom";
import ErrorBoundary from "@components/ErrorBoundary";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { StyledLayout } from "./styled";

const MainLayout: React.FC = () => {
  return (
    <StyledLayout>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <ErrorBoundary>
        <main>
          <Outlet />
        </main>
      </ErrorBoundary>
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </StyledLayout>
  );
};

export { MainLayout };
