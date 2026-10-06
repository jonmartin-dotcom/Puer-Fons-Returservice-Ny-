import { NextRequest, NextResponse } from "next/server";
import { lookupOrderByNumber } from "@/lib/ongoing";
import type { OrderLookupResponse } from "@/lib/types";

export async function POST(req: NextRequest) {
  try {
    const { orderNumber } = await req.json();

    if (!orderNumber || typeof orderNumber !== "string") {
      return NextResponse.json<OrderLookupResponse>(
        { found: false, reason: "ERROR", message: "Ordrenummer mangler." },
        { status: 400 }
      );
    }

    const result = await lookupOrderByNumber(orderNumber.trim());
    return NextResponse.json<OrderLookupResponse>(result);
  } catch (err) {
    console.error("[api/order/lookup] feil:", err);
    return NextResponse.json<OrderLookupResponse>(
      {
        found: false,
        reason: "ERROR",
        message: "Noe gikk galt ved oppslag av ordren. Vennligst prøv igjen.",
      },
      { status: 500 }
    );
  }
}
