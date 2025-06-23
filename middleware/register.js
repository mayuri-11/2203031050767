
export async function registerUser(userData) {
  const res = await fetch("http://20.244.56.144/evaluation-service/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  if (!res.ok) {
    throw new Error("Registration failed");
  }

  const data = await res.json();
  console.log("Registered:", data);
  return data; // contains clientID, clientSecret
}
