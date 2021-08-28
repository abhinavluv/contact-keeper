import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Layout/Navbar.component';
import Home from './components/Pages/Home.component';
import About from './components/Pages/About.component';

function App() {
    return (
        <Router>
            <>
                <Navbar />
                <div className='container'>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/about' component={About} />
                    </Switch>
                </div>
            </>
        </Router>
    );
}

export default App;
