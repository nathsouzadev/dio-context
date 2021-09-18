import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getRouterConfig } from './routes/router';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const getRouters = () => {
    return getRouterConfig().map((route, index) => {
      const props = {
        path: route.path,
        exact: route.exact,
        component: route.component,
      };
      return <Route key={index} {...props} />;
    });
  };

  return (
    <BrowserRouter>
      <Header />
      <Switch>{getRouters()}</Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
