import Home from './components/Home'
import Header from './components/Header'
import { BrowserRouter, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
