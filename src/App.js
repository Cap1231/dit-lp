import Home from './components/Home'
import Mission from './components/Mission'
import Header from './components/Header'
import { BrowserRouter, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      {/* CSS Reset */}
      <CssBaseline />

      {/* Header */}
      <Header />

      {/* Main */}
      <Route exact path="/" component={Home} />
      <Route exact path="/mission" component={Mission} />

      {/* Footer */}
      <Footer/>

    </BrowserRouter>
  );
}

export default App;
