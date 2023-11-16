"use client";
import React from "react";
import Header from "../components/headers/headerGeneral/headerGeneral";
import Footer from "../components/footer/footerGeneral/footerGeneral";
import ProductsPage from "../components/views/productsPage";
import { Container } from "../styles/styled";

export default function Home() {
  return (
    <Container>
      <Header />
      <ProductsPage />
      <Footer />
    </Container>
  );
};
