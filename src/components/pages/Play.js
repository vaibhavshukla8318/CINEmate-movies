import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { TeaserData, AnimeData, MoviesDataTrailer, WebSeriesData } from '../dataContainer/Data';
import style from '../../css/detailsPage.module.css';
import axios from 'axios'


// export const PageDetailsAnimePlay = () => {



//   const { itemId } = useParams();
//   const posterDetails = AnimeData.find(item => item.id === parseInt(itemId));

//    return (
//     <div className={style.selectedItemContainer}>
//       {/* <Navbar /> */}
//       {posterDetails && (
//         <div className={`${style.selectedItem} ${style.animeSelectedItem}`}>
//           <iframe src={posterDetails.video} className={style.iframe} title="Video Player" frameBorder="0" allowFullScreen></iframe>
//           <div className={style.posterDetails}>
//             <Link to="/home" className={style.link}>Home</Link>
//             {/* <img src={posterDetails.poster} alt={posterDetails.title} /> */}
//             <div className={style.linkContainer}>
//               {/* <Link to="/home" className={style.link}>Home</Link> */}
//               <div className={style.details}>
//                 <h2>{posterDetails.title}</h2>
//                 {/* <p>{posterDetails.season}</p>
//                 <p>{posterDetails.language}</p> */}
//                 <p>{posterDetails.year}</p>
//                 {/* <p>{posterDetails.genre}</p> */}
//               </div>
//             </div>
              

//           </div>

//           <div className={style.bottomIframeContainer}>
//           {videos[itemId]?.slice().reverse().map((video) => (
//              <div key={video.key}>
//               <iframe
//                 key={video.key}
//                 src={`https://www.youtube.com/embed/${video.key}`}
//                 title="YouTube video player"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 className={style.bottomIframe}
//               >
//               </iframe>
//               <div className={style.iframeContainer}></div>
//             </div>
//           ))}
//           </div>
//         {/* Add more details as needed */}
//       </div>
//       )}
//     </div>
//   )

// }
// export const PageDetailsAnimePlay = () => {

//   const [videos, setVideos] = useState([]);
//   const [selectedVideoKey, setSelectedVideoKey] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(true);

  // const { itemId } = useParams();
  // const posterDetails = AnimeData.find(item => item.id === parseInt(itemId));

//   const fetchYouTubeVideos = async () => {
//     try {
//       // Make a request to the YouTube Data API to fetch videos
//       const response = await axios.get(
//         `https://www.googleapis.com/youtube/v3/playlistItems`, {
//           params: {
//             part: 'snippet',
//             playlistId: 'PLv1XPZCxNOvX8hG0tEjAEERdo5kt9Q8E_',
//             // playlistId: 'PLv1XPZCxNOvUzuaGJt1tKLtXUbmXC1vhY',
//             key: 'AIzaSyDsKb2w7pPipyiONQA3SgwaZ1siwwhfTHk', // Replace with your YouTube Data API key
//             maxResults: 10 // Adjust as needed
//           }
//         }
//       );
//       setVideos(response.data.items);
//     } catch (error) {
//       console.error('Error fetching YouTube videos:', error);
//     }
//   };

//   useEffect(() => {
//     fetchYouTubeVideos();
//   }, []); 


//   const playVideo = (videoKey) => {
//     setSelectedVideoKey(videoKey);
//   };

//   const closeVideo = () => {
//     setIsPlaying(false);
//   };

//   const hideIframe2 = () => {
//     const iframe2 = document.querySelector(`.${style.iframe2}`);
//     if (iframe2) {
//       iframe2.style.display = 'none';
//     }
//   };

