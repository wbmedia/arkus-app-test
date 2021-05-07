import './App.scss';
import ShowUser from './components/showUsers';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ModalComponent from './components/modalComponent';

function App() {
  //const users = useSelector((state) => state.users);
  const url = `https://reqres.in/api/users/:id`;

  return (
    <Router>
      <div className='App mt-8'>
        <h1 className='App__heading'>Contact List</h1>
        <ShowUser url={url} />
        <ModalComponent />
      </div>
      <Switch>
        <Route path={url}></Route>
      </Switch>
    </Router>
  );
}

export default App;
