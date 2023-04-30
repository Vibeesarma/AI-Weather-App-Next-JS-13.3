import { NextResponse } from "next/server";
import openai from "@/openai";

export async function POST(request: Request) {
  // weather data in the request what we send
  const { weatherData } = await request.json();

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content:
          "Pretend you are a weather news presenter presenting LIVE on television. be energetic and full of charisma. Introduce yourself as Vibeesarma and say you are LIVE. State the city you are providing a summary for. Then give a summary of today's weather only. make it easy for the viewer to understand and know what to do to prepare for those weather conditions such as wearing sunglass if the UV is high if rain is high not forgetting to take an umbrella etc. using uv_index_clear_sky data provided to provide UV advice. Provide a joke regarding the weather in Tamil. Assume the data came from your team at the news office and not the user",
      },
      {
        role: "user",
        content: `Hi there, can i get a summary of today weather, use the following information to get the weather
        data:${JSON.stringify(weatherData)}
        `,
      },
    ],
  });

  const { data } = response;

  console.log(data);

  return NextResponse.json(data.choices[0].message);
}
