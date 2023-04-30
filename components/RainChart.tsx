"use client";

import { AreaChart, Card, Title } from "@tremor/react";

type Props = {
  results: Root;
};

const RainChart = ({ results }: Props) => {
  // here hourly data does not come it's in stepzen side issue so i at index instead of time
  const hourly = results.hourly.time
    .map(
      (time, index) =>
        new Date(time).toLocaleString("en-US", {
          hour: "numeric",
          hour12: false,
        })
      // index
    )
    .slice(0, 24);

  const data = hourly.map((hour, i) => ({
    time: Number(hour),
    "Rain (%)": results.hourly.precipitation_probability[i],
  }));

  const dataFormatter = (number: number) => `${number} %`;
  return (
    <Card>
      <Title>Chances of Rain</Title>
      <AreaChart
        className="mt-6"
        data={data}
        showLegend
        index="time"
        categories={["Rain (%)"]}
        colors={["blue"]}
        minValue={0}
        valueFormatter={dataFormatter}
        yAxisWidth={40}
      />
    </Card>
  );
};

export default RainChart;
