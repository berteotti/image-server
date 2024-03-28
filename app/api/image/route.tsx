import { ImageResponse } from "next/og";
import { getData } from "./google-analytics";
// App router includes @vercel/og.
// No need to install it.

export async function GET() {
  const usersData = await getData();

  const activeUsers =
    usersData.rows &&
    usersData.rows[0].metricValues &&
    usersData.rows[0].metricValues[0].value;
  console.log(usersData);
  console.log(activeUsers);

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: "black",
          background: "white",
          width: "100%",
          height: "100%",
          padding: "50px 200px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        Gymious had {activeUsers} active users in the last 24 hours
      </div>
    ),
    {
      width: 800,
      height: 480,
    }
  );
}
