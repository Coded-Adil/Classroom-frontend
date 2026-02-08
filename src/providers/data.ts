import { BaseRecord, GetListParams, GetListResponse } from "@refinedev/core";
import { Subject } from "@/types";

export const dataProvider = {
  getList: async <TData extends BaseRecord>({ resource }:
    GetListParams): Promise<GetListResponse<TData>> => {
    // Mock subjects data
    const MOCK_SUBJECTS: Subject[] = [
      {
        id: 1,
        code: "CS101",
        name: "Introduction to Computer Science",
        department: "CS",
        description: "Fundamental concepts of computer science, including algorithms, data structures, and basic programming.",
        created_at: new Date().toISOString(),
      },
      {
        id: 2,
        code: "MATH201",
        name: "Calculus II",
        department: "Math",
        description: "Integral calculus, techniques of integration, series, and polar coordinates.",
        created_at: new Date().toISOString(),
      },
      {
        id: 3,
        code: "ENG150",
        name: "English Literature",
        department: "English",
        description: "Survey of major works in English literature with emphasis on critical reading and writing.",
        created_at: new Date().toISOString(),
      },
      {
        id: 4,
        code: "HIST210",
        name: "World History",
        department: "History",
        description: "A chronological study of major events and movements shaping the modern world.",
        created_at: new Date().toISOString(),
      },
      {
        id: 5,
        code: "PHYS220",
        name: "General Physics",
        department: "Physics",
        description: "Mechanics, waves, thermodynamics, and an introduction to electromagnetism.",
        created_at: new Date().toISOString(),
      },
      {
        id: 6,
        code: "CHEM101",
        name: "Introduction to Chemistry",
        department: "Chemistry",
        description: "Basic principles of chemistry including atomic structure, bonding, and stoichiometry.",
        created_at: new Date().toISOString(),
      },
      {
        id: 7,
        code: "BIO110",
        name: "Foundations of Biology",
        department: "Biology",
        description: "An introduction to cell biology, genetics, evolution, and ecology.",
        created_at: new Date().toISOString(),
      },
    ];

    if (resource !== 'subjects') {
      return {
        data: [] as TData[],
        total: 0,
      };
    }

    return {
      data: MOCK_SUBJECTS as unknown as TData[],
      total: MOCK_SUBJECTS.length,
    };
  },

  getOne: async () => { throw new Error("This function is not present in mock data provider.") },
  create: async () => { throw new Error("This function is not present in mock data provider.") },
  update: async () => { throw new Error("This function is not present in mock data provider.") },
  deleteOne: async () => { throw new Error("This function is not present in mock data provider.") },

  getApiUrl: () => '',
}