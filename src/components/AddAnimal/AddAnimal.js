import { useState } from 'react';
import { useAnimals } from '../../context/AnimalContext';

const AddAnimal = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [bio, setBio] = useState('');
    const [asleep, setAsleep] = useState(false);
    const { animalTypes } = useAnimals();

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
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        {animalTypes.map((animalType) => (
                            <option key={animalType} value={animalType}>
                                {animalType}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Bio:
                    <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                    />
                </label>
                <label>
                    Asleep:
                    <input
                        type='checkbox'
                        onChange={() => setAsleep((prevState) => !prevState)}
                        checked={asleep}
                    />
                </label>
            </form>
        </>
    );
};

export default AddAnimal;
