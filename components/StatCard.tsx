"use client";
import { Card, type Color, Metric, Text } from "@tremor/react";

type Props = {
  title: string;
  metric: string;
  color?: Color;
};

const StatCard = ({ title, metric, color }: Props) => {
  return (
    <Card decorationColor={color}  decoration="top">
      <Text>{title}</Text>
      <Metric>{metric}</Metric>
    </Card>
  );
};

export default StatCard;
