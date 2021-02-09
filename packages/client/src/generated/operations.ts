export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type _KsListsMetaInput = {
  readonly key?: Maybe<Scalars["String"]>;
  /** Whether this is an auxiliary helper list */
  readonly auxiliary?: Maybe<Scalars["Boolean"]>;
};

export type _ListAccess = {
  readonly __typename?: "_ListAccess";
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'create' operations.
   * NOTE: 'create' can only return a Boolean.
   * It is not possible to specify a declarative Where clause for this
   * operation
   */
  readonly create?: Maybe<Scalars["Boolean"]>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'read' operations.
   */
  readonly read?: Maybe<Scalars["JSON"]>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'update' operations.
   */
  readonly update?: Maybe<Scalars["JSON"]>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'delete' operations.
   */
  readonly delete?: Maybe<Scalars["JSON"]>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'auth' operations.
   */
  readonly auth?: Maybe<Scalars["JSON"]>;
};

export type _ListInputTypes = {
  readonly __typename?: "_ListInputTypes";
  /** Input type for matching multiple items */
  readonly whereInput?: Maybe<Scalars["String"]>;
  /** Input type for matching a unique item */
  readonly whereUniqueInput?: Maybe<Scalars["String"]>;
  /** Create mutation input type name */
  readonly createInput?: Maybe<Scalars["String"]>;
  /** Create many mutation input type name */
  readonly createManyInput?: Maybe<Scalars["String"]>;
  /** Update mutation name input */
  readonly updateInput?: Maybe<Scalars["String"]>;
  /** Update many mutation name input */
  readonly updateManyInput?: Maybe<Scalars["String"]>;
};

export type _ListMeta = {
  readonly __typename?: "_ListMeta";
  /** The Keystone list key */
  readonly key?: Maybe<Scalars["String"]>;
  /**
   * The Keystone List name
   * @deprecated Use `key` instead
   */
  readonly name?: Maybe<Scalars["String"]>;
  /** The list's user-facing description */
  readonly description?: Maybe<Scalars["String"]>;
  /** The list's display name in the Admin UI */
  readonly label?: Maybe<Scalars["String"]>;
  /** The list's singular display name */
  readonly singular?: Maybe<Scalars["String"]>;
  /** The list's plural display name */
  readonly plural?: Maybe<Scalars["String"]>;
  /** The list's data path */
  readonly path?: Maybe<Scalars["String"]>;
  /** Access control configuration for the currently authenticated request */
  readonly access?: Maybe<_ListAccess>;
  /** Information on the generated GraphQL schema */
  readonly schema?: Maybe<_ListSchema>;
};

export type _ListMutations = {
  readonly __typename?: "_ListMutations";
  /** Create mutation name */
  readonly create?: Maybe<Scalars["String"]>;
  /** Create many mutation name */
  readonly createMany?: Maybe<Scalars["String"]>;
  /** Update mutation name */
  readonly update?: Maybe<Scalars["String"]>;
  /** Update many mutation name */
  readonly updateMany?: Maybe<Scalars["String"]>;
  /** Delete mutation name */
  readonly delete?: Maybe<Scalars["String"]>;
  /** Delete many mutation name */
  readonly deleteMany?: Maybe<Scalars["String"]>;
};

export type _ListQueries = {
  readonly __typename?: "_ListQueries";
  /** Single-item query name */
  readonly item?: Maybe<Scalars["String"]>;
  /** All-items query name */
  readonly list?: Maybe<Scalars["String"]>;
  /** List metadata query name */
  readonly meta?: Maybe<Scalars["String"]>;
};

export type _ListSchema = {
  readonly __typename?: "_ListSchema";
  /** The typename as used in GraphQL queries */
  readonly type?: Maybe<Scalars["String"]>;
  /**
   * Top level GraphQL query names which either return this type, or
   * provide aggregate information about this type
   */
  readonly queries?: Maybe<_ListQueries>;
  /** Top-level GraphQL mutation names */
  readonly mutations?: Maybe<_ListMutations>;
  /** Top-level GraphQL input types */
  readonly inputTypes?: Maybe<_ListInputTypes>;
  /** Information about fields defined on this list */
  readonly fields?: Maybe<ReadonlyArray<Maybe<_ListSchemaFields>>>;
  /**
   * Information about fields on other types which return this type, or
   * provide aggregate information about this type
   */
  readonly relatedFields?: Maybe<
    ReadonlyArray<Maybe<_ListSchemaRelatedFields>>
  >;
};

export type _ListSchemaFieldsArgs = {
  where?: Maybe<_ListSchemaFieldsInput>;
};

export type _ListSchemaFields = {
  readonly __typename?: "_ListSchemaFields";
  /** The path of the field in its list */
  readonly path?: Maybe<Scalars["String"]>;
  /**
   * The name of the field in its list
   * @deprecated Use `path` instead
   */
  readonly name?: Maybe<Scalars["String"]>;
  /** The field type (ie, Checkbox, Text, etc) */
  readonly type?: Maybe<Scalars["String"]>;
};

export type _ListSchemaFieldsInput = {
  readonly type?: Maybe<Scalars["String"]>;
};

export type _ListSchemaRelatedFields = {
  readonly __typename?: "_ListSchemaRelatedFields";
  /** The typename as used in GraphQL queries */
  readonly type?: Maybe<Scalars["String"]>;
  /** A list of GraphQL field names */
  readonly fields?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
};

export type _QueryMeta = {
  readonly __typename?: "_QueryMeta";
  readonly count?: Maybe<Scalars["Int"]>;
};

export type AuthenticateUserOutput = {
  readonly __typename?: "authenticateUserOutput";
  /**  Used to make subsequent authenticated requests by setting this token in a header: 'Authorization: Bearer <token>'.  */
  readonly token?: Maybe<Scalars["String"]>;
  /**  Retrieve information on the newly authenticated User here.  */
  readonly item?: Maybe<User>;
};

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE",
}

/**  A keystone list  */
export type ElectoralCode = {
  readonly __typename?: "ElectoralCode";
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the ElectoralCode List config, or
   *  2. As an alias to the field set on 'labelField' in the ElectoralCode List config, or
   *  3. As an alias to a 'name' field on the ElectoralCode List (if one exists), or
   *  4. As an alias to the 'id' field on the ElectoralCode List.
   */
  readonly _label_?: Maybe<Scalars["String"]>;
  readonly id: Scalars["ID"];
  readonly inEffectSince?: Maybe<Scalars["String"]>;
  readonly inEffectTo?: Maybe<Scalars["String"]>;
  readonly threshold?: Maybe<Scalars["Float"]>;
  readonly totalSeats?: Maybe<Scalars["Int"]>;
  readonly method?: Maybe<ElectoralCodeMethodType>;
  readonly districts: ReadonlyArray<ElectoralDistrict>;
  readonly _districtsMeta?: Maybe<_QueryMeta>;
};

/**  A keystone list  */
export type ElectoralCodeDistrictsArgs = {
  where?: Maybe<ElectoralDistrictWhereInput>;
  search?: Maybe<Scalars["String"]>;
  sortBy?: Maybe<ReadonlyArray<SortElectoralDistrictsBy>>;
  orderBy?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

/**  A keystone list  */
export type ElectoralCode_DistrictsMetaArgs = {
  where?: Maybe<ElectoralDistrictWhereInput>;
  search?: Maybe<Scalars["String"]>;
  sortBy?: Maybe<ReadonlyArray<SortElectoralDistrictsBy>>;
  orderBy?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type ElectoralCodeCreateInput = {
  readonly inEffectSince?: Maybe<Scalars["String"]>;
  readonly inEffectTo?: Maybe<Scalars["String"]>;
  readonly threshold?: Maybe<Scalars["Float"]>;
  readonly totalSeats?: Maybe<Scalars["Int"]>;
  readonly method?: Maybe<ElectoralCodeMethodType>;
  readonly districts?: Maybe<ElectoralDistrictRelateToManyInput>;
};

export enum ElectoralCodeMethodType {
  Dhondt = "dhondt",
}

export type ElectoralCodesCreateInput = {
  readonly data?: Maybe<ElectoralCodeCreateInput>;
};

export type ElectoralCodesUpdateInput = {
  readonly id: Scalars["ID"];
  readonly data?: Maybe<ElectoralCodeUpdateInput>;
};

export type ElectoralCodeUpdateInput = {
  readonly inEffectSince?: Maybe<Scalars["String"]>;
  readonly inEffectTo?: Maybe<Scalars["String"]>;
  readonly threshold?: Maybe<Scalars["Float"]>;
  readonly totalSeats?: Maybe<Scalars["Int"]>;
  readonly method?: Maybe<ElectoralCodeMethodType>;
  readonly districts?: Maybe<ElectoralDistrictRelateToManyInput>;
};

export type ElectoralCodeWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<Maybe<ElectoralCodeWhereInput>>>;
  readonly OR?: Maybe<ReadonlyArray<Maybe<ElectoralCodeWhereInput>>>;
  readonly id?: Maybe<Scalars["ID"]>;
  readonly id_not?: Maybe<Scalars["ID"]>;
  readonly id_in?: Maybe<ReadonlyArray<Maybe<Scalars["ID"]>>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["ID"]>>>;
  readonly inEffectSince?: Maybe<Scalars["String"]>;
  readonly inEffectSince_not?: Maybe<Scalars["String"]>;
  readonly inEffectSince_lt?: Maybe<Scalars["String"]>;
  readonly inEffectSince_lte?: Maybe<Scalars["String"]>;
  readonly inEffectSince_gt?: Maybe<Scalars["String"]>;
  readonly inEffectSince_gte?: Maybe<Scalars["String"]>;
  readonly inEffectSince_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly inEffectSince_not_in?: Maybe<
    ReadonlyArray<Maybe<Scalars["String"]>>
  >;
  readonly inEffectTo?: Maybe<Scalars["String"]>;
  readonly inEffectTo_not?: Maybe<Scalars["String"]>;
  readonly inEffectTo_lt?: Maybe<Scalars["String"]>;
  readonly inEffectTo_lte?: Maybe<Scalars["String"]>;
  readonly inEffectTo_gt?: Maybe<Scalars["String"]>;
  readonly inEffectTo_gte?: Maybe<Scalars["String"]>;
  readonly inEffectTo_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly inEffectTo_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly threshold?: Maybe<Scalars["Float"]>;
  readonly threshold_not?: Maybe<Scalars["Float"]>;
  readonly threshold_lt?: Maybe<Scalars["Float"]>;
  readonly threshold_lte?: Maybe<Scalars["Float"]>;
  readonly threshold_gt?: Maybe<Scalars["Float"]>;
  readonly threshold_gte?: Maybe<Scalars["Float"]>;
  readonly threshold_in?: Maybe<ReadonlyArray<Maybe<Scalars["Float"]>>>;
  readonly threshold_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["Float"]>>>;
  readonly totalSeats?: Maybe<Scalars["Int"]>;
  readonly totalSeats_not?: Maybe<Scalars["Int"]>;
  readonly totalSeats_lt?: Maybe<Scalars["Int"]>;
  readonly totalSeats_lte?: Maybe<Scalars["Int"]>;
  readonly totalSeats_gt?: Maybe<Scalars["Int"]>;
  readonly totalSeats_gte?: Maybe<Scalars["Int"]>;
  readonly totalSeats_in?: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>;
  readonly totalSeats_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>;
  readonly method?: Maybe<ElectoralCodeMethodType>;
  readonly method_not?: Maybe<ElectoralCodeMethodType>;
  readonly method_in?: Maybe<ReadonlyArray<Maybe<ElectoralCodeMethodType>>>;
  readonly method_not_in?: Maybe<ReadonlyArray<Maybe<ElectoralCodeMethodType>>>;
  /**  condition must be true for all nodes  */
  readonly districts_every?: Maybe<ElectoralDistrictWhereInput>;
  /**  condition must be true for at least 1 node  */
  readonly districts_some?: Maybe<ElectoralDistrictWhereInput>;
  /**  condition must be false for all nodes  */
  readonly districts_none?: Maybe<ElectoralDistrictWhereInput>;
};

export type ElectoralCodeWhereUniqueInput = {
  readonly id: Scalars["ID"];
};

/**  A keystone list  */
export type ElectoralDistrict = {
  readonly __typename?: "ElectoralDistrict";
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the ElectoralDistrict List config, or
   *  2. As an alias to the field set on 'labelField' in the ElectoralDistrict List config, or
   *  3. As an alias to a 'name' field on the ElectoralDistrict List (if one exists), or
   *  4. As an alias to the 'id' field on the ElectoralDistrict List.
   */
  readonly _label_?: Maybe<Scalars["String"]>;
  readonly id: Scalars["ID"];
  readonly district?: Maybe<Scalars["Int"]>;
  readonly name?: Maybe<Scalars["String"]>;
  readonly totalSeats?: Maybe<Scalars["Int"]>;
};

export type ElectoralDistrictCreateInput = {
  readonly district?: Maybe<Scalars["Int"]>;
  readonly name?: Maybe<Scalars["String"]>;
  readonly totalSeats?: Maybe<Scalars["Int"]>;
};

export type ElectoralDistrictRelateToManyInput = {
  readonly create?: Maybe<ReadonlyArray<Maybe<ElectoralDistrictCreateInput>>>;
  readonly connect?: Maybe<
    ReadonlyArray<Maybe<ElectoralDistrictWhereUniqueInput>>
  >;
  readonly disconnect?: Maybe<
    ReadonlyArray<Maybe<ElectoralDistrictWhereUniqueInput>>
  >;
  readonly disconnectAll?: Maybe<Scalars["Boolean"]>;
};

export type ElectoralDistrictsCreateInput = {
  readonly data?: Maybe<ElectoralDistrictCreateInput>;
};

export type ElectoralDistrictsUpdateInput = {
  readonly id: Scalars["ID"];
  readonly data?: Maybe<ElectoralDistrictUpdateInput>;
};

export type ElectoralDistrictUpdateInput = {
  readonly district?: Maybe<Scalars["Int"]>;
  readonly name?: Maybe<Scalars["String"]>;
  readonly totalSeats?: Maybe<Scalars["Int"]>;
};

export type ElectoralDistrictWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<Maybe<ElectoralDistrictWhereInput>>>;
  readonly OR?: Maybe<ReadonlyArray<Maybe<ElectoralDistrictWhereInput>>>;
  readonly id?: Maybe<Scalars["ID"]>;
  readonly id_not?: Maybe<Scalars["ID"]>;
  readonly id_in?: Maybe<ReadonlyArray<Maybe<Scalars["ID"]>>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["ID"]>>>;
  readonly district?: Maybe<Scalars["Int"]>;
  readonly district_not?: Maybe<Scalars["Int"]>;
  readonly district_lt?: Maybe<Scalars["Int"]>;
  readonly district_lte?: Maybe<Scalars["Int"]>;
  readonly district_gt?: Maybe<Scalars["Int"]>;
  readonly district_gte?: Maybe<Scalars["Int"]>;
  readonly district_in?: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>;
  readonly district_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>;
  readonly name?: Maybe<Scalars["String"]>;
  readonly name_not?: Maybe<Scalars["String"]>;
  readonly name_contains?: Maybe<Scalars["String"]>;
  readonly name_not_contains?: Maybe<Scalars["String"]>;
  readonly name_starts_with?: Maybe<Scalars["String"]>;
  readonly name_not_starts_with?: Maybe<Scalars["String"]>;
  readonly name_ends_with?: Maybe<Scalars["String"]>;
  readonly name_not_ends_with?: Maybe<Scalars["String"]>;
  readonly name_i?: Maybe<Scalars["String"]>;
  readonly name_not_i?: Maybe<Scalars["String"]>;
  readonly name_contains_i?: Maybe<Scalars["String"]>;
  readonly name_not_contains_i?: Maybe<Scalars["String"]>;
  readonly name_starts_with_i?: Maybe<Scalars["String"]>;
  readonly name_not_starts_with_i?: Maybe<Scalars["String"]>;
  readonly name_ends_with_i?: Maybe<Scalars["String"]>;
  readonly name_not_ends_with_i?: Maybe<Scalars["String"]>;
  readonly name_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly name_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly totalSeats?: Maybe<Scalars["Int"]>;
  readonly totalSeats_not?: Maybe<Scalars["Int"]>;
  readonly totalSeats_lt?: Maybe<Scalars["Int"]>;
  readonly totalSeats_lte?: Maybe<Scalars["Int"]>;
  readonly totalSeats_gt?: Maybe<Scalars["Int"]>;
  readonly totalSeats_gte?: Maybe<Scalars["Int"]>;
  readonly totalSeats_in?: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>;
  readonly totalSeats_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>;
};

export type ElectoralDistrictWhereUniqueInput = {
  readonly id: Scalars["ID"];
};

export type Mutation = {
  readonly __typename?: "Mutation";
  /**  Create a single ElectoralCode item.  */
  readonly createElectoralCode?: Maybe<ElectoralCode>;
  /**  Create multiple ElectoralCode items.  */
  readonly createElectoralCodes?: Maybe<ReadonlyArray<Maybe<ElectoralCode>>>;
  /**  Update a single ElectoralCode item by ID.  */
  readonly updateElectoralCode?: Maybe<ElectoralCode>;
  /**  Update multiple ElectoralCode items by ID.  */
  readonly updateElectoralCodes?: Maybe<ReadonlyArray<Maybe<ElectoralCode>>>;
  /**  Delete a single ElectoralCode item by ID.  */
  readonly deleteElectoralCode?: Maybe<ElectoralCode>;
  /**  Delete multiple ElectoralCode items by ID.  */
  readonly deleteElectoralCodes?: Maybe<ReadonlyArray<Maybe<ElectoralCode>>>;
  /**  Create a single ElectoralDistrict item.  */
  readonly createElectoralDistrict?: Maybe<ElectoralDistrict>;
  /**  Create multiple ElectoralDistrict items.  */
  readonly createElectoralDistricts?: Maybe<
    ReadonlyArray<Maybe<ElectoralDistrict>>
  >;
  /**  Update a single ElectoralDistrict item by ID.  */
  readonly updateElectoralDistrict?: Maybe<ElectoralDistrict>;
  /**  Update multiple ElectoralDistrict items by ID.  */
  readonly updateElectoralDistricts?: Maybe<
    ReadonlyArray<Maybe<ElectoralDistrict>>
  >;
  /**  Delete a single ElectoralDistrict item by ID.  */
  readonly deleteElectoralDistrict?: Maybe<ElectoralDistrict>;
  /**  Delete multiple ElectoralDistrict items by ID.  */
  readonly deleteElectoralDistricts?: Maybe<
    ReadonlyArray<Maybe<ElectoralDistrict>>
  >;
  /**  Create a single Party item.  */
  readonly createParty?: Maybe<Party>;
  /**  Create multiple Party items.  */
  readonly createParties?: Maybe<ReadonlyArray<Maybe<Party>>>;
  /**  Update a single Party item by ID.  */
  readonly updateParty?: Maybe<Party>;
  /**  Update multiple Party items by ID.  */
  readonly updateParties?: Maybe<ReadonlyArray<Maybe<Party>>>;
  /**  Delete a single Party item by ID.  */
  readonly deleteParty?: Maybe<Party>;
  /**  Delete multiple Party items by ID.  */
  readonly deleteParties?: Maybe<ReadonlyArray<Maybe<Party>>>;
  /**  Create a single Poll item.  */
  readonly createPoll?: Maybe<Poll>;
  /**  Create multiple Poll items.  */
  readonly createPolls?: Maybe<ReadonlyArray<Maybe<Poll>>>;
  /**  Update a single Poll item by ID.  */
  readonly updatePoll?: Maybe<Poll>;
  /**  Update multiple Poll items by ID.  */
  readonly updatePolls?: Maybe<ReadonlyArray<Maybe<Poll>>>;
  /**  Delete a single Poll item by ID.  */
  readonly deletePoll?: Maybe<Poll>;
  /**  Delete multiple Poll items by ID.  */
  readonly deletePolls?: Maybe<ReadonlyArray<Maybe<Poll>>>;
  /**  Create a single PollCompany item.  */
  readonly createPollCompany?: Maybe<PollCompany>;
  /**  Create multiple PollCompany items.  */
  readonly createPollCompanies?: Maybe<ReadonlyArray<Maybe<PollCompany>>>;
  /**  Update a single PollCompany item by ID.  */
  readonly updatePollCompany?: Maybe<PollCompany>;
  /**  Update multiple PollCompany items by ID.  */
  readonly updatePollCompanies?: Maybe<ReadonlyArray<Maybe<PollCompany>>>;
  /**  Delete a single PollCompany item by ID.  */
  readonly deletePollCompany?: Maybe<PollCompany>;
  /**  Delete multiple PollCompany items by ID.  */
  readonly deletePollCompanies?: Maybe<ReadonlyArray<Maybe<PollCompany>>>;
  /**  Create a single PollMethod item.  */
  readonly createPollMethod?: Maybe<PollMethod>;
  /**  Create multiple PollMethod items.  */
  readonly createPollMethods?: Maybe<ReadonlyArray<Maybe<PollMethod>>>;
  /**  Update a single PollMethod item by ID.  */
  readonly updatePollMethod?: Maybe<PollMethod>;
  /**  Update multiple PollMethod items by ID.  */
  readonly updatePollMethods?: Maybe<ReadonlyArray<Maybe<PollMethod>>>;
  /**  Delete a single PollMethod item by ID.  */
  readonly deletePollMethod?: Maybe<PollMethod>;
  /**  Delete multiple PollMethod items by ID.  */
  readonly deletePollMethods?: Maybe<ReadonlyArray<Maybe<PollMethod>>>;
  /**  Create a single PollResult item.  */
  readonly createPollResult?: Maybe<PollResult>;
  /**  Create multiple PollResult items.  */
  readonly createPollResults?: Maybe<ReadonlyArray<Maybe<PollResult>>>;
  /**  Update a single PollResult item by ID.  */
  readonly updatePollResult?: Maybe<PollResult>;
  /**  Update multiple PollResult items by ID.  */
  readonly updatePollResults?: Maybe<ReadonlyArray<Maybe<PollResult>>>;
  /**  Delete a single PollResult item by ID.  */
  readonly deletePollResult?: Maybe<PollResult>;
  /**  Delete multiple PollResult items by ID.  */
  readonly deletePollResults?: Maybe<ReadonlyArray<Maybe<PollResult>>>;
  /**  Create a single Publisher item.  */
  readonly createPublisher?: Maybe<Publisher>;
  /**  Create multiple Publisher items.  */
  readonly createPublishers?: Maybe<ReadonlyArray<Maybe<Publisher>>>;
  /**  Update a single Publisher item by ID.  */
  readonly updatePublisher?: Maybe<Publisher>;
  /**  Update multiple Publisher items by ID.  */
  readonly updatePublishers?: Maybe<ReadonlyArray<Maybe<Publisher>>>;
  /**  Delete a single Publisher item by ID.  */
  readonly deletePublisher?: Maybe<Publisher>;
  /**  Delete multiple Publisher items by ID.  */
  readonly deletePublishers?: Maybe<ReadonlyArray<Maybe<Publisher>>>;
  /**  Create a single User item.  */
  readonly createUser?: Maybe<User>;
  /**  Create multiple User items.  */
  readonly createUsers?: Maybe<ReadonlyArray<Maybe<User>>>;
  /**  Update a single User item by ID.  */
  readonly updateUser?: Maybe<User>;
  /**  Update multiple User items by ID.  */
  readonly updateUsers?: Maybe<ReadonlyArray<Maybe<User>>>;
  /**  Delete a single User item by ID.  */
  readonly deleteUser?: Maybe<User>;
  /**  Delete multiple User items by ID.  */
  readonly deleteUsers?: Maybe<ReadonlyArray<Maybe<User>>>;
  /**  Authenticate and generate a token for a User with the Password Authentication Strategy.  */
  readonly authenticateUserWithPassword?: Maybe<AuthenticateUserOutput>;
  readonly unauthenticateUser?: Maybe<UnauthenticateUserOutput>;
  readonly updateAuthenticatedUser?: Maybe<User>;
};

export type MutationCreateElectoralCodeArgs = {
  data?: Maybe<ElectoralCodeCreateInput>;
};

export type MutationCreateElectoralCodesArgs = {
  data?: Maybe<ReadonlyArray<Maybe<ElectoralCodesCreateInput>>>;
};

export type MutationUpdateElectoralCodeArgs = {
  id: Scalars["ID"];
  data?: Maybe<ElectoralCodeUpdateInput>;
};

export type MutationUpdateElectoralCodesArgs = {
  data?: Maybe<ReadonlyArray<Maybe<ElectoralCodesUpdateInput>>>;
};

export type MutationDeleteElectoralCodeArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteElectoralCodesArgs = {
  ids?: Maybe<ReadonlyArray<Scalars["ID"]>>;
};

export type MutationCreateElectoralDistrictArgs = {
  data?: Maybe<ElectoralDistrictCreateInput>;
};

export type MutationCreateElectoralDistrictsArgs = {
  data?: Maybe<ReadonlyArray<Maybe<ElectoralDistrictsCreateInput>>>;
};

export type MutationUpdateElectoralDistrictArgs = {
  id: Scalars["ID"];
  data?: Maybe<ElectoralDistrictUpdateInput>;
};

export type MutationUpdateElectoralDistrictsArgs = {
  data?: Maybe<ReadonlyArray<Maybe<ElectoralDistrictsUpdateInput>>>;
};

export type MutationDeleteElectoralDistrictArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteElectoralDistrictsArgs = {
  ids?: Maybe<ReadonlyArray<Scalars["ID"]>>;
};

export type MutationCreatePartyArgs = {
  data?: Maybe<PartyCreateInput>;
};

export type MutationCreatePartiesArgs = {
  data?: Maybe<ReadonlyArray<Maybe<PartiesCreateInput>>>;
};

export type MutationUpdatePartyArgs = {
  id: Scalars["ID"];
  data?: Maybe<PartyUpdateInput>;
};

export type MutationUpdatePartiesArgs = {
  data?: Maybe<ReadonlyArray<Maybe<PartiesUpdateInput>>>;
};

export type MutationDeletePartyArgs = {
  id: Scalars["ID"];
};

export type MutationDeletePartiesArgs = {
  ids?: Maybe<ReadonlyArray<Scalars["ID"]>>;
};

export type MutationCreatePollArgs = {
  data?: Maybe<PollCreateInput>;
};

export type MutationCreatePollsArgs = {
  data?: Maybe<ReadonlyArray<Maybe<PollsCreateInput>>>;
};

export type MutationUpdatePollArgs = {
  id: Scalars["ID"];
  data?: Maybe<PollUpdateInput>;
};

export type MutationUpdatePollsArgs = {
  data?: Maybe<ReadonlyArray<Maybe<PollsUpdateInput>>>;
};

export type MutationDeletePollArgs = {
  id: Scalars["ID"];
};

export type MutationDeletePollsArgs = {
  ids?: Maybe<ReadonlyArray<Scalars["ID"]>>;
};

export type MutationCreatePollCompanyArgs = {
  data?: Maybe<PollCompanyCreateInput>;
};

export type MutationCreatePollCompaniesArgs = {
  data?: Maybe<ReadonlyArray<Maybe<PollCompaniesCreateInput>>>;
};

export type MutationUpdatePollCompanyArgs = {
  id: Scalars["ID"];
  data?: Maybe<PollCompanyUpdateInput>;
};

export type MutationUpdatePollCompaniesArgs = {
  data?: Maybe<ReadonlyArray<Maybe<PollCompaniesUpdateInput>>>;
};

export type MutationDeletePollCompanyArgs = {
  id: Scalars["ID"];
};

export type MutationDeletePollCompaniesArgs = {
  ids?: Maybe<ReadonlyArray<Scalars["ID"]>>;
};

export type MutationCreatePollMethodArgs = {
  data?: Maybe<PollMethodCreateInput>;
};

export type MutationCreatePollMethodsArgs = {
  data?: Maybe<ReadonlyArray<Maybe<PollMethodsCreateInput>>>;
};

export type MutationUpdatePollMethodArgs = {
  id: Scalars["ID"];
  data?: Maybe<PollMethodUpdateInput>;
};

export type MutationUpdatePollMethodsArgs = {
  data?: Maybe<ReadonlyArray<Maybe<PollMethodsUpdateInput>>>;
};

export type MutationDeletePollMethodArgs = {
  id: Scalars["ID"];
};

export type MutationDeletePollMethodsArgs = {
  ids?: Maybe<ReadonlyArray<Scalars["ID"]>>;
};

export type MutationCreatePollResultArgs = {
  data?: Maybe<PollResultCreateInput>;
};

export type MutationCreatePollResultsArgs = {
  data?: Maybe<ReadonlyArray<Maybe<PollResultsCreateInput>>>;
};

export type MutationUpdatePollResultArgs = {
  id: Scalars["ID"];
  data?: Maybe<PollResultUpdateInput>;
};

export type MutationUpdatePollResultsArgs = {
  data?: Maybe<ReadonlyArray<Maybe<PollResultsUpdateInput>>>;
};

export type MutationDeletePollResultArgs = {
  id: Scalars["ID"];
};

export type MutationDeletePollResultsArgs = {
  ids?: Maybe<ReadonlyArray<Scalars["ID"]>>;
};

export type MutationCreatePublisherArgs = {
  data?: Maybe<PublisherCreateInput>;
};

export type MutationCreatePublishersArgs = {
  data?: Maybe<ReadonlyArray<Maybe<PublishersCreateInput>>>;
};

export type MutationUpdatePublisherArgs = {
  id: Scalars["ID"];
  data?: Maybe<PublisherUpdateInput>;
};

export type MutationUpdatePublishersArgs = {
  data?: Maybe<ReadonlyArray<Maybe<PublishersUpdateInput>>>;
};

export type MutationDeletePublisherArgs = {
  id: Scalars["ID"];
};

export type MutationDeletePublishersArgs = {
  ids?: Maybe<ReadonlyArray<Scalars["ID"]>>;
};

export type MutationCreateUserArgs = {
  data?: Maybe<UserCreateInput>;
};

export type MutationCreateUsersArgs = {
  data?: Maybe<ReadonlyArray<Maybe<UsersCreateInput>>>;
};

export type MutationUpdateUserArgs = {
  id: Scalars["ID"];
  data?: Maybe<UserUpdateInput>;
};

export type MutationUpdateUsersArgs = {
  data?: Maybe<ReadonlyArray<Maybe<UsersUpdateInput>>>;
};

export type MutationDeleteUserArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteUsersArgs = {
  ids?: Maybe<ReadonlyArray<Scalars["ID"]>>;
};

export type MutationAuthenticateUserWithPasswordArgs = {
  username?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
};

export type MutationUpdateAuthenticatedUserArgs = {
  data?: Maybe<UserUpdateInput>;
};

export type PartiesCreateInput = {
  readonly data?: Maybe<PartyCreateInput>;
};

export type PartiesUpdateInput = {
  readonly id: Scalars["ID"];
  readonly data?: Maybe<PartyUpdateInput>;
};

/**  A keystone list  */
export type Party = {
  readonly __typename?: "Party";
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the Party List config, or
   *  2. As an alias to the field set on 'labelField' in the Party List config, or
   *  3. As an alias to a 'name' field on the Party List (if one exists), or
   *  4. As an alias to the 'id' field on the Party List.
   */
  readonly _label_?: Maybe<Scalars["String"]>;
  readonly id: Scalars["ID"];
  readonly name?: Maybe<Scalars["String"]>;
  readonly fullName?: Maybe<Scalars["String"]>;
  readonly abbr?: Maybe<Scalars["String"]>;
  readonly type?: Maybe<PartyTypeType>;
  readonly color?: Maybe<Scalars["String"]>;
  readonly colorDarkTheme?: Maybe<Scalars["String"]>;
  readonly parliamentOrder?: Maybe<Scalars["Int"]>;
  readonly memberParties: ReadonlyArray<Party>;
  readonly _memberPartiesMeta?: Maybe<_QueryMeta>;
  readonly slug?: Maybe<Scalars["String"]>;
};

/**  A keystone list  */
export type PartyMemberPartiesArgs = {
  where?: Maybe<PartyWhereInput>;
  search?: Maybe<Scalars["String"]>;
  sortBy?: Maybe<ReadonlyArray<SortPartiesBy>>;
  orderBy?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

/**  A keystone list  */
export type Party_MemberPartiesMetaArgs = {
  where?: Maybe<PartyWhereInput>;
  search?: Maybe<Scalars["String"]>;
  sortBy?: Maybe<ReadonlyArray<SortPartiesBy>>;
  orderBy?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type PartyCreateInput = {
  readonly name?: Maybe<Scalars["String"]>;
  readonly fullName?: Maybe<Scalars["String"]>;
  readonly abbr?: Maybe<Scalars["String"]>;
  readonly type?: Maybe<PartyTypeType>;
  readonly color?: Maybe<Scalars["String"]>;
  readonly colorDarkTheme?: Maybe<Scalars["String"]>;
  readonly parliamentOrder?: Maybe<Scalars["Int"]>;
  readonly memberParties?: Maybe<PartyRelateToManyInput>;
  readonly slug?: Maybe<Scalars["String"]>;
};

export type PartyRelateToManyInput = {
  readonly create?: Maybe<ReadonlyArray<Maybe<PartyCreateInput>>>;
  readonly connect?: Maybe<ReadonlyArray<Maybe<PartyWhereUniqueInput>>>;
  readonly disconnect?: Maybe<ReadonlyArray<Maybe<PartyWhereUniqueInput>>>;
  readonly disconnectAll?: Maybe<Scalars["Boolean"]>;
};

export type PartyRelateToOneInput = {
  readonly create?: Maybe<PartyCreateInput>;
  readonly connect?: Maybe<PartyWhereUniqueInput>;
  readonly disconnect?: Maybe<PartyWhereUniqueInput>;
  readonly disconnectAll?: Maybe<Scalars["Boolean"]>;
};

export enum PartyTypeType {
  Regular = "regular",
  UndecidedVoters = "undecided_voters",
  OtherPartyVoters = "other_party_voters",
}

export type PartyUpdateInput = {
  readonly name?: Maybe<Scalars["String"]>;
  readonly fullName?: Maybe<Scalars["String"]>;
  readonly abbr?: Maybe<Scalars["String"]>;
  readonly type?: Maybe<PartyTypeType>;
  readonly color?: Maybe<Scalars["String"]>;
  readonly colorDarkTheme?: Maybe<Scalars["String"]>;
  readonly parliamentOrder?: Maybe<Scalars["Int"]>;
  readonly memberParties?: Maybe<PartyRelateToManyInput>;
  readonly slug?: Maybe<Scalars["String"]>;
};

export type PartyWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<Maybe<PartyWhereInput>>>;
  readonly OR?: Maybe<ReadonlyArray<Maybe<PartyWhereInput>>>;
  readonly id?: Maybe<Scalars["ID"]>;
  readonly id_not?: Maybe<Scalars["ID"]>;
  readonly id_in?: Maybe<ReadonlyArray<Maybe<Scalars["ID"]>>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["ID"]>>>;
  readonly name?: Maybe<Scalars["String"]>;
  readonly name_not?: Maybe<Scalars["String"]>;
  readonly name_contains?: Maybe<Scalars["String"]>;
  readonly name_not_contains?: Maybe<Scalars["String"]>;
  readonly name_starts_with?: Maybe<Scalars["String"]>;
  readonly name_not_starts_with?: Maybe<Scalars["String"]>;
  readonly name_ends_with?: Maybe<Scalars["String"]>;
  readonly name_not_ends_with?: Maybe<Scalars["String"]>;
  readonly name_i?: Maybe<Scalars["String"]>;
  readonly name_not_i?: Maybe<Scalars["String"]>;
  readonly name_contains_i?: Maybe<Scalars["String"]>;
  readonly name_not_contains_i?: Maybe<Scalars["String"]>;
  readonly name_starts_with_i?: Maybe<Scalars["String"]>;
  readonly name_not_starts_with_i?: Maybe<Scalars["String"]>;
  readonly name_ends_with_i?: Maybe<Scalars["String"]>;
  readonly name_not_ends_with_i?: Maybe<Scalars["String"]>;
  readonly name_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly name_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly fullName?: Maybe<Scalars["String"]>;
  readonly fullName_not?: Maybe<Scalars["String"]>;
  readonly fullName_contains?: Maybe<Scalars["String"]>;
  readonly fullName_not_contains?: Maybe<Scalars["String"]>;
  readonly fullName_starts_with?: Maybe<Scalars["String"]>;
  readonly fullName_not_starts_with?: Maybe<Scalars["String"]>;
  readonly fullName_ends_with?: Maybe<Scalars["String"]>;
  readonly fullName_not_ends_with?: Maybe<Scalars["String"]>;
  readonly fullName_i?: Maybe<Scalars["String"]>;
  readonly fullName_not_i?: Maybe<Scalars["String"]>;
  readonly fullName_contains_i?: Maybe<Scalars["String"]>;
  readonly fullName_not_contains_i?: Maybe<Scalars["String"]>;
  readonly fullName_starts_with_i?: Maybe<Scalars["String"]>;
  readonly fullName_not_starts_with_i?: Maybe<Scalars["String"]>;
  readonly fullName_ends_with_i?: Maybe<Scalars["String"]>;
  readonly fullName_not_ends_with_i?: Maybe<Scalars["String"]>;
  readonly fullName_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly fullName_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly abbr?: Maybe<Scalars["String"]>;
  readonly abbr_not?: Maybe<Scalars["String"]>;
  readonly abbr_contains?: Maybe<Scalars["String"]>;
  readonly abbr_not_contains?: Maybe<Scalars["String"]>;
  readonly abbr_starts_with?: Maybe<Scalars["String"]>;
  readonly abbr_not_starts_with?: Maybe<Scalars["String"]>;
  readonly abbr_ends_with?: Maybe<Scalars["String"]>;
  readonly abbr_not_ends_with?: Maybe<Scalars["String"]>;
  readonly abbr_i?: Maybe<Scalars["String"]>;
  readonly abbr_not_i?: Maybe<Scalars["String"]>;
  readonly abbr_contains_i?: Maybe<Scalars["String"]>;
  readonly abbr_not_contains_i?: Maybe<Scalars["String"]>;
  readonly abbr_starts_with_i?: Maybe<Scalars["String"]>;
  readonly abbr_not_starts_with_i?: Maybe<Scalars["String"]>;
  readonly abbr_ends_with_i?: Maybe<Scalars["String"]>;
  readonly abbr_not_ends_with_i?: Maybe<Scalars["String"]>;
  readonly abbr_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly abbr_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly type?: Maybe<PartyTypeType>;
  readonly type_not?: Maybe<PartyTypeType>;
  readonly type_in?: Maybe<ReadonlyArray<Maybe<PartyTypeType>>>;
  readonly type_not_in?: Maybe<ReadonlyArray<Maybe<PartyTypeType>>>;
  readonly color?: Maybe<Scalars["String"]>;
  readonly color_not?: Maybe<Scalars["String"]>;
  readonly color_contains?: Maybe<Scalars["String"]>;
  readonly color_not_contains?: Maybe<Scalars["String"]>;
  readonly color_starts_with?: Maybe<Scalars["String"]>;
  readonly color_not_starts_with?: Maybe<Scalars["String"]>;
  readonly color_ends_with?: Maybe<Scalars["String"]>;
  readonly color_not_ends_with?: Maybe<Scalars["String"]>;
  readonly color_i?: Maybe<Scalars["String"]>;
  readonly color_not_i?: Maybe<Scalars["String"]>;
  readonly color_contains_i?: Maybe<Scalars["String"]>;
  readonly color_not_contains_i?: Maybe<Scalars["String"]>;
  readonly color_starts_with_i?: Maybe<Scalars["String"]>;
  readonly color_not_starts_with_i?: Maybe<Scalars["String"]>;
  readonly color_ends_with_i?: Maybe<Scalars["String"]>;
  readonly color_not_ends_with_i?: Maybe<Scalars["String"]>;
  readonly color_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly color_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly colorDarkTheme?: Maybe<Scalars["String"]>;
  readonly colorDarkTheme_not?: Maybe<Scalars["String"]>;
  readonly colorDarkTheme_contains?: Maybe<Scalars["String"]>;
  readonly colorDarkTheme_not_contains?: Maybe<Scalars["String"]>;
  readonly colorDarkTheme_starts_with?: Maybe<Scalars["String"]>;
  readonly colorDarkTheme_not_starts_with?: Maybe<Scalars["String"]>;
  readonly colorDarkTheme_ends_with?: Maybe<Scalars["String"]>;
  readonly colorDarkTheme_not_ends_with?: Maybe<Scalars["String"]>;
  readonly colorDarkTheme_i?: Maybe<Scalars["String"]>;
  readonly colorDarkTheme_not_i?: Maybe<Scalars["String"]>;
  readonly colorDarkTheme_contains_i?: Maybe<Scalars["String"]>;
  readonly colorDarkTheme_not_contains_i?: Maybe<Scalars["String"]>;
  readonly colorDarkTheme_starts_with_i?: Maybe<Scalars["String"]>;
  readonly colorDarkTheme_not_starts_with_i?: Maybe<Scalars["String"]>;
  readonly colorDarkTheme_ends_with_i?: Maybe<Scalars["String"]>;
  readonly colorDarkTheme_not_ends_with_i?: Maybe<Scalars["String"]>;
  readonly colorDarkTheme_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly colorDarkTheme_not_in?: Maybe<
    ReadonlyArray<Maybe<Scalars["String"]>>
  >;
  readonly parliamentOrder?: Maybe<Scalars["Int"]>;
  readonly parliamentOrder_not?: Maybe<Scalars["Int"]>;
  readonly parliamentOrder_lt?: Maybe<Scalars["Int"]>;
  readonly parliamentOrder_lte?: Maybe<Scalars["Int"]>;
  readonly parliamentOrder_gt?: Maybe<Scalars["Int"]>;
  readonly parliamentOrder_gte?: Maybe<Scalars["Int"]>;
  readonly parliamentOrder_in?: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>;
  readonly parliamentOrder_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>;
  /**  condition must be true for all nodes  */
  readonly memberParties_every?: Maybe<PartyWhereInput>;
  /**  condition must be true for at least 1 node  */
  readonly memberParties_some?: Maybe<PartyWhereInput>;
  /**  condition must be false for all nodes  */
  readonly memberParties_none?: Maybe<PartyWhereInput>;
  readonly slug?: Maybe<Scalars["String"]>;
  readonly slug_not?: Maybe<Scalars["String"]>;
  readonly slug_contains?: Maybe<Scalars["String"]>;
  readonly slug_not_contains?: Maybe<Scalars["String"]>;
  readonly slug_starts_with?: Maybe<Scalars["String"]>;
  readonly slug_not_starts_with?: Maybe<Scalars["String"]>;
  readonly slug_ends_with?: Maybe<Scalars["String"]>;
  readonly slug_not_ends_with?: Maybe<Scalars["String"]>;
  readonly slug_i?: Maybe<Scalars["String"]>;
  readonly slug_not_i?: Maybe<Scalars["String"]>;
  readonly slug_contains_i?: Maybe<Scalars["String"]>;
  readonly slug_not_contains_i?: Maybe<Scalars["String"]>;
  readonly slug_starts_with_i?: Maybe<Scalars["String"]>;
  readonly slug_not_starts_with_i?: Maybe<Scalars["String"]>;
  readonly slug_ends_with_i?: Maybe<Scalars["String"]>;
  readonly slug_not_ends_with_i?: Maybe<Scalars["String"]>;
  readonly slug_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly slug_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
};

export type PartyWhereUniqueInput = {
  readonly id: Scalars["ID"];
};

/**  A keystone list  */
export type Poll = {
  readonly __typename?: "Poll";
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the Poll List config, or
   *  2. As an alias to the field set on 'labelField' in the Poll List config, or
   *  3. As an alias to a 'name' field on the Poll List (if one exists), or
   *  4. As an alias to the 'id' field on the Poll List.
   */
  readonly _label_?: Maybe<Scalars["String"]>;
  readonly id: Scalars["ID"];
  readonly source?: Maybe<Scalars["String"]>;
  readonly publishedBy: ReadonlyArray<Publisher>;
  readonly _publishedByMeta?: Maybe<_QueryMeta>;
  readonly polledBy: ReadonlyArray<PollCompany>;
  readonly _polledByMeta?: Maybe<_QueryMeta>;
  readonly publishedAt?: Maybe<Scalars["String"]>;
  readonly method?: Maybe<PollMethod>;
  readonly results: ReadonlyArray<PollResult>;
  readonly _resultsMeta?: Maybe<_QueryMeta>;
  readonly participantsCount?: Maybe<Scalars["Int"]>;
  readonly participantsWillVote?: Maybe<Scalars["Float"]>;
  readonly participantsMightVote?: Maybe<Scalars["Float"]>;
  readonly participantsUndecided?: Maybe<Scalars["Float"]>;
  readonly participantsMightNotVote?: Maybe<Scalars["Float"]>;
  readonly participantsWillNotVote?: Maybe<Scalars["Float"]>;
  readonly pollStartedAt?: Maybe<Scalars["String"]>;
  readonly pollEndedAt?: Maybe<Scalars["String"]>;
  readonly errorMargin?: Maybe<Scalars["Float"]>;
  readonly slug?: Maybe<Scalars["String"]>;
};

/**  A keystone list  */
export type PollPublishedByArgs = {
  where?: Maybe<PublisherWhereInput>;
  search?: Maybe<Scalars["String"]>;
  sortBy?: Maybe<ReadonlyArray<SortPublishersBy>>;
  orderBy?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

/**  A keystone list  */
export type Poll_PublishedByMetaArgs = {
  where?: Maybe<PublisherWhereInput>;
  search?: Maybe<Scalars["String"]>;
  sortBy?: Maybe<ReadonlyArray<SortPublishersBy>>;
  orderBy?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

/**  A keystone list  */
export type PollPolledByArgs = {
  where?: Maybe<PollCompanyWhereInput>;
  search?: Maybe<Scalars["String"]>;
  sortBy?: Maybe<ReadonlyArray<SortPollCompaniesBy>>;
  orderBy?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

/**  A keystone list  */
export type Poll_PolledByMetaArgs = {
  where?: Maybe<PollCompanyWhereInput>;
  search?: Maybe<Scalars["String"]>;
  sortBy?: Maybe<ReadonlyArray<SortPollCompaniesBy>>;
  orderBy?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

/**  A keystone list  */
export type PollResultsArgs = {
  where?: Maybe<PollResultWhereInput>;
  search?: Maybe<Scalars["String"]>;
  sortBy?: Maybe<ReadonlyArray<SortPollResultsBy>>;
  orderBy?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

/**  A keystone list  */
export type Poll_ResultsMetaArgs = {
  where?: Maybe<PollResultWhereInput>;
  search?: Maybe<Scalars["String"]>;
  sortBy?: Maybe<ReadonlyArray<SortPollResultsBy>>;
  orderBy?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type PollCompaniesCreateInput = {
  readonly data?: Maybe<PollCompanyCreateInput>;
};

export type PollCompaniesUpdateInput = {
  readonly id: Scalars["ID"];
  readonly data?: Maybe<PollCompanyUpdateInput>;
};

/**  A keystone list  */
export type PollCompany = {
  readonly __typename?: "PollCompany";
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the PollCompany List config, or
   *  2. As an alias to the field set on 'labelField' in the PollCompany List config, or
   *  3. As an alias to a 'name' field on the PollCompany List (if one exists), or
   *  4. As an alias to the 'id' field on the PollCompany List.
   */
  readonly _label_?: Maybe<Scalars["String"]>;
  readonly id: Scalars["ID"];
  readonly name?: Maybe<Scalars["String"]>;
  readonly abbr?: Maybe<Scalars["String"]>;
  readonly slug?: Maybe<Scalars["String"]>;
};

export type PollCompanyCreateInput = {
  readonly name?: Maybe<Scalars["String"]>;
  readonly abbr?: Maybe<Scalars["String"]>;
  readonly slug?: Maybe<Scalars["String"]>;
};

export type PollCompanyRelateToManyInput = {
  readonly create?: Maybe<ReadonlyArray<Maybe<PollCompanyCreateInput>>>;
  readonly connect?: Maybe<ReadonlyArray<Maybe<PollCompanyWhereUniqueInput>>>;
  readonly disconnect?: Maybe<
    ReadonlyArray<Maybe<PollCompanyWhereUniqueInput>>
  >;
  readonly disconnectAll?: Maybe<Scalars["Boolean"]>;
};

export type PollCompanyUpdateInput = {
  readonly name?: Maybe<Scalars["String"]>;
  readonly abbr?: Maybe<Scalars["String"]>;
  readonly slug?: Maybe<Scalars["String"]>;
};

export type PollCompanyWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<Maybe<PollCompanyWhereInput>>>;
  readonly OR?: Maybe<ReadonlyArray<Maybe<PollCompanyWhereInput>>>;
  readonly id?: Maybe<Scalars["ID"]>;
  readonly id_not?: Maybe<Scalars["ID"]>;
  readonly id_in?: Maybe<ReadonlyArray<Maybe<Scalars["ID"]>>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["ID"]>>>;
  readonly name?: Maybe<Scalars["String"]>;
  readonly name_not?: Maybe<Scalars["String"]>;
  readonly name_contains?: Maybe<Scalars["String"]>;
  readonly name_not_contains?: Maybe<Scalars["String"]>;
  readonly name_starts_with?: Maybe<Scalars["String"]>;
  readonly name_not_starts_with?: Maybe<Scalars["String"]>;
  readonly name_ends_with?: Maybe<Scalars["String"]>;
  readonly name_not_ends_with?: Maybe<Scalars["String"]>;
  readonly name_i?: Maybe<Scalars["String"]>;
  readonly name_not_i?: Maybe<Scalars["String"]>;
  readonly name_contains_i?: Maybe<Scalars["String"]>;
  readonly name_not_contains_i?: Maybe<Scalars["String"]>;
  readonly name_starts_with_i?: Maybe<Scalars["String"]>;
  readonly name_not_starts_with_i?: Maybe<Scalars["String"]>;
  readonly name_ends_with_i?: Maybe<Scalars["String"]>;
  readonly name_not_ends_with_i?: Maybe<Scalars["String"]>;
  readonly name_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly name_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly abbr?: Maybe<Scalars["String"]>;
  readonly abbr_not?: Maybe<Scalars["String"]>;
  readonly abbr_contains?: Maybe<Scalars["String"]>;
  readonly abbr_not_contains?: Maybe<Scalars["String"]>;
  readonly abbr_starts_with?: Maybe<Scalars["String"]>;
  readonly abbr_not_starts_with?: Maybe<Scalars["String"]>;
  readonly abbr_ends_with?: Maybe<Scalars["String"]>;
  readonly abbr_not_ends_with?: Maybe<Scalars["String"]>;
  readonly abbr_i?: Maybe<Scalars["String"]>;
  readonly abbr_not_i?: Maybe<Scalars["String"]>;
  readonly abbr_contains_i?: Maybe<Scalars["String"]>;
  readonly abbr_not_contains_i?: Maybe<Scalars["String"]>;
  readonly abbr_starts_with_i?: Maybe<Scalars["String"]>;
  readonly abbr_not_starts_with_i?: Maybe<Scalars["String"]>;
  readonly abbr_ends_with_i?: Maybe<Scalars["String"]>;
  readonly abbr_not_ends_with_i?: Maybe<Scalars["String"]>;
  readonly abbr_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly abbr_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly slug?: Maybe<Scalars["String"]>;
  readonly slug_not?: Maybe<Scalars["String"]>;
  readonly slug_contains?: Maybe<Scalars["String"]>;
  readonly slug_not_contains?: Maybe<Scalars["String"]>;
  readonly slug_starts_with?: Maybe<Scalars["String"]>;
  readonly slug_not_starts_with?: Maybe<Scalars["String"]>;
  readonly slug_ends_with?: Maybe<Scalars["String"]>;
  readonly slug_not_ends_with?: Maybe<Scalars["String"]>;
  readonly slug_i?: Maybe<Scalars["String"]>;
  readonly slug_not_i?: Maybe<Scalars["String"]>;
  readonly slug_contains_i?: Maybe<Scalars["String"]>;
  readonly slug_not_contains_i?: Maybe<Scalars["String"]>;
  readonly slug_starts_with_i?: Maybe<Scalars["String"]>;
  readonly slug_not_starts_with_i?: Maybe<Scalars["String"]>;
  readonly slug_ends_with_i?: Maybe<Scalars["String"]>;
  readonly slug_not_ends_with_i?: Maybe<Scalars["String"]>;
  readonly slug_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly slug_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
};

export type PollCompanyWhereUniqueInput = {
  readonly id: Scalars["ID"];
};

export type PollCreateInput = {
  readonly source?: Maybe<Scalars["String"]>;
  readonly publishedBy?: Maybe<PublisherRelateToManyInput>;
  readonly polledBy?: Maybe<PollCompanyRelateToManyInput>;
  readonly publishedAt?: Maybe<Scalars["String"]>;
  readonly method?: Maybe<PollMethodRelateToOneInput>;
  readonly results?: Maybe<PollResultRelateToManyInput>;
  readonly participantsCount?: Maybe<Scalars["Int"]>;
  readonly participantsWillVote?: Maybe<Scalars["Float"]>;
  readonly participantsMightVote?: Maybe<Scalars["Float"]>;
  readonly participantsUndecided?: Maybe<Scalars["Float"]>;
  readonly participantsMightNotVote?: Maybe<Scalars["Float"]>;
  readonly participantsWillNotVote?: Maybe<Scalars["Float"]>;
  readonly pollStartedAt?: Maybe<Scalars["String"]>;
  readonly pollEndedAt?: Maybe<Scalars["String"]>;
  readonly errorMargin?: Maybe<Scalars["Float"]>;
  readonly slug?: Maybe<Scalars["String"]>;
};

/**  A keystone list  */
export type PollMethod = {
  readonly __typename?: "PollMethod";
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the PollMethod List config, or
   *  2. As an alias to the field set on 'labelField' in the PollMethod List config, or
   *  3. As an alias to a 'name' field on the PollMethod List (if one exists), or
   *  4. As an alias to the 'id' field on the PollMethod List.
   */
  readonly _label_?: Maybe<Scalars["String"]>;
  readonly id: Scalars["ID"];
  readonly name?: Maybe<Scalars["String"]>;
  readonly fullName?: Maybe<Scalars["String"]>;
  readonly slug?: Maybe<Scalars["String"]>;
};

export type PollMethodCreateInput = {
  readonly name?: Maybe<Scalars["String"]>;
  readonly fullName?: Maybe<Scalars["String"]>;
  readonly slug?: Maybe<Scalars["String"]>;
};

export type PollMethodRelateToOneInput = {
  readonly create?: Maybe<PollMethodCreateInput>;
  readonly connect?: Maybe<PollMethodWhereUniqueInput>;
  readonly disconnect?: Maybe<PollMethodWhereUniqueInput>;
  readonly disconnectAll?: Maybe<Scalars["Boolean"]>;
};

export type PollMethodsCreateInput = {
  readonly data?: Maybe<PollMethodCreateInput>;
};

export type PollMethodsUpdateInput = {
  readonly id: Scalars["ID"];
  readonly data?: Maybe<PollMethodUpdateInput>;
};

export type PollMethodUpdateInput = {
  readonly name?: Maybe<Scalars["String"]>;
  readonly fullName?: Maybe<Scalars["String"]>;
  readonly slug?: Maybe<Scalars["String"]>;
};

export type PollMethodWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<Maybe<PollMethodWhereInput>>>;
  readonly OR?: Maybe<ReadonlyArray<Maybe<PollMethodWhereInput>>>;
  readonly id?: Maybe<Scalars["ID"]>;
  readonly id_not?: Maybe<Scalars["ID"]>;
  readonly id_in?: Maybe<ReadonlyArray<Maybe<Scalars["ID"]>>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["ID"]>>>;
  readonly name?: Maybe<Scalars["String"]>;
  readonly name_not?: Maybe<Scalars["String"]>;
  readonly name_contains?: Maybe<Scalars["String"]>;
  readonly name_not_contains?: Maybe<Scalars["String"]>;
  readonly name_starts_with?: Maybe<Scalars["String"]>;
  readonly name_not_starts_with?: Maybe<Scalars["String"]>;
  readonly name_ends_with?: Maybe<Scalars["String"]>;
  readonly name_not_ends_with?: Maybe<Scalars["String"]>;
  readonly name_i?: Maybe<Scalars["String"]>;
  readonly name_not_i?: Maybe<Scalars["String"]>;
  readonly name_contains_i?: Maybe<Scalars["String"]>;
  readonly name_not_contains_i?: Maybe<Scalars["String"]>;
  readonly name_starts_with_i?: Maybe<Scalars["String"]>;
  readonly name_not_starts_with_i?: Maybe<Scalars["String"]>;
  readonly name_ends_with_i?: Maybe<Scalars["String"]>;
  readonly name_not_ends_with_i?: Maybe<Scalars["String"]>;
  readonly name_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly name_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly fullName?: Maybe<Scalars["String"]>;
  readonly fullName_not?: Maybe<Scalars["String"]>;
  readonly fullName_contains?: Maybe<Scalars["String"]>;
  readonly fullName_not_contains?: Maybe<Scalars["String"]>;
  readonly fullName_starts_with?: Maybe<Scalars["String"]>;
  readonly fullName_not_starts_with?: Maybe<Scalars["String"]>;
  readonly fullName_ends_with?: Maybe<Scalars["String"]>;
  readonly fullName_not_ends_with?: Maybe<Scalars["String"]>;
  readonly fullName_i?: Maybe<Scalars["String"]>;
  readonly fullName_not_i?: Maybe<Scalars["String"]>;
  readonly fullName_contains_i?: Maybe<Scalars["String"]>;
  readonly fullName_not_contains_i?: Maybe<Scalars["String"]>;
  readonly fullName_starts_with_i?: Maybe<Scalars["String"]>;
  readonly fullName_not_starts_with_i?: Maybe<Scalars["String"]>;
  readonly fullName_ends_with_i?: Maybe<Scalars["String"]>;
  readonly fullName_not_ends_with_i?: Maybe<Scalars["String"]>;
  readonly fullName_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly fullName_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly slug?: Maybe<Scalars["String"]>;
  readonly slug_not?: Maybe<Scalars["String"]>;
  readonly slug_contains?: Maybe<Scalars["String"]>;
  readonly slug_not_contains?: Maybe<Scalars["String"]>;
  readonly slug_starts_with?: Maybe<Scalars["String"]>;
  readonly slug_not_starts_with?: Maybe<Scalars["String"]>;
  readonly slug_ends_with?: Maybe<Scalars["String"]>;
  readonly slug_not_ends_with?: Maybe<Scalars["String"]>;
  readonly slug_i?: Maybe<Scalars["String"]>;
  readonly slug_not_i?: Maybe<Scalars["String"]>;
  readonly slug_contains_i?: Maybe<Scalars["String"]>;
  readonly slug_not_contains_i?: Maybe<Scalars["String"]>;
  readonly slug_starts_with_i?: Maybe<Scalars["String"]>;
  readonly slug_not_starts_with_i?: Maybe<Scalars["String"]>;
  readonly slug_ends_with_i?: Maybe<Scalars["String"]>;
  readonly slug_not_ends_with_i?: Maybe<Scalars["String"]>;
  readonly slug_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly slug_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
};

export type PollMethodWhereUniqueInput = {
  readonly id: Scalars["ID"];
};

/**  A keystone list  */
export type PollResult = {
  readonly __typename?: "PollResult";
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the PollResult List config, or
   *  2. As an alias to the field set on 'labelField' in the PollResult List config, or
   *  3. As an alias to a 'name' field on the PollResult List (if one exists), or
   *  4. As an alias to the 'id' field on the PollResult List.
   */
  readonly _label_?: Maybe<Scalars["String"]>;
  readonly id: Scalars["ID"];
  readonly result?: Maybe<Scalars["Float"]>;
  readonly party?: Maybe<Party>;
};

export type PollResultCreateInput = {
  readonly result?: Maybe<Scalars["Float"]>;
  readonly party?: Maybe<PartyRelateToOneInput>;
};

export type PollResultRelateToManyInput = {
  readonly create?: Maybe<ReadonlyArray<Maybe<PollResultCreateInput>>>;
  readonly connect?: Maybe<ReadonlyArray<Maybe<PollResultWhereUniqueInput>>>;
  readonly disconnect?: Maybe<ReadonlyArray<Maybe<PollResultWhereUniqueInput>>>;
  readonly disconnectAll?: Maybe<Scalars["Boolean"]>;
};

export type PollResultsCreateInput = {
  readonly data?: Maybe<PollResultCreateInput>;
};

export type PollResultsUpdateInput = {
  readonly id: Scalars["ID"];
  readonly data?: Maybe<PollResultUpdateInput>;
};

export type PollResultUpdateInput = {
  readonly result?: Maybe<Scalars["Float"]>;
  readonly party?: Maybe<PartyRelateToOneInput>;
};

export type PollResultWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<Maybe<PollResultWhereInput>>>;
  readonly OR?: Maybe<ReadonlyArray<Maybe<PollResultWhereInput>>>;
  readonly id?: Maybe<Scalars["ID"]>;
  readonly id_not?: Maybe<Scalars["ID"]>;
  readonly id_in?: Maybe<ReadonlyArray<Maybe<Scalars["ID"]>>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["ID"]>>>;
  readonly result?: Maybe<Scalars["Float"]>;
  readonly result_not?: Maybe<Scalars["Float"]>;
  readonly result_lt?: Maybe<Scalars["Float"]>;
  readonly result_lte?: Maybe<Scalars["Float"]>;
  readonly result_gt?: Maybe<Scalars["Float"]>;
  readonly result_gte?: Maybe<Scalars["Float"]>;
  readonly result_in?: Maybe<ReadonlyArray<Maybe<Scalars["Float"]>>>;
  readonly result_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["Float"]>>>;
  readonly party?: Maybe<PartyWhereInput>;
  readonly party_is_null?: Maybe<Scalars["Boolean"]>;
};

export type PollResultWhereUniqueInput = {
  readonly id: Scalars["ID"];
};

export type PollsCreateInput = {
  readonly data?: Maybe<PollCreateInput>;
};

export type PollsUpdateInput = {
  readonly id: Scalars["ID"];
  readonly data?: Maybe<PollUpdateInput>;
};

export type PollUpdateInput = {
  readonly source?: Maybe<Scalars["String"]>;
  readonly publishedBy?: Maybe<PublisherRelateToManyInput>;
  readonly polledBy?: Maybe<PollCompanyRelateToManyInput>;
  readonly publishedAt?: Maybe<Scalars["String"]>;
  readonly method?: Maybe<PollMethodRelateToOneInput>;
  readonly results?: Maybe<PollResultRelateToManyInput>;
  readonly participantsCount?: Maybe<Scalars["Int"]>;
  readonly participantsWillVote?: Maybe<Scalars["Float"]>;
  readonly participantsMightVote?: Maybe<Scalars["Float"]>;
  readonly participantsUndecided?: Maybe<Scalars["Float"]>;
  readonly participantsMightNotVote?: Maybe<Scalars["Float"]>;
  readonly participantsWillNotVote?: Maybe<Scalars["Float"]>;
  readonly pollStartedAt?: Maybe<Scalars["String"]>;
  readonly pollEndedAt?: Maybe<Scalars["String"]>;
  readonly errorMargin?: Maybe<Scalars["Float"]>;
  readonly slug?: Maybe<Scalars["String"]>;
};

export type PollWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<Maybe<PollWhereInput>>>;
  readonly OR?: Maybe<ReadonlyArray<Maybe<PollWhereInput>>>;
  readonly id?: Maybe<Scalars["ID"]>;
  readonly id_not?: Maybe<Scalars["ID"]>;
  readonly id_in?: Maybe<ReadonlyArray<Maybe<Scalars["ID"]>>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["ID"]>>>;
  readonly source?: Maybe<Scalars["String"]>;
  readonly source_not?: Maybe<Scalars["String"]>;
  readonly source_contains?: Maybe<Scalars["String"]>;
  readonly source_not_contains?: Maybe<Scalars["String"]>;
  readonly source_starts_with?: Maybe<Scalars["String"]>;
  readonly source_not_starts_with?: Maybe<Scalars["String"]>;
  readonly source_ends_with?: Maybe<Scalars["String"]>;
  readonly source_not_ends_with?: Maybe<Scalars["String"]>;
  readonly source_i?: Maybe<Scalars["String"]>;
  readonly source_not_i?: Maybe<Scalars["String"]>;
  readonly source_contains_i?: Maybe<Scalars["String"]>;
  readonly source_not_contains_i?: Maybe<Scalars["String"]>;
  readonly source_starts_with_i?: Maybe<Scalars["String"]>;
  readonly source_not_starts_with_i?: Maybe<Scalars["String"]>;
  readonly source_ends_with_i?: Maybe<Scalars["String"]>;
  readonly source_not_ends_with_i?: Maybe<Scalars["String"]>;
  readonly source_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly source_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  /**  condition must be true for all nodes  */
  readonly publishedBy_every?: Maybe<PublisherWhereInput>;
  /**  condition must be true for at least 1 node  */
  readonly publishedBy_some?: Maybe<PublisherWhereInput>;
  /**  condition must be false for all nodes  */
  readonly publishedBy_none?: Maybe<PublisherWhereInput>;
  /**  condition must be true for all nodes  */
  readonly polledBy_every?: Maybe<PollCompanyWhereInput>;
  /**  condition must be true for at least 1 node  */
  readonly polledBy_some?: Maybe<PollCompanyWhereInput>;
  /**  condition must be false for all nodes  */
  readonly polledBy_none?: Maybe<PollCompanyWhereInput>;
  readonly publishedAt?: Maybe<Scalars["String"]>;
  readonly publishedAt_not?: Maybe<Scalars["String"]>;
  readonly publishedAt_lt?: Maybe<Scalars["String"]>;
  readonly publishedAt_lte?: Maybe<Scalars["String"]>;
  readonly publishedAt_gt?: Maybe<Scalars["String"]>;
  readonly publishedAt_gte?: Maybe<Scalars["String"]>;
  readonly publishedAt_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly publishedAt_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly method?: Maybe<PollMethodWhereInput>;
  readonly method_is_null?: Maybe<Scalars["Boolean"]>;
  /**  condition must be true for all nodes  */
  readonly results_every?: Maybe<PollResultWhereInput>;
  /**  condition must be true for at least 1 node  */
  readonly results_some?: Maybe<PollResultWhereInput>;
  /**  condition must be false for all nodes  */
  readonly results_none?: Maybe<PollResultWhereInput>;
  readonly participantsCount?: Maybe<Scalars["Int"]>;
  readonly participantsCount_not?: Maybe<Scalars["Int"]>;
  readonly participantsCount_lt?: Maybe<Scalars["Int"]>;
  readonly participantsCount_lte?: Maybe<Scalars["Int"]>;
  readonly participantsCount_gt?: Maybe<Scalars["Int"]>;
  readonly participantsCount_gte?: Maybe<Scalars["Int"]>;
  readonly participantsCount_in?: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>;
  readonly participantsCount_not_in?: Maybe<
    ReadonlyArray<Maybe<Scalars["Int"]>>
  >;
  readonly participantsWillVote?: Maybe<Scalars["Float"]>;
  readonly participantsWillVote_not?: Maybe<Scalars["Float"]>;
  readonly participantsWillVote_lt?: Maybe<Scalars["Float"]>;
  readonly participantsWillVote_lte?: Maybe<Scalars["Float"]>;
  readonly participantsWillVote_gt?: Maybe<Scalars["Float"]>;
  readonly participantsWillVote_gte?: Maybe<Scalars["Float"]>;
  readonly participantsWillVote_in?: Maybe<
    ReadonlyArray<Maybe<Scalars["Float"]>>
  >;
  readonly participantsWillVote_not_in?: Maybe<
    ReadonlyArray<Maybe<Scalars["Float"]>>
  >;
  readonly participantsMightVote?: Maybe<Scalars["Float"]>;
  readonly participantsMightVote_not?: Maybe<Scalars["Float"]>;
  readonly participantsMightVote_lt?: Maybe<Scalars["Float"]>;
  readonly participantsMightVote_lte?: Maybe<Scalars["Float"]>;
  readonly participantsMightVote_gt?: Maybe<Scalars["Float"]>;
  readonly participantsMightVote_gte?: Maybe<Scalars["Float"]>;
  readonly participantsMightVote_in?: Maybe<
    ReadonlyArray<Maybe<Scalars["Float"]>>
  >;
  readonly participantsMightVote_not_in?: Maybe<
    ReadonlyArray<Maybe<Scalars["Float"]>>
  >;
  readonly participantsUndecided?: Maybe<Scalars["Float"]>;
  readonly participantsUndecided_not?: Maybe<Scalars["Float"]>;
  readonly participantsUndecided_lt?: Maybe<Scalars["Float"]>;
  readonly participantsUndecided_lte?: Maybe<Scalars["Float"]>;
  readonly participantsUndecided_gt?: Maybe<Scalars["Float"]>;
  readonly participantsUndecided_gte?: Maybe<Scalars["Float"]>;
  readonly participantsUndecided_in?: Maybe<
    ReadonlyArray<Maybe<Scalars["Float"]>>
  >;
  readonly participantsUndecided_not_in?: Maybe<
    ReadonlyArray<Maybe<Scalars["Float"]>>
  >;
  readonly participantsMightNotVote?: Maybe<Scalars["Float"]>;
  readonly participantsMightNotVote_not?: Maybe<Scalars["Float"]>;
  readonly participantsMightNotVote_lt?: Maybe<Scalars["Float"]>;
  readonly participantsMightNotVote_lte?: Maybe<Scalars["Float"]>;
  readonly participantsMightNotVote_gt?: Maybe<Scalars["Float"]>;
  readonly participantsMightNotVote_gte?: Maybe<Scalars["Float"]>;
  readonly participantsMightNotVote_in?: Maybe<
    ReadonlyArray<Maybe<Scalars["Float"]>>
  >;
  readonly participantsMightNotVote_not_in?: Maybe<
    ReadonlyArray<Maybe<Scalars["Float"]>>
  >;
  readonly participantsWillNotVote?: Maybe<Scalars["Float"]>;
  readonly participantsWillNotVote_not?: Maybe<Scalars["Float"]>;
  readonly participantsWillNotVote_lt?: Maybe<Scalars["Float"]>;
  readonly participantsWillNotVote_lte?: Maybe<Scalars["Float"]>;
  readonly participantsWillNotVote_gt?: Maybe<Scalars["Float"]>;
  readonly participantsWillNotVote_gte?: Maybe<Scalars["Float"]>;
  readonly participantsWillNotVote_in?: Maybe<
    ReadonlyArray<Maybe<Scalars["Float"]>>
  >;
  readonly participantsWillNotVote_not_in?: Maybe<
    ReadonlyArray<Maybe<Scalars["Float"]>>
  >;
  readonly pollStartedAt?: Maybe<Scalars["String"]>;
  readonly pollStartedAt_not?: Maybe<Scalars["String"]>;
  readonly pollStartedAt_lt?: Maybe<Scalars["String"]>;
  readonly pollStartedAt_lte?: Maybe<Scalars["String"]>;
  readonly pollStartedAt_gt?: Maybe<Scalars["String"]>;
  readonly pollStartedAt_gte?: Maybe<Scalars["String"]>;
  readonly pollStartedAt_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly pollStartedAt_not_in?: Maybe<
    ReadonlyArray<Maybe<Scalars["String"]>>
  >;
  readonly pollEndedAt?: Maybe<Scalars["String"]>;
  readonly pollEndedAt_not?: Maybe<Scalars["String"]>;
  readonly pollEndedAt_lt?: Maybe<Scalars["String"]>;
  readonly pollEndedAt_lte?: Maybe<Scalars["String"]>;
  readonly pollEndedAt_gt?: Maybe<Scalars["String"]>;
  readonly pollEndedAt_gte?: Maybe<Scalars["String"]>;
  readonly pollEndedAt_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly pollEndedAt_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly errorMargin?: Maybe<Scalars["Float"]>;
  readonly errorMargin_not?: Maybe<Scalars["Float"]>;
  readonly errorMargin_lt?: Maybe<Scalars["Float"]>;
  readonly errorMargin_lte?: Maybe<Scalars["Float"]>;
  readonly errorMargin_gt?: Maybe<Scalars["Float"]>;
  readonly errorMargin_gte?: Maybe<Scalars["Float"]>;
  readonly errorMargin_in?: Maybe<ReadonlyArray<Maybe<Scalars["Float"]>>>;
  readonly errorMargin_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["Float"]>>>;
  readonly slug?: Maybe<Scalars["String"]>;
  readonly slug_not?: Maybe<Scalars["String"]>;
  readonly slug_contains?: Maybe<Scalars["String"]>;
  readonly slug_not_contains?: Maybe<Scalars["String"]>;
  readonly slug_starts_with?: Maybe<Scalars["String"]>;
  readonly slug_not_starts_with?: Maybe<Scalars["String"]>;
  readonly slug_ends_with?: Maybe<Scalars["String"]>;
  readonly slug_not_ends_with?: Maybe<Scalars["String"]>;
  readonly slug_i?: Maybe<Scalars["String"]>;
  readonly slug_not_i?: Maybe<Scalars["String"]>;
  readonly slug_contains_i?: Maybe<Scalars["String"]>;
  readonly slug_not_contains_i?: Maybe<Scalars["String"]>;
  readonly slug_starts_with_i?: Maybe<Scalars["String"]>;
  readonly slug_not_starts_with_i?: Maybe<Scalars["String"]>;
  readonly slug_ends_with_i?: Maybe<Scalars["String"]>;
  readonly slug_not_ends_with_i?: Maybe<Scalars["String"]>;
  readonly slug_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly slug_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
};

export type PollWhereUniqueInput = {
  readonly id: Scalars["ID"];
};

/**  A keystone list  */
export type Publisher = {
  readonly __typename?: "Publisher";
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the Publisher List config, or
   *  2. As an alias to the field set on 'labelField' in the Publisher List config, or
   *  3. As an alias to a 'name' field on the Publisher List (if one exists), or
   *  4. As an alias to the 'id' field on the Publisher List.
   */
  readonly _label_?: Maybe<Scalars["String"]>;
  readonly id: Scalars["ID"];
  readonly name?: Maybe<Scalars["String"]>;
  readonly abbr?: Maybe<Scalars["String"]>;
  readonly slug?: Maybe<Scalars["String"]>;
};

export type PublisherCreateInput = {
  readonly name?: Maybe<Scalars["String"]>;
  readonly abbr?: Maybe<Scalars["String"]>;
  readonly slug?: Maybe<Scalars["String"]>;
};

export type PublisherRelateToManyInput = {
  readonly create?: Maybe<ReadonlyArray<Maybe<PublisherCreateInput>>>;
  readonly connect?: Maybe<ReadonlyArray<Maybe<PublisherWhereUniqueInput>>>;
  readonly disconnect?: Maybe<ReadonlyArray<Maybe<PublisherWhereUniqueInput>>>;
  readonly disconnectAll?: Maybe<Scalars["Boolean"]>;
};

export type PublishersCreateInput = {
  readonly data?: Maybe<PublisherCreateInput>;
};

export type PublishersUpdateInput = {
  readonly id: Scalars["ID"];
  readonly data?: Maybe<PublisherUpdateInput>;
};

export type PublisherUpdateInput = {
  readonly name?: Maybe<Scalars["String"]>;
  readonly abbr?: Maybe<Scalars["String"]>;
  readonly slug?: Maybe<Scalars["String"]>;
};

export type PublisherWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<Maybe<PublisherWhereInput>>>;
  readonly OR?: Maybe<ReadonlyArray<Maybe<PublisherWhereInput>>>;
  readonly id?: Maybe<Scalars["ID"]>;
  readonly id_not?: Maybe<Scalars["ID"]>;
  readonly id_in?: Maybe<ReadonlyArray<Maybe<Scalars["ID"]>>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["ID"]>>>;
  readonly name?: Maybe<Scalars["String"]>;
  readonly name_not?: Maybe<Scalars["String"]>;
  readonly name_contains?: Maybe<Scalars["String"]>;
  readonly name_not_contains?: Maybe<Scalars["String"]>;
  readonly name_starts_with?: Maybe<Scalars["String"]>;
  readonly name_not_starts_with?: Maybe<Scalars["String"]>;
  readonly name_ends_with?: Maybe<Scalars["String"]>;
  readonly name_not_ends_with?: Maybe<Scalars["String"]>;
  readonly name_i?: Maybe<Scalars["String"]>;
  readonly name_not_i?: Maybe<Scalars["String"]>;
  readonly name_contains_i?: Maybe<Scalars["String"]>;
  readonly name_not_contains_i?: Maybe<Scalars["String"]>;
  readonly name_starts_with_i?: Maybe<Scalars["String"]>;
  readonly name_not_starts_with_i?: Maybe<Scalars["String"]>;
  readonly name_ends_with_i?: Maybe<Scalars["String"]>;
  readonly name_not_ends_with_i?: Maybe<Scalars["String"]>;
  readonly name_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly name_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly abbr?: Maybe<Scalars["String"]>;
  readonly abbr_not?: Maybe<Scalars["String"]>;
  readonly abbr_contains?: Maybe<Scalars["String"]>;
  readonly abbr_not_contains?: Maybe<Scalars["String"]>;
  readonly abbr_starts_with?: Maybe<Scalars["String"]>;
  readonly abbr_not_starts_with?: Maybe<Scalars["String"]>;
  readonly abbr_ends_with?: Maybe<Scalars["String"]>;
  readonly abbr_not_ends_with?: Maybe<Scalars["String"]>;
  readonly abbr_i?: Maybe<Scalars["String"]>;
  readonly abbr_not_i?: Maybe<Scalars["String"]>;
  readonly abbr_contains_i?: Maybe<Scalars["String"]>;
  readonly abbr_not_contains_i?: Maybe<Scalars["String"]>;
  readonly abbr_starts_with_i?: Maybe<Scalars["String"]>;
  readonly abbr_not_starts_with_i?: Maybe<Scalars["String"]>;
  readonly abbr_ends_with_i?: Maybe<Scalars["String"]>;
  readonly abbr_not_ends_with_i?: Maybe<Scalars["String"]>;
  readonly abbr_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly abbr_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly slug?: Maybe<Scalars["String"]>;
  readonly slug_not?: Maybe<Scalars["String"]>;
  readonly slug_contains?: Maybe<Scalars["String"]>;
  readonly slug_not_contains?: Maybe<Scalars["String"]>;
  readonly slug_starts_with?: Maybe<Scalars["String"]>;
  readonly slug_not_starts_with?: Maybe<Scalars["String"]>;
  readonly slug_ends_with?: Maybe<Scalars["String"]>;
  readonly slug_not_ends_with?: Maybe<Scalars["String"]>;
  readonly slug_i?: Maybe<Scalars["String"]>;
  readonly slug_not_i?: Maybe<Scalars["String"]>;
  readonly slug_contains_i?: Maybe<Scalars["String"]>;
  readonly slug_not_contains_i?: Maybe<Scalars["String"]>;
  readonly slug_starts_with_i?: Maybe<Scalars["String"]>;
  readonly slug_not_starts_with_i?: Maybe<Scalars["String"]>;
  readonly slug_ends_with_i?: Maybe<Scalars["String"]>;
  readonly slug_not_ends_with_i?: Maybe<Scalars["String"]>;
  readonly slug_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly slug_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
};

export type PublisherWhereUniqueInput = {
  readonly id: Scalars["ID"];
};

export type Query = {
  readonly __typename?: "Query";
  /**  Search for all ElectoralCode items which match the where clause.  */
  readonly allElectoralCodes?: Maybe<ReadonlyArray<Maybe<ElectoralCode>>>;
  /**  Search for the ElectoralCode item with the matching ID.  */
  readonly ElectoralCode?: Maybe<ElectoralCode>;
  /**  Perform a meta-query on all ElectoralCode items which match the where clause.  */
  readonly _allElectoralCodesMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the ElectoralCode list.  */
  readonly _ElectoralCodesMeta?: Maybe<_ListMeta>;
  /**  Search for all ElectoralDistrict items which match the where clause.  */
  readonly allElectoralDistricts?: Maybe<
    ReadonlyArray<Maybe<ElectoralDistrict>>
  >;
  /**  Search for the ElectoralDistrict item with the matching ID.  */
  readonly ElectoralDistrict?: Maybe<ElectoralDistrict>;
  /**  Perform a meta-query on all ElectoralDistrict items which match the where clause.  */
  readonly _allElectoralDistrictsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the ElectoralDistrict list.  */
  readonly _ElectoralDistrictsMeta?: Maybe<_ListMeta>;
  /**  Search for all Party items which match the where clause.  */
  readonly allParties?: Maybe<ReadonlyArray<Maybe<Party>>>;
  /**  Search for the Party item with the matching ID.  */
  readonly Party?: Maybe<Party>;
  /**  Perform a meta-query on all Party items which match the where clause.  */
  readonly _allPartiesMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the Party list.  */
  readonly _PartiesMeta?: Maybe<_ListMeta>;
  /**  Search for all Poll items which match the where clause.  */
  readonly allPolls?: Maybe<ReadonlyArray<Maybe<Poll>>>;
  /**  Search for the Poll item with the matching ID.  */
  readonly Poll?: Maybe<Poll>;
  /**  Perform a meta-query on all Poll items which match the where clause.  */
  readonly _allPollsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the Poll list.  */
  readonly _PollsMeta?: Maybe<_ListMeta>;
  /**  Search for all PollCompany items which match the where clause.  */
  readonly allPollCompanies?: Maybe<ReadonlyArray<Maybe<PollCompany>>>;
  /**  Search for the PollCompany item with the matching ID.  */
  readonly PollCompany?: Maybe<PollCompany>;
  /**  Perform a meta-query on all PollCompany items which match the where clause.  */
  readonly _allPollCompaniesMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the PollCompany list.  */
  readonly _PollCompaniesMeta?: Maybe<_ListMeta>;
  /**  Search for all PollMethod items which match the where clause.  */
  readonly allPollMethods?: Maybe<ReadonlyArray<Maybe<PollMethod>>>;
  /**  Search for the PollMethod item with the matching ID.  */
  readonly PollMethod?: Maybe<PollMethod>;
  /**  Perform a meta-query on all PollMethod items which match the where clause.  */
  readonly _allPollMethodsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the PollMethod list.  */
  readonly _PollMethodsMeta?: Maybe<_ListMeta>;
  /**  Search for all PollResult items which match the where clause.  */
  readonly allPollResults?: Maybe<ReadonlyArray<Maybe<PollResult>>>;
  /**  Search for the PollResult item with the matching ID.  */
  readonly PollResult?: Maybe<PollResult>;
  /**  Perform a meta-query on all PollResult items which match the where clause.  */
  readonly _allPollResultsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the PollResult list.  */
  readonly _PollResultsMeta?: Maybe<_ListMeta>;
  /**  Search for all Publisher items which match the where clause.  */
  readonly allPublishers?: Maybe<ReadonlyArray<Maybe<Publisher>>>;
  /**  Search for the Publisher item with the matching ID.  */
  readonly Publisher?: Maybe<Publisher>;
  /**  Perform a meta-query on all Publisher items which match the where clause.  */
  readonly _allPublishersMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the Publisher list.  */
  readonly _PublishersMeta?: Maybe<_ListMeta>;
  /**  Search for all User items which match the where clause.  */
  readonly allUsers?: Maybe<ReadonlyArray<Maybe<User>>>;
  /**  Search for the User item with the matching ID.  */
  readonly User?: Maybe<User>;
  /**  Perform a meta-query on all User items which match the where clause.  */
  readonly _allUsersMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the User list.  */
  readonly _UsersMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for all lists.  */
  readonly _ksListsMeta?: Maybe<ReadonlyArray<Maybe<_ListMeta>>>;
  /** The version of the Keystone application serving this API. */
  readonly appVersion?: Maybe<Scalars["String"]>;
  readonly authenticatedUser?: Maybe<User>;
};

export type QueryAllElectoralCodesArgs = {
  where?: Maybe<ElectoralCodeWhereInput>;
  search?: Maybe<Scalars["String"]>;
  sortBy?: Maybe<ReadonlyArray<SortElectoralCodesBy>>;
  orderBy?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryElectoralCodeArgs = {
  where: ElectoralCodeWhereUniqueInput;
};

export type Query_AllElectoralCodesMetaArgs = {
  where?: Maybe<ElectoralCodeWhereInput>;
  search?: Maybe<Scalars["String"]>;
  sortBy?: Maybe<ReadonlyArray<SortElectoralCodesBy>>;
  orderBy?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryAllElectoralDistrictsArgs = {
  where?: Maybe<ElectoralDistrictWhereInput>;
  search?: Maybe<Scalars["String"]>;
  sortBy?: Maybe<ReadonlyArray<SortElectoralDistrictsBy>>;
  orderBy?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryElectoralDistrictArgs = {
  where: ElectoralDistrictWhereUniqueInput;
};

export type Query_AllElectoralDistrictsMetaArgs = {
  where?: Maybe<ElectoralDistrictWhereInput>;
  search?: Maybe<Scalars["String"]>;
  sortBy?: Maybe<ReadonlyArray<SortElectoralDistrictsBy>>;
  orderBy?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryAllPartiesArgs = {
  where?: Maybe<PartyWhereInput>;
  search?: Maybe<Scalars["String"]>;
  sortBy?: Maybe<ReadonlyArray<SortPartiesBy>>;
  orderBy?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryPartyArgs = {
  where: PartyWhereUniqueInput;
};

export type Query_AllPartiesMetaArgs = {
  where?: Maybe<PartyWhereInput>;
  search?: Maybe<Scalars["String"]>;
  sortBy?: Maybe<ReadonlyArray<SortPartiesBy>>;
  orderBy?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryAllPollsArgs = {
  where?: Maybe<PollWhereInput>;
  search?: Maybe<Scalars["String"]>;
  sortBy?: Maybe<ReadonlyArray<SortPollsBy>>;
  orderBy?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryPollArgs = {
  where: PollWhereUniqueInput;
};

export type Query_AllPollsMetaArgs = {
  where?: Maybe<PollWhereInput>;
  search?: Maybe<Scalars["String"]>;
  sortBy?: Maybe<ReadonlyArray<SortPollsBy>>;
  orderBy?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryAllPollCompaniesArgs = {
  where?: Maybe<PollCompanyWhereInput>;
  search?: Maybe<Scalars["String"]>;
  sortBy?: Maybe<ReadonlyArray<SortPollCompaniesBy>>;
  orderBy?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryPollCompanyArgs = {
  where: PollCompanyWhereUniqueInput;
};

export type Query_AllPollCompaniesMetaArgs = {
  where?: Maybe<PollCompanyWhereInput>;
  search?: Maybe<Scalars["String"]>;
  sortBy?: Maybe<ReadonlyArray<SortPollCompaniesBy>>;
  orderBy?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryAllPollMethodsArgs = {
  where?: Maybe<PollMethodWhereInput>;
  search?: Maybe<Scalars["String"]>;
  sortBy?: Maybe<ReadonlyArray<SortPollMethodsBy>>;
  orderBy?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryPollMethodArgs = {
  where: PollMethodWhereUniqueInput;
};

export type Query_AllPollMethodsMetaArgs = {
  where?: Maybe<PollMethodWhereInput>;
  search?: Maybe<Scalars["String"]>;
  sortBy?: Maybe<ReadonlyArray<SortPollMethodsBy>>;
  orderBy?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryAllPollResultsArgs = {
  where?: Maybe<PollResultWhereInput>;
  search?: Maybe<Scalars["String"]>;
  sortBy?: Maybe<ReadonlyArray<SortPollResultsBy>>;
  orderBy?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryPollResultArgs = {
  where: PollResultWhereUniqueInput;
};

export type Query_AllPollResultsMetaArgs = {
  where?: Maybe<PollResultWhereInput>;
  search?: Maybe<Scalars["String"]>;
  sortBy?: Maybe<ReadonlyArray<SortPollResultsBy>>;
  orderBy?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryAllPublishersArgs = {
  where?: Maybe<PublisherWhereInput>;
  search?: Maybe<Scalars["String"]>;
  sortBy?: Maybe<ReadonlyArray<SortPublishersBy>>;
  orderBy?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryPublisherArgs = {
  where: PublisherWhereUniqueInput;
};

export type Query_AllPublishersMetaArgs = {
  where?: Maybe<PublisherWhereInput>;
  search?: Maybe<Scalars["String"]>;
  sortBy?: Maybe<ReadonlyArray<SortPublishersBy>>;
  orderBy?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryAllUsersArgs = {
  where?: Maybe<UserWhereInput>;
  search?: Maybe<Scalars["String"]>;
  sortBy?: Maybe<ReadonlyArray<SortUsersBy>>;
  orderBy?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type Query_AllUsersMetaArgs = {
  where?: Maybe<UserWhereInput>;
  search?: Maybe<Scalars["String"]>;
  sortBy?: Maybe<ReadonlyArray<SortUsersBy>>;
  orderBy?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type Query_KsListsMetaArgs = {
  where?: Maybe<_KsListsMetaInput>;
};

export enum SortElectoralCodesBy {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  InEffectSinceAsc = "inEffectSince_ASC",
  InEffectSinceDesc = "inEffectSince_DESC",
  InEffectToAsc = "inEffectTo_ASC",
  InEffectToDesc = "inEffectTo_DESC",
  ThresholdAsc = "threshold_ASC",
  ThresholdDesc = "threshold_DESC",
  TotalSeatsAsc = "totalSeats_ASC",
  TotalSeatsDesc = "totalSeats_DESC",
  MethodAsc = "method_ASC",
  MethodDesc = "method_DESC",
  DistrictsAsc = "districts_ASC",
  DistrictsDesc = "districts_DESC",
}

export enum SortElectoralDistrictsBy {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  DistrictAsc = "district_ASC",
  DistrictDesc = "district_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  TotalSeatsAsc = "totalSeats_ASC",
  TotalSeatsDesc = "totalSeats_DESC",
}

export enum SortPartiesBy {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  FullNameAsc = "fullName_ASC",
  FullNameDesc = "fullName_DESC",
  AbbrAsc = "abbr_ASC",
  AbbrDesc = "abbr_DESC",
  TypeAsc = "type_ASC",
  TypeDesc = "type_DESC",
  ColorAsc = "color_ASC",
  ColorDesc = "color_DESC",
  ColorDarkThemeAsc = "colorDarkTheme_ASC",
  ColorDarkThemeDesc = "colorDarkTheme_DESC",
  ParliamentOrderAsc = "parliamentOrder_ASC",
  ParliamentOrderDesc = "parliamentOrder_DESC",
  MemberPartiesAsc = "memberParties_ASC",
  MemberPartiesDesc = "memberParties_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
}

export enum SortPollCompaniesBy {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  AbbrAsc = "abbr_ASC",
  AbbrDesc = "abbr_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
}

export enum SortPollMethodsBy {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  FullNameAsc = "fullName_ASC",
  FullNameDesc = "fullName_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
}

export enum SortPollResultsBy {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  ResultAsc = "result_ASC",
  ResultDesc = "result_DESC",
  PartyAsc = "party_ASC",
  PartyDesc = "party_DESC",
}

export enum SortPollsBy {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  SourceAsc = "source_ASC",
  SourceDesc = "source_DESC",
  PublishedByAsc = "publishedBy_ASC",
  PublishedByDesc = "publishedBy_DESC",
  PolledByAsc = "polledBy_ASC",
  PolledByDesc = "polledBy_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  MethodAsc = "method_ASC",
  MethodDesc = "method_DESC",
  ResultsAsc = "results_ASC",
  ResultsDesc = "results_DESC",
  ParticipantsCountAsc = "participantsCount_ASC",
  ParticipantsCountDesc = "participantsCount_DESC",
  ParticipantsWillVoteAsc = "participantsWillVote_ASC",
  ParticipantsWillVoteDesc = "participantsWillVote_DESC",
  ParticipantsMightVoteAsc = "participantsMightVote_ASC",
  ParticipantsMightVoteDesc = "participantsMightVote_DESC",
  ParticipantsUndecidedAsc = "participantsUndecided_ASC",
  ParticipantsUndecidedDesc = "participantsUndecided_DESC",
  ParticipantsMightNotVoteAsc = "participantsMightNotVote_ASC",
  ParticipantsMightNotVoteDesc = "participantsMightNotVote_DESC",
  ParticipantsWillNotVoteAsc = "participantsWillNotVote_ASC",
  ParticipantsWillNotVoteDesc = "participantsWillNotVote_DESC",
  PollStartedAtAsc = "pollStartedAt_ASC",
  PollStartedAtDesc = "pollStartedAt_DESC",
  PollEndedAtAsc = "pollEndedAt_ASC",
  PollEndedAtDesc = "pollEndedAt_DESC",
  ErrorMarginAsc = "errorMargin_ASC",
  ErrorMarginDesc = "errorMargin_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
}

export enum SortPublishersBy {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  AbbrAsc = "abbr_ASC",
  AbbrDesc = "abbr_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
}

export enum SortUsersBy {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  UsernameAsc = "username_ASC",
  UsernameDesc = "username_DESC",
  RoleAsc = "role_ASC",
  RoleDesc = "role_DESC",
}

export type UnauthenticateUserOutput = {
  readonly __typename?: "unauthenticateUserOutput";
  /**
   * `true` when unauthentication succeeds.
   * NOTE: unauthentication always succeeds when the request has an invalid or missing authentication token.
   */
  readonly success?: Maybe<Scalars["Boolean"]>;
};

/**  A keystone list  */
export type User = {
  readonly __typename?: "User";
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the User List config, or
   *  2. As an alias to the field set on 'labelField' in the User List config, or
   *  3. As an alias to a 'name' field on the User List (if one exists), or
   *  4. As an alias to the 'id' field on the User List.
   */
  readonly _label_?: Maybe<Scalars["String"]>;
  readonly id: Scalars["ID"];
  readonly username?: Maybe<Scalars["String"]>;
  readonly password_is_set?: Maybe<Scalars["Boolean"]>;
  readonly role?: Maybe<UserRoleType>;
};

export type UserCreateInput = {
  readonly username?: Maybe<Scalars["String"]>;
  readonly password?: Maybe<Scalars["String"]>;
  readonly role?: Maybe<UserRoleType>;
};

export enum UserRoleType {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

export type UsersCreateInput = {
  readonly data?: Maybe<UserCreateInput>;
};

export type UsersUpdateInput = {
  readonly id: Scalars["ID"];
  readonly data?: Maybe<UserUpdateInput>;
};

export type UserUpdateInput = {
  readonly username?: Maybe<Scalars["String"]>;
  readonly password?: Maybe<Scalars["String"]>;
  readonly role?: Maybe<UserRoleType>;
};

export type UserWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<Maybe<UserWhereInput>>>;
  readonly OR?: Maybe<ReadonlyArray<Maybe<UserWhereInput>>>;
  readonly id?: Maybe<Scalars["ID"]>;
  readonly id_not?: Maybe<Scalars["ID"]>;
  readonly id_in?: Maybe<ReadonlyArray<Maybe<Scalars["ID"]>>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["ID"]>>>;
  readonly username?: Maybe<Scalars["String"]>;
  readonly username_not?: Maybe<Scalars["String"]>;
  readonly username_contains?: Maybe<Scalars["String"]>;
  readonly username_not_contains?: Maybe<Scalars["String"]>;
  readonly username_starts_with?: Maybe<Scalars["String"]>;
  readonly username_not_starts_with?: Maybe<Scalars["String"]>;
  readonly username_ends_with?: Maybe<Scalars["String"]>;
  readonly username_not_ends_with?: Maybe<Scalars["String"]>;
  readonly username_i?: Maybe<Scalars["String"]>;
  readonly username_not_i?: Maybe<Scalars["String"]>;
  readonly username_contains_i?: Maybe<Scalars["String"]>;
  readonly username_not_contains_i?: Maybe<Scalars["String"]>;
  readonly username_starts_with_i?: Maybe<Scalars["String"]>;
  readonly username_not_starts_with_i?: Maybe<Scalars["String"]>;
  readonly username_ends_with_i?: Maybe<Scalars["String"]>;
  readonly username_not_ends_with_i?: Maybe<Scalars["String"]>;
  readonly username_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly username_not_in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly password_is_set?: Maybe<Scalars["Boolean"]>;
  readonly role?: Maybe<UserRoleType>;
  readonly role_not?: Maybe<UserRoleType>;
  readonly role_in?: Maybe<ReadonlyArray<Maybe<UserRoleType>>>;
  readonly role_not_in?: Maybe<ReadonlyArray<Maybe<UserRoleType>>>;
};

export type UserWhereUniqueInput = {
  readonly id: Scalars["ID"];
};

export type ElectoralCodeFragment = {
  readonly __typename?: "ElectoralCode";
} & Pick<
  ElectoralCode,
  "id" | "inEffectSince" | "inEffectTo" | "threshold" | "totalSeats"
> & {
    readonly districts: ReadonlyArray<
      { readonly __typename?: "ElectoralDistrict" } & ElectoralDistrictFragment
    >;
  };

export type ElectoralDistrictFragment = {
  readonly __typename?: "ElectoralDistrict";
} & Pick<ElectoralDistrict, "id" | "district" | "name" | "totalSeats">;

export type PartyFragment = { readonly __typename?: "Party" } & Pick<
  Party,
  | "id"
  | "name"
  | "abbr"
  | "color"
  | "colorDarkTheme"
  | "type"
  | "parliamentOrder"
>;

export type PollFragment = { readonly __typename?: "Poll" } & Pick<
  Poll,
  | "id"
  | "publishedAt"
  | "source"
  | "pollEndedAt"
  | "pollStartedAt"
  | "participantsCount"
> & {
    readonly publishedBy: ReadonlyArray<
      { readonly __typename?: "Publisher" } & PublisherFragment
    >;
    readonly polledBy: ReadonlyArray<
      { readonly __typename?: "PollCompany" } & PollCompanyFragment
    >;
    readonly results: ReadonlyArray<
      { readonly __typename?: "PollResult" } & PollResultFragment
    >;
    readonly method?: Maybe<
      { readonly __typename?: "PollMethod" } & PollMethodFragment
    >;
  };

export type PollCompanyFragment = {
  readonly __typename?: "PollCompany";
} & Pick<PollCompany, "id" | "name" | "abbr">;

export type PollMethodFragment = { readonly __typename?: "PollMethod" } & Pick<
  PollMethod,
  "id" | "name"
>;

export type PollResultFragment = { readonly __typename?: "PollResult" } & Pick<
  PollResult,
  "result"
> & {
    readonly party?: Maybe<{ readonly __typename?: "Party" } & PartyFragment>;
  };

export type PublisherFragment = { readonly __typename?: "Publisher" } & Pick<
  Publisher,
  "id" | "name" | "abbr"
>;

export type GetPollsQueryVariables = Exact<{
  sortBy?: Maybe<ReadonlyArray<SortPollsBy> | SortPollsBy>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
}>;

export type GetPollsQuery = { readonly __typename?: "Query" } & {
  readonly allPolls?: Maybe<
    ReadonlyArray<Maybe<{ readonly __typename?: "Poll" } & PollFragment>>
  >;
  readonly _allPollsMeta?: Maybe<
    { readonly __typename?: "_QueryMeta" } & Pick<_QueryMeta, "count">
  >;
};
