import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Home from './components/pages/Home/Home';
import Work from './components/pages/Work/Work';
import Projects from './components/pages/Projects/Projects';


function App() {
  // initialize router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/work",
      element: <Work />
    },
    {
      path: "/projects",
      element: <Projects />
    }
  ]);

  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
