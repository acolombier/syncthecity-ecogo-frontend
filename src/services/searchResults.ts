import axios from 'axios';
import { LatLon } from '../components/Map';
import { GeoCodeResponse } from '../data/geocode';

export const fetchSearchResults = async (to: string, from: string) => {
  const url = `http://192.168.10.207:8080/search`;
  const fromCoords = await geocode(from);
  const toCoords = await geocode(to);

  const requestData = {
    from: { lat: fromCoords.latitude, lon: fromCoords.longitude },
    to: { lat: toCoords.latitude, lon: toCoords.longitude }
  };

  const results = (await axios.post(url, requestData)).data;
  return results;
};

const geocode = async (searchTerm: string): Promise<LatLon> => {
  const key = 'e629040e4b7243';
  const url = `https://eu1.locationiq.com/v1/search.php?key=${key}&q=${searchTerm}&format=json`;

  const results: GeoCodeResponse = (await axios.get(url)).data;

  return {
    latitude: parseFloat(results.lat),
    longitude: parseFloat(results.lon)
  };
};
