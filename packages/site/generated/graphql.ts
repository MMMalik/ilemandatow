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
  JSON: any;
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type ContentJson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
};

export type ContentJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentJsonEdge>;
  nodes: Array<ContentJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentJsonGroupConnection>;
};


export type ContentJsonConnectionDistinctArgs = {
  field: ContentJsonFieldsEnum;
};


export type ContentJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentJsonFieldsEnum;
};

export type ContentJsonEdge = {
  next?: Maybe<ContentJson>;
  node: ContentJson;
  previous?: Maybe<ContentJson>;
};

export type ContentJsonFieldsEnum = 
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
  | 'name'
  | 'version'
  | 'description'
  | 'author'
  | 'license';

export type ContentJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
};

export type ContentJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentJsonEdge>;
  nodes: Array<ContentJson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentJsonSortInput = {
  fields?: Maybe<Array<Maybe<ContentJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
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
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
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
  | 'blksize'
  | 'blocks'
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
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
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
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childContentJson?: Maybe<ContentJson>;
  childPartiesJson?: Maybe<PartiesJson>;
  childPollCompaniesJson?: Maybe<PollCompaniesJson>;
  childPollsJson?: Maybe<PollsJson>;
  childPublishersJson?: Maybe<PublishersJson>;
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
  | 'blksize'
  | 'blocks'
  | 'publicURL'
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
  | 'childContentJson___id'
  | 'childContentJson___parent___id'
  | 'childContentJson___parent___parent___id'
  | 'childContentJson___parent___parent___children'
  | 'childContentJson___parent___children'
  | 'childContentJson___parent___children___id'
  | 'childContentJson___parent___children___children'
  | 'childContentJson___parent___internal___content'
  | 'childContentJson___parent___internal___contentDigest'
  | 'childContentJson___parent___internal___description'
  | 'childContentJson___parent___internal___fieldOwners'
  | 'childContentJson___parent___internal___ignoreType'
  | 'childContentJson___parent___internal___mediaType'
  | 'childContentJson___parent___internal___owner'
  | 'childContentJson___parent___internal___type'
  | 'childContentJson___children'
  | 'childContentJson___children___id'
  | 'childContentJson___children___parent___id'
  | 'childContentJson___children___parent___children'
  | 'childContentJson___children___children'
  | 'childContentJson___children___children___id'
  | 'childContentJson___children___children___children'
  | 'childContentJson___children___internal___content'
  | 'childContentJson___children___internal___contentDigest'
  | 'childContentJson___children___internal___description'
  | 'childContentJson___children___internal___fieldOwners'
  | 'childContentJson___children___internal___ignoreType'
  | 'childContentJson___children___internal___mediaType'
  | 'childContentJson___children___internal___owner'
  | 'childContentJson___children___internal___type'
  | 'childContentJson___internal___content'
  | 'childContentJson___internal___contentDigest'
  | 'childContentJson___internal___description'
  | 'childContentJson___internal___fieldOwners'
  | 'childContentJson___internal___ignoreType'
  | 'childContentJson___internal___mediaType'
  | 'childContentJson___internal___owner'
  | 'childContentJson___internal___type'
  | 'childContentJson___name'
  | 'childContentJson___version'
  | 'childContentJson___description'
  | 'childContentJson___author'
  | 'childContentJson___license'
  | 'childPartiesJson___id'
  | 'childPartiesJson___parent___id'
  | 'childPartiesJson___parent___parent___id'
  | 'childPartiesJson___parent___parent___children'
  | 'childPartiesJson___parent___children'
  | 'childPartiesJson___parent___children___id'
  | 'childPartiesJson___parent___children___children'
  | 'childPartiesJson___parent___internal___content'
  | 'childPartiesJson___parent___internal___contentDigest'
  | 'childPartiesJson___parent___internal___description'
  | 'childPartiesJson___parent___internal___fieldOwners'
  | 'childPartiesJson___parent___internal___ignoreType'
  | 'childPartiesJson___parent___internal___mediaType'
  | 'childPartiesJson___parent___internal___owner'
  | 'childPartiesJson___parent___internal___type'
  | 'childPartiesJson___children'
  | 'childPartiesJson___children___id'
  | 'childPartiesJson___children___parent___id'
  | 'childPartiesJson___children___parent___children'
  | 'childPartiesJson___children___children'
  | 'childPartiesJson___children___children___id'
  | 'childPartiesJson___children___children___children'
  | 'childPartiesJson___children___internal___content'
  | 'childPartiesJson___children___internal___contentDigest'
  | 'childPartiesJson___children___internal___description'
  | 'childPartiesJson___children___internal___fieldOwners'
  | 'childPartiesJson___children___internal___ignoreType'
  | 'childPartiesJson___children___internal___mediaType'
  | 'childPartiesJson___children___internal___owner'
  | 'childPartiesJson___children___internal___type'
  | 'childPartiesJson___internal___content'
  | 'childPartiesJson___internal___contentDigest'
  | 'childPartiesJson___internal___description'
  | 'childPartiesJson___internal___fieldOwners'
  | 'childPartiesJson___internal___ignoreType'
  | 'childPartiesJson___internal___mediaType'
  | 'childPartiesJson___internal___owner'
  | 'childPartiesJson___internal___type'
  | 'childPartiesJson___memberParties'
  | 'childPartiesJson___memberParties___party___id'
  | 'childPartiesJson___memberParties___party___children'
  | 'childPartiesJson___memberParties___party___memberParties'
  | 'childPartiesJson___memberParties___party___name'
  | 'childPartiesJson___memberParties___party___abbr'
  | 'childPartiesJson___memberParties___party___fullName'
  | 'childPartiesJson___memberParties___party___color'
  | 'childPartiesJson___memberParties___party___colorDarkTheme'
  | 'childPartiesJson___memberParties___joinedAt'
  | 'childPartiesJson___memberParties___leftAt'
  | 'childPartiesJson___name'
  | 'childPartiesJson___abbr'
  | 'childPartiesJson___fullName'
  | 'childPartiesJson___color'
  | 'childPartiesJson___colorDarkTheme'
  | 'childPollCompaniesJson___id'
  | 'childPollCompaniesJson___parent___id'
  | 'childPollCompaniesJson___parent___parent___id'
  | 'childPollCompaniesJson___parent___parent___children'
  | 'childPollCompaniesJson___parent___children'
  | 'childPollCompaniesJson___parent___children___id'
  | 'childPollCompaniesJson___parent___children___children'
  | 'childPollCompaniesJson___parent___internal___content'
  | 'childPollCompaniesJson___parent___internal___contentDigest'
  | 'childPollCompaniesJson___parent___internal___description'
  | 'childPollCompaniesJson___parent___internal___fieldOwners'
  | 'childPollCompaniesJson___parent___internal___ignoreType'
  | 'childPollCompaniesJson___parent___internal___mediaType'
  | 'childPollCompaniesJson___parent___internal___owner'
  | 'childPollCompaniesJson___parent___internal___type'
  | 'childPollCompaniesJson___children'
  | 'childPollCompaniesJson___children___id'
  | 'childPollCompaniesJson___children___parent___id'
  | 'childPollCompaniesJson___children___parent___children'
  | 'childPollCompaniesJson___children___children'
  | 'childPollCompaniesJson___children___children___id'
  | 'childPollCompaniesJson___children___children___children'
  | 'childPollCompaniesJson___children___internal___content'
  | 'childPollCompaniesJson___children___internal___contentDigest'
  | 'childPollCompaniesJson___children___internal___description'
  | 'childPollCompaniesJson___children___internal___fieldOwners'
  | 'childPollCompaniesJson___children___internal___ignoreType'
  | 'childPollCompaniesJson___children___internal___mediaType'
  | 'childPollCompaniesJson___children___internal___owner'
  | 'childPollCompaniesJson___children___internal___type'
  | 'childPollCompaniesJson___internal___content'
  | 'childPollCompaniesJson___internal___contentDigest'
  | 'childPollCompaniesJson___internal___description'
  | 'childPollCompaniesJson___internal___fieldOwners'
  | 'childPollCompaniesJson___internal___ignoreType'
  | 'childPollCompaniesJson___internal___mediaType'
  | 'childPollCompaniesJson___internal___owner'
  | 'childPollCompaniesJson___internal___type'
  | 'childPollCompaniesJson___name'
  | 'childPollCompaniesJson___abbr'
  | 'childPollsJson___id'
  | 'childPollsJson___parent___id'
  | 'childPollsJson___parent___parent___id'
  | 'childPollsJson___parent___parent___children'
  | 'childPollsJson___parent___children'
  | 'childPollsJson___parent___children___id'
  | 'childPollsJson___parent___children___children'
  | 'childPollsJson___parent___internal___content'
  | 'childPollsJson___parent___internal___contentDigest'
  | 'childPollsJson___parent___internal___description'
  | 'childPollsJson___parent___internal___fieldOwners'
  | 'childPollsJson___parent___internal___ignoreType'
  | 'childPollsJson___parent___internal___mediaType'
  | 'childPollsJson___parent___internal___owner'
  | 'childPollsJson___parent___internal___type'
  | 'childPollsJson___children'
  | 'childPollsJson___children___id'
  | 'childPollsJson___children___parent___id'
  | 'childPollsJson___children___parent___children'
  | 'childPollsJson___children___children'
  | 'childPollsJson___children___children___id'
  | 'childPollsJson___children___children___children'
  | 'childPollsJson___children___internal___content'
  | 'childPollsJson___children___internal___contentDigest'
  | 'childPollsJson___children___internal___description'
  | 'childPollsJson___children___internal___fieldOwners'
  | 'childPollsJson___children___internal___ignoreType'
  | 'childPollsJson___children___internal___mediaType'
  | 'childPollsJson___children___internal___owner'
  | 'childPollsJson___children___internal___type'
  | 'childPollsJson___internal___content'
  | 'childPollsJson___internal___contentDigest'
  | 'childPollsJson___internal___description'
  | 'childPollsJson___internal___fieldOwners'
  | 'childPollsJson___internal___ignoreType'
  | 'childPollsJson___internal___mediaType'
  | 'childPollsJson___internal___owner'
  | 'childPollsJson___internal___type'
  | 'childPollsJson___method'
  | 'childPollsJson___publishedAt'
  | 'childPollsJson___summary'
  | 'childPollsJson___polledBy___id'
  | 'childPollsJson___polledBy___parent___id'
  | 'childPollsJson___polledBy___parent___children'
  | 'childPollsJson___polledBy___children'
  | 'childPollsJson___polledBy___children___id'
  | 'childPollsJson___polledBy___children___children'
  | 'childPollsJson___polledBy___internal___content'
  | 'childPollsJson___polledBy___internal___contentDigest'
  | 'childPollsJson___polledBy___internal___description'
  | 'childPollsJson___polledBy___internal___fieldOwners'
  | 'childPollsJson___polledBy___internal___ignoreType'
  | 'childPollsJson___polledBy___internal___mediaType'
  | 'childPollsJson___polledBy___internal___owner'
  | 'childPollsJson___polledBy___internal___type'
  | 'childPollsJson___polledBy___name'
  | 'childPollsJson___polledBy___abbr'
  | 'childPollsJson___pollEndedAt'
  | 'childPollsJson___participantsCount'
  | 'childPollsJson___pollStartedAt'
  | 'childPollsJson___results'
  | 'childPollsJson___results___party___id'
  | 'childPollsJson___results___party___children'
  | 'childPollsJson___results___party___memberParties'
  | 'childPollsJson___results___party___name'
  | 'childPollsJson___results___party___abbr'
  | 'childPollsJson___results___party___fullName'
  | 'childPollsJson___results___party___color'
  | 'childPollsJson___results___party___colorDarkTheme'
  | 'childPollsJson___results___result'
  | 'childPollsJson___source'
  | 'childPollsJson___publishedBy___id'
  | 'childPollsJson___publishedBy___parent___id'
  | 'childPollsJson___publishedBy___parent___children'
  | 'childPollsJson___publishedBy___children'
  | 'childPollsJson___publishedBy___children___id'
  | 'childPollsJson___publishedBy___children___children'
  | 'childPollsJson___publishedBy___internal___content'
  | 'childPollsJson___publishedBy___internal___contentDigest'
  | 'childPollsJson___publishedBy___internal___description'
  | 'childPollsJson___publishedBy___internal___fieldOwners'
  | 'childPollsJson___publishedBy___internal___ignoreType'
  | 'childPollsJson___publishedBy___internal___mediaType'
  | 'childPollsJson___publishedBy___internal___owner'
  | 'childPollsJson___publishedBy___internal___type'
  | 'childPollsJson___publishedBy___name'
  | 'childPollsJson___publishedBy___abbr'
  | 'childPollsJson___participantsMightVote'
  | 'childPollsJson___participantsUndecided'
  | 'childPollsJson___participantsMightNotVote'
  | 'childPollsJson___participantsWillNotVote'
  | 'childPollsJson___participantsWillVote'
  | 'childPollsJson___error'
  | 'childPublishersJson___id'
  | 'childPublishersJson___parent___id'
  | 'childPublishersJson___parent___parent___id'
  | 'childPublishersJson___parent___parent___children'
  | 'childPublishersJson___parent___children'
  | 'childPublishersJson___parent___children___id'
  | 'childPublishersJson___parent___children___children'
  | 'childPublishersJson___parent___internal___content'
  | 'childPublishersJson___parent___internal___contentDigest'
  | 'childPublishersJson___parent___internal___description'
  | 'childPublishersJson___parent___internal___fieldOwners'
  | 'childPublishersJson___parent___internal___ignoreType'
  | 'childPublishersJson___parent___internal___mediaType'
  | 'childPublishersJson___parent___internal___owner'
  | 'childPublishersJson___parent___internal___type'
  | 'childPublishersJson___children'
  | 'childPublishersJson___children___id'
  | 'childPublishersJson___children___parent___id'
  | 'childPublishersJson___children___parent___children'
  | 'childPublishersJson___children___children'
  | 'childPublishersJson___children___children___id'
  | 'childPublishersJson___children___children___children'
  | 'childPublishersJson___children___internal___content'
  | 'childPublishersJson___children___internal___contentDigest'
  | 'childPublishersJson___children___internal___description'
  | 'childPublishersJson___children___internal___fieldOwners'
  | 'childPublishersJson___children___internal___ignoreType'
  | 'childPublishersJson___children___internal___mediaType'
  | 'childPublishersJson___children___internal___owner'
  | 'childPublishersJson___children___internal___type'
  | 'childPublishersJson___internal___content'
  | 'childPublishersJson___internal___contentDigest'
  | 'childPublishersJson___internal___description'
  | 'childPublishersJson___internal___fieldOwners'
  | 'childPublishersJson___internal___ignoreType'
  | 'childPublishersJson___internal___mediaType'
  | 'childPublishersJson___internal___owner'
  | 'childPublishersJson___internal___type'
  | 'childPublishersJson___name'
  | 'childPublishersJson___abbr';

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
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childContentJson?: Maybe<ContentJsonFilterInput>;
  childPartiesJson?: Maybe<PartiesJsonFilterInput>;
  childPollCompaniesJson?: Maybe<PollCompaniesJsonFilterInput>;
  childPollsJson?: Maybe<PollsJsonFilterInput>;
  childPublishersJson?: Maybe<PublishersJsonFilterInput>;
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

export type PartiesJson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  memberParties?: Maybe<Array<Maybe<PartiesJsonMemberParties>>>;
  name?: Maybe<Scalars['String']>;
  abbr?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  colorDarkTheme?: Maybe<Scalars['String']>;
};

