
import './App.css';
import Content from './pages/Content';

function App() {
  return (
    <div className="flex flex-col w-100vw h-100vh bg-white">
      <div className='flex justify-around items-center  w-100vw h-15 bg-gray-400'>
        <input type='text' placeholder='enter your query'></input>
        <input type='button' value="submit" />
      </div>
      <div className='flex justify-center items-end w-100vw h-153 bg-white-800'>
        <Content/>
      </div>
    </div>
  );
}

export default App;
