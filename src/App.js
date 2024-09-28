
import './App.css';
import BrandAudience from './components/brandaudience/BrandAudience';
import Grafic from './components/graficPhoto/Grafic';
import Header from './components/header/Header';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <div className="App">
     <Header/>
     <BrandAudience/>
     <Grafic/>
     <Testimonials/>
    </div>
  );
}

export default App;
