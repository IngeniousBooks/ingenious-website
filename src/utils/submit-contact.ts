const submitContact = (contactName: string, email: string, message: string) => {
  const fetchString = new URL(
    "https://4276nx0tf2.execute-api.eu-west-2.amazonaws.com/staging/contact"
  );
  fetchString.searchParams.append("contactName", contactName);
  fetchString.searchParams.append("email", email);
  fetchString.searchParams.append("message", message);
  fetch(fetchString, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contactName, email, message }),
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export default submitContact;
