import React from "react";
import { table } from "./table";

export const FacultiesContext = React.createContext({
    faculties: null
});
export const TeableReportCxt = React.createContext(table);
export const ProfileContext = React.createContext({
    user: null
});
