import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increase, decrease} from './actions';

function App() {
  const counter = useSelector(state =>state.counter);
  const dispatch= useDispatch();
  return (
    <div className="App">
      <h1>Count = {counter}</h1>

      <button onClick={()=>dispatch(increase())}>+</button>
      <button onClick={()=>dispatch(decrease())}>-</button>
    </div>
  );
}

export default App;
