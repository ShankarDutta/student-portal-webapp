import { serverEnv } from "@/lib/env/serverEnv";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const formData = new URLSearchParams();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, String(value ?? ""));
    });

    const response = await fetch(serverEnv.GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
      redirect: "follow",
    });

    const result = await response.text();

    console.log("Google Apps Script response:", result);

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          message: "Google Apps Script returned an error",
          status: response.status,
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Registration submitted successfully",
    });
  } catch (error) {
    console.error("Admission API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit registration",
      },
      { status: 500 },
    );
  }
}
