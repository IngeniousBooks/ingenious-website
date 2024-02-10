import { ChangeEvent, FormEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function ContactSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isInvalidSubmit, setIsInvalidSubmit] = useState(true);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = {
      contactName: searchParams.get("contact-name"),
      email: searchParams.get("email"),
      message: searchParams.get("message"),
    };
    if (formData.contactName && formData.email && formData.message) {
      const fetchString = new URL(
        "https://4276nx0tf2.execute-api.eu-west-2.amazonaws.com/prod/contact"
      );
      fetchString.searchParams.append("contactName", formData.contactName);
      fetchString.searchParams.append("email", formData.email);
      fetchString.searchParams.append("message", formData.message);
      fetch(fetchString)
        .then((response) => {
          console.log(response);
          setSearchParams([]);
        })
        .catch((error) => {
          console.log(error);
          setIsInvalidSubmit(true);
        });
    } else {
      setIsInvalidSubmit(false);
    }
    console.log(formData);
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
