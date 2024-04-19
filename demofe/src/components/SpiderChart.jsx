
import ReactApexChart from 'react-apexcharts';

const SpiderChart = () => {
  const series = [
    {
      name: 'Series 1',
      data: [80, 50, 30, 40, 100, 20], // Example data for series 1
    },
    {
      name: 'Series 2',
      data: [10, 5, 20, 15, 30, 50], // Example data for series 2
    },
    {
      name: 'Series 3',
      data: [90, 40, 70, 30, 80, 60], // Example data for series 3
    },
  ];

  const options = {
    chart: {
      type: 'radar',
      height: 270,
      width:400,
    },
    xaxis: {
      categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Maths'], // Example categories
    },
  };

  return (
    <div>
      <ReactApexChart options={options} series={series} type="radar" height={330} width={500} />
    </div>
  );
};

export default SpiderChart;
