import { getData } from "./google-analytics";

export async function GET() {
  const usersData = await getData();

  return Response.json({ data: usersData });
}
