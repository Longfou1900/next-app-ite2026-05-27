import { error } from "console";
import { NextResponse } from "next/server";

export async function GET() {
  //Logic of fetchig data
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_ISHOP_API_URL + "/products",
  );
  const data = await response.json();
  if (response.ok) {
    return NextResponse.json({
      success: true,
      data,
    });
  }
  return NextResponse.json(
    { error: "Sorry you cannot fetch product data" },
    { status: 500 },
  );
}
