import { GET_LIST, DELETE_ITEMS, ADD_ITEMS } from "../actions/types";

const initState = {
  mylist: [
    {
      title: "Futurama",
      id: 1,

      img: "http://cdn1.nflximg.net/webp/7621/3787621.webp"
    },

    {
      title: "The Interview",

      id: 2,

      img: "http://cdn1.nflximg.net/webp/1381/11971381.webp"
    },

    {
      title: "Gilmore Girls",

      id: 3,

      img: "http://cdn1.nflximg.net/webp/7451/11317451.webp"
    }
  ],

  recommendations: [
    {
      title: "Family Guy",

      id: 4,

      img: "http://cdn5.nflximg.net/webp/5815/2515815.webp"
    },

    {
      title: "The Croods",

      id: 5,

      img: "http://cdn3.nflximg.net/webp/2353/3862353.webp"
    },

    {
      title: "Friends",

      id: 6,

      img: "http://cdn0.nflximg.net/webp/3200/9163200.webp"
    }
  ]
};

const lists = (state = initState, action) => {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state
      };
    case DELETE_ITEMS:
      return {
        ...state,
        mylist: state.mylist.filter(mylist => mylist.id !== action.payload),
        recommendations: state.recommendations.concat(
          state.mylist.find(ele => ele.id === action.payload)
        )
      };
    case ADD_ITEMS:
      return {
        ...state,
        recommendations: state.recommendations.filter(
          recommendations => recommendations.id !== action.payload
        ),
        mylist: state.mylist.concat(
          state.recommendations.find(ele => ele.id === action.payload)
        )
      };
    default:
      return state;
  }
};

export default lists;
