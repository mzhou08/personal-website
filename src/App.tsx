import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Home from './components/pages/Home/Home';
import Work from './components/pages/Work/Work';
import Projects from './components/pages/Projects/Projects';
import Resume from './components/pages/Resume/Resume';
import About from './components/pages/About/About';


function App() {
  // initialize router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/work",
      element: <Work />
    },
    {
      path: "/projects",
      element: <Projects />
    },
    {
      path: "/resume",
      element: <Resume />
    },
  ]);

  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
