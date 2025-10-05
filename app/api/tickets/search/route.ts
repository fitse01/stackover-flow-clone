import tickets from "@/app/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParam = request.nextUrl.searchParams;
  const query = searchParam.get("query")?.toLowerCase() || "";

  if (!query) {
    return NextResponse.json(tickets);
  }
  const filteredTickets = tickets.filter((ticket) =>
    ticket.name.toLowerCase().includes(query.toLowerCase())
  );
  return NextResponse.json(filteredTickets);
}
