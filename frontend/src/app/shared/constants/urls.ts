const BASE_URL = "https://food-store1-master-server.vercel.app"

export const FOOD_URL = BASE_URL +'/api/food';
export const FOOD_TAG_URL = BASE_URL +'/api/food/tag';
export const FOOD_BY_SEARCH_URL = BASE_URL +'/api/food/search/';
export const FOOD_BY_TAG_URL = BASE_URL +'/api/food/tag/';
export const FOOD_BY_ID_URL = BASE_URL +'/api/food/';


export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
export const USER_REGISTER_URL = BASE_URL + '/api/users/register';


export const ORDERS_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
export const ORDER_NEW_FOR_CURRENT_USER_URL = ORDERS_URL + '/newOrderForCurrentUser';
export const ORDER_PAY_URL = ORDERS_URL + '/pay';
export const ORDER_TRACK_URL = ORDERS_URL + '/track/';


export const USER_UPLOAD_PROFILE_PICTURE_URL = BASE_URL + '/api/users/profilePicture'
