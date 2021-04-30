import './App.scss';
import ShowUser from './components/showUsers';
import { useSelector } from 'react-redux';

import ModalComponent from './components/modalComponent';

function App() {
  const users = useSelector((state) => state.users);
  console.log(users);
  return (
    <div className='App mt-8'>
      <h1 className='App__heading'>Contact List</h1>
      <ShowUser />
      <ModalComponent />
    </div>
  );
}

export default App;
