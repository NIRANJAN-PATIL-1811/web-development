import First_file from "./components/first_file";
import Second_file from "./components/second_file";
import "./components/first_file.css";


function App() {
  return (
    <>
      <center>
        <div id="main_div">
          <First_file></First_file>    
          <Second_file></Second_file>      
        </div>
      </center>
    </>
  );
}

export default App;