export type PartiesJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PartiesJsonEdge>;
  nodes: Array<PartiesJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PartiesJsonGroupConnection>;
};


export type PartiesJsonConnectionDistinctArgs = {
  field: PartiesJsonFieldsEnum;
};


export type PartiesJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PartiesJsonFieldsEnum;
};

export type PartiesJsonEdge = {
  next?: Maybe<PartiesJson>;
  node: PartiesJson;
  previous?: Maybe<PartiesJson>;
};

export type PartiesJsonFieldsEnum = 
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
  | 'memberParties'
  | 'memberParties___party___id'
  | 'memberParties___party___parent___id'
  | 'memberParties___party___parent___children'
  | 'memberParties___party___children'
  | 'memberParties___party___children___id'
  | 'memberParties___party___children___children'
  | 'memberParties___party___internal___content'
  | 'memberParties___party___internal___contentDigest'
  | 'memberParties___party___internal___description'
  | 'memberParties___party___internal___fieldOwners'
  | 'memberParties___party___internal___ignoreType'
  | 'memberParties___party___internal___mediaType'
  | 'memberParties___party___internal___owner'
  | 'memberParties___party___internal___type'
  | 'memberParties___party___memberParties'
  | 'memberParties___party___memberParties___joinedAt'
  | 'memberParties___party___memberParties___leftAt'
  | 'memberParties___party___name'
  | 'memberParties___party___abbr'
  | 'memberParties___party___fullName'
  | 'memberParties___party___color'
  | 'memberParties___party___colorDarkTheme'
  | 'memberParties___joinedAt'
  | 'memberParties___leftAt'
  | 'name'
  | 'abbr'
  | 'fullName'
  | 'color'
  | 'colorDarkTheme';

