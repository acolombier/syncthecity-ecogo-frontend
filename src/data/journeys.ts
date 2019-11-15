export interface Address {
  street: string;
  city: string;
  postalcode: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface JourneyStep {
  mode: 'bus' | 'train' | 'plane' | 'taxi' | 'bicycle' | 'walk';
  from: Address;
  to: Address;
  departTime: string;
  arrivalTime: string;
}

export interface Journey {
  id: string;
  departTime: string;
  from: Address;
  to: Address;
  steps: JourneyStep[];
}

export const journeys: Journey[] = [
  {
    id: '1',
    departTime: '2019-11-15',
    from: {
      street: 'Greenwich',
      city: 'Greenwich',
      country: 'United Kingdom',
      postalcode: '',
      latitude: 51.5287718,
      longitude: -0.2416802,
    },
    to: {
      street: 'France Street',
      city: 'Paris',
      country: 'United Kingdom',
      postalcode: '',
      latitude: 51.5287718,
      longitude: -0.2416802,
    },
    steps: [
      {
        mode: 'bus',
        from: {
          street: 'Greenwich',
          city: 'Greenwich',
          country: 'United Kingdom',
          postalcode: '',
          latitude: 51.4874277,
          longitude: -0.012965,
        },
        to: {
          street: 'Victoria Station',
          city: 'London',
          country: 'United Kingdom',
          postalcode: '',
          latitude: 51.4952136,
          longitude: -0.1460866,
        },
        departTime: '',
        arrivalTime: '',
      },
      {
        mode: 'train',
        from: {
          street: 'Victoria Station',
          city: 'London',
          country: 'United Kingdom',
          postalcode: '',
          latitude: 51.4952136,
          longitude: -0.1460866,
        },
        to: {
          street: 'France Street',
          city: 'Paris',
          country: 'United Kingdom',
          postalcode: '',
          latitude: 48.8589507,
          longitude: 2.2770205,
        },
        departTime: '',
        arrivalTime: '',
      },
    ]
  },
];
