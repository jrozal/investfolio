import { Line } from "react-chartjs-2";

const Chart = ({ chartData }) => {
  const labels = chartData.t.map(t => new Date(t * 1000).toLocaleTimeString());
  const dataSet = chartData.c.map(c => c);

  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(98, 169, 251, 0.2)");
    gradient.addColorStop(0.5, "rgba(162, 40, 223, 0.5)");
    gradient.addColorStop(1, "rgba(162, 40, 223, 1)");

    const gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient2.addColorStop(0.3, "rgba(98, 169, 251, 0)");
    gradient2.addColorStop(0.4, "rgba(98, 169, 251, 0)");
    gradient2.addColorStop(0, "rgba(162, 40, 223, 0.5)");

    return {
      labels: labels,
      datasets: [
        {
          data: dataSet,
          fill: true,
          borderColor: gradient,
          backgroundColor: gradient2,
        },
      ],
    };
  };

  const options ={
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      }
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      }
    },
    elements: {
      line: {
        tension: 0.3,
        borderWidth: 2,
      },
      point: {
        pointRadius: 0,
      }
    },
    maintainAspectRatio: false,
  };

  return <Line data={data} options={options} />;
};

export default Chart;
