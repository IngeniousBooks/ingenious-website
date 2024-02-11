import { ChangeEvent, FormEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";
import submitContact from "../../utils/submit-contact";

export default function ContactSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isInvalidSubmit, setIsInvalidSubmit] = useState(false);
  const [hasSent, setHasSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormReset = () => {
    console.log("form reset");
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
        console.log(responseStatus);
        if (responseStatus?.status === 200) {
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
      {!hasSent && (
        <form onSubmit={handleSubmit}>
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
          {isInvalidSubmit && <p>Something went wrong. Please try again</p>}
          <button disabled={isLoading || hasSent}>
            {isLoading ? "Sending" : "Send"}
          </button>
        </form>
      )}
      {hasSent && (
        <section className="contact-success-section">
          <p className="contact-success-message">
            Message success. You'll hear back from us soon.
          </p>
          <button
            className="contact-success-button"
            onClick={() => handleFormReset()}
          >
            Return to Site
          </button>
        </section>
      )}
    </section>
  );
}
