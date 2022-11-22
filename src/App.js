import "./App.css";
import Page from "./components/shared_components/atoms/Page";
import BreadCrumbs from "./components/shared_components/atoms/BreadCrumbs"
import Footer from "./components/shared_components/atoms/Footer"
import Download from "./components/shared_components/atoms/Download"
import Flyout from "./components/shared_components/atoms/Flyout"
import VerticalTabs from "./components/shared_components/atoms/VerticalTabs";

function App() {
  return (
    <div className="App">
      <Page />
      <div className="border"
        style={{
          background: "#B1B51A",
          position: "relative",
          color: "white",
          fontWeight: "bolder",
        }} 
      >

       <div className="font">Test </div> 
       <div className = "inline" 
      //  style= {{float: "right"}}
       >
         <div className="fontt">PreferredName First/InistialOfLastname</div>
         </div>
      </div>
      <div className="rates">Tax Rate Lists</div>
      <div className="tax">Tax Rates</div>

      <Download/>
      <BreadCrumbs/>
      <VerticalTabs/>
      <Footer/>
    </div>
  );
}

export default App;
