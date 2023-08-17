import Link from 'next/link';

const CharacterCard = ({ character }) => {
    return (
        <Link href={`/characters/${character.id}`}>
            <div className="bg-white p-4 rounded shadow cursor-pointer">
                <h2 className="text-xl font-semibold">{character.name}</h2>
                <p>Date of Birth: {character.dateOfBirth}</p>
            </div>
        </Link>
    );
};

export default CharacterCard;
