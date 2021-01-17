import { Switch, Route } from 'react-router-dom';
import AllAnimals from './components/AllAnimals';
import AddAnimal from './components/AddAnimal';

function App() {
    return (
        <>
            <Switch>
                <Route exact path='/'>
                    <AllAnimals />
                </Route>
                <Route exact path='/add'>
                    <AddAnimal />
                </Route>
            </Switch>
        </>
    );
}

export default App;
