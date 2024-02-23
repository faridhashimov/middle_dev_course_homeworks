import homePageBg from '../../assets/bg.jpg'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='homePage'>
        <div className="homePageBg">
          <img src={homePageBg} alt="Welcome to Rick and Morty fans site" />
        </div>
    </div>
  )
}

export default HomePage