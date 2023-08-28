import { RouterProvider, createHashRouter } from 'react-router-dom';
import Home from './pages/Home';
import PoliticalDetails from './pages/PoliticalDetails';

const App = () => {
  const router = createHashRouter(
    [
      {
        element: <Home />,
        path: '/',
      },
      {
        element: <PoliticalDetails />,
        path: '/:political',
      },
    ], 
    { basename: "/" }
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
