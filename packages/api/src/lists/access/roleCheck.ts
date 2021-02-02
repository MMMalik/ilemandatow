import { UserRole } from "./role";

export const canAdmin = ({ authentication: { item } }: any) => {
  return item.role === UserRole.Admin;
};

export const canEdit = ({ authentication: { item } }: any) => {
  return item.role === UserRole.Admin || item.role === UserRole.Editor;
};

export const canView = ({ authentication: { item } }: any) => {
  return (
    item.role === UserRole.Admin ||
    item.role === UserRole.Editor ||
    item.role === UserRole.Viewer
  );
};
