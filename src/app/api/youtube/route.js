import { NextResponse } from "next/server";

export const revalidate = 86400; // 24 saat

// https://www.googleapis.com/youtube/v3/search?key=YOUR_API_KEY&channelId=CHANNEL_ID&order=date&part=snippet&type=video&maxResults=10
export async function GET() {
  const api_key = process.env.API_KEY;
  const channel_id = process.env.CHANNEL_ID;

  if (!api_key || !channel_id) {
    return NextResponse.json({ error: "API veya channel ID yok veya bulunamadı" }, { status: 500 });
  }

  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${api_key}&channelId=${channel_id}&order=date&part=snippet&type=video&maxResults=10`
    );
    if (!res.ok) {
      return NextResponse.json({ error: "YouTube API bulunamadı veya hatalı" }, { status: res.status });
    }

    const data = await res.json();

    const response = NextResponse.json(data.items);
    response.headers.set("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=43200");

    return response;
  } catch (error) {
    console.error("YouTube API error (server route):", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
