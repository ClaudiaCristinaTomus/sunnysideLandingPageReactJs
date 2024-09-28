
import './App.css';
import BrandAudience from './components/brandaudience/BrandAudience';
import Footer from './components/footer/Footer';
import Grafic from './components/graficPhoto/Grafic';
import Header from './components/header/Header';
import Images from './components/images/Images';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <div className="App">
     <Header/>
     <BrandAudience/>
     <Grafic/>
     <Testimonials/>
     <Images/>
     <Footer/>
    </div>
  );
}

export default App;
