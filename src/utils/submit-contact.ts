const submitContact = async (
  contactName: string,
  email: string,
  message: string
) => {
  const queryString = import.meta.env.VITE_CONTACT_API_STRING as string;
  try {
    const { status } = await fetch(queryString, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contactName, email, message }),
    });
    return status;
  } catch (err) {
    if (err instanceof Error) {
      return err.message;
    } else {
      return "Error: Something went wrong... " + err;
    }
  }
};

export default submitContact;
