const submitContact = async (
  contactName: string,
  email: string,
  message: string
) => {
  const fetchString = new URL(process.env.CONTACT_API_STRING as string);
  const response = await fetch(fetchString, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contactName, email, message }),
  });
  return response;
};

export default submitContact;
