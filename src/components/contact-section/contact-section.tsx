import { ChangeEvent, FormEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";
import submitContact from "../../utils/submit-contact";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isInvalidSubmit, setIsInvalidSubmit] = useState(false);
  const [invalidSubmitMessage, setInvalidSubmitMessage] = useState("");
  const [hasSent, setHasSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState("");

  const handleFormReset = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setSearchParams([]);
    setHasSent(false);
  };

  const isValidEmail = (email: string | null): boolean => {
    const validEmailRegex =
      /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    if (!email) return false;

    const emailParts = email.split("@");

    if (emailParts.length !== 2) return false;

    const account = emailParts[0];
    const domain = emailParts[1];

    if (account.length > 64) return false;
    else if (domain.length > 255) return false;

    const domainParts = domain.split(".");

    if (domainParts.some((part) => part.length > 63)) return false;

    return validEmailRegex.test(email);
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const formData = {
      contactName: searchParams.get("contact-name"),
      email: searchParams.get("email"),
      message: searchParams.get("message"),
      "g-recaptcha-response": token,
    };

    if (!isValidEmail(formData.email)) {
      setInvalidSubmitMessage(
        "Please check you've provided a valid email address"
      );
      setIsInvalidSubmit(true);
      setIsLoading(false);
      return;
    }
    if (
      typeof formData.contactName === "string" &&
      typeof formData.email === "string" &&
      typeof formData.message === "string"
    ) {
      try {
        const responseStatus = await submitContact(
          formData.contactName,
          formData.email,
          formData.message
        );
        if (responseStatus === 200) {
          setIsLoading(false);
          setHasSent(true);
        } else {
          setInvalidSubmitMessage("Something went wrong. Please try again...");
          setIsInvalidSubmit(true);
          setIsLoading(false);
        }
      } catch {
        setInvalidSubmitMessage("Something went wrong. Please try again...");
        setIsInvalidSubmit(true);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    }
  }

  function handleChange({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setIsInvalidSubmit(false);
    setSearchParams((prev) => {
      const newSearchParams = new URLSearchParams(prev);

      if (newSearchParams.has(name)) {
        newSearchParams.set(name, value);
      } else {
        newSearchParams.append(name, value);
      }

      return newSearchParams;
    });
  }

  return (
    <section className="contact-section">
      <h2 id="contact">Let's discuss your project</h2>
      <p className="light mid-heading">team@ingenious-books.com</p>
      <p className="light mid-heading">(+44) 07822 014130</p>

      <motion.div layout className="contact-form-renderer">
        {!hasSent && (
          <motion.form
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
          >
            <label>
              Name{" "}
              <input
                type="text"
                name="contact-name"
                id="contact-name"
                value={searchParams.get("contact-name") || ""}
                onChange={handleChange}
                minLength={2}
                required
                disabled={isLoading}
              />
            </label>
            <label>
              Email address
              <input
                type="email"
                name="email"
                id="email"
                value={searchParams.get("email") || ""}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                id="message"
                rows={8}
                value={searchParams.get("message") || ""}
                onChange={handleChange}
                minLength={25}
                required
                disabled={isLoading}
              />
            </label>
            {isInvalidSubmit && <p>{invalidSubmitMessage}</p>}

            <div className="rc-container">
              <ReCAPTCHA
                className="rc"
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                onChange={(token: string | null) => {
                  if (token !== null) setToken(token);
                  setTimeout(() => {
                    setToken("");
                  }, 86000);
                }}
              />
            </div>
            <button disabled={isLoading || !token || hasSent}>
              {isLoading ? "Sending" : "Send"}
            </button>
          </motion.form>
        )}
        {hasSent && (
          <>
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="contact-success-message"
            >
              Message success. You'll hear back from us soon.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="contact-success-button"
              onClick={() => handleFormReset()}
            >
              Return to Site
            </motion.button>
          </>
        )}
      </motion.div>
    </section>
  );
}
