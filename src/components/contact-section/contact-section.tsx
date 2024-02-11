import { ChangeEvent, FormEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";
import submitContact from "../../utils/submit-contact";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isInvalidSubmit, setIsInvalidSubmit] = useState(false);
  const [hasSent, setHasSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState("");

  const handleFormReset = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setSearchParams([]);
    setHasSent(false);
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
          setIsInvalidSubmit(true);
          setIsLoading(false);
        }
      } catch {
        setIsInvalidSubmit(true);
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
      <h2 id="contact">Let's discuss your next project</h2>
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
            {isInvalidSubmit && (
              <p>Something went wrong. Please try again...</p>
            )}

            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                padding: "2rem 1rem 1rem 2rem",
              }}
            >
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                onChange={(token: string | null) => {
                  if (token !== null) setToken(token);
                  setTimeout(() => {
                    setToken("");
                  }, 85000);
                }}
              />
            </div>
            <button disabled={isLoading || hasSent} hidden={!token}>
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
