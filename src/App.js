import { Fragment } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import Boost from './components/Boost';
import Footer from './components/Footer';
function App() {
  return (
    <Fragment>
      <Nav></Nav>
      <Header></Header>
      <Main></Main>
      <Boost></Boost>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
