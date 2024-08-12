import './App.css';
import {BrowserRouter as Router, Route,Routes,Link} from 'react-router-dom'
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

function App() {
  return(
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to='/'>Home Page</Link>
          <Link to='/createpost'>Create A Post</Link>
          <Link to='/login'>Sign In</Link>
          <Link to='/registration'>Sign Up</Link>
        </div>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/createpost' exact Component={CreatePost} />
          <Route path='/posts/:id' exact Component={Post} />
          <Route path='/registration' exact Component={Registration} />
          <Route path='/login' exact Component={Login} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
