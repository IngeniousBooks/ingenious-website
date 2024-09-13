import { createBrowserRouter, useLocation } from "react-router-dom";
import Home from "./home-page.tsx";
import ErrorPage from "./error-page.tsx";
import ContactSection from "../components/contact-section/contact-section.tsx";
import Header from "../components/header-section/header.tsx";
import AboutSection from "../components/about-section/about-section.tsx";
import Footer from "../components/footer-section/footer.tsx";
import { ReactNode, useLayoutEffect } from "react";

interface WrapperProps {
  children: ReactNode;
}

function Wrapper({ children }: WrapperProps) {
  const location = useLocation();
  const behaviour = location.pathname.includes("/") ? "smooth" : "instant";

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: behaviour });
  }, [location.pathname]);

  return children;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Wrapper>
          <Header />
          <Home />
          <Footer />
        </Wrapper>
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: (
      <>
        <Wrapper>
          <Header />
          <Home />
          <Footer />
        </Wrapper>
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: (
      <>
        <Wrapper>
          <Header />
          <AboutSection />
          <Footer />
        </Wrapper>
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
