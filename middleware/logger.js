// src/middleware/logger.js

import {
  VALID_STACKS,
  VALID_LEVELS,
  FRONTEND_PACKAGES,
  SHARED_PACKAGES,
} from "./constants.js";
import { getToken } from "./tokenStore.js";

export async function log(stack, level, pkg, message) {
  if (!VALID_STACKS.includes(stack)) throw new Error("Invalid stack");
  if (!VALID_LEVELS.includes(level)) throw new Error("Invalid level");
  if (stack === "frontend" && ![...FRONTEND_PACKAGES, ...SHARED_PACKAGES].includes(pkg))
    throw new Error("Invalid package for frontend");

  const body = { stack, level, package: pkg, message };
  const token = getToken();

  try {
    const res = await fetch("http://20.244.56.144/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    console.log("Log created:", data);
  } catch (err) {
    console.error("Logging failed:", err);
  }
}
