import CharacterDetails from '../../components/CharacterDetails';

const API_URL = 'https://hp-api.onrender.com/api/characters';

export async function getServerSideProps({ params }) {
    try {
        const response = await fetch(`${API_URL}/${params.id}`);
        const character = response.data;
        return { props: { character } };
    } catch (error) {
        console.error('Error fetching character details:', error);
        return { props: { character: null } };
    }
}

const CharacterPage = ({ character }) => {
    if (!character) {
        return <div>Error loading character details.</div>;
    }

    return <CharacterDetails character={character} />;
};

export default CharacterPage;
