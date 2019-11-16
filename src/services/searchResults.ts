import axios from 'axios';
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

export const fetchSearchResults = async (
  to: string,
  from: string
): Promise<JourneyResult[]> => {
  const url = `https://83ee7a07.ngrok.io/search`;
  const fromResults = await geocode(from);
  const toResults = await geocode(to);
  const fromCoords = mapLatLon(fromResults[0]);
  const toCoords = mapLatLon(toResults[0]);

  const requestData = {
    from: { lat: fromCoords.latitude, lon: fromCoords.longitude },
    to: { lat: toCoords.latitude, lon: toCoords.longitude }
  };

  const results = (await axios.post(url, requestData)).data;
  return results;
};

export const fetchSearchResultsWithLatLng = async (
  to: GeoCodeResponse,
  from: GeoCodeResponse
): Promise<JourneyResult[]> => {
  const url = `https://83ee7a07.ngrok.io/search`;

  const requestData = {
    from: mapLatLon(from),
    to: mapLatLon(to)
  };

  const results = (await axios.post(url, requestData)).data;
  return results;
};

export const geocode = async (
  searchTerm: string
): Promise<GeoCodeResponse[]> => {
  const key = 'e629040e4b7243';
  const url = `https://eu1.locationiq.com/v1/search.php?key=${key}&q=${searchTerm}&countrycodes=gb,fr&format=json`;

  return (await axios.get(url)).data;
};

export const mapLatLon = (geocodeResponse: GeoCodeResponse) => {
  return {
    latitude: parseFloat(geocodeResponse.lat),
    longitude: parseFloat(geocodeResponse.lon)
  };
};
