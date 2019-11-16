import axios from "axios";
import qs from 'qs';

const CLIENT_ID = '';
const REDIRECT_URL = '';
const STATE = '';
const TOKEN = '';
const ACCOUNT_ID = '';

export const getAuth = () => {
  const url = `https://auth.monzo.com/?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=code&state=${STATE}`;
  const response = axios.get(url);
  console.log(response);
}

export const whoAmI = () => {
  const url = 'https://api.monzo.com/ping/whoami';
  const response = axios.get(url, { headers: {"Authorization" : `Bearer ${TOKEN}`} });
  console.log(response);
}

export const getAccounts = () => {
  const url = 'https://api.monzo.com/accounts';
  const response = axios.get(url, { headers: {"Authorization" : `Bearer ${TOKEN}`} });
  console.log(response);
}

export const createFeedItem = () => {
  const url = 'https://api.monzo.com/feed';
  let config = {
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    }
  }

  const data = qs.stringify({
    account_id: ACCOUNT_ID,
    type: 'basic',
    url: 'https://google.com',
    "params[title]": '🌳 Your Journey Is Booked',
    "params[body]": 'You\'ve saved 4 trees with this journey',
    "params[image_url]": 'https://image.flaticon.com/icons/png/512/124/124555.png',
  });

  const response = axios.post(url, data, config);
  console.log(response);
}
