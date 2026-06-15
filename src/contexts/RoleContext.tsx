"use client";

import { createContext, useContext, useState } from "react";

export type UserRole = "owner" | "employee";

interface RoleContextValue {
  role: UserRole;
  setRole: (r: UserRole) => void;
}

const RoleContext = createContext<RoleContextValue>({
  role: "owner",
  setRole: () => {},
});

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<UserRole>("owner");
  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  return useContext(RoleContext);
}
