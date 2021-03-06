import { LOAD_SUCCESS} from "../actions/actionTypes";
import { Actions } from "../types/actionTypes";
import { MoviesState } from "../types/types";
import { Api } from './../../api_calls/dataApi'

const InitialState:MoviesState={
    data:[{
      "title": "Star Wars: The Last Jedi",
      "image": "https://api.androidhive.info/json/movies/starwars.jpg",
      "price": "₹ 160"
  },
{
      "title": "Shape Of Water",
      "image": "https://api.androidhive.info/json/movies/shape_of_water.jpg",
      "price": "₹ 130"
  },
  {
      "title": "Baahubali: The Conclusion",
      "image": "https://api.androidhive.info/json/movies/baahubali2.jpg",
      "price": "₹ 210"
  },
  {
      "title": "Thor: The Ragnarok",
      "image": "https://api.androidhive.info/json/movies/thor_ragnarok.jpg",
      "price": "₹ 170"
  },
  {
      "title": "Justice League",
      "image": "https://api.androidhive.info/json/movies/justice_league.jpg",
      "price": "₹ 120"
  },
  {
      "title": "Coco",
      "image": "https://api.androidhive.info/json/movies/coco.jpg",
      "price": "₹ 110"
  },
  {
      "title": "Jumanji: Welcome To The Jungle",
      "image": "https://api.androidhive.info/json/movies/jumanji.jpg",
      "price": "₹ 120"
  },
  {
      "title": "Murder On The Orient Express",
      "image": "https://api.androidhive.info/json/movies/murder_on_express.jpg",
      "price": "₹ 160"
  },
  {
      "title": "Spider-Man: Homecoming",
      "image": "https://api.androidhive.info/json/movies/spiderman_homecoming.jpg",
      "price": "₹ 190"
  },
  {
      "title": "Ferdinand",
      "image": "https://api.androidhive.info/json/movies/ferdinand.jpg",
      "price": "₹ 100"
  },
  {
      "title": "The Disaster Artist",
      "image": "https://api.androidhive.info/json/movies/disaster_artist.jpg",
      "price": "₹ 90"
  },
  {
      "title": "Lady Bird",
      "image": "https://api.androidhive.info/json/movies/lady_bird.jpg",
      "price": "₹ 80"
  }
  ],
    error:false,
    loading:false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state=InitialState,action:Actions){
    switch(action.type){
          case LOAD_SUCCESS:
            fetch("https://api.androidhive.info/json/movies_2017.json")
            .then((res) => res.json())
            .then((json) => {
                console.log("hi",json);
                // return json;
            })
            return {
              ...state,
              data: action.payload,
            };
            default : return state
    }

       
    }
