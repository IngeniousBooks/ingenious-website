const submitContact = async (
  contactName: string,
  email: string,
  message: string
) => {
  const fetchString = new URL(process.env.CONTACT_API_STRING as string);
  try {
    const response = await fetch(fetchString, {
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
