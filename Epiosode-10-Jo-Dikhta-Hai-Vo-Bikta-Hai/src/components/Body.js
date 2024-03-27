import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utills/useOnlineStatus";


const Body = () => {
      
        const [ListOfRestaurants,setListOfRestaurant] = useState([]);
         const [filteredRestaurant,setFilteredRestaurant] = useState([]);
        const [searchText,setSearchText] = useState("");

       useEffect(() =>{
            fetchData();
       },[]);
      const fetchData = async () =>{
           const data = await fetch(
                 "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.775411574373877&lng=86.14687514014905&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
          
            const json = await data.json();

            console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            
           setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
           setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        };

      const onlineStatus = useOnlineStatus();

      if(onlineStatus === false)
          return (
                <h1>Looks like yo're offline!! Please check you Internet Connection </h1>
            )

    

        return ListOfRestaurants?.length === 0 ? <Shimmer/> :  (
      <div className="body">
        <div className="filter flex">
            <div className="search m-4 p-4">
               <input
                  type="text" 
                  className="border border-solid border-black" 
                  value={searchText} onChange={(e)=>{
                  setSearchText(e.target.value);
               }}
                />
             <button 
               className="px-4 py-2 bg-green-100 m-2 rounded-lg"
               onClick={() =>{

                const filteredRestaurant = ListOfRestaurants.filter(
                    (res) =>
                     res.data.name.toLowerCase().includes(searchText.toLowerCase())
                );
                 setFilteredRestaurant(filteredRestaurant);
               }}
              >
                Search
            </button>

           </div>
          <div  className=" m-4 p-4 flex items-center ">

          <button className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={ () =>
              {
                   const filteredList = ListOfRestaurants.filter(

                    (res) => res.data.avgRating>4
                );

                 setListOfRestaurant(filteredList);
              }
            }
          >Top Rated Restaurants
         </button>
         </div>
        </div>
        <div className="flex flex-wrap">
          {filteredRestaurant?.map((restaurant) => (
             <Link
                 key={restaurant.info.id}
                 to= {"/restaurants/"+restaurant.info.id}>
                <RestaurantCard resData={restaurant} 
                /> 
               </Link>
          ))}
        </div>
      </div>
    );
  };

  export default Body;