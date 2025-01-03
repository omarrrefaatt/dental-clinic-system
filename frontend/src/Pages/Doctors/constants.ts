export const doctors = [
  {
    name: "Dr. John Doe",
    specialty: "Dentist",
    yearsOfExperience: 10,
    description: "Expert in dental implants.",
    rating: 4.8,
    sessions: 120,
    interests: ["Dental Implants", "Teeth Whitening", "Smile Makeover"],
    appointment: new Date(new Date().setDate(new Date().getDate() + 7)), // 1 week in the future
    topRated: true,
    gender: "male",
  },
  {
    name: "Dr. Jane Smith",
    specialty: "Dentist",
    yearsOfExperience: 8,
    description: "Specialist in cosmetic dentistry.",
    rating: 4.7,
    sessions: 100,
    interests: ["Cosmetic Dentistry", "Teeth Whitening", "Dental Bonding"],
    appointment: new Date(),
    topRated: true,
    gender: "female",
  },
  {
    name: "Dr. Emily Johnson",
    specialty: "Dentist",
    yearsOfExperience: 12,
    description: "Specializes in orthodontics.",
    rating: 4.9,
    sessions: 150,
    interests: ["Braces", "Invisalign", "Clear Aligners", "Jaw Alignment"],
    appointment: new Date(),
    topRated: true,
    gender: "female",
  },
  {
    name: "Dr. Michael Brown",
    specialty: "Dentist",
    yearsOfExperience: 15,
    description: "Expert in oral surgery.",
    rating: 4.6,
    sessions: 200,
    interests: ["Oral Surgery", "Wisdom Teeth Removal", "Dental Implants"],
    appointment: new Date(new Date().setMonth(new Date().getMonth() + 1)), // 1 month in the future
    topRated: false,
    gender: "male",
  },
  {
    name: "Dr. Sarah Davis",
    specialty: "Dentist",
    yearsOfExperience: 7,
    description: "Specialist in pediatric dentistry.",
    rating: 4.8,
    sessions: 90,
    interests: [
      "Pediatric Dentistry",
      "Fluoride Treatments",
      "Cavity Prevention",
    ],
    appointment: new Date(),
    topRated: true,
    gender: "female",
  },
  {
    name: "Dr. William Wilson",
    specialty: "Dentist",
    yearsOfExperience: 9,
    description: "Expert in periodontics.",
    rating: 4.7,
    sessions: 110,
    interests: ["Gum Diseases", "Dental Cleaning", "Plaque Management"],
    appointment: new Date(new Date().setDate(new Date().getDate() + 14)), // 2 weeks in the future
    topRated: true,
    gender: "male",
  },
  {
    name: "Dr. Linda Martinez",
    specialty: "Dentist",
    yearsOfExperience: 11,
    description: "Specializes in endodontics.",
    rating: 4.8,
    sessions: 130,
    interests: ["Root Canal", "Dental Pain Relief", "Oral Health"],
    appointment: new Date(),
    topRated: true,
    gender: "female",
  },
  {
    name: "Dr. Robert Garcia",
    specialty: "Dentist",
    yearsOfExperience: 13,
    description: "Expert in prosthodontics.",
    rating: 4.9,
    sessions: 140,
    interests: ["Dental Crowns", "Dentures", "Smile Reconstruction"],
    appointment: new Date(new Date().setDate(new Date().getDate() + 21)), // 3 weeks in the future
    topRated: true,
    gender: "male",
  },
  {
    name: "Dr. Angela Jackson",
    specialty: "Orthodontist",
    yearsOfExperience: 10,
    description: "Specialist in braces and aligners.",
    rating: 4.5,
    sessions: 80,
    interests: ["Braces", "Clear Aligners", "Space Maintainers"],
    appointment: new Date(),
    topRated: false,
    gender: "female",
  },
  {
    name: "Dr. Paul Adams",
    specialty: "Dentist",
    yearsOfExperience: 14,
    description: "Expert in prosthodontics and dental bridges.",
    rating: 4.6,
    sessions: 190,
    interests: ["Dental Bridges", "Dentures", "Tooth Restoration"],
    appointment: new Date(),
    topRated: false,
    gender: "male",
  },
  {
    name: "Dr. Anna Thompson",
    specialty: "Endodontist",
    yearsOfExperience: 9,
    description: "Focuses on root canals and oral pain management.",
    rating: 4.7,
    sessions: 115,
    interests: ["Root Canal", "Oral Pain Relief", "Tooth Preservation"],
    appointment: new Date(),
    topRated: true,
    gender: "female",
  },
  {
    name: "Dr. Steven Lee",
    specialty: "Periodontist",
    yearsOfExperience: 16,
    description: "Specialist in gum diseases and implants.",
    rating: 4.4,
    sessions: 170,
    interests: ["Gum Diseases", "Dental Implants", "Periodontal Surgery"],
    appointment: new Date(new Date().setMonth(new Date().getMonth() + 2)), // 2 months in the future
    topRated: false,
    gender: "male",
  },
  {
    name: "Dr. Julia Robinson",
    specialty: "Pediatric Dentist",
    yearsOfExperience: 6,
    description: "Loves working with children for healthy smiles.",
    rating: 4.8,
    sessions: 85,
    interests: ["Fluoride Treatments", "Cavity Prevention", "Sealants"],
    appointment: new Date(),
    topRated: true,
    gender: "female",
  },
  {
    name: "Dr. Kevin Scott",
    specialty: "Dentist",
    yearsOfExperience: 8,
    description: "General dentist with focus on dental hygiene.",
    rating: 4.5,
    sessions: 95,
    interests: ["Dental Cleaning", "Cavity Fillings", "Oral Exams"],
    appointment: new Date(),
    topRated: false,
    gender: "male",
  },
  {
    name: "Dr. Olivia Harris",
    specialty: "Cosmetic Dentist",
    yearsOfExperience: 12,
    description: "Creating beautiful smiles with veneers and whitening.",
    rating: 4.9,
    sessions: 140,
    interests: ["Teeth Whitening", "Dental Veneers", "Smile Design"],
    appointment: new Date(),
    topRated: true,
    gender: "female",
  },
];

