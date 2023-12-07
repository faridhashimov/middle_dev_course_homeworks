import '../Characters/Characters.css'

const Episode = ({ item }) => {
    const { name, air_date, episode,created } = item
    return (
        <div className="characterContainer">
            <div className="characterImgContainer">
                <img
                    src="https://ew.com/thmb/2WICZV4N-3kCLVCCflkwCGdo0a4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Rick-and-Morty-Tout-051123-3a4eddf72f0546549c90cf1fed8881b0.jpg"
                    alt={name}
                />
            </div>
            <div className="characterInfoContainer">
                <span>
                    <b>Name: </b>
                    {name}
                </span>
                <span>
                    <b>Air Date: </b>
                    {air_date}
                </span>
                <span>
                    <b>Episode: </b>
                    {episode}
                </span>
                <span>
                    <b>Created: </b>
                    {created.slice(0,10)}
                </span>
            </div>
        </div>
    )
}

export default Episode
