"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type DashboardAccessContextType = {
  hasVisitedDashboard: boolean;
  setHasVisitedDashboard: (value: boolean) => void;
};

const DashboardAccessContext = createContext<DashboardAccessContextType | undefined>(undefined);

export function DashboardAccessProvider({ children }: { children: ReactNode }) {
  const [hasVisitedDashboard, setHasVisitedDashboard] = useState(false);

  return (
    <DashboardAccessContext.Provider value={{ hasVisitedDashboard, setHasVisitedDashboard }}>
      {children}
    </DashboardAccessContext.Provider>
  );
}

export function useDashboardAccess() {
  const context = useContext(DashboardAccessContext);
  if (!context) {
    throw new Error("useDashboardAccess must be used within DashboardAccessProvider");
  }
  return context;
}