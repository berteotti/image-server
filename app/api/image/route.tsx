import { ImageResponse } from "next/og";
import { getData } from "../ga/google-analytics";
// App router includes @vercel/og.
// No need to install it.

export const dynamic = "force-dynamic";

export async function GET() {
  const usersData = await getData();

  const activeUsers =
    (usersData.rows &&
      usersData.rows.length > 0 &&
      usersData.rows[0].metricValues &&
      usersData.rows[0].metricValues.length > 0 &&
      usersData.rows[0].metricValues[0].value) ||
    0;

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: "black",
          background: "white",
          width: "100%",
          height: "100%",
          padding: "50px 100px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>Gymious active users</div>
        <div>Last 30 minutes</div>
        <div
          style={{
            fontSize: 80,
            fontWeight: 800,
            display: "flex",
          }}
        >
          {activeUsers}
        </div>
      </div>
    ),
    {
      width: 800,
      height: 480,
      headers: {
        "Cache-Control": "max-age=5",
        "CDN-Cache-Control": "max-age=10",
        "Vercel-CDN-Cache-Control": "max-age=15",
      },
    }
  );
}