export type PartiesJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  memberParties?: Maybe<PartiesJsonMemberPartiesFilterListInput>;
  name?: Maybe<StringQueryOperatorInput>;
  abbr?: Maybe<StringQueryOperatorInput>;
  fullName?: Maybe<StringQueryOperatorInput>;
  color?: Maybe<StringQueryOperatorInput>;
  colorDarkTheme?: Maybe<StringQueryOperatorInput>;
};

export type PartiesJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PartiesJsonEdge>;
  nodes: Array<PartiesJson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PartiesJsonMemberParties = {
  party?: Maybe<PartiesJson>;
  joinedAt?: Maybe<Scalars['String']>;
  leftAt?: Maybe<Scalars['String']>;
};

export type PartiesJsonMemberPartiesFilterInput = {
  party?: Maybe<PartiesJsonFilterInput>;
  joinedAt?: Maybe<StringQueryOperatorInput>;
  leftAt?: Maybe<StringQueryOperatorInput>;
};

export type PartiesJsonMemberPartiesFilterListInput = {
  elemMatch?: Maybe<PartiesJsonMemberPartiesFilterInput>;
};

export type PartiesJsonSortInput = {
  fields?: Maybe<Array<Maybe<PartiesJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PollCompaniesJson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  abbr?: Maybe<Scalars['String']>;
};

