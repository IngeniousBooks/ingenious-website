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
    console.log(response.body, "<< response.body");
    const parsedData = await response.json();
    console.log(parsedData, "<< parsed data");
    return parsedData;
  } catch (err) {
    console.log(err);
  }
};

export default submitContact;
