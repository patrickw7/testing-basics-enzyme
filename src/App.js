import './App.scss';
import Counter from './components/Counter';

function App() {

  let start = 0;
  return (
    <div className="App">
 <Counter start={start}/>
    </div>
  );
}

export default App;
