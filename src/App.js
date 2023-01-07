import { Fragment } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
function App() {
  return (
    <Fragment>
      <Nav></Nav>
      <Header></Header>
      <Main></Main>
    </Fragment>
  );
}

export default App;
