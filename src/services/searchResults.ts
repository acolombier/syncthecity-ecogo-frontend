import axios from 'axios';
import { LatLon } from '../components/Map';
import { GeoCodeResponse } from '../data/geocode';

export interface ArrivalPoint {
  additionalProperties: any[];
  commonName: string;
  icsCode: string;
  lat: number;
  lon: number;
  naptanId: string;
  placeType: string;
  platformName: string;
  $type: string;
}

export interface DeparturePoint {
  additionalProperties: any[];
  commonName: string;
  icsCode: string;
  lat: number;
  lon: number;
  naptanId: string;
  placeType: string;
  platformName: string;
  $type: string;
}

export interface StepInfo {
  arrivalPoint: ArrivalPoint;
  departurePoint: DeparturePoint;
  distance: number;
  type: string;
}

export interface Step {
  arrivalDateTime: Date;
  cost: number;
  duration: number;
  startDateTime: Date;
  steps: StepInfo[];
  type: string;
}

export interface JourneyResult {
  arrivalCommonName: string;
  arrivalDateTime: Date;
  co2: number;
  cost: number;
  duration: number;
  startCommonName: string;
  startDateTime: Date;
  steps: Step[];
}

export const fetchSearchResults = async (to: string, from: string): Promise<JourneyResult[]> => {
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
