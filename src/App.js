import React from 'react';
import { Home } from './screens/Home';
import { AllProducts } from './screens/AllProducts';
import { Route, Switch} from 'react-router-dom';
import { FixedHeader } from './components/FixedHeader';
import { Footer } from './components/Footer';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <FixedHeader />
      <Switch>
        <Route path='/embassyclone2' component={Home} exact />
        <Route path='/all-products' component={AllProducts} />
      </Switch>
      <Footer />
    </GlobalProvider>
  );
}

export default App;
