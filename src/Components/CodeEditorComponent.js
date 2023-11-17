import React from 'react';
import Editor from '@monaco-editor/react';
const CodeEditorComponent = ({ value }) => {
    const editorOptions = {
        selectOnLineNumbers: true,
        automaticLayout: true,
        fontSize: 14,
        readOnly: true, // Make the editor non-editable
        // Other options...
    };
    return (
        <div>
            <Editor
                height="90vh"
                width="90vh"
                options={editorOptions}
                theme="vs-dark"
                defaultLanguage="javascript"
                value={`import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { MyCard } from "../UI/UiComponents";
import s from "./charts_style.module.css"
require("highcharts/modules/exporting")(Highcharts);
                
               const PieChartSamples = (props) => {
                    const data = [{ name: 'Merceds', color: '#8b9aa2', y: 10 },
                    { name: 'BMW', color: '#8bc1ec', y: 10 },
                    { name: 'Infinity', color: '#365ab4', y: 3 },
                    { name: 'Jeep', color: '#365ab4', y: 2 }]
                    let options = {
                        chart: {
                            plotBackgroundColor: null,
                            plotBorderWidth: null,
                            plotShadow: false,
                            type: "pie",
                        },
                        title: {
                            text: "Biopsy Samples by Populations",
                            align: "left",
                            style: {
                                color: '#172B4D',
                                fontWeight: 'bold',
                                fontFamily: 'Conv_Roboto-Bold,Sans-Serif',
                                fontSize: '16px'
                
                            }
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
                        exporting: {
                            enabled: false
                        },
                        subtitle: {
                            text: <span style='font-size:14px'>Total Number <br>of Biopsies</span><br> <b>25</b>,
                            align: 'center',
                            verticalAlign: 'middle',
                            y: 10,
                            style: {
                                color: '#4D4F5C',
                                fontWeight: 'normal',
                                fontFamily: 'Conv_Roboto-Bold,Sans-Serif',
                                fontSize: '24px'
                            }
                        },
                        credits: {
                            enabled: false,
                        },
                        tooltip: {
                            pointFormat: "{series.name}:<br>Number of subjects = {point.y} ({point.percentage:.1f}%)",
                        },
                        accessibility: {
                            announceNewData: {
                                enabled: true
                            },
                            point: {
                                valueSuffix: '%'
                            }
                        },
                        plotOptions: {
                            pie: {
                                size: '80%',
                                innerSize: '70%',
                                allowPointSelect: true,
                                showInLegend: true,
                                cursor: 'pointer',
                                dataLabels: {
                                    enabled: true,
                                    color: "#4D4F5C",
                                    format: '<span style="font-size:12px">{point.name}:</span> <b>{point.y}({point.percentage:.1f}%)</b>',
                                    style: {
                                        color: '#4D4F5C',
                                        fontWeight: 'normal',
                                        fontFamily: 'Conv_Roboto-Bold,Sans-Serif',
                                        fontSize: '14px'
                                    },
                                    connectorColor: 'silver',
                
                                },
                            },
                        },
                        series: [
                            {
                                data: data
                            },
                        ],
                    };
                
                    return <MyCard>
                        <div className={s.chart_wrapper}>
                            <HighchartsReact highcharts={Highcharts} options={options} />
                        </div>
                    </MyCard>
                };
                
                export default PieChartSamples;`}
            />
        </div>
    );
};

export default CodeEditorComponent;
