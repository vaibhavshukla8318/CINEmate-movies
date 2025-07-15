import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

export const CreateContextAPI = createContext();

export const ContextApiProvider = ({children}) =>{

  const [movies, setMovies] = useState([]);

  const API = process.env.REACT_APP_API_KEY;
  
     useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API}`);
          setMovies(response.data.results);
         
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      };
  
      fetchData();
    }, []);

    // const contextData = {
    //   movies
    // }

  return <CreateContextAPI.Provider value={{movies}}>
    {children}
  </CreateContextAPI.Provider>
}

export const useContextAPI = () =>{
  const context = useContext(CreateContextAPI);
  if(context === undefined){
    throw new Error("component must be wrapped into ContextApiProvide from ContextApi.jsx")
  }
  return context;
}