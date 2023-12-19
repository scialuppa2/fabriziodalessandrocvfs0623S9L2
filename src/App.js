import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/MyNav';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import MyFooter from './components/MyFooter';
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <div>
      <MyNavbar />
      <Welcome />
      <Container>
        <AllTheBooks />
      </Container>
        <MyFooter />

    </div>
  );
}

export default App;
