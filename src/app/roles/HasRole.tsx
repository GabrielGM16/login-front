import { ReactNode } from "react";
import { hasRole } from "./role";

type Props = {
  children: ReactNode;
  arrRole: string[];
  rol: 'admin' | 'creador';
};

export const HasRole = ({ children, arrRole, rol }: Props) => {
  return hasRole(arrRole, rol) ? <>{children}</> : null;
};
