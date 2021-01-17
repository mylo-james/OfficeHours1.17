import { animals } from '../../data/animals';
const AllAnimals = () => {
    console.log(animals);
    return (
        <>
            <h1>AllAnimals</h1>
            {/* 
                display for each animal
                  h3 of name
                  p of type
                  p of bio
                  if asleep p of asleep else p of awake
            */ }
        </>
    );
};

export default AllAnimals;
