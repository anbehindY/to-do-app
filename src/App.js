import Header from "./components/Header.js";
import ToDoLogic from "./components/ToDoLogic.js";

function App() {
  return (
    <div className="wrapper">
      <div className="todos">
        < Header style={{
        padding: '20px 0',
        lineHeight: '1.5em',
        color: '#aeadad',
        textAlign: 'center',
      }}/>
        < ToDoLogic/>
      </div>
    </div>
  );
}

export default App;
