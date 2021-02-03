import { repoDispatch } from "../../github";

export const dispatchChangeEvt = async () => {
  await repoDispatch();
};
