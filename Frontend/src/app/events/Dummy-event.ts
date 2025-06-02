export interface EventData {
  typ: string;
  ort: string;
  datum: string;
  zeit: string;
  beschreibung: string;
}

export const DUMMY_EVENTS: EventData[] = [
  {
    typ: 'Training',
    ort: 'Sportplatz, Aree',
    datum: '2023, 5, 14',
    zeit: '18:00',
    beschreibung: 'Laufschuhe mit nehmen'
  },
  {
    typ: 'Match',
    ort: 'Wankdorfstadion, Bern',
    datum: '2023, 5, 24',
    zeit: '19:00',
    beschreibung: 'Bitte pünktlich sein'
  }
];
