import './App.scss';
import Header from './Componetns/Header/Header';
import MovieCard from './Componetns/MovieCard/MovieCard';
import SubHeader from './Componetns/SubHeader/SubHeader'
import Chart from "./Componetns/Chart/Chart";

const App: React.FC = () => {
  return (
    <div className="container">
     <Header />
     <SubHeader name="New Movies" />
     <MovieCard/>     
     <SubHeader name="Chart" />
     <Chart />
    </div>
  );
}

export default App;
