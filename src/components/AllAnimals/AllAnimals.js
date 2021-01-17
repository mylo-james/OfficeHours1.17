import { animals } from '../../data/animals';
const AllAnimals = () => {
    console.log(animals);
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
                {animals.map((animal) => {
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
