export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  IleMandatow_JSON: any;
  /** DateTime custom scalar represents an ISO 8601 datetime string */
  IleMandatow_DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  IleMandatow_Upload: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type GraphQlSource = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  typeName?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
};

export type GraphQlSourceConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphQlSourceEdge>;
  nodes: Array<GraphQlSource>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<GraphQlSourceGroupConnection>;
};


export type GraphQlSourceConnectionDistinctArgs = {
  field: GraphQlSourceFieldsEnum;
};


export type GraphQlSourceConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: GraphQlSourceFieldsEnum;
};

export type GraphQlSourceEdge = {
  next?: Maybe<GraphQlSource>;
  node: GraphQlSource;
  previous?: Maybe<GraphQlSource>;
};

export type GraphQlSourceFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'typeName'
  | 'fieldName';

export type GraphQlSourceFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  typeName?: Maybe<StringQueryOperatorInput>;
  fieldName?: Maybe<StringQueryOperatorInput>;
};

export type GraphQlSourceGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphQlSourceEdge>;
  nodes: Array<GraphQlSource>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GraphQlSourceSortInput = {
  fields?: Maybe<Array<Maybe<GraphQlSourceFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type IleMandatow = {
  /**  Search for all ElectoralCode items which match the where clause.  */
  allElectoralCodes?: Maybe<Array<Maybe<IleMandatow_ElectoralCode>>>;
  /**  Search for the ElectoralCode item with the matching ID.  */
  ElectoralCode?: Maybe<IleMandatow_ElectoralCode>;
  /**  Perform a meta-query on all ElectoralCode items which match the where clause.  */
  _allElectoralCodesMeta?: Maybe<IleMandatow__QueryMeta>;
  /**  Retrieve the meta-data for the ElectoralCode list.  */
  _ElectoralCodesMeta?: Maybe<IleMandatow__ListMeta>;
  /**  Search for all ElectoralDistrict items which match the where clause.  */
  allElectoralDistricts?: Maybe<Array<Maybe<IleMandatow_ElectoralDistrict>>>;
  /**  Search for the ElectoralDistrict item with the matching ID.  */
  ElectoralDistrict?: Maybe<IleMandatow_ElectoralDistrict>;
  /**  Perform a meta-query on all ElectoralDistrict items which match the where clause.  */
  _allElectoralDistrictsMeta?: Maybe<IleMandatow__QueryMeta>;
  /**  Retrieve the meta-data for the ElectoralDistrict list.  */
  _ElectoralDistrictsMeta?: Maybe<IleMandatow__ListMeta>;
  /**  Search for all Party items which match the where clause.  */
  allParties?: Maybe<Array<Maybe<IleMandatow_Party>>>;
  /**  Search for the Party item with the matching ID.  */
  Party?: Maybe<IleMandatow_Party>;
  /**  Perform a meta-query on all Party items which match the where clause.  */
  _allPartiesMeta?: Maybe<IleMandatow__QueryMeta>;
  /**  Retrieve the meta-data for the Party list.  */
  _PartiesMeta?: Maybe<IleMandatow__ListMeta>;
  /**  Search for all Poll items which match the where clause.  */
  allPolls?: Maybe<Array<Maybe<IleMandatow_Poll>>>;
  /**  Search for the Poll item with the matching ID.  */
  Poll?: Maybe<IleMandatow_Poll>;
  /**  Perform a meta-query on all Poll items which match the where clause.  */
  _allPollsMeta?: Maybe<IleMandatow__QueryMeta>;
  /**  Retrieve the meta-data for the Poll list.  */
  _PollsMeta?: Maybe<IleMandatow__ListMeta>;
  /**  Search for all PollCompany items which match the where clause.  */
  allPollCompanies?: Maybe<Array<Maybe<IleMandatow_PollCompany>>>;
  /**  Search for the PollCompany item with the matching ID.  */
  PollCompany?: Maybe<IleMandatow_PollCompany>;
  /**  Perform a meta-query on all PollCompany items which match the where clause.  */
  _allPollCompaniesMeta?: Maybe<IleMandatow__QueryMeta>;
  /**  Retrieve the meta-data for the PollCompany list.  */
  _PollCompaniesMeta?: Maybe<IleMandatow__ListMeta>;
  /**  Search for all PollMethod items which match the where clause.  */
  allPollMethods?: Maybe<Array<Maybe<IleMandatow_PollMethod>>>;
  /**  Search for the PollMethod item with the matching ID.  */
  PollMethod?: Maybe<IleMandatow_PollMethod>;
  /**  Perform a meta-query on all PollMethod items which match the where clause.  */
  _allPollMethodsMeta?: Maybe<IleMandatow__QueryMeta>;
  /**  Retrieve the meta-data for the PollMethod list.  */
  _PollMethodsMeta?: Maybe<IleMandatow__ListMeta>;
  /**  Search for all PollResult items which match the where clause.  */
  allPollResults?: Maybe<Array<Maybe<IleMandatow_PollResult>>>;
  /**  Search for the PollResult item with the matching ID.  */
  PollResult?: Maybe<IleMandatow_PollResult>;
  /**  Perform a meta-query on all PollResult items which match the where clause.  */
  _allPollResultsMeta?: Maybe<IleMandatow__QueryMeta>;
  /**  Retrieve the meta-data for the PollResult list.  */
  _PollResultsMeta?: Maybe<IleMandatow__ListMeta>;
  /**  Search for all Publisher items which match the where clause.  */
  allPublishers?: Maybe<Array<Maybe<IleMandatow_Publisher>>>;
  /**  Search for the Publisher item with the matching ID.  */
  Publisher?: Maybe<IleMandatow_Publisher>;
  /**  Perform a meta-query on all Publisher items which match the where clause.  */
  _allPublishersMeta?: Maybe<IleMandatow__QueryMeta>;
  /**  Retrieve the meta-data for the Publisher list.  */
  _PublishersMeta?: Maybe<IleMandatow__ListMeta>;
  /**  Search for all User items which match the where clause.  */
  allUsers?: Maybe<Array<Maybe<IleMandatow_User>>>;
  /**  Search for the User item with the matching ID.  */
  User?: Maybe<IleMandatow_User>;
  /**  Perform a meta-query on all User items which match the where clause.  */
  _allUsersMeta?: Maybe<IleMandatow__QueryMeta>;
  /**  Retrieve the meta-data for the User list.  */
  _UsersMeta?: Maybe<IleMandatow__ListMeta>;
  /**  Retrieve the meta-data for all lists.  */
  _ksListsMeta?: Maybe<Array<Maybe<IleMandatow__ListMeta>>>;
  /** The version of the Keystone application serving this API. */
  appVersion?: Maybe<Scalars['String']>;
  authenticatedUser?: Maybe<IleMandatow_User>;
};


export type IleMandatowAllElectoralCodesArgs = {
  where?: Maybe<IleMandatow_ElectoralCodeWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<IleMandatow_SortElectoralCodesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type IleMandatowElectoralCodeArgs = {
  where: IleMandatow_ElectoralCodeWhereUniqueInput;
};


export type IleMandatow_AllElectoralCodesMetaArgs = {
  where?: Maybe<IleMandatow_ElectoralCodeWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<IleMandatow_SortElectoralCodesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type IleMandatowAllElectoralDistrictsArgs = {
  where?: Maybe<IleMandatow_ElectoralDistrictWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<IleMandatow_SortElectoralDistrictsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type IleMandatowElectoralDistrictArgs = {
  where: IleMandatow_ElectoralDistrictWhereUniqueInput;
};


export type IleMandatow_AllElectoralDistrictsMetaArgs = {
  where?: Maybe<IleMandatow_ElectoralDistrictWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<IleMandatow_SortElectoralDistrictsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type IleMandatowAllPartiesArgs = {
  where?: Maybe<IleMandatow_PartyWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<IleMandatow_SortPartiesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type IleMandatowPartyArgs = {
  where: IleMandatow_PartyWhereUniqueInput;
};


export type IleMandatow_AllPartiesMetaArgs = {
  where?: Maybe<IleMandatow_PartyWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<IleMandatow_SortPartiesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type IleMandatowAllPollsArgs = {
  where?: Maybe<IleMandatow_PollWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<IleMandatow_SortPollsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type IleMandatowPollArgs = {
  where: IleMandatow_PollWhereUniqueInput;
};


export type IleMandatow_AllPollsMetaArgs = {
  where?: Maybe<IleMandatow_PollWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<IleMandatow_SortPollsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type IleMandatowAllPollCompaniesArgs = {
  where?: Maybe<IleMandatow_PollCompanyWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<IleMandatow_SortPollCompaniesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type IleMandatowPollCompanyArgs = {
  where: IleMandatow_PollCompanyWhereUniqueInput;
};


export type IleMandatow_AllPollCompaniesMetaArgs = {
  where?: Maybe<IleMandatow_PollCompanyWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<IleMandatow_SortPollCompaniesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type IleMandatowAllPollMethodsArgs = {
  where?: Maybe<IleMandatow_PollMethodWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<IleMandatow_SortPollMethodsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type IleMandatowPollMethodArgs = {
  where: IleMandatow_PollMethodWhereUniqueInput;
};


export type IleMandatow_AllPollMethodsMetaArgs = {
  where?: Maybe<IleMandatow_PollMethodWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<IleMandatow_SortPollMethodsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type IleMandatowAllPollResultsArgs = {
  where?: Maybe<IleMandatow_PollResultWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<IleMandatow_SortPollResultsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type IleMandatowPollResultArgs = {
  where: IleMandatow_PollResultWhereUniqueInput;
};


export type IleMandatow_AllPollResultsMetaArgs = {
  where?: Maybe<IleMandatow_PollResultWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<IleMandatow_SortPollResultsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type IleMandatowAllPublishersArgs = {
  where?: Maybe<IleMandatow_PublisherWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<IleMandatow_SortPublishersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type IleMandatowPublisherArgs = {
  where: IleMandatow_PublisherWhereUniqueInput;
};


export type IleMandatow_AllPublishersMetaArgs = {
  where?: Maybe<IleMandatow_PublisherWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<IleMandatow_SortPublishersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type IleMandatowAllUsersArgs = {
  where?: Maybe<IleMandatow_UserWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<IleMandatow_SortUsersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type IleMandatowUserArgs = {
  where: IleMandatow_UserWhereUniqueInput;
};


export type IleMandatow_AllUsersMetaArgs = {
  where?: Maybe<IleMandatow_UserWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<IleMandatow_SortUsersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type IleMandatow_KsListsMetaArgs = {
  where?: Maybe<IleMandatow__KsListsMetaInput>;
};

export type IleMandatow__KsListsMetaInput = {
  key?: Maybe<Scalars['String']>;
  /** Whether this is an auxiliary helper list */
  auxiliary?: Maybe<Scalars['Boolean']>;
};

export type IleMandatow__ListAccess = {
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'create' operations.
   * NOTE: 'create' can only return a Boolean.
   * It is not possible to specify a declarative Where clause for this
   * operation
   */
  create?: Maybe<Scalars['Boolean']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'read' operations.
   */
  read?: Maybe<Scalars['IleMandatow_JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'update' operations.
   */
  update?: Maybe<Scalars['IleMandatow_JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'delete' operations.
   */
  delete?: Maybe<Scalars['IleMandatow_JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'auth' operations.
   */
  auth?: Maybe<Scalars['IleMandatow_JSON']>;
};

export type IleMandatow__ListInputTypes = {
  /** Input type for matching multiple items */
  whereInput?: Maybe<Scalars['String']>;
  /** Input type for matching a unique item */
  whereUniqueInput?: Maybe<Scalars['String']>;
  /** Create mutation input type name */
  createInput?: Maybe<Scalars['String']>;
  /** Create many mutation input type name */
  createManyInput?: Maybe<Scalars['String']>;
  /** Update mutation name input */
  updateInput?: Maybe<Scalars['String']>;
  /** Update many mutation name input */
  updateManyInput?: Maybe<Scalars['String']>;
};

export type IleMandatow__ListMeta = {
  /** The Keystone list key */
  key?: Maybe<Scalars['String']>;
  /**
   * The Keystone List name
   * @deprecated Use `key` instead
   */
  name?: Maybe<Scalars['String']>;
  /** The list's user-facing description */
  description?: Maybe<Scalars['String']>;
  /** The list's display name in the Admin UI */
  label?: Maybe<Scalars['String']>;
  /** The list's singular display name */
  singular?: Maybe<Scalars['String']>;
  /** The list's plural display name */
  plural?: Maybe<Scalars['String']>;
  /** The list's data path */
  path?: Maybe<Scalars['String']>;
  /** Access control configuration for the currently authenticated request */
  access?: Maybe<IleMandatow__ListAccess>;
  /** Information on the generated GraphQL schema */
  schema?: Maybe<IleMandatow__ListSchema>;
};

export type IleMandatow__ListMutations = {
  /** Create mutation name */
  create?: Maybe<Scalars['String']>;
  /** Create many mutation name */
  createMany?: Maybe<Scalars['String']>;
  /** Update mutation name */
  update?: Maybe<Scalars['String']>;
  /** Update many mutation name */
  updateMany?: Maybe<Scalars['String']>;
  /** Delete mutation name */
  delete?: Maybe<Scalars['String']>;
  /** Delete many mutation name */
  deleteMany?: Maybe<Scalars['String']>;
};

export type IleMandatow__ListQueries = {
  /** Single-item query name */
  item?: Maybe<Scalars['String']>;
  /** All-items query name */
  list?: Maybe<Scalars['String']>;
  /** List metadata query name */
  meta?: Maybe<Scalars['String']>;
};

export type IleMandatow__ListSchema = {
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars['String']>;
  /**
   * Top level GraphQL query names which either return this type, or
   * provide aggregate information about this type
   */
  queries?: Maybe<IleMandatow__ListQueries>;
  /** Top-level GraphQL mutation names */
  mutations?: Maybe<IleMandatow__ListMutations>;
  /** Top-level GraphQL input types */
  inputTypes?: Maybe<IleMandatow__ListInputTypes>;
  /** Information about fields defined on this list */
  fields?: Maybe<Array<Maybe<IleMandatow__ListSchemaFields>>>;
  /**
   * Information about fields on other types which return this type, or
   * provide aggregate information about this type
   */
  relatedFields?: Maybe<Array<Maybe<IleMandatow__ListSchemaRelatedFields>>>;
};


export type IleMandatow__ListSchemaFieldsArgs = {
  where?: Maybe<IleMandatow__ListSchemaFieldsInput>;
};

export type IleMandatow__ListSchemaFields = {
  /** The path of the field in its list */
  path?: Maybe<Scalars['String']>;
  /**
   * The name of the field in its list
   * @deprecated Use `path` instead
   */
  name?: Maybe<Scalars['String']>;
  /** The field type (ie, Checkbox, Text, etc) */
  type?: Maybe<Scalars['String']>;
};

export type IleMandatow__ListSchemaFieldsInput = {
  type?: Maybe<Scalars['String']>;
};

export type IleMandatow__ListSchemaRelatedFields = {
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars['String']>;
  /** A list of GraphQL field names */
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type IleMandatow__QueryMeta = {
  count?: Maybe<Scalars['Int']>;
};

export type IleMandatow_AuthenticateUserOutput = {
  /**  Used to make subsequent authenticated requests by setting this token in a header: 'Authorization: Bearer <token>'.  */
  token?: Maybe<Scalars['String']>;
  /**  Retrieve information on the newly authenticated User here.  */
  item?: Maybe<IleMandatow_User>;
};

export type IleMandatow_CacheControlScope =
  | 'PUBLIC'
  | 'PRIVATE';


/**  A keystone list  */
export type IleMandatow_ElectoralCode = {
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the ElectoralCode List config, or
   *  2. As an alias to the field set on 'labelField' in the ElectoralCode List config, or
   *  3. As an alias to a 'name' field on the ElectoralCode List (if one exists), or
   *  4. As an alias to the 'id' field on the ElectoralCode List.
   */
  _label_?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  inEffectSince?: Maybe<Scalars['String']>;
  inEffectTo?: Maybe<Scalars['String']>;
  threshold?: Maybe<Scalars['Float']>;
  totalSeats?: Maybe<Scalars['Int']>;
  method?: Maybe<IleMandatow_ElectoralCodeMethodType>;
  districts: Array<IleMandatow_ElectoralDistrict>;
  _districtsMeta?: Maybe<IleMandatow__QueryMeta>;
};


/**  A keystone list  */
export type IleMandatow_ElectoralCodeDistrictsArgs = {
  where?: Maybe<IleMandatow_ElectoralDistrictWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<IleMandatow_SortElectoralDistrictsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type IleMandatow_ElectoralCode_DistrictsMetaArgs = {
  where?: Maybe<IleMandatow_ElectoralDistrictWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<IleMandatow_SortElectoralDistrictsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type IleMandatow_ElectoralCodeCreateInput = {
  inEffectSince?: Maybe<Scalars['String']>;
  inEffectTo?: Maybe<Scalars['String']>;
  threshold?: Maybe<Scalars['Float']>;
  totalSeats?: Maybe<Scalars['Int']>;
  method?: Maybe<IleMandatow_ElectoralCodeMethodType>;
  districts?: Maybe<IleMandatow_ElectoralDistrictRelateToManyInput>;
};

export type IleMandatow_ElectoralCodeMethodType =
  | 'dhondt';

export type IleMandatow_ElectoralCodesCreateInput = {
  data?: Maybe<IleMandatow_ElectoralCodeCreateInput>;
};

export type IleMandatow_ElectoralCodesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<IleMandatow_ElectoralCodeUpdateInput>;
};

export type IleMandatow_ElectoralCodeUpdateInput = {
  inEffectSince?: Maybe<Scalars['String']>;
  inEffectTo?: Maybe<Scalars['String']>;
  threshold?: Maybe<Scalars['Float']>;
  totalSeats?: Maybe<Scalars['Int']>;
  method?: Maybe<IleMandatow_ElectoralCodeMethodType>;
  districts?: Maybe<IleMandatow_ElectoralDistrictRelateToManyInput>;
};

export type IleMandatow_ElectoralCodeWhereInput = {
  AND?: Maybe<Array<Maybe<IleMandatow_ElectoralCodeWhereInput>>>;
  OR?: Maybe<Array<Maybe<IleMandatow_ElectoralCodeWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  inEffectSince?: Maybe<Scalars['String']>;
  inEffectSince_not?: Maybe<Scalars['String']>;
  inEffectSince_lt?: Maybe<Scalars['String']>;
  inEffectSince_lte?: Maybe<Scalars['String']>;
  inEffectSince_gt?: Maybe<Scalars['String']>;
  inEffectSince_gte?: Maybe<Scalars['String']>;
  inEffectSince_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  inEffectSince_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  inEffectTo?: Maybe<Scalars['String']>;
  inEffectTo_not?: Maybe<Scalars['String']>;
  inEffectTo_lt?: Maybe<Scalars['String']>;
  inEffectTo_lte?: Maybe<Scalars['String']>;
  inEffectTo_gt?: Maybe<Scalars['String']>;
  inEffectTo_gte?: Maybe<Scalars['String']>;
  inEffectTo_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  inEffectTo_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  threshold?: Maybe<Scalars['Float']>;
  threshold_not?: Maybe<Scalars['Float']>;
  threshold_lt?: Maybe<Scalars['Float']>;
  threshold_lte?: Maybe<Scalars['Float']>;
  threshold_gt?: Maybe<Scalars['Float']>;
  threshold_gte?: Maybe<Scalars['Float']>;
  threshold_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  threshold_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  totalSeats?: Maybe<Scalars['Int']>;
  totalSeats_not?: Maybe<Scalars['Int']>;
  totalSeats_lt?: Maybe<Scalars['Int']>;
  totalSeats_lte?: Maybe<Scalars['Int']>;
  totalSeats_gt?: Maybe<Scalars['Int']>;
  totalSeats_gte?: Maybe<Scalars['Int']>;
  totalSeats_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  totalSeats_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  method?: Maybe<IleMandatow_ElectoralCodeMethodType>;
  method_not?: Maybe<IleMandatow_ElectoralCodeMethodType>;
  method_in?: Maybe<Array<Maybe<IleMandatow_ElectoralCodeMethodType>>>;
  method_not_in?: Maybe<Array<Maybe<IleMandatow_ElectoralCodeMethodType>>>;
  /**  condition must be true for all nodes  */
  districts_every?: Maybe<IleMandatow_ElectoralDistrictWhereInput>;
  /**  condition must be true for at least 1 node  */
  districts_some?: Maybe<IleMandatow_ElectoralDistrictWhereInput>;
  /**  condition must be false for all nodes  */
  districts_none?: Maybe<IleMandatow_ElectoralDistrictWhereInput>;
};

export type IleMandatow_ElectoralCodeWhereUniqueInput = {
  id: Scalars['ID'];
};

/**  A keystone list  */
export type IleMandatow_ElectoralDistrict = {
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the ElectoralDistrict List config, or
   *  2. As an alias to the field set on 'labelField' in the ElectoralDistrict List config, or
   *  3. As an alias to a 'name' field on the ElectoralDistrict List (if one exists), or
   *  4. As an alias to the 'id' field on the ElectoralDistrict List.
   */
  _label_?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  district?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  totalSeats?: Maybe<Scalars['Int']>;
};

export type IleMandatow_ElectoralDistrictCreateInput = {
  district?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  totalSeats?: Maybe<Scalars['Int']>;
};

export type IleMandatow_ElectoralDistrictRelateToManyInput = {
  create?: Maybe<Array<Maybe<IleMandatow_ElectoralDistrictCreateInput>>>;
  connect?: Maybe<Array<Maybe<IleMandatow_ElectoralDistrictWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<IleMandatow_ElectoralDistrictWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type IleMandatow_ElectoralDistrictsCreateInput = {
  data?: Maybe<IleMandatow_ElectoralDistrictCreateInput>;
};

export type IleMandatow_ElectoralDistrictsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<IleMandatow_ElectoralDistrictUpdateInput>;
};

export type IleMandatow_ElectoralDistrictUpdateInput = {
  district?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  totalSeats?: Maybe<Scalars['Int']>;
};

export type IleMandatow_ElectoralDistrictWhereInput = {
  AND?: Maybe<Array<Maybe<IleMandatow_ElectoralDistrictWhereInput>>>;
  OR?: Maybe<Array<Maybe<IleMandatow_ElectoralDistrictWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  district?: Maybe<Scalars['Int']>;
  district_not?: Maybe<Scalars['Int']>;
  district_lt?: Maybe<Scalars['Int']>;
  district_lte?: Maybe<Scalars['Int']>;
  district_gt?: Maybe<Scalars['Int']>;
  district_gte?: Maybe<Scalars['Int']>;
  district_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  district_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  totalSeats?: Maybe<Scalars['Int']>;
  totalSeats_not?: Maybe<Scalars['Int']>;
  totalSeats_lt?: Maybe<Scalars['Int']>;
  totalSeats_lte?: Maybe<Scalars['Int']>;
  totalSeats_gt?: Maybe<Scalars['Int']>;
  totalSeats_gte?: Maybe<Scalars['Int']>;
  totalSeats_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  totalSeats_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type IleMandatow_ElectoralDistrictWhereUniqueInput = {
  id: Scalars['ID'];
};


export type IleMandatow_PartiesCreateInput = {
  data?: Maybe<IleMandatow_PartyCreateInput>;
};

export type IleMandatow_PartiesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<IleMandatow_PartyUpdateInput>;
};

/**  A keystone list  */
export type IleMandatow_Party = {
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the Party List config, or
   *  2. As an alias to the field set on 'labelField' in the Party List config, or
   *  3. As an alias to a 'name' field on the Party List (if one exists), or
   *  4. As an alias to the 'id' field on the Party List.
   */
  _label_?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  abbr?: Maybe<Scalars['String']>;
  type?: Maybe<IleMandatow_PartyTypeType>;
  color?: Maybe<Scalars['String']>;
  colorDarkTheme?: Maybe<Scalars['String']>;
  parliamentOrder?: Maybe<Scalars['Int']>;
  memberParties: Array<IleMandatow_Party>;
  _memberPartiesMeta?: Maybe<IleMandatow__QueryMeta>;
  slug?: Maybe<Scalars['String']>;
};


/**  A keystone list  */
export type IleMandatow_PartyMemberPartiesArgs = {
  where?: Maybe<IleMandatow_PartyWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<IleMandatow_SortPartiesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type IleMandatow_Party_MemberPartiesMetaArgs = {
  where?: Maybe<IleMandatow_PartyWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<IleMandatow_SortPartiesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type IleMandatow_PartyCreateInput = {
  name?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  abbr?: Maybe<Scalars['String']>;
  type?: Maybe<IleMandatow_PartyTypeType>;
  color?: Maybe<Scalars['String']>;
  colorDarkTheme?: Maybe<Scalars['String']>;
  parliamentOrder?: Maybe<Scalars['Int']>;
  memberParties?: Maybe<IleMandatow_PartyRelateToManyInput>;
  slug?: Maybe<Scalars['String']>;
};

export type IleMandatow_PartyRelateToManyInput = {
  create?: Maybe<Array<Maybe<IleMandatow_PartyCreateInput>>>;
  connect?: Maybe<Array<Maybe<IleMandatow_PartyWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<IleMandatow_PartyWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type IleMandatow_PartyRelateToOneInput = {
  create?: Maybe<IleMandatow_PartyCreateInput>;
  connect?: Maybe<IleMandatow_PartyWhereUniqueInput>;
  disconnect?: Maybe<IleMandatow_PartyWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type IleMandatow_PartyTypeType =
  | 'regular'
  | 'undecided_voters'
  | 'other_party_voters';

export type IleMandatow_PartyUpdateInput = {
  name?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  abbr?: Maybe<Scalars['String']>;
  type?: Maybe<IleMandatow_PartyTypeType>;
  color?: Maybe<Scalars['String']>;
  colorDarkTheme?: Maybe<Scalars['String']>;
  parliamentOrder?: Maybe<Scalars['Int']>;
  memberParties?: Maybe<IleMandatow_PartyRelateToManyInput>;
  slug?: Maybe<Scalars['String']>;
};

export type IleMandatow_PartyWhereInput = {
  AND?: Maybe<Array<Maybe<IleMandatow_PartyWhereInput>>>;
  OR?: Maybe<Array<Maybe<IleMandatow_PartyWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fullName?: Maybe<Scalars['String']>;
  fullName_not?: Maybe<Scalars['String']>;
  fullName_contains?: Maybe<Scalars['String']>;
  fullName_not_contains?: Maybe<Scalars['String']>;
  fullName_starts_with?: Maybe<Scalars['String']>;
  fullName_not_starts_with?: Maybe<Scalars['String']>;
  fullName_ends_with?: Maybe<Scalars['String']>;
  fullName_not_ends_with?: Maybe<Scalars['String']>;
  fullName_i?: Maybe<Scalars['String']>;
  fullName_not_i?: Maybe<Scalars['String']>;
  fullName_contains_i?: Maybe<Scalars['String']>;
  fullName_not_contains_i?: Maybe<Scalars['String']>;
  fullName_starts_with_i?: Maybe<Scalars['String']>;
  fullName_not_starts_with_i?: Maybe<Scalars['String']>;
  fullName_ends_with_i?: Maybe<Scalars['String']>;
  fullName_not_ends_with_i?: Maybe<Scalars['String']>;
  fullName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fullName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  abbr?: Maybe<Scalars['String']>;
  abbr_not?: Maybe<Scalars['String']>;
  abbr_contains?: Maybe<Scalars['String']>;
  abbr_not_contains?: Maybe<Scalars['String']>;
  abbr_starts_with?: Maybe<Scalars['String']>;
  abbr_not_starts_with?: Maybe<Scalars['String']>;
  abbr_ends_with?: Maybe<Scalars['String']>;
  abbr_not_ends_with?: Maybe<Scalars['String']>;
  abbr_i?: Maybe<Scalars['String']>;
  abbr_not_i?: Maybe<Scalars['String']>;
  abbr_contains_i?: Maybe<Scalars['String']>;
  abbr_not_contains_i?: Maybe<Scalars['String']>;
  abbr_starts_with_i?: Maybe<Scalars['String']>;
  abbr_not_starts_with_i?: Maybe<Scalars['String']>;
  abbr_ends_with_i?: Maybe<Scalars['String']>;
  abbr_not_ends_with_i?: Maybe<Scalars['String']>;
  abbr_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  abbr_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<IleMandatow_PartyTypeType>;
  type_not?: Maybe<IleMandatow_PartyTypeType>;
  type_in?: Maybe<Array<Maybe<IleMandatow_PartyTypeType>>>;
  type_not_in?: Maybe<Array<Maybe<IleMandatow_PartyTypeType>>>;
  color?: Maybe<Scalars['String']>;
  color_not?: Maybe<Scalars['String']>;
  color_contains?: Maybe<Scalars['String']>;
  color_not_contains?: Maybe<Scalars['String']>;
  color_starts_with?: Maybe<Scalars['String']>;
  color_not_starts_with?: Maybe<Scalars['String']>;
  color_ends_with?: Maybe<Scalars['String']>;
  color_not_ends_with?: Maybe<Scalars['String']>;
  color_i?: Maybe<Scalars['String']>;
  color_not_i?: Maybe<Scalars['String']>;
  color_contains_i?: Maybe<Scalars['String']>;
  color_not_contains_i?: Maybe<Scalars['String']>;
  color_starts_with_i?: Maybe<Scalars['String']>;
  color_not_starts_with_i?: Maybe<Scalars['String']>;
  color_ends_with_i?: Maybe<Scalars['String']>;
  color_not_ends_with_i?: Maybe<Scalars['String']>;
  color_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  color_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  colorDarkTheme?: Maybe<Scalars['String']>;
  colorDarkTheme_not?: Maybe<Scalars['String']>;
  colorDarkTheme_contains?: Maybe<Scalars['String']>;
  colorDarkTheme_not_contains?: Maybe<Scalars['String']>;
  colorDarkTheme_starts_with?: Maybe<Scalars['String']>;
  colorDarkTheme_not_starts_with?: Maybe<Scalars['String']>;
  colorDarkTheme_ends_with?: Maybe<Scalars['String']>;
  colorDarkTheme_not_ends_with?: Maybe<Scalars['String']>;
  colorDarkTheme_i?: Maybe<Scalars['String']>;
  colorDarkTheme_not_i?: Maybe<Scalars['String']>;
  colorDarkTheme_contains_i?: Maybe<Scalars['String']>;
  colorDarkTheme_not_contains_i?: Maybe<Scalars['String']>;
  colorDarkTheme_starts_with_i?: Maybe<Scalars['String']>;
  colorDarkTheme_not_starts_with_i?: Maybe<Scalars['String']>;
  colorDarkTheme_ends_with_i?: Maybe<Scalars['String']>;
  colorDarkTheme_not_ends_with_i?: Maybe<Scalars['String']>;
  colorDarkTheme_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  colorDarkTheme_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  parliamentOrder?: Maybe<Scalars['Int']>;
  parliamentOrder_not?: Maybe<Scalars['Int']>;
  parliamentOrder_lt?: Maybe<Scalars['Int']>;
  parliamentOrder_lte?: Maybe<Scalars['Int']>;
  parliamentOrder_gt?: Maybe<Scalars['Int']>;
  parliamentOrder_gte?: Maybe<Scalars['Int']>;
  parliamentOrder_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  parliamentOrder_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /**  condition must be true for all nodes  */
  memberParties_every?: Maybe<IleMandatow_PartyWhereInput>;
  /**  condition must be true for at least 1 node  */
  memberParties_some?: Maybe<IleMandatow_PartyWhereInput>;
  /**  condition must be false for all nodes  */
  memberParties_none?: Maybe<IleMandatow_PartyWhereInput>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  slug_starts_with?: Maybe<Scalars['String']>;
  slug_not_starts_with?: Maybe<Scalars['String']>;
  slug_ends_with?: Maybe<Scalars['String']>;
  slug_not_ends_with?: Maybe<Scalars['String']>;
  slug_i?: Maybe<Scalars['String']>;
  slug_not_i?: Maybe<Scalars['String']>;
  slug_contains_i?: Maybe<Scalars['String']>;
  slug_not_contains_i?: Maybe<Scalars['String']>;
  slug_starts_with_i?: Maybe<Scalars['String']>;
  slug_not_starts_with_i?: Maybe<Scalars['String']>;
  slug_ends_with_i?: Maybe<Scalars['String']>;
  slug_not_ends_with_i?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type IleMandatow_PartyWhereUniqueInput = {
  id: Scalars['ID'];
};

/**  A keystone list  */
export type IleMandatow_Poll = {
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the Poll List config, or
   *  2. As an alias to the field set on 'labelField' in the Poll List config, or
   *  3. As an alias to a 'name' field on the Poll List (if one exists), or
   *  4. As an alias to the 'id' field on the Poll List.
   */
  _label_?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  source?: Maybe<Scalars['String']>;
  publishedBy: Array<IleMandatow_Publisher>;
  _publishedByMeta?: Maybe<IleMandatow__QueryMeta>;
  polledBy: Array<IleMandatow_PollCompany>;
  _polledByMeta?: Maybe<IleMandatow__QueryMeta>;
  publishedAt?: Maybe<Scalars['IleMandatow_DateTime']>;
  method?: Maybe<IleMandatow_PollMethod>;
  results: Array<IleMandatow_PollResult>;
  _resultsMeta?: Maybe<IleMandatow__QueryMeta>;
  participantsCount?: Maybe<Scalars['Int']>;
  participantsWillVote?: Maybe<Scalars['Float']>;
  participantsMightVote?: Maybe<Scalars['Float']>;
  participantsUndecided?: Maybe<Scalars['Float']>;
  participantsMightNotVote?: Maybe<Scalars['Float']>;
  participantsWillNotVote?: Maybe<Scalars['Float']>;
  pollStartedAt?: Maybe<Scalars['String']>;
  pollEndedAt?: Maybe<Scalars['String']>;
  errorMargin?: Maybe<Scalars['Float']>;
  slug?: Maybe<Scalars['String']>;
};


/**  A keystone list  */
export type IleMandatow_PollPublishedByArgs = {
  where?: Maybe<IleMandatow_PublisherWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<IleMandatow_SortPublishersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type IleMandatow_Poll_PublishedByMetaArgs = {
  where?: Maybe<IleMandatow_PublisherWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<IleMandatow_SortPublishersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type IleMandatow_PollPolledByArgs = {
  where?: Maybe<IleMandatow_PollCompanyWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<IleMandatow_SortPollCompaniesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type IleMandatow_Poll_PolledByMetaArgs = {
  where?: Maybe<IleMandatow_PollCompanyWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<IleMandatow_SortPollCompaniesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type IleMandatow_PollResultsArgs = {
  where?: Maybe<IleMandatow_PollResultWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<IleMandatow_SortPollResultsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type IleMandatow_Poll_ResultsMetaArgs = {
  where?: Maybe<IleMandatow_PollResultWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<IleMandatow_SortPollResultsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type IleMandatow_PollCompaniesCreateInput = {
  data?: Maybe<IleMandatow_PollCompanyCreateInput>;
};

export type IleMandatow_PollCompaniesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<IleMandatow_PollCompanyUpdateInput>;
};

/**  A keystone list  */
export type IleMandatow_PollCompany = {
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the PollCompany List config, or
   *  2. As an alias to the field set on 'labelField' in the PollCompany List config, or
   *  3. As an alias to a 'name' field on the PollCompany List (if one exists), or
   *  4. As an alias to the 'id' field on the PollCompany List.
   */
  _label_?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  abbr?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type IleMandatow_PollCompanyCreateInput = {
  name?: Maybe<Scalars['String']>;
  abbr?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type IleMandatow_PollCompanyRelateToManyInput = {
  create?: Maybe<Array<Maybe<IleMandatow_PollCompanyCreateInput>>>;
  connect?: Maybe<Array<Maybe<IleMandatow_PollCompanyWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<IleMandatow_PollCompanyWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type IleMandatow_PollCompanyUpdateInput = {
  name?: Maybe<Scalars['String']>;
  abbr?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type IleMandatow_PollCompanyWhereInput = {
  AND?: Maybe<Array<Maybe<IleMandatow_PollCompanyWhereInput>>>;
  OR?: Maybe<Array<Maybe<IleMandatow_PollCompanyWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  abbr?: Maybe<Scalars['String']>;
  abbr_not?: Maybe<Scalars['String']>;
  abbr_contains?: Maybe<Scalars['String']>;
  abbr_not_contains?: Maybe<Scalars['String']>;
  abbr_starts_with?: Maybe<Scalars['String']>;
  abbr_not_starts_with?: Maybe<Scalars['String']>;
  abbr_ends_with?: Maybe<Scalars['String']>;
  abbr_not_ends_with?: Maybe<Scalars['String']>;
  abbr_i?: Maybe<Scalars['String']>;
  abbr_not_i?: Maybe<Scalars['String']>;
  abbr_contains_i?: Maybe<Scalars['String']>;
  abbr_not_contains_i?: Maybe<Scalars['String']>;
  abbr_starts_with_i?: Maybe<Scalars['String']>;
  abbr_not_starts_with_i?: Maybe<Scalars['String']>;
  abbr_ends_with_i?: Maybe<Scalars['String']>;
  abbr_not_ends_with_i?: Maybe<Scalars['String']>;
  abbr_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  abbr_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  slug_starts_with?: Maybe<Scalars['String']>;
  slug_not_starts_with?: Maybe<Scalars['String']>;
  slug_ends_with?: Maybe<Scalars['String']>;
  slug_not_ends_with?: Maybe<Scalars['String']>;
  slug_i?: Maybe<Scalars['String']>;
  slug_not_i?: Maybe<Scalars['String']>;
  slug_contains_i?: Maybe<Scalars['String']>;
  slug_not_contains_i?: Maybe<Scalars['String']>;
  slug_starts_with_i?: Maybe<Scalars['String']>;
  slug_not_starts_with_i?: Maybe<Scalars['String']>;
  slug_ends_with_i?: Maybe<Scalars['String']>;
  slug_not_ends_with_i?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type IleMandatow_PollCompanyWhereUniqueInput = {
  id: Scalars['ID'];
};

export type IleMandatow_PollCreateInput = {
  source?: Maybe<Scalars['String']>;
  publishedBy?: Maybe<IleMandatow_PublisherRelateToManyInput>;
  polledBy?: Maybe<IleMandatow_PollCompanyRelateToManyInput>;
  publishedAt?: Maybe<Scalars['IleMandatow_DateTime']>;
  method?: Maybe<IleMandatow_PollMethodRelateToOneInput>;
  results?: Maybe<IleMandatow_PollResultRelateToManyInput>;
  participantsCount?: Maybe<Scalars['Int']>;
  participantsWillVote?: Maybe<Scalars['Float']>;
  participantsMightVote?: Maybe<Scalars['Float']>;
  participantsUndecided?: Maybe<Scalars['Float']>;
  participantsMightNotVote?: Maybe<Scalars['Float']>;
  participantsWillNotVote?: Maybe<Scalars['Float']>;
  pollStartedAt?: Maybe<Scalars['String']>;
  pollEndedAt?: Maybe<Scalars['String']>;
  errorMargin?: Maybe<Scalars['Float']>;
  slug?: Maybe<Scalars['String']>;
};

/**  A keystone list  */
export type IleMandatow_PollMethod = {
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the PollMethod List config, or
   *  2. As an alias to the field set on 'labelField' in the PollMethod List config, or
   *  3. As an alias to a 'name' field on the PollMethod List (if one exists), or
   *  4. As an alias to the 'id' field on the PollMethod List.
   */
  _label_?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type IleMandatow_PollMethodCreateInput = {
  name?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type IleMandatow_PollMethodRelateToOneInput = {
  create?: Maybe<IleMandatow_PollMethodCreateInput>;
  connect?: Maybe<IleMandatow_PollMethodWhereUniqueInput>;
  disconnect?: Maybe<IleMandatow_PollMethodWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type IleMandatow_PollMethodsCreateInput = {
  data?: Maybe<IleMandatow_PollMethodCreateInput>;
};

export type IleMandatow_PollMethodsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<IleMandatow_PollMethodUpdateInput>;
};

export type IleMandatow_PollMethodUpdateInput = {
  name?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type IleMandatow_PollMethodWhereInput = {
  AND?: Maybe<Array<Maybe<IleMandatow_PollMethodWhereInput>>>;
  OR?: Maybe<Array<Maybe<IleMandatow_PollMethodWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fullName?: Maybe<Scalars['String']>;
  fullName_not?: Maybe<Scalars['String']>;
  fullName_contains?: Maybe<Scalars['String']>;
  fullName_not_contains?: Maybe<Scalars['String']>;
  fullName_starts_with?: Maybe<Scalars['String']>;
  fullName_not_starts_with?: Maybe<Scalars['String']>;
  fullName_ends_with?: Maybe<Scalars['String']>;
  fullName_not_ends_with?: Maybe<Scalars['String']>;
  fullName_i?: Maybe<Scalars['String']>;
  fullName_not_i?: Maybe<Scalars['String']>;
  fullName_contains_i?: Maybe<Scalars['String']>;
  fullName_not_contains_i?: Maybe<Scalars['String']>;
  fullName_starts_with_i?: Maybe<Scalars['String']>;
  fullName_not_starts_with_i?: Maybe<Scalars['String']>;
  fullName_ends_with_i?: Maybe<Scalars['String']>;
  fullName_not_ends_with_i?: Maybe<Scalars['String']>;
  fullName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fullName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  slug_starts_with?: Maybe<Scalars['String']>;
  slug_not_starts_with?: Maybe<Scalars['String']>;
  slug_ends_with?: Maybe<Scalars['String']>;
  slug_not_ends_with?: Maybe<Scalars['String']>;
  slug_i?: Maybe<Scalars['String']>;
  slug_not_i?: Maybe<Scalars['String']>;
  slug_contains_i?: Maybe<Scalars['String']>;
  slug_not_contains_i?: Maybe<Scalars['String']>;
  slug_starts_with_i?: Maybe<Scalars['String']>;
  slug_not_starts_with_i?: Maybe<Scalars['String']>;
  slug_ends_with_i?: Maybe<Scalars['String']>;
  slug_not_ends_with_i?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type IleMandatow_PollMethodWhereUniqueInput = {
  id: Scalars['ID'];
};

/**  A keystone list  */
export type IleMandatow_PollResult = {
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the PollResult List config, or
   *  2. As an alias to the field set on 'labelField' in the PollResult List config, or
   *  3. As an alias to a 'name' field on the PollResult List (if one exists), or
   *  4. As an alias to the 'id' field on the PollResult List.
   */
  _label_?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  result?: Maybe<Scalars['Float']>;
  party?: Maybe<IleMandatow_Party>;
};

export type IleMandatow_PollResultCreateInput = {
  result?: Maybe<Scalars['Float']>;
  party?: Maybe<IleMandatow_PartyRelateToOneInput>;
};

export type IleMandatow_PollResultRelateToManyInput = {
  create?: Maybe<Array<Maybe<IleMandatow_PollResultCreateInput>>>;
  connect?: Maybe<Array<Maybe<IleMandatow_PollResultWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<IleMandatow_PollResultWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type IleMandatow_PollResultsCreateInput = {
  data?: Maybe<IleMandatow_PollResultCreateInput>;
};

export type IleMandatow_PollResultsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<IleMandatow_PollResultUpdateInput>;
};

export type IleMandatow_PollResultUpdateInput = {
  result?: Maybe<Scalars['Float']>;
  party?: Maybe<IleMandatow_PartyRelateToOneInput>;
};

export type IleMandatow_PollResultWhereInput = {
  AND?: Maybe<Array<Maybe<IleMandatow_PollResultWhereInput>>>;
  OR?: Maybe<Array<Maybe<IleMandatow_PollResultWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  result?: Maybe<Scalars['Float']>;
  result_not?: Maybe<Scalars['Float']>;
  result_lt?: Maybe<Scalars['Float']>;
  result_lte?: Maybe<Scalars['Float']>;
  result_gt?: Maybe<Scalars['Float']>;
  result_gte?: Maybe<Scalars['Float']>;
  result_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  result_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  party?: Maybe<IleMandatow_PartyWhereInput>;
  party_is_null?: Maybe<Scalars['Boolean']>;
};

export type IleMandatow_PollResultWhereUniqueInput = {
  id: Scalars['ID'];
};

export type IleMandatow_PollsCreateInput = {
  data?: Maybe<IleMandatow_PollCreateInput>;
};

export type IleMandatow_PollsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<IleMandatow_PollUpdateInput>;
};

export type IleMandatow_PollUpdateInput = {
  source?: Maybe<Scalars['String']>;
  publishedBy?: Maybe<IleMandatow_PublisherRelateToManyInput>;
  polledBy?: Maybe<IleMandatow_PollCompanyRelateToManyInput>;
  publishedAt?: Maybe<Scalars['IleMandatow_DateTime']>;
  method?: Maybe<IleMandatow_PollMethodRelateToOneInput>;
  results?: Maybe<IleMandatow_PollResultRelateToManyInput>;
  participantsCount?: Maybe<Scalars['Int']>;
  participantsWillVote?: Maybe<Scalars['Float']>;
  participantsMightVote?: Maybe<Scalars['Float']>;
  participantsUndecided?: Maybe<Scalars['Float']>;
  participantsMightNotVote?: Maybe<Scalars['Float']>;
  participantsWillNotVote?: Maybe<Scalars['Float']>;
  pollStartedAt?: Maybe<Scalars['String']>;
  pollEndedAt?: Maybe<Scalars['String']>;
  errorMargin?: Maybe<Scalars['Float']>;
  slug?: Maybe<Scalars['String']>;
};

export type IleMandatow_PollWhereInput = {
  AND?: Maybe<Array<Maybe<IleMandatow_PollWhereInput>>>;
  OR?: Maybe<Array<Maybe<IleMandatow_PollWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  source?: Maybe<Scalars['String']>;
  source_not?: Maybe<Scalars['String']>;
  source_contains?: Maybe<Scalars['String']>;
  source_not_contains?: Maybe<Scalars['String']>;
  source_starts_with?: Maybe<Scalars['String']>;
  source_not_starts_with?: Maybe<Scalars['String']>;
  source_ends_with?: Maybe<Scalars['String']>;
  source_not_ends_with?: Maybe<Scalars['String']>;
  source_i?: Maybe<Scalars['String']>;
  source_not_i?: Maybe<Scalars['String']>;
  source_contains_i?: Maybe<Scalars['String']>;
  source_not_contains_i?: Maybe<Scalars['String']>;
  source_starts_with_i?: Maybe<Scalars['String']>;
  source_not_starts_with_i?: Maybe<Scalars['String']>;
  source_ends_with_i?: Maybe<Scalars['String']>;
  source_not_ends_with_i?: Maybe<Scalars['String']>;
  source_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  source_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**  condition must be true for all nodes  */
  publishedBy_every?: Maybe<IleMandatow_PublisherWhereInput>;
  /**  condition must be true for at least 1 node  */
  publishedBy_some?: Maybe<IleMandatow_PublisherWhereInput>;
  /**  condition must be false for all nodes  */
  publishedBy_none?: Maybe<IleMandatow_PublisherWhereInput>;
  /**  condition must be true for all nodes  */
  polledBy_every?: Maybe<IleMandatow_PollCompanyWhereInput>;
  /**  condition must be true for at least 1 node  */
  polledBy_some?: Maybe<IleMandatow_PollCompanyWhereInput>;
  /**  condition must be false for all nodes  */
  polledBy_none?: Maybe<IleMandatow_PollCompanyWhereInput>;
  publishedAt?: Maybe<Scalars['IleMandatow_DateTime']>;
  publishedAt_not?: Maybe<Scalars['IleMandatow_DateTime']>;
  publishedAt_lt?: Maybe<Scalars['IleMandatow_DateTime']>;
  publishedAt_lte?: Maybe<Scalars['IleMandatow_DateTime']>;
  publishedAt_gt?: Maybe<Scalars['IleMandatow_DateTime']>;
  publishedAt_gte?: Maybe<Scalars['IleMandatow_DateTime']>;
  publishedAt_in?: Maybe<Array<Maybe<Scalars['IleMandatow_DateTime']>>>;
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['IleMandatow_DateTime']>>>;
  method?: Maybe<IleMandatow_PollMethodWhereInput>;
  method_is_null?: Maybe<Scalars['Boolean']>;
  /**  condition must be true for all nodes  */
  results_every?: Maybe<IleMandatow_PollResultWhereInput>;
  /**  condition must be true for at least 1 node  */
  results_some?: Maybe<IleMandatow_PollResultWhereInput>;
  /**  condition must be false for all nodes  */
  results_none?: Maybe<IleMandatow_PollResultWhereInput>;
  participantsCount?: Maybe<Scalars['Int']>;
  participantsCount_not?: Maybe<Scalars['Int']>;
  participantsCount_lt?: Maybe<Scalars['Int']>;
  participantsCount_lte?: Maybe<Scalars['Int']>;
  participantsCount_gt?: Maybe<Scalars['Int']>;
  participantsCount_gte?: Maybe<Scalars['Int']>;
  participantsCount_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  participantsCount_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  participantsWillVote?: Maybe<Scalars['Float']>;
  participantsWillVote_not?: Maybe<Scalars['Float']>;
  participantsWillVote_lt?: Maybe<Scalars['Float']>;
  participantsWillVote_lte?: Maybe<Scalars['Float']>;
  participantsWillVote_gt?: Maybe<Scalars['Float']>;
  participantsWillVote_gte?: Maybe<Scalars['Float']>;
  participantsWillVote_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  participantsWillVote_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  participantsMightVote?: Maybe<Scalars['Float']>;
  participantsMightVote_not?: Maybe<Scalars['Float']>;
  participantsMightVote_lt?: Maybe<Scalars['Float']>;
  participantsMightVote_lte?: Maybe<Scalars['Float']>;
  participantsMightVote_gt?: Maybe<Scalars['Float']>;
  participantsMightVote_gte?: Maybe<Scalars['Float']>;
  participantsMightVote_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  participantsMightVote_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  participantsUndecided?: Maybe<Scalars['Float']>;
  participantsUndecided_not?: Maybe<Scalars['Float']>;
  participantsUndecided_lt?: Maybe<Scalars['Float']>;
  participantsUndecided_lte?: Maybe<Scalars['Float']>;
  participantsUndecided_gt?: Maybe<Scalars['Float']>;
  participantsUndecided_gte?: Maybe<Scalars['Float']>;
  participantsUndecided_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  participantsUndecided_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  participantsMightNotVote?: Maybe<Scalars['Float']>;
  participantsMightNotVote_not?: Maybe<Scalars['Float']>;
  participantsMightNotVote_lt?: Maybe<Scalars['Float']>;
  participantsMightNotVote_lte?: Maybe<Scalars['Float']>;
  participantsMightNotVote_gt?: Maybe<Scalars['Float']>;
  participantsMightNotVote_gte?: Maybe<Scalars['Float']>;
  participantsMightNotVote_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  participantsMightNotVote_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  participantsWillNotVote?: Maybe<Scalars['Float']>;
  participantsWillNotVote_not?: Maybe<Scalars['Float']>;
  participantsWillNotVote_lt?: Maybe<Scalars['Float']>;
  participantsWillNotVote_lte?: Maybe<Scalars['Float']>;
  participantsWillNotVote_gt?: Maybe<Scalars['Float']>;
  participantsWillNotVote_gte?: Maybe<Scalars['Float']>;
  participantsWillNotVote_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  participantsWillNotVote_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  pollStartedAt?: Maybe<Scalars['String']>;
  pollStartedAt_not?: Maybe<Scalars['String']>;
  pollStartedAt_lt?: Maybe<Scalars['String']>;
  pollStartedAt_lte?: Maybe<Scalars['String']>;
  pollStartedAt_gt?: Maybe<Scalars['String']>;
  pollStartedAt_gte?: Maybe<Scalars['String']>;
  pollStartedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  pollStartedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  pollEndedAt?: Maybe<Scalars['String']>;
  pollEndedAt_not?: Maybe<Scalars['String']>;
  pollEndedAt_lt?: Maybe<Scalars['String']>;
  pollEndedAt_lte?: Maybe<Scalars['String']>;
  pollEndedAt_gt?: Maybe<Scalars['String']>;
  pollEndedAt_gte?: Maybe<Scalars['String']>;
  pollEndedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  pollEndedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  errorMargin?: Maybe<Scalars['Float']>;
  errorMargin_not?: Maybe<Scalars['Float']>;
  errorMargin_lt?: Maybe<Scalars['Float']>;
  errorMargin_lte?: Maybe<Scalars['Float']>;
  errorMargin_gt?: Maybe<Scalars['Float']>;
  errorMargin_gte?: Maybe<Scalars['Float']>;
  errorMargin_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  errorMargin_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  slug_starts_with?: Maybe<Scalars['String']>;
  slug_not_starts_with?: Maybe<Scalars['String']>;
  slug_ends_with?: Maybe<Scalars['String']>;
  slug_not_ends_with?: Maybe<Scalars['String']>;
  slug_i?: Maybe<Scalars['String']>;
  slug_not_i?: Maybe<Scalars['String']>;
  slug_contains_i?: Maybe<Scalars['String']>;
  slug_not_contains_i?: Maybe<Scalars['String']>;
  slug_starts_with_i?: Maybe<Scalars['String']>;
  slug_not_starts_with_i?: Maybe<Scalars['String']>;
  slug_ends_with_i?: Maybe<Scalars['String']>;
  slug_not_ends_with_i?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type IleMandatow_PollWhereUniqueInput = {
  id: Scalars['ID'];
};

/**  A keystone list  */
export type IleMandatow_Publisher = {
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the Publisher List config, or
   *  2. As an alias to the field set on 'labelField' in the Publisher List config, or
   *  3. As an alias to a 'name' field on the Publisher List (if one exists), or
   *  4. As an alias to the 'id' field on the Publisher List.
   */
  _label_?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  abbr?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type IleMandatow_PublisherCreateInput = {
  name?: Maybe<Scalars['String']>;
  abbr?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type IleMandatow_PublisherRelateToManyInput = {
  create?: Maybe<Array<Maybe<IleMandatow_PublisherCreateInput>>>;
  connect?: Maybe<Array<Maybe<IleMandatow_PublisherWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<IleMandatow_PublisherWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type IleMandatow_PublishersCreateInput = {
  data?: Maybe<IleMandatow_PublisherCreateInput>;
};

export type IleMandatow_PublishersUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<IleMandatow_PublisherUpdateInput>;
};

export type IleMandatow_PublisherUpdateInput = {
  name?: Maybe<Scalars['String']>;
  abbr?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type IleMandatow_PublisherWhereInput = {
  AND?: Maybe<Array<Maybe<IleMandatow_PublisherWhereInput>>>;
  OR?: Maybe<Array<Maybe<IleMandatow_PublisherWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  abbr?: Maybe<Scalars['String']>;
  abbr_not?: Maybe<Scalars['String']>;
  abbr_contains?: Maybe<Scalars['String']>;
  abbr_not_contains?: Maybe<Scalars['String']>;
  abbr_starts_with?: Maybe<Scalars['String']>;
  abbr_not_starts_with?: Maybe<Scalars['String']>;
  abbr_ends_with?: Maybe<Scalars['String']>;
  abbr_not_ends_with?: Maybe<Scalars['String']>;
  abbr_i?: Maybe<Scalars['String']>;
  abbr_not_i?: Maybe<Scalars['String']>;
  abbr_contains_i?: Maybe<Scalars['String']>;
  abbr_not_contains_i?: Maybe<Scalars['String']>;
  abbr_starts_with_i?: Maybe<Scalars['String']>;
  abbr_not_starts_with_i?: Maybe<Scalars['String']>;
  abbr_ends_with_i?: Maybe<Scalars['String']>;
  abbr_not_ends_with_i?: Maybe<Scalars['String']>;
  abbr_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  abbr_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  slug_starts_with?: Maybe<Scalars['String']>;
  slug_not_starts_with?: Maybe<Scalars['String']>;
  slug_ends_with?: Maybe<Scalars['String']>;
  slug_not_ends_with?: Maybe<Scalars['String']>;
  slug_i?: Maybe<Scalars['String']>;
  slug_not_i?: Maybe<Scalars['String']>;
  slug_contains_i?: Maybe<Scalars['String']>;
  slug_not_contains_i?: Maybe<Scalars['String']>;
  slug_starts_with_i?: Maybe<Scalars['String']>;
  slug_not_starts_with_i?: Maybe<Scalars['String']>;
  slug_ends_with_i?: Maybe<Scalars['String']>;
  slug_not_ends_with_i?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type IleMandatow_PublisherWhereUniqueInput = {
  id: Scalars['ID'];
};

export type IleMandatow_SortElectoralCodesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'inEffectSince_ASC'
  | 'inEffectSince_DESC'
  | 'inEffectTo_ASC'
  | 'inEffectTo_DESC'
  | 'threshold_ASC'
  | 'threshold_DESC'
  | 'totalSeats_ASC'
  | 'totalSeats_DESC'
  | 'method_ASC'
  | 'method_DESC'
  | 'districts_ASC'
  | 'districts_DESC';

export type IleMandatow_SortElectoralDistrictsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'district_ASC'
  | 'district_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'totalSeats_ASC'
  | 'totalSeats_DESC';

export type IleMandatow_SortPartiesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'fullName_ASC'
  | 'fullName_DESC'
  | 'abbr_ASC'
  | 'abbr_DESC'
  | 'type_ASC'
  | 'type_DESC'
  | 'color_ASC'
  | 'color_DESC'
  | 'colorDarkTheme_ASC'
  | 'colorDarkTheme_DESC'
  | 'parliamentOrder_ASC'
  | 'parliamentOrder_DESC'
  | 'memberParties_ASC'
  | 'memberParties_DESC'
  | 'slug_ASC'
  | 'slug_DESC';

export type IleMandatow_SortPollCompaniesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'abbr_ASC'
  | 'abbr_DESC'
  | 'slug_ASC'
  | 'slug_DESC';

export type IleMandatow_SortPollMethodsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'fullName_ASC'
  | 'fullName_DESC'
  | 'slug_ASC'
  | 'slug_DESC';

export type IleMandatow_SortPollResultsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'result_ASC'
  | 'result_DESC'
  | 'party_ASC'
  | 'party_DESC';

export type IleMandatow_SortPollsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'source_ASC'
  | 'source_DESC'
  | 'publishedBy_ASC'
  | 'publishedBy_DESC'
  | 'polledBy_ASC'
  | 'polledBy_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'method_ASC'
  | 'method_DESC'
  | 'results_ASC'
  | 'results_DESC'
  | 'participantsCount_ASC'
  | 'participantsCount_DESC'
  | 'participantsWillVote_ASC'
  | 'participantsWillVote_DESC'
  | 'participantsMightVote_ASC'
  | 'participantsMightVote_DESC'
  | 'participantsUndecided_ASC'
  | 'participantsUndecided_DESC'
  | 'participantsMightNotVote_ASC'
  | 'participantsMightNotVote_DESC'
  | 'participantsWillNotVote_ASC'
  | 'participantsWillNotVote_DESC'
  | 'pollStartedAt_ASC'
  | 'pollStartedAt_DESC'
  | 'pollEndedAt_ASC'
  | 'pollEndedAt_DESC'
  | 'errorMargin_ASC'
  | 'errorMargin_DESC'
  | 'slug_ASC'
  | 'slug_DESC';

export type IleMandatow_SortPublishersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'abbr_ASC'
  | 'abbr_DESC'
  | 'slug_ASC'
  | 'slug_DESC';

export type IleMandatow_SortUsersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'username_ASC'
  | 'username_DESC'
  | 'role_ASC'
  | 'role_DESC';

export type IleMandatow_UnauthenticateUserOutput = {
  /**
   * `true` when unauthentication succeeds.
   * NOTE: unauthentication always succeeds when the request has an invalid or missing authentication token.
   */
  success?: Maybe<Scalars['Boolean']>;
};


/**  A keystone list  */
export type IleMandatow_User = {
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the User List config, or
   *  2. As an alias to the field set on 'labelField' in the User List config, or
   *  3. As an alias to a 'name' field on the User List (if one exists), or
   *  4. As an alias to the 'id' field on the User List.
   */
  _label_?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  password_is_set?: Maybe<Scalars['Boolean']>;
  role?: Maybe<IleMandatow_UserRoleType>;
};

export type IleMandatow_UserCreateInput = {
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<IleMandatow_UserRoleType>;
};

export type IleMandatow_UserRoleType =
  | 'Admin'
  | 'Editor'
  | 'Viewer';

export type IleMandatow_UsersCreateInput = {
  data?: Maybe<IleMandatow_UserCreateInput>;
};

export type IleMandatow_UsersUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<IleMandatow_UserUpdateInput>;
};

export type IleMandatow_UserUpdateInput = {
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<IleMandatow_UserRoleType>;
};

export type IleMandatow_UserWhereInput = {
  AND?: Maybe<Array<Maybe<IleMandatow_UserWhereInput>>>;
  OR?: Maybe<Array<Maybe<IleMandatow_UserWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  username?: Maybe<Scalars['String']>;
  username_not?: Maybe<Scalars['String']>;
  username_contains?: Maybe<Scalars['String']>;
  username_not_contains?: Maybe<Scalars['String']>;
  username_starts_with?: Maybe<Scalars['String']>;
  username_not_starts_with?: Maybe<Scalars['String']>;
  username_ends_with?: Maybe<Scalars['String']>;
  username_not_ends_with?: Maybe<Scalars['String']>;
  username_i?: Maybe<Scalars['String']>;
  username_not_i?: Maybe<Scalars['String']>;
  username_contains_i?: Maybe<Scalars['String']>;
  username_not_contains_i?: Maybe<Scalars['String']>;
  username_starts_with_i?: Maybe<Scalars['String']>;
  username_not_starts_with_i?: Maybe<Scalars['String']>;
  username_ends_with_i?: Maybe<Scalars['String']>;
  username_not_ends_with_i?: Maybe<Scalars['String']>;
  username_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  username_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  password_is_set?: Maybe<Scalars['Boolean']>;
  role?: Maybe<IleMandatow_UserRoleType>;
  role_not?: Maybe<IleMandatow_UserRoleType>;
  role_in?: Maybe<Array<Maybe<IleMandatow_UserRoleType>>>;
  role_not_in?: Maybe<Array<Maybe<IleMandatow_UserRoleType>>>;
};

export type IleMandatow_UserWhereUniqueInput = {
  id: Scalars['ID'];
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  graphQlSource?: Maybe<GraphQlSource>;
  allGraphQlSource: GraphQlSourceConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  ilemandatow: IleMandatow;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGraphQlSourceArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  typeName?: Maybe<StringQueryOperatorInput>;
  fieldName?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllGraphQlSourceArgs = {
  filter?: Maybe<GraphQlSourceFilterInput>;
  sort?: Maybe<GraphQlSourceSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___repoUrl'
  | 'siteMetadata___appVersion'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  id?: Maybe<Scalars['String']>;
  i18nCtx?: Maybe<SitePageContextI18nCtx>;
};

export type SitePageContextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  i18nCtx?: Maybe<SitePageContextI18nCtxFilterInput>;
};

export type SitePageContextI18nCtx = {
  default?: Maybe<Scalars['Boolean']>;
  path?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  dateFormat?: Maybe<Scalars['String']>;
  siteLanguage?: Maybe<Scalars['String']>;
  ogLanguage?: Maybe<Scalars['String']>;
  defaultTitle?: Maybe<Scalars['String']>;
  defaultDescription?: Maybe<Scalars['String']>;
  translations?: Maybe<SitePageContextI18nCtxTranslations>;
};

export type SitePageContextI18nCtxFilterInput = {
  default?: Maybe<BooleanQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  dateFormat?: Maybe<StringQueryOperatorInput>;
  siteLanguage?: Maybe<StringQueryOperatorInput>;
  ogLanguage?: Maybe<StringQueryOperatorInput>;
  defaultTitle?: Maybe<StringQueryOperatorInput>;
  defaultDescription?: Maybe<StringQueryOperatorInput>;
  translations?: Maybe<SitePageContextI18nCtxTranslationsFilterInput>;
};

export type SitePageContextI18nCtxTranslations = {
  aboutUs?: Maybe<Scalars['String']>;
  newPoll?: Maybe<Scalars['String']>;
  poll?: Maybe<Scalars['String']>;
  polls?: Maybe<Scalars['String']>;
  faq?: Maybe<Scalars['String']>;
  changeLanguage?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  toggleTheme?: Maybe<Scalars['String']>;
  pl?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
  seeDetails?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  home?: Maybe<Scalars['String']>;
  privacy?: Maybe<Scalars['String']>;
  pollResults?: Maybe<Scalars['String']>;
  commissionedBy?: Maybe<Scalars['String']>;
  conductedBy?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['String']>;
  conductedAt?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  participantsCount?: Maybe<Scalars['String']>;
  party?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['String']>;
  seats?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  resultWithPerc?: Maybe<Scalars['String']>;
  pollResultsTableTitle?: Maybe<Scalars['String']>;
  pollResultsTableDescription?: Maybe<Scalars['String']>;
  partyName?: Maybe<Scalars['String']>;
  pollResult?: Maybe<Scalars['String']>;
  providePartyColor?: Maybe<Scalars['String']>;
  electionSettingsTitle?: Maybe<Scalars['String']>;
  electionSettingsDescription?: Maybe<Scalars['String']>;
  electionThreshold?: Maybe<Scalars['String']>;
  parliamentSeats?: Maybe<Scalars['String']>;
  submit?: Maybe<Scalars['String']>;
  cancel?: Maybe<Scalars['String']>;
  threshold?: Maybe<Scalars['String']>;
  party1?: Maybe<Scalars['String']>;
  party2?: Maybe<Scalars['String']>;
  party3?: Maybe<Scalars['String']>;
  insertRowAbove?: Maybe<Scalars['String']>;
  insertRowBelow?: Maybe<Scalars['String']>;
  removeRow?: Maybe<Scalars['String']>;
  edit?: Maybe<Scalars['String']>;
  heroTitle?: Maybe<Scalars['String']>;
  free?: Maybe<Scalars['String']>;
  moreInfo?: Maybe<Scalars['String']>;
  moreInfoHeroDesc?: Maybe<Scalars['String']>;
  newPollHeroDesc?: Maybe<Scalars['String']>;
  openSourceHeroDesc?: Maybe<Scalars['String']>;
  pollsHeroDesc?: Maybe<Scalars['String']>;
  pollsExplainedDesc?: Maybe<Scalars['String']>;
  quickExampleDesc?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nCtxTranslationsFilterInput = {
  aboutUs?: Maybe<StringQueryOperatorInput>;
  newPoll?: Maybe<StringQueryOperatorInput>;
  poll?: Maybe<StringQueryOperatorInput>;
  polls?: Maybe<StringQueryOperatorInput>;
  faq?: Maybe<StringQueryOperatorInput>;
  changeLanguage?: Maybe<StringQueryOperatorInput>;
  search?: Maybe<StringQueryOperatorInput>;
  toggleTheme?: Maybe<StringQueryOperatorInput>;
  pl?: Maybe<StringQueryOperatorInput>;
  en?: Maybe<StringQueryOperatorInput>;
  seeDetails?: Maybe<StringQueryOperatorInput>;
  source?: Maybe<StringQueryOperatorInput>;
  home?: Maybe<StringQueryOperatorInput>;
  privacy?: Maybe<StringQueryOperatorInput>;
  pollResults?: Maybe<StringQueryOperatorInput>;
  commissionedBy?: Maybe<StringQueryOperatorInput>;
  conductedBy?: Maybe<StringQueryOperatorInput>;
  publishedAt?: Maybe<StringQueryOperatorInput>;
  conductedAt?: Maybe<StringQueryOperatorInput>;
  method?: Maybe<StringQueryOperatorInput>;
  participantsCount?: Maybe<StringQueryOperatorInput>;
  party?: Maybe<StringQueryOperatorInput>;
  result?: Maybe<StringQueryOperatorInput>;
  seats?: Maybe<StringQueryOperatorInput>;
  color?: Maybe<StringQueryOperatorInput>;
  resultWithPerc?: Maybe<StringQueryOperatorInput>;
  pollResultsTableTitle?: Maybe<StringQueryOperatorInput>;
  pollResultsTableDescription?: Maybe<StringQueryOperatorInput>;
  partyName?: Maybe<StringQueryOperatorInput>;
  pollResult?: Maybe<StringQueryOperatorInput>;
  providePartyColor?: Maybe<StringQueryOperatorInput>;
  electionSettingsTitle?: Maybe<StringQueryOperatorInput>;
  electionSettingsDescription?: Maybe<StringQueryOperatorInput>;
  electionThreshold?: Maybe<StringQueryOperatorInput>;
  parliamentSeats?: Maybe<StringQueryOperatorInput>;
  submit?: Maybe<StringQueryOperatorInput>;
  cancel?: Maybe<StringQueryOperatorInput>;
  threshold?: Maybe<StringQueryOperatorInput>;
  party1?: Maybe<StringQueryOperatorInput>;
  party2?: Maybe<StringQueryOperatorInput>;
  party3?: Maybe<StringQueryOperatorInput>;
  insertRowAbove?: Maybe<StringQueryOperatorInput>;
  insertRowBelow?: Maybe<StringQueryOperatorInput>;
  removeRow?: Maybe<StringQueryOperatorInput>;
  edit?: Maybe<StringQueryOperatorInput>;
  heroTitle?: Maybe<StringQueryOperatorInput>;
  free?: Maybe<StringQueryOperatorInput>;
  moreInfo?: Maybe<StringQueryOperatorInput>;
  moreInfoHeroDesc?: Maybe<StringQueryOperatorInput>;
  newPollHeroDesc?: Maybe<StringQueryOperatorInput>;
  openSourceHeroDesc?: Maybe<StringQueryOperatorInput>;
  pollsHeroDesc?: Maybe<StringQueryOperatorInput>;
  pollsExplainedDesc?: Maybe<StringQueryOperatorInput>;
  quickExampleDesc?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___id'
  | 'context___i18nCtx___default'
  | 'context___i18nCtx___path'
  | 'context___i18nCtx___locale'
  | 'context___i18nCtx___dateFormat'
  | 'context___i18nCtx___siteLanguage'
  | 'context___i18nCtx___ogLanguage'
  | 'context___i18nCtx___defaultTitle'
  | 'context___i18nCtx___defaultDescription'
  | 'context___i18nCtx___translations___aboutUs'
  | 'context___i18nCtx___translations___newPoll'
  | 'context___i18nCtx___translations___poll'
  | 'context___i18nCtx___translations___polls'
  | 'context___i18nCtx___translations___faq'
  | 'context___i18nCtx___translations___changeLanguage'
  | 'context___i18nCtx___translations___search'
  | 'context___i18nCtx___translations___toggleTheme'
  | 'context___i18nCtx___translations___pl'
  | 'context___i18nCtx___translations___en'
  | 'context___i18nCtx___translations___seeDetails'
  | 'context___i18nCtx___translations___source'
  | 'context___i18nCtx___translations___home'
  | 'context___i18nCtx___translations___privacy'
  | 'context___i18nCtx___translations___pollResults'
  | 'context___i18nCtx___translations___commissionedBy'
  | 'context___i18nCtx___translations___conductedBy'
  | 'context___i18nCtx___translations___publishedAt'
  | 'context___i18nCtx___translations___conductedAt'
  | 'context___i18nCtx___translations___method'
  | 'context___i18nCtx___translations___participantsCount'
  | 'context___i18nCtx___translations___party'
  | 'context___i18nCtx___translations___result'
  | 'context___i18nCtx___translations___seats'
  | 'context___i18nCtx___translations___color'
  | 'context___i18nCtx___translations___resultWithPerc'
  | 'context___i18nCtx___translations___pollResultsTableTitle'
  | 'context___i18nCtx___translations___pollResultsTableDescription'
  | 'context___i18nCtx___translations___partyName'
  | 'context___i18nCtx___translations___pollResult'
  | 'context___i18nCtx___translations___providePartyColor'
  | 'context___i18nCtx___translations___electionSettingsTitle'
  | 'context___i18nCtx___translations___electionSettingsDescription'
  | 'context___i18nCtx___translations___electionThreshold'
  | 'context___i18nCtx___translations___parliamentSeats'
  | 'context___i18nCtx___translations___submit'
  | 'context___i18nCtx___translations___cancel'
  | 'context___i18nCtx___translations___threshold'
  | 'context___i18nCtx___translations___party1'
  | 'context___i18nCtx___translations___party2'
  | 'context___i18nCtx___translations___party3'
  | 'context___i18nCtx___translations___insertRowAbove'
  | 'context___i18nCtx___translations___insertRowBelow'
  | 'context___i18nCtx___translations___removeRow'
  | 'context___i18nCtx___translations___edit'
  | 'context___i18nCtx___translations___heroTitle'
  | 'context___i18nCtx___translations___free'
  | 'context___i18nCtx___translations___moreInfo'
  | 'context___i18nCtx___translations___moreInfoHeroDesc'
  | 'context___i18nCtx___translations___newPollHeroDesc'
  | 'context___i18nCtx___translations___openSourceHeroDesc'
  | 'context___i18nCtx___translations___pollsHeroDesc'
  | 'context___i18nCtx___translations___pollsExplainedDesc'
  | 'context___i18nCtx___translations___quickExampleDesc'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___output'
  | 'pluginCreator___pluginOptions___createLinkInHead'
  | 'pluginCreator___pluginOptions___host'
  | 'pluginCreator___pluginOptions___sitemap'
  | 'pluginCreator___pluginOptions___typeName'
  | 'pluginCreator___pluginOptions___fieldName'
  | 'pluginCreator___pluginOptions___url'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___documentPaths'
  | 'pluginCreator___pluginOptions___headers____xxxwoffxwoff2x'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___output'
  | 'pluginOptions___createLinkInHead'
  | 'pluginOptions___host'
  | 'pluginOptions___sitemap'
  | 'pluginOptions___env___disallow___policy'
  | 'pluginOptions___env___allow___policy'
  | 'pluginOptions___typeName'
  | 'pluginOptions___fieldName'
  | 'pluginOptions___url'
  | 'pluginOptions___fileName'
  | 'pluginOptions___documentPaths'
  | 'pluginOptions___headers____xxxwoffxwoff2x'
  | 'pluginOptions___path'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  output?: Maybe<Scalars['String']>;
  createLinkInHead?: Maybe<Scalars['Boolean']>;
  host?: Maybe<Scalars['String']>;
  sitemap?: Maybe<Scalars['String']>;
  env?: Maybe<SitePluginPluginOptionsEnv>;
  typeName?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  documentPaths?: Maybe<Array<Maybe<Scalars['String']>>>;
  headers?: Maybe<SitePluginPluginOptionsHeaders>;
  path?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsEnv = {
  disallow?: Maybe<SitePluginPluginOptionsEnvDisallow>;
  allow?: Maybe<SitePluginPluginOptionsEnvAllow>;
};

export type SitePluginPluginOptionsEnvAllow = {
  policy?: Maybe<Array<Maybe<SitePluginPluginOptionsEnvAllowPolicy>>>;
};

export type SitePluginPluginOptionsEnvAllowFilterInput = {
  policy?: Maybe<SitePluginPluginOptionsEnvAllowPolicyFilterListInput>;
};

export type SitePluginPluginOptionsEnvAllowPolicy = {
  userAgent?: Maybe<Scalars['String']>;
  allow?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsEnvAllowPolicyFilterInput = {
  userAgent?: Maybe<StringQueryOperatorInput>;
  allow?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsEnvAllowPolicyFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsEnvAllowPolicyFilterInput>;
};

export type SitePluginPluginOptionsEnvDisallow = {
  policy?: Maybe<Array<Maybe<SitePluginPluginOptionsEnvDisallowPolicy>>>;
};

export type SitePluginPluginOptionsEnvDisallowFilterInput = {
  policy?: Maybe<SitePluginPluginOptionsEnvDisallowPolicyFilterListInput>;
};

export type SitePluginPluginOptionsEnvDisallowPolicy = {
  userAgent?: Maybe<Scalars['String']>;
  disallow?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsEnvDisallowPolicyFilterInput = {
  userAgent?: Maybe<StringQueryOperatorInput>;
  disallow?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsEnvDisallowPolicyFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsEnvDisallowPolicyFilterInput>;
};

export type SitePluginPluginOptionsEnvFilterInput = {
  disallow?: Maybe<SitePluginPluginOptionsEnvDisallowFilterInput>;
  allow?: Maybe<SitePluginPluginOptionsEnvAllowFilterInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  output?: Maybe<StringQueryOperatorInput>;
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  sitemap?: Maybe<StringQueryOperatorInput>;
  env?: Maybe<SitePluginPluginOptionsEnvFilterInput>;
  typeName?: Maybe<StringQueryOperatorInput>;
  fieldName?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  documentPaths?: Maybe<StringQueryOperatorInput>;
  headers?: Maybe<SitePluginPluginOptionsHeadersFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsHeaders = {
  _xxxwoffxwoff2x?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsHeadersFilterInput = {
  _xxxwoffxwoff2x?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  repoUrl?: Maybe<Scalars['String']>;
  appVersion?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  repoUrl?: Maybe<StringQueryOperatorInput>;
  appVersion?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type ElectoralCodeFragment = (
  Pick<IleMandatow_ElectoralCode, 'id' | 'inEffectSince' | 'inEffectTo' | 'threshold' | 'totalSeats'>
  & { districts: Array<ElectoralDistrictFragment> }
);

export type ElectoralDistrictFragment = Pick<IleMandatow_ElectoralDistrict, 'id' | 'district' | 'name' | 'totalSeats'>;

export type PartyFragment = Pick<IleMandatow_Party, 'id' | 'name' | 'abbr' | 'color' | 'colorDarkTheme' | 'type' | 'parliamentOrder'>;

export type PollFragment = (
  Pick<IleMandatow_Poll, 'id' | 'publishedAt' | 'source' | 'pollEndedAt' | 'pollStartedAt' | 'participantsCount'>
  & { publishedBy: Array<PublisherFragment>, polledBy: Array<PollCompanyFragment>, results: Array<PollResultFragment>, method?: Maybe<PollMethodFragment> }
);

export type PollCompanyFragment = Pick<IleMandatow_PollCompany, 'id' | 'name' | 'abbr'>;

export type PollMethodFragment = Pick<IleMandatow_PollMethod, 'id' | 'name'>;

export type PollResultFragment = (
  Pick<IleMandatow_PollResult, 'result'>
  & { party?: Maybe<PartyFragment> }
);

export type PublisherFragment = Pick<IleMandatow_Publisher, 'id' | 'name' | 'abbr'>;

export type GetSiteMetaDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSiteMetaDataQuery = { allSite: { nodes: Array<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'appVersion' | 'description' | 'siteUrl' | 'repoUrl' | 'title'>> }> } };

export type GetAllPollsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPollsQuery = { ilemandatow: { allPolls?: Maybe<Array<Maybe<PollFragment>>>, allElectoralCodes?: Maybe<Array<Maybe<ElectoralCodeFragment>>> } };

export type GetPollQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPollQuery = { ilemandatow: { Poll?: Maybe<PollFragment>, allElectoralCodes?: Maybe<Array<Maybe<ElectoralCodeFragment>>> } };
