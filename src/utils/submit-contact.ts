const submitContact = async (
  contactName: string,
  email: string,
  message: string
) => {
  const queryString = import.meta.env.VITE_CONTACT_API_STRING as string;
  try {
    const response = await fetch(queryString, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contactName, email, message }),
    });
    const parsedData = (await response.json()) as {
      isSuccess: boolean;
      message: string;
    };
    return parsedData;
  } catch (err) {
    console.log(err);
  }
};

export default submitContact;
