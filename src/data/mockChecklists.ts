export interface Checklist {
  id: string;
  title: string;
  clinic: string;
  lastUpdated: string;
  status: "under utføring" | "ferdig";
}

export const mockChecklists: Checklist[] = [
  {
    id: "1",
    title: "Oppsett av operasjonsrom",
    clinic: "Oslo",
    lastUpdated: "2024-03-20",
    status: "under utføring",
  },
  {
    id: "2",
    title: "Sjekk av akuttmedisinsk vogn",
    clinic: "Trondheim",
    lastUpdated: "2024-03-19",
    status: "ferdig",
  },
  {
    id: "3",
    title: "Steriliseringsprosedyre",
    clinic: "Trondheim",
    lastUpdated: "2024-03-21",
    status: "ferdig",
  },
  {
    id: "4",
    title: "Pasientinntaksprosess",
    clinic: "Oslo",
    lastUpdated: "2024-03-18",
    status: "ferdig",
  },
  {
    id: "5",
    title: "Gjennomgang av apoteklager",
    clinic: "Bergen",
    lastUpdated: "2024-03-17",
    status: "ferdig",
  },
  {
    id: "6",
    title: "Sikkerhetssamsvarssjekkliste",
    clinic: "Oslo",
    lastUpdated: "2024-03-16",
    status: "ferdig",
  },
  {
    id: "7",
    title: "Vedlikehold av medisinsk utstyr",
    clinic: "Trondheim",
    lastUpdated: "2024-03-15",
    status: "ferdig",
  },
  {
    id: "8",
    title: "Gjennomgang av utskrivningsprotokoll",
    clinic: "Bergen",
    lastUpdated: "2024-03-14",
    status: "ferdig",
  },
  {
    id: "9",
    title: "Ambulanseinspeksjon",
    clinic: "Oslo",
    lastUpdated: "2024-03-13",
    status: "ferdig",
  },
  {
    id: "10",
    title: "Renholdsaudit på sengepost",
    clinic: "Trondheim",
    lastUpdated: "2024-03-12",
    status: "ferdig",
  },
  {
    id: "11",
    title: "Øvelse i beredskapsplan",
    clinic: "Bergen",
    lastUpdated: "2024-03-11",
    status: "ferdig",
  },
  {
    id: "12",
    title: "Sjekkliste for infeksjonskontroll",
    clinic: "Trondheim",
    lastUpdated: "2024-03-10",
    status: "ferdig",
  },
];

export const clinics = ["Trondheim", "Oslo", "Bergen"];