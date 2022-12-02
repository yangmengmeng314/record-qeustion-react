
import './App.css';

import { Suspense } from 'react'
import RoutesConfig from './routes'

function App() {
    return (
        <div className="App">
            <Suspense>
                <RoutesConfig></RoutesConfig>
            </Suspense>
        </div>
    );
}

export default App;
