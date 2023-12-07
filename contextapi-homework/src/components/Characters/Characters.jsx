import './Characters.css'

const Characters = ({ item }) => {
    const { image, type, gender, status, species, name, created } = item
    return (
        <div className="characterContainer">
            <div className="characterImgContainer">
                <img src={image} alt={name} />
            </div>
            <div className="characterInfoContainer">
                <span>
                    <b>Name: </b>
                    {name}
                </span>
                <span>
                    <b>Status: </b>
                    {status}
                </span>
                <span>
                    <b>Species: </b>
                    {species}
                </span>
                <span>
                    <b>Type: </b>
                    {type}
                </span>
                <span>
                    <b>Gender: </b>
                    {gender}
                </span>
                <span>
                    <b>Created: </b>
                    {created.slice(0,10)}
                    {/* {created} */}
                </span>
            </div>
        </div>
    )
}

export default Characters
