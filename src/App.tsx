import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import ReactGA from 'react-ga4';

import Home from './components/pages/Home/Home';
import Work from './components/pages/Work/Work';
import Projects from './components/pages/Projects/Projects';
import Resume from './components/pages/Resume/Resume';
import About from './components/pages/About/About';
import usePageTracking from './util/usePageTracking';


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

  // initialize google analytics
  const GOOGLE_ANALYTICS_MEASUREMENT_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_MEASUREMENT_ID
  ReactGA.initialize(GOOGLE_ANALYTICS_MEASUREMENT_ID as string);

  usePageTracking();

  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
