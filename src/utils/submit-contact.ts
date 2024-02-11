const submitContact = async (
  contactName: string,
  email: string,
  message: string
) => {
  const queryString = process.env.CONTACT_API_STRING as string;
  console.log(queryString);
  try {
    const response = await fetch(queryString, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contactName, email, message }),
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default submitContact;
