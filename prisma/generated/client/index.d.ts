
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Views
 * 
 */
export type Views = $Result.DefaultSelection<Prisma.$ViewsPayload>
/**
 * Model Likes
 * 
 */
export type Likes = $Result.DefaultSelection<Prisma.$LikesPayload>
/**
 * Model Tasks
 * 
 */
export type Tasks = $Result.DefaultSelection<Prisma.$TasksPayload>
/**
 * Model Particpated
 * 
 */
export type Particpated = $Result.DefaultSelection<Prisma.$ParticpatedPayload>
/**
 * Model AuctionBids
 * 
 */
export type AuctionBids = $Result.DefaultSelection<Prisma.$AuctionBidsPayload>
/**
 * Model Nfts
 * 
 */
export type Nfts = $Result.DefaultSelection<Prisma.$NftsPayload>
/**
 * Model Transactions
 * 
 */
export type Transactions = $Result.DefaultSelection<Prisma.$TransactionsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const rewardStatus: {
  DISTRIBUTED: 'DISTRIBUTED',
  ACTIVE: 'ACTIVE'
};

export type rewardStatus = (typeof rewardStatus)[keyof typeof rewardStatus]


export const orderType: {
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC'
};

export type orderType = (typeof orderType)[keyof typeof orderType]


export const NftType: {
  Platform_generated: 'Platform_generated',
  Ai_generated: 'Ai_generated'
};

export type NftType = (typeof NftType)[keyof typeof NftType]


export const Status: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  FORCE_DEACTIVATE: 'FORCE_DEACTIVATE'
};

export type Status = (typeof Status)[keyof typeof Status]


