import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAnimals } from '../../context/AnimalContext';

const AddAnimal = () => {
    const { animalTypes, animals, setAnimals } = useAnimals();
    const [name, setName] = useState('');
    const [type, setType] = useState(animalTypes[0]);
    const [bio, setBio] = useState('');
    const [asleep, setAsleep] = useState(false);
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const newErrors = [];
        if (name.length < 2) {
            newErrors.push('Name should be longer');
        }
        if (bio.length < 10) {
            newErrors.push('Bio should be longer');
        }
        if (bio.length > 20) {
            newErrors.push('Bio should be shorter');
        }
        setErrors(newErrors);
    }, [name, bio]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAnimal = {
            name,
            type,
            bio,
            asleep,
        };

        setAnimals([...animals, newAnimal]);
        console.log(newAnimal);

        history.push('/');
    };

    return (
        <>
            <h1>Add Animal</h1>
            <ul>
                {errors.map((error) => (
                    <li key={error}>{error}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
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
                <button type='submit'>Submit</button>
            </form>
        </>
    );
};

export default AddAnimal;
