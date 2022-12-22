import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './layout/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import AddBook from './books/AddBook';
import EditBook from './books/EditBook';
import ViewBook from './books/ViewBook';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>

        <Routes>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/books/add" component={AddBook} />
          <Route exact path="/books/edit/:id" component={EditBook} />
          <Route exact path="/books/:id" component={ViewBook} />
          <Route component={NotFound}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;