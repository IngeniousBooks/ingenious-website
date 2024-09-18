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
        buttonText="Accept"
        cookieName="ingenious-site"
        style={{
          border: `5px solid ${houseColours["--brand-orange"]}`,
          borderRadius: "5px",
          fontSize: "22px",
          background: houseColours["--l-grey"],
        }}
        declineButtonText="Reject"
        enableDeclineButton
        buttonStyle={{
          color: houseColours["--white"],
          backgroundColor: houseColours["--brand-orange"],
          borderRadius: "5px",
          fontSize: "14px",
        }}
        declineButtonStyle={{
          color: houseColours["--white"],
          backgroundColor: houseColours["--brand-orange"],
          borderRadius: "5px",
          fontSize: "14px",
        }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </>
  );
}

export default App;
