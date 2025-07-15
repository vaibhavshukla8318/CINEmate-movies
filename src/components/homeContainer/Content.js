import Slide from './Slide'
import CardContainer from './CardContainer'
import Footer from './Footer'
import style from '../../css/Home.module.css'
import { useContextAPI } from '../../contextAPI/ContextApi';


const Content = () => {

  const {movies} = useContextAPI();
  
  return (
    <div className={style.content}>
      {movies.length > 0 ? <div>
        <Slide/>
        <CardContainer/>
         <Footer/>
      </div> 
      :
      <div className={style.offline}>
        please check internet connection...
      </div>
      }
      
     
    </div>
  )
}

export default Content