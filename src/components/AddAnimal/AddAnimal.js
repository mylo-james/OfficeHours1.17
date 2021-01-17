import { useState } from 'react';
import { useAnimals } from '../../context/AnimalContext';

const AddAnimal = () => {
    const [name, setName] = useState('');
    const { animalTypes } = useAnimals();
    console.log(animalTypes);
    return (
        <>
            <h1>Add Animal</h1>
            <form>
                <label>
                    Name:
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    Type:
                    <select>{}</select>
                </label>
                <label>
                    Bio:
                    <textarea></textarea>
                </label>
                <label>
                    Asleep:
                    <input type='checkbox' />
                </label>
            </form>
        </>
    );
};

export default AddAnimal;
