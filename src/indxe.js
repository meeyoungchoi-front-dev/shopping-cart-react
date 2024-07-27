import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import { ProductProvider} from './contextAPI';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <ProductProvider>
        <Router>
            <ReadableStream.StrictMode>
                <App/>
            </ReadableStream.StrictMode>
        </Router>
    </ProductProvider>,
    document.getElementById('root')
);

serviceWorker.unregister();