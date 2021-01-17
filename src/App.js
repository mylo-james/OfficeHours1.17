import AllAnimals from './components/AllAnimals';
import { Switch, Route } from 'react-router-dom';
function App() {
    return (
        <>
            <Switch>
                <Route exact path='/'>
                    <AllAnimals />
                </Route>
            </Switch>
        </>
    );
}

export default App;
