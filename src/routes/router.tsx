import { createBrowserRouter } from "react-router-dom";
import Home from "./home-page.tsx";
import ErrorPage from "./error-page.tsx";
import ContactSection from "../components/contact-section/contact-section.tsx";
import Header from "../components/header-section/header.tsx";
import AboutSection from "../components/about-section/about-section.tsx";
import Footer from "../components/footer-section/footer.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: (
      <>
        <Header />
        <AboutSection />
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: (
      <>
        <Header />
        <ContactSection />
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
  },
]);

export default router;
