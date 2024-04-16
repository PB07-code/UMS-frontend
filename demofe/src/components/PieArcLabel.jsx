import ReactApexChart from 'react-apexcharts';

const PieArcLabel = () => {
  const data = [
    { value: 27.7, label: 'America', color: 'rgb(24, 119, 242)' },
    { value: 34.7, label: 'Asia', color: 'rgb(255, 171, 0)' },
    { value: 9.2, label: 'Europe', color: 'rgb(0, 184, 217)' },
    { value: 28.4, label: 'Africa', color: 'rgb(255, 86, 48)' },
  ];

  const options = {
    labels: data.map((item) => item.label),
    colors: data.map((item) => item.color),
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return `${val.toFixed(1)}%`;
      },
    },
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={data.map((item) => item.value)}
        type="pie"
        width={480}
        height={550}
      />
    </div>
  );
};

export default PieArcLabel;

