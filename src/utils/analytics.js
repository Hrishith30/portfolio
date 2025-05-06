import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('G-181VEXW549'); 
}

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
}

export const logEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label
  });
}