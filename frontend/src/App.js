import logo from './logo.svg';
import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import Home from './containers/Home/Home';
import BlogDetail from './containers/BlogsDetails/BlogDetail';
import NewBlog from './containers/NewBlog/NewBlog';
import Layout from './containers/Layout/Layout';

const configRouter = [
  {
    path : '/',
    element : <Login/>
  },
  {
    path : 'register',
    element : <Register/>
  },
  {
    path : '/home',
    element : <Home/>
  },
  {
    path : '/blogDetails/:id',
    element : <BlogDetail/>
  },
  {
    path : '/createBlog',
    element : <NewBlog/>
  }

].map(route =>(
  {...route,element:<Layout>{route.element}</Layout>}
  ))

const appRouter = createBrowserRouter(configRouter);
function App() {
  return (
    
    <div className="App">
      <RouterProvider router={appRouter}/>
    </div>
   

  );
}

export default App;
