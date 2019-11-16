export interface GeoCodeResponse {
  place_id: string;
  licence: string;
  osm_type: string;
  osm_id: string;
  boundingbox?: string[] | null;
  lat: string;
  lon: string;
  display_name: string;
  class: string;
  type: string;
  importance: number;
  icon: string;
}
