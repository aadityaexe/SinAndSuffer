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
  { name: "Team", value: 20 },
  { name: "Advisors", value: 10 },
  { name: "Marketing", value: 15 },
  { name: "Public Sale", value: 25 },
  { name: "Staking Rewards", value: 30 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#845EC2"];

const Tokenomics = () => {
  return (
    <section className="py-16 px-6 sm:px-12 lg:px-24 xl:px-48 bg-gray-900 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Tokenomics</h2>
        <p className="text-gray-300 max-w-2xl text-3xl mx-auto">
          Here's a detailed breakdown of the token distribution across different
          segments to support our ecosystem growth.
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
              <p className="text-3xl">
                <span className="font-semibold">{item.name}</span>: {item.value}
                %
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
