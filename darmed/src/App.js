import { Appointment } from "./components/appointment";
import { Contacts } from "./components/contacts";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { PriceList } from "./components/priceList";
import { Services } from "./components/services";
import { Sources } from "./components/soursces";
import { Specialists } from "./components/specialists";
import { Reviews } from "./components/reviews";
import { TextSizeChanger } from "./components/textSize";

function App() {
  return (
    <div className="App">
      <Header/> 
      <Main/> 
      <Services/> 
      <PriceList /> 
      <Appointment/> 
      <Specialists/> 
      <Contacts/>
      <Reviews/>
      <Sources/>
      <Footer/>
    </div>
  );
}

export default App;
