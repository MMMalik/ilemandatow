export type OnItemHover = (id?: string) => void;

export interface UseHoverOpts {
  id: string;
  onItemHover?: OnItemHover;
}
