import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  //props from ExpenseChart.js
  //to get the array with values only bcoz to calculate the Max !
  const dataPointValues = props.dataPoints.map((dataPoint) => (dataPoint.value));

  const totalmaxValue = Math.max(...dataPointValues); //to get the max value

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalmaxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
