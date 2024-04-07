import { useState } from "react";
import "./second_file.css"

function Second_file() {

  let mylist = [];


  function show_data(){
    if(item === undefined){
      alert("Please enter your todo");
    }
    else if(date === undefined){
      alert("Please choose the date");
    }
    else{
      const newitems = [...todoitems, {todoitem: item, todate: date}];
      setTodoitems(newitems);
      console.log(mylist.todoitems.item, mylist.todoitems.date);
    }
  }

  const [todoitems, setTodoitems] = useState(mylist);

  const [item, setItem] = useState();
  const [date, setDate] = useState();

  function get_input_data(event) {
    setItem(event.target.value);
  }

  function get_input_date(event) {
    setDate(event.target.value);
  }

  return (
    <>
      <div>
        <div className="container">
          <div id="inner_main_div" className="row">
            <div className="col-6"><input id="width" type="text" placeholder="Enter your todo:" onChange={get_input_data}/></div>
            <div className="col-4"><input id="width" type="date" onChange={get_input_date}/></div>
            <div className="col-2"><button id="width" type="button" className="btn btn-success" onClick={show_data}>Add</button></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Second_file;