export type PollCompaniesJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PollCompaniesJsonEdge>;
  nodes: Array<PollCompaniesJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PollCompaniesJsonGroupConnection>;
};


export type PollCompaniesJsonConnectionDistinctArgs = {
  field: PollCompaniesJsonFieldsEnum;
};


export type PollCompaniesJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PollCompaniesJsonFieldsEnum;
};

export type PollCompaniesJsonEdge = {
  next?: Maybe<PollCompaniesJson>;
  node: PollCompaniesJson;
  previous?: Maybe<PollCompaniesJson>;
};

export type PollCompaniesJsonFieldsEnum = 
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
  | 'name'
  | 'abbr';

export type PollCompaniesJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  abbr?: Maybe<StringQueryOperatorInput>;
};

export type PollCompaniesJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PollCompaniesJsonEdge>;
  nodes: Array<PollCompaniesJson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PollCompaniesJsonSortInput = {
  fields?: Maybe<Array<Maybe<PollCompaniesJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PollsJson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  method?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['Date']>;
  summary?: Maybe<Scalars['String']>;
  polledBy?: Maybe<PollCompaniesJson>;
  pollEndedAt?: Maybe<Scalars['Date']>;
  participantsCount?: Maybe<Scalars['Int']>;
  pollStartedAt?: Maybe<Scalars['Date']>;
  results?: Maybe<Array<Maybe<PollsJsonResults>>>;
  source?: Maybe<Scalars['String']>;
  publishedBy?: Maybe<PublishersJson>;
  participantsMightVote?: Maybe<Scalars['Float']>;
  participantsUndecided?: Maybe<Scalars['Float']>;
  participantsMightNotVote?: Maybe<Scalars['Float']>;
  participantsWillNotVote?: Maybe<Scalars['Float']>;
  participantsWillVote?: Maybe<Scalars['Float']>;
  error?: Maybe<Scalars['Int']>;
};


