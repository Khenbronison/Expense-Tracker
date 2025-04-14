import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE"];

export default function Chart({ expenses }) {
  const data = expenses.reduce((acc, item) => {
    const found = acc.find((d) => d.name === item.category);
    if (found) {
      found.value += parseFloat(item.amount);
    } else {
      acc.push({ name: item.category, value: parseFloat(item.amount) });
    }
    return acc;
  }, []);

  return (
    <PieChart width={300} height={300} className="pieChart">
      <Pie data={data} dataKey="value" nameKey="name" outerRadius={100} fill="#8884d8">
        {data.map((_, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}
