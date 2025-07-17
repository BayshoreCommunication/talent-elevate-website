"use server";

import { signIn, signOut } from "@/auth";

// Social auth singin

export async function socialAuthLogin(formData: FormData): Promise<void> {
  const action = formData.get("action") as string | null;

  if (!action) {
    throw new Error("Action is required for social login.");
  }

  await signIn(action, { redirectTo: "/" });
}

export async function userSingout(): Promise<void> {
  await signOut({ redirectTo: "/" });
}

// User singin

export async function credentialLogin(
  formData: any
): Promise<{ error?: string; ok: boolean; url?: string }> {
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;

  if (!email || !password) {
    return { error: "Email and password are required.", ok: false };
  }

  try {
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!response || response.error) {
      return {
        error: response?.error || "Invalid login credentials.",
        ok: false,
      };
    }

    return {
      ok: true,
      url: response.url,
    };
  } catch (err) {
    console.error("Error during password login:", err);
    return {
      error: "An unexpected error occurred during login.",
      ok: false,
    };
  }
}

//User Signup

export async function userSignup(
  formData: any
): Promise<{ error?: string; ok: boolean; url?: string }> {
  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;

  if (!name || !email || !password) {
    return { error: "Name, Email and password are required.", ok: false };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      }
    );

    // Read the response body only once
    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      return {
        error: data.error || "Signup failed. Please try again.",
        ok: false,
      };
    }

    return {
      ok: true,
      url: data.url, // or whatever you want to return
    };
  } catch (err: any) {
    console.error("Error during signup:", err);
    return {
      error: err?.message || "An unexpected error occurred during signup.",
      ok: false,
    };
  }
}

//New User Activate

export async function userActivate(
  formData: any
): Promise<{ error?: string; ok: boolean; url?: string }> {
  const token = formData.get("token") as string | null;

  if (!token) {
    return { error: "Activation token is required.", ok: false };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user/new-user-activate`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      }
    );

    if (!response.ok) {
      // Try to extract error message from response
      const data = await response.json().catch(() => ({}));
      return {
        error: data.error || "Activation failed. Please try again.",
        ok: false,
      };
    }

    const data = await response.json();
    return {
      ok: true,
      url: data.url, // or any other data you want to return
    };
  } catch (err: any) {
    console.error("Error during activation:", err);
    return {
      error: err?.message || "An unexpected error occurred during activation.",
      ok: false,
    };
  }
}
