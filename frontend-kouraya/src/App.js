import './App.css';
import {database} from "./firebase"


database.collection("villages").doc("bamako").get().then((doc) => {
  console.log(doc.data())
});

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