export const doctorsInterests = [
  "Braces",
  "Cavity Fillings",
  "Cavity Prevention",
  "Clear Aligners",
  "Cosmetic Dentistry",
  "Dental Bonding",
  "Dental Bridges",
  "Dental Cleaning",
  "Dental Crowns",
  "Dental Implants",
  "Dental Pain Relief",
  "Dental Veneers",
  "Dentures",
  "Fluoride Treatments",
  "Gum Diseases",
  "Invisalign",
  "Jaw Alignment",
  "Oral Exams",
  "Oral Health",
  "Oral Pain Relief",
  "Oral Surgery",
  "Pediatric Dentistry",
  "Periodontal Surgery",
  "Plaque Management",
  "Root Canal",
  "Sealants",
  "Smile Design",
  "Smile Makeover",
  "Smile Reconstruction",
  "Space Maintainers",
  "Teeth Whitening",
  "Tooth Preservation",
  "Tooth Restoration",
  "Wisdom Teeth Removal",
];

export interface Doctor {
  id: string;
  name: string;
  yearsOfExperience: number;
  rating: number;
  sessions: number;
  specialities: string[];
  appointment: Date;
  topRated: boolean;
  gender: string;
  picture: string;
}
export interface DoctorAPIResponse {
  userId: string;
  firstName: string;
  lastName: string;
  yearsOfExperience: number;
  rating: number;
  totalNumberOfSessions: number;
  specialities: string[];
  nearestAppointment: string;
  gender: string;
  profilePicture: string;
}
export const availableSlots = {
  Monday: ["9:00 AM", "10:30 AM", "2:00 PM", "4:00 PM"],
  Tuesday: ["11:00 AM", "1:00 PM"],
  Wednesday: ["10:00 AM", "3:00 PM", "4:30 PM"],
  Thursday: ["9:00 AM", "11:00 AM", "2:00 PM"],
  Friday: ["10:00 AM", "1:30 PM", "3:00 PM"],
  Saturday: ["9:00 AM", "11:00 AM"],
  Sunday: ["10:00 AM", "12:00 PM", "3:00 PM"],
};
