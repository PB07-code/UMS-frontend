import React from 'react';
import ReactApexChart from 'react-apexcharts';

class Chart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: 'mixed-chart',
                    height: 350,
                    toolbar: {
                        show: false
                    }
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
                },
                legend: {
                    position: 'top'
                }
            },
            series: [{
                name: 'Team A',
                type: 'line',
                data: [430, 340, 435, 350, 349, 460, 370, 291, 325],
            },{
                name: 'Team B',
                type: 'bar',
                data: [10, 90, 15, 150, 49, 160, 70, 191, 25]
            },{
                name: 'Team C',
                type: 'line',
                data: [300,209, 215, 250, 300, 360, 280, 200, 300]
            }]
        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series}  height={340} />
            </div>
        );
    }
}

export default Chart;