export type PollsJsonPublishedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type PollsJsonPollEndedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type PollsJsonPollStartedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PollsJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PollsJsonEdge>;
  nodes: Array<PollsJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PollsJsonGroupConnection>;
};


export type PollsJsonConnectionDistinctArgs = {
  field: PollsJsonFieldsEnum;
};


export type PollsJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PollsJsonFieldsEnum;
};

export type PollsJsonEdge = {
  next?: Maybe<PollsJson>;
  node: PollsJson;
  previous?: Maybe<PollsJson>;
};

export type PollsJsonFieldsEnum = 
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
  | 'method'
  | 'publishedAt'
  | 'summary'
  | 'polledBy___id'
  | 'polledBy___parent___id'
  | 'polledBy___parent___parent___id'
  | 'polledBy___parent___parent___children'
  | 'polledBy___parent___children'
  | 'polledBy___parent___children___id'
  | 'polledBy___parent___children___children'
  | 'polledBy___parent___internal___content'
  | 'polledBy___parent___internal___contentDigest'
  | 'polledBy___parent___internal___description'
  | 'polledBy___parent___internal___fieldOwners'
  | 'polledBy___parent___internal___ignoreType'
  | 'polledBy___parent___internal___mediaType'
  | 'polledBy___parent___internal___owner'
  | 'polledBy___parent___internal___type'
  | 'polledBy___children'
  | 'polledBy___children___id'
  | 'polledBy___children___parent___id'
  | 'polledBy___children___parent___children'
  | 'polledBy___children___children'
  | 'polledBy___children___children___id'
  | 'polledBy___children___children___children'
  | 'polledBy___children___internal___content'
  | 'polledBy___children___internal___contentDigest'
  | 'polledBy___children___internal___description'
  | 'polledBy___children___internal___fieldOwners'
  | 'polledBy___children___internal___ignoreType'
  | 'polledBy___children___internal___mediaType'
  | 'polledBy___children___internal___owner'
  | 'polledBy___children___internal___type'
  | 'polledBy___internal___content'
  | 'polledBy___internal___contentDigest'
  | 'polledBy___internal___description'
  | 'polledBy___internal___fieldOwners'
  | 'polledBy___internal___ignoreType'
  | 'polledBy___internal___mediaType'
  | 'polledBy___internal___owner'
  | 'polledBy___internal___type'
  | 'polledBy___name'
  | 'polledBy___abbr'
  | 'pollEndedAt'
  | 'participantsCount'
  | 'pollStartedAt'
  | 'results'
  | 'results___party___id'
  | 'results___party___parent___id'
  | 'results___party___parent___children'
  | 'results___party___children'
  | 'results___party___children___id'
  | 'results___party___children___children'
  | 'results___party___internal___content'
  | 'results___party___internal___contentDigest'
  | 'results___party___internal___description'
  | 'results___party___internal___fieldOwners'
  | 'results___party___internal___ignoreType'
  | 'results___party___internal___mediaType'
  | 'results___party___internal___owner'
  | 'results___party___internal___type'
  | 'results___party___memberParties'
  | 'results___party___memberParties___joinedAt'
  | 'results___party___memberParties___leftAt'
  | 'results___party___name'
  | 'results___party___abbr'
  | 'results___party___fullName'
  | 'results___party___color'
  | 'results___party___colorDarkTheme'
  | 'results___result'
  | 'source'
  | 'publishedBy___id'
  | 'publishedBy___parent___id'
  | 'publishedBy___parent___parent___id'
  | 'publishedBy___parent___parent___children'
  | 'publishedBy___parent___children'
  | 'publishedBy___parent___children___id'
  | 'publishedBy___parent___children___children'
  | 'publishedBy___parent___internal___content'
  | 'publishedBy___parent___internal___contentDigest'
  | 'publishedBy___parent___internal___description'
  | 'publishedBy___parent___internal___fieldOwners'
  | 'publishedBy___parent___internal___ignoreType'
  | 'publishedBy___parent___internal___mediaType'
  | 'publishedBy___parent___internal___owner'
  | 'publishedBy___parent___internal___type'
  | 'publishedBy___children'
  | 'publishedBy___children___id'
  | 'publishedBy___children___parent___id'
  | 'publishedBy___children___parent___children'
  | 'publishedBy___children___children'
  | 'publishedBy___children___children___id'
  | 'publishedBy___children___children___children'
  | 'publishedBy___children___internal___content'
  | 'publishedBy___children___internal___contentDigest'
  | 'publishedBy___children___internal___description'
  | 'publishedBy___children___internal___fieldOwners'
  | 'publishedBy___children___internal___ignoreType'
  | 'publishedBy___children___internal___mediaType'
  | 'publishedBy___children___internal___owner'
  | 'publishedBy___children___internal___type'
  | 'publishedBy___internal___content'
  | 'publishedBy___internal___contentDigest'
  | 'publishedBy___internal___description'
  | 'publishedBy___internal___fieldOwners'
  | 'publishedBy___internal___ignoreType'
  | 'publishedBy___internal___mediaType'
  | 'publishedBy___internal___owner'
  | 'publishedBy___internal___type'
  | 'publishedBy___name'
  | 'publishedBy___abbr'
  | 'participantsMightVote'
  | 'participantsUndecided'
  | 'participantsMightNotVote'
  | 'participantsWillNotVote'
  | 'participantsWillVote'
  | 'error';

export type PollsJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  method?: Maybe<StringQueryOperatorInput>;
  publishedAt?: Maybe<DateQueryOperatorInput>;
  summary?: Maybe<StringQueryOperatorInput>;
  polledBy?: Maybe<PollCompaniesJsonFilterInput>;
  pollEndedAt?: Maybe<DateQueryOperatorInput>;
  participantsCount?: Maybe<IntQueryOperatorInput>;
  pollStartedAt?: Maybe<DateQueryOperatorInput>;
  results?: Maybe<PollsJsonResultsFilterListInput>;
  source?: Maybe<StringQueryOperatorInput>;
  publishedBy?: Maybe<PublishersJsonFilterInput>;
  participantsMightVote?: Maybe<FloatQueryOperatorInput>;
  participantsUndecided?: Maybe<FloatQueryOperatorInput>;
  participantsMightNotVote?: Maybe<FloatQueryOperatorInput>;
  participantsWillNotVote?: Maybe<FloatQueryOperatorInput>;
  participantsWillVote?: Maybe<FloatQueryOperatorInput>;
  error?: Maybe<IntQueryOperatorInput>;
};

export type PollsJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PollsJsonEdge>;
  nodes: Array<PollsJson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PollsJsonResults = {
  party?: Maybe<PartiesJson>;
  result?: Maybe<Scalars['Float']>;
};

