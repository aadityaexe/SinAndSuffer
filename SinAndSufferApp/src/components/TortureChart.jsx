import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Soul Burn", value: 30 },

  { name: "Eternal Regret", value: 15 },

  { name: "Mind Torture", value: 20 },
  { name: "Lust & Seduction", value: 25 },
  { name: "Demonic Games", value: 10 },
];

const COLORS = ["#FF3C38", "#FF7F50", "#6A0572", "#D72638", "#8B0000"];

const TortureChart = () => {
  return (
    <section
      id="torture-stats"
      className="py-16 px-6 sm:px-12 lg:px-24 xl:px-48 bg-black text-white"
    >
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-4 text-red-600">
          Torture Breakdown
        </h2>
        <p className="text-gray-400 max-w-2xl text-3xl mx-auto">
          Every soul suffers differently. Here’s how we serve pain in Hell —
          percentages based on your sins, of course.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="w-full max-w-lg h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="text-left space-y-4 max-w-md">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <p className="text-3xl text-gray-300">
                <span className="font-semibold text-white">{item.name}</span>:{" "}
                {item.value}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TortureChart;
