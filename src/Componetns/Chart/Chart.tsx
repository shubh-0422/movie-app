import './Chart.scss';
import ChartHeader from './../ChartHeader/ChartHeader';
import Graph from './../Graph/Graph'

const Chart =()=>{
    return(
        <div className='container'>
            <h4>Gas Performance</h4>
            <ChartHeader />
            <Graph />
        </div>
    )
}


export default Chart;
