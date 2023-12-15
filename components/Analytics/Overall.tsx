import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Bar,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { overall } from "@/libs/data/types";

const Overall = ({ data }: overall) => {
  const test = data
    ?.map((a) => a?.nutrients)
    ?.reduce((a, b) => a?.concat(b, []), []);

  const [chartId, setChartId] = useState("");

  useEffect(() => {
    setChartId(uuidv4());
  }, []);

  const addData = test?.reduce(
    (acc: any, curr: any) => ({
      nf_calories: acc.nf_calories + curr.nf_calories,
      nf_cholesterol: acc.nf_cholesterol + curr.nf_cholesterol,
      nf_dietary_fiber: acc.nf_dietary_fiber + curr.nf_dietary_fiber,
      nf_potassium: acc.nf_potassium + curr.nf_potassium,
      nf_protein: acc.nf_protein + curr.nf_protein,
      nf_saturated_fat: acc.nf_saturated_fat + curr.nf_saturated_fat,
      nf_sodium: acc.nf_sodium + curr.nf_sodium,
      nf_sugars: acc.nf_sugars + curr.nf_sugars,
      nf_total_carbohydrate:
        acc.nf_total_carbohydrate + curr.nf_total_carbohydrate,
      nf_total_fat: acc.nf_total_fat + curr.nf_total_fat,
    }),
    {
      nf_calories: 0,
      nf_cholesterol: 0,
      nf_dietary_fiber: 0,
      nf_potassium: 0,
      nf_protein: 0,
      nf_saturated_fat: 0,
      nf_sodium: 0,
      nf_sugars: 0,
      nf_total_carbohydrate: 0,
      nf_total_fat: 0,
    }
  );

  const dataFormatted = [addData]
    ?.map((a) => [
      { name: "calories", value: a.nf_calories, fill: "#6ee7b7" },
      { name: "cholesterol", value: a.nf_cholesterol, fill: "#06b6d4" },
      { name: "fiber", value: a.nf_dietary_fiber, fill: "#93c5fd" },
      { name: "potassium", value: a.nf_potassium, fill: "#3b82f6" },
      { name: "protein", value: a.nf_protein, fill: "#6366f1" },
      { name: "saturated fat", value: a.nf_saturated_fat, fill: "#f9a8d4" },
      { name: "sodium", value: a.nf_sodium, fill: "#fb7185" },
      { name: "sugars", value: a.nf_sugars, fill: "#f43f5e" },
      {
        name: "carbohydrates",
        value: a.nf_total_carbohydrate,
        fill: "#fb923c",
      },
      { name: "total fats", value: a.nf_total_fat, fill: "#fbbf24" },
    ])
    .pop();
  return (
    <>
      <h1 className="text-6xl text-black font-black text-center">Overall</h1>
      <div className="border border-black p-2 m-6 text-white">
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={dataFormatted} id={chartId}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" barSize={75} fill="#413ea0" />
            <Line type="monotone" dataKey="value" stroke="#000" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Overall;
