import moment from "moment";
import { options } from "./options";
import {data} from './../../Data/Data';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import './Graph.scss';


const Graph = () => {
    const monthwiseAggregations =data.data.regions[0].facilities[0].monthwiseAggregations;

  options.xAxis = [
    {
      categories: monthwiseAggregations.map((item) =>
        moment(item.monthStartDate).format("MMM")
      ),
      crosshair: true,
    },
  ];

  options.series = [
    {
      name: "thm Baseline",
      type: "column",
      yAxis: 1,
      color: "#606062",
      borderWidth: 0,
      data: monthwiseAggregations.map((item) => item.baselineConsumption),
      tooltip: {
        valueSuffix: "thm",
      },
    },
    {
      name: "thm Actual",
      type: "column",
      yAxis: 1,
      color: "#1371b4",
      borderWidth: 0,
      data: monthwiseAggregations.map((item) => item.actualConsumption),
      tooltip: {
        valueSuffix: "thm",
      },
    },
    {
      name: "Baseline Cost",
      type: "line",
      dashStyle: "ShortDash",
      yAxis: 2,
      color: "#a1762b",
      data: monthwiseAggregations.map((item) => item.baselineCost),
      tooltip: {
        valuePrefix: "$",
      },
    },
    {
      name: "Actual Cost",
      type: "line",
      yAxis: 2,
      color: "#e5a743",
      data: monthwiseAggregations.map((item) => item.actualCost),
      tooltip: {
        valueSuffix: "$",
      },
    },
  ];

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Graph;