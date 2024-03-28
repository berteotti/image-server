import { getData } from "./google-analytics";

export const dynamic = "force-dynamic";

export async function GET() {
  const usersData = await getData();

  return Response.json({ data: usersData });
}
