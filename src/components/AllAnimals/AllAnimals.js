import { useAnimals } from '../../context/AnimalContext';

const AllAnimals = () => {
    const animalInfo = useAnimals();
    console.log(animalInfo);
    return (
        <>
            <h1>All Animals</h1>
            {/* 
                display for each animal
                  h3 of name
                  p of type
                  p of bio
                  if asleep p of asleep else p of awake
            */}
            <ul>
                {animalInfo.animals.map((animal) => {
                    return (
                        <li key={`${animal.name}-${animal.type}`}>
                            <h3>{animal.name}</h3>
                            <p>{animal.type}</p>
                            <p>{animal.bio}</p>
                            <>{animal.asleep ? 'asleep' : 'awake'}</>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default AllAnimals;
