import './App.scss';
import ShowUser from './components/showUsers';
import { useSelector } from 'react-redux';
import AddButton from './components/addButton';
function App() {
  const users = useSelector((state) => state.users);
  console.log(users);
  return (
    <div className='App'>
      <h1 className='App__heading'>Welcome</h1>
      <ShowUser />
      <AddButton />
    </div>
  );
}

export default App;
