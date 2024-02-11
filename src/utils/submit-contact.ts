const submitContact = async (
  contactName: string,
  email: string,
  message: string
) => {
  try {
    const response = await fetch(process.env.CONTACT_API_STRING as string, {
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
