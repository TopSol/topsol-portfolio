import "./src/styles/global.css"
import React from 'react';
import { navigate } from 'gatsby';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const onInitialClientRender = () => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    offset: 200,
  });
};

export const wrapPageElement = ({ element, props }) => {
  const isNestedRoute = props.location.pathname.split('/').filter(Boolean).length > 2;

  // Redirect to 404 page for nested routes
  // if (isNestedRoute) {
  //   navigate('/404');
  //   return null;
  // }

  // Render the page normally if it's not a nested route
  return <React.Fragment {...props}>{element}</React.Fragment>;
};

