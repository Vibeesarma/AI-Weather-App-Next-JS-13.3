"use client";

import CityPicker from "@/components/CityPicker";
import { Card, Divider, Text, Subtitle } from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-900 p-10 flex flex-col justify-center items-center">
      <Card className="max-w-4xl mx-auto">
        <Text className="text-6xl font-bold text-center mb-10">Weather AI</Text>
        <Subtitle className="text-xl text-center">
          Power by OpenAI, Next.js 13.3 ,Taiwind CSS, Tremor 2.0 + More!
        </Subtitle>
        <Divider className="my-10" />
        <Card className="bg-gradient-to-br from-blue-950 to-blue-900">
          {/* city picker */}
          <CityPicker/>
        </Card>
      </Card>
    </div>
  );
}
