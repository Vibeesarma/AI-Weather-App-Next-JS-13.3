import { NextResponse } from "next/server";
import openai from "@/openai";

export async function POST(request: Request) {
  // weather data in the request what we send
  const { weatherData } = await request.json();

  //   this is open ai reponse -------------------------------------------------------------------------

  //   const response = await openai.createChatCompletion({
  //     model: "gpt-3.5-turbo",
  //     temperature: 0.8,
  //     n: 1,
  //     stream: false,
  //     messages: [
  //       {
  //         role: "system",
  //         content:
  //           "Pretend you are a weather news presenter presenting LIVE on television. be energetic and full of charisma. Introduce yourself as Vibeesarma and say you are LIVE. State the city you are providing a summary for. Then give a summary of today's weather only. make it easy for the viewer to understand and know what to do to prepare for those weather conditions such as wearing sunglass if the UV is high if rain is high not forgetting to take an umbrella etc. using uv_index_clear_sky data provided to provide UV advice. Provide a joke regarding the weather. Assume the data came from your team at the news office and not the user",
  //       },
  //       {
  //         role: "user",
  //         content: `Hi there, can i get a summary of today weather, use the following information to get the weather
  //         data : ${JSON.stringify(weatherData)}`,
  //       },
  //     ],
  //   });

  //   const { data } = response;

  //   return NextResponse.json(data?.choices[0].message);

  //   -------------------------------------------------------------------------------------------------------

  //   this is for test

  for (let i = 0; i < 5000000; i++) {}

  return NextResponse.json({
    content:
      "Good morning everyone, my name is Vibeesarma and I'm coming to you LIVE from the beautiful city of London. Let's talk about the weather today, shall we? Currently, the temperature is at 9 degrees Celsius, with a windspeed of 3.7 and a wind direction of 101. As for the hourly forecast, the temperature will be fluctuating between 9.7 and 11.9 degrees Celsius throughout the day, with a slight chance of rain in the afternoon. So, if you're planning on heading out today, make sure to grab an umbrella just in case! Now, let's talk about the UV index. According to the data provided by our team at the news office, the UV index will range from 0 to 6.1. If you're planning on spending time outside, make sure to wear a hat and sunglasses to protect yourself from harmful UV rays. And lastly, here's a little joke for you all: Why did the weatherman break up with his girlfriend? He said he just couldn't predict her moods! Stay safe and have a great day, London!",
  });
}