export const TransactionType: {
  BUY: 'BUY',
  SELL: 'SELL'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type rewardStatus = $Enums.rewardStatus

export const rewardStatus: typeof $Enums.rewardStatus

export type orderType = $Enums.orderType

export const orderType: typeof $Enums.orderType

export type NftType = $Enums.NftType

export const NftType: typeof $Enums.NftType

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.views`: Exposes CRUD operations for the **Views** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Views
    * const views = await prisma.views.findMany()
    * ```
    */
  get views(): Prisma.ViewsDelegate<ExtArgs>;

  /**
   * `prisma.likes`: Exposes CRUD operations for the **Likes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.likes.findMany()
    * ```
    */
  get likes(): Prisma.LikesDelegate<ExtArgs>;

  /**
   * `prisma.tasks`: Exposes CRUD operations for the **Tasks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.tasks.findMany()
    * ```
    */
  get tasks(): Prisma.TasksDelegate<ExtArgs>;

  /**
   * `prisma.particpated`: Exposes CRUD operations for the **Particpated** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Particpateds
    * const particpateds = await prisma.particpated.findMany()
    * ```
    */
  get particpated(): Prisma.ParticpatedDelegate<ExtArgs>;

  /**
   * `prisma.auctionBids`: Exposes CRUD operations for the **AuctionBids** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuctionBids
    * const auctionBids = await prisma.auctionBids.findMany()
    * ```
    */
  get auctionBids(): Prisma.AuctionBidsDelegate<ExtArgs>;

  /**
   * `prisma.nfts`: Exposes CRUD operations for the **Nfts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nfts
    * const nfts = await prisma.nfts.findMany()
    * ```
    */
  get nfts(): Prisma.NftsDelegate<ExtArgs>;

  /**
   * `prisma.transactions`: Exposes CRUD operations for the **Transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transactions.findMany()
    * ```
    */
  get transactions(): Prisma.TransactionsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.17.0
   * Query Engine version: 393aa359c9ad4a4bb28630fb5613f9c281cde053
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Views: 'Views',
    Likes: 'Likes',
    Tasks: 'Tasks',
    Particpated: 'Particpated',
    AuctionBids: 'AuctionBids',
    Nfts: 'Nfts',
    Transactions: 'Transactions'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "views" | "likes" | "tasks" | "particpated" | "auctionBids" | "nfts" | "transactions"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Views: {
        payload: Prisma.$ViewsPayload<ExtArgs>
        fields: Prisma.ViewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>
          }
          findFirst: {
            args: Prisma.ViewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>
          }
          findMany: {
            args: Prisma.ViewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>[]
          }
          create: {
            args: Prisma.ViewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>
          }
          createMany: {
            args: Prisma.ViewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ViewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>[]
          }
          delete: {
            args: Prisma.ViewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>
          }
          update: {
            args: Prisma.ViewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>
          }
          deleteMany: {
            args: Prisma.ViewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ViewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>
          }
          aggregate: {
            args: Prisma.ViewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViews>
          }
          groupBy: {
            args: Prisma.ViewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViewsCountArgs<ExtArgs>
            result: $Utils.Optional<ViewsCountAggregateOutputType> | number
          }
        }
      }
      Likes: {
        payload: Prisma.$LikesPayload<ExtArgs>
        fields: Prisma.LikesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          findFirst: {
            args: Prisma.LikesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          findMany: {
            args: Prisma.LikesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>[]
          }
          create: {
            args: Prisma.LikesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          createMany: {
            args: Prisma.LikesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>[]
          }
          delete: {
            args: Prisma.LikesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          update: {
            args: Prisma.LikesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          deleteMany: {
            args: Prisma.LikesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LikesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          aggregate: {
            args: Prisma.LikesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLikes>
          }
          groupBy: {
            args: Prisma.LikesGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikesGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikesCountArgs<ExtArgs>
            result: $Utils.Optional<LikesCountAggregateOutputType> | number
          }
        }
      }
      Tasks: {
        payload: Prisma.$TasksPayload<ExtArgs>
        fields: Prisma.TasksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TasksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TasksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          findFirst: {
            args: Prisma.TasksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TasksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          findMany: {
            args: Prisma.TasksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>[]
          }
          create: {
            args: Prisma.TasksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          createMany: {
            args: Prisma.TasksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TasksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>[]
          }
          delete: {
            args: Prisma.TasksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          update: {
            args: Prisma.TasksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          deleteMany: {
            args: Prisma.TasksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TasksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TasksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          aggregate: {
            args: Prisma.TasksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTasks>
          }
          groupBy: {
            args: Prisma.TasksGroupByArgs<ExtArgs>
            result: $Utils.Optional<TasksGroupByOutputType>[]
          }
          count: {
            args: Prisma.TasksCountArgs<ExtArgs>
            result: $Utils.Optional<TasksCountAggregateOutputType> | number
          }
        }
      }
      Particpated: {
        payload: Prisma.$ParticpatedPayload<ExtArgs>
        fields: Prisma.ParticpatedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticpatedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticpatedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticpatedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticpatedPayload>
          }
          findFirst: {
            args: Prisma.ParticpatedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticpatedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticpatedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticpatedPayload>
          }
          findMany: {
            args: Prisma.ParticpatedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticpatedPayload>[]
          }
          create: {
            args: Prisma.ParticpatedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticpatedPayload>
          }
          createMany: {
            args: Prisma.ParticpatedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticpatedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticpatedPayload>[]
          }
          delete: {
            args: Prisma.ParticpatedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticpatedPayload>
          }
          update: {
            args: Prisma.ParticpatedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticpatedPayload>
          }
          deleteMany: {
            args: Prisma.ParticpatedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticpatedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ParticpatedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticpatedPayload>
          }
          aggregate: {
            args: Prisma.ParticpatedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticpated>
          }
          groupBy: {
            args: Prisma.ParticpatedGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticpatedGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticpatedCountArgs<ExtArgs>
            result: $Utils.Optional<ParticpatedCountAggregateOutputType> | number
          }
        }
      }
      AuctionBids: {
        payload: Prisma.$AuctionBidsPayload<ExtArgs>
        fields: Prisma.AuctionBidsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuctionBidsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionBidsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuctionBidsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionBidsPayload>
          }
          findFirst: {
            args: Prisma.AuctionBidsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionBidsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuctionBidsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionBidsPayload>
          }
          findMany: {
            args: Prisma.AuctionBidsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionBidsPayload>[]
          }
          create: {
            args: Prisma.AuctionBidsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionBidsPayload>
          }
          createMany: {
            args: Prisma.AuctionBidsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuctionBidsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionBidsPayload>[]
          }
          delete: {
            args: Prisma.AuctionBidsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionBidsPayload>
          }
          update: {
            args: Prisma.AuctionBidsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionBidsPayload>
          }
          deleteMany: {
            args: Prisma.AuctionBidsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuctionBidsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuctionBidsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionBidsPayload>
          }
          aggregate: {
            args: Prisma.AuctionBidsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuctionBids>
          }
          groupBy: {
            args: Prisma.AuctionBidsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuctionBidsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuctionBidsCountArgs<ExtArgs>
            result: $Utils.Optional<AuctionBidsCountAggregateOutputType> | number
          }
        }
      }
      Nfts: {
        payload: Prisma.$NftsPayload<ExtArgs>
        fields: Prisma.NftsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NftsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NftsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NftsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NftsPayload>
          }
          findFirst: {
            args: Prisma.NftsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NftsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NftsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NftsPayload>
          }
          findMany: {
            args: Prisma.NftsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NftsPayload>[]
          }
          create: {
            args: Prisma.NftsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NftsPayload>
          }
          createMany: {
            args: Prisma.NftsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NftsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NftsPayload>[]
          }
          delete: {
            args: Prisma.NftsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NftsPayload>
          }
          update: {
            args: Prisma.NftsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NftsPayload>
          }
          deleteMany: {
            args: Prisma.NftsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NftsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NftsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NftsPayload>
          }
          aggregate: {
            args: Prisma.NftsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNfts>
          }
          groupBy: {
            args: Prisma.NftsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NftsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NftsCountArgs<ExtArgs>
            result: $Utils.Optional<NftsCountAggregateOutputType> | number
          }
        }
      }
      Transactions: {
        payload: Prisma.$TransactionsPayload<ExtArgs>
        fields: Prisma.TransactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          findFirst: {
            args: Prisma.TransactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          findMany: {
            args: Prisma.TransactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          create: {
            args: Prisma.TransactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          createMany: {
            args: Prisma.TransactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          delete: {
            args: Prisma.TransactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          update: {
            args: Prisma.TransactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          deleteMany: {
            args: Prisma.TransactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          aggregate: {
            args: Prisma.TransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactions>
          }
          groupBy: {
            args: Prisma.TransactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionsCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    rewards: number
    nfts: number
    views: number
    auctions: number
    likes: number
    transactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rewards?: boolean | UserCountOutputTypeCountRewardsArgs
    nfts?: boolean | UserCountOutputTypeCountNftsArgs
    views?: boolean | UserCountOutputTypeCountViewsArgs
    auctions?: boolean | UserCountOutputTypeCountAuctionsArgs
    likes?: boolean | UserCountOutputTypeCountLikesArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticpatedWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NftsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuctionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuctionBidsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
  }


  /**
   * Count Type NftsCountOutputType
   */

  export type NftsCountOutputType = {
    views: number
    likes: number
    rewardWinners: number
    rewardTasks: number
    AuctionBids: number
    transactions: number
  }

  export type NftsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    views?: boolean | NftsCountOutputTypeCountViewsArgs
    likes?: boolean | NftsCountOutputTypeCountLikesArgs
    rewardWinners?: boolean | NftsCountOutputTypeCountRewardWinnersArgs
    rewardTasks?: boolean | NftsCountOutputTypeCountRewardTasksArgs
    AuctionBids?: boolean | NftsCountOutputTypeCountAuctionBidsArgs
    transactions?: boolean | NftsCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * NftsCountOutputType without action
   */
  export type NftsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NftsCountOutputType
     */
    select?: NftsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NftsCountOutputType without action
   */
  export type NftsCountOutputTypeCountViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewsWhereInput
  }

  /**
   * NftsCountOutputType without action
   */
  export type NftsCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikesWhereInput
  }

  /**
   * NftsCountOutputType without action
   */
  export type NftsCountOutputTypeCountRewardWinnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticpatedWhereInput
  }

  /**
   * NftsCountOutputType without action
   */
  export type NftsCountOutputTypeCountRewardTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TasksWhereInput
  }

  /**
   * NftsCountOutputType without action
   */
  export type NftsCountOutputTypeCountAuctionBidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuctionBidsWhereInput
  }

  /**
   * NftsCountOutputType without action
   */
  export type NftsCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    points: number | null
  }

  export type UserSumAggregateOutputType = {
    points: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    points: number | null
    walletAddress: string | null
    twitter: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    points: number | null
    walletAddress: string | null
    twitter: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    points: number
    walletAddress: number
    twitter: number
    createdAt: number
    updatedAt: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    points?: true
  }

  export type UserSumAggregateInputType = {
    points?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    points?: true
    walletAddress?: true
    twitter?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    points?: true
    walletAddress?: true
    twitter?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    points?: true
    walletAddress?: true
    twitter?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string | null
    name: string | null
    points: number
    walletAddress: string
    twitter: string | null
    createdAt: Date
    updatedAt: Date
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    points?: boolean
    walletAddress?: boolean
    twitter?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    rewards?: boolean | User$rewardsArgs<ExtArgs>
    nfts?: boolean | User$nftsArgs<ExtArgs>
    views?: boolean | User$viewsArgs<ExtArgs>
    auctions?: boolean | User$auctionsArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    points?: boolean
    walletAddress?: boolean
    twitter?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    points?: boolean
    walletAddress?: boolean
    twitter?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rewards?: boolean | User$rewardsArgs<ExtArgs>
    nfts?: boolean | User$nftsArgs<ExtArgs>
    views?: boolean | User$viewsArgs<ExtArgs>
    auctions?: boolean | User$auctionsArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      rewards: Prisma.$ParticpatedPayload<ExtArgs>[]
      nfts: Prisma.$NftsPayload<ExtArgs>[]
      views: Prisma.$ViewsPayload<ExtArgs>[]
      auctions: Prisma.$AuctionBidsPayload<ExtArgs>[]
      likes: Prisma.$LikesPayload<ExtArgs>[]
      transactions: Prisma.$TransactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      name: string | null
      points: number
      walletAddress: string
      twitter: string | null
      createdAt: Date
      updatedAt: Date
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rewards<T extends User$rewardsArgs<ExtArgs> = {}>(args?: Subset<T, User$rewardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticpatedPayload<ExtArgs>, T, "findMany"> | Null>
    nfts<T extends User$nftsArgs<ExtArgs> = {}>(args?: Subset<T, User$nftsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NftsPayload<ExtArgs>, T, "findMany"> | Null>
    views<T extends User$viewsArgs<ExtArgs> = {}>(args?: Subset<T, User$viewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "findMany"> | Null>
    auctions<T extends User$auctionsArgs<ExtArgs> = {}>(args?: Subset<T, User$auctionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionBidsPayload<ExtArgs>, T, "findMany"> | Null>
    likes<T extends User$likesArgs<ExtArgs> = {}>(args?: Subset<T, User$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findMany"> | Null>
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly points: FieldRef<"User", 'Int'>
    readonly walletAddress: FieldRef<"User", 'String'>
    readonly twitter: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.rewards
   */
  export type User$rewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Particpated
     */
    select?: ParticpatedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticpatedInclude<ExtArgs> | null
    where?: ParticpatedWhereInput
    orderBy?: ParticpatedOrderByWithRelationInput | ParticpatedOrderByWithRelationInput[]
    cursor?: ParticpatedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticpatedScalarFieldEnum | ParticpatedScalarFieldEnum[]
  }

  /**
   * User.nfts
   */
  export type User$nftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nfts
     */
    select?: NftsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NftsInclude<ExtArgs> | null
    where?: NftsWhereInput
    orderBy?: NftsOrderByWithRelationInput | NftsOrderByWithRelationInput[]
    cursor?: NftsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NftsScalarFieldEnum | NftsScalarFieldEnum[]
  }

  /**
   * User.views
   */
  export type User$viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    where?: ViewsWhereInput
    orderBy?: ViewsOrderByWithRelationInput | ViewsOrderByWithRelationInput[]
    cursor?: ViewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }

  /**
   * User.auctions
   */
  export type User$auctionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionBids
     */
    select?: AuctionBidsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionBidsInclude<ExtArgs> | null
    where?: AuctionBidsWhereInput
    orderBy?: AuctionBidsOrderByWithRelationInput | AuctionBidsOrderByWithRelationInput[]
    cursor?: AuctionBidsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuctionBidsScalarFieldEnum | AuctionBidsScalarFieldEnum[]
  }

  /**
   * User.likes
   */
  export type User$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    where?: LikesWhereInput
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    cursor?: LikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    cursor?: TransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Views
   */

  export type AggregateViews = {
    _count: ViewsCountAggregateOutputType | null
    _min: ViewsMinAggregateOutputType | null
    _max: ViewsMaxAggregateOutputType | null
  }

  export type ViewsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    nftId: string | null
    createdAt: Date | null
  }

  export type ViewsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    nftId: string | null
    createdAt: Date | null
  }

  export type ViewsCountAggregateOutputType = {
    id: number
    userId: number
    nftId: number
    createdAt: number
    _all: number
  }


  export type ViewsMinAggregateInputType = {
    id?: true
    userId?: true
    nftId?: true
    createdAt?: true
  }

  export type ViewsMaxAggregateInputType = {
    id?: true
    userId?: true
    nftId?: true
    createdAt?: true
  }

  export type ViewsCountAggregateInputType = {
    id?: true
    userId?: true
    nftId?: true
    createdAt?: true
    _all?: true
  }

  export type ViewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Views to aggregate.
     */
    where?: ViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewsOrderByWithRelationInput | ViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Views
    **/
    _count?: true | ViewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewsMaxAggregateInputType
  }

  export type GetViewsAggregateType<T extends ViewsAggregateArgs> = {
        [P in keyof T & keyof AggregateViews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViews[P]>
      : GetScalarType<T[P], AggregateViews[P]>
  }




  export type ViewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewsWhereInput
    orderBy?: ViewsOrderByWithAggregationInput | ViewsOrderByWithAggregationInput[]
    by: ViewsScalarFieldEnum[] | ViewsScalarFieldEnum
    having?: ViewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewsCountAggregateInputType | true
    _min?: ViewsMinAggregateInputType
    _max?: ViewsMaxAggregateInputType
  }

  export type ViewsGroupByOutputType = {
    id: string
    userId: string
    nftId: string
    createdAt: Date
    _count: ViewsCountAggregateOutputType | null
    _min: ViewsMinAggregateOutputType | null
    _max: ViewsMaxAggregateOutputType | null
  }

  type GetViewsGroupByPayload<T extends ViewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViewsGroupByOutputType[P]>
            : GetScalarType<T[P], ViewsGroupByOutputType[P]>
        }
      >
    >


  export type ViewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nftId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    nfts?: boolean | NftsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["views"]>

  export type ViewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nftId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    nfts?: boolean | NftsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["views"]>

  export type ViewsSelectScalar = {
    id?: boolean
    userId?: boolean
    nftId?: boolean
    createdAt?: boolean
  }

  export type ViewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    nfts?: boolean | NftsDefaultArgs<ExtArgs>
  }
  export type ViewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    nfts?: boolean | NftsDefaultArgs<ExtArgs>
  }

  export type $ViewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Views"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      nfts: Prisma.$NftsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      nftId: string
      createdAt: Date
    }, ExtArgs["result"]["views"]>
    composites: {}
  }

  type ViewsGetPayload<S extends boolean | null | undefined | ViewsDefaultArgs> = $Result.GetResult<Prisma.$ViewsPayload, S>

  type ViewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ViewsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ViewsCountAggregateInputType | true
    }

  export interface ViewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Views'], meta: { name: 'Views' } }
    /**
     * Find zero or one Views that matches the filter.
     * @param {ViewsFindUniqueArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViewsFindUniqueArgs>(args: SelectSubset<T, ViewsFindUniqueArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Views that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ViewsFindUniqueOrThrowArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViewsFindUniqueOrThrowArgs>(args: SelectSubset<T, ViewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Views that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsFindFirstArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViewsFindFirstArgs>(args?: SelectSubset<T, ViewsFindFirstArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Views that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsFindFirstOrThrowArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViewsFindFirstOrThrowArgs>(args?: SelectSubset<T, ViewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Views that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Views
     * const views = await prisma.views.findMany()
     * 
     * // Get first 10 Views
     * const views = await prisma.views.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viewsWithIdOnly = await prisma.views.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ViewsFindManyArgs>(args?: SelectSubset<T, ViewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Views.
     * @param {ViewsCreateArgs} args - Arguments to create a Views.
     * @example
     * // Create one Views
     * const Views = await prisma.views.create({
     *   data: {
     *     // ... data to create a Views
     *   }
     * })
     * 
     */
    create<T extends ViewsCreateArgs>(args: SelectSubset<T, ViewsCreateArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Views.
     * @param {ViewsCreateManyArgs} args - Arguments to create many Views.
     * @example
     * // Create many Views
     * const views = await prisma.views.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViewsCreateManyArgs>(args?: SelectSubset<T, ViewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Views and returns the data saved in the database.
     * @param {ViewsCreateManyAndReturnArgs} args - Arguments to create many Views.
     * @example
     * // Create many Views
     * const views = await prisma.views.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Views and only return the `id`
     * const viewsWithIdOnly = await prisma.views.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ViewsCreateManyAndReturnArgs>(args?: SelectSubset<T, ViewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Views.
     * @param {ViewsDeleteArgs} args - Arguments to delete one Views.
     * @example
     * // Delete one Views
     * const Views = await prisma.views.delete({
     *   where: {
     *     // ... filter to delete one Views
     *   }
     * })
     * 
     */
    delete<T extends ViewsDeleteArgs>(args: SelectSubset<T, ViewsDeleteArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Views.
     * @param {ViewsUpdateArgs} args - Arguments to update one Views.
     * @example
     * // Update one Views
     * const views = await prisma.views.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViewsUpdateArgs>(args: SelectSubset<T, ViewsUpdateArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Views.
     * @param {ViewsDeleteManyArgs} args - Arguments to filter Views to delete.
     * @example
     * // Delete a few Views
     * const { count } = await prisma.views.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViewsDeleteManyArgs>(args?: SelectSubset<T, ViewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Views
     * const views = await prisma.views.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViewsUpdateManyArgs>(args: SelectSubset<T, ViewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Views.
     * @param {ViewsUpsertArgs} args - Arguments to update or create a Views.
     * @example
     * // Update or create a Views
     * const views = await prisma.views.upsert({
     *   create: {
     *     // ... data to create a Views
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Views we want to update
     *   }
     * })
     */
    upsert<T extends ViewsUpsertArgs>(args: SelectSubset<T, ViewsUpsertArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsCountArgs} args - Arguments to filter Views to count.
     * @example
     * // Count the number of Views
     * const count = await prisma.views.count({
     *   where: {
     *     // ... the filter for the Views we want to count
     *   }
     * })
    **/
    count<T extends ViewsCountArgs>(
      args?: Subset<T, ViewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ViewsAggregateArgs>(args: Subset<T, ViewsAggregateArgs>): Prisma.PrismaPromise<GetViewsAggregateType<T>>

    /**
     * Group by Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ViewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViewsGroupByArgs['orderBy'] }
        : { orderBy?: ViewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ViewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Views model
   */
  readonly fields: ViewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Views.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    nfts<T extends NftsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NftsDefaultArgs<ExtArgs>>): Prisma__NftsClient<$Result.GetResult<Prisma.$NftsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Views model
   */ 
  interface ViewsFieldRefs {
    readonly id: FieldRef<"Views", 'String'>
    readonly userId: FieldRef<"Views", 'String'>
    readonly nftId: FieldRef<"Views", 'String'>
    readonly createdAt: FieldRef<"Views", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Views findUnique
   */
  export type ViewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * Filter, which Views to fetch.
     */
    where: ViewsWhereUniqueInput
  }

  /**
   * Views findUniqueOrThrow
   */
  export type ViewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * Filter, which Views to fetch.
     */
    where: ViewsWhereUniqueInput
  }

  /**
   * Views findFirst
   */
  export type ViewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * Filter, which Views to fetch.
     */
    where?: ViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewsOrderByWithRelationInput | ViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Views.
     */
    cursor?: ViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Views.
     */
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }

  /**
   * Views findFirstOrThrow
   */
  export type ViewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * Filter, which Views to fetch.
     */
    where?: ViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewsOrderByWithRelationInput | ViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Views.
     */
    cursor?: ViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Views.
     */
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }

  /**
   * Views findMany
   */
  export type ViewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * Filter, which Views to fetch.
     */
    where?: ViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewsOrderByWithRelationInput | ViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Views.
     */
    cursor?: ViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }

  /**
   * Views create
   */
  export type ViewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * The data needed to create a Views.
     */
    data: XOR<ViewsCreateInput, ViewsUncheckedCreateInput>
  }

  /**
   * Views createMany
   */
  export type ViewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Views.
     */
    data: ViewsCreateManyInput | ViewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Views createManyAndReturn
   */
  export type ViewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Views.
     */
    data: ViewsCreateManyInput | ViewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Views update
   */
  export type ViewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * The data needed to update a Views.
     */
    data: XOR<ViewsUpdateInput, ViewsUncheckedUpdateInput>
    /**
     * Choose, which Views to update.
     */
    where: ViewsWhereUniqueInput
  }

  /**
   * Views updateMany
   */
  export type ViewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Views.
     */
    data: XOR<ViewsUpdateManyMutationInput, ViewsUncheckedUpdateManyInput>
    /**
     * Filter which Views to update
     */
    where?: ViewsWhereInput
  }

  /**
   * Views upsert
   */
  export type ViewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * The filter to search for the Views to update in case it exists.
     */
    where: ViewsWhereUniqueInput
    /**
     * In case the Views found by the `where` argument doesn't exist, create a new Views with this data.
     */
    create: XOR<ViewsCreateInput, ViewsUncheckedCreateInput>
    /**
     * In case the Views was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViewsUpdateInput, ViewsUncheckedUpdateInput>
  }

  /**
   * Views delete
   */
  export type ViewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * Filter which Views to delete.
     */
    where: ViewsWhereUniqueInput
  }

  /**
   * Views deleteMany
   */
  export type ViewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Views to delete
     */
    where?: ViewsWhereInput
  }

  /**
   * Views without action
   */
  export type ViewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
  }


  /**
   * Model Likes
   */

  export type AggregateLikes = {
    _count: LikesCountAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  export type LikesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    nftId: string | null
    createdAt: Date | null
  }

  export type LikesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    nftId: string | null
    createdAt: Date | null
  }

  export type LikesCountAggregateOutputType = {
    id: number
    userId: number
    nftId: number
    createdAt: number
    _all: number
  }


  export type LikesMinAggregateInputType = {
    id?: true
    userId?: true
    nftId?: true
    createdAt?: true
  }

  export type LikesMaxAggregateInputType = {
    id?: true
    userId?: true
    nftId?: true
    createdAt?: true
  }

  export type LikesCountAggregateInputType = {
    id?: true
    userId?: true
    nftId?: true
    createdAt?: true
    _all?: true
  }

  export type LikesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to aggregate.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likes
    **/
    _count?: true | LikesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikesMaxAggregateInputType
  }

  export type GetLikesAggregateType<T extends LikesAggregateArgs> = {
        [P in keyof T & keyof AggregateLikes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikes[P]>
      : GetScalarType<T[P], AggregateLikes[P]>
  }




  export type LikesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikesWhereInput
    orderBy?: LikesOrderByWithAggregationInput | LikesOrderByWithAggregationInput[]
    by: LikesScalarFieldEnum[] | LikesScalarFieldEnum
    having?: LikesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikesCountAggregateInputType | true
    _min?: LikesMinAggregateInputType
    _max?: LikesMaxAggregateInputType
  }

  export type LikesGroupByOutputType = {
    id: string
    userId: string
    nftId: string
    createdAt: Date
    _count: LikesCountAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  type GetLikesGroupByPayload<T extends LikesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikesGroupByOutputType[P]>
            : GetScalarType<T[P], LikesGroupByOutputType[P]>
        }
      >
    >


  export type LikesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nftId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    nfts?: boolean | NftsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type LikesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nftId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    nfts?: boolean | NftsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type LikesSelectScalar = {
    id?: boolean
    userId?: boolean
    nftId?: boolean
    createdAt?: boolean
  }

  export type LikesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    nfts?: boolean | NftsDefaultArgs<ExtArgs>
  }
  export type LikesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    nfts?: boolean | NftsDefaultArgs<ExtArgs>
  }

  export type $LikesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Likes"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      nfts: Prisma.$NftsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      nftId: string
      createdAt: Date
    }, ExtArgs["result"]["likes"]>
    composites: {}
  }

  type LikesGetPayload<S extends boolean | null | undefined | LikesDefaultArgs> = $Result.GetResult<Prisma.$LikesPayload, S>

  type LikesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LikesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LikesCountAggregateInputType | true
    }

  export interface LikesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Likes'], meta: { name: 'Likes' } }
    /**
     * Find zero or one Likes that matches the filter.
     * @param {LikesFindUniqueArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikesFindUniqueArgs>(args: SelectSubset<T, LikesFindUniqueArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Likes that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LikesFindUniqueOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikesFindUniqueOrThrowArgs>(args: SelectSubset<T, LikesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindFirstArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikesFindFirstArgs>(args?: SelectSubset<T, LikesFindFirstArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Likes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindFirstOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikesFindFirstOrThrowArgs>(args?: SelectSubset<T, LikesFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.likes.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.likes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likesWithIdOnly = await prisma.likes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikesFindManyArgs>(args?: SelectSubset<T, LikesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Likes.
     * @param {LikesCreateArgs} args - Arguments to create a Likes.
     * @example
     * // Create one Likes
     * const Likes = await prisma.likes.create({
     *   data: {
     *     // ... data to create a Likes
     *   }
     * })
     * 
     */
    create<T extends LikesCreateArgs>(args: SelectSubset<T, LikesCreateArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Likes.
     * @param {LikesCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const likes = await prisma.likes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikesCreateManyArgs>(args?: SelectSubset<T, LikesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Likes and returns the data saved in the database.
     * @param {LikesCreateManyAndReturnArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const likes = await prisma.likes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Likes and only return the `id`
     * const likesWithIdOnly = await prisma.likes.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikesCreateManyAndReturnArgs>(args?: SelectSubset<T, LikesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Likes.
     * @param {LikesDeleteArgs} args - Arguments to delete one Likes.
     * @example
     * // Delete one Likes
     * const Likes = await prisma.likes.delete({
     *   where: {
     *     // ... filter to delete one Likes
     *   }
     * })
     * 
     */
    delete<T extends LikesDeleteArgs>(args: SelectSubset<T, LikesDeleteArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Likes.
     * @param {LikesUpdateArgs} args - Arguments to update one Likes.
     * @example
     * // Update one Likes
     * const likes = await prisma.likes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikesUpdateArgs>(args: SelectSubset<T, LikesUpdateArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Likes.
     * @param {LikesDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.likes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikesDeleteManyArgs>(args?: SelectSubset<T, LikesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const likes = await prisma.likes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikesUpdateManyArgs>(args: SelectSubset<T, LikesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Likes.
     * @param {LikesUpsertArgs} args - Arguments to update or create a Likes.
     * @example
     * // Update or create a Likes
     * const likes = await prisma.likes.upsert({
     *   create: {
     *     // ... data to create a Likes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Likes we want to update
     *   }
     * })
     */
    upsert<T extends LikesUpsertArgs>(args: SelectSubset<T, LikesUpsertArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.likes.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikesCountArgs>(
      args?: Subset<T, LikesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikesAggregateArgs>(args: Subset<T, LikesAggregateArgs>): Prisma.PrismaPromise<GetLikesAggregateType<T>>

    /**
     * Group by Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LikesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikesGroupByArgs['orderBy'] }
        : { orderBy?: LikesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LikesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Likes model
   */
  readonly fields: LikesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Likes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    nfts<T extends NftsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NftsDefaultArgs<ExtArgs>>): Prisma__NftsClient<$Result.GetResult<Prisma.$NftsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Likes model
   */ 
  interface LikesFieldRefs {
    readonly id: FieldRef<"Likes", 'String'>
    readonly userId: FieldRef<"Likes", 'String'>
    readonly nftId: FieldRef<"Likes", 'String'>
    readonly createdAt: FieldRef<"Likes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Likes findUnique
   */
  export type LikesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes findUniqueOrThrow
   */
  export type LikesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes findFirst
   */
  export type LikesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Likes findFirstOrThrow
   */
  export type LikesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Likes findMany
   */
  export type LikesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likes.
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Likes create
   */
  export type LikesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * The data needed to create a Likes.
     */
    data: XOR<LikesCreateInput, LikesUncheckedCreateInput>
  }

  /**
   * Likes createMany
   */
  export type LikesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Likes.
     */
    data: LikesCreateManyInput | LikesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Likes createManyAndReturn
   */
  export type LikesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Likes.
     */
    data: LikesCreateManyInput | LikesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Likes update
   */
  export type LikesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * The data needed to update a Likes.
     */
    data: XOR<LikesUpdateInput, LikesUncheckedUpdateInput>
    /**
     * Choose, which Likes to update.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes updateMany
   */
  export type LikesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Likes.
     */
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikesWhereInput
  }

  /**
   * Likes upsert
   */
  export type LikesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * The filter to search for the Likes to update in case it exists.
     */
    where: LikesWhereUniqueInput
    /**
     * In case the Likes found by the `where` argument doesn't exist, create a new Likes with this data.
     */
    create: XOR<LikesCreateInput, LikesUncheckedCreateInput>
    /**
     * In case the Likes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikesUpdateInput, LikesUncheckedUpdateInput>
  }

  /**
   * Likes delete
   */
  export type LikesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter which Likes to delete.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes deleteMany
   */
  export type LikesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to delete
     */
    where?: LikesWhereInput
  }

  /**
   * Likes without action
   */
  export type LikesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
  }


  /**
   * Model Tasks
   */

  export type AggregateTasks = {
    _count: TasksCountAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  export type TasksMinAggregateOutputType = {
    id: string | null
    nftId: string | null
    prompt: string | null
  }

  export type TasksMaxAggregateOutputType = {
    id: string | null
    nftId: string | null
    prompt: string | null
  }

  export type TasksCountAggregateOutputType = {
    id: number
    nftId: number
    prompt: number
    _all: number
  }


  export type TasksMinAggregateInputType = {
    id?: true
    nftId?: true
    prompt?: true
  }

  export type TasksMaxAggregateInputType = {
    id?: true
    nftId?: true
    prompt?: true
  }

  export type TasksCountAggregateInputType = {
    id?: true
    nftId?: true
    prompt?: true
    _all?: true
  }

  export type TasksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to aggregate.
     */
    where?: TasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TasksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TasksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TasksMaxAggregateInputType
  }

  export type GetTasksAggregateType<T extends TasksAggregateArgs> = {
        [P in keyof T & keyof AggregateTasks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTasks[P]>
      : GetScalarType<T[P], AggregateTasks[P]>
  }




  export type TasksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TasksWhereInput
    orderBy?: TasksOrderByWithAggregationInput | TasksOrderByWithAggregationInput[]
    by: TasksScalarFieldEnum[] | TasksScalarFieldEnum
    having?: TasksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TasksCountAggregateInputType | true
    _min?: TasksMinAggregateInputType
    _max?: TasksMaxAggregateInputType
  }

  export type TasksGroupByOutputType = {
    id: string
    nftId: string
    prompt: string
    _count: TasksCountAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  type GetTasksGroupByPayload<T extends TasksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TasksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TasksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TasksGroupByOutputType[P]>
            : GetScalarType<T[P], TasksGroupByOutputType[P]>
        }
      >
    >


  export type TasksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nftId?: boolean
    prompt?: boolean
    nfts?: boolean | NftsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type TasksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nftId?: boolean
    prompt?: boolean
    nfts?: boolean | NftsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type TasksSelectScalar = {
    id?: boolean
    nftId?: boolean
    prompt?: boolean
  }

  export type TasksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nfts?: boolean | NftsDefaultArgs<ExtArgs>
  }
  export type TasksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nfts?: boolean | NftsDefaultArgs<ExtArgs>
  }

  export type $TasksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tasks"
    objects: {
      nfts: Prisma.$NftsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nftId: string
      prompt: string
    }, ExtArgs["result"]["tasks"]>
    composites: {}
  }

  type TasksGetPayload<S extends boolean | null | undefined | TasksDefaultArgs> = $Result.GetResult<Prisma.$TasksPayload, S>

  type TasksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TasksFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TasksCountAggregateInputType | true
    }

  export interface TasksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tasks'], meta: { name: 'Tasks' } }
    /**
     * Find zero or one Tasks that matches the filter.
     * @param {TasksFindUniqueArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TasksFindUniqueArgs>(args: SelectSubset<T, TasksFindUniqueArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tasks that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TasksFindUniqueOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TasksFindUniqueOrThrowArgs>(args: SelectSubset<T, TasksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksFindFirstArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TasksFindFirstArgs>(args?: SelectSubset<T, TasksFindFirstArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tasks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksFindFirstOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TasksFindFirstOrThrowArgs>(args?: SelectSubset<T, TasksFindFirstOrThrowArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.tasks.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.tasks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tasksWithIdOnly = await prisma.tasks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TasksFindManyArgs>(args?: SelectSubset<T, TasksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tasks.
     * @param {TasksCreateArgs} args - Arguments to create a Tasks.
     * @example
     * // Create one Tasks
     * const Tasks = await prisma.tasks.create({
     *   data: {
     *     // ... data to create a Tasks
     *   }
     * })
     * 
     */
    create<T extends TasksCreateArgs>(args: SelectSubset<T, TasksCreateArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tasks.
     * @param {TasksCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const tasks = await prisma.tasks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TasksCreateManyArgs>(args?: SelectSubset<T, TasksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TasksCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const tasks = await prisma.tasks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const tasksWithIdOnly = await prisma.tasks.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TasksCreateManyAndReturnArgs>(args?: SelectSubset<T, TasksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Tasks.
     * @param {TasksDeleteArgs} args - Arguments to delete one Tasks.
     * @example
     * // Delete one Tasks
     * const Tasks = await prisma.tasks.delete({
     *   where: {
     *     // ... filter to delete one Tasks
     *   }
     * })
     * 
     */
    delete<T extends TasksDeleteArgs>(args: SelectSubset<T, TasksDeleteArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tasks.
     * @param {TasksUpdateArgs} args - Arguments to update one Tasks.
     * @example
     * // Update one Tasks
     * const tasks = await prisma.tasks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TasksUpdateArgs>(args: SelectSubset<T, TasksUpdateArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tasks.
     * @param {TasksDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.tasks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TasksDeleteManyArgs>(args?: SelectSubset<T, TasksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const tasks = await prisma.tasks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TasksUpdateManyArgs>(args: SelectSubset<T, TasksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tasks.
     * @param {TasksUpsertArgs} args - Arguments to update or create a Tasks.
     * @example
     * // Update or create a Tasks
     * const tasks = await prisma.tasks.upsert({
     *   create: {
     *     // ... data to create a Tasks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tasks we want to update
     *   }
     * })
     */
    upsert<T extends TasksUpsertArgs>(args: SelectSubset<T, TasksUpsertArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.tasks.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TasksCountArgs>(
      args?: Subset<T, TasksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TasksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TasksAggregateArgs>(args: Subset<T, TasksAggregateArgs>): Prisma.PrismaPromise<GetTasksAggregateType<T>>

    /**
     * Group by Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TasksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TasksGroupByArgs['orderBy'] }
        : { orderBy?: TasksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TasksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTasksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tasks model
   */
  readonly fields: TasksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tasks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TasksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    nfts<T extends NftsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NftsDefaultArgs<ExtArgs>>): Prisma__NftsClient<$Result.GetResult<Prisma.$NftsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tasks model
   */ 
  interface TasksFieldRefs {
    readonly id: FieldRef<"Tasks", 'String'>
    readonly nftId: FieldRef<"Tasks", 'String'>
    readonly prompt: FieldRef<"Tasks", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tasks findUnique
   */
  export type TasksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where: TasksWhereUniqueInput
  }

  /**
   * Tasks findUniqueOrThrow
   */
  export type TasksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where: TasksWhereUniqueInput
  }

  /**
   * Tasks findFirst
   */
  export type TasksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * Tasks findFirstOrThrow
   */
  export type TasksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * Tasks findMany
   */
  export type TasksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * Tasks create
   */
  export type TasksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * The data needed to create a Tasks.
     */
    data: XOR<TasksCreateInput, TasksUncheckedCreateInput>
  }

  /**
   * Tasks createMany
   */
  export type TasksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TasksCreateManyInput | TasksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tasks createManyAndReturn
   */
  export type TasksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TasksCreateManyInput | TasksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tasks update
   */
  export type TasksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * The data needed to update a Tasks.
     */
    data: XOR<TasksUpdateInput, TasksUncheckedUpdateInput>
    /**
     * Choose, which Tasks to update.
     */
    where: TasksWhereUniqueInput
  }

  /**
   * Tasks updateMany
   */
  export type TasksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TasksUpdateManyMutationInput, TasksUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TasksWhereInput
  }

  /**
   * Tasks upsert
   */
  export type TasksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * The filter to search for the Tasks to update in case it exists.
     */
    where: TasksWhereUniqueInput
    /**
     * In case the Tasks found by the `where` argument doesn't exist, create a new Tasks with this data.
     */
    create: XOR<TasksCreateInput, TasksUncheckedCreateInput>
    /**
     * In case the Tasks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TasksUpdateInput, TasksUncheckedUpdateInput>
  }

  /**
   * Tasks delete
   */
  export type TasksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter which Tasks to delete.
     */
    where: TasksWhereUniqueInput
  }

  /**
   * Tasks deleteMany
   */
  export type TasksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TasksWhereInput
  }

  /**
   * Tasks without action
   */
  export type TasksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
  }


  /**
   * Model Particpated
   */

  export type AggregateParticpated = {
    _count: ParticpatedCountAggregateOutputType | null
    _avg: ParticpatedAvgAggregateOutputType | null
    _sum: ParticpatedSumAggregateOutputType | null
    _min: ParticpatedMinAggregateOutputType | null
    _max: ParticpatedMaxAggregateOutputType | null
  }

  export type ParticpatedAvgAggregateOutputType = {
    points: number | null
    accuracy: number | null
  }

  export type ParticpatedSumAggregateOutputType = {
    points: number | null
    accuracy: number | null
  }

  export type ParticpatedMinAggregateOutputType = {
    id: string | null
    creatorId: string | null
    points: number | null
    nftId: string | null
    accuracy: number | null
    createdAt: Date | null
    rewardStatus: $Enums.rewardStatus | null
  }

  export type ParticpatedMaxAggregateOutputType = {
    id: string | null
    creatorId: string | null
    points: number | null
    nftId: string | null
    accuracy: number | null
    createdAt: Date | null
    rewardStatus: $Enums.rewardStatus | null
  }

  export type ParticpatedCountAggregateOutputType = {
    id: number
    creatorId: number
    points: number
    nftId: number
    accuracy: number
    createdAt: number
    rewardStatus: number
    _all: number
  }


  export type ParticpatedAvgAggregateInputType = {
    points?: true
    accuracy?: true
  }

  export type ParticpatedSumAggregateInputType = {
    points?: true
    accuracy?: true
  }

  export type ParticpatedMinAggregateInputType = {
    id?: true
    creatorId?: true
    points?: true
    nftId?: true
    accuracy?: true
    createdAt?: true
    rewardStatus?: true
  }

  export type ParticpatedMaxAggregateInputType = {
    id?: true
    creatorId?: true
    points?: true
    nftId?: true
    accuracy?: true
    createdAt?: true
    rewardStatus?: true
  }

  export type ParticpatedCountAggregateInputType = {
    id?: true
    creatorId?: true
    points?: true
    nftId?: true
    accuracy?: true
    createdAt?: true
    rewardStatus?: true
    _all?: true
  }

  export type ParticpatedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Particpated to aggregate.
     */
    where?: ParticpatedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Particpateds to fetch.
     */
    orderBy?: ParticpatedOrderByWithRelationInput | ParticpatedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticpatedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Particpateds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Particpateds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Particpateds
    **/
    _count?: true | ParticpatedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticpatedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticpatedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticpatedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticpatedMaxAggregateInputType
  }

  export type GetParticpatedAggregateType<T extends ParticpatedAggregateArgs> = {
        [P in keyof T & keyof AggregateParticpated]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticpated[P]>
      : GetScalarType<T[P], AggregateParticpated[P]>
  }




  export type ParticpatedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticpatedWhereInput
    orderBy?: ParticpatedOrderByWithAggregationInput | ParticpatedOrderByWithAggregationInput[]
    by: ParticpatedScalarFieldEnum[] | ParticpatedScalarFieldEnum
    having?: ParticpatedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticpatedCountAggregateInputType | true
    _avg?: ParticpatedAvgAggregateInputType
    _sum?: ParticpatedSumAggregateInputType
    _min?: ParticpatedMinAggregateInputType
    _max?: ParticpatedMaxAggregateInputType
  }

  export type ParticpatedGroupByOutputType = {
    id: string
    creatorId: string
    points: number
    nftId: string
    accuracy: number
    createdAt: Date
    rewardStatus: $Enums.rewardStatus
    _count: ParticpatedCountAggregateOutputType | null
    _avg: ParticpatedAvgAggregateOutputType | null
    _sum: ParticpatedSumAggregateOutputType | null
    _min: ParticpatedMinAggregateOutputType | null
    _max: ParticpatedMaxAggregateOutputType | null
  }

  type GetParticpatedGroupByPayload<T extends ParticpatedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticpatedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticpatedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticpatedGroupByOutputType[P]>
            : GetScalarType<T[P], ParticpatedGroupByOutputType[P]>
        }
      >
    >


  export type ParticpatedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    points?: boolean
    nftId?: boolean
    accuracy?: boolean
    createdAt?: boolean
    rewardStatus?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    nft?: boolean | NftsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["particpated"]>

  export type ParticpatedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    points?: boolean
    nftId?: boolean
    accuracy?: boolean
    createdAt?: boolean
    rewardStatus?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    nft?: boolean | NftsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["particpated"]>

  export type ParticpatedSelectScalar = {
    id?: boolean
    creatorId?: boolean
    points?: boolean
    nftId?: boolean
    accuracy?: boolean
    createdAt?: boolean
    rewardStatus?: boolean
  }

  export type ParticpatedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    nft?: boolean | NftsDefaultArgs<ExtArgs>
  }
  export type ParticpatedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    nft?: boolean | NftsDefaultArgs<ExtArgs>
  }

  export type $ParticpatedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Particpated"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      nft: Prisma.$NftsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      creatorId: string
      points: number
      nftId: string
      accuracy: number
      createdAt: Date
      rewardStatus: $Enums.rewardStatus
    }, ExtArgs["result"]["particpated"]>
    composites: {}
  }

  type ParticpatedGetPayload<S extends boolean | null | undefined | ParticpatedDefaultArgs> = $Result.GetResult<Prisma.$ParticpatedPayload, S>

  type ParticpatedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ParticpatedFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ParticpatedCountAggregateInputType | true
    }

  export interface ParticpatedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Particpated'], meta: { name: 'Particpated' } }
    /**
     * Find zero or one Particpated that matches the filter.
     * @param {ParticpatedFindUniqueArgs} args - Arguments to find a Particpated
     * @example
     * // Get one Particpated
     * const particpated = await prisma.particpated.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticpatedFindUniqueArgs>(args: SelectSubset<T, ParticpatedFindUniqueArgs<ExtArgs>>): Prisma__ParticpatedClient<$Result.GetResult<Prisma.$ParticpatedPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Particpated that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ParticpatedFindUniqueOrThrowArgs} args - Arguments to find a Particpated
     * @example
     * // Get one Particpated
     * const particpated = await prisma.particpated.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticpatedFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticpatedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticpatedClient<$Result.GetResult<Prisma.$ParticpatedPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Particpated that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticpatedFindFirstArgs} args - Arguments to find a Particpated
     * @example
     * // Get one Particpated
     * const particpated = await prisma.particpated.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticpatedFindFirstArgs>(args?: SelectSubset<T, ParticpatedFindFirstArgs<ExtArgs>>): Prisma__ParticpatedClient<$Result.GetResult<Prisma.$ParticpatedPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Particpated that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticpatedFindFirstOrThrowArgs} args - Arguments to find a Particpated
     * @example
     * // Get one Particpated
     * const particpated = await prisma.particpated.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticpatedFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticpatedFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticpatedClient<$Result.GetResult<Prisma.$ParticpatedPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Particpateds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticpatedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Particpateds
     * const particpateds = await prisma.particpated.findMany()
     * 
     * // Get first 10 Particpateds
     * const particpateds = await prisma.particpated.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const particpatedWithIdOnly = await prisma.particpated.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticpatedFindManyArgs>(args?: SelectSubset<T, ParticpatedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticpatedPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Particpated.
     * @param {ParticpatedCreateArgs} args - Arguments to create a Particpated.
     * @example
     * // Create one Particpated
     * const Particpated = await prisma.particpated.create({
     *   data: {
     *     // ... data to create a Particpated
     *   }
     * })
     * 
     */
    create<T extends ParticpatedCreateArgs>(args: SelectSubset<T, ParticpatedCreateArgs<ExtArgs>>): Prisma__ParticpatedClient<$Result.GetResult<Prisma.$ParticpatedPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Particpateds.
     * @param {ParticpatedCreateManyArgs} args - Arguments to create many Particpateds.
     * @example
     * // Create many Particpateds
     * const particpated = await prisma.particpated.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticpatedCreateManyArgs>(args?: SelectSubset<T, ParticpatedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Particpateds and returns the data saved in the database.
     * @param {ParticpatedCreateManyAndReturnArgs} args - Arguments to create many Particpateds.
     * @example
     * // Create many Particpateds
     * const particpated = await prisma.particpated.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Particpateds and only return the `id`
     * const particpatedWithIdOnly = await prisma.particpated.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticpatedCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticpatedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticpatedPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Particpated.
     * @param {ParticpatedDeleteArgs} args - Arguments to delete one Particpated.
     * @example
     * // Delete one Particpated
     * const Particpated = await prisma.particpated.delete({
     *   where: {
     *     // ... filter to delete one Particpated
     *   }
     * })
     * 
     */
    delete<T extends ParticpatedDeleteArgs>(args: SelectSubset<T, ParticpatedDeleteArgs<ExtArgs>>): Prisma__ParticpatedClient<$Result.GetResult<Prisma.$ParticpatedPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Particpated.
     * @param {ParticpatedUpdateArgs} args - Arguments to update one Particpated.
     * @example
     * // Update one Particpated
     * const particpated = await prisma.particpated.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticpatedUpdateArgs>(args: SelectSubset<T, ParticpatedUpdateArgs<ExtArgs>>): Prisma__ParticpatedClient<$Result.GetResult<Prisma.$ParticpatedPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Particpateds.
     * @param {ParticpatedDeleteManyArgs} args - Arguments to filter Particpateds to delete.
     * @example
     * // Delete a few Particpateds
     * const { count } = await prisma.particpated.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticpatedDeleteManyArgs>(args?: SelectSubset<T, ParticpatedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Particpateds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticpatedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Particpateds
     * const particpated = await prisma.particpated.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticpatedUpdateManyArgs>(args: SelectSubset<T, ParticpatedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Particpated.
     * @param {ParticpatedUpsertArgs} args - Arguments to update or create a Particpated.
     * @example
     * // Update or create a Particpated
     * const particpated = await prisma.particpated.upsert({
     *   create: {
     *     // ... data to create a Particpated
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Particpated we want to update
     *   }
     * })
     */
    upsert<T extends ParticpatedUpsertArgs>(args: SelectSubset<T, ParticpatedUpsertArgs<ExtArgs>>): Prisma__ParticpatedClient<$Result.GetResult<Prisma.$ParticpatedPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Particpateds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticpatedCountArgs} args - Arguments to filter Particpateds to count.
     * @example
     * // Count the number of Particpateds
     * const count = await prisma.particpated.count({
     *   where: {
     *     // ... the filter for the Particpateds we want to count
     *   }
     * })
    **/
    count<T extends ParticpatedCountArgs>(
      args?: Subset<T, ParticpatedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticpatedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Particpated.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticpatedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParticpatedAggregateArgs>(args: Subset<T, ParticpatedAggregateArgs>): Prisma.PrismaPromise<GetParticpatedAggregateType<T>>

    /**
     * Group by Particpated.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticpatedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParticpatedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticpatedGroupByArgs['orderBy'] }
        : { orderBy?: ParticpatedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParticpatedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticpatedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Particpated model
   */
  readonly fields: ParticpatedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Particpated.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticpatedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    nft<T extends NftsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NftsDefaultArgs<ExtArgs>>): Prisma__NftsClient<$Result.GetResult<Prisma.$NftsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Particpated model
   */ 
  interface ParticpatedFieldRefs {
    readonly id: FieldRef<"Particpated", 'String'>
    readonly creatorId: FieldRef<"Particpated", 'String'>
    readonly points: FieldRef<"Particpated", 'Int'>
    readonly nftId: FieldRef<"Particpated", 'String'>
    readonly accuracy: FieldRef<"Particpated", 'Int'>
    readonly createdAt: FieldRef<"Particpated", 'DateTime'>
    readonly rewardStatus: FieldRef<"Particpated", 'rewardStatus'>
  }
    

  // Custom InputTypes
  /**
   * Particpated findUnique
   */
  export type ParticpatedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Particpated
     */
    select?: ParticpatedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticpatedInclude<ExtArgs> | null
    /**
     * Filter, which Particpated to fetch.
     */
    where: ParticpatedWhereUniqueInput
  }

  /**
   * Particpated findUniqueOrThrow
   */
  export type ParticpatedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Particpated
     */
    select?: ParticpatedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticpatedInclude<ExtArgs> | null
    /**
     * Filter, which Particpated to fetch.
     */
    where: ParticpatedWhereUniqueInput
  }

  /**
   * Particpated findFirst
   */
  export type ParticpatedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Particpated
     */
    select?: ParticpatedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticpatedInclude<ExtArgs> | null
    /**
     * Filter, which Particpated to fetch.
     */
    where?: ParticpatedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Particpateds to fetch.
     */
    orderBy?: ParticpatedOrderByWithRelationInput | ParticpatedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Particpateds.
     */
    cursor?: ParticpatedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Particpateds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Particpateds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Particpateds.
     */
    distinct?: ParticpatedScalarFieldEnum | ParticpatedScalarFieldEnum[]
  }

  /**
   * Particpated findFirstOrThrow
   */
  export type ParticpatedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Particpated
     */
    select?: ParticpatedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticpatedInclude<ExtArgs> | null
    /**
     * Filter, which Particpated to fetch.
     */
    where?: ParticpatedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Particpateds to fetch.
     */
    orderBy?: ParticpatedOrderByWithRelationInput | ParticpatedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Particpateds.
     */
    cursor?: ParticpatedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Particpateds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Particpateds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Particpateds.
     */
    distinct?: ParticpatedScalarFieldEnum | ParticpatedScalarFieldEnum[]
  }

  /**
   * Particpated findMany
   */
  export type ParticpatedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Particpated
     */
    select?: ParticpatedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticpatedInclude<ExtArgs> | null
    /**
     * Filter, which Particpateds to fetch.
     */
    where?: ParticpatedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Particpateds to fetch.
     */
    orderBy?: ParticpatedOrderByWithRelationInput | ParticpatedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Particpateds.
     */
    cursor?: ParticpatedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Particpateds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Particpateds.
     */
    skip?: number
    distinct?: ParticpatedScalarFieldEnum | ParticpatedScalarFieldEnum[]
  }

  /**
   * Particpated create
   */
  export type ParticpatedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Particpated
     */
    select?: ParticpatedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticpatedInclude<ExtArgs> | null
    /**
     * The data needed to create a Particpated.
     */
    data: XOR<ParticpatedCreateInput, ParticpatedUncheckedCreateInput>
  }

  /**
   * Particpated createMany
   */
  export type ParticpatedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Particpateds.
     */
    data: ParticpatedCreateManyInput | ParticpatedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Particpated createManyAndReturn
   */
  export type ParticpatedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Particpated
     */
    select?: ParticpatedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Particpateds.
     */
    data: ParticpatedCreateManyInput | ParticpatedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticpatedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Particpated update
   */
  export type ParticpatedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Particpated
     */
    select?: ParticpatedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticpatedInclude<ExtArgs> | null
    /**
     * The data needed to update a Particpated.
     */
    data: XOR<ParticpatedUpdateInput, ParticpatedUncheckedUpdateInput>
    /**
     * Choose, which Particpated to update.
     */
    where: ParticpatedWhereUniqueInput
  }

  /**
   * Particpated updateMany
   */
  export type ParticpatedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Particpateds.
     */
    data: XOR<ParticpatedUpdateManyMutationInput, ParticpatedUncheckedUpdateManyInput>
    /**
     * Filter which Particpateds to update
     */
    where?: ParticpatedWhereInput
  }

  /**
   * Particpated upsert
   */
  export type ParticpatedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Particpated
     */
    select?: ParticpatedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticpatedInclude<ExtArgs> | null
    /**
     * The filter to search for the Particpated to update in case it exists.
     */
    where: ParticpatedWhereUniqueInput
    /**
     * In case the Particpated found by the `where` argument doesn't exist, create a new Particpated with this data.
     */
    create: XOR<ParticpatedCreateInput, ParticpatedUncheckedCreateInput>
    /**
     * In case the Particpated was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticpatedUpdateInput, ParticpatedUncheckedUpdateInput>
  }

  /**
   * Particpated delete
   */
  export type ParticpatedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Particpated
     */
    select?: ParticpatedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticpatedInclude<ExtArgs> | null
    /**
     * Filter which Particpated to delete.
     */
    where: ParticpatedWhereUniqueInput
  }

  /**
   * Particpated deleteMany
   */
  export type ParticpatedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Particpateds to delete
     */
    where?: ParticpatedWhereInput
  }

  /**
   * Particpated without action
   */
  export type ParticpatedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Particpated
     */
    select?: ParticpatedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticpatedInclude<ExtArgs> | null
  }


  /**
   * Model AuctionBids
   */

  export type AggregateAuctionBids = {
    _count: AuctionBidsCountAggregateOutputType | null
    _avg: AuctionBidsAvgAggregateOutputType | null
    _sum: AuctionBidsSumAggregateOutputType | null
    _min: AuctionBidsMinAggregateOutputType | null
    _max: AuctionBidsMaxAggregateOutputType | null
  }

  export type AuctionBidsAvgAggregateOutputType = {
    amount: number | null
  }

  export type AuctionBidsSumAggregateOutputType = {
    amount: number | null
  }

  export type AuctionBidsMinAggregateOutputType = {
    id: string | null
    auctionerId: string | null
    nftId: string | null
    amount: number | null
    createdAt: Date | null
  }

  export type AuctionBidsMaxAggregateOutputType = {
    id: string | null
    auctionerId: string | null
    nftId: string | null
    amount: number | null
    createdAt: Date | null
  }

  export type AuctionBidsCountAggregateOutputType = {
    id: number
    auctionerId: number
    nftId: number
    amount: number
    createdAt: number
    _all: number
  }


  export type AuctionBidsAvgAggregateInputType = {
    amount?: true
  }

  export type AuctionBidsSumAggregateInputType = {
    amount?: true
  }

  export type AuctionBidsMinAggregateInputType = {
    id?: true
    auctionerId?: true
    nftId?: true
    amount?: true
    createdAt?: true
  }

  export type AuctionBidsMaxAggregateInputType = {
    id?: true
    auctionerId?: true
    nftId?: true
    amount?: true
    createdAt?: true
  }

  export type AuctionBidsCountAggregateInputType = {
    id?: true
    auctionerId?: true
    nftId?: true
    amount?: true
    createdAt?: true
    _all?: true
  }

  export type AuctionBidsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuctionBids to aggregate.
     */
    where?: AuctionBidsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuctionBids to fetch.
     */
    orderBy?: AuctionBidsOrderByWithRelationInput | AuctionBidsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuctionBidsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuctionBids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuctionBids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuctionBids
    **/
    _count?: true | AuctionBidsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuctionBidsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuctionBidsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuctionBidsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuctionBidsMaxAggregateInputType
  }

  export type GetAuctionBidsAggregateType<T extends AuctionBidsAggregateArgs> = {
        [P in keyof T & keyof AggregateAuctionBids]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuctionBids[P]>
      : GetScalarType<T[P], AggregateAuctionBids[P]>
  }




  export type AuctionBidsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuctionBidsWhereInput
    orderBy?: AuctionBidsOrderByWithAggregationInput | AuctionBidsOrderByWithAggregationInput[]
    by: AuctionBidsScalarFieldEnum[] | AuctionBidsScalarFieldEnum
    having?: AuctionBidsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuctionBidsCountAggregateInputType | true
    _avg?: AuctionBidsAvgAggregateInputType
    _sum?: AuctionBidsSumAggregateInputType
    _min?: AuctionBidsMinAggregateInputType
    _max?: AuctionBidsMaxAggregateInputType
  }

  export type AuctionBidsGroupByOutputType = {
    id: string
    auctionerId: string
    nftId: string
    amount: number
    createdAt: Date
    _count: AuctionBidsCountAggregateOutputType | null
    _avg: AuctionBidsAvgAggregateOutputType | null
    _sum: AuctionBidsSumAggregateOutputType | null
    _min: AuctionBidsMinAggregateOutputType | null
    _max: AuctionBidsMaxAggregateOutputType | null
  }

  type GetAuctionBidsGroupByPayload<T extends AuctionBidsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuctionBidsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuctionBidsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuctionBidsGroupByOutputType[P]>
            : GetScalarType<T[P], AuctionBidsGroupByOutputType[P]>
        }
      >
    >


  export type AuctionBidsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auctionerId?: boolean
    nftId?: boolean
    amount?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    nft?: boolean | NftsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auctionBids"]>

  export type AuctionBidsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auctionerId?: boolean
    nftId?: boolean
    amount?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    nft?: boolean | NftsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auctionBids"]>

  export type AuctionBidsSelectScalar = {
    id?: boolean
    auctionerId?: boolean
    nftId?: boolean
    amount?: boolean
    createdAt?: boolean
  }

  export type AuctionBidsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    nft?: boolean | NftsDefaultArgs<ExtArgs>
  }
  export type AuctionBidsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    nft?: boolean | NftsDefaultArgs<ExtArgs>
  }

  export type $AuctionBidsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuctionBids"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      nft: Prisma.$NftsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      auctionerId: string
      nftId: string
      amount: number
      createdAt: Date
    }, ExtArgs["result"]["auctionBids"]>
    composites: {}
  }

  type AuctionBidsGetPayload<S extends boolean | null | undefined | AuctionBidsDefaultArgs> = $Result.GetResult<Prisma.$AuctionBidsPayload, S>

  type AuctionBidsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuctionBidsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuctionBidsCountAggregateInputType | true
    }

  export interface AuctionBidsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuctionBids'], meta: { name: 'AuctionBids' } }
    /**
     * Find zero or one AuctionBids that matches the filter.
     * @param {AuctionBidsFindUniqueArgs} args - Arguments to find a AuctionBids
     * @example
     * // Get one AuctionBids
     * const auctionBids = await prisma.auctionBids.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuctionBidsFindUniqueArgs>(args: SelectSubset<T, AuctionBidsFindUniqueArgs<ExtArgs>>): Prisma__AuctionBidsClient<$Result.GetResult<Prisma.$AuctionBidsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AuctionBids that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AuctionBidsFindUniqueOrThrowArgs} args - Arguments to find a AuctionBids
     * @example
     * // Get one AuctionBids
     * const auctionBids = await prisma.auctionBids.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuctionBidsFindUniqueOrThrowArgs>(args: SelectSubset<T, AuctionBidsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuctionBidsClient<$Result.GetResult<Prisma.$AuctionBidsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AuctionBids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionBidsFindFirstArgs} args - Arguments to find a AuctionBids
     * @example
     * // Get one AuctionBids
     * const auctionBids = await prisma.auctionBids.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuctionBidsFindFirstArgs>(args?: SelectSubset<T, AuctionBidsFindFirstArgs<ExtArgs>>): Prisma__AuctionBidsClient<$Result.GetResult<Prisma.$AuctionBidsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AuctionBids that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionBidsFindFirstOrThrowArgs} args - Arguments to find a AuctionBids
     * @example
     * // Get one AuctionBids
     * const auctionBids = await prisma.auctionBids.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuctionBidsFindFirstOrThrowArgs>(args?: SelectSubset<T, AuctionBidsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuctionBidsClient<$Result.GetResult<Prisma.$AuctionBidsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AuctionBids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionBidsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuctionBids
     * const auctionBids = await prisma.auctionBids.findMany()
     * 
     * // Get first 10 AuctionBids
     * const auctionBids = await prisma.auctionBids.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auctionBidsWithIdOnly = await prisma.auctionBids.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuctionBidsFindManyArgs>(args?: SelectSubset<T, AuctionBidsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionBidsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AuctionBids.
     * @param {AuctionBidsCreateArgs} args - Arguments to create a AuctionBids.
     * @example
     * // Create one AuctionBids
     * const AuctionBids = await prisma.auctionBids.create({
     *   data: {
     *     // ... data to create a AuctionBids
     *   }
     * })
     * 
     */
    create<T extends AuctionBidsCreateArgs>(args: SelectSubset<T, AuctionBidsCreateArgs<ExtArgs>>): Prisma__AuctionBidsClient<$Result.GetResult<Prisma.$AuctionBidsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AuctionBids.
     * @param {AuctionBidsCreateManyArgs} args - Arguments to create many AuctionBids.
     * @example
     * // Create many AuctionBids
     * const auctionBids = await prisma.auctionBids.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuctionBidsCreateManyArgs>(args?: SelectSubset<T, AuctionBidsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuctionBids and returns the data saved in the database.
     * @param {AuctionBidsCreateManyAndReturnArgs} args - Arguments to create many AuctionBids.
     * @example
     * // Create many AuctionBids
     * const auctionBids = await prisma.auctionBids.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuctionBids and only return the `id`
     * const auctionBidsWithIdOnly = await prisma.auctionBids.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuctionBidsCreateManyAndReturnArgs>(args?: SelectSubset<T, AuctionBidsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionBidsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AuctionBids.
     * @param {AuctionBidsDeleteArgs} args - Arguments to delete one AuctionBids.
     * @example
     * // Delete one AuctionBids
     * const AuctionBids = await prisma.auctionBids.delete({
     *   where: {
     *     // ... filter to delete one AuctionBids
     *   }
     * })
     * 
     */
    delete<T extends AuctionBidsDeleteArgs>(args: SelectSubset<T, AuctionBidsDeleteArgs<ExtArgs>>): Prisma__AuctionBidsClient<$Result.GetResult<Prisma.$AuctionBidsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AuctionBids.
     * @param {AuctionBidsUpdateArgs} args - Arguments to update one AuctionBids.
     * @example
     * // Update one AuctionBids
     * const auctionBids = await prisma.auctionBids.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuctionBidsUpdateArgs>(args: SelectSubset<T, AuctionBidsUpdateArgs<ExtArgs>>): Prisma__AuctionBidsClient<$Result.GetResult<Prisma.$AuctionBidsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AuctionBids.
     * @param {AuctionBidsDeleteManyArgs} args - Arguments to filter AuctionBids to delete.
     * @example
     * // Delete a few AuctionBids
     * const { count } = await prisma.auctionBids.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuctionBidsDeleteManyArgs>(args?: SelectSubset<T, AuctionBidsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuctionBids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionBidsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuctionBids
     * const auctionBids = await prisma.auctionBids.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuctionBidsUpdateManyArgs>(args: SelectSubset<T, AuctionBidsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuctionBids.
     * @param {AuctionBidsUpsertArgs} args - Arguments to update or create a AuctionBids.
     * @example
     * // Update or create a AuctionBids
     * const auctionBids = await prisma.auctionBids.upsert({
     *   create: {
     *     // ... data to create a AuctionBids
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuctionBids we want to update
     *   }
     * })
     */
    upsert<T extends AuctionBidsUpsertArgs>(args: SelectSubset<T, AuctionBidsUpsertArgs<ExtArgs>>): Prisma__AuctionBidsClient<$Result.GetResult<Prisma.$AuctionBidsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AuctionBids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionBidsCountArgs} args - Arguments to filter AuctionBids to count.
     * @example
     * // Count the number of AuctionBids
     * const count = await prisma.auctionBids.count({
     *   where: {
     *     // ... the filter for the AuctionBids we want to count
     *   }
     * })
    **/
    count<T extends AuctionBidsCountArgs>(
      args?: Subset<T, AuctionBidsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuctionBidsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuctionBids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionBidsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuctionBidsAggregateArgs>(args: Subset<T, AuctionBidsAggregateArgs>): Prisma.PrismaPromise<GetAuctionBidsAggregateType<T>>

    /**
     * Group by AuctionBids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionBidsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuctionBidsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuctionBidsGroupByArgs['orderBy'] }
        : { orderBy?: AuctionBidsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuctionBidsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuctionBidsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuctionBids model
   */
  readonly fields: AuctionBidsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuctionBids.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuctionBidsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    nft<T extends NftsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NftsDefaultArgs<ExtArgs>>): Prisma__NftsClient<$Result.GetResult<Prisma.$NftsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuctionBids model
   */ 
  interface AuctionBidsFieldRefs {
    readonly id: FieldRef<"AuctionBids", 'String'>
    readonly auctionerId: FieldRef<"AuctionBids", 'String'>
    readonly nftId: FieldRef<"AuctionBids", 'String'>
    readonly amount: FieldRef<"AuctionBids", 'Float'>
    readonly createdAt: FieldRef<"AuctionBids", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuctionBids findUnique
   */
  export type AuctionBidsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionBids
     */
    select?: AuctionBidsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionBidsInclude<ExtArgs> | null
    /**
     * Filter, which AuctionBids to fetch.
     */
    where: AuctionBidsWhereUniqueInput
  }

  /**
   * AuctionBids findUniqueOrThrow
   */
  export type AuctionBidsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionBids
     */
    select?: AuctionBidsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionBidsInclude<ExtArgs> | null
    /**
     * Filter, which AuctionBids to fetch.
     */
    where: AuctionBidsWhereUniqueInput
  }

  /**
   * AuctionBids findFirst
   */
  export type AuctionBidsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionBids
     */
    select?: AuctionBidsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionBidsInclude<ExtArgs> | null
    /**
     * Filter, which AuctionBids to fetch.
     */
    where?: AuctionBidsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuctionBids to fetch.
     */
    orderBy?: AuctionBidsOrderByWithRelationInput | AuctionBidsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuctionBids.
     */
    cursor?: AuctionBidsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuctionBids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuctionBids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuctionBids.
     */
    distinct?: AuctionBidsScalarFieldEnum | AuctionBidsScalarFieldEnum[]
  }

  /**
   * AuctionBids findFirstOrThrow
   */
  export type AuctionBidsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionBids
     */
    select?: AuctionBidsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionBidsInclude<ExtArgs> | null
    /**
     * Filter, which AuctionBids to fetch.
     */
    where?: AuctionBidsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuctionBids to fetch.
     */
    orderBy?: AuctionBidsOrderByWithRelationInput | AuctionBidsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuctionBids.
     */
    cursor?: AuctionBidsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuctionBids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuctionBids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuctionBids.
     */
    distinct?: AuctionBidsScalarFieldEnum | AuctionBidsScalarFieldEnum[]
  }

  /**
   * AuctionBids findMany
   */
  export type AuctionBidsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionBids
     */
    select?: AuctionBidsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionBidsInclude<ExtArgs> | null
    /**
     * Filter, which AuctionBids to fetch.
     */
    where?: AuctionBidsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuctionBids to fetch.
     */
    orderBy?: AuctionBidsOrderByWithRelationInput | AuctionBidsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuctionBids.
     */
    cursor?: AuctionBidsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuctionBids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuctionBids.
     */
    skip?: number
    distinct?: AuctionBidsScalarFieldEnum | AuctionBidsScalarFieldEnum[]
  }

  /**
   * AuctionBids create
   */
  export type AuctionBidsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionBids
     */
    select?: AuctionBidsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionBidsInclude<ExtArgs> | null
    /**
     * The data needed to create a AuctionBids.
     */
    data: XOR<AuctionBidsCreateInput, AuctionBidsUncheckedCreateInput>
  }

  /**
   * AuctionBids createMany
   */
  export type AuctionBidsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuctionBids.
     */
    data: AuctionBidsCreateManyInput | AuctionBidsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuctionBids createManyAndReturn
   */
  export type AuctionBidsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionBids
     */
    select?: AuctionBidsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AuctionBids.
     */
    data: AuctionBidsCreateManyInput | AuctionBidsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionBidsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuctionBids update
   */
  export type AuctionBidsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionBids
     */
    select?: AuctionBidsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionBidsInclude<ExtArgs> | null
    /**
     * The data needed to update a AuctionBids.
     */
    data: XOR<AuctionBidsUpdateInput, AuctionBidsUncheckedUpdateInput>
    /**
     * Choose, which AuctionBids to update.
     */
    where: AuctionBidsWhereUniqueInput
  }

  /**
   * AuctionBids updateMany
   */
  export type AuctionBidsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuctionBids.
     */
    data: XOR<AuctionBidsUpdateManyMutationInput, AuctionBidsUncheckedUpdateManyInput>
    /**
     * Filter which AuctionBids to update
     */
    where?: AuctionBidsWhereInput
  }

  /**
   * AuctionBids upsert
   */
  export type AuctionBidsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionBids
     */
    select?: AuctionBidsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionBidsInclude<ExtArgs> | null
    /**
     * The filter to search for the AuctionBids to update in case it exists.
     */
    where: AuctionBidsWhereUniqueInput
    /**
     * In case the AuctionBids found by the `where` argument doesn't exist, create a new AuctionBids with this data.
     */
    create: XOR<AuctionBidsCreateInput, AuctionBidsUncheckedCreateInput>
    /**
     * In case the AuctionBids was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuctionBidsUpdateInput, AuctionBidsUncheckedUpdateInput>
  }

  /**
   * AuctionBids delete
   */
  export type AuctionBidsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionBids
     */
    select?: AuctionBidsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionBidsInclude<ExtArgs> | null
    /**
     * Filter which AuctionBids to delete.
     */
    where: AuctionBidsWhereUniqueInput
  }

  /**
   * AuctionBids deleteMany
   */
  export type AuctionBidsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuctionBids to delete
     */
    where?: AuctionBidsWhereInput
  }

  /**
   * AuctionBids without action
   */
  export type AuctionBidsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionBids
     */
    select?: AuctionBidsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionBidsInclude<ExtArgs> | null
  }


  /**
   * Model Nfts
   */

  export type AggregateNfts = {
    _count: NftsCountAggregateOutputType | null
    _avg: NftsAvgAggregateOutputType | null
    _sum: NftsSumAggregateOutputType | null
    _min: NftsMinAggregateOutputType | null
    _max: NftsMaxAggregateOutputType | null
  }

  export type NftsAvgAggregateOutputType = {
    chainId: number | null
    PriceInEth: number | null
    rewardPoints: number | null
  }

  export type NftsSumAggregateOutputType = {
    chainId: number | null
    PriceInEth: number | null
    rewardPoints: number | null
  }

  export type NftsMinAggregateOutputType = {
    id: string | null
    creatorId: string | null
    image: string | null
    title: string | null
    description: string | null
    prompt: string | null
    shortDescription: string | null
    tokenId: string | null
    chainId: number | null
    orderType: $Enums.orderType | null
    PriceInEth: number | null
    type: $Enums.NftType | null
    isBid: boolean | null
    BidEndTime: Date | null
    rewardEndDate: Date | null
    rewardPoints: number | null
    rewardForceCancelled: boolean | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NftsMaxAggregateOutputType = {
    id: string | null
    creatorId: string | null
    image: string | null
    title: string | null
    description: string | null
    prompt: string | null
    shortDescription: string | null
    tokenId: string | null
    chainId: number | null
    orderType: $Enums.orderType | null
    PriceInEth: number | null
    type: $Enums.NftType | null
    isBid: boolean | null
    BidEndTime: Date | null
    rewardEndDate: Date | null
    rewardPoints: number | null
    rewardForceCancelled: boolean | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NftsCountAggregateOutputType = {
    id: number
    creatorId: number
    image: number
    title: number
    description: number
    prompt: number
    shortDescription: number
    tokenId: number
    chainId: number
    orderType: number
    PriceInEth: number
    type: number
    isBid: number
    BidEndTime: number
    category: number
    rewardEndDate: number
    rewardPoints: number
    rewardForceCancelled: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NftsAvgAggregateInputType = {
    chainId?: true
    PriceInEth?: true
    rewardPoints?: true
  }

  export type NftsSumAggregateInputType = {
    chainId?: true
    PriceInEth?: true
    rewardPoints?: true
  }

  export type NftsMinAggregateInputType = {
    id?: true
    creatorId?: true
    image?: true
    title?: true
    description?: true
    prompt?: true
    shortDescription?: true
    tokenId?: true
    chainId?: true
    orderType?: true
    PriceInEth?: true
    type?: true
    isBid?: true
    BidEndTime?: true
    rewardEndDate?: true
    rewardPoints?: true
    rewardForceCancelled?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NftsMaxAggregateInputType = {
    id?: true
    creatorId?: true
    image?: true
    title?: true
    description?: true
    prompt?: true
    shortDescription?: true
    tokenId?: true
    chainId?: true
    orderType?: true
    PriceInEth?: true
    type?: true
    isBid?: true
    BidEndTime?: true
    rewardEndDate?: true
    rewardPoints?: true
    rewardForceCancelled?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NftsCountAggregateInputType = {
    id?: true
    creatorId?: true
    image?: true
    title?: true
    description?: true
    prompt?: true
    shortDescription?: true
    tokenId?: true
    chainId?: true
    orderType?: true
    PriceInEth?: true
    type?: true
    isBid?: true
    BidEndTime?: true
    category?: true
    rewardEndDate?: true
    rewardPoints?: true
    rewardForceCancelled?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NftsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nfts to aggregate.
     */
    where?: NftsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nfts to fetch.
     */
    orderBy?: NftsOrderByWithRelationInput | NftsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NftsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nfts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nfts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Nfts
    **/
    _count?: true | NftsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NftsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NftsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NftsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NftsMaxAggregateInputType
  }

  export type GetNftsAggregateType<T extends NftsAggregateArgs> = {
        [P in keyof T & keyof AggregateNfts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNfts[P]>
      : GetScalarType<T[P], AggregateNfts[P]>
  }




  export type NftsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NftsWhereInput
    orderBy?: NftsOrderByWithAggregationInput | NftsOrderByWithAggregationInput[]
    by: NftsScalarFieldEnum[] | NftsScalarFieldEnum
    having?: NftsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NftsCountAggregateInputType | true
    _avg?: NftsAvgAggregateInputType
    _sum?: NftsSumAggregateInputType
    _min?: NftsMinAggregateInputType
    _max?: NftsMaxAggregateInputType
  }

  export type NftsGroupByOutputType = {
    id: string
    creatorId: string
    image: string
    title: string
    description: string
    prompt: string | null
    shortDescription: string | null
    tokenId: string
    chainId: number
    orderType: $Enums.orderType
    PriceInEth: number
    type: $Enums.NftType
    isBid: boolean
    BidEndTime: Date | null
    category: string[]
    rewardEndDate: Date | null
    rewardPoints: number | null
    rewardForceCancelled: boolean | null
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: NftsCountAggregateOutputType | null
    _avg: NftsAvgAggregateOutputType | null
    _sum: NftsSumAggregateOutputType | null
    _min: NftsMinAggregateOutputType | null
    _max: NftsMaxAggregateOutputType | null
  }

  type GetNftsGroupByPayload<T extends NftsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NftsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NftsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NftsGroupByOutputType[P]>
            : GetScalarType<T[P], NftsGroupByOutputType[P]>
        }
      >
    >


  export type NftsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    image?: boolean
    title?: boolean
    description?: boolean
    prompt?: boolean
    shortDescription?: boolean
    tokenId?: boolean
    chainId?: boolean
    orderType?: boolean
    PriceInEth?: boolean
    type?: boolean
    isBid?: boolean
    BidEndTime?: boolean
    category?: boolean
    rewardEndDate?: boolean
    rewardPoints?: boolean
    rewardForceCancelled?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    views?: boolean | Nfts$viewsArgs<ExtArgs>
    likes?: boolean | Nfts$likesArgs<ExtArgs>
    rewardWinners?: boolean | Nfts$rewardWinnersArgs<ExtArgs>
    rewardTasks?: boolean | Nfts$rewardTasksArgs<ExtArgs>
    AuctionBids?: boolean | Nfts$AuctionBidsArgs<ExtArgs>
    transactions?: boolean | Nfts$transactionsArgs<ExtArgs>
    _count?: boolean | NftsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nfts"]>

  export type NftsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    image?: boolean
    title?: boolean
    description?: boolean
    prompt?: boolean
    shortDescription?: boolean
    tokenId?: boolean
    chainId?: boolean
    orderType?: boolean
    PriceInEth?: boolean
    type?: boolean
    isBid?: boolean
    BidEndTime?: boolean
    category?: boolean
    rewardEndDate?: boolean
    rewardPoints?: boolean
    rewardForceCancelled?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nfts"]>

  export type NftsSelectScalar = {
    id?: boolean
    creatorId?: boolean
    image?: boolean
    title?: boolean
    description?: boolean
    prompt?: boolean
    shortDescription?: boolean
    tokenId?: boolean
    chainId?: boolean
    orderType?: boolean
    PriceInEth?: boolean
    type?: boolean
    isBid?: boolean
    BidEndTime?: boolean
    category?: boolean
    rewardEndDate?: boolean
    rewardPoints?: boolean
    rewardForceCancelled?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NftsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    views?: boolean | Nfts$viewsArgs<ExtArgs>
    likes?: boolean | Nfts$likesArgs<ExtArgs>
    rewardWinners?: boolean | Nfts$rewardWinnersArgs<ExtArgs>
    rewardTasks?: boolean | Nfts$rewardTasksArgs<ExtArgs>
    AuctionBids?: boolean | Nfts$AuctionBidsArgs<ExtArgs>
    transactions?: boolean | Nfts$transactionsArgs<ExtArgs>
    _count?: boolean | NftsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NftsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NftsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Nfts"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      views: Prisma.$ViewsPayload<ExtArgs>[]
      likes: Prisma.$LikesPayload<ExtArgs>[]
      rewardWinners: Prisma.$ParticpatedPayload<ExtArgs>[]
      rewardTasks: Prisma.$TasksPayload<ExtArgs>[]
      AuctionBids: Prisma.$AuctionBidsPayload<ExtArgs>[]
      transactions: Prisma.$TransactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      creatorId: string
      image: string
      title: string
      description: string
      prompt: string | null
      shortDescription: string | null
      tokenId: string
      chainId: number
      orderType: $Enums.orderType
      PriceInEth: number
      type: $Enums.NftType
      isBid: boolean
      BidEndTime: Date | null
      category: string[]
      rewardEndDate: Date | null
      rewardPoints: number | null
      rewardForceCancelled: boolean | null
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["nfts"]>
    composites: {}
  }

  type NftsGetPayload<S extends boolean | null | undefined | NftsDefaultArgs> = $Result.GetResult<Prisma.$NftsPayload, S>

  type NftsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NftsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NftsCountAggregateInputType | true
    }

  export interface NftsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Nfts'], meta: { name: 'Nfts' } }
    /**
     * Find zero or one Nfts that matches the filter.
     * @param {NftsFindUniqueArgs} args - Arguments to find a Nfts
     * @example
     * // Get one Nfts
     * const nfts = await prisma.nfts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NftsFindUniqueArgs>(args: SelectSubset<T, NftsFindUniqueArgs<ExtArgs>>): Prisma__NftsClient<$Result.GetResult<Prisma.$NftsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Nfts that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NftsFindUniqueOrThrowArgs} args - Arguments to find a Nfts
     * @example
     * // Get one Nfts
     * const nfts = await prisma.nfts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NftsFindUniqueOrThrowArgs>(args: SelectSubset<T, NftsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NftsClient<$Result.GetResult<Prisma.$NftsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Nfts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NftsFindFirstArgs} args - Arguments to find a Nfts
     * @example
     * // Get one Nfts
     * const nfts = await prisma.nfts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NftsFindFirstArgs>(args?: SelectSubset<T, NftsFindFirstArgs<ExtArgs>>): Prisma__NftsClient<$Result.GetResult<Prisma.$NftsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Nfts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NftsFindFirstOrThrowArgs} args - Arguments to find a Nfts
     * @example
     * // Get one Nfts
     * const nfts = await prisma.nfts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NftsFindFirstOrThrowArgs>(args?: SelectSubset<T, NftsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NftsClient<$Result.GetResult<Prisma.$NftsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Nfts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NftsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nfts
     * const nfts = await prisma.nfts.findMany()
     * 
     * // Get first 10 Nfts
     * const nfts = await prisma.nfts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nftsWithIdOnly = await prisma.nfts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NftsFindManyArgs>(args?: SelectSubset<T, NftsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NftsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Nfts.
     * @param {NftsCreateArgs} args - Arguments to create a Nfts.
     * @example
     * // Create one Nfts
     * const Nfts = await prisma.nfts.create({
     *   data: {
     *     // ... data to create a Nfts
     *   }
     * })
     * 
     */
    create<T extends NftsCreateArgs>(args: SelectSubset<T, NftsCreateArgs<ExtArgs>>): Prisma__NftsClient<$Result.GetResult<Prisma.$NftsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Nfts.
     * @param {NftsCreateManyArgs} args - Arguments to create many Nfts.
     * @example
     * // Create many Nfts
     * const nfts = await prisma.nfts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NftsCreateManyArgs>(args?: SelectSubset<T, NftsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nfts and returns the data saved in the database.
     * @param {NftsCreateManyAndReturnArgs} args - Arguments to create many Nfts.
     * @example
     * // Create many Nfts
     * const nfts = await prisma.nfts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nfts and only return the `id`
     * const nftsWithIdOnly = await prisma.nfts.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NftsCreateManyAndReturnArgs>(args?: SelectSubset<T, NftsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NftsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Nfts.
     * @param {NftsDeleteArgs} args - Arguments to delete one Nfts.
     * @example
     * // Delete one Nfts
     * const Nfts = await prisma.nfts.delete({
     *   where: {
     *     // ... filter to delete one Nfts
     *   }
     * })
     * 
     */
    delete<T extends NftsDeleteArgs>(args: SelectSubset<T, NftsDeleteArgs<ExtArgs>>): Prisma__NftsClient<$Result.GetResult<Prisma.$NftsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Nfts.
     * @param {NftsUpdateArgs} args - Arguments to update one Nfts.
     * @example
     * // Update one Nfts
     * const nfts = await prisma.nfts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NftsUpdateArgs>(args: SelectSubset<T, NftsUpdateArgs<ExtArgs>>): Prisma__NftsClient<$Result.GetResult<Prisma.$NftsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Nfts.
     * @param {NftsDeleteManyArgs} args - Arguments to filter Nfts to delete.
     * @example
     * // Delete a few Nfts
     * const { count } = await prisma.nfts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NftsDeleteManyArgs>(args?: SelectSubset<T, NftsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nfts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NftsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nfts
     * const nfts = await prisma.nfts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NftsUpdateManyArgs>(args: SelectSubset<T, NftsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Nfts.
     * @param {NftsUpsertArgs} args - Arguments to update or create a Nfts.
     * @example
     * // Update or create a Nfts
     * const nfts = await prisma.nfts.upsert({
     *   create: {
     *     // ... data to create a Nfts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nfts we want to update
     *   }
     * })
     */
    upsert<T extends NftsUpsertArgs>(args: SelectSubset<T, NftsUpsertArgs<ExtArgs>>): Prisma__NftsClient<$Result.GetResult<Prisma.$NftsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Nfts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NftsCountArgs} args - Arguments to filter Nfts to count.
     * @example
     * // Count the number of Nfts
     * const count = await prisma.nfts.count({
     *   where: {
     *     // ... the filter for the Nfts we want to count
     *   }
     * })
    **/
    count<T extends NftsCountArgs>(
      args?: Subset<T, NftsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NftsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nfts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NftsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NftsAggregateArgs>(args: Subset<T, NftsAggregateArgs>): Prisma.PrismaPromise<GetNftsAggregateType<T>>

    /**
     * Group by Nfts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NftsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NftsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NftsGroupByArgs['orderBy'] }
        : { orderBy?: NftsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NftsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNftsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Nfts model
   */
  readonly fields: NftsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Nfts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NftsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    views<T extends Nfts$viewsArgs<ExtArgs> = {}>(args?: Subset<T, Nfts$viewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "findMany"> | Null>
    likes<T extends Nfts$likesArgs<ExtArgs> = {}>(args?: Subset<T, Nfts$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findMany"> | Null>
    rewardWinners<T extends Nfts$rewardWinnersArgs<ExtArgs> = {}>(args?: Subset<T, Nfts$rewardWinnersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticpatedPayload<ExtArgs>, T, "findMany"> | Null>
    rewardTasks<T extends Nfts$rewardTasksArgs<ExtArgs> = {}>(args?: Subset<T, Nfts$rewardTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findMany"> | Null>
    AuctionBids<T extends Nfts$AuctionBidsArgs<ExtArgs> = {}>(args?: Subset<T, Nfts$AuctionBidsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionBidsPayload<ExtArgs>, T, "findMany"> | Null>
    transactions<T extends Nfts$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Nfts$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Nfts model
   */ 
  interface NftsFieldRefs {
    readonly id: FieldRef<"Nfts", 'String'>
    readonly creatorId: FieldRef<"Nfts", 'String'>
    readonly image: FieldRef<"Nfts", 'String'>
    readonly title: FieldRef<"Nfts", 'String'>
    readonly description: FieldRef<"Nfts", 'String'>
    readonly prompt: FieldRef<"Nfts", 'String'>
    readonly shortDescription: FieldRef<"Nfts", 'String'>
    readonly tokenId: FieldRef<"Nfts", 'String'>
    readonly chainId: FieldRef<"Nfts", 'Int'>
    readonly orderType: FieldRef<"Nfts", 'orderType'>
    readonly PriceInEth: FieldRef<"Nfts", 'Float'>
    readonly type: FieldRef<"Nfts", 'NftType'>
    readonly isBid: FieldRef<"Nfts", 'Boolean'>
    readonly BidEndTime: FieldRef<"Nfts", 'DateTime'>
    readonly category: FieldRef<"Nfts", 'String[]'>
    readonly rewardEndDate: FieldRef<"Nfts", 'DateTime'>
    readonly rewardPoints: FieldRef<"Nfts", 'Int'>
    readonly rewardForceCancelled: FieldRef<"Nfts", 'Boolean'>
    readonly status: FieldRef<"Nfts", 'Status'>
    readonly createdAt: FieldRef<"Nfts", 'DateTime'>
    readonly updatedAt: FieldRef<"Nfts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Nfts findUnique
   */
  export type NftsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nfts
     */
    select?: NftsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NftsInclude<ExtArgs> | null
    /**
     * Filter, which Nfts to fetch.
     */
    where: NftsWhereUniqueInput
  }

  /**
   * Nfts findUniqueOrThrow
   */
  export type NftsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nfts
     */
    select?: NftsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NftsInclude<ExtArgs> | null
    /**
     * Filter, which Nfts to fetch.
     */
    where: NftsWhereUniqueInput
  }

  /**
   * Nfts findFirst
   */
  export type NftsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nfts
     */
    select?: NftsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NftsInclude<ExtArgs> | null
    /**
     * Filter, which Nfts to fetch.
     */
    where?: NftsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nfts to fetch.
     */
    orderBy?: NftsOrderByWithRelationInput | NftsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nfts.
     */
    cursor?: NftsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nfts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nfts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nfts.
     */
    distinct?: NftsScalarFieldEnum | NftsScalarFieldEnum[]
  }

  /**
   * Nfts findFirstOrThrow
   */
  export type NftsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nfts
     */
    select?: NftsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NftsInclude<ExtArgs> | null
    /**
     * Filter, which Nfts to fetch.
     */
    where?: NftsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nfts to fetch.
     */
    orderBy?: NftsOrderByWithRelationInput | NftsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nfts.
     */
    cursor?: NftsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nfts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nfts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nfts.
     */
    distinct?: NftsScalarFieldEnum | NftsScalarFieldEnum[]
  }

  /**
   * Nfts findMany
   */
  export type NftsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nfts
     */
    select?: NftsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NftsInclude<ExtArgs> | null
    /**
     * Filter, which Nfts to fetch.
     */
    where?: NftsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nfts to fetch.
     */
    orderBy?: NftsOrderByWithRelationInput | NftsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Nfts.
     */
    cursor?: NftsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nfts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nfts.
     */
    skip?: number
    distinct?: NftsScalarFieldEnum | NftsScalarFieldEnum[]
  }

  /**
   * Nfts create
   */
  export type NftsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nfts
     */
    select?: NftsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NftsInclude<ExtArgs> | null
    /**
     * The data needed to create a Nfts.
     */
    data: XOR<NftsCreateInput, NftsUncheckedCreateInput>
  }

  /**
   * Nfts createMany
   */
  export type NftsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Nfts.
     */
    data: NftsCreateManyInput | NftsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Nfts createManyAndReturn
   */
  export type NftsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nfts
     */
    select?: NftsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Nfts.
     */
    data: NftsCreateManyInput | NftsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NftsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Nfts update
   */
  export type NftsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nfts
     */
    select?: NftsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NftsInclude<ExtArgs> | null
    /**
     * The data needed to update a Nfts.
     */
    data: XOR<NftsUpdateInput, NftsUncheckedUpdateInput>
    /**
     * Choose, which Nfts to update.
     */
    where: NftsWhereUniqueInput
  }

  /**
   * Nfts updateMany
   */
  export type NftsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Nfts.
     */
    data: XOR<NftsUpdateManyMutationInput, NftsUncheckedUpdateManyInput>
    /**
     * Filter which Nfts to update
     */
    where?: NftsWhereInput
  }

  /**
   * Nfts upsert
   */
  export type NftsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nfts
     */
    select?: NftsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NftsInclude<ExtArgs> | null
    /**
     * The filter to search for the Nfts to update in case it exists.
     */
    where: NftsWhereUniqueInput
    /**
     * In case the Nfts found by the `where` argument doesn't exist, create a new Nfts with this data.
     */
    create: XOR<NftsCreateInput, NftsUncheckedCreateInput>
    /**
     * In case the Nfts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NftsUpdateInput, NftsUncheckedUpdateInput>
  }

  /**
   * Nfts delete
   */
  export type NftsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nfts
     */
    select?: NftsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NftsInclude<ExtArgs> | null
    /**
     * Filter which Nfts to delete.
     */
    where: NftsWhereUniqueInput
  }

  /**
   * Nfts deleteMany
   */
  export type NftsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nfts to delete
     */
    where?: NftsWhereInput
  }

  /**
   * Nfts.views
   */
  export type Nfts$viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    where?: ViewsWhereInput
    orderBy?: ViewsOrderByWithRelationInput | ViewsOrderByWithRelationInput[]
    cursor?: ViewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }

  /**
   * Nfts.likes
   */
  export type Nfts$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    where?: LikesWhereInput
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    cursor?: LikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Nfts.rewardWinners
   */
  export type Nfts$rewardWinnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Particpated
     */
    select?: ParticpatedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticpatedInclude<ExtArgs> | null
    where?: ParticpatedWhereInput
    orderBy?: ParticpatedOrderByWithRelationInput | ParticpatedOrderByWithRelationInput[]
    cursor?: ParticpatedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticpatedScalarFieldEnum | ParticpatedScalarFieldEnum[]
  }

  /**
   * Nfts.rewardTasks
   */
  export type Nfts$rewardTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    where?: TasksWhereInput
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    cursor?: TasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * Nfts.AuctionBids
   */
  export type Nfts$AuctionBidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionBids
     */
    select?: AuctionBidsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionBidsInclude<ExtArgs> | null
    where?: AuctionBidsWhereInput
    orderBy?: AuctionBidsOrderByWithRelationInput | AuctionBidsOrderByWithRelationInput[]
    cursor?: AuctionBidsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuctionBidsScalarFieldEnum | AuctionBidsScalarFieldEnum[]
  }

  /**
   * Nfts.transactions
   */
  export type Nfts$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    cursor?: TransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Nfts without action
   */
  export type NftsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nfts
     */
    select?: NftsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NftsInclude<ExtArgs> | null
  }


  /**
   * Model Transactions
   */

  export type AggregateTransactions = {
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  export type TransactionsAvgAggregateOutputType = {
    AmountInEth: number | null
  }

  export type TransactionsSumAggregateOutputType = {
    AmountInEth: number | null
  }

  export type TransactionsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.TransactionType | null
    AmountInEth: number | null
    nftId: string | null
    createdAt: Date | null
  }

  export type TransactionsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.TransactionType | null
    AmountInEth: number | null
    nftId: string | null
    createdAt: Date | null
  }

  export type TransactionsCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    AmountInEth: number
    nftId: number
    createdAt: number
    _all: number
  }


  export type TransactionsAvgAggregateInputType = {
    AmountInEth?: true
  }

  export type TransactionsSumAggregateInputType = {
    AmountInEth?: true
  }

  export type TransactionsMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    AmountInEth?: true
    nftId?: true
    createdAt?: true
  }

  export type TransactionsMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    AmountInEth?: true
    nftId?: true
    createdAt?: true
  }

  export type TransactionsCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    AmountInEth?: true
    nftId?: true
    createdAt?: true
    _all?: true
  }

  export type TransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to aggregate.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionsMaxAggregateInputType
  }

  export type GetTransactionsAggregateType<T extends TransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactions[P]>
      : GetScalarType<T[P], AggregateTransactions[P]>
  }




  export type TransactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithAggregationInput | TransactionsOrderByWithAggregationInput[]
    by: TransactionsScalarFieldEnum[] | TransactionsScalarFieldEnum
    having?: TransactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionsCountAggregateInputType | true
    _avg?: TransactionsAvgAggregateInputType
    _sum?: TransactionsSumAggregateInputType
    _min?: TransactionsMinAggregateInputType
    _max?: TransactionsMaxAggregateInputType
  }

  export type TransactionsGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.TransactionType
    AmountInEth: number
    nftId: string
    createdAt: Date
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  type GetTransactionsGroupByPayload<T extends TransactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
        }
      >
    >


  export type TransactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    AmountInEth?: boolean
    nftId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    nft?: boolean | NftsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    AmountInEth?: boolean
    nftId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    nft?: boolean | NftsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    AmountInEth?: boolean
    nftId?: boolean
    createdAt?: boolean
  }

  export type TransactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    nft?: boolean | NftsDefaultArgs<ExtArgs>
  }
  export type TransactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    nft?: boolean | NftsDefaultArgs<ExtArgs>
  }

  export type $TransactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transactions"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      nft: Prisma.$NftsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.TransactionType
      AmountInEth: number
      nftId: string
      createdAt: Date
    }, ExtArgs["result"]["transactions"]>
    composites: {}
  }

  type TransactionsGetPayload<S extends boolean | null | undefined | TransactionsDefaultArgs> = $Result.GetResult<Prisma.$TransactionsPayload, S>

  type TransactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransactionsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransactionsCountAggregateInputType | true
    }

  export interface TransactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transactions'], meta: { name: 'Transactions' } }
    /**
     * Find zero or one Transactions that matches the filter.
     * @param {TransactionsFindUniqueArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionsFindUniqueArgs>(args: SelectSubset<T, TransactionsFindUniqueArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Transactions that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransactionsFindUniqueOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindFirstArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionsFindFirstArgs>(args?: SelectSubset<T, TransactionsFindFirstArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindFirstOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transactions.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionsWithIdOnly = await prisma.transactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionsFindManyArgs>(args?: SelectSubset<T, TransactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Transactions.
     * @param {TransactionsCreateArgs} args - Arguments to create a Transactions.
     * @example
     * // Create one Transactions
     * const Transactions = await prisma.transactions.create({
     *   data: {
     *     // ... data to create a Transactions
     *   }
     * })
     * 
     */
    create<T extends TransactionsCreateArgs>(args: SelectSubset<T, TransactionsCreateArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Transactions.
     * @param {TransactionsCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionsCreateManyArgs>(args?: SelectSubset<T, TransactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionsCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionsWithIdOnly = await prisma.transactions.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Transactions.
     * @param {TransactionsDeleteArgs} args - Arguments to delete one Transactions.
     * @example
     * // Delete one Transactions
     * const Transactions = await prisma.transactions.delete({
     *   where: {
     *     // ... filter to delete one Transactions
     *   }
     * })
     * 
     */
    delete<T extends TransactionsDeleteArgs>(args: SelectSubset<T, TransactionsDeleteArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Transactions.
     * @param {TransactionsUpdateArgs} args - Arguments to update one Transactions.
     * @example
     * // Update one Transactions
     * const transactions = await prisma.transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionsUpdateArgs>(args: SelectSubset<T, TransactionsUpdateArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionsDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionsDeleteManyArgs>(args?: SelectSubset<T, TransactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionsUpdateManyArgs>(args: SelectSubset<T, TransactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transactions.
     * @param {TransactionsUpsertArgs} args - Arguments to update or create a Transactions.
     * @example
     * // Update or create a Transactions
     * const transactions = await prisma.transactions.upsert({
     *   create: {
     *     // ... data to create a Transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transactions we want to update
     *   }
     * })
     */
    upsert<T extends TransactionsUpsertArgs>(args: SelectSubset<T, TransactionsUpsertArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transactions.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionsCountArgs>(
      args?: Subset<T, TransactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionsAggregateArgs>(args: Subset<T, TransactionsAggregateArgs>): Prisma.PrismaPromise<GetTransactionsAggregateType<T>>

    /**
     * Group by Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionsGroupByArgs['orderBy'] }
        : { orderBy?: TransactionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transactions model
   */
  readonly fields: TransactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    nft<T extends NftsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NftsDefaultArgs<ExtArgs>>): Prisma__NftsClient<$Result.GetResult<Prisma.$NftsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transactions model
   */ 
  interface TransactionsFieldRefs {
    readonly id: FieldRef<"Transactions", 'String'>
    readonly userId: FieldRef<"Transactions", 'String'>
    readonly type: FieldRef<"Transactions", 'TransactionType'>
    readonly AmountInEth: FieldRef<"Transactions", 'Float'>
    readonly nftId: FieldRef<"Transactions", 'String'>
    readonly createdAt: FieldRef<"Transactions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transactions findUnique
   */
  export type TransactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions findUniqueOrThrow
   */
  export type TransactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions findFirst
   */
  export type TransactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions findFirstOrThrow
   */
  export type TransactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions findMany
   */
  export type TransactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions create
   */
  export type TransactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Transactions.
     */
    data: XOR<TransactionsCreateInput, TransactionsUncheckedCreateInput>
  }

  /**
   * Transactions createMany
   */
  export type TransactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionsCreateManyInput | TransactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transactions createManyAndReturn
   */
  export type TransactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionsCreateManyInput | TransactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transactions update
   */
  export type TransactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Transactions.
     */
    data: XOR<TransactionsUpdateInput, TransactionsUncheckedUpdateInput>
    /**
     * Choose, which Transactions to update.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions updateMany
   */
  export type TransactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionsWhereInput
  }

  /**
   * Transactions upsert
   */
  export type TransactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Transactions to update in case it exists.
     */
    where: TransactionsWhereUniqueInput
    /**
     * In case the Transactions found by the `where` argument doesn't exist, create a new Transactions with this data.
     */
    create: XOR<TransactionsCreateInput, TransactionsUncheckedCreateInput>
    /**
     * In case the Transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionsUpdateInput, TransactionsUncheckedUpdateInput>
  }

  /**
   * Transactions delete
   */
  export type TransactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter which Transactions to delete.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions deleteMany
   */
  export type TransactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionsWhereInput
  }

  /**
   * Transactions without action
   */
  export type TransactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    points: 'points',
    walletAddress: 'walletAddress',
    twitter: 'twitter',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ViewsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    nftId: 'nftId',
    createdAt: 'createdAt'
  };

  export type ViewsScalarFieldEnum = (typeof ViewsScalarFieldEnum)[keyof typeof ViewsScalarFieldEnum]


  export const LikesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    nftId: 'nftId',
    createdAt: 'createdAt'
  };

  export type LikesScalarFieldEnum = (typeof LikesScalarFieldEnum)[keyof typeof LikesScalarFieldEnum]


  export const TasksScalarFieldEnum: {
    id: 'id',
    nftId: 'nftId',
    prompt: 'prompt'
  };

  export type TasksScalarFieldEnum = (typeof TasksScalarFieldEnum)[keyof typeof TasksScalarFieldEnum]


  export const ParticpatedScalarFieldEnum: {
    id: 'id',
    creatorId: 'creatorId',
    points: 'points',
    nftId: 'nftId',
    accuracy: 'accuracy',
    createdAt: 'createdAt',
    rewardStatus: 'rewardStatus'
  };

  export type ParticpatedScalarFieldEnum = (typeof ParticpatedScalarFieldEnum)[keyof typeof ParticpatedScalarFieldEnum]


  export const AuctionBidsScalarFieldEnum: {
    id: 'id',
    auctionerId: 'auctionerId',
    nftId: 'nftId',
    amount: 'amount',
    createdAt: 'createdAt'
  };

  export type AuctionBidsScalarFieldEnum = (typeof AuctionBidsScalarFieldEnum)[keyof typeof AuctionBidsScalarFieldEnum]


  export const NftsScalarFieldEnum: {
    id: 'id',
    creatorId: 'creatorId',
    image: 'image',
    title: 'title',
    description: 'description',
    prompt: 'prompt',
    shortDescription: 'shortDescription',
    tokenId: 'tokenId',
    chainId: 'chainId',
    orderType: 'orderType',
    PriceInEth: 'PriceInEth',
    type: 'type',
    isBid: 'isBid',
    BidEndTime: 'BidEndTime',
    category: 'category',
    rewardEndDate: 'rewardEndDate',
    rewardPoints: 'rewardPoints',
    rewardForceCancelled: 'rewardForceCancelled',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NftsScalarFieldEnum = (typeof NftsScalarFieldEnum)[keyof typeof NftsScalarFieldEnum]


  export const TransactionsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    AmountInEth: 'AmountInEth',
    nftId: 'nftId',
    createdAt: 'createdAt'
  };

  export type TransactionsScalarFieldEnum = (typeof TransactionsScalarFieldEnum)[keyof typeof TransactionsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'rewardStatus'
   */
  export type EnumrewardStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'rewardStatus'>
    


  /**
   * Reference to a field of type 'rewardStatus[]'
   */
  export type ListEnumrewardStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'rewardStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'orderType'
   */
  export type EnumorderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'orderType'>
    


  /**
   * Reference to a field of type 'orderType[]'
   */
  export type ListEnumorderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'orderType[]'>
    


  /**
   * Reference to a field of type 'NftType'
   */
  export type EnumNftTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NftType'>
    


  /**
   * Reference to a field of type 'NftType[]'
   */
  export type ListEnumNftTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NftType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    points?: IntFilter<"User"> | number
    walletAddress?: StringFilter<"User"> | string
    twitter?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    rewards?: ParticpatedListRelationFilter
    nfts?: NftsListRelationFilter
    views?: ViewsListRelationFilter
    auctions?: AuctionBidsListRelationFilter
    likes?: LikesListRelationFilter
    transactions?: TransactionsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    points?: SortOrder
    walletAddress?: SortOrder
    twitter?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    rewards?: ParticpatedOrderByRelationAggregateInput
    nfts?: NftsOrderByRelationAggregateInput
    views?: ViewsOrderByRelationAggregateInput
    auctions?: AuctionBidsOrderByRelationAggregateInput
    likes?: LikesOrderByRelationAggregateInput
    transactions?: TransactionsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    walletAddress?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    points?: IntFilter<"User"> | number
    twitter?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    rewards?: ParticpatedListRelationFilter
    nfts?: NftsListRelationFilter
    views?: ViewsListRelationFilter
    auctions?: AuctionBidsListRelationFilter
    likes?: LikesListRelationFilter
    transactions?: TransactionsListRelationFilter
  }, "id" | "walletAddress">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    points?: SortOrder
    walletAddress?: SortOrder
    twitter?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    points?: IntWithAggregatesFilter<"User"> | number
    walletAddress?: StringWithAggregatesFilter<"User"> | string
    twitter?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type ViewsWhereInput = {
    AND?: ViewsWhereInput | ViewsWhereInput[]
    OR?: ViewsWhereInput[]
    NOT?: ViewsWhereInput | ViewsWhereInput[]
    id?: StringFilter<"Views"> | string
    userId?: StringFilter<"Views"> | string
    nftId?: StringFilter<"Views"> | string
    createdAt?: DateTimeFilter<"Views"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    nfts?: XOR<NftsRelationFilter, NftsWhereInput>
  }

  export type ViewsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    nftId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    nfts?: NftsOrderByWithRelationInput
  }

  export type ViewsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nftId?: string
    AND?: ViewsWhereInput | ViewsWhereInput[]
    OR?: ViewsWhereInput[]
    NOT?: ViewsWhereInput | ViewsWhereInput[]
    userId?: StringFilter<"Views"> | string
    createdAt?: DateTimeFilter<"Views"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    nfts?: XOR<NftsRelationFilter, NftsWhereInput>
  }, "id" | "nftId">

  export type ViewsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    nftId?: SortOrder
    createdAt?: SortOrder
    _count?: ViewsCountOrderByAggregateInput
    _max?: ViewsMaxOrderByAggregateInput
    _min?: ViewsMinOrderByAggregateInput
  }

  export type ViewsScalarWhereWithAggregatesInput = {
    AND?: ViewsScalarWhereWithAggregatesInput | ViewsScalarWhereWithAggregatesInput[]
    OR?: ViewsScalarWhereWithAggregatesInput[]
    NOT?: ViewsScalarWhereWithAggregatesInput | ViewsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Views"> | string
    userId?: StringWithAggregatesFilter<"Views"> | string
    nftId?: StringWithAggregatesFilter<"Views"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Views"> | Date | string
  }

  export type LikesWhereInput = {
    AND?: LikesWhereInput | LikesWhereInput[]
    OR?: LikesWhereInput[]
    NOT?: LikesWhereInput | LikesWhereInput[]
    id?: StringFilter<"Likes"> | string
    userId?: StringFilter<"Likes"> | string
    nftId?: StringFilter<"Likes"> | string
    createdAt?: DateTimeFilter<"Likes"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    nfts?: XOR<NftsRelationFilter, NftsWhereInput>
  }

  export type LikesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    nftId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    nfts?: NftsOrderByWithRelationInput
  }

  export type LikesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nftId?: string
    AND?: LikesWhereInput | LikesWhereInput[]
    OR?: LikesWhereInput[]
    NOT?: LikesWhereInput | LikesWhereInput[]
    userId?: StringFilter<"Likes"> | string
    createdAt?: DateTimeFilter<"Likes"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    nfts?: XOR<NftsRelationFilter, NftsWhereInput>
  }, "id" | "nftId">

  export type LikesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    nftId?: SortOrder
    createdAt?: SortOrder
    _count?: LikesCountOrderByAggregateInput
    _max?: LikesMaxOrderByAggregateInput
    _min?: LikesMinOrderByAggregateInput
  }

  export type LikesScalarWhereWithAggregatesInput = {
    AND?: LikesScalarWhereWithAggregatesInput | LikesScalarWhereWithAggregatesInput[]
    OR?: LikesScalarWhereWithAggregatesInput[]
    NOT?: LikesScalarWhereWithAggregatesInput | LikesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Likes"> | string
    userId?: StringWithAggregatesFilter<"Likes"> | string
    nftId?: StringWithAggregatesFilter<"Likes"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Likes"> | Date | string
  }

  export type TasksWhereInput = {
    AND?: TasksWhereInput | TasksWhereInput[]
    OR?: TasksWhereInput[]
    NOT?: TasksWhereInput | TasksWhereInput[]
    id?: StringFilter<"Tasks"> | string
    nftId?: StringFilter<"Tasks"> | string
    prompt?: StringFilter<"Tasks"> | string
    nfts?: XOR<NftsRelationFilter, NftsWhereInput>
  }

  export type TasksOrderByWithRelationInput = {
    id?: SortOrder
    nftId?: SortOrder
    prompt?: SortOrder
    nfts?: NftsOrderByWithRelationInput
  }

  export type TasksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nftId?: string
    AND?: TasksWhereInput | TasksWhereInput[]
    OR?: TasksWhereInput[]
    NOT?: TasksWhereInput | TasksWhereInput[]
    prompt?: StringFilter<"Tasks"> | string
    nfts?: XOR<NftsRelationFilter, NftsWhereInput>
  }, "id" | "nftId">

  export type TasksOrderByWithAggregationInput = {
    id?: SortOrder
    nftId?: SortOrder
    prompt?: SortOrder
    _count?: TasksCountOrderByAggregateInput
    _max?: TasksMaxOrderByAggregateInput
    _min?: TasksMinOrderByAggregateInput
  }

  export type TasksScalarWhereWithAggregatesInput = {
    AND?: TasksScalarWhereWithAggregatesInput | TasksScalarWhereWithAggregatesInput[]
    OR?: TasksScalarWhereWithAggregatesInput[]
    NOT?: TasksScalarWhereWithAggregatesInput | TasksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tasks"> | string
    nftId?: StringWithAggregatesFilter<"Tasks"> | string
    prompt?: StringWithAggregatesFilter<"Tasks"> | string
  }

  export type ParticpatedWhereInput = {
    AND?: ParticpatedWhereInput | ParticpatedWhereInput[]
    OR?: ParticpatedWhereInput[]
    NOT?: ParticpatedWhereInput | ParticpatedWhereInput[]
    id?: StringFilter<"Particpated"> | string
    creatorId?: StringFilter<"Particpated"> | string
    points?: IntFilter<"Particpated"> | number
    nftId?: StringFilter<"Particpated"> | string
    accuracy?: IntFilter<"Particpated"> | number
    createdAt?: DateTimeFilter<"Particpated"> | Date | string
    rewardStatus?: EnumrewardStatusFilter<"Particpated"> | $Enums.rewardStatus
    user?: XOR<UserRelationFilter, UserWhereInput>
    nft?: XOR<NftsRelationFilter, NftsWhereInput>
  }

  export type ParticpatedOrderByWithRelationInput = {
    id?: SortOrder
    creatorId?: SortOrder
    points?: SortOrder
    nftId?: SortOrder
    accuracy?: SortOrder
    createdAt?: SortOrder
    rewardStatus?: SortOrder
    user?: UserOrderByWithRelationInput
    nft?: NftsOrderByWithRelationInput
  }

  export type ParticpatedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ParticpatedWhereInput | ParticpatedWhereInput[]
    OR?: ParticpatedWhereInput[]
    NOT?: ParticpatedWhereInput | ParticpatedWhereInput[]
    creatorId?: StringFilter<"Particpated"> | string
    points?: IntFilter<"Particpated"> | number
    nftId?: StringFilter<"Particpated"> | string
    accuracy?: IntFilter<"Particpated"> | number
    createdAt?: DateTimeFilter<"Particpated"> | Date | string
    rewardStatus?: EnumrewardStatusFilter<"Particpated"> | $Enums.rewardStatus
    user?: XOR<UserRelationFilter, UserWhereInput>
    nft?: XOR<NftsRelationFilter, NftsWhereInput>
  }, "id">

  export type ParticpatedOrderByWithAggregationInput = {
    id?: SortOrder
    creatorId?: SortOrder
    points?: SortOrder
    nftId?: SortOrder
    accuracy?: SortOrder
    createdAt?: SortOrder
    rewardStatus?: SortOrder
    _count?: ParticpatedCountOrderByAggregateInput
    _avg?: ParticpatedAvgOrderByAggregateInput
    _max?: ParticpatedMaxOrderByAggregateInput
    _min?: ParticpatedMinOrderByAggregateInput
    _sum?: ParticpatedSumOrderByAggregateInput
  }

  export type ParticpatedScalarWhereWithAggregatesInput = {
    AND?: ParticpatedScalarWhereWithAggregatesInput | ParticpatedScalarWhereWithAggregatesInput[]
    OR?: ParticpatedScalarWhereWithAggregatesInput[]
    NOT?: ParticpatedScalarWhereWithAggregatesInput | ParticpatedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Particpated"> | string
    creatorId?: StringWithAggregatesFilter<"Particpated"> | string
    points?: IntWithAggregatesFilter<"Particpated"> | number
    nftId?: StringWithAggregatesFilter<"Particpated"> | string
    accuracy?: IntWithAggregatesFilter<"Particpated"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Particpated"> | Date | string
    rewardStatus?: EnumrewardStatusWithAggregatesFilter<"Particpated"> | $Enums.rewardStatus
  }

  export type AuctionBidsWhereInput = {
    AND?: AuctionBidsWhereInput | AuctionBidsWhereInput[]
    OR?: AuctionBidsWhereInput[]
    NOT?: AuctionBidsWhereInput | AuctionBidsWhereInput[]
    id?: StringFilter<"AuctionBids"> | string
    auctionerId?: StringFilter<"AuctionBids"> | string
    nftId?: StringFilter<"AuctionBids"> | string
    amount?: FloatFilter<"AuctionBids"> | number
    createdAt?: DateTimeFilter<"AuctionBids"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    nft?: XOR<NftsRelationFilter, NftsWhereInput>
  }

  export type AuctionBidsOrderByWithRelationInput = {
    id?: SortOrder
    auctionerId?: SortOrder
    nftId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    nft?: NftsOrderByWithRelationInput
  }

  export type AuctionBidsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuctionBidsWhereInput | AuctionBidsWhereInput[]
    OR?: AuctionBidsWhereInput[]
    NOT?: AuctionBidsWhereInput | AuctionBidsWhereInput[]
    auctionerId?: StringFilter<"AuctionBids"> | string
    nftId?: StringFilter<"AuctionBids"> | string
    amount?: FloatFilter<"AuctionBids"> | number
    createdAt?: DateTimeFilter<"AuctionBids"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    nft?: XOR<NftsRelationFilter, NftsWhereInput>
  }, "id">

  export type AuctionBidsOrderByWithAggregationInput = {
    id?: SortOrder
    auctionerId?: SortOrder
    nftId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    _count?: AuctionBidsCountOrderByAggregateInput
    _avg?: AuctionBidsAvgOrderByAggregateInput
    _max?: AuctionBidsMaxOrderByAggregateInput
    _min?: AuctionBidsMinOrderByAggregateInput
    _sum?: AuctionBidsSumOrderByAggregateInput
  }

  export type AuctionBidsScalarWhereWithAggregatesInput = {
    AND?: AuctionBidsScalarWhereWithAggregatesInput | AuctionBidsScalarWhereWithAggregatesInput[]
    OR?: AuctionBidsScalarWhereWithAggregatesInput[]
    NOT?: AuctionBidsScalarWhereWithAggregatesInput | AuctionBidsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuctionBids"> | string
    auctionerId?: StringWithAggregatesFilter<"AuctionBids"> | string
    nftId?: StringWithAggregatesFilter<"AuctionBids"> | string
    amount?: FloatWithAggregatesFilter<"AuctionBids"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AuctionBids"> | Date | string
  }

  export type NftsWhereInput = {
    AND?: NftsWhereInput | NftsWhereInput[]
    OR?: NftsWhereInput[]
    NOT?: NftsWhereInput | NftsWhereInput[]
    id?: StringFilter<"Nfts"> | string
    creatorId?: StringFilter<"Nfts"> | string
    image?: StringFilter<"Nfts"> | string
    title?: StringFilter<"Nfts"> | string
    description?: StringFilter<"Nfts"> | string
    prompt?: StringNullableFilter<"Nfts"> | string | null
    shortDescription?: StringNullableFilter<"Nfts"> | string | null
    tokenId?: StringFilter<"Nfts"> | string
    chainId?: IntFilter<"Nfts"> | number
    orderType?: EnumorderTypeFilter<"Nfts"> | $Enums.orderType
    PriceInEth?: FloatFilter<"Nfts"> | number
    type?: EnumNftTypeFilter<"Nfts"> | $Enums.NftType
    isBid?: BoolFilter<"Nfts"> | boolean
    BidEndTime?: DateTimeNullableFilter<"Nfts"> | Date | string | null
    category?: StringNullableListFilter<"Nfts">
    rewardEndDate?: DateTimeNullableFilter<"Nfts"> | Date | string | null
    rewardPoints?: IntNullableFilter<"Nfts"> | number | null
    rewardForceCancelled?: BoolNullableFilter<"Nfts"> | boolean | null
    status?: EnumStatusFilter<"Nfts"> | $Enums.Status
    createdAt?: DateTimeFilter<"Nfts"> | Date | string
    updatedAt?: DateTimeFilter<"Nfts"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    views?: ViewsListRelationFilter
    likes?: LikesListRelationFilter
    rewardWinners?: ParticpatedListRelationFilter
    rewardTasks?: TasksListRelationFilter
    AuctionBids?: AuctionBidsListRelationFilter
    transactions?: TransactionsListRelationFilter
  }

  export type NftsOrderByWithRelationInput = {
    id?: SortOrder
    creatorId?: SortOrder
    image?: SortOrder
    title?: SortOrder
    description?: SortOrder
    prompt?: SortOrderInput | SortOrder
    shortDescription?: SortOrderInput | SortOrder
    tokenId?: SortOrder
    chainId?: SortOrder
    orderType?: SortOrder
    PriceInEth?: SortOrder
    type?: SortOrder
    isBid?: SortOrder
    BidEndTime?: SortOrderInput | SortOrder
    category?: SortOrder
    rewardEndDate?: SortOrderInput | SortOrder
    rewardPoints?: SortOrderInput | SortOrder
    rewardForceCancelled?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    views?: ViewsOrderByRelationAggregateInput
    likes?: LikesOrderByRelationAggregateInput
    rewardWinners?: ParticpatedOrderByRelationAggregateInput
    rewardTasks?: TasksOrderByRelationAggregateInput
    AuctionBids?: AuctionBidsOrderByRelationAggregateInput
    transactions?: TransactionsOrderByRelationAggregateInput
  }

  export type NftsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NftsWhereInput | NftsWhereInput[]
    OR?: NftsWhereInput[]
    NOT?: NftsWhereInput | NftsWhereInput[]
    creatorId?: StringFilter<"Nfts"> | string
    image?: StringFilter<"Nfts"> | string
    title?: StringFilter<"Nfts"> | string
    description?: StringFilter<"Nfts"> | string
    prompt?: StringNullableFilter<"Nfts"> | string | null
    shortDescription?: StringNullableFilter<"Nfts"> | string | null
    tokenId?: StringFilter<"Nfts"> | string
    chainId?: IntFilter<"Nfts"> | number
    orderType?: EnumorderTypeFilter<"Nfts"> | $Enums.orderType
    PriceInEth?: FloatFilter<"Nfts"> | number
    type?: EnumNftTypeFilter<"Nfts"> | $Enums.NftType
    isBid?: BoolFilter<"Nfts"> | boolean
    BidEndTime?: DateTimeNullableFilter<"Nfts"> | Date | string | null
    category?: StringNullableListFilter<"Nfts">
    rewardEndDate?: DateTimeNullableFilter<"Nfts"> | Date | string | null
    rewardPoints?: IntNullableFilter<"Nfts"> | number | null
    rewardForceCancelled?: BoolNullableFilter<"Nfts"> | boolean | null
    status?: EnumStatusFilter<"Nfts"> | $Enums.Status
    createdAt?: DateTimeFilter<"Nfts"> | Date | string
    updatedAt?: DateTimeFilter<"Nfts"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    views?: ViewsListRelationFilter
    likes?: LikesListRelationFilter
    rewardWinners?: ParticpatedListRelationFilter
    rewardTasks?: TasksListRelationFilter
    AuctionBids?: AuctionBidsListRelationFilter
    transactions?: TransactionsListRelationFilter
  }, "id">

  export type NftsOrderByWithAggregationInput = {
    id?: SortOrder
    creatorId?: SortOrder
    image?: SortOrder
    title?: SortOrder
    description?: SortOrder
    prompt?: SortOrderInput | SortOrder
    shortDescription?: SortOrderInput | SortOrder
    tokenId?: SortOrder
    chainId?: SortOrder
    orderType?: SortOrder
    PriceInEth?: SortOrder
    type?: SortOrder
    isBid?: SortOrder
    BidEndTime?: SortOrderInput | SortOrder
    category?: SortOrder
    rewardEndDate?: SortOrderInput | SortOrder
    rewardPoints?: SortOrderInput | SortOrder
    rewardForceCancelled?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NftsCountOrderByAggregateInput
    _avg?: NftsAvgOrderByAggregateInput
    _max?: NftsMaxOrderByAggregateInput
    _min?: NftsMinOrderByAggregateInput
    _sum?: NftsSumOrderByAggregateInput
  }

  export type NftsScalarWhereWithAggregatesInput = {
    AND?: NftsScalarWhereWithAggregatesInput | NftsScalarWhereWithAggregatesInput[]
    OR?: NftsScalarWhereWithAggregatesInput[]
    NOT?: NftsScalarWhereWithAggregatesInput | NftsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Nfts"> | string
    creatorId?: StringWithAggregatesFilter<"Nfts"> | string
    image?: StringWithAggregatesFilter<"Nfts"> | string
    title?: StringWithAggregatesFilter<"Nfts"> | string
    description?: StringWithAggregatesFilter<"Nfts"> | string
    prompt?: StringNullableWithAggregatesFilter<"Nfts"> | string | null
    shortDescription?: StringNullableWithAggregatesFilter<"Nfts"> | string | null
    tokenId?: StringWithAggregatesFilter<"Nfts"> | string
    chainId?: IntWithAggregatesFilter<"Nfts"> | number
    orderType?: EnumorderTypeWithAggregatesFilter<"Nfts"> | $Enums.orderType
    PriceInEth?: FloatWithAggregatesFilter<"Nfts"> | number
    type?: EnumNftTypeWithAggregatesFilter<"Nfts"> | $Enums.NftType
    isBid?: BoolWithAggregatesFilter<"Nfts"> | boolean
    BidEndTime?: DateTimeNullableWithAggregatesFilter<"Nfts"> | Date | string | null
    category?: StringNullableListFilter<"Nfts">
    rewardEndDate?: DateTimeNullableWithAggregatesFilter<"Nfts"> | Date | string | null
    rewardPoints?: IntNullableWithAggregatesFilter<"Nfts"> | number | null
    rewardForceCancelled?: BoolNullableWithAggregatesFilter<"Nfts"> | boolean | null
    status?: EnumStatusWithAggregatesFilter<"Nfts"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Nfts"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Nfts"> | Date | string
  }

  export type TransactionsWhereInput = {
    AND?: TransactionsWhereInput | TransactionsWhereInput[]
    OR?: TransactionsWhereInput[]
    NOT?: TransactionsWhereInput | TransactionsWhereInput[]
    id?: StringFilter<"Transactions"> | string
    userId?: StringFilter<"Transactions"> | string
    type?: EnumTransactionTypeFilter<"Transactions"> | $Enums.TransactionType
    AmountInEth?: FloatFilter<"Transactions"> | number
    nftId?: StringFilter<"Transactions"> | string
    createdAt?: DateTimeFilter<"Transactions"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    nft?: XOR<NftsRelationFilter, NftsWhereInput>
  }

  export type TransactionsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    AmountInEth?: SortOrder
    nftId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    nft?: NftsOrderByWithRelationInput
  }

  export type TransactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionsWhereInput | TransactionsWhereInput[]
    OR?: TransactionsWhereInput[]
    NOT?: TransactionsWhereInput | TransactionsWhereInput[]
    userId?: StringFilter<"Transactions"> | string
    type?: EnumTransactionTypeFilter<"Transactions"> | $Enums.TransactionType
    AmountInEth?: FloatFilter<"Transactions"> | number
    nftId?: StringFilter<"Transactions"> | string
    createdAt?: DateTimeFilter<"Transactions"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    nft?: XOR<NftsRelationFilter, NftsWhereInput>
  }, "id">

  export type TransactionsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    AmountInEth?: SortOrder
    nftId?: SortOrder
    createdAt?: SortOrder
    _count?: TransactionsCountOrderByAggregateInput
    _avg?: TransactionsAvgOrderByAggregateInput
    _max?: TransactionsMaxOrderByAggregateInput
    _min?: TransactionsMinOrderByAggregateInput
    _sum?: TransactionsSumOrderByAggregateInput
  }

  export type TransactionsScalarWhereWithAggregatesInput = {
    AND?: TransactionsScalarWhereWithAggregatesInput | TransactionsScalarWhereWithAggregatesInput[]
    OR?: TransactionsScalarWhereWithAggregatesInput[]
    NOT?: TransactionsScalarWhereWithAggregatesInput | TransactionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transactions"> | string
    userId?: StringWithAggregatesFilter<"Transactions"> | string
    type?: EnumTransactionTypeWithAggregatesFilter<"Transactions"> | $Enums.TransactionType
    AmountInEth?: FloatWithAggregatesFilter<"Transactions"> | number
    nftId?: StringWithAggregatesFilter<"Transactions"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Transactions"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email?: string | null
    name?: string | null
    points?: number
    walletAddress: string
    twitter?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    rewards?: ParticpatedCreateNestedManyWithoutUserInput
    nfts?: NftsCreateNestedManyWithoutUserInput
    views?: ViewsCreateNestedManyWithoutUserInput
    auctions?: AuctionBidsCreateNestedManyWithoutUserInput
    likes?: LikesCreateNestedManyWithoutUserInput
    transactions?: TransactionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email?: string | null
    name?: string | null
    points?: number
    walletAddress: string
    twitter?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    rewards?: ParticpatedUncheckedCreateNestedManyWithoutUserInput
    nfts?: NftsUncheckedCreateNestedManyWithoutUserInput
    views?: ViewsUncheckedCreateNestedManyWithoutUserInput
    auctions?: AuctionBidsUncheckedCreateNestedManyWithoutUserInput
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    walletAddress?: StringFieldUpdateOperationsInput | string
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rewards?: ParticpatedUpdateManyWithoutUserNestedInput
    nfts?: NftsUpdateManyWithoutUserNestedInput
    views?: ViewsUpdateManyWithoutUserNestedInput
    auctions?: AuctionBidsUpdateManyWithoutUserNestedInput
    likes?: LikesUpdateManyWithoutUserNestedInput
    transactions?: TransactionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    walletAddress?: StringFieldUpdateOperationsInput | string
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rewards?: ParticpatedUncheckedUpdateManyWithoutUserNestedInput
    nfts?: NftsUncheckedUpdateManyWithoutUserNestedInput
    views?: ViewsUncheckedUpdateManyWithoutUserNestedInput
    auctions?: AuctionBidsUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email?: string | null
    name?: string | null
    points?: number
    walletAddress: string
    twitter?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    walletAddress?: StringFieldUpdateOperationsInput | string
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    walletAddress?: StringFieldUpdateOperationsInput | string
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type ViewsCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutViewsInput
    nfts: NftsCreateNestedOneWithoutViewsInput
  }

  export type ViewsUncheckedCreateInput = {
    id?: string
    userId: string
    nftId: string
    createdAt?: Date | string
  }

  export type ViewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutViewsNestedInput
    nfts?: NftsUpdateOneRequiredWithoutViewsNestedInput
  }

  export type ViewsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nftId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewsCreateManyInput = {
    id?: string
    userId: string
    nftId: string
    createdAt?: Date | string
  }

  export type ViewsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nftId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLikesInput
    nfts: NftsCreateNestedOneWithoutLikesInput
  }

  export type LikesUncheckedCreateInput = {
    id?: string
    userId: string
    nftId: string
    createdAt?: Date | string
  }

  export type LikesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
    nfts?: NftsUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nftId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesCreateManyInput = {
    id?: string
    userId: string
    nftId: string
    createdAt?: Date | string
  }

  export type LikesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nftId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TasksCreateInput = {
    id?: string
    prompt: string
    nfts: NftsCreateNestedOneWithoutRewardTasksInput
  }

  export type TasksUncheckedCreateInput = {
    id?: string
    nftId: string
    prompt: string
  }

  export type TasksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    nfts?: NftsUpdateOneRequiredWithoutRewardTasksNestedInput
  }

  export type TasksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nftId?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
  }

  export type TasksCreateManyInput = {
    id?: string
    nftId: string
    prompt: string
  }

  export type TasksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
  }

  export type TasksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nftId?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
  }

  export type ParticpatedCreateInput = {
    id?: string
    points: number
    accuracy: number
    createdAt?: Date | string
    rewardStatus?: $Enums.rewardStatus
    user: UserCreateNestedOneWithoutRewardsInput
    nft: NftsCreateNestedOneWithoutRewardWinnersInput
  }

  export type ParticpatedUncheckedCreateInput = {
    id?: string
    creatorId: string
    points: number
    nftId: string
    accuracy: number
    createdAt?: Date | string
    rewardStatus?: $Enums.rewardStatus
  }

  export type ParticpatedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    accuracy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rewardStatus?: EnumrewardStatusFieldUpdateOperationsInput | $Enums.rewardStatus
    user?: UserUpdateOneRequiredWithoutRewardsNestedInput
    nft?: NftsUpdateOneRequiredWithoutRewardWinnersNestedInput
  }

  export type ParticpatedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    nftId?: StringFieldUpdateOperationsInput | string
    accuracy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rewardStatus?: EnumrewardStatusFieldUpdateOperationsInput | $Enums.rewardStatus
  }

  export type ParticpatedCreateManyInput = {
    id?: string
    creatorId: string
    points: number
    nftId: string
    accuracy: number
    createdAt?: Date | string
    rewardStatus?: $Enums.rewardStatus
  }

  export type ParticpatedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    accuracy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rewardStatus?: EnumrewardStatusFieldUpdateOperationsInput | $Enums.rewardStatus
  }

  export type ParticpatedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    nftId?: StringFieldUpdateOperationsInput | string
    accuracy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rewardStatus?: EnumrewardStatusFieldUpdateOperationsInput | $Enums.rewardStatus
  }

  export type AuctionBidsCreateInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAuctionsInput
    nft: NftsCreateNestedOneWithoutAuctionBidsInput
  }

  export type AuctionBidsUncheckedCreateInput = {
    id?: string
    auctionerId: string
    nftId: string
    amount: number
    createdAt?: Date | string
  }

  export type AuctionBidsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuctionsNestedInput
    nft?: NftsUpdateOneRequiredWithoutAuctionBidsNestedInput
  }

  export type AuctionBidsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    auctionerId?: StringFieldUpdateOperationsInput | string
    nftId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuctionBidsCreateManyInput = {
    id?: string
    auctionerId: string
    nftId: string
    amount: number
    createdAt?: Date | string
  }

  export type AuctionBidsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuctionBidsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    auctionerId?: StringFieldUpdateOperationsInput | string
    nftId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NftsCreateInput = {
    id?: string
    image: string
    title: string
    description: string
    prompt?: string | null
    shortDescription?: string | null
    tokenId: string
    chainId: number
    orderType?: $Enums.orderType
    PriceInEth: number
    type?: $Enums.NftType
    isBid: boolean
    BidEndTime?: Date | string | null
    category?: NftsCreatecategoryInput | string[]
    rewardEndDate?: Date | string | null
    rewardPoints?: number | null
    rewardForceCancelled?: boolean | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNftsInput
    views?: ViewsCreateNestedManyWithoutNftsInput
    likes?: LikesCreateNestedManyWithoutNftsInput
    rewardWinners?: ParticpatedCreateNestedManyWithoutNftInput
    rewardTasks?: TasksCreateNestedManyWithoutNftsInput
    AuctionBids?: AuctionBidsCreateNestedManyWithoutNftInput
    transactions?: TransactionsCreateNestedManyWithoutNftInput
  }

  export type NftsUncheckedCreateInput = {
    id?: string
    creatorId: string
    image: string
    title: string
    description: string
    prompt?: string | null
    shortDescription?: string | null
    tokenId: string
    chainId: number
    orderType?: $Enums.orderType
    PriceInEth: number
    type?: $Enums.NftType
    isBid: boolean
    BidEndTime?: Date | string | null
    category?: NftsCreatecategoryInput | string[]
    rewardEndDate?: Date | string | null
    rewardPoints?: number | null
    rewardForceCancelled?: boolean | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    views?: ViewsUncheckedCreateNestedManyWithoutNftsInput
    likes?: LikesUncheckedCreateNestedManyWithoutNftsInput
    rewardWinners?: ParticpatedUncheckedCreateNestedManyWithoutNftInput
    rewardTasks?: TasksUncheckedCreateNestedManyWithoutNftsInput
    AuctionBids?: AuctionBidsUncheckedCreateNestedManyWithoutNftInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutNftInput
  }

  export type NftsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: StringFieldUpdateOperationsInput | string
    chainId?: IntFieldUpdateOperationsInput | number
    orderType?: EnumorderTypeFieldUpdateOperationsInput | $Enums.orderType
    PriceInEth?: FloatFieldUpdateOperationsInput | number
    type?: EnumNftTypeFieldUpdateOperationsInput | $Enums.NftType
    isBid?: BoolFieldUpdateOperationsInput | boolean
    BidEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NftsUpdatecategoryInput | string[]
    rewardEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rewardPoints?: NullableIntFieldUpdateOperationsInput | number | null
    rewardForceCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNftsNestedInput
    views?: ViewsUpdateManyWithoutNftsNestedInput
    likes?: LikesUpdateManyWithoutNftsNestedInput
    rewardWinners?: ParticpatedUpdateManyWithoutNftNestedInput
    rewardTasks?: TasksUpdateManyWithoutNftsNestedInput
    AuctionBids?: AuctionBidsUpdateManyWithoutNftNestedInput
    transactions?: TransactionsUpdateManyWithoutNftNestedInput
  }

  export type NftsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: StringFieldUpdateOperationsInput | string
    chainId?: IntFieldUpdateOperationsInput | number
    orderType?: EnumorderTypeFieldUpdateOperationsInput | $Enums.orderType
    PriceInEth?: FloatFieldUpdateOperationsInput | number
    type?: EnumNftTypeFieldUpdateOperationsInput | $Enums.NftType
    isBid?: BoolFieldUpdateOperationsInput | boolean
    BidEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NftsUpdatecategoryInput | string[]
    rewardEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rewardPoints?: NullableIntFieldUpdateOperationsInput | number | null
    rewardForceCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: ViewsUncheckedUpdateManyWithoutNftsNestedInput
    likes?: LikesUncheckedUpdateManyWithoutNftsNestedInput
    rewardWinners?: ParticpatedUncheckedUpdateManyWithoutNftNestedInput
    rewardTasks?: TasksUncheckedUpdateManyWithoutNftsNestedInput
    AuctionBids?: AuctionBidsUncheckedUpdateManyWithoutNftNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutNftNestedInput
  }

  export type NftsCreateManyInput = {
    id?: string
    creatorId: string
    image: string
    title: string
    description: string
    prompt?: string | null
    shortDescription?: string | null
    tokenId: string
    chainId: number
    orderType?: $Enums.orderType
    PriceInEth: number
    type?: $Enums.NftType
    isBid: boolean
    BidEndTime?: Date | string | null
    category?: NftsCreatecategoryInput | string[]
    rewardEndDate?: Date | string | null
    rewardPoints?: number | null
    rewardForceCancelled?: boolean | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NftsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: StringFieldUpdateOperationsInput | string
    chainId?: IntFieldUpdateOperationsInput | number
    orderType?: EnumorderTypeFieldUpdateOperationsInput | $Enums.orderType
    PriceInEth?: FloatFieldUpdateOperationsInput | number
    type?: EnumNftTypeFieldUpdateOperationsInput | $Enums.NftType
    isBid?: BoolFieldUpdateOperationsInput | boolean
    BidEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NftsUpdatecategoryInput | string[]
    rewardEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rewardPoints?: NullableIntFieldUpdateOperationsInput | number | null
    rewardForceCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NftsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: StringFieldUpdateOperationsInput | string
    chainId?: IntFieldUpdateOperationsInput | number
    orderType?: EnumorderTypeFieldUpdateOperationsInput | $Enums.orderType
    PriceInEth?: FloatFieldUpdateOperationsInput | number
    type?: EnumNftTypeFieldUpdateOperationsInput | $Enums.NftType
    isBid?: BoolFieldUpdateOperationsInput | boolean
    BidEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NftsUpdatecategoryInput | string[]
    rewardEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rewardPoints?: NullableIntFieldUpdateOperationsInput | number | null
    rewardForceCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsCreateInput = {
    id?: string
    type: $Enums.TransactionType
    AmountInEth: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    nft: NftsCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionsUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.TransactionType
    AmountInEth: number
    nftId: string
    createdAt?: Date | string
  }

  export type TransactionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    AmountInEth?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    nft?: NftsUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    AmountInEth?: FloatFieldUpdateOperationsInput | number
    nftId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.TransactionType
    AmountInEth: number
    nftId: string
    createdAt?: Date | string
  }

  export type TransactionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    AmountInEth?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    AmountInEth?: FloatFieldUpdateOperationsInput | number
    nftId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type ParticpatedListRelationFilter = {
    every?: ParticpatedWhereInput
    some?: ParticpatedWhereInput
    none?: ParticpatedWhereInput
  }

  export type NftsListRelationFilter = {
    every?: NftsWhereInput
    some?: NftsWhereInput
    none?: NftsWhereInput
  }

  export type ViewsListRelationFilter = {
    every?: ViewsWhereInput
    some?: ViewsWhereInput
    none?: ViewsWhereInput
  }

  export type AuctionBidsListRelationFilter = {
    every?: AuctionBidsWhereInput
    some?: AuctionBidsWhereInput
    none?: AuctionBidsWhereInput
  }

  export type LikesListRelationFilter = {
    every?: LikesWhereInput
    some?: LikesWhereInput
    none?: LikesWhereInput
  }

  export type TransactionsListRelationFilter = {
    every?: TransactionsWhereInput
    some?: TransactionsWhereInput
    none?: TransactionsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ParticpatedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NftsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuctionBidsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    points?: SortOrder
    walletAddress?: SortOrder
    twitter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    points?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    points?: SortOrder
    walletAddress?: SortOrder
    twitter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    points?: SortOrder
    walletAddress?: SortOrder
    twitter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    points?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type NftsRelationFilter = {
    is?: NftsWhereInput
    isNot?: NftsWhereInput
  }

  export type ViewsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nftId?: SortOrder
    createdAt?: SortOrder
  }

  export type ViewsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nftId?: SortOrder
    createdAt?: SortOrder
  }

  export type ViewsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nftId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nftId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nftId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nftId?: SortOrder
    createdAt?: SortOrder
  }

  export type TasksCountOrderByAggregateInput = {
    id?: SortOrder
    nftId?: SortOrder
    prompt?: SortOrder
  }

  export type TasksMaxOrderByAggregateInput = {
    id?: SortOrder
    nftId?: SortOrder
    prompt?: SortOrder
  }

  export type TasksMinOrderByAggregateInput = {
    id?: SortOrder
    nftId?: SortOrder
    prompt?: SortOrder
  }

  export type EnumrewardStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.rewardStatus | EnumrewardStatusFieldRefInput<$PrismaModel>
    in?: $Enums.rewardStatus[] | ListEnumrewardStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.rewardStatus[] | ListEnumrewardStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumrewardStatusFilter<$PrismaModel> | $Enums.rewardStatus
  }

  export type ParticpatedCountOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    points?: SortOrder
    nftId?: SortOrder
    accuracy?: SortOrder
    createdAt?: SortOrder
    rewardStatus?: SortOrder
  }

  export type ParticpatedAvgOrderByAggregateInput = {
    points?: SortOrder
    accuracy?: SortOrder
  }

  export type ParticpatedMaxOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    points?: SortOrder
    nftId?: SortOrder
    accuracy?: SortOrder
    createdAt?: SortOrder
    rewardStatus?: SortOrder
  }

  export type ParticpatedMinOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    points?: SortOrder
    nftId?: SortOrder
    accuracy?: SortOrder
    createdAt?: SortOrder
    rewardStatus?: SortOrder
  }

  export type ParticpatedSumOrderByAggregateInput = {
    points?: SortOrder
    accuracy?: SortOrder
  }

  export type EnumrewardStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.rewardStatus | EnumrewardStatusFieldRefInput<$PrismaModel>
    in?: $Enums.rewardStatus[] | ListEnumrewardStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.rewardStatus[] | ListEnumrewardStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumrewardStatusWithAggregatesFilter<$PrismaModel> | $Enums.rewardStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumrewardStatusFilter<$PrismaModel>
    _max?: NestedEnumrewardStatusFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AuctionBidsCountOrderByAggregateInput = {
    id?: SortOrder
    auctionerId?: SortOrder
    nftId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type AuctionBidsAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type AuctionBidsMaxOrderByAggregateInput = {
    id?: SortOrder
    auctionerId?: SortOrder
    nftId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type AuctionBidsMinOrderByAggregateInput = {
    id?: SortOrder
    auctionerId?: SortOrder
    nftId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type AuctionBidsSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumorderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.orderType | EnumorderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.orderType[] | ListEnumorderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.orderType[] | ListEnumorderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumorderTypeFilter<$PrismaModel> | $Enums.orderType
  }

  export type EnumNftTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NftType | EnumNftTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NftType[] | ListEnumNftTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NftType[] | ListEnumNftTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNftTypeFilter<$PrismaModel> | $Enums.NftType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type TasksListRelationFilter = {
    every?: TasksWhereInput
    some?: TasksWhereInput
    none?: TasksWhereInput
  }

  export type TasksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NftsCountOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    image?: SortOrder
    title?: SortOrder
    description?: SortOrder
    prompt?: SortOrder
    shortDescription?: SortOrder
    tokenId?: SortOrder
    chainId?: SortOrder
    orderType?: SortOrder
    PriceInEth?: SortOrder
    type?: SortOrder
    isBid?: SortOrder
    BidEndTime?: SortOrder
    category?: SortOrder
    rewardEndDate?: SortOrder
    rewardPoints?: SortOrder
    rewardForceCancelled?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NftsAvgOrderByAggregateInput = {
    chainId?: SortOrder
    PriceInEth?: SortOrder
    rewardPoints?: SortOrder
  }

  export type NftsMaxOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    image?: SortOrder
    title?: SortOrder
    description?: SortOrder
    prompt?: SortOrder
    shortDescription?: SortOrder
    tokenId?: SortOrder
    chainId?: SortOrder
    orderType?: SortOrder
    PriceInEth?: SortOrder
    type?: SortOrder
    isBid?: SortOrder
    BidEndTime?: SortOrder
    rewardEndDate?: SortOrder
    rewardPoints?: SortOrder
    rewardForceCancelled?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NftsMinOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    image?: SortOrder
    title?: SortOrder
    description?: SortOrder
    prompt?: SortOrder
    shortDescription?: SortOrder
    tokenId?: SortOrder
    chainId?: SortOrder
    orderType?: SortOrder
    PriceInEth?: SortOrder
    type?: SortOrder
    isBid?: SortOrder
    BidEndTime?: SortOrder
    rewardEndDate?: SortOrder
    rewardPoints?: SortOrder
    rewardForceCancelled?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NftsSumOrderByAggregateInput = {
    chainId?: SortOrder
    PriceInEth?: SortOrder
    rewardPoints?: SortOrder
  }

  export type EnumorderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.orderType | EnumorderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.orderType[] | ListEnumorderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.orderType[] | ListEnumorderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumorderTypeWithAggregatesFilter<$PrismaModel> | $Enums.orderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumorderTypeFilter<$PrismaModel>
    _max?: NestedEnumorderTypeFilter<$PrismaModel>
  }

  export type EnumNftTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NftType | EnumNftTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NftType[] | ListEnumNftTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NftType[] | ListEnumNftTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNftTypeWithAggregatesFilter<$PrismaModel> | $Enums.NftType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNftTypeFilter<$PrismaModel>
    _max?: NestedEnumNftTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type TransactionsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    AmountInEth?: SortOrder
    nftId?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionsAvgOrderByAggregateInput = {
    AmountInEth?: SortOrder
  }

  export type TransactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    AmountInEth?: SortOrder
    nftId?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    AmountInEth?: SortOrder
    nftId?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionsSumOrderByAggregateInput = {
    AmountInEth?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type ParticpatedCreateNestedManyWithoutUserInput = {
    create?: XOR<ParticpatedCreateWithoutUserInput, ParticpatedUncheckedCreateWithoutUserInput> | ParticpatedCreateWithoutUserInput[] | ParticpatedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParticpatedCreateOrConnectWithoutUserInput | ParticpatedCreateOrConnectWithoutUserInput[]
    createMany?: ParticpatedCreateManyUserInputEnvelope
    connect?: ParticpatedWhereUniqueInput | ParticpatedWhereUniqueInput[]
  }

  export type NftsCreateNestedManyWithoutUserInput = {
    create?: XOR<NftsCreateWithoutUserInput, NftsUncheckedCreateWithoutUserInput> | NftsCreateWithoutUserInput[] | NftsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NftsCreateOrConnectWithoutUserInput | NftsCreateOrConnectWithoutUserInput[]
    createMany?: NftsCreateManyUserInputEnvelope
    connect?: NftsWhereUniqueInput | NftsWhereUniqueInput[]
  }

  export type ViewsCreateNestedManyWithoutUserInput = {
    create?: XOR<ViewsCreateWithoutUserInput, ViewsUncheckedCreateWithoutUserInput> | ViewsCreateWithoutUserInput[] | ViewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewsCreateOrConnectWithoutUserInput | ViewsCreateOrConnectWithoutUserInput[]
    createMany?: ViewsCreateManyUserInputEnvelope
    connect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
  }

  export type AuctionBidsCreateNestedManyWithoutUserInput = {
    create?: XOR<AuctionBidsCreateWithoutUserInput, AuctionBidsUncheckedCreateWithoutUserInput> | AuctionBidsCreateWithoutUserInput[] | AuctionBidsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuctionBidsCreateOrConnectWithoutUserInput | AuctionBidsCreateOrConnectWithoutUserInput[]
    createMany?: AuctionBidsCreateManyUserInputEnvelope
    connect?: AuctionBidsWhereUniqueInput | AuctionBidsWhereUniqueInput[]
  }

  export type LikesCreateNestedManyWithoutUserInput = {
    create?: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput> | LikesCreateWithoutUserInput[] | LikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutUserInput | LikesCreateOrConnectWithoutUserInput[]
    createMany?: LikesCreateManyUserInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type TransactionsCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput> | TransactionsCreateWithoutUserInput[] | TransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutUserInput | TransactionsCreateOrConnectWithoutUserInput[]
    createMany?: TransactionsCreateManyUserInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type ParticpatedUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ParticpatedCreateWithoutUserInput, ParticpatedUncheckedCreateWithoutUserInput> | ParticpatedCreateWithoutUserInput[] | ParticpatedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParticpatedCreateOrConnectWithoutUserInput | ParticpatedCreateOrConnectWithoutUserInput[]
    createMany?: ParticpatedCreateManyUserInputEnvelope
    connect?: ParticpatedWhereUniqueInput | ParticpatedWhereUniqueInput[]
  }

  export type NftsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NftsCreateWithoutUserInput, NftsUncheckedCreateWithoutUserInput> | NftsCreateWithoutUserInput[] | NftsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NftsCreateOrConnectWithoutUserInput | NftsCreateOrConnectWithoutUserInput[]
    createMany?: NftsCreateManyUserInputEnvelope
    connect?: NftsWhereUniqueInput | NftsWhereUniqueInput[]
  }

  export type ViewsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ViewsCreateWithoutUserInput, ViewsUncheckedCreateWithoutUserInput> | ViewsCreateWithoutUserInput[] | ViewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewsCreateOrConnectWithoutUserInput | ViewsCreateOrConnectWithoutUserInput[]
    createMany?: ViewsCreateManyUserInputEnvelope
    connect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
  }

  export type AuctionBidsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuctionBidsCreateWithoutUserInput, AuctionBidsUncheckedCreateWithoutUserInput> | AuctionBidsCreateWithoutUserInput[] | AuctionBidsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuctionBidsCreateOrConnectWithoutUserInput | AuctionBidsCreateOrConnectWithoutUserInput[]
    createMany?: AuctionBidsCreateManyUserInputEnvelope
    connect?: AuctionBidsWhereUniqueInput | AuctionBidsWhereUniqueInput[]
  }

  export type LikesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput> | LikesCreateWithoutUserInput[] | LikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutUserInput | LikesCreateOrConnectWithoutUserInput[]
    createMany?: LikesCreateManyUserInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type TransactionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput> | TransactionsCreateWithoutUserInput[] | TransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutUserInput | TransactionsCreateOrConnectWithoutUserInput[]
    createMany?: TransactionsCreateManyUserInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type ParticpatedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ParticpatedCreateWithoutUserInput, ParticpatedUncheckedCreateWithoutUserInput> | ParticpatedCreateWithoutUserInput[] | ParticpatedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParticpatedCreateOrConnectWithoutUserInput | ParticpatedCreateOrConnectWithoutUserInput[]
    upsert?: ParticpatedUpsertWithWhereUniqueWithoutUserInput | ParticpatedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ParticpatedCreateManyUserInputEnvelope
    set?: ParticpatedWhereUniqueInput | ParticpatedWhereUniqueInput[]
    disconnect?: ParticpatedWhereUniqueInput | ParticpatedWhereUniqueInput[]
    delete?: ParticpatedWhereUniqueInput | ParticpatedWhereUniqueInput[]
    connect?: ParticpatedWhereUniqueInput | ParticpatedWhereUniqueInput[]
    update?: ParticpatedUpdateWithWhereUniqueWithoutUserInput | ParticpatedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ParticpatedUpdateManyWithWhereWithoutUserInput | ParticpatedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ParticpatedScalarWhereInput | ParticpatedScalarWhereInput[]
  }

  export type NftsUpdateManyWithoutUserNestedInput = {
    create?: XOR<NftsCreateWithoutUserInput, NftsUncheckedCreateWithoutUserInput> | NftsCreateWithoutUserInput[] | NftsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NftsCreateOrConnectWithoutUserInput | NftsCreateOrConnectWithoutUserInput[]
    upsert?: NftsUpsertWithWhereUniqueWithoutUserInput | NftsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NftsCreateManyUserInputEnvelope
    set?: NftsWhereUniqueInput | NftsWhereUniqueInput[]
    disconnect?: NftsWhereUniqueInput | NftsWhereUniqueInput[]
    delete?: NftsWhereUniqueInput | NftsWhereUniqueInput[]
    connect?: NftsWhereUniqueInput | NftsWhereUniqueInput[]
    update?: NftsUpdateWithWhereUniqueWithoutUserInput | NftsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NftsUpdateManyWithWhereWithoutUserInput | NftsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NftsScalarWhereInput | NftsScalarWhereInput[]
  }

  export type ViewsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ViewsCreateWithoutUserInput, ViewsUncheckedCreateWithoutUserInput> | ViewsCreateWithoutUserInput[] | ViewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewsCreateOrConnectWithoutUserInput | ViewsCreateOrConnectWithoutUserInput[]
    upsert?: ViewsUpsertWithWhereUniqueWithoutUserInput | ViewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ViewsCreateManyUserInputEnvelope
    set?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    disconnect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    delete?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    connect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    update?: ViewsUpdateWithWhereUniqueWithoutUserInput | ViewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ViewsUpdateManyWithWhereWithoutUserInput | ViewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ViewsScalarWhereInput | ViewsScalarWhereInput[]
  }

  export type AuctionBidsUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuctionBidsCreateWithoutUserInput, AuctionBidsUncheckedCreateWithoutUserInput> | AuctionBidsCreateWithoutUserInput[] | AuctionBidsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuctionBidsCreateOrConnectWithoutUserInput | AuctionBidsCreateOrConnectWithoutUserInput[]
    upsert?: AuctionBidsUpsertWithWhereUniqueWithoutUserInput | AuctionBidsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuctionBidsCreateManyUserInputEnvelope
    set?: AuctionBidsWhereUniqueInput | AuctionBidsWhereUniqueInput[]
    disconnect?: AuctionBidsWhereUniqueInput | AuctionBidsWhereUniqueInput[]
    delete?: AuctionBidsWhereUniqueInput | AuctionBidsWhereUniqueInput[]
    connect?: AuctionBidsWhereUniqueInput | AuctionBidsWhereUniqueInput[]
    update?: AuctionBidsUpdateWithWhereUniqueWithoutUserInput | AuctionBidsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuctionBidsUpdateManyWithWhereWithoutUserInput | AuctionBidsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuctionBidsScalarWhereInput | AuctionBidsScalarWhereInput[]
  }

  export type LikesUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput> | LikesCreateWithoutUserInput[] | LikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutUserInput | LikesCreateOrConnectWithoutUserInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutUserInput | LikesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikesCreateManyUserInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutUserInput | LikesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutUserInput | LikesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type TransactionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput> | TransactionsCreateWithoutUserInput[] | TransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutUserInput | TransactionsCreateOrConnectWithoutUserInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutUserInput | TransactionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionsCreateManyUserInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutUserInput | TransactionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutUserInput | TransactionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type ParticpatedUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ParticpatedCreateWithoutUserInput, ParticpatedUncheckedCreateWithoutUserInput> | ParticpatedCreateWithoutUserInput[] | ParticpatedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParticpatedCreateOrConnectWithoutUserInput | ParticpatedCreateOrConnectWithoutUserInput[]
    upsert?: ParticpatedUpsertWithWhereUniqueWithoutUserInput | ParticpatedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ParticpatedCreateManyUserInputEnvelope
    set?: ParticpatedWhereUniqueInput | ParticpatedWhereUniqueInput[]
    disconnect?: ParticpatedWhereUniqueInput | ParticpatedWhereUniqueInput[]
    delete?: ParticpatedWhereUniqueInput | ParticpatedWhereUniqueInput[]
    connect?: ParticpatedWhereUniqueInput | ParticpatedWhereUniqueInput[]
    update?: ParticpatedUpdateWithWhereUniqueWithoutUserInput | ParticpatedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ParticpatedUpdateManyWithWhereWithoutUserInput | ParticpatedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ParticpatedScalarWhereInput | ParticpatedScalarWhereInput[]
  }

  export type NftsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NftsCreateWithoutUserInput, NftsUncheckedCreateWithoutUserInput> | NftsCreateWithoutUserInput[] | NftsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NftsCreateOrConnectWithoutUserInput | NftsCreateOrConnectWithoutUserInput[]
    upsert?: NftsUpsertWithWhereUniqueWithoutUserInput | NftsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NftsCreateManyUserInputEnvelope
    set?: NftsWhereUniqueInput | NftsWhereUniqueInput[]
    disconnect?: NftsWhereUniqueInput | NftsWhereUniqueInput[]
    delete?: NftsWhereUniqueInput | NftsWhereUniqueInput[]
    connect?: NftsWhereUniqueInput | NftsWhereUniqueInput[]
    update?: NftsUpdateWithWhereUniqueWithoutUserInput | NftsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NftsUpdateManyWithWhereWithoutUserInput | NftsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NftsScalarWhereInput | NftsScalarWhereInput[]
  }

  export type ViewsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ViewsCreateWithoutUserInput, ViewsUncheckedCreateWithoutUserInput> | ViewsCreateWithoutUserInput[] | ViewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewsCreateOrConnectWithoutUserInput | ViewsCreateOrConnectWithoutUserInput[]
    upsert?: ViewsUpsertWithWhereUniqueWithoutUserInput | ViewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ViewsCreateManyUserInputEnvelope
    set?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    disconnect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    delete?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    connect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    update?: ViewsUpdateWithWhereUniqueWithoutUserInput | ViewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ViewsUpdateManyWithWhereWithoutUserInput | ViewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ViewsScalarWhereInput | ViewsScalarWhereInput[]
  }

  export type AuctionBidsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuctionBidsCreateWithoutUserInput, AuctionBidsUncheckedCreateWithoutUserInput> | AuctionBidsCreateWithoutUserInput[] | AuctionBidsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuctionBidsCreateOrConnectWithoutUserInput | AuctionBidsCreateOrConnectWithoutUserInput[]
    upsert?: AuctionBidsUpsertWithWhereUniqueWithoutUserInput | AuctionBidsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuctionBidsCreateManyUserInputEnvelope
    set?: AuctionBidsWhereUniqueInput | AuctionBidsWhereUniqueInput[]
    disconnect?: AuctionBidsWhereUniqueInput | AuctionBidsWhereUniqueInput[]
    delete?: AuctionBidsWhereUniqueInput | AuctionBidsWhereUniqueInput[]
    connect?: AuctionBidsWhereUniqueInput | AuctionBidsWhereUniqueInput[]
    update?: AuctionBidsUpdateWithWhereUniqueWithoutUserInput | AuctionBidsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuctionBidsUpdateManyWithWhereWithoutUserInput | AuctionBidsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuctionBidsScalarWhereInput | AuctionBidsScalarWhereInput[]
  }

  export type LikesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput> | LikesCreateWithoutUserInput[] | LikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutUserInput | LikesCreateOrConnectWithoutUserInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutUserInput | LikesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikesCreateManyUserInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutUserInput | LikesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutUserInput | LikesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type TransactionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput> | TransactionsCreateWithoutUserInput[] | TransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutUserInput | TransactionsCreateOrConnectWithoutUserInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutUserInput | TransactionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionsCreateManyUserInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutUserInput | TransactionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutUserInput | TransactionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutViewsInput = {
    create?: XOR<UserCreateWithoutViewsInput, UserUncheckedCreateWithoutViewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutViewsInput
    connect?: UserWhereUniqueInput
  }

  export type NftsCreateNestedOneWithoutViewsInput = {
    create?: XOR<NftsCreateWithoutViewsInput, NftsUncheckedCreateWithoutViewsInput>
    connectOrCreate?: NftsCreateOrConnectWithoutViewsInput
    connect?: NftsWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutViewsNestedInput = {
    create?: XOR<UserCreateWithoutViewsInput, UserUncheckedCreateWithoutViewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutViewsInput
    upsert?: UserUpsertWithoutViewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutViewsInput, UserUpdateWithoutViewsInput>, UserUncheckedUpdateWithoutViewsInput>
  }

  export type NftsUpdateOneRequiredWithoutViewsNestedInput = {
    create?: XOR<NftsCreateWithoutViewsInput, NftsUncheckedCreateWithoutViewsInput>
    connectOrCreate?: NftsCreateOrConnectWithoutViewsInput
    upsert?: NftsUpsertWithoutViewsInput
    connect?: NftsWhereUniqueInput
    update?: XOR<XOR<NftsUpdateToOneWithWhereWithoutViewsInput, NftsUpdateWithoutViewsInput>, NftsUncheckedUpdateWithoutViewsInput>
  }

  export type UserCreateNestedOneWithoutLikesInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    connect?: UserWhereUniqueInput
  }

  export type NftsCreateNestedOneWithoutLikesInput = {
    create?: XOR<NftsCreateWithoutLikesInput, NftsUncheckedCreateWithoutLikesInput>
    connectOrCreate?: NftsCreateOrConnectWithoutLikesInput
    connect?: NftsWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    upsert?: UserUpsertWithoutLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikesInput, UserUpdateWithoutLikesInput>, UserUncheckedUpdateWithoutLikesInput>
  }

  export type NftsUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<NftsCreateWithoutLikesInput, NftsUncheckedCreateWithoutLikesInput>
    connectOrCreate?: NftsCreateOrConnectWithoutLikesInput
    upsert?: NftsUpsertWithoutLikesInput
    connect?: NftsWhereUniqueInput
    update?: XOR<XOR<NftsUpdateToOneWithWhereWithoutLikesInput, NftsUpdateWithoutLikesInput>, NftsUncheckedUpdateWithoutLikesInput>
  }

  export type NftsCreateNestedOneWithoutRewardTasksInput = {
    create?: XOR<NftsCreateWithoutRewardTasksInput, NftsUncheckedCreateWithoutRewardTasksInput>
    connectOrCreate?: NftsCreateOrConnectWithoutRewardTasksInput
    connect?: NftsWhereUniqueInput
  }

  export type NftsUpdateOneRequiredWithoutRewardTasksNestedInput = {
    create?: XOR<NftsCreateWithoutRewardTasksInput, NftsUncheckedCreateWithoutRewardTasksInput>
    connectOrCreate?: NftsCreateOrConnectWithoutRewardTasksInput
    upsert?: NftsUpsertWithoutRewardTasksInput
    connect?: NftsWhereUniqueInput
    update?: XOR<XOR<NftsUpdateToOneWithWhereWithoutRewardTasksInput, NftsUpdateWithoutRewardTasksInput>, NftsUncheckedUpdateWithoutRewardTasksInput>
  }

  export type UserCreateNestedOneWithoutRewardsInput = {
    create?: XOR<UserCreateWithoutRewardsInput, UserUncheckedCreateWithoutRewardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRewardsInput
    connect?: UserWhereUniqueInput
  }

  export type NftsCreateNestedOneWithoutRewardWinnersInput = {
    create?: XOR<NftsCreateWithoutRewardWinnersInput, NftsUncheckedCreateWithoutRewardWinnersInput>
    connectOrCreate?: NftsCreateOrConnectWithoutRewardWinnersInput
    connect?: NftsWhereUniqueInput
  }

  export type EnumrewardStatusFieldUpdateOperationsInput = {
    set?: $Enums.rewardStatus
  }

  export type UserUpdateOneRequiredWithoutRewardsNestedInput = {
    create?: XOR<UserCreateWithoutRewardsInput, UserUncheckedCreateWithoutRewardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRewardsInput
    upsert?: UserUpsertWithoutRewardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRewardsInput, UserUpdateWithoutRewardsInput>, UserUncheckedUpdateWithoutRewardsInput>
  }

  export type NftsUpdateOneRequiredWithoutRewardWinnersNestedInput = {
    create?: XOR<NftsCreateWithoutRewardWinnersInput, NftsUncheckedCreateWithoutRewardWinnersInput>
    connectOrCreate?: NftsCreateOrConnectWithoutRewardWinnersInput
    upsert?: NftsUpsertWithoutRewardWinnersInput
    connect?: NftsWhereUniqueInput
    update?: XOR<XOR<NftsUpdateToOneWithWhereWithoutRewardWinnersInput, NftsUpdateWithoutRewardWinnersInput>, NftsUncheckedUpdateWithoutRewardWinnersInput>
  }

  export type UserCreateNestedOneWithoutAuctionsInput = {
    create?: XOR<UserCreateWithoutAuctionsInput, UserUncheckedCreateWithoutAuctionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuctionsInput
    connect?: UserWhereUniqueInput
  }

  export type NftsCreateNestedOneWithoutAuctionBidsInput = {
    create?: XOR<NftsCreateWithoutAuctionBidsInput, NftsUncheckedCreateWithoutAuctionBidsInput>
    connectOrCreate?: NftsCreateOrConnectWithoutAuctionBidsInput
    connect?: NftsWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAuctionsNestedInput = {
    create?: XOR<UserCreateWithoutAuctionsInput, UserUncheckedCreateWithoutAuctionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuctionsInput
    upsert?: UserUpsertWithoutAuctionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuctionsInput, UserUpdateWithoutAuctionsInput>, UserUncheckedUpdateWithoutAuctionsInput>
  }

  export type NftsUpdateOneRequiredWithoutAuctionBidsNestedInput = {
    create?: XOR<NftsCreateWithoutAuctionBidsInput, NftsUncheckedCreateWithoutAuctionBidsInput>
    connectOrCreate?: NftsCreateOrConnectWithoutAuctionBidsInput
    upsert?: NftsUpsertWithoutAuctionBidsInput
    connect?: NftsWhereUniqueInput
    update?: XOR<XOR<NftsUpdateToOneWithWhereWithoutAuctionBidsInput, NftsUpdateWithoutAuctionBidsInput>, NftsUncheckedUpdateWithoutAuctionBidsInput>
  }

  export type NftsCreatecategoryInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutNftsInput = {
    create?: XOR<UserCreateWithoutNftsInput, UserUncheckedCreateWithoutNftsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNftsInput
    connect?: UserWhereUniqueInput
  }

  export type ViewsCreateNestedManyWithoutNftsInput = {
    create?: XOR<ViewsCreateWithoutNftsInput, ViewsUncheckedCreateWithoutNftsInput> | ViewsCreateWithoutNftsInput[] | ViewsUncheckedCreateWithoutNftsInput[]
    connectOrCreate?: ViewsCreateOrConnectWithoutNftsInput | ViewsCreateOrConnectWithoutNftsInput[]
    createMany?: ViewsCreateManyNftsInputEnvelope
    connect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
  }

  export type LikesCreateNestedManyWithoutNftsInput = {
    create?: XOR<LikesCreateWithoutNftsInput, LikesUncheckedCreateWithoutNftsInput> | LikesCreateWithoutNftsInput[] | LikesUncheckedCreateWithoutNftsInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutNftsInput | LikesCreateOrConnectWithoutNftsInput[]
    createMany?: LikesCreateManyNftsInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type ParticpatedCreateNestedManyWithoutNftInput = {
    create?: XOR<ParticpatedCreateWithoutNftInput, ParticpatedUncheckedCreateWithoutNftInput> | ParticpatedCreateWithoutNftInput[] | ParticpatedUncheckedCreateWithoutNftInput[]
    connectOrCreate?: ParticpatedCreateOrConnectWithoutNftInput | ParticpatedCreateOrConnectWithoutNftInput[]
    createMany?: ParticpatedCreateManyNftInputEnvelope
    connect?: ParticpatedWhereUniqueInput | ParticpatedWhereUniqueInput[]
  }

  export type TasksCreateNestedManyWithoutNftsInput = {
    create?: XOR<TasksCreateWithoutNftsInput, TasksUncheckedCreateWithoutNftsInput> | TasksCreateWithoutNftsInput[] | TasksUncheckedCreateWithoutNftsInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutNftsInput | TasksCreateOrConnectWithoutNftsInput[]
    createMany?: TasksCreateManyNftsInputEnvelope
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
  }

  export type AuctionBidsCreateNestedManyWithoutNftInput = {
    create?: XOR<AuctionBidsCreateWithoutNftInput, AuctionBidsUncheckedCreateWithoutNftInput> | AuctionBidsCreateWithoutNftInput[] | AuctionBidsUncheckedCreateWithoutNftInput[]
    connectOrCreate?: AuctionBidsCreateOrConnectWithoutNftInput | AuctionBidsCreateOrConnectWithoutNftInput[]
    createMany?: AuctionBidsCreateManyNftInputEnvelope
    connect?: AuctionBidsWhereUniqueInput | AuctionBidsWhereUniqueInput[]
  }

  export type TransactionsCreateNestedManyWithoutNftInput = {
    create?: XOR<TransactionsCreateWithoutNftInput, TransactionsUncheckedCreateWithoutNftInput> | TransactionsCreateWithoutNftInput[] | TransactionsUncheckedCreateWithoutNftInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutNftInput | TransactionsCreateOrConnectWithoutNftInput[]
    createMany?: TransactionsCreateManyNftInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type ViewsUncheckedCreateNestedManyWithoutNftsInput = {
    create?: XOR<ViewsCreateWithoutNftsInput, ViewsUncheckedCreateWithoutNftsInput> | ViewsCreateWithoutNftsInput[] | ViewsUncheckedCreateWithoutNftsInput[]
    connectOrCreate?: ViewsCreateOrConnectWithoutNftsInput | ViewsCreateOrConnectWithoutNftsInput[]
    createMany?: ViewsCreateManyNftsInputEnvelope
    connect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
  }

  export type LikesUncheckedCreateNestedManyWithoutNftsInput = {
    create?: XOR<LikesCreateWithoutNftsInput, LikesUncheckedCreateWithoutNftsInput> | LikesCreateWithoutNftsInput[] | LikesUncheckedCreateWithoutNftsInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutNftsInput | LikesCreateOrConnectWithoutNftsInput[]
    createMany?: LikesCreateManyNftsInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type ParticpatedUncheckedCreateNestedManyWithoutNftInput = {
    create?: XOR<ParticpatedCreateWithoutNftInput, ParticpatedUncheckedCreateWithoutNftInput> | ParticpatedCreateWithoutNftInput[] | ParticpatedUncheckedCreateWithoutNftInput[]
    connectOrCreate?: ParticpatedCreateOrConnectWithoutNftInput | ParticpatedCreateOrConnectWithoutNftInput[]
    createMany?: ParticpatedCreateManyNftInputEnvelope
    connect?: ParticpatedWhereUniqueInput | ParticpatedWhereUniqueInput[]
  }

  export type TasksUncheckedCreateNestedManyWithoutNftsInput = {
    create?: XOR<TasksCreateWithoutNftsInput, TasksUncheckedCreateWithoutNftsInput> | TasksCreateWithoutNftsInput[] | TasksUncheckedCreateWithoutNftsInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutNftsInput | TasksCreateOrConnectWithoutNftsInput[]
    createMany?: TasksCreateManyNftsInputEnvelope
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
  }

  export type AuctionBidsUncheckedCreateNestedManyWithoutNftInput = {
    create?: XOR<AuctionBidsCreateWithoutNftInput, AuctionBidsUncheckedCreateWithoutNftInput> | AuctionBidsCreateWithoutNftInput[] | AuctionBidsUncheckedCreateWithoutNftInput[]
    connectOrCreate?: AuctionBidsCreateOrConnectWithoutNftInput | AuctionBidsCreateOrConnectWithoutNftInput[]
    createMany?: AuctionBidsCreateManyNftInputEnvelope
    connect?: AuctionBidsWhereUniqueInput | AuctionBidsWhereUniqueInput[]
  }

  export type TransactionsUncheckedCreateNestedManyWithoutNftInput = {
    create?: XOR<TransactionsCreateWithoutNftInput, TransactionsUncheckedCreateWithoutNftInput> | TransactionsCreateWithoutNftInput[] | TransactionsUncheckedCreateWithoutNftInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutNftInput | TransactionsCreateOrConnectWithoutNftInput[]
    createMany?: TransactionsCreateManyNftInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type EnumorderTypeFieldUpdateOperationsInput = {
    set?: $Enums.orderType
  }

  export type EnumNftTypeFieldUpdateOperationsInput = {
    set?: $Enums.NftType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NftsUpdatecategoryInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type UserUpdateOneRequiredWithoutNftsNestedInput = {
    create?: XOR<UserCreateWithoutNftsInput, UserUncheckedCreateWithoutNftsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNftsInput
    upsert?: UserUpsertWithoutNftsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNftsInput, UserUpdateWithoutNftsInput>, UserUncheckedUpdateWithoutNftsInput>
  }

  export type ViewsUpdateManyWithoutNftsNestedInput = {
    create?: XOR<ViewsCreateWithoutNftsInput, ViewsUncheckedCreateWithoutNftsInput> | ViewsCreateWithoutNftsInput[] | ViewsUncheckedCreateWithoutNftsInput[]
    connectOrCreate?: ViewsCreateOrConnectWithoutNftsInput | ViewsCreateOrConnectWithoutNftsInput[]
    upsert?: ViewsUpsertWithWhereUniqueWithoutNftsInput | ViewsUpsertWithWhereUniqueWithoutNftsInput[]
    createMany?: ViewsCreateManyNftsInputEnvelope
    set?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    disconnect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    delete?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    connect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    update?: ViewsUpdateWithWhereUniqueWithoutNftsInput | ViewsUpdateWithWhereUniqueWithoutNftsInput[]
    updateMany?: ViewsUpdateManyWithWhereWithoutNftsInput | ViewsUpdateManyWithWhereWithoutNftsInput[]
    deleteMany?: ViewsScalarWhereInput | ViewsScalarWhereInput[]
  }

  export type LikesUpdateManyWithoutNftsNestedInput = {
    create?: XOR<LikesCreateWithoutNftsInput, LikesUncheckedCreateWithoutNftsInput> | LikesCreateWithoutNftsInput[] | LikesUncheckedCreateWithoutNftsInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutNftsInput | LikesCreateOrConnectWithoutNftsInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutNftsInput | LikesUpsertWithWhereUniqueWithoutNftsInput[]
    createMany?: LikesCreateManyNftsInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutNftsInput | LikesUpdateWithWhereUniqueWithoutNftsInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutNftsInput | LikesUpdateManyWithWhereWithoutNftsInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type ParticpatedUpdateManyWithoutNftNestedInput = {
    create?: XOR<ParticpatedCreateWithoutNftInput, ParticpatedUncheckedCreateWithoutNftInput> | ParticpatedCreateWithoutNftInput[] | ParticpatedUncheckedCreateWithoutNftInput[]
    connectOrCreate?: ParticpatedCreateOrConnectWithoutNftInput | ParticpatedCreateOrConnectWithoutNftInput[]
    upsert?: ParticpatedUpsertWithWhereUniqueWithoutNftInput | ParticpatedUpsertWithWhereUniqueWithoutNftInput[]
    createMany?: ParticpatedCreateManyNftInputEnvelope
    set?: ParticpatedWhereUniqueInput | ParticpatedWhereUniqueInput[]
    disconnect?: ParticpatedWhereUniqueInput | ParticpatedWhereUniqueInput[]
    delete?: ParticpatedWhereUniqueInput | ParticpatedWhereUniqueInput[]
    connect?: ParticpatedWhereUniqueInput | ParticpatedWhereUniqueInput[]
    update?: ParticpatedUpdateWithWhereUniqueWithoutNftInput | ParticpatedUpdateWithWhereUniqueWithoutNftInput[]
    updateMany?: ParticpatedUpdateManyWithWhereWithoutNftInput | ParticpatedUpdateManyWithWhereWithoutNftInput[]
    deleteMany?: ParticpatedScalarWhereInput | ParticpatedScalarWhereInput[]
  }

  export type TasksUpdateManyWithoutNftsNestedInput = {
    create?: XOR<TasksCreateWithoutNftsInput, TasksUncheckedCreateWithoutNftsInput> | TasksCreateWithoutNftsInput[] | TasksUncheckedCreateWithoutNftsInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutNftsInput | TasksCreateOrConnectWithoutNftsInput[]
    upsert?: TasksUpsertWithWhereUniqueWithoutNftsInput | TasksUpsertWithWhereUniqueWithoutNftsInput[]
    createMany?: TasksCreateManyNftsInputEnvelope
    set?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    disconnect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    delete?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    update?: TasksUpdateWithWhereUniqueWithoutNftsInput | TasksUpdateWithWhereUniqueWithoutNftsInput[]
    updateMany?: TasksUpdateManyWithWhereWithoutNftsInput | TasksUpdateManyWithWhereWithoutNftsInput[]
    deleteMany?: TasksScalarWhereInput | TasksScalarWhereInput[]
  }

  export type AuctionBidsUpdateManyWithoutNftNestedInput = {
    create?: XOR<AuctionBidsCreateWithoutNftInput, AuctionBidsUncheckedCreateWithoutNftInput> | AuctionBidsCreateWithoutNftInput[] | AuctionBidsUncheckedCreateWithoutNftInput[]
    connectOrCreate?: AuctionBidsCreateOrConnectWithoutNftInput | AuctionBidsCreateOrConnectWithoutNftInput[]
    upsert?: AuctionBidsUpsertWithWhereUniqueWithoutNftInput | AuctionBidsUpsertWithWhereUniqueWithoutNftInput[]
    createMany?: AuctionBidsCreateManyNftInputEnvelope
    set?: AuctionBidsWhereUniqueInput | AuctionBidsWhereUniqueInput[]
    disconnect?: AuctionBidsWhereUniqueInput | AuctionBidsWhereUniqueInput[]
    delete?: AuctionBidsWhereUniqueInput | AuctionBidsWhereUniqueInput[]
    connect?: AuctionBidsWhereUniqueInput | AuctionBidsWhereUniqueInput[]
    update?: AuctionBidsUpdateWithWhereUniqueWithoutNftInput | AuctionBidsUpdateWithWhereUniqueWithoutNftInput[]
    updateMany?: AuctionBidsUpdateManyWithWhereWithoutNftInput | AuctionBidsUpdateManyWithWhereWithoutNftInput[]
    deleteMany?: AuctionBidsScalarWhereInput | AuctionBidsScalarWhereInput[]
  }

  export type TransactionsUpdateManyWithoutNftNestedInput = {
    create?: XOR<TransactionsCreateWithoutNftInput, TransactionsUncheckedCreateWithoutNftInput> | TransactionsCreateWithoutNftInput[] | TransactionsUncheckedCreateWithoutNftInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutNftInput | TransactionsCreateOrConnectWithoutNftInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutNftInput | TransactionsUpsertWithWhereUniqueWithoutNftInput[]
    createMany?: TransactionsCreateManyNftInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutNftInput | TransactionsUpdateWithWhereUniqueWithoutNftInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutNftInput | TransactionsUpdateManyWithWhereWithoutNftInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type ViewsUncheckedUpdateManyWithoutNftsNestedInput = {
    create?: XOR<ViewsCreateWithoutNftsInput, ViewsUncheckedCreateWithoutNftsInput> | ViewsCreateWithoutNftsInput[] | ViewsUncheckedCreateWithoutNftsInput[]
    connectOrCreate?: ViewsCreateOrConnectWithoutNftsInput | ViewsCreateOrConnectWithoutNftsInput[]
    upsert?: ViewsUpsertWithWhereUniqueWithoutNftsInput | ViewsUpsertWithWhereUniqueWithoutNftsInput[]
    createMany?: ViewsCreateManyNftsInputEnvelope
    set?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    disconnect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    delete?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    connect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    update?: ViewsUpdateWithWhereUniqueWithoutNftsInput | ViewsUpdateWithWhereUniqueWithoutNftsInput[]
    updateMany?: ViewsUpdateManyWithWhereWithoutNftsInput | ViewsUpdateManyWithWhereWithoutNftsInput[]
    deleteMany?: ViewsScalarWhereInput | ViewsScalarWhereInput[]
  }

  export type LikesUncheckedUpdateManyWithoutNftsNestedInput = {
    create?: XOR<LikesCreateWithoutNftsInput, LikesUncheckedCreateWithoutNftsInput> | LikesCreateWithoutNftsInput[] | LikesUncheckedCreateWithoutNftsInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutNftsInput | LikesCreateOrConnectWithoutNftsInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutNftsInput | LikesUpsertWithWhereUniqueWithoutNftsInput[]
    createMany?: LikesCreateManyNftsInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutNftsInput | LikesUpdateWithWhereUniqueWithoutNftsInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutNftsInput | LikesUpdateManyWithWhereWithoutNftsInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type ParticpatedUncheckedUpdateManyWithoutNftNestedInput = {
    create?: XOR<ParticpatedCreateWithoutNftInput, ParticpatedUncheckedCreateWithoutNftInput> | ParticpatedCreateWithoutNftInput[] | ParticpatedUncheckedCreateWithoutNftInput[]
    connectOrCreate?: ParticpatedCreateOrConnectWithoutNftInput | ParticpatedCreateOrConnectWithoutNftInput[]
    upsert?: ParticpatedUpsertWithWhereUniqueWithoutNftInput | ParticpatedUpsertWithWhereUniqueWithoutNftInput[]
    createMany?: ParticpatedCreateManyNftInputEnvelope
    set?: ParticpatedWhereUniqueInput | ParticpatedWhereUniqueInput[]
    disconnect?: ParticpatedWhereUniqueInput | ParticpatedWhereUniqueInput[]
    delete?: ParticpatedWhereUniqueInput | ParticpatedWhereUniqueInput[]
    connect?: ParticpatedWhereUniqueInput | ParticpatedWhereUniqueInput[]
    update?: ParticpatedUpdateWithWhereUniqueWithoutNftInput | ParticpatedUpdateWithWhereUniqueWithoutNftInput[]
    updateMany?: ParticpatedUpdateManyWithWhereWithoutNftInput | ParticpatedUpdateManyWithWhereWithoutNftInput[]
    deleteMany?: ParticpatedScalarWhereInput | ParticpatedScalarWhereInput[]
  }

  export type TasksUncheckedUpdateManyWithoutNftsNestedInput = {
    create?: XOR<TasksCreateWithoutNftsInput, TasksUncheckedCreateWithoutNftsInput> | TasksCreateWithoutNftsInput[] | TasksUncheckedCreateWithoutNftsInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutNftsInput | TasksCreateOrConnectWithoutNftsInput[]
    upsert?: TasksUpsertWithWhereUniqueWithoutNftsInput | TasksUpsertWithWhereUniqueWithoutNftsInput[]
    createMany?: TasksCreateManyNftsInputEnvelope
    set?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    disconnect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    delete?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    update?: TasksUpdateWithWhereUniqueWithoutNftsInput | TasksUpdateWithWhereUniqueWithoutNftsInput[]
    updateMany?: TasksUpdateManyWithWhereWithoutNftsInput | TasksUpdateManyWithWhereWithoutNftsInput[]
    deleteMany?: TasksScalarWhereInput | TasksScalarWhereInput[]
  }

  export type AuctionBidsUncheckedUpdateManyWithoutNftNestedInput = {
    create?: XOR<AuctionBidsCreateWithoutNftInput, AuctionBidsUncheckedCreateWithoutNftInput> | AuctionBidsCreateWithoutNftInput[] | AuctionBidsUncheckedCreateWithoutNftInput[]
    connectOrCreate?: AuctionBidsCreateOrConnectWithoutNftInput | AuctionBidsCreateOrConnectWithoutNftInput[]
    upsert?: AuctionBidsUpsertWithWhereUniqueWithoutNftInput | AuctionBidsUpsertWithWhereUniqueWithoutNftInput[]
    createMany?: AuctionBidsCreateManyNftInputEnvelope
    set?: AuctionBidsWhereUniqueInput | AuctionBidsWhereUniqueInput[]
    disconnect?: AuctionBidsWhereUniqueInput | AuctionBidsWhereUniqueInput[]
    delete?: AuctionBidsWhereUniqueInput | AuctionBidsWhereUniqueInput[]
    connect?: AuctionBidsWhereUniqueInput | AuctionBidsWhereUniqueInput[]
    update?: AuctionBidsUpdateWithWhereUniqueWithoutNftInput | AuctionBidsUpdateWithWhereUniqueWithoutNftInput[]
    updateMany?: AuctionBidsUpdateManyWithWhereWithoutNftInput | AuctionBidsUpdateManyWithWhereWithoutNftInput[]
    deleteMany?: AuctionBidsScalarWhereInput | AuctionBidsScalarWhereInput[]
  }

  export type TransactionsUncheckedUpdateManyWithoutNftNestedInput = {
    create?: XOR<TransactionsCreateWithoutNftInput, TransactionsUncheckedCreateWithoutNftInput> | TransactionsCreateWithoutNftInput[] | TransactionsUncheckedCreateWithoutNftInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutNftInput | TransactionsCreateOrConnectWithoutNftInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutNftInput | TransactionsUpsertWithWhereUniqueWithoutNftInput[]
    createMany?: TransactionsCreateManyNftInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutNftInput | TransactionsUpdateWithWhereUniqueWithoutNftInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutNftInput | TransactionsUpdateManyWithWhereWithoutNftInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type NftsCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<NftsCreateWithoutTransactionsInput, NftsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: NftsCreateOrConnectWithoutTransactionsInput
    connect?: NftsWhereUniqueInput
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type NftsUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<NftsCreateWithoutTransactionsInput, NftsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: NftsCreateOrConnectWithoutTransactionsInput
    upsert?: NftsUpsertWithoutTransactionsInput
    connect?: NftsWhereUniqueInput
    update?: XOR<XOR<NftsUpdateToOneWithWhereWithoutTransactionsInput, NftsUpdateWithoutTransactionsInput>, NftsUncheckedUpdateWithoutTransactionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumrewardStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.rewardStatus | EnumrewardStatusFieldRefInput<$PrismaModel>
    in?: $Enums.rewardStatus[] | ListEnumrewardStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.rewardStatus[] | ListEnumrewardStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumrewardStatusFilter<$PrismaModel> | $Enums.rewardStatus
  }

  export type NestedEnumrewardStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.rewardStatus | EnumrewardStatusFieldRefInput<$PrismaModel>
    in?: $Enums.rewardStatus[] | ListEnumrewardStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.rewardStatus[] | ListEnumrewardStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumrewardStatusWithAggregatesFilter<$PrismaModel> | $Enums.rewardStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumrewardStatusFilter<$PrismaModel>
    _max?: NestedEnumrewardStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumorderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.orderType | EnumorderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.orderType[] | ListEnumorderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.orderType[] | ListEnumorderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumorderTypeFilter<$PrismaModel> | $Enums.orderType
  }

  export type NestedEnumNftTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NftType | EnumNftTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NftType[] | ListEnumNftTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NftType[] | ListEnumNftTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNftTypeFilter<$PrismaModel> | $Enums.NftType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumorderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.orderType | EnumorderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.orderType[] | ListEnumorderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.orderType[] | ListEnumorderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumorderTypeWithAggregatesFilter<$PrismaModel> | $Enums.orderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumorderTypeFilter<$PrismaModel>
    _max?: NestedEnumorderTypeFilter<$PrismaModel>
  }

  export type NestedEnumNftTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NftType | EnumNftTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NftType[] | ListEnumNftTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NftType[] | ListEnumNftTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNftTypeWithAggregatesFilter<$PrismaModel> | $Enums.NftType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNftTypeFilter<$PrismaModel>
    _max?: NestedEnumNftTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type ParticpatedCreateWithoutUserInput = {
    id?: string
    points: number
    accuracy: number
    createdAt?: Date | string
    rewardStatus?: $Enums.rewardStatus
    nft: NftsCreateNestedOneWithoutRewardWinnersInput
  }

  export type ParticpatedUncheckedCreateWithoutUserInput = {
    id?: string
    points: number
    nftId: string
    accuracy: number
    createdAt?: Date | string
    rewardStatus?: $Enums.rewardStatus
  }

  export type ParticpatedCreateOrConnectWithoutUserInput = {
    where: ParticpatedWhereUniqueInput
    create: XOR<ParticpatedCreateWithoutUserInput, ParticpatedUncheckedCreateWithoutUserInput>
  }

  export type ParticpatedCreateManyUserInputEnvelope = {
    data: ParticpatedCreateManyUserInput | ParticpatedCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NftsCreateWithoutUserInput = {
    id?: string
    image: string
    title: string
    description: string
    prompt?: string | null
    shortDescription?: string | null
    tokenId: string
    chainId: number
    orderType?: $Enums.orderType
    PriceInEth: number
    type?: $Enums.NftType
    isBid: boolean
    BidEndTime?: Date | string | null
    category?: NftsCreatecategoryInput | string[]
    rewardEndDate?: Date | string | null
    rewardPoints?: number | null
    rewardForceCancelled?: boolean | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    views?: ViewsCreateNestedManyWithoutNftsInput
    likes?: LikesCreateNestedManyWithoutNftsInput
    rewardWinners?: ParticpatedCreateNestedManyWithoutNftInput
    rewardTasks?: TasksCreateNestedManyWithoutNftsInput
    AuctionBids?: AuctionBidsCreateNestedManyWithoutNftInput
    transactions?: TransactionsCreateNestedManyWithoutNftInput
  }

  export type NftsUncheckedCreateWithoutUserInput = {
    id?: string
    image: string
    title: string
    description: string
    prompt?: string | null
    shortDescription?: string | null
    tokenId: string
    chainId: number
    orderType?: $Enums.orderType
    PriceInEth: number
    type?: $Enums.NftType
    isBid: boolean
    BidEndTime?: Date | string | null
    category?: NftsCreatecategoryInput | string[]
    rewardEndDate?: Date | string | null
    rewardPoints?: number | null
    rewardForceCancelled?: boolean | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    views?: ViewsUncheckedCreateNestedManyWithoutNftsInput
    likes?: LikesUncheckedCreateNestedManyWithoutNftsInput
    rewardWinners?: ParticpatedUncheckedCreateNestedManyWithoutNftInput
    rewardTasks?: TasksUncheckedCreateNestedManyWithoutNftsInput
    AuctionBids?: AuctionBidsUncheckedCreateNestedManyWithoutNftInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutNftInput
  }

  export type NftsCreateOrConnectWithoutUserInput = {
    where: NftsWhereUniqueInput
    create: XOR<NftsCreateWithoutUserInput, NftsUncheckedCreateWithoutUserInput>
  }

  export type NftsCreateManyUserInputEnvelope = {
    data: NftsCreateManyUserInput | NftsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ViewsCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    nfts: NftsCreateNestedOneWithoutViewsInput
  }

  export type ViewsUncheckedCreateWithoutUserInput = {
    id?: string
    nftId: string
    createdAt?: Date | string
  }

  export type ViewsCreateOrConnectWithoutUserInput = {
    where: ViewsWhereUniqueInput
    create: XOR<ViewsCreateWithoutUserInput, ViewsUncheckedCreateWithoutUserInput>
  }

  export type ViewsCreateManyUserInputEnvelope = {
    data: ViewsCreateManyUserInput | ViewsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuctionBidsCreateWithoutUserInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    nft: NftsCreateNestedOneWithoutAuctionBidsInput
  }

  export type AuctionBidsUncheckedCreateWithoutUserInput = {
    id?: string
    nftId: string
    amount: number
    createdAt?: Date | string
  }

  export type AuctionBidsCreateOrConnectWithoutUserInput = {
    where: AuctionBidsWhereUniqueInput
    create: XOR<AuctionBidsCreateWithoutUserInput, AuctionBidsUncheckedCreateWithoutUserInput>
  }

  export type AuctionBidsCreateManyUserInputEnvelope = {
    data: AuctionBidsCreateManyUserInput | AuctionBidsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LikesCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    nfts: NftsCreateNestedOneWithoutLikesInput
  }

  export type LikesUncheckedCreateWithoutUserInput = {
    id?: string
    nftId: string
    createdAt?: Date | string
  }

  export type LikesCreateOrConnectWithoutUserInput = {
    where: LikesWhereUniqueInput
    create: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput>
  }

  export type LikesCreateManyUserInputEnvelope = {
    data: LikesCreateManyUserInput | LikesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionsCreateWithoutUserInput = {
    id?: string
    type: $Enums.TransactionType
    AmountInEth: number
    createdAt?: Date | string
    nft: NftsCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionsUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.TransactionType
    AmountInEth: number
    nftId: string
    createdAt?: Date | string
  }

  export type TransactionsCreateOrConnectWithoutUserInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput>
  }

  export type TransactionsCreateManyUserInputEnvelope = {
    data: TransactionsCreateManyUserInput | TransactionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ParticpatedUpsertWithWhereUniqueWithoutUserInput = {
    where: ParticpatedWhereUniqueInput
    update: XOR<ParticpatedUpdateWithoutUserInput, ParticpatedUncheckedUpdateWithoutUserInput>
    create: XOR<ParticpatedCreateWithoutUserInput, ParticpatedUncheckedCreateWithoutUserInput>
  }

  export type ParticpatedUpdateWithWhereUniqueWithoutUserInput = {
    where: ParticpatedWhereUniqueInput
    data: XOR<ParticpatedUpdateWithoutUserInput, ParticpatedUncheckedUpdateWithoutUserInput>
  }

  export type ParticpatedUpdateManyWithWhereWithoutUserInput = {
    where: ParticpatedScalarWhereInput
    data: XOR<ParticpatedUpdateManyMutationInput, ParticpatedUncheckedUpdateManyWithoutUserInput>
  }

  export type ParticpatedScalarWhereInput = {
    AND?: ParticpatedScalarWhereInput | ParticpatedScalarWhereInput[]
    OR?: ParticpatedScalarWhereInput[]
    NOT?: ParticpatedScalarWhereInput | ParticpatedScalarWhereInput[]
    id?: StringFilter<"Particpated"> | string
    creatorId?: StringFilter<"Particpated"> | string
    points?: IntFilter<"Particpated"> | number
    nftId?: StringFilter<"Particpated"> | string
    accuracy?: IntFilter<"Particpated"> | number
    createdAt?: DateTimeFilter<"Particpated"> | Date | string
    rewardStatus?: EnumrewardStatusFilter<"Particpated"> | $Enums.rewardStatus
  }

  export type NftsUpsertWithWhereUniqueWithoutUserInput = {
    where: NftsWhereUniqueInput
    update: XOR<NftsUpdateWithoutUserInput, NftsUncheckedUpdateWithoutUserInput>
    create: XOR<NftsCreateWithoutUserInput, NftsUncheckedCreateWithoutUserInput>
  }

  export type NftsUpdateWithWhereUniqueWithoutUserInput = {
    where: NftsWhereUniqueInput
    data: XOR<NftsUpdateWithoutUserInput, NftsUncheckedUpdateWithoutUserInput>
  }

  export type NftsUpdateManyWithWhereWithoutUserInput = {
    where: NftsScalarWhereInput
    data: XOR<NftsUpdateManyMutationInput, NftsUncheckedUpdateManyWithoutUserInput>
  }

  export type NftsScalarWhereInput = {
    AND?: NftsScalarWhereInput | NftsScalarWhereInput[]
    OR?: NftsScalarWhereInput[]
    NOT?: NftsScalarWhereInput | NftsScalarWhereInput[]
    id?: StringFilter<"Nfts"> | string
    creatorId?: StringFilter<"Nfts"> | string
    image?: StringFilter<"Nfts"> | string
    title?: StringFilter<"Nfts"> | string
    description?: StringFilter<"Nfts"> | string
    prompt?: StringNullableFilter<"Nfts"> | string | null
    shortDescription?: StringNullableFilter<"Nfts"> | string | null
    tokenId?: StringFilter<"Nfts"> | string
    chainId?: IntFilter<"Nfts"> | number
    orderType?: EnumorderTypeFilter<"Nfts"> | $Enums.orderType
    PriceInEth?: FloatFilter<"Nfts"> | number
    type?: EnumNftTypeFilter<"Nfts"> | $Enums.NftType
    isBid?: BoolFilter<"Nfts"> | boolean
    BidEndTime?: DateTimeNullableFilter<"Nfts"> | Date | string | null
    category?: StringNullableListFilter<"Nfts">
    rewardEndDate?: DateTimeNullableFilter<"Nfts"> | Date | string | null
    rewardPoints?: IntNullableFilter<"Nfts"> | number | null
    rewardForceCancelled?: BoolNullableFilter<"Nfts"> | boolean | null
    status?: EnumStatusFilter<"Nfts"> | $Enums.Status
    createdAt?: DateTimeFilter<"Nfts"> | Date | string
    updatedAt?: DateTimeFilter<"Nfts"> | Date | string
  }

  export type ViewsUpsertWithWhereUniqueWithoutUserInput = {
    where: ViewsWhereUniqueInput
    update: XOR<ViewsUpdateWithoutUserInput, ViewsUncheckedUpdateWithoutUserInput>
    create: XOR<ViewsCreateWithoutUserInput, ViewsUncheckedCreateWithoutUserInput>
  }

  export type ViewsUpdateWithWhereUniqueWithoutUserInput = {
    where: ViewsWhereUniqueInput
    data: XOR<ViewsUpdateWithoutUserInput, ViewsUncheckedUpdateWithoutUserInput>
  }

  export type ViewsUpdateManyWithWhereWithoutUserInput = {
    where: ViewsScalarWhereInput
    data: XOR<ViewsUpdateManyMutationInput, ViewsUncheckedUpdateManyWithoutUserInput>
  }

  export type ViewsScalarWhereInput = {
    AND?: ViewsScalarWhereInput | ViewsScalarWhereInput[]
    OR?: ViewsScalarWhereInput[]
    NOT?: ViewsScalarWhereInput | ViewsScalarWhereInput[]
    id?: StringFilter<"Views"> | string
    userId?: StringFilter<"Views"> | string
    nftId?: StringFilter<"Views"> | string
    createdAt?: DateTimeFilter<"Views"> | Date | string
  }

  export type AuctionBidsUpsertWithWhereUniqueWithoutUserInput = {
    where: AuctionBidsWhereUniqueInput
    update: XOR<AuctionBidsUpdateWithoutUserInput, AuctionBidsUncheckedUpdateWithoutUserInput>
    create: XOR<AuctionBidsCreateWithoutUserInput, AuctionBidsUncheckedCreateWithoutUserInput>
  }

  export type AuctionBidsUpdateWithWhereUniqueWithoutUserInput = {
    where: AuctionBidsWhereUniqueInput
    data: XOR<AuctionBidsUpdateWithoutUserInput, AuctionBidsUncheckedUpdateWithoutUserInput>
  }

  export type AuctionBidsUpdateManyWithWhereWithoutUserInput = {
    where: AuctionBidsScalarWhereInput
    data: XOR<AuctionBidsUpdateManyMutationInput, AuctionBidsUncheckedUpdateManyWithoutUserInput>
  }

  export type AuctionBidsScalarWhereInput = {
    AND?: AuctionBidsScalarWhereInput | AuctionBidsScalarWhereInput[]
    OR?: AuctionBidsScalarWhereInput[]
    NOT?: AuctionBidsScalarWhereInput | AuctionBidsScalarWhereInput[]
    id?: StringFilter<"AuctionBids"> | string
    auctionerId?: StringFilter<"AuctionBids"> | string
    nftId?: StringFilter<"AuctionBids"> | string
    amount?: FloatFilter<"AuctionBids"> | number
    createdAt?: DateTimeFilter<"AuctionBids"> | Date | string
  }

  export type LikesUpsertWithWhereUniqueWithoutUserInput = {
    where: LikesWhereUniqueInput
    update: XOR<LikesUpdateWithoutUserInput, LikesUncheckedUpdateWithoutUserInput>
    create: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput>
  }

  export type LikesUpdateWithWhereUniqueWithoutUserInput = {
    where: LikesWhereUniqueInput
    data: XOR<LikesUpdateWithoutUserInput, LikesUncheckedUpdateWithoutUserInput>
  }

  export type LikesUpdateManyWithWhereWithoutUserInput = {
    where: LikesScalarWhereInput
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyWithoutUserInput>
  }

  export type LikesScalarWhereInput = {
    AND?: LikesScalarWhereInput | LikesScalarWhereInput[]
    OR?: LikesScalarWhereInput[]
    NOT?: LikesScalarWhereInput | LikesScalarWhereInput[]
    id?: StringFilter<"Likes"> | string
    userId?: StringFilter<"Likes"> | string
    nftId?: StringFilter<"Likes"> | string
    createdAt?: DateTimeFilter<"Likes"> | Date | string
  }

  export type TransactionsUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionsWhereUniqueInput
    update: XOR<TransactionsUpdateWithoutUserInput, TransactionsUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput>
  }

  export type TransactionsUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionsWhereUniqueInput
    data: XOR<TransactionsUpdateWithoutUserInput, TransactionsUncheckedUpdateWithoutUserInput>
  }

  export type TransactionsUpdateManyWithWhereWithoutUserInput = {
    where: TransactionsScalarWhereInput
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionsScalarWhereInput = {
    AND?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
    OR?: TransactionsScalarWhereInput[]
    NOT?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
    id?: StringFilter<"Transactions"> | string
    userId?: StringFilter<"Transactions"> | string
    type?: EnumTransactionTypeFilter<"Transactions"> | $Enums.TransactionType
    AmountInEth?: FloatFilter<"Transactions"> | number
    nftId?: StringFilter<"Transactions"> | string
    createdAt?: DateTimeFilter<"Transactions"> | Date | string
  }

  export type UserCreateWithoutViewsInput = {
    id?: string
    email?: string | null
    name?: string | null
    points?: number
    walletAddress: string
    twitter?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    rewards?: ParticpatedCreateNestedManyWithoutUserInput
    nfts?: NftsCreateNestedManyWithoutUserInput
    auctions?: AuctionBidsCreateNestedManyWithoutUserInput
    likes?: LikesCreateNestedManyWithoutUserInput
    transactions?: TransactionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutViewsInput = {
    id?: string
    email?: string | null
    name?: string | null
    points?: number
    walletAddress: string
    twitter?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    rewards?: ParticpatedUncheckedCreateNestedManyWithoutUserInput
    nfts?: NftsUncheckedCreateNestedManyWithoutUserInput
    auctions?: AuctionBidsUncheckedCreateNestedManyWithoutUserInput
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutViewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutViewsInput, UserUncheckedCreateWithoutViewsInput>
  }

  export type NftsCreateWithoutViewsInput = {
    id?: string
    image: string
    title: string
    description: string
    prompt?: string | null
    shortDescription?: string | null
    tokenId: string
    chainId: number
    orderType?: $Enums.orderType
    PriceInEth: number
    type?: $Enums.NftType
    isBid: boolean
    BidEndTime?: Date | string | null
    category?: NftsCreatecategoryInput | string[]
    rewardEndDate?: Date | string | null
    rewardPoints?: number | null
    rewardForceCancelled?: boolean | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNftsInput
    likes?: LikesCreateNestedManyWithoutNftsInput
    rewardWinners?: ParticpatedCreateNestedManyWithoutNftInput
    rewardTasks?: TasksCreateNestedManyWithoutNftsInput
    AuctionBids?: AuctionBidsCreateNestedManyWithoutNftInput
    transactions?: TransactionsCreateNestedManyWithoutNftInput
  }

  export type NftsUncheckedCreateWithoutViewsInput = {
    id?: string
    creatorId: string
    image: string
    title: string
    description: string
    prompt?: string | null
    shortDescription?: string | null
    tokenId: string
    chainId: number
    orderType?: $Enums.orderType
    PriceInEth: number
    type?: $Enums.NftType
    isBid: boolean
    BidEndTime?: Date | string | null
    category?: NftsCreatecategoryInput | string[]
    rewardEndDate?: Date | string | null
    rewardPoints?: number | null
    rewardForceCancelled?: boolean | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: LikesUncheckedCreateNestedManyWithoutNftsInput
    rewardWinners?: ParticpatedUncheckedCreateNestedManyWithoutNftInput
    rewardTasks?: TasksUncheckedCreateNestedManyWithoutNftsInput
    AuctionBids?: AuctionBidsUncheckedCreateNestedManyWithoutNftInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutNftInput
  }

  export type NftsCreateOrConnectWithoutViewsInput = {
    where: NftsWhereUniqueInput
    create: XOR<NftsCreateWithoutViewsInput, NftsUncheckedCreateWithoutViewsInput>
  }

  export type UserUpsertWithoutViewsInput = {
    update: XOR<UserUpdateWithoutViewsInput, UserUncheckedUpdateWithoutViewsInput>
    create: XOR<UserCreateWithoutViewsInput, UserUncheckedCreateWithoutViewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutViewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutViewsInput, UserUncheckedUpdateWithoutViewsInput>
  }

  export type UserUpdateWithoutViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    walletAddress?: StringFieldUpdateOperationsInput | string
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rewards?: ParticpatedUpdateManyWithoutUserNestedInput
    nfts?: NftsUpdateManyWithoutUserNestedInput
    auctions?: AuctionBidsUpdateManyWithoutUserNestedInput
    likes?: LikesUpdateManyWithoutUserNestedInput
    transactions?: TransactionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    walletAddress?: StringFieldUpdateOperationsInput | string
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rewards?: ParticpatedUncheckedUpdateManyWithoutUserNestedInput
    nfts?: NftsUncheckedUpdateManyWithoutUserNestedInput
    auctions?: AuctionBidsUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NftsUpsertWithoutViewsInput = {
    update: XOR<NftsUpdateWithoutViewsInput, NftsUncheckedUpdateWithoutViewsInput>
    create: XOR<NftsCreateWithoutViewsInput, NftsUncheckedCreateWithoutViewsInput>
    where?: NftsWhereInput
  }

  export type NftsUpdateToOneWithWhereWithoutViewsInput = {
    where?: NftsWhereInput
    data: XOR<NftsUpdateWithoutViewsInput, NftsUncheckedUpdateWithoutViewsInput>
  }

  export type NftsUpdateWithoutViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: StringFieldUpdateOperationsInput | string
    chainId?: IntFieldUpdateOperationsInput | number
    orderType?: EnumorderTypeFieldUpdateOperationsInput | $Enums.orderType
    PriceInEth?: FloatFieldUpdateOperationsInput | number
    type?: EnumNftTypeFieldUpdateOperationsInput | $Enums.NftType
    isBid?: BoolFieldUpdateOperationsInput | boolean
    BidEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NftsUpdatecategoryInput | string[]
    rewardEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rewardPoints?: NullableIntFieldUpdateOperationsInput | number | null
    rewardForceCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNftsNestedInput
    likes?: LikesUpdateManyWithoutNftsNestedInput
    rewardWinners?: ParticpatedUpdateManyWithoutNftNestedInput
    rewardTasks?: TasksUpdateManyWithoutNftsNestedInput
    AuctionBids?: AuctionBidsUpdateManyWithoutNftNestedInput
    transactions?: TransactionsUpdateManyWithoutNftNestedInput
  }

  export type NftsUncheckedUpdateWithoutViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: StringFieldUpdateOperationsInput | string
    chainId?: IntFieldUpdateOperationsInput | number
    orderType?: EnumorderTypeFieldUpdateOperationsInput | $Enums.orderType
    PriceInEth?: FloatFieldUpdateOperationsInput | number
    type?: EnumNftTypeFieldUpdateOperationsInput | $Enums.NftType
    isBid?: BoolFieldUpdateOperationsInput | boolean
    BidEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NftsUpdatecategoryInput | string[]
    rewardEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rewardPoints?: NullableIntFieldUpdateOperationsInput | number | null
    rewardForceCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikesUncheckedUpdateManyWithoutNftsNestedInput
    rewardWinners?: ParticpatedUncheckedUpdateManyWithoutNftNestedInput
    rewardTasks?: TasksUncheckedUpdateManyWithoutNftsNestedInput
    AuctionBids?: AuctionBidsUncheckedUpdateManyWithoutNftNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutNftNestedInput
  }

  export type UserCreateWithoutLikesInput = {
    id?: string
    email?: string | null
    name?: string | null
    points?: number
    walletAddress: string
    twitter?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    rewards?: ParticpatedCreateNestedManyWithoutUserInput
    nfts?: NftsCreateNestedManyWithoutUserInput
    views?: ViewsCreateNestedManyWithoutUserInput
    auctions?: AuctionBidsCreateNestedManyWithoutUserInput
    transactions?: TransactionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikesInput = {
    id?: string
    email?: string | null
    name?: string | null
    points?: number
    walletAddress: string
    twitter?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    rewards?: ParticpatedUncheckedCreateNestedManyWithoutUserInput
    nfts?: NftsUncheckedCreateNestedManyWithoutUserInput
    views?: ViewsUncheckedCreateNestedManyWithoutUserInput
    auctions?: AuctionBidsUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
  }

  export type NftsCreateWithoutLikesInput = {
    id?: string
    image: string
    title: string
    description: string
    prompt?: string | null
    shortDescription?: string | null
    tokenId: string
    chainId: number
    orderType?: $Enums.orderType
    PriceInEth: number
    type?: $Enums.NftType
    isBid: boolean
    BidEndTime?: Date | string | null
    category?: NftsCreatecategoryInput | string[]
    rewardEndDate?: Date | string | null
    rewardPoints?: number | null
    rewardForceCancelled?: boolean | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNftsInput
    views?: ViewsCreateNestedManyWithoutNftsInput
    rewardWinners?: ParticpatedCreateNestedManyWithoutNftInput
    rewardTasks?: TasksCreateNestedManyWithoutNftsInput
    AuctionBids?: AuctionBidsCreateNestedManyWithoutNftInput
    transactions?: TransactionsCreateNestedManyWithoutNftInput
  }

  export type NftsUncheckedCreateWithoutLikesInput = {
    id?: string
    creatorId: string
    image: string
    title: string
    description: string
    prompt?: string | null
    shortDescription?: string | null
    tokenId: string
    chainId: number
    orderType?: $Enums.orderType
    PriceInEth: number
    type?: $Enums.NftType
    isBid: boolean
    BidEndTime?: Date | string | null
    category?: NftsCreatecategoryInput | string[]
    rewardEndDate?: Date | string | null
    rewardPoints?: number | null
    rewardForceCancelled?: boolean | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    views?: ViewsUncheckedCreateNestedManyWithoutNftsInput
    rewardWinners?: ParticpatedUncheckedCreateNestedManyWithoutNftInput
    rewardTasks?: TasksUncheckedCreateNestedManyWithoutNftsInput
    AuctionBids?: AuctionBidsUncheckedCreateNestedManyWithoutNftInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutNftInput
  }

  export type NftsCreateOrConnectWithoutLikesInput = {
    where: NftsWhereUniqueInput
    create: XOR<NftsCreateWithoutLikesInput, NftsUncheckedCreateWithoutLikesInput>
  }

  export type UserUpsertWithoutLikesInput = {
    update: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    walletAddress?: StringFieldUpdateOperationsInput | string
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rewards?: ParticpatedUpdateManyWithoutUserNestedInput
    nfts?: NftsUpdateManyWithoutUserNestedInput
    views?: ViewsUpdateManyWithoutUserNestedInput
    auctions?: AuctionBidsUpdateManyWithoutUserNestedInput
    transactions?: TransactionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    walletAddress?: StringFieldUpdateOperationsInput | string
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rewards?: ParticpatedUncheckedUpdateManyWithoutUserNestedInput
    nfts?: NftsUncheckedUpdateManyWithoutUserNestedInput
    views?: ViewsUncheckedUpdateManyWithoutUserNestedInput
    auctions?: AuctionBidsUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NftsUpsertWithoutLikesInput = {
    update: XOR<NftsUpdateWithoutLikesInput, NftsUncheckedUpdateWithoutLikesInput>
    create: XOR<NftsCreateWithoutLikesInput, NftsUncheckedCreateWithoutLikesInput>
    where?: NftsWhereInput
  }

  export type NftsUpdateToOneWithWhereWithoutLikesInput = {
    where?: NftsWhereInput
    data: XOR<NftsUpdateWithoutLikesInput, NftsUncheckedUpdateWithoutLikesInput>
  }

  export type NftsUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: StringFieldUpdateOperationsInput | string
    chainId?: IntFieldUpdateOperationsInput | number
    orderType?: EnumorderTypeFieldUpdateOperationsInput | $Enums.orderType
    PriceInEth?: FloatFieldUpdateOperationsInput | number
    type?: EnumNftTypeFieldUpdateOperationsInput | $Enums.NftType
    isBid?: BoolFieldUpdateOperationsInput | boolean
    BidEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NftsUpdatecategoryInput | string[]
    rewardEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rewardPoints?: NullableIntFieldUpdateOperationsInput | number | null
    rewardForceCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNftsNestedInput
    views?: ViewsUpdateManyWithoutNftsNestedInput
    rewardWinners?: ParticpatedUpdateManyWithoutNftNestedInput
    rewardTasks?: TasksUpdateManyWithoutNftsNestedInput
    AuctionBids?: AuctionBidsUpdateManyWithoutNftNestedInput
    transactions?: TransactionsUpdateManyWithoutNftNestedInput
  }

  export type NftsUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: StringFieldUpdateOperationsInput | string
    chainId?: IntFieldUpdateOperationsInput | number
    orderType?: EnumorderTypeFieldUpdateOperationsInput | $Enums.orderType
    PriceInEth?: FloatFieldUpdateOperationsInput | number
    type?: EnumNftTypeFieldUpdateOperationsInput | $Enums.NftType
    isBid?: BoolFieldUpdateOperationsInput | boolean
    BidEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NftsUpdatecategoryInput | string[]
    rewardEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rewardPoints?: NullableIntFieldUpdateOperationsInput | number | null
    rewardForceCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: ViewsUncheckedUpdateManyWithoutNftsNestedInput
    rewardWinners?: ParticpatedUncheckedUpdateManyWithoutNftNestedInput
    rewardTasks?: TasksUncheckedUpdateManyWithoutNftsNestedInput
    AuctionBids?: AuctionBidsUncheckedUpdateManyWithoutNftNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutNftNestedInput
  }

  export type NftsCreateWithoutRewardTasksInput = {
    id?: string
    image: string
    title: string
    description: string
    prompt?: string | null
    shortDescription?: string | null
    tokenId: string
    chainId: number
    orderType?: $Enums.orderType
    PriceInEth: number
    type?: $Enums.NftType
    isBid: boolean
    BidEndTime?: Date | string | null
    category?: NftsCreatecategoryInput | string[]
    rewardEndDate?: Date | string | null
    rewardPoints?: number | null
    rewardForceCancelled?: boolean | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNftsInput
    views?: ViewsCreateNestedManyWithoutNftsInput
    likes?: LikesCreateNestedManyWithoutNftsInput
    rewardWinners?: ParticpatedCreateNestedManyWithoutNftInput
    AuctionBids?: AuctionBidsCreateNestedManyWithoutNftInput
    transactions?: TransactionsCreateNestedManyWithoutNftInput
  }

  export type NftsUncheckedCreateWithoutRewardTasksInput = {
    id?: string
    creatorId: string
    image: string
    title: string
    description: string
    prompt?: string | null
    shortDescription?: string | null
    tokenId: string
    chainId: number
    orderType?: $Enums.orderType
    PriceInEth: number
    type?: $Enums.NftType
    isBid: boolean
    BidEndTime?: Date | string | null
    category?: NftsCreatecategoryInput | string[]
    rewardEndDate?: Date | string | null
    rewardPoints?: number | null
    rewardForceCancelled?: boolean | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    views?: ViewsUncheckedCreateNestedManyWithoutNftsInput
    likes?: LikesUncheckedCreateNestedManyWithoutNftsInput
    rewardWinners?: ParticpatedUncheckedCreateNestedManyWithoutNftInput
    AuctionBids?: AuctionBidsUncheckedCreateNestedManyWithoutNftInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutNftInput
  }

  export type NftsCreateOrConnectWithoutRewardTasksInput = {
    where: NftsWhereUniqueInput
    create: XOR<NftsCreateWithoutRewardTasksInput, NftsUncheckedCreateWithoutRewardTasksInput>
  }

  export type NftsUpsertWithoutRewardTasksInput = {
    update: XOR<NftsUpdateWithoutRewardTasksInput, NftsUncheckedUpdateWithoutRewardTasksInput>
    create: XOR<NftsCreateWithoutRewardTasksInput, NftsUncheckedCreateWithoutRewardTasksInput>
    where?: NftsWhereInput
  }

  export type NftsUpdateToOneWithWhereWithoutRewardTasksInput = {
    where?: NftsWhereInput
    data: XOR<NftsUpdateWithoutRewardTasksInput, NftsUncheckedUpdateWithoutRewardTasksInput>
  }

  export type NftsUpdateWithoutRewardTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: StringFieldUpdateOperationsInput | string
    chainId?: IntFieldUpdateOperationsInput | number
    orderType?: EnumorderTypeFieldUpdateOperationsInput | $Enums.orderType
    PriceInEth?: FloatFieldUpdateOperationsInput | number
    type?: EnumNftTypeFieldUpdateOperationsInput | $Enums.NftType
    isBid?: BoolFieldUpdateOperationsInput | boolean
    BidEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NftsUpdatecategoryInput | string[]
    rewardEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rewardPoints?: NullableIntFieldUpdateOperationsInput | number | null
    rewardForceCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNftsNestedInput
    views?: ViewsUpdateManyWithoutNftsNestedInput
    likes?: LikesUpdateManyWithoutNftsNestedInput
    rewardWinners?: ParticpatedUpdateManyWithoutNftNestedInput
    AuctionBids?: AuctionBidsUpdateManyWithoutNftNestedInput
    transactions?: TransactionsUpdateManyWithoutNftNestedInput
  }

  export type NftsUncheckedUpdateWithoutRewardTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: StringFieldUpdateOperationsInput | string
    chainId?: IntFieldUpdateOperationsInput | number
    orderType?: EnumorderTypeFieldUpdateOperationsInput | $Enums.orderType
    PriceInEth?: FloatFieldUpdateOperationsInput | number
    type?: EnumNftTypeFieldUpdateOperationsInput | $Enums.NftType
    isBid?: BoolFieldUpdateOperationsInput | boolean
    BidEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NftsUpdatecategoryInput | string[]
    rewardEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rewardPoints?: NullableIntFieldUpdateOperationsInput | number | null
    rewardForceCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: ViewsUncheckedUpdateManyWithoutNftsNestedInput
    likes?: LikesUncheckedUpdateManyWithoutNftsNestedInput
    rewardWinners?: ParticpatedUncheckedUpdateManyWithoutNftNestedInput
    AuctionBids?: AuctionBidsUncheckedUpdateManyWithoutNftNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutNftNestedInput
  }

  export type UserCreateWithoutRewardsInput = {
    id?: string
    email?: string | null
    name?: string | null
    points?: number
    walletAddress: string
    twitter?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    nfts?: NftsCreateNestedManyWithoutUserInput
    views?: ViewsCreateNestedManyWithoutUserInput
    auctions?: AuctionBidsCreateNestedManyWithoutUserInput
    likes?: LikesCreateNestedManyWithoutUserInput
    transactions?: TransactionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRewardsInput = {
    id?: string
    email?: string | null
    name?: string | null
    points?: number
    walletAddress: string
    twitter?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    nfts?: NftsUncheckedCreateNestedManyWithoutUserInput
    views?: ViewsUncheckedCreateNestedManyWithoutUserInput
    auctions?: AuctionBidsUncheckedCreateNestedManyWithoutUserInput
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRewardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRewardsInput, UserUncheckedCreateWithoutRewardsInput>
  }

  export type NftsCreateWithoutRewardWinnersInput = {
    id?: string
    image: string
    title: string
    description: string
    prompt?: string | null
    shortDescription?: string | null
    tokenId: string
    chainId: number
    orderType?: $Enums.orderType
    PriceInEth: number
    type?: $Enums.NftType
    isBid: boolean
    BidEndTime?: Date | string | null
    category?: NftsCreatecategoryInput | string[]
    rewardEndDate?: Date | string | null
    rewardPoints?: number | null
    rewardForceCancelled?: boolean | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNftsInput
    views?: ViewsCreateNestedManyWithoutNftsInput
    likes?: LikesCreateNestedManyWithoutNftsInput
    rewardTasks?: TasksCreateNestedManyWithoutNftsInput
    AuctionBids?: AuctionBidsCreateNestedManyWithoutNftInput
    transactions?: TransactionsCreateNestedManyWithoutNftInput
  }

  export type NftsUncheckedCreateWithoutRewardWinnersInput = {
    id?: string
    creatorId: string
    image: string
    title: string
    description: string
    prompt?: string | null
    shortDescription?: string | null
    tokenId: string
    chainId: number
    orderType?: $Enums.orderType
    PriceInEth: number
    type?: $Enums.NftType
    isBid: boolean
    BidEndTime?: Date | string | null
    category?: NftsCreatecategoryInput | string[]
    rewardEndDate?: Date | string | null
    rewardPoints?: number | null
    rewardForceCancelled?: boolean | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    views?: ViewsUncheckedCreateNestedManyWithoutNftsInput
    likes?: LikesUncheckedCreateNestedManyWithoutNftsInput
    rewardTasks?: TasksUncheckedCreateNestedManyWithoutNftsInput
    AuctionBids?: AuctionBidsUncheckedCreateNestedManyWithoutNftInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutNftInput
  }

  export type NftsCreateOrConnectWithoutRewardWinnersInput = {
    where: NftsWhereUniqueInput
    create: XOR<NftsCreateWithoutRewardWinnersInput, NftsUncheckedCreateWithoutRewardWinnersInput>
  }

  export type UserUpsertWithoutRewardsInput = {
    update: XOR<UserUpdateWithoutRewardsInput, UserUncheckedUpdateWithoutRewardsInput>
    create: XOR<UserCreateWithoutRewardsInput, UserUncheckedCreateWithoutRewardsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRewardsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRewardsInput, UserUncheckedUpdateWithoutRewardsInput>
  }

  export type UserUpdateWithoutRewardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    walletAddress?: StringFieldUpdateOperationsInput | string
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nfts?: NftsUpdateManyWithoutUserNestedInput
    views?: ViewsUpdateManyWithoutUserNestedInput
    auctions?: AuctionBidsUpdateManyWithoutUserNestedInput
    likes?: LikesUpdateManyWithoutUserNestedInput
    transactions?: TransactionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRewardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    walletAddress?: StringFieldUpdateOperationsInput | string
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nfts?: NftsUncheckedUpdateManyWithoutUserNestedInput
    views?: ViewsUncheckedUpdateManyWithoutUserNestedInput
    auctions?: AuctionBidsUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NftsUpsertWithoutRewardWinnersInput = {
    update: XOR<NftsUpdateWithoutRewardWinnersInput, NftsUncheckedUpdateWithoutRewardWinnersInput>
    create: XOR<NftsCreateWithoutRewardWinnersInput, NftsUncheckedCreateWithoutRewardWinnersInput>
    where?: NftsWhereInput
  }

  export type NftsUpdateToOneWithWhereWithoutRewardWinnersInput = {
    where?: NftsWhereInput
    data: XOR<NftsUpdateWithoutRewardWinnersInput, NftsUncheckedUpdateWithoutRewardWinnersInput>
  }

  export type NftsUpdateWithoutRewardWinnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: StringFieldUpdateOperationsInput | string
    chainId?: IntFieldUpdateOperationsInput | number
    orderType?: EnumorderTypeFieldUpdateOperationsInput | $Enums.orderType
    PriceInEth?: FloatFieldUpdateOperationsInput | number
    type?: EnumNftTypeFieldUpdateOperationsInput | $Enums.NftType
    isBid?: BoolFieldUpdateOperationsInput | boolean
    BidEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NftsUpdatecategoryInput | string[]
    rewardEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rewardPoints?: NullableIntFieldUpdateOperationsInput | number | null
    rewardForceCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNftsNestedInput
    views?: ViewsUpdateManyWithoutNftsNestedInput
    likes?: LikesUpdateManyWithoutNftsNestedInput
    rewardTasks?: TasksUpdateManyWithoutNftsNestedInput
    AuctionBids?: AuctionBidsUpdateManyWithoutNftNestedInput
    transactions?: TransactionsUpdateManyWithoutNftNestedInput
  }

  export type NftsUncheckedUpdateWithoutRewardWinnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: StringFieldUpdateOperationsInput | string
    chainId?: IntFieldUpdateOperationsInput | number
    orderType?: EnumorderTypeFieldUpdateOperationsInput | $Enums.orderType
    PriceInEth?: FloatFieldUpdateOperationsInput | number
    type?: EnumNftTypeFieldUpdateOperationsInput | $Enums.NftType
    isBid?: BoolFieldUpdateOperationsInput | boolean
    BidEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NftsUpdatecategoryInput | string[]
    rewardEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rewardPoints?: NullableIntFieldUpdateOperationsInput | number | null
    rewardForceCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: ViewsUncheckedUpdateManyWithoutNftsNestedInput
    likes?: LikesUncheckedUpdateManyWithoutNftsNestedInput
    rewardTasks?: TasksUncheckedUpdateManyWithoutNftsNestedInput
    AuctionBids?: AuctionBidsUncheckedUpdateManyWithoutNftNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutNftNestedInput
  }

  export type UserCreateWithoutAuctionsInput = {
    id?: string
    email?: string | null
    name?: string | null
    points?: number
    walletAddress: string
    twitter?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    rewards?: ParticpatedCreateNestedManyWithoutUserInput
    nfts?: NftsCreateNestedManyWithoutUserInput
    views?: ViewsCreateNestedManyWithoutUserInput
    likes?: LikesCreateNestedManyWithoutUserInput
    transactions?: TransactionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuctionsInput = {
    id?: string
    email?: string | null
    name?: string | null
    points?: number
    walletAddress: string
    twitter?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    rewards?: ParticpatedUncheckedCreateNestedManyWithoutUserInput
    nfts?: NftsUncheckedCreateNestedManyWithoutUserInput
    views?: ViewsUncheckedCreateNestedManyWithoutUserInput
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuctionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuctionsInput, UserUncheckedCreateWithoutAuctionsInput>
  }

  export type NftsCreateWithoutAuctionBidsInput = {
    id?: string
    image: string
    title: string
    description: string
    prompt?: string | null
    shortDescription?: string | null
    tokenId: string
    chainId: number
    orderType?: $Enums.orderType
    PriceInEth: number
    type?: $Enums.NftType
    isBid: boolean
    BidEndTime?: Date | string | null
    category?: NftsCreatecategoryInput | string[]
    rewardEndDate?: Date | string | null
    rewardPoints?: number | null
    rewardForceCancelled?: boolean | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNftsInput
    views?: ViewsCreateNestedManyWithoutNftsInput
    likes?: LikesCreateNestedManyWithoutNftsInput
    rewardWinners?: ParticpatedCreateNestedManyWithoutNftInput
    rewardTasks?: TasksCreateNestedManyWithoutNftsInput
    transactions?: TransactionsCreateNestedManyWithoutNftInput
  }

  export type NftsUncheckedCreateWithoutAuctionBidsInput = {
    id?: string
    creatorId: string
    image: string
    title: string
    description: string
    prompt?: string | null
    shortDescription?: string | null
    tokenId: string
    chainId: number
    orderType?: $Enums.orderType
    PriceInEth: number
    type?: $Enums.NftType
    isBid: boolean
    BidEndTime?: Date | string | null
    category?: NftsCreatecategoryInput | string[]
    rewardEndDate?: Date | string | null
    rewardPoints?: number | null
    rewardForceCancelled?: boolean | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    views?: ViewsUncheckedCreateNestedManyWithoutNftsInput
    likes?: LikesUncheckedCreateNestedManyWithoutNftsInput
    rewardWinners?: ParticpatedUncheckedCreateNestedManyWithoutNftInput
    rewardTasks?: TasksUncheckedCreateNestedManyWithoutNftsInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutNftInput
  }

  export type NftsCreateOrConnectWithoutAuctionBidsInput = {
    where: NftsWhereUniqueInput
    create: XOR<NftsCreateWithoutAuctionBidsInput, NftsUncheckedCreateWithoutAuctionBidsInput>
  }

  export type UserUpsertWithoutAuctionsInput = {
    update: XOR<UserUpdateWithoutAuctionsInput, UserUncheckedUpdateWithoutAuctionsInput>
    create: XOR<UserCreateWithoutAuctionsInput, UserUncheckedCreateWithoutAuctionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuctionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuctionsInput, UserUncheckedUpdateWithoutAuctionsInput>
  }

  export type UserUpdateWithoutAuctionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    walletAddress?: StringFieldUpdateOperationsInput | string
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rewards?: ParticpatedUpdateManyWithoutUserNestedInput
    nfts?: NftsUpdateManyWithoutUserNestedInput
    views?: ViewsUpdateManyWithoutUserNestedInput
    likes?: LikesUpdateManyWithoutUserNestedInput
    transactions?: TransactionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuctionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    walletAddress?: StringFieldUpdateOperationsInput | string
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rewards?: ParticpatedUncheckedUpdateManyWithoutUserNestedInput
    nfts?: NftsUncheckedUpdateManyWithoutUserNestedInput
    views?: ViewsUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NftsUpsertWithoutAuctionBidsInput = {
    update: XOR<NftsUpdateWithoutAuctionBidsInput, NftsUncheckedUpdateWithoutAuctionBidsInput>
    create: XOR<NftsCreateWithoutAuctionBidsInput, NftsUncheckedCreateWithoutAuctionBidsInput>
    where?: NftsWhereInput
  }

  export type NftsUpdateToOneWithWhereWithoutAuctionBidsInput = {
    where?: NftsWhereInput
    data: XOR<NftsUpdateWithoutAuctionBidsInput, NftsUncheckedUpdateWithoutAuctionBidsInput>
  }

  export type NftsUpdateWithoutAuctionBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: StringFieldUpdateOperationsInput | string
    chainId?: IntFieldUpdateOperationsInput | number
    orderType?: EnumorderTypeFieldUpdateOperationsInput | $Enums.orderType
    PriceInEth?: FloatFieldUpdateOperationsInput | number
    type?: EnumNftTypeFieldUpdateOperationsInput | $Enums.NftType
    isBid?: BoolFieldUpdateOperationsInput | boolean
    BidEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NftsUpdatecategoryInput | string[]
    rewardEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rewardPoints?: NullableIntFieldUpdateOperationsInput | number | null
    rewardForceCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNftsNestedInput
    views?: ViewsUpdateManyWithoutNftsNestedInput
    likes?: LikesUpdateManyWithoutNftsNestedInput
    rewardWinners?: ParticpatedUpdateManyWithoutNftNestedInput
    rewardTasks?: TasksUpdateManyWithoutNftsNestedInput
    transactions?: TransactionsUpdateManyWithoutNftNestedInput
  }

  export type NftsUncheckedUpdateWithoutAuctionBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: StringFieldUpdateOperationsInput | string
    chainId?: IntFieldUpdateOperationsInput | number
    orderType?: EnumorderTypeFieldUpdateOperationsInput | $Enums.orderType
    PriceInEth?: FloatFieldUpdateOperationsInput | number
    type?: EnumNftTypeFieldUpdateOperationsInput | $Enums.NftType
    isBid?: BoolFieldUpdateOperationsInput | boolean
    BidEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NftsUpdatecategoryInput | string[]
    rewardEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rewardPoints?: NullableIntFieldUpdateOperationsInput | number | null
    rewardForceCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: ViewsUncheckedUpdateManyWithoutNftsNestedInput
    likes?: LikesUncheckedUpdateManyWithoutNftsNestedInput
    rewardWinners?: ParticpatedUncheckedUpdateManyWithoutNftNestedInput
    rewardTasks?: TasksUncheckedUpdateManyWithoutNftsNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutNftNestedInput
  }

  export type UserCreateWithoutNftsInput = {
    id?: string
    email?: string | null
    name?: string | null
    points?: number
    walletAddress: string
    twitter?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    rewards?: ParticpatedCreateNestedManyWithoutUserInput
    views?: ViewsCreateNestedManyWithoutUserInput
    auctions?: AuctionBidsCreateNestedManyWithoutUserInput
    likes?: LikesCreateNestedManyWithoutUserInput
    transactions?: TransactionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNftsInput = {
    id?: string
    email?: string | null
    name?: string | null
    points?: number
    walletAddress: string
    twitter?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    rewards?: ParticpatedUncheckedCreateNestedManyWithoutUserInput
    views?: ViewsUncheckedCreateNestedManyWithoutUserInput
    auctions?: AuctionBidsUncheckedCreateNestedManyWithoutUserInput
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNftsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNftsInput, UserUncheckedCreateWithoutNftsInput>
  }

  export type ViewsCreateWithoutNftsInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutViewsInput
  }

  export type ViewsUncheckedCreateWithoutNftsInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type ViewsCreateOrConnectWithoutNftsInput = {
    where: ViewsWhereUniqueInput
    create: XOR<ViewsCreateWithoutNftsInput, ViewsUncheckedCreateWithoutNftsInput>
  }

  export type ViewsCreateManyNftsInputEnvelope = {
    data: ViewsCreateManyNftsInput | ViewsCreateManyNftsInput[]
    skipDuplicates?: boolean
  }

  export type LikesCreateWithoutNftsInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLikesInput
  }

  export type LikesUncheckedCreateWithoutNftsInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type LikesCreateOrConnectWithoutNftsInput = {
    where: LikesWhereUniqueInput
    create: XOR<LikesCreateWithoutNftsInput, LikesUncheckedCreateWithoutNftsInput>
  }

  export type LikesCreateManyNftsInputEnvelope = {
    data: LikesCreateManyNftsInput | LikesCreateManyNftsInput[]
    skipDuplicates?: boolean
  }

  export type ParticpatedCreateWithoutNftInput = {
    id?: string
    points: number
    accuracy: number
    createdAt?: Date | string
    rewardStatus?: $Enums.rewardStatus
    user: UserCreateNestedOneWithoutRewardsInput
  }

  export type ParticpatedUncheckedCreateWithoutNftInput = {
    id?: string
    creatorId: string
    points: number
    accuracy: number
    createdAt?: Date | string
    rewardStatus?: $Enums.rewardStatus
  }

  export type ParticpatedCreateOrConnectWithoutNftInput = {
    where: ParticpatedWhereUniqueInput
    create: XOR<ParticpatedCreateWithoutNftInput, ParticpatedUncheckedCreateWithoutNftInput>
  }

  export type ParticpatedCreateManyNftInputEnvelope = {
    data: ParticpatedCreateManyNftInput | ParticpatedCreateManyNftInput[]
    skipDuplicates?: boolean
  }

  export type TasksCreateWithoutNftsInput = {
    id?: string
    prompt: string
  }

  export type TasksUncheckedCreateWithoutNftsInput = {
    id?: string
    prompt: string
  }

  export type TasksCreateOrConnectWithoutNftsInput = {
    where: TasksWhereUniqueInput
    create: XOR<TasksCreateWithoutNftsInput, TasksUncheckedCreateWithoutNftsInput>
  }

  export type TasksCreateManyNftsInputEnvelope = {
    data: TasksCreateManyNftsInput | TasksCreateManyNftsInput[]
    skipDuplicates?: boolean
  }

  export type AuctionBidsCreateWithoutNftInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAuctionsInput
  }

  export type AuctionBidsUncheckedCreateWithoutNftInput = {
    id?: string
    auctionerId: string
    amount: number
    createdAt?: Date | string
  }

  export type AuctionBidsCreateOrConnectWithoutNftInput = {
    where: AuctionBidsWhereUniqueInput
    create: XOR<AuctionBidsCreateWithoutNftInput, AuctionBidsUncheckedCreateWithoutNftInput>
  }

  export type AuctionBidsCreateManyNftInputEnvelope = {
    data: AuctionBidsCreateManyNftInput | AuctionBidsCreateManyNftInput[]
    skipDuplicates?: boolean
  }

  export type TransactionsCreateWithoutNftInput = {
    id?: string
    type: $Enums.TransactionType
    AmountInEth: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionsUncheckedCreateWithoutNftInput = {
    id?: string
    userId: string
    type: $Enums.TransactionType
    AmountInEth: number
    createdAt?: Date | string
  }

  export type TransactionsCreateOrConnectWithoutNftInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutNftInput, TransactionsUncheckedCreateWithoutNftInput>
  }

  export type TransactionsCreateManyNftInputEnvelope = {
    data: TransactionsCreateManyNftInput | TransactionsCreateManyNftInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutNftsInput = {
    update: XOR<UserUpdateWithoutNftsInput, UserUncheckedUpdateWithoutNftsInput>
    create: XOR<UserCreateWithoutNftsInput, UserUncheckedCreateWithoutNftsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNftsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNftsInput, UserUncheckedUpdateWithoutNftsInput>
  }

  export type UserUpdateWithoutNftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    walletAddress?: StringFieldUpdateOperationsInput | string
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rewards?: ParticpatedUpdateManyWithoutUserNestedInput
    views?: ViewsUpdateManyWithoutUserNestedInput
    auctions?: AuctionBidsUpdateManyWithoutUserNestedInput
    likes?: LikesUpdateManyWithoutUserNestedInput
    transactions?: TransactionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    walletAddress?: StringFieldUpdateOperationsInput | string
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rewards?: ParticpatedUncheckedUpdateManyWithoutUserNestedInput
    views?: ViewsUncheckedUpdateManyWithoutUserNestedInput
    auctions?: AuctionBidsUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ViewsUpsertWithWhereUniqueWithoutNftsInput = {
    where: ViewsWhereUniqueInput
    update: XOR<ViewsUpdateWithoutNftsInput, ViewsUncheckedUpdateWithoutNftsInput>
    create: XOR<ViewsCreateWithoutNftsInput, ViewsUncheckedCreateWithoutNftsInput>
  }

  export type ViewsUpdateWithWhereUniqueWithoutNftsInput = {
    where: ViewsWhereUniqueInput
    data: XOR<ViewsUpdateWithoutNftsInput, ViewsUncheckedUpdateWithoutNftsInput>
  }

  export type ViewsUpdateManyWithWhereWithoutNftsInput = {
    where: ViewsScalarWhereInput
    data: XOR<ViewsUpdateManyMutationInput, ViewsUncheckedUpdateManyWithoutNftsInput>
  }

  export type LikesUpsertWithWhereUniqueWithoutNftsInput = {
    where: LikesWhereUniqueInput
    update: XOR<LikesUpdateWithoutNftsInput, LikesUncheckedUpdateWithoutNftsInput>
    create: XOR<LikesCreateWithoutNftsInput, LikesUncheckedCreateWithoutNftsInput>
  }

  export type LikesUpdateWithWhereUniqueWithoutNftsInput = {
    where: LikesWhereUniqueInput
    data: XOR<LikesUpdateWithoutNftsInput, LikesUncheckedUpdateWithoutNftsInput>
  }

  export type LikesUpdateManyWithWhereWithoutNftsInput = {
    where: LikesScalarWhereInput
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyWithoutNftsInput>
  }

  export type ParticpatedUpsertWithWhereUniqueWithoutNftInput = {
    where: ParticpatedWhereUniqueInput
    update: XOR<ParticpatedUpdateWithoutNftInput, ParticpatedUncheckedUpdateWithoutNftInput>
    create: XOR<ParticpatedCreateWithoutNftInput, ParticpatedUncheckedCreateWithoutNftInput>
  }

  export type ParticpatedUpdateWithWhereUniqueWithoutNftInput = {
    where: ParticpatedWhereUniqueInput
    data: XOR<ParticpatedUpdateWithoutNftInput, ParticpatedUncheckedUpdateWithoutNftInput>
  }

  export type ParticpatedUpdateManyWithWhereWithoutNftInput = {
    where: ParticpatedScalarWhereInput
    data: XOR<ParticpatedUpdateManyMutationInput, ParticpatedUncheckedUpdateManyWithoutNftInput>
  }

  export type TasksUpsertWithWhereUniqueWithoutNftsInput = {
    where: TasksWhereUniqueInput
    update: XOR<TasksUpdateWithoutNftsInput, TasksUncheckedUpdateWithoutNftsInput>
    create: XOR<TasksCreateWithoutNftsInput, TasksUncheckedCreateWithoutNftsInput>
  }

  export type TasksUpdateWithWhereUniqueWithoutNftsInput = {
    where: TasksWhereUniqueInput
    data: XOR<TasksUpdateWithoutNftsInput, TasksUncheckedUpdateWithoutNftsInput>
  }

  export type TasksUpdateManyWithWhereWithoutNftsInput = {
    where: TasksScalarWhereInput
    data: XOR<TasksUpdateManyMutationInput, TasksUncheckedUpdateManyWithoutNftsInput>
  }

  export type TasksScalarWhereInput = {
    AND?: TasksScalarWhereInput | TasksScalarWhereInput[]
    OR?: TasksScalarWhereInput[]
    NOT?: TasksScalarWhereInput | TasksScalarWhereInput[]
    id?: StringFilter<"Tasks"> | string
    nftId?: StringFilter<"Tasks"> | string
    prompt?: StringFilter<"Tasks"> | string
  }

  export type AuctionBidsUpsertWithWhereUniqueWithoutNftInput = {
    where: AuctionBidsWhereUniqueInput
    update: XOR<AuctionBidsUpdateWithoutNftInput, AuctionBidsUncheckedUpdateWithoutNftInput>
    create: XOR<AuctionBidsCreateWithoutNftInput, AuctionBidsUncheckedCreateWithoutNftInput>
  }

  export type AuctionBidsUpdateWithWhereUniqueWithoutNftInput = {
    where: AuctionBidsWhereUniqueInput
    data: XOR<AuctionBidsUpdateWithoutNftInput, AuctionBidsUncheckedUpdateWithoutNftInput>
  }

  export type AuctionBidsUpdateManyWithWhereWithoutNftInput = {
    where: AuctionBidsScalarWhereInput
    data: XOR<AuctionBidsUpdateManyMutationInput, AuctionBidsUncheckedUpdateManyWithoutNftInput>
  }

  export type TransactionsUpsertWithWhereUniqueWithoutNftInput = {
    where: TransactionsWhereUniqueInput
    update: XOR<TransactionsUpdateWithoutNftInput, TransactionsUncheckedUpdateWithoutNftInput>
    create: XOR<TransactionsCreateWithoutNftInput, TransactionsUncheckedCreateWithoutNftInput>
  }

  export type TransactionsUpdateWithWhereUniqueWithoutNftInput = {
    where: TransactionsWhereUniqueInput
    data: XOR<TransactionsUpdateWithoutNftInput, TransactionsUncheckedUpdateWithoutNftInput>
  }

  export type TransactionsUpdateManyWithWhereWithoutNftInput = {
    where: TransactionsScalarWhereInput
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyWithoutNftInput>
  }

  export type UserCreateWithoutTransactionsInput = {
    id?: string
    email?: string | null
    name?: string | null
    points?: number
    walletAddress: string
    twitter?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    rewards?: ParticpatedCreateNestedManyWithoutUserInput
    nfts?: NftsCreateNestedManyWithoutUserInput
    views?: ViewsCreateNestedManyWithoutUserInput
    auctions?: AuctionBidsCreateNestedManyWithoutUserInput
    likes?: LikesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: string
    email?: string | null
    name?: string | null
    points?: number
    walletAddress: string
    twitter?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    rewards?: ParticpatedUncheckedCreateNestedManyWithoutUserInput
    nfts?: NftsUncheckedCreateNestedManyWithoutUserInput
    views?: ViewsUncheckedCreateNestedManyWithoutUserInput
    auctions?: AuctionBidsUncheckedCreateNestedManyWithoutUserInput
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type NftsCreateWithoutTransactionsInput = {
    id?: string
    image: string
    title: string
    description: string
    prompt?: string | null
    shortDescription?: string | null
    tokenId: string
    chainId: number
    orderType?: $Enums.orderType
    PriceInEth: number
    type?: $Enums.NftType
    isBid: boolean
    BidEndTime?: Date | string | null
    category?: NftsCreatecategoryInput | string[]
    rewardEndDate?: Date | string | null
    rewardPoints?: number | null
    rewardForceCancelled?: boolean | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNftsInput
    views?: ViewsCreateNestedManyWithoutNftsInput
    likes?: LikesCreateNestedManyWithoutNftsInput
    rewardWinners?: ParticpatedCreateNestedManyWithoutNftInput
    rewardTasks?: TasksCreateNestedManyWithoutNftsInput
    AuctionBids?: AuctionBidsCreateNestedManyWithoutNftInput
  }

  export type NftsUncheckedCreateWithoutTransactionsInput = {
    id?: string
    creatorId: string
    image: string
    title: string
    description: string
    prompt?: string | null
    shortDescription?: string | null
    tokenId: string
    chainId: number
    orderType?: $Enums.orderType
    PriceInEth: number
    type?: $Enums.NftType
    isBid: boolean
    BidEndTime?: Date | string | null
    category?: NftsCreatecategoryInput | string[]
    rewardEndDate?: Date | string | null
    rewardPoints?: number | null
    rewardForceCancelled?: boolean | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    views?: ViewsUncheckedCreateNestedManyWithoutNftsInput
    likes?: LikesUncheckedCreateNestedManyWithoutNftsInput
    rewardWinners?: ParticpatedUncheckedCreateNestedManyWithoutNftInput
    rewardTasks?: TasksUncheckedCreateNestedManyWithoutNftsInput
    AuctionBids?: AuctionBidsUncheckedCreateNestedManyWithoutNftInput
  }

  export type NftsCreateOrConnectWithoutTransactionsInput = {
    where: NftsWhereUniqueInput
    create: XOR<NftsCreateWithoutTransactionsInput, NftsUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    walletAddress?: StringFieldUpdateOperationsInput | string
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rewards?: ParticpatedUpdateManyWithoutUserNestedInput
    nfts?: NftsUpdateManyWithoutUserNestedInput
    views?: ViewsUpdateManyWithoutUserNestedInput
    auctions?: AuctionBidsUpdateManyWithoutUserNestedInput
    likes?: LikesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    walletAddress?: StringFieldUpdateOperationsInput | string
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rewards?: ParticpatedUncheckedUpdateManyWithoutUserNestedInput
    nfts?: NftsUncheckedUpdateManyWithoutUserNestedInput
    views?: ViewsUncheckedUpdateManyWithoutUserNestedInput
    auctions?: AuctionBidsUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NftsUpsertWithoutTransactionsInput = {
    update: XOR<NftsUpdateWithoutTransactionsInput, NftsUncheckedUpdateWithoutTransactionsInput>
    create: XOR<NftsCreateWithoutTransactionsInput, NftsUncheckedCreateWithoutTransactionsInput>
    where?: NftsWhereInput
  }

  export type NftsUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: NftsWhereInput
    data: XOR<NftsUpdateWithoutTransactionsInput, NftsUncheckedUpdateWithoutTransactionsInput>
  }

  export type NftsUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: StringFieldUpdateOperationsInput | string
    chainId?: IntFieldUpdateOperationsInput | number
    orderType?: EnumorderTypeFieldUpdateOperationsInput | $Enums.orderType
    PriceInEth?: FloatFieldUpdateOperationsInput | number
    type?: EnumNftTypeFieldUpdateOperationsInput | $Enums.NftType
    isBid?: BoolFieldUpdateOperationsInput | boolean
    BidEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NftsUpdatecategoryInput | string[]
    rewardEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rewardPoints?: NullableIntFieldUpdateOperationsInput | number | null
    rewardForceCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNftsNestedInput
    views?: ViewsUpdateManyWithoutNftsNestedInput
    likes?: LikesUpdateManyWithoutNftsNestedInput
    rewardWinners?: ParticpatedUpdateManyWithoutNftNestedInput
    rewardTasks?: TasksUpdateManyWithoutNftsNestedInput
    AuctionBids?: AuctionBidsUpdateManyWithoutNftNestedInput
  }

  export type NftsUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: StringFieldUpdateOperationsInput | string
    chainId?: IntFieldUpdateOperationsInput | number
    orderType?: EnumorderTypeFieldUpdateOperationsInput | $Enums.orderType
    PriceInEth?: FloatFieldUpdateOperationsInput | number
    type?: EnumNftTypeFieldUpdateOperationsInput | $Enums.NftType
    isBid?: BoolFieldUpdateOperationsInput | boolean
    BidEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NftsUpdatecategoryInput | string[]
    rewardEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rewardPoints?: NullableIntFieldUpdateOperationsInput | number | null
    rewardForceCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: ViewsUncheckedUpdateManyWithoutNftsNestedInput
    likes?: LikesUncheckedUpdateManyWithoutNftsNestedInput
    rewardWinners?: ParticpatedUncheckedUpdateManyWithoutNftNestedInput
    rewardTasks?: TasksUncheckedUpdateManyWithoutNftsNestedInput
    AuctionBids?: AuctionBidsUncheckedUpdateManyWithoutNftNestedInput
  }

  export type ParticpatedCreateManyUserInput = {
    id?: string
    points: number
    nftId: string
    accuracy: number
    createdAt?: Date | string
    rewardStatus?: $Enums.rewardStatus
  }

  export type NftsCreateManyUserInput = {
    id?: string
    image: string
    title: string
    description: string
    prompt?: string | null
    shortDescription?: string | null
    tokenId: string
    chainId: number
    orderType?: $Enums.orderType
    PriceInEth: number
    type?: $Enums.NftType
    isBid: boolean
    BidEndTime?: Date | string | null
    category?: NftsCreatecategoryInput | string[]
    rewardEndDate?: Date | string | null
    rewardPoints?: number | null
    rewardForceCancelled?: boolean | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ViewsCreateManyUserInput = {
    id?: string
    nftId: string
    createdAt?: Date | string
  }

  export type AuctionBidsCreateManyUserInput = {
    id?: string
    nftId: string
    amount: number
    createdAt?: Date | string
  }

  export type LikesCreateManyUserInput = {
    id?: string
    nftId: string
    createdAt?: Date | string
  }

  export type TransactionsCreateManyUserInput = {
    id?: string
    type: $Enums.TransactionType
    AmountInEth: number
    nftId: string
    createdAt?: Date | string
  }

  export type ParticpatedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    accuracy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rewardStatus?: EnumrewardStatusFieldUpdateOperationsInput | $Enums.rewardStatus
    nft?: NftsUpdateOneRequiredWithoutRewardWinnersNestedInput
  }

  export type ParticpatedUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    nftId?: StringFieldUpdateOperationsInput | string
    accuracy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rewardStatus?: EnumrewardStatusFieldUpdateOperationsInput | $Enums.rewardStatus
  }

  export type ParticpatedUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    nftId?: StringFieldUpdateOperationsInput | string
    accuracy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rewardStatus?: EnumrewardStatusFieldUpdateOperationsInput | $Enums.rewardStatus
  }

  export type NftsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: StringFieldUpdateOperationsInput | string
    chainId?: IntFieldUpdateOperationsInput | number
    orderType?: EnumorderTypeFieldUpdateOperationsInput | $Enums.orderType
    PriceInEth?: FloatFieldUpdateOperationsInput | number
    type?: EnumNftTypeFieldUpdateOperationsInput | $Enums.NftType
    isBid?: BoolFieldUpdateOperationsInput | boolean
    BidEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NftsUpdatecategoryInput | string[]
    rewardEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rewardPoints?: NullableIntFieldUpdateOperationsInput | number | null
    rewardForceCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: ViewsUpdateManyWithoutNftsNestedInput
    likes?: LikesUpdateManyWithoutNftsNestedInput
    rewardWinners?: ParticpatedUpdateManyWithoutNftNestedInput
    rewardTasks?: TasksUpdateManyWithoutNftsNestedInput
    AuctionBids?: AuctionBidsUpdateManyWithoutNftNestedInput
    transactions?: TransactionsUpdateManyWithoutNftNestedInput
  }

  export type NftsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: StringFieldUpdateOperationsInput | string
    chainId?: IntFieldUpdateOperationsInput | number
    orderType?: EnumorderTypeFieldUpdateOperationsInput | $Enums.orderType
    PriceInEth?: FloatFieldUpdateOperationsInput | number
    type?: EnumNftTypeFieldUpdateOperationsInput | $Enums.NftType
    isBid?: BoolFieldUpdateOperationsInput | boolean
    BidEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NftsUpdatecategoryInput | string[]
    rewardEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rewardPoints?: NullableIntFieldUpdateOperationsInput | number | null
    rewardForceCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: ViewsUncheckedUpdateManyWithoutNftsNestedInput
    likes?: LikesUncheckedUpdateManyWithoutNftsNestedInput
    rewardWinners?: ParticpatedUncheckedUpdateManyWithoutNftNestedInput
    rewardTasks?: TasksUncheckedUpdateManyWithoutNftsNestedInput
    AuctionBids?: AuctionBidsUncheckedUpdateManyWithoutNftNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutNftNestedInput
  }

  export type NftsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: StringFieldUpdateOperationsInput | string
    chainId?: IntFieldUpdateOperationsInput | number
    orderType?: EnumorderTypeFieldUpdateOperationsInput | $Enums.orderType
    PriceInEth?: FloatFieldUpdateOperationsInput | number
    type?: EnumNftTypeFieldUpdateOperationsInput | $Enums.NftType
    isBid?: BoolFieldUpdateOperationsInput | boolean
    BidEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NftsUpdatecategoryInput | string[]
    rewardEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rewardPoints?: NullableIntFieldUpdateOperationsInput | number | null
    rewardForceCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nfts?: NftsUpdateOneRequiredWithoutViewsNestedInput
  }

  export type ViewsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nftId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nftId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuctionBidsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nft?: NftsUpdateOneRequiredWithoutAuctionBidsNestedInput
  }

  export type AuctionBidsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nftId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuctionBidsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nftId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nfts?: NftsUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nftId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nftId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    AmountInEth?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nft?: NftsUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    AmountInEth?: FloatFieldUpdateOperationsInput | number
    nftId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    AmountInEth?: FloatFieldUpdateOperationsInput | number
    nftId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewsCreateManyNftsInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type LikesCreateManyNftsInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type ParticpatedCreateManyNftInput = {
    id?: string
    creatorId: string
    points: number
    accuracy: number
    createdAt?: Date | string
    rewardStatus?: $Enums.rewardStatus
  }

  export type TasksCreateManyNftsInput = {
    id?: string
    prompt: string
  }

  export type AuctionBidsCreateManyNftInput = {
    id?: string
    auctionerId: string
    amount: number
    createdAt?: Date | string
  }

  export type TransactionsCreateManyNftInput = {
    id?: string
    userId: string
    type: $Enums.TransactionType
    AmountInEth: number
    createdAt?: Date | string
  }

  export type ViewsUpdateWithoutNftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutViewsNestedInput
  }

  export type ViewsUncheckedUpdateWithoutNftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewsUncheckedUpdateManyWithoutNftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesUpdateWithoutNftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikesUncheckedUpdateWithoutNftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesUncheckedUpdateManyWithoutNftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticpatedUpdateWithoutNftInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    accuracy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rewardStatus?: EnumrewardStatusFieldUpdateOperationsInput | $Enums.rewardStatus
    user?: UserUpdateOneRequiredWithoutRewardsNestedInput
  }

  export type ParticpatedUncheckedUpdateWithoutNftInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    accuracy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rewardStatus?: EnumrewardStatusFieldUpdateOperationsInput | $Enums.rewardStatus
  }

  export type ParticpatedUncheckedUpdateManyWithoutNftInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    accuracy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rewardStatus?: EnumrewardStatusFieldUpdateOperationsInput | $Enums.rewardStatus
  }

  export type TasksUpdateWithoutNftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
  }

  export type TasksUncheckedUpdateWithoutNftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
  }

  export type TasksUncheckedUpdateManyWithoutNftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
  }

  export type AuctionBidsUpdateWithoutNftInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuctionsNestedInput
  }

  export type AuctionBidsUncheckedUpdateWithoutNftInput = {
    id?: StringFieldUpdateOperationsInput | string
    auctionerId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuctionBidsUncheckedUpdateManyWithoutNftInput = {
    id?: StringFieldUpdateOperationsInput | string
    auctionerId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsUpdateWithoutNftInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    AmountInEth?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionsUncheckedUpdateWithoutNftInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    AmountInEth?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsUncheckedUpdateManyWithoutNftInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    AmountInEth?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NftsCountOutputTypeDefaultArgs instead
     */
    export type NftsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NftsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ViewsDefaultArgs instead
     */
    export type ViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ViewsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LikesDefaultArgs instead
     */
    export type LikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LikesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TasksDefaultArgs instead
     */
    export type TasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TasksDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ParticpatedDefaultArgs instead
     */
    export type ParticpatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ParticpatedDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuctionBidsDefaultArgs instead
     */
    export type AuctionBidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuctionBidsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NftsDefaultArgs instead
     */
    export type NftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NftsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransactionsDefaultArgs instead
     */
    export type TransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransactionsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}