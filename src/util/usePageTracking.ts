// From https://stackoverflow.com/questions/34836500/how-to-set-up-google-analytics-for-react-router

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ReactGA from "react-ga4";

export default function usePageTracking () {
  const location = useLocation();

  useEffect(() => {
    // track pageview with react-ga4
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search, });
  }, [location]);
};