import React from "react";
import { Header, Nav, About, Experience, Services, Portofolio, Testimonials, Contact, Footer } from "./components";


function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Testimonials />
      <Experience />
      {/* <Services /> */}
      <Portofolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
