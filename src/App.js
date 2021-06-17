import Home from './components/Home'
import { BrowserRouter, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'

import Header from './components/Header'
import Footer from "./components/Footer"

import Overview from "./components/Overview";
import Mission from './components/Mission'


function App() {
  return (
    <BrowserRouter>
      {/* CSS Reset */}
      <CssBaseline />

      {/* Header */}
      <Header />

      {/* Main */}
      <Route exact path="/" component={Home} />
      <Route exact path="/overview" component={Overview} />
      <Route exact path="/mission" component={Mission} />

      {/* Footer */}
      <Footer/>

    </BrowserRouter>
  );
}

export default App;
