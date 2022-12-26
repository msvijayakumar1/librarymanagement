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
        <Navbar/>

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/books/add" element={<AddBook/>} />
          <Route exact path="/books/edit/:id" element={<EditBook/>}/>
          <Route exact path="/books/:id" element={<ViewBook/>} />
          <Route element={<NotFound/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;