//    return (
//     <div className={style.selectedItemContainer}>
//       {/* <Navbar /> */}
//       {posterDetails && (
//         <div className={`${style.selectedItem} ${style.animeSelectedItem}`}>
//           <iframe src={posterDetails.video} className={`${style.iframe} ${style.iframe2}`} title="Video Player" frameBorder="0" allowFullScreen></iframe>
//           {selectedVideoKey && (
//               <iframe
//                 src={posterDetails.video}
//                 title="YouTube video player"
//                 frameBorder="0"
//                 allowFullScreen
//                 className={style.iframe}
//               ></iframe>
//             )}
//           <div className={style.posterDetails}>
//             <Link to="/home" className={style.link}>Home</Link>
//             {/* <img src={posterDetails.poster} alt={posterDetails.title} /> */}
//             <div className={style.linkContainer}>
//               {/* <Link to="/home" className={style.link}>Home</Link> */}
//               <div className={style.details}>
//                 <h2>{posterDetails.title}</h2>
//                 {/* <p>{posterDetails.season}</p>
//                 <p>{posterDetails.language}</p> */}
//                 <p>{posterDetails.year}</p>
//                 {/* <p>{posterDetails.genre}</p> */}
//               </div>
//             </div>
              

//           </div>

//           <div className={style.bottomIframeContainer}>
//           {videos.map((video) => (
//              <div key={video.key} onClick={() => { playVideo(video.key); hideIframe2();}}>
//               <iframe
//                 key={video.key}
//                 src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`} 
//                 title="YouTube video player"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 className={style.bottomIframe}
//               >
//               </iframe>
//               <div className={style.iframeContainer} onClick={closeVideo}></div>
//             </div>
//           ))}
//           </div>
//         {/* Add more details as needed */}
//       </div>
//       )}
//     </div>
//   )

// }


// export const PageDetailsAnimePlay = () => {
  
//   const [selectedVideoKey, setSelectedVideoKey] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const { itemId } = useParams();
  
//   const [videos, setVideos] = useState({});

//   const posterDetails = AnimeData.find(item => item.id === parseInt(itemId));

//   const fetchYouTubeVideos = async () => {
//     try {
//       // Make a request to the YouTube Data API to fetch videos
//       const response = await axios.get(
//         `https://www.googleapis.com/youtube/v3/playlistItems`, {
//           params: {
//             part: 'snippet',
//             playlistId: 'PLv1XPZCxNOvX8hG0tEjAEERdo5kt9Q8E_',
//             // playlistId: 'PLv1XPZCxNOvUzuaGJt1tKLtXUbmXC1vhY',
//             key: 'AIzaSyDsKb2w7pPipyiONQA3SgwaZ1siwwhfTHk', // Replace with your YouTube Data API key
//             maxResults: 10 // Adjust as needed
//           }
//         }
//       );
//       setVideos(response.data.items);
//     } catch (error) {
//       console.error('Error fetching YouTube videos:', error);
//     }
//   };

//   useEffect(() => {
//     fetchYouTubeVideos();
//   }, []); 

  
//   const playVideo = (videoKey) => {
//     setSelectedVideoKey(videoKey);
//   };

//   const closeVideo = () => {
//     setIsPlaying(false);
//   };

//   const hideIframe2 = () => {
//     const iframe2 = document.querySelector(`.${style.iframe2}`);
//     if (iframe2) {
//       iframe2.style.display = 'none';
//     }
//   };

//   return (
//     <div className={style.selectedItemContainer}>
//       {/* <Navbar /> */}
//       {posterDetails && (
//         <div className={style.selectedItem}>
//           <>
           
//               <>
//               <iframe
                 
//                   src={`${posterDetails.video}?${isPlaying ? 'autoplay=1&' : ''}`}
//                   title="YouTube video player"
//                   frameBorder="0"
//                   allowFullScreen
//                   className={`${style.iframe} ${style.iframe2}`}
//                 ></iframe>
//               </>
           

//             {selectedVideoKey && (
//               <iframe
//                 src={`https://www.youtube.com/embed/${selectedVideoKey}`}
//                 title="YouTube video player"
//                 frameBorder="0"
//                 allowFullScreen
//                 className={style.iframe}
//               ></iframe>
//             )}
//           </>
//           <div className={style.posterDetails}>
//             <Link to="/home" className={style.link}>Home</Link>
//             {/* <img src={`https://image.tmdb.org/t/p/w500${trailerDetails.poster_path}`} alt={trailerDetails.title} /> */}
//             <div className={style.details}>
//               <h2>{posterDetails.title}</h2>
//               {/* <p>{trailerDetails.overview}</p> */}
//               {/* <p className={style.rating}>
//                 <img src={Star} />
//                 {trailerDetails.vote_average}
//               </p> */}
//               <p>{posterDetails.release_date}</p>
//               {/* <p>{trailerDetails.genres.map(genre => genre.name).join(', ')}</p> */}
//             </div> 
//           </div>
//           <div className={style.bottomIframeContainer}>
//           {videos.map((video) => (
//              <div key={video.key} onClick={() => { playVideo(video.key); hideIframe2();}}>
//               <iframe
//                 key={video.key}
//                 src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`} 
//                 title="YouTube video player"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 className={style.bottomIframe}
//               >
//               </iframe>
//               <div className={style.iframeContainer} onClick={closeVideo}></div>
//             </div>
//           ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };


const PageDetails = ({playListID}) => {
  
  const [selectedVideoKey, setSelectedVideoKey] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false); // Set initial value to false
  const { itemId } = useParams();
  
  const [videos, setVideos] = useState([]);

  const posterDetails = AnimeData.find(item => item.id === parseInt(itemId));

  const fetchYouTubeVideos = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/playlistItems`, {
          params: {
            part: 'snippet',
            playlistId: playListID,
            key: 'AIzaSyCbqcEimBIvB4sVM_NDbkiBTcvdWBhVHPc',
            maxResults: 10 
          }
        }
      );
      setVideos(response.data.items);
    } catch (error) {
      console.error('Error fetching YouTube videos:', error);
    }
  };

  useEffect(() => {
    fetchYouTubeVideos();
  }, []); 

  const playVideo = (videoKey) => {
    setSelectedVideoKey(videoKey);
    setIsPlaying(true); // Set isPlaying to true when video is played
  };

  const closeVideo = () => {
    setSelectedVideoKey(null); // Clear selected video key when closing
    setIsPlaying(false); // Set isPlaying to false when closing
  };

  const hideIframe2 = () => {
    const iframe2 = document.querySelector(`.${style.iframe2}`);
    if (iframe2) {
      iframe2.style.display = 'none';
    }
  };
  return (
    <div className={style.selectedItemContainer}>
      {posterDetails && (
        <div className={style.selectedItem}>
          <div>
          <>
              <iframe
                 
                  src={`${posterDetails.video}?${isPlaying ? 'autoplay=1&' : ''}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allowFullScreen
                  className={`${style.iframe} ${style.iframe2}`}
                ></iframe>
              </>
            {selectedVideoKey && (
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideoKey}?autoplay=${isPlaying ? 1 : 0}`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
                className={`${style.iframe} ${style.iframe2}`}
              ></iframe>
            )}
          </div>
          <div className={style.posterDetails}>
            <Link to="/home" className={style.link}>Home</Link>
            <div className={style.details}>
              <h2>{posterDetails.title}</h2>
              <p>{posterDetails.release_date}</p>
            </div> 
          </div>
          <div className={style.bottomIframeContainer}>
            {videos.map((video) => (
              <div key={video.id} onClick={() => {playVideo(video.snippet.resourceId.videoId); hideIframe2();}}>
                <iframe
                  src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`} 
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={style.bottomIframe}
                >
                </iframe>
                <div className={style.iframeContainer} onClick={closeVideo}></div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const PageDetailsAnimePlay = () => (
  <>
  <PageDetails playListID='PL5BT3-cWoWWIq7KFtztkohAfMuomFcuTH'/>
  </>
)


export const PageDetailsMoviesPlay = () => {

  const { itemId } = useParams();
  const posterDetails = MoviesDataTrailer.find(item => item.id === parseInt(itemId));


   return (
    <div className={style.selectedItemContainer}>
      {/* <Navbar /> */}
      {posterDetails && (
        <div className={`${style.selectedItem} ${style.moviesSelectedItem}`}>
          <iframe src={posterDetails.video} className={style.iframe} title="Video Player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  frameBorder="0"  referrerpolicy="strict-origin-when-cross-origin"  allowFullScreen></iframe>
          {/* <iframe width="789" height="329" src="https://www.youtube.com/embed/iwF5r_yqJIs" title="Code 8 2019 BluRay 720p Hindi 2 0 English 5 1 x264 ESub VeGamovies To" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
          
          <div className={style.posterDetails}>
            <Link to="/home" className={style.link}>Home</Link>
            {/* <img src={posterDetails.poster} alt={posterDetails.title} /> */}
            <div className={style.linkContainer}>
              {/* <Link to="/home" className={style.link}>Home</Link> */}
              <div className={style.details}>
                <h2>{posterDetails.title}</h2>
                {/* <p>{posterDetails.season}</p>
                <p>{posterDetails.language}</p> */}
                <p>{posterDetails.year}</p>
                {/* <p>{posterDetails.genre}</p> */}
              </div>
            </div>
          </div>
        {/* Add more details as needed */}
      </div>
      )}
    </div>
  )

}
export const PageDetailsWebSeriesPlay = () => {


  const { itemId } = useParams();
  const posterDetails = WebSeriesData.find(item => item.id === parseInt(itemId));

   return (
    <div className={style.selectedItemContainer}>
      {/* <Navbar /> */}
      {posterDetails && (
        <div className={`${style.selectedItem} ${style.seriesSelectedItem}`}>
          <iframe src={posterDetails.video} className={style.iframe} title="Video Player" frameBorder="0" allowFullScreen></iframe>
          <div className={style.posterDetails}>
            <Link to="/home" className={style.link}>Home</Link>
            {/* <img src={posterDetails.poster} alt={posterDetails.title} /> */}
            <div className={style.linkContainer}>
              {/* <Link to="/home" className={style.link}>Home</Link> */}
              <div className={style.details}>
                <h2>{posterDetails.title}</h2>
                {/* <p>{posterDetails.season}</p>
                <p>{posterDetails.language}</p> */}
                <p>{posterDetails.year}</p>
                {/* <p>{posterDetails.genre}</p> */}
              </div>
            </div>
          </div>
        {/* Add more details as needed */}
      </div>
      )}
    </div>
  )

}

export const PlayYouTube = () => {
  const [video, setVideo] = useState(null);
  const { videoID } = useParams();

  const fetchYouTubeVideo = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos`, {
          params: {
            part: 'snippet',
            id: videoID,
            key: 'AIzaSyDsKb2w7pPipyiONQA3SgwaZ1siwwhfTHk', // Replace with your YouTube Data API key
          }
        }
      );
      setVideo(response.data.items[0]);
    } catch (error) {
      console.error('Error fetching YouTube video:', error);
    }
  };

  useEffect(() => {
    if (videoID) {
      fetchYouTubeVideo();
    }
  }, [videoID]);

  return (
    <div className={style.selectedItemContainer}>   
    
      <div className={`${style.selectedItem} ${style.seriesSelectedItem}`}>
        {video && (
          <>
          
            <iframe src={`https://www.youtube.com/embed/${video.id}`} className={style.iframe} title="Video Player" frameBorder="0" allowFullScreen></iframe>
        
            <div className={style.posterDetails}>
              <Link to="/home" className={style.link}>Home</Link>
              <div className={style.linkContainer}>
                <div className={style.details}>
                  <h2 className={style.title}>{video.snippet.title}</h2>
                  {/* Add more details here if needed */}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};


export const PlayYouTubeMovies = () => {
  const [video, setVideo] = useState(null);
  const { videoID } = useParams();

  const fetchYouTubeVideo = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos`, {
          params: {
            part: 'snippet',
            id: videoID,
            key: 'AIzaSyDsKb2w7pPipyiONQA3SgwaZ1siwwhfTHk',
          }
        }
      );
      setVideo(response.data.items[0]);
    } catch (error) {
      console.error('Error fetching YouTube video:', error);
    }
  };

  useEffect(() => {
    if (videoID) {
      fetchYouTubeVideo();
    }
  }, [videoID]);

  return (
    <div className={style.selectedItemContainer}>   
      <div className={`${style.selectedItem} ${style.seriesSelectedItem}`}>
        {video && (
          <>
          
            <iframe src={`https://www.youtube.com/embed/${video.id}`} className={style.iframe} title="Video Player" frameBorder="0" allowFullScreen></iframe>
        
            <div className={style.posterDetails}>
              <Link to="/home" className={style.link}>Home</Link>
              <div className={style.linkContainer}>
                <div className={style.details}>
                  <h2 className={style.title}>{video.snippet.title}</h2>
                  {/* Add more details here if needed */}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};