import * as React from "react";
import { DataType } from "../../generated";

export interface FilterActionDef<Type, Payload> {
  type: Type;
  payload: Payload;
}

export type FilterAction =
  | FilterActionDef<FilterActionType.SortBy, DataType.SortPollsBy>
  | FilterActionDef<FilterActionType.FilterPublisher, string[]>
  | FilterActionDef<FilterActionType.FilterPollCompany, string[]>
  | FilterActionDef<FilterActionType.CurrentPage, number>
  | FilterActionDef<FilterActionType.PollsPerPage, number>;

export interface FilterState {
  sortBy: DataType.SortPollsBy;
  publishers: string[];
  pollCompanies: string[];
  pollsPerPage: number;
  page: number;
}

export const initialState: FilterState = {
  sortBy: DataType.SortPollsBy.PublishedAtDesc,
  publishers: [],
  pollCompanies: [],
  pollsPerPage: 1,
  page: 1,
};

export enum FilterActionType {
  SortBy,
  FilterPublisher,
  FilterPollCompany,
  CurrentPage,
  PollsPerPage,
}

export const reducer = (
  state: FilterState,
  action: FilterAction
): FilterState => {
  switch (action.type) {
    case FilterActionType.SortBy: {
      return {
        ...state,
        sortBy: action.payload,
      };
    }
    case FilterActionType.FilterPublisher: {
      return {
        ...state,
        publishers: action.payload,
      };
    }
    case FilterActionType.FilterPollCompany: {
      return {
        ...state,
        pollCompanies: action.payload,
      };
    }
    case FilterActionType.CurrentPage: {
      return {
        ...state,
        page: action.payload,
      };
    }
    case FilterActionType.PollsPerPage: {
      return {
        ...state,
        pollsPerPage: action.payload,
      };
    }
    default: {
      return initialState;
    }
  }
};

export interface FilterInitReducerState {
  pollsPerPage: number;
}

export const getInitFilterState = (initFilterState: FilterInitReducerState) => {
  return {
    ...initialState,
    ...initFilterState,
  };
};

export const useFilterReducer = (initFilterState: FilterInitReducerState) => {
  const [state, dispatch] = React.useReducer(
    reducer,
    initFilterState,
    getInitFilterState
  );

  const setPollCompanyFilter = React.useCallback((names: string[]) => {
    dispatch({
      type: FilterActionType.FilterPollCompany,
      payload: names,
    });
  }, []);

  const setPublishersFilter = React.useCallback((names: string[]) => {
    dispatch({
      type: FilterActionType.FilterPublisher,
      payload: names,
    });
  }, []);

  const setPage = React.useCallback((page: number) => {
    dispatch({
      type: FilterActionType.CurrentPage,
      payload: page,
    });
  }, []);

  return { state, setPollCompanyFilter, setPublishersFilter, setPage };
};
