import React, { useEffect } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const PieChartComponent = () => {
  const [Donate, setDonate] = React.useState([12]);

  useEffect(() => {
    const donateItem = JSON.parse(localStorage.getItem('Donatation'))
    if (donateItem) {
      setDonate(donateItem.length)
    } else {
      setDonate("No Donation")
    }
  }, [])
  const data = [
    { name: 'All Donation', value: 12 },
    { name: 'Your Donation', value: Donate ? Donate : '' },
  ];
  const COLORS = ['#337DFF', '#FF5733'];

  return (
    <PieChart width={425} height={350}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data}
        cx={200}
        cy={200}
        outerRadius={80}
        fill=""
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default PieChartComponent;
