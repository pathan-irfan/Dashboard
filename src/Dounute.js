import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const Dounute = () => {
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
    <div style={{height:"250px",marginLeft:"5%"}}>
      <Doughnut data={data} />
    </div>
  );
};

export default Dounute;
