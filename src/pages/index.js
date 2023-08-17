//Fetching the data
// services/api.js

const API_URL = 'https://hp-api.onrender.com'

export async function getCharacters() {
    try {
        const response = await fetch(`${API_URL}/api/characters`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching data:', error);
        return { props: { characters: [] } };
    }

}

// other API functions

import CharacterCard from '../components/CharacterCard';

const HomePage = ({ characters }) => {
    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {characters.map((character) => (
                <CharacterCard key={character.id} character={character} />
            ))}
        </div>
    );
};

export default HomePage;
