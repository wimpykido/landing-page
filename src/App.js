import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import image from './assets/Vector.svg';
import Service from './components/Service';
import Pet from './components/Pet';
import Dog from './components/Dog';
import Customer from './components/Customer';
import Almost from './components/Almost';
import Footer from './components/Footer';
//import vector from './assets/Vector (1).png'
function App() {
  return (
    <div className="App" style={{backgroundImage : `url(${image})`, backgroundRepeat:"no-repeat", backgroundSize:"contain",  
    // eslint-disable-next-line no-dupe-keys
    backgroundPositionX: "100%", backgroundSize: "35%"}}>
      <Navbar />
      <Banner />
      <Dog />
      <Service />
      <Pet />
      <Customer />
      <Almost />
      <Footer />
    </div>
  );
}

export default App;
