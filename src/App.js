import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// main components
import Header from "./Components/Header";

// pengepul
import HomePage from "./Homepage";
import MainPengepul from "./Pengepul";
import Login from "./Components/Login";
import InputPanen from "./Pengepul/InputPanen";
import Profile from "./Pengepul/Profile";
import Petani from "./Pengepul/Petani";
import FormPetani from "./Pengepul/FormPetani";
import PetaniDetail from "./Pengepul/PetaniDetail";
import DataTransaksi from "./Pengepul/DataTransaksi";
import FormDataTransaksi from "./Pengepul/FormDataTransaksi";
import DataHasilPanen from "./Pengepul/DataHasilPanen";
import FormHasilPanen from "./Pengepul/FormHasilPanen";
import DetailHasilPanen from "./Pengepul/DetailHasilPanen";

// petani
import MainPetani from "./Petani";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {/* <Route path='/' exact component={HomePage}/> */}
        <Route path="/" exact component={MainPengepul} />
        <Route path="/login" exact component={Login} />
        <Route path="/pengepul" exact component={MainPengepul} />
        <Route path="/pengepul/dashboard" exact component={MainPengepul} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/petani" exact component={MainPetani} />
        <Route path="/petani/dashboard" exact component={MainPetani} />
        <Route path="/input-panen" exact component={InputPanen} />
        <Route path="/data-petani" exact component={Petani} />
        <Route path="/data-petani/tambah" exact component={FormPetani} />
        <Route path="/data-petani/detail" exact component={PetaniDetail} />
        <Route path="/data-transaksi" exact component={DataTransaksi} />
        <Route
          path="/data-transaksi/create"
          exact
          component={FormDataTransaksi}
        />
        <Route path="/hasil-panen" exact component={DataHasilPanen} />
        <Route path="/hasil-panen/input" exact component={FormHasilPanen} />
        <Route path="/hasil-panen/id" exact component={DetailHasilPanen} />
        {/* <Route path='/petani/login' exact component={LoginPetani}/>
        <Route path='/pengepul/login' exact component={LoginPengepul}/> */}
      </Switch>
    </Router>
  );
}

export default App;
