"use server";
import { auth } from "@/auth";
import { revalidateTag } from "next/cache";

const RESUME_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/resume-details`;

type UserWithToken = {
  accessToken: string;
  [key: string]: any;
};

export async function getResumeDetails() {
  const session = await auth();
  const user = session?.user as UserWithToken | undefined;
  if (!user?.accessToken) {
    return {
      error: "User is not authenticated.",
      ok: false,
      data: null,
    };
  }
  try {
    const response = await fetch(RESUME_API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${user.accessToken}`,
      },
      next: {
        tags: [
          "resumeDetailsCreate",
          "resumeDetailsDelete",
          "resumeDetailsUpdate",
        ],
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      return {
        error: errorData?.message || "Failed to fetch resume details.",
        ok: false,
        data: null,
      };
    }
    const data = await response.json();
    return {
      ok: true,
      data: data?.payload || data,
    };
  } catch (error) {
    return {
      error: "An unexpected error occurred. Please try again later.",
      ok: false,
      data: null,
    };
  }
}

export async function createResumeDetails(data: any) {
  const session = await auth();
  const user = session?.user as UserWithToken | undefined;
  if (!user?.accessToken) {
    return {
      error: "User is not authenticated.",
      ok: false,
      data: null,
    };
  }
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/create-resume-details`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${user.accessToken}`,
        },
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      const errorData = await response.json();
      return {
        error: errorData?.message || "Failed to create resume details.",
        ok: false,
        data: null,
      };
    }
    const resData = await response.json();
    revalidateTag("resumeDetailsCreate");
    return {
      ok: true,
      data: resData?.payload || resData,
    };
  } catch (error) {
    return {
      error: "An unexpected error occurred. Please try again later.",
      ok: false,
      data: null,
    };
  }
}

export async function updateResumeDetails(data: any) {
  const session = await auth();
  const user = session?.user as UserWithToken | undefined;
  if (!user?.accessToken) {
    return {
      error: "User is not authenticated.",
      ok: false,
      data: null,
    };
  }
  try {
    const response = await fetch(RESUME_API_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${user.accessToken}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errorData = await response.json();
      return {
        error: errorData?.message || "Failed to update resume details.",
        ok: false,
        data: null,
      };
    }
    const resData = await response.json();
    revalidateTag("resumeDetailsUpdate");
    return {
      ok: true,
      data: resData?.payload || resData,
    };
  } catch (error) {
    return {
      error: "An unexpected error occurred. Please try again later.",
      ok: false,
      data: null,
    };
  }
}

export async function deleteResumeDetails(data: any) {
  const session = await auth();
  const user = session?.user as UserWithToken | undefined;
  if (!user?.accessToken) {
    return {
      error: "User is not authenticated.",
      ok: false,
      data: null,
    };
  }
  try {
    const response = await fetch(RESUME_API_URL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${user.accessToken}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errorData = await response.json();
      return {
        error: errorData?.message || "Failed to delete resume details.",
        ok: false,
        data: null,
      };
    }
    const resData = await response.json();
    revalidateTag("resumeDetailsDelete");
    return {
      ok: true,
      data: resData?.payload || resData,
    };
  } catch (error) {
    return {
      error: "An unexpected error occurred. Please try again later.",
      ok: false,
      data: null,
    };
  }
}
