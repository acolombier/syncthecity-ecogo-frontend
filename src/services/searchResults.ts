import axios from 'axios';

export const fetchSearchResults = async (to: string, from: string) => {
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
