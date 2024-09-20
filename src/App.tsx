import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.tsx";
import CookieConsent from "react-cookie-consent";
import { houseColours } from "./data/house-style.ts";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <CookieConsent
        location="bottom"
        buttonText="I Understand"
        cookieName="ingenious-site"
        style={{
          border: `5px solid ${houseColours["--brand-orange"]}`,
          borderRadius: "5px",
          fontSize: "22px",
          background: houseColours["--l-grey"],
          display: "flex",
          alignItems: "center",
        }}
        buttonStyle={{
          color: houseColours["--l-cream"],
          backgroundColor: houseColours["--brand-orange"],
          fontWeight: 300,
          borderRadius: "5px",
          border: `2px solid ${houseColours["--brand-orange"]}`,
        }}
        expires={150}
      >
        This website uses essential cookies only for security and to enhance the
        user experience. For more information on how we use your data, please
        see our{" "}
        <a
          className="brand"
          target="_blank"
          href="/assets/ingenious-privacy-notice-professional-services.pdf"
        >
          privacy policy
        </a>
        .
      </CookieConsent>
    </>
  );
}

export default App;
