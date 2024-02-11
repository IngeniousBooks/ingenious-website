import { ChangeEvent, FormEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";
import submitContact from "../../utils/submit-contact";

export default function ContactSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isInvalidSubmit, setIsInvalidSubmit] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
      const attemptedContact = await submitContact(
        formData.contactName,
        formData.email,
        formData.message
      );
      console.log(attemptedContact);
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
          />
        </label>
        {isInvalidSubmit && <p>Invalid form data. Please try again</p>}
        <button>Send</button>
      </form>
    </section>
  );
}
