export interface Igeoinhalt {
  type: string;
  crs: {
    type: string;
    properties: {
      name: string;
    };
  };
  features: {
    type: string;
    properties: {
      gml_id: string;
      Gemeinde_name: string;
      Gemeinde_schluessel: string;
      Land_name: string;
      Land_schluessel: string;
      Schluessel_gesamt: string;
    };
    geometry: {
      type: string;
      coordinates: string;
    };
  };
}

