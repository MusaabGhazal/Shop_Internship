import { Shop } from './components/Shop';
import Dashboard from './components/Dashboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './components/Error';

const router = createBrowserRouter([
	{  path : '/',    element : <Shop/>   },	 	
	{  path : '/dashboard',    element : <Dashboard/> , errorElement : <Error/>  },	 	
]);

function App() {


  return (
      <RouterProvider router={router} />
  );
}

export default App;


  