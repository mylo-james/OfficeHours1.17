/* 
    Create a context - create a file cab
    Create provider component - give component access to the file cab
    Provide a value to the context - fill the file cab
       Create some state with default as the animals from data
       Pass state to the context
    Create custom hook - grab info from file cab 
*/
import { createContext, useState, useContext } from 'react';
import { animals as animalData } from '../data/animals';

const animalContext = createContext();

export const useAnimals = () => useContext(animalContext);

const AnimalContextProvider = (props) => {
    const [animals, setAnimals] = useState(animalData);

    return (
        <>
            <animalContext.Provider value={{ animals, setAnimals }}>
                {props.children}
            </animalContext.Provider>
        </>
    );
};

export default AnimalContextProvider;
