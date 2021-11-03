import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PromotionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserPostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ClubPostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ClubMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Promotion {
  readonly id: string;
  readonly nftContract?: string;
  readonly name?: string;
  readonly description?: string;
  readonly costPerThousand?: number;
  readonly itemId?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Promotion, PromotionMetaData>);
  static copyOf(source: Promotion, mutator: (draft: MutableModel<Promotion, PromotionMetaData>) => MutableModel<Promotion, PromotionMetaData> | void): Promotion;
}

export declare class UserPost {
  readonly id: string;
  readonly message: string;
  readonly userID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserPost, UserPostMetaData>);
  static copyOf(source: UserPost, mutator: (draft: MutableModel<UserPost, UserPostMetaData>) => MutableModel<UserPost, UserPostMetaData> | void): UserPost;
}

export declare class ClubPost {
  readonly id: string;
  readonly message: string;
  readonly clubID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ClubPost, ClubPostMetaData>);
  static copyOf(source: ClubPost, mutator: (draft: MutableModel<ClubPost, ClubPostMetaData>) => MutableModel<ClubPost, ClubPostMetaData> | void): ClubPost;
}

export declare class Club {
  readonly id: string;
  readonly name?: string;
  readonly nftContract?: string;
  readonly description?: string;
  readonly ClubPosts?: (ClubPost | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Club, ClubMetaData>);
  static copyOf(source: Club, mutator: (draft: MutableModel<Club, ClubMetaData>) => MutableModel<Club, ClubMetaData> | void): Club;
}

export declare class User {
  readonly id: string;
  readonly userName?: string;
  readonly bio?: string;
  readonly UserPosts?: (UserPost | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}