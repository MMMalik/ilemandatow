import {
  CalendarDay,
  Integer,
  Float,
  Relationship,
  Text,
  Slug,
} from "@keystonejs/fields";
import { canEdit } from "../access";
import { dispatchChangeEvt, idField } from "../common";
import slugResolveInput from "./slugResolveInput";

export const Poll = {
  fields: {
    id: idField,
    source: { type: Text },
    publishedBy: { type: Relationship, ref: "Publisher", many: true },
    polledBy: { type: Relationship, ref: "PollCompany", many: true },
    publishedAt: { type: CalendarDay },
    method: { type: Relationship, ref: "PollMethod" },
    results: { type: Relationship, ref: "PollResult", many: true },
    participantsCount: { type: Integer },
    participantsWillVote: { type: Float },
    participantsMightVote: { type: Float },
    participantsUndecided: { type: Float },
    participantsMightNotVote: { type: Float },
    participantsWillNotVote: { type: Float },
    pollStartedAt: { type: CalendarDay },
    pollEndedAt: { type: CalendarDay },
    errorMargin: { type: Float },
    slug: {
      type: Slug,
      hooks: {
        resolveInput: slugResolveInput,
      },
      regenerateOnUpdate: false,
    },
  },
  labelResolver: (item: any) => item.id,
  access: {
    read: true,
    create: canEdit,
    update: canEdit,
    delete: canEdit,
  },
  hooks: {
    afterChange: async () => {
      await dispatchChangeEvt();
    },
  },
};
