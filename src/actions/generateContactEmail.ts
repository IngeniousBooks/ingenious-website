"use server";

import sendContactEmail from "@/utils/sendContactEmail";

export type UserContactData = {
  name: string;
  email: string;
  message: string;
};

export default async function generateContactEmail(formData: FormData) {
  const name = formData.get("contact-name")?.toString();
  const email = formData.get("email")?.toString();
  const message = formData.get("message")?.toString();

  if (name && email && message) {
    const userContactData: UserContactData = { name, email, message };

    sendContactEmail(userContactData).catch(console.error);
  } else {
    throw new Error("invalid form data");
  }
}
