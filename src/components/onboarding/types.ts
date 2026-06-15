export type Path = "company" | "employee" | null;

export interface OnboardingState {
  email: string;
  path: Path;
  // Path A — new company
  companyName: string;
  sector: string;
  size: string;
  problems: string[];
  // Path B — employee
  companyCode: string;
  role: string;
  department: string;
}

export const INITIAL_STATE: OnboardingState = {
  email: "",
  path: null,
  companyName: "",
  sector: "",
  size: "",
  problems: [],
  companyCode: "",
  role: "",
  department: "",
};
