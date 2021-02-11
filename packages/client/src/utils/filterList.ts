export const filterList = <T>(
  list: readonly (T | null | undefined)[] | null | undefined
): T[] => {
  if (!list) {
    return [];
  }
  return list.filter((item) => !!item) as T[];
};
