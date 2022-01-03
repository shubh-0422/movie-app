import { Options } from "highcharts";
export const options: Options = {
    chart: {
      zoomType: "xy",
      backgroundColor: "#303030",
      height: 220,
    },
    credits: {
      enabled: false,
    },
    title: undefined,
    subtitle: undefined,
    yAxis: [
      {
        labels: {
          format: "{value}",
          style: {
            color: "#aaaaaa",
          },
        },
        title: {
          text: null,
          style: {
            color: "#aaaaaa",
          },
        },
        opposite: true,
      },
      {
        title: {
          text: null,
          style: {
            color: "#aaaaaa",
          },
        },
        labels: {
          format: "{value}thm",
          style: {
            color: "#aaaaaa",
          },
        },
      },
      {
        gridLineWidth: 1,
        gridLineColor: "#777777",
        title: {
          text: null,
          style: {
            color: "#aaaaaa",
          },
        },
        labels: {
          formatter: function (object) {
            const formattedValue = parseInt(object.value.toString()) / 1000;
            return formattedValue === 0
              ? "$" + formattedValue
              : "$" + formattedValue + "K";
          },
          style: {
            color: "#aaaaaa",
          },
        },
        opposite: true,
      },
    ],
    tooltip: {
      shared: true,
    },
    legend: {
      layout: "horizontal",
      align: "center",
      x: 0,
      verticalAlign: "bottom",
      y: 0,
      floating: false,
      itemStyle: { color: "#aaaaaa" },
      itemHoverStyle: { color: "#dddddd" },
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              floating: false,
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
              x: 0,
              y: 0,
            },
            yAxis: [
              {
                labels: {
                  align: "right",
                  x: 0,
                  y: -6,
                },
                showLastLabel: false,
              },
              {
                labels: {
                  align: "left",
                  x: 0,
                  y: -6,
                },
                showLastLabel: false,
              },
              {
                visible: false,
              },
            ],
          },
        },
      ],
    },
  };