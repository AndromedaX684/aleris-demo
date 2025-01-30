// data/mockChecklists.ts
export interface Checklist {
  id: string;
  title: string;
  clinic: string;
  type: string;
  checkpointAmount: number;
  checkpoints?: Checkpoint[];
}

export interface Checkpoint {
  title: string;
  notes?: string;
  type: string;
  description?: string;
}

// Update mock data with checkpoints
export const mockDataDetails: Checklist[] = [
  {
    id: "1",
    title: "Oppsett av Operasjonsrom",
    clinic: "Oslo",
    type: "Operasjonssalen",
    checkpointAmount: 14,
    checkpoints: [
      { title: "Steril instrumenter på plass", notes: "Kontroller at alle instrumenter er sterilisert", type: "checkmark", description: "Ja/Nei" },
      { title: "Anestesimaskin kontrollert", notes: "Sjekk O2-nivå og trykkmåler", type: "photo", description: "Bilde" },
      { title: "Nødutstyr tilgjengelig", notes: "Defibrillator og nødmedisiner må være klart", type: "checkmark", description: "Ja/Nei" },
      { title: "Pasientdokumentasjon klar", type: "signature", description: "Signatur" },
      { title: "Kirurgisk team informert", notes: "Sørg for at alle i teamet kjenner til dagens prosedyrer", type: "text", description: "Skriv notat" },
      { title: "Sterilt område markert", notes: "Sikre at det sterile området er tydelig definert", type: "checkmark", description: "Ja/Nei" },
      { title: "Lys og utstyr testet", notes: "Alle lamper og kirurgiske enheter fungerer som de skal", type: "checkmark", description: "Ja/Nei" },
      { title: "Blodforsyning sjekket", notes: "Bekreft at blodprodukter er tilgjengelige ved behov", type: "numeric", description: "Skriv in nummer eks. antall" },
      { title: "Kommunikasjonsutstyr testet", notes: "Walkie-talkie og nødtelefon fungerer korrekt", type: "checkmark", description: "Ja/Nei" },
      { title: "Pasientposisjonering bekreftet", notes: "Pasienten er riktig plassert for inngrepet", type: "photo", description: "bilde" },
      { title: "Sterile hansker og frakker tilgjengelig", type: "barcode", description: "scann barkode" },
      { title: "Temperatur og luftkvalitet sjekket", notes: "Sikre optimale forhold i operasjonsrommet", type: "numeric", description: "Skriv in nummer eks. antall" },
      { title: "Postoperativ overvåkning planlagt", type: "date", description: "Dato stempling" },
      { title: "Siste gjennomgang før start", type: "voice", description: "Lagre lyd melding" },
    ],
  },
];