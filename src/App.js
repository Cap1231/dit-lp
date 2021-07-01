import Home from './components/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core'

import Header from './components/Header'
import Footer from "./components/Footer"

import Overview from "./components/Overview"
import Mission from './components/Mission'
import Recruitment from "./components/Recruitment"
import Contact from "./components/Contact"
import PrivacyPolicy from "./components/PrivacyPolicy"
import Service from "./components/Service"

const useStyles = makeStyles({
  main: {
    // footer位置調整のため
    minHeight: 'calc(100vh - 78px)',
  },
})

function App() {
  const classes = useStyles()
  return (
    <BrowserRouter>
      {/* CSS Reset */}
      <CssBaseline />

      {/* Header */}
      <Header />

      {/* Main */}
      <div className={classes.main}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/overview" component={Overview} />
          <Route exact path="/mission" component={Mission} />
          <Route exact path="/recruitment" component={Recruitment} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <Route exact path="/service" component={Service} />

          {/* 404 => home に遷移させる */}
          <Route component={Home} />
        </Switch>
      </div>

      {/* Footer */}
      <Footer/>

    </BrowserRouter>
  );
}

export default App;
