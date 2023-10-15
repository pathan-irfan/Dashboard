import React from 'react';
import { Pie } from 'react-chartjs-2';

const  = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#9C27B0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#9C27B0'],
      },
    ],
  };

  return (
    <div>
      <h2>Pie Chart Example</h2>
      <Pie data={data} />
    </div>
  );
};

export default PieChartComponent;
