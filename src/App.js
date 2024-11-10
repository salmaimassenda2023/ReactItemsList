
import './App.css';
import {useState} from "react";

function Header({content}){
   return( <p>Learn {content}</p>)
}
function Component({title, fct}) {
    return(
    <div>
        <h1>{title}</h1>
        <button onClick={()=>fct(title)}>click </button>
    </div>
    )

}
function App() {
    const [title,setTitle]=useState("React");
    const libraries=[{title:"React",link:"https://reactjs.org/"},
        {title:"Angular",link:"https://reactjs.org/"},
        {title:"Vue Js",link:"https://reactjs.org/"},
        {title:"Bootsrap",link:"https://reactjs.org/"}
    ];
  return (
    <div className="App">
      <header className="App-header">
          <Header content ={title}/>
          {
              libraries.map(lib => {

                  return(<Component title={lib.title} fct={setTitle}/>)
              })
          }
      </header>
    </div>
  );
}

export default App;
