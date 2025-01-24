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
    title: "Operating Room Setup",
    clinic: "Oslo",
    lastUpdated: "2024-03-20",
    status: "under utføring",
  },
  {
    id: "2",
    title: "Emergency Cart Check",
    clinic: "Trondheim",
    lastUpdated: "2024-03-19",
    status: "ferdig",
  },
  {
    id: "3",
    title: "Sterilization Procedure",
    clinic: "Trondheim",
    lastUpdated: "2024-03-21",
    status: "ferdig",
  },
  {
    id: "4",
    title: "Patient Admission Process",
    clinic: "Oslo",
    lastUpdated: "2024-03-18",
    status: "ferdig",
  },
  {
    id: "5",
    title: "Pharmacy Inventory Audit",
    clinic: "Bergen",
    lastUpdated: "2024-03-17",
    status: "ferdig",
  },
  {
    id: "6",
    title: "Safety Compliance Checklist",
    clinic: "Oslo",
    lastUpdated: "2024-03-16",
    status: "ferdig",
  },
  {
    id: "7",
    title: "Medical Equipment Maintenance",
    clinic: "Trondheim",
    lastUpdated: "2024-03-15",
    status: "ferdig",
  },
  {
    id: "8",
    title: "Discharge Protocol Review",
    clinic: "Bergen",
    lastUpdated: "2024-03-14",
    status: "ferdig",
  },
  {
    id: "9",
    title: "Ambulance Inspection",
    clinic: "Oslo",
    lastUpdated: "2024-03-13",
    status: "ferdig",
  },
  {
    id: "10",
    title: "Ward Cleanliness Audit",
    clinic: "Trondheim",
    lastUpdated: "2024-03-12",
    status: "ferdig",
  },
  {
    id: "11",
    title: "Emergency Preparedness Drill",
    clinic: "Bergen",
    lastUpdated: "2024-03-11",
    status: "ferdig",
  },
  {
    id: "12",
    title: "Infection Control Checklist",
    clinic: "Trondheim",
    lastUpdated: "2024-03-10",
    status: "ferdig",
  },
];

export const clinics = ["Trondheim", "Oslo", "Bergen"];
