import {
  CalendarDay,
  Integer,
  Float,
  Relationship,
  Text,
  Slug,
} from "@keystonejs/fields";
import { canEdit, canView } from "../access";
import { idField } from "../common";
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
    participantsMightNotVote: { type: Float },
    participantsMightVote: { type: Float },
    participantsUndecided: { type: Float },
    participantsWillNotVote: { type: Float },
    participantsWillVote: { type: Float },
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
  access: {
    read: canView,
    create: canEdit,
    update: canEdit,
    delete: canEdit,
  },
};
