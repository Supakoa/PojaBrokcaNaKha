import React  from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from "react-router-dom";
import Left from './subdirect/navfolder/Left';
import Footer from './subdirect/footer/Footer';
import './Appstyle.css';
import Main from './subdirect/Main';


function App() {
    return (
            <Router>
                <div className="app">
                    <Left />
                    <Main />
                </div>
                <Footer />
            </Router>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
