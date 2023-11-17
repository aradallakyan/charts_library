import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { MyCard } from "../UI/UiComponents";
import s from "./charts_style.module.css"
require("highcharts/modules/exporting")(Highcharts);

const BarChart = (props) => {
    const data = {
        "Merceeds": [8, 8, 7],
        "BMW": [3, 3, 3],
        "Infinity": [8, 7],
        "Jeep": [6, 4, 5]
    }
    let options = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Stain Distribution',
            align: "left",
            style: {
                color: '#172B4D',
                fontWeight: 'bold',
                fontFamily: 'Conv_Roboto-Bold,Sans-Serif',
                fontSize: '16px'

            }
        },
        exporting: {
            enabled: false
        },

        navigation: {
            buttonOptions: {
                height: 24,
                width: 24,
                symbolSize: 24,
                symbolX: 23,
                symbolY: 21,
                symbolStrokeWidth: 2
            }
        },
        xAxis: {
            categories: ["USA", "Japan", "Germany"].reverse(),
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Count'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"> <b> {point.y} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.25,
                borderWidth: 0
            }
        },
        credits: {
            enabled: false,
        },
        series: [
            {
                name: 'Merceeds',
                color: "#8b9aa2",
                borderRadius: "10",
                data: data.Merceeds
            },
            {
                name: 'BMW',
                color: "#8bc1ec",
                borderRadius: "10",
                data: data.BMW
            }, {
                name: 'Jeep',
                color: "#365ab4",
                borderRadius: "10",
                data: data.Jeep

            }, {
                name: 'Infinity',
                color: "#1d91c0",
                borderRadius: "10",
                data: data.Infinity
            },]
    };

    return <MyCard>
        <div className={s.chart_wrapper}>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    </MyCard>
};

export default BarChart;