export type PollsJsonResultsFilterInput = {
  party?: Maybe<PartiesJsonFilterInput>;
  result?: Maybe<FloatQueryOperatorInput>;
};

export type PollsJsonResultsFilterListInput = {
  elemMatch?: Maybe<PollsJsonResultsFilterInput>;
};

export type PollsJsonSortInput = {
  fields?: Maybe<Array<Maybe<PollsJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PublishersJson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  abbr?: Maybe<Scalars['String']>;
};

export type PublishersJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PublishersJsonEdge>;
  nodes: Array<PublishersJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PublishersJsonGroupConnection>;
};


export type PublishersJsonConnectionDistinctArgs = {
  field: PublishersJsonFieldsEnum;
};


export type PublishersJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PublishersJsonFieldsEnum;
};

export type PublishersJsonEdge = {
  next?: Maybe<PublishersJson>;
  node: PublishersJson;
  previous?: Maybe<PublishersJson>;
};

export type PublishersJsonFieldsEnum = 
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
  | 'name'
  | 'abbr';

export type PublishersJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  abbr?: Maybe<StringQueryOperatorInput>;
};

export type PublishersJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PublishersJsonEdge>;
  nodes: Array<PublishersJson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PublishersJsonSortInput = {
  fields?: Maybe<Array<Maybe<PublishersJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
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
  publishersJson?: Maybe<PublishersJson>;
  allPublishersJson: PublishersJsonConnection;
  pollsJson?: Maybe<PollsJson>;
  allPollsJson: PollsJsonConnection;
  pollCompaniesJson?: Maybe<PollCompaniesJson>;
  allPollCompaniesJson: PollCompaniesJsonConnection;
  partiesJson?: Maybe<PartiesJson>;
  allPartiesJson: PartiesJsonConnection;
  contentJson?: Maybe<ContentJson>;
  allContentJson: ContentJsonConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
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
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childContentJson?: Maybe<ContentJsonFilterInput>;
  childPartiesJson?: Maybe<PartiesJsonFilterInput>;
  childPollCompaniesJson?: Maybe<PollCompaniesJsonFilterInput>;
  childPollsJson?: Maybe<PollsJsonFilterInput>;
  childPublishersJson?: Maybe<PublishersJsonFilterInput>;
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
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
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


export type QueryPublishersJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  abbr?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllPublishersJsonArgs = {
  filter?: Maybe<PublishersJsonFilterInput>;
  sort?: Maybe<PublishersJsonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPollsJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  method?: Maybe<StringQueryOperatorInput>;
  publishedAt?: Maybe<DateQueryOperatorInput>;
  summary?: Maybe<StringQueryOperatorInput>;
  polledBy?: Maybe<PollCompaniesJsonFilterInput>;
  pollEndedAt?: Maybe<DateQueryOperatorInput>;
  participantsCount?: Maybe<IntQueryOperatorInput>;
  pollStartedAt?: Maybe<DateQueryOperatorInput>;
  results?: Maybe<PollsJsonResultsFilterListInput>;
  source?: Maybe<StringQueryOperatorInput>;
  publishedBy?: Maybe<PublishersJsonFilterInput>;
  participantsMightVote?: Maybe<FloatQueryOperatorInput>;
  participantsUndecided?: Maybe<FloatQueryOperatorInput>;
  participantsMightNotVote?: Maybe<FloatQueryOperatorInput>;
  participantsWillNotVote?: Maybe<FloatQueryOperatorInput>;
  participantsWillVote?: Maybe<FloatQueryOperatorInput>;
  error?: Maybe<IntQueryOperatorInput>;
};


export type QueryAllPollsJsonArgs = {
  filter?: Maybe<PollsJsonFilterInput>;
  sort?: Maybe<PollsJsonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPollCompaniesJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  abbr?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllPollCompaniesJsonArgs = {
  filter?: Maybe<PollCompaniesJsonFilterInput>;
  sort?: Maybe<PollCompaniesJsonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPartiesJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  memberParties?: Maybe<PartiesJsonMemberPartiesFilterListInput>;
  name?: Maybe<StringQueryOperatorInput>;
  abbr?: Maybe<StringQueryOperatorInput>;
  fullName?: Maybe<StringQueryOperatorInput>;
  color?: Maybe<StringQueryOperatorInput>;
  colorDarkTheme?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllPartiesJsonArgs = {
  filter?: Maybe<PartiesJsonFilterInput>;
  sort?: Maybe<PartiesJsonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentJsonArgs = {
  filter?: Maybe<ContentJsonFilterInput>;
  sort?: Maybe<ContentJsonSortInput>;
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
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___documentPaths'
  | 'pluginCreator___pluginOptions___output'
  | 'pluginCreator___pluginOptions___createLinkInHead'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___headers____xxxwoffxwoff2x'
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
  | 'pluginOptions___fileName'
  | 'pluginOptions___documentPaths'
  | 'pluginOptions___output'
  | 'pluginOptions___createLinkInHead'
  | 'pluginOptions___env___development___policy'
  | 'pluginOptions___env___production___policy'
  | 'pluginOptions___path'
  | 'pluginOptions___name'
  | 'pluginOptions___headers____xxxwoffxwoff2x'
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
  fileName?: Maybe<Scalars['String']>;
  documentPaths?: Maybe<Array<Maybe<Scalars['String']>>>;
  output?: Maybe<Scalars['String']>;
  createLinkInHead?: Maybe<Scalars['Boolean']>;
  env?: Maybe<SitePluginPluginOptionsEnv>;
  path?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  headers?: Maybe<SitePluginPluginOptionsHeaders>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsEnv = {
  development?: Maybe<SitePluginPluginOptionsEnvDevelopment>;
  production?: Maybe<SitePluginPluginOptionsEnvProduction>;
};

export type SitePluginPluginOptionsEnvDevelopment = {
  policy?: Maybe<Array<Maybe<SitePluginPluginOptionsEnvDevelopmentPolicy>>>;
};

export type SitePluginPluginOptionsEnvDevelopmentFilterInput = {
  policy?: Maybe<SitePluginPluginOptionsEnvDevelopmentPolicyFilterListInput>;
};

export type SitePluginPluginOptionsEnvDevelopmentPolicy = {
  userAgent?: Maybe<Scalars['String']>;
  disallow?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsEnvDevelopmentPolicyFilterInput = {
  userAgent?: Maybe<StringQueryOperatorInput>;
  disallow?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsEnvDevelopmentPolicyFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsEnvDevelopmentPolicyFilterInput>;
};

export type SitePluginPluginOptionsEnvFilterInput = {
  development?: Maybe<SitePluginPluginOptionsEnvDevelopmentFilterInput>;
  production?: Maybe<SitePluginPluginOptionsEnvProductionFilterInput>;
};

export type SitePluginPluginOptionsEnvProduction = {
  policy?: Maybe<Array<Maybe<SitePluginPluginOptionsEnvProductionPolicy>>>;
};

export type SitePluginPluginOptionsEnvProductionFilterInput = {
  policy?: Maybe<SitePluginPluginOptionsEnvProductionPolicyFilterListInput>;
};

export type SitePluginPluginOptionsEnvProductionPolicy = {
  userAgent?: Maybe<Scalars['String']>;
  allow?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsEnvProductionPolicyFilterInput = {
  userAgent?: Maybe<StringQueryOperatorInput>;
  allow?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsEnvProductionPolicyFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsEnvProductionPolicyFilterInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  documentPaths?: Maybe<StringQueryOperatorInput>;
  output?: Maybe<StringQueryOperatorInput>;
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>;
  env?: Maybe<SitePluginPluginOptionsEnvFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  headers?: Maybe<SitePluginPluginOptionsHeadersFilterInput>;
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

export type PartyInfoFragment = Pick<PartiesJson, 'id' | 'name' | 'abbr' | 'color' | 'colorDarkTheme'>;

export type PollCompanyInfoFragment = Pick<PollCompaniesJson, 'id' | 'name' | 'abbr'>;

export type PollInfoFragment = (
  Pick<PollsJson, 'id' | 'publishedAt' | 'source' | 'pollEndedAt' | 'pollStartedAt' | 'participantsCount' | 'method'>
  & { publishedBy?: Maybe<PublisherInfoFragment>, polledBy?: Maybe<PollCompanyInfoFragment>, results?: Maybe<Array<Maybe<PollResultFragment>>> }
);

export type PollResultFragment = (
  Pick<PollsJsonResults, 'result'>
  & { party?: Maybe<PartyInfoFragment> }
);

export type PublisherInfoFragment = Pick<PublishersJson, 'id' | 'name' | 'abbr'>;

export type GetSiteMetaDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSiteMetaDataQuery = { allSite: { nodes: Array<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'appVersion' | 'description' | 'siteUrl' | 'repoUrl' | 'title'>> }> } };

export type GetAllPollsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPollsQuery = { allPollsJson: { nodes: Array<PollInfoFragment> } };

export type GetPollInfoQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetPollInfoQuery = { allPollsJson: { nodes: Array<PollInfoFragment> } };
