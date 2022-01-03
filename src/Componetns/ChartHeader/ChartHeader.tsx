
import {data} from './../../Data/Data';
import "./ChartHeader.scss";

type Props = {
    value: string;
    changePercentage?: number;
    title: string;
  };
  
export const PerformanceHeader = ({ value, title, changePercentage }: Props) => {
    return (
        <div className="container">
            <div className="performance-value-section">
            <span className="performance-header-value">{value}</span>
            {changePercentage && 
            <div
                id="change-percentage"
                className={changePercentage >= 0 ? "increase-value" : "decrease-value"}
            >
                <div className="value-change-icon" />
                    {changePercentage}%
                </div>}
            </div>
            <span className="performance-header-title">{title}</span>
        </div>
    );
};
  
  
  
const ChartHeader = () => {
    const utilityMeasurementUnit = data.data.utilityMeasurementUnit;
    const totalAggregations = data.data.regions[0].facilities[0].totalAggregations;
    return (
        <div className="metrics-container">
        <PerformanceHeader
            title="Actual"
            value={`${
            totalAggregations.totalActualConsumption + utilityMeasurementUnit
            }`}
        />
        <PerformanceHeader
            title="Baseline"
            value={`${
            totalAggregations.totalBaselineConsumption + utilityMeasurementUnit
            }`}
        />
        <PerformanceHeader
            title="Savings"
            value={`${
            totalAggregations.totalConsumptionSavings + utilityMeasurementUnit
        }`}
            changePercentage={totalAggregations.totalConsumptionSavingsPercentage}
        />
        <div className="vertical-divider" />
        <PerformanceHeader
            title="Actual Cost"
            value={`$${totalAggregations.totalActualCost}`}
        />
        <PerformanceHeader
            title="Baseline Cost"
            value={`$${totalAggregations.totalBaselineCost}`}
        />
        <PerformanceHeader
            title="Savings"
            value={`$${totalAggregations.totalCostSavings}`}
            changePercentage={totalAggregations.totalCostSavingsPercentage}
        />
        </div>
    );
};
 
export default ChartHeader;
 