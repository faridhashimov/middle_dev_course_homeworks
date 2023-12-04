import './../Characters/Characters.css'

const Location = ({ item }) => {
    const { name, type, dimension, created } = item
    return (
        <div className="characterContainer">
            <div className="characterInfoContainer">
                <span>
                    <b>Name: </b>
                    {name}
                </span>
                <span>
                    <b>Type: </b>
                    {type}
                </span>
                <span>
                    <b>Dimension: </b>
                    {dimension}
                </span>
                <span>
                    <b>Created: </b>
                    {created.slice(0, 10)}
                </span>
            </div>
        </div>
    )
}

export default Location
