export type DismissablePopperOnClickCb = (
  evt: React.MouseEvent<HTMLElement, MouseEvent>
) => void;

export type DismissablePopperClickableComponent = React.FC<{
  onClick?: DismissablePopperOnClickCb;
  isOpen?: boolean;
}>;
