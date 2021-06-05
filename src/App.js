import Home from './components/Home'
import Header from './components/Header'
import { BrowserRouter, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';


function App() {
  return (
    <BrowserRouter>
      {/* CSS Reset */}
      <CssBaseline />

      {/* Header */}
      <Header />

      {/* Main */}
      <Route exact path="/" component={Home} />

      {/* Footer */}
    </BrowserRouter>
  );
}

export default App;
