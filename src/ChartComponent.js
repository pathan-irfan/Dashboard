import React from 'react';
import Chart from 'chart.js/auto';
import {Bar} from 'react-chartjs-2';

const ChartComponent = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets: [
      {
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48,76,34,22,33,],
        backgroundColor: ["#5226e0"],
        hoverBackgroundColor: ["hsl(10, 79%, 75%)"],
        borderRadius: ["10"],
        // label: 'Sample Data',
        // data: [12, 19, 3, 5, 2, 3,8,9,1,4,7],
        // backgroundColor: [
        //   '#7bc99c',
        //   'rgba(54, 162, 235, 0.2)',
        //   'rgba(255, 206, 86, 0.2)',
        //   'rgba(75, 192, 192, 0.2)',
        //   'rgba(153, 102, 255, 0.2)',
        //   'rgba(255, 159, 64, 0.2)',
        // ],
        // borderColor: [
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        //   'rgba(75, 192, 192, 1)',
        //   'rgba(153, 102, 255, 1)',
        //   'rgba(255, 159, 64, 1)',
        // ],
        //  borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
          gridLines: {
            display: false, // Set this to false to hide grid lines on the y-axis
          },
        },
      ],
    },
  };
  
  
  

  return (
    <div style={{height:"270px",marginTop:"-5%",backgroundColor:"white",marginLeft:"6%"}}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
