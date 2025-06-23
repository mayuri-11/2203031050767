
import { setToken } from "./tokenStore.js";

export async function authenticate(authPayload) {
  const res = await fetch("http://20.244.56.144/evaluation-service/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(authPayload),
  });

  if (!res.ok) {
    throw new Error("Authentication failed");
  }

  const data = await res.json();
  setToken(data.access_token); // Cache the token
  console.log("Authenticated:", data);
  return data;
}
