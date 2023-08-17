const CharacterDetails = ({ character }) => {
    return (
        <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{character.name}</h2>
            <p>Role: {character.role}</p>
            <p>House: {character.house}</p>
            {/* Display other details as needed */}
        </div>
    );
};

export default CharacterDetails;
