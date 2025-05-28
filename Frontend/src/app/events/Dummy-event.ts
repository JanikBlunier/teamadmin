export interface EventData {
  typ: string;
  ort: string;
  zeit: string;
  beschreibung: string;
}

export const DUMMY_EVENTS: EventData[] = [
  {
    typ: 'Training',
    ort: 'Sportplatz, Aree',
    zeit: 'Freitag, 14. Juni, 18:00 Uhr',
    beschreibung: 'Laufschuhe mit nehmen'
  },
  {
    typ: 'Match',
    ort: 'Wankdorfstadion, Bern',
    zeit: 'Montag, 24. Juni, 19:00 Uhr',
    beschreibung: 'Bitte pünktlich sein'
  }
];
