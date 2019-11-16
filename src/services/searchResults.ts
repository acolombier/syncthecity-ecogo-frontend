import axios from 'axios';

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

  const requestData = {
    from: getLonLatForCity(from),
    to: getLonLatForCity(to),
  }

  const results = (await axios.post(url, requestData)).data;
  return results;
}

const getLonLatForCity = (city: string) => {
  const lowercaseCity = city.toLowerCase();
  switch (lowercaseCity) {
    case 'london':
      return {
        lat: 51.5412,
        lon: -0.0036,
      }
    case 'paris':
      return {
        lat: 48.81547,
        lon: 2.36298,
      }
  };
}
