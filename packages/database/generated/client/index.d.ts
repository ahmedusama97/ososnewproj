
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
 * Model Country
 * 
 */
export type Country = $Result.DefaultSelection<Prisma.$CountryPayload>
/**
 * Model VisaRequest
 * 
 */
export type VisaRequest = $Result.DefaultSelection<Prisma.$VisaRequestPayload>
/**
 * Model VisaApplicant
 * 
 */
export type VisaApplicant = $Result.DefaultSelection<Prisma.$VisaApplicantPayload>
/**
 * Model RequestContext
 * 
 */
export type RequestContext = $Result.DefaultSelection<Prisma.$RequestContextPayload>
/**
 * Model StatusHistoryEvent
 * 
 */
export type StatusHistoryEvent = $Result.DefaultSelection<Prisma.$StatusHistoryEventPayload>
/**
 * Model AdminCredential
 * 
 */
export type AdminCredential = $Result.DefaultSelection<Prisma.$AdminCredentialPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const VisaRequestStatus: {
  draft: 'draft',
  submitted: 'submitted',
  in_review: 'in_review',
  issued: 'issued',
  rejected: 'rejected'
};

export type VisaRequestStatus = (typeof VisaRequestStatus)[keyof typeof VisaRequestStatus]

}

export type VisaRequestStatus = $Enums.VisaRequestStatus

export const VisaRequestStatus: typeof $Enums.VisaRequestStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Countries
 * const countries = await prisma.country.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Countries
   * const countries = await prisma.country.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visaRequest`: Exposes CRUD operations for the **VisaRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VisaRequests
    * const visaRequests = await prisma.visaRequest.findMany()
    * ```
    */
  get visaRequest(): Prisma.VisaRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visaApplicant`: Exposes CRUD operations for the **VisaApplicant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VisaApplicants
    * const visaApplicants = await prisma.visaApplicant.findMany()
    * ```
    */
  get visaApplicant(): Prisma.VisaApplicantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.requestContext`: Exposes CRUD operations for the **RequestContext** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RequestContexts
    * const requestContexts = await prisma.requestContext.findMany()
    * ```
    */
  get requestContext(): Prisma.RequestContextDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.statusHistoryEvent`: Exposes CRUD operations for the **StatusHistoryEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StatusHistoryEvents
    * const statusHistoryEvents = await prisma.statusHistoryEvent.findMany()
    * ```
    */
  get statusHistoryEvent(): Prisma.StatusHistoryEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminCredential`: Exposes CRUD operations for the **AdminCredential** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminCredentials
    * const adminCredentials = await prisma.adminCredential.findMany()
    * ```
    */
  get adminCredential(): Prisma.AdminCredentialDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Country: 'Country',
    VisaRequest: 'VisaRequest',
    VisaApplicant: 'VisaApplicant',
    RequestContext: 'RequestContext',
    StatusHistoryEvent: 'StatusHistoryEvent',
    AdminCredential: 'AdminCredential'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "country" | "visaRequest" | "visaApplicant" | "requestContext" | "statusHistoryEvent" | "adminCredential"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Country: {
        payload: Prisma.$CountryPayload<ExtArgs>
        fields: Prisma.CountryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findFirst: {
            args: Prisma.CountryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findMany: {
            args: Prisma.CountryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          create: {
            args: Prisma.CountryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          createMany: {
            args: Prisma.CountryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CountryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          delete: {
            args: Prisma.CountryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          update: {
            args: Prisma.CountryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          deleteMany: {
            args: Prisma.CountryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CountryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          upsert: {
            args: Prisma.CountryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          aggregate: {
            args: Prisma.CountryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountry>
          }
          groupBy: {
            args: Prisma.CountryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountryCountArgs<ExtArgs>
            result: $Utils.Optional<CountryCountAggregateOutputType> | number
          }
        }
      }
      VisaRequest: {
        payload: Prisma.$VisaRequestPayload<ExtArgs>
        fields: Prisma.VisaRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisaRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisaRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaRequestPayload>
          }
          findFirst: {
            args: Prisma.VisaRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisaRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaRequestPayload>
          }
          findMany: {
            args: Prisma.VisaRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaRequestPayload>[]
          }
          create: {
            args: Prisma.VisaRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaRequestPayload>
          }
          createMany: {
            args: Prisma.VisaRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VisaRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaRequestPayload>[]
          }
          delete: {
            args: Prisma.VisaRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaRequestPayload>
          }
          update: {
            args: Prisma.VisaRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaRequestPayload>
          }
          deleteMany: {
            args: Prisma.VisaRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisaRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VisaRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaRequestPayload>[]
          }
          upsert: {
            args: Prisma.VisaRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaRequestPayload>
          }
          aggregate: {
            args: Prisma.VisaRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisaRequest>
          }
          groupBy: {
            args: Prisma.VisaRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisaRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisaRequestCountArgs<ExtArgs>
            result: $Utils.Optional<VisaRequestCountAggregateOutputType> | number
          }
        }
      }
      VisaApplicant: {
        payload: Prisma.$VisaApplicantPayload<ExtArgs>
        fields: Prisma.VisaApplicantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisaApplicantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaApplicantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisaApplicantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaApplicantPayload>
          }
          findFirst: {
            args: Prisma.VisaApplicantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaApplicantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisaApplicantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaApplicantPayload>
          }
          findMany: {
            args: Prisma.VisaApplicantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaApplicantPayload>[]
          }
          create: {
            args: Prisma.VisaApplicantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaApplicantPayload>
          }
          createMany: {
            args: Prisma.VisaApplicantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VisaApplicantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaApplicantPayload>[]
          }
          delete: {
            args: Prisma.VisaApplicantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaApplicantPayload>
          }
          update: {
            args: Prisma.VisaApplicantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaApplicantPayload>
          }
          deleteMany: {
            args: Prisma.VisaApplicantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisaApplicantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VisaApplicantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaApplicantPayload>[]
          }
          upsert: {
            args: Prisma.VisaApplicantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaApplicantPayload>
          }
          aggregate: {
            args: Prisma.VisaApplicantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisaApplicant>
          }
          groupBy: {
            args: Prisma.VisaApplicantGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisaApplicantGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisaApplicantCountArgs<ExtArgs>
            result: $Utils.Optional<VisaApplicantCountAggregateOutputType> | number
          }
        }
      }
      RequestContext: {
        payload: Prisma.$RequestContextPayload<ExtArgs>
        fields: Prisma.RequestContextFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestContextFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestContextPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestContextFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestContextPayload>
          }
          findFirst: {
            args: Prisma.RequestContextFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestContextPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestContextFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestContextPayload>
          }
          findMany: {
            args: Prisma.RequestContextFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestContextPayload>[]
          }
          create: {
            args: Prisma.RequestContextCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestContextPayload>
          }
          createMany: {
            args: Prisma.RequestContextCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequestContextCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestContextPayload>[]
          }
          delete: {
            args: Prisma.RequestContextDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestContextPayload>
          }
          update: {
            args: Prisma.RequestContextUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestContextPayload>
          }
          deleteMany: {
            args: Prisma.RequestContextDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequestContextUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequestContextUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestContextPayload>[]
          }
          upsert: {
            args: Prisma.RequestContextUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestContextPayload>
          }
          aggregate: {
            args: Prisma.RequestContextAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequestContext>
          }
          groupBy: {
            args: Prisma.RequestContextGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestContextGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestContextCountArgs<ExtArgs>
            result: $Utils.Optional<RequestContextCountAggregateOutputType> | number
          }
        }
      }
      StatusHistoryEvent: {
        payload: Prisma.$StatusHistoryEventPayload<ExtArgs>
        fields: Prisma.StatusHistoryEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatusHistoryEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusHistoryEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatusHistoryEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusHistoryEventPayload>
          }
          findFirst: {
            args: Prisma.StatusHistoryEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusHistoryEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatusHistoryEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusHistoryEventPayload>
          }
          findMany: {
            args: Prisma.StatusHistoryEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusHistoryEventPayload>[]
          }
          create: {
            args: Prisma.StatusHistoryEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusHistoryEventPayload>
          }
          createMany: {
            args: Prisma.StatusHistoryEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatusHistoryEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusHistoryEventPayload>[]
          }
          delete: {
            args: Prisma.StatusHistoryEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusHistoryEventPayload>
          }
          update: {
            args: Prisma.StatusHistoryEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusHistoryEventPayload>
          }
          deleteMany: {
            args: Prisma.StatusHistoryEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatusHistoryEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StatusHistoryEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusHistoryEventPayload>[]
          }
          upsert: {
            args: Prisma.StatusHistoryEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusHistoryEventPayload>
          }
          aggregate: {
            args: Prisma.StatusHistoryEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatusHistoryEvent>
          }
          groupBy: {
            args: Prisma.StatusHistoryEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatusHistoryEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatusHistoryEventCountArgs<ExtArgs>
            result: $Utils.Optional<StatusHistoryEventCountAggregateOutputType> | number
          }
        }
      }
      AdminCredential: {
        payload: Prisma.$AdminCredentialPayload<ExtArgs>
        fields: Prisma.AdminCredentialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminCredentialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminCredentialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminCredentialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminCredentialPayload>
          }
          findFirst: {
            args: Prisma.AdminCredentialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminCredentialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminCredentialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminCredentialPayload>
          }
          findMany: {
            args: Prisma.AdminCredentialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminCredentialPayload>[]
          }
          create: {
            args: Prisma.AdminCredentialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminCredentialPayload>
          }
          createMany: {
            args: Prisma.AdminCredentialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCredentialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminCredentialPayload>[]
          }
          delete: {
            args: Prisma.AdminCredentialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminCredentialPayload>
          }
          update: {
            args: Prisma.AdminCredentialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminCredentialPayload>
          }
          deleteMany: {
            args: Prisma.AdminCredentialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminCredentialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminCredentialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminCredentialPayload>[]
          }
          upsert: {
            args: Prisma.AdminCredentialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminCredentialPayload>
          }
          aggregate: {
            args: Prisma.AdminCredentialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminCredential>
          }
          groupBy: {
            args: Prisma.AdminCredentialGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminCredentialGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCredentialCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCredentialCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    country?: CountryOmit
    visaRequest?: VisaRequestOmit
    visaApplicant?: VisaApplicantOmit
    requestContext?: RequestContextOmit
    statusHistoryEvent?: StatusHistoryEventOmit
    adminCredential?: AdminCredentialOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type CountryCountOutputType
   */

  export type CountryCountOutputType = {
    requests: number
  }

  export type CountryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | CountryCountOutputTypeCountRequestsArgs
  }

  // Custom InputTypes
  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisaRequestWhereInput
  }


  /**
   * Count Type VisaRequestCountOutputType
   */

  export type VisaRequestCountOutputType = {
    applicants: number
    statusHistory: number
  }

  export type VisaRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicants?: boolean | VisaRequestCountOutputTypeCountApplicantsArgs
    statusHistory?: boolean | VisaRequestCountOutputTypeCountStatusHistoryArgs
  }

  // Custom InputTypes
  /**
   * VisaRequestCountOutputType without action
   */
  export type VisaRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaRequestCountOutputType
     */
    select?: VisaRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VisaRequestCountOutputType without action
   */
  export type VisaRequestCountOutputTypeCountApplicantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisaApplicantWhereInput
  }

  /**
   * VisaRequestCountOutputType without action
   */
  export type VisaRequestCountOutputTypeCountStatusHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusHistoryEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Country
   */

  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryMinAggregateOutputType = {
    id: string | null
    code: string | null
    nameAr: string | null
    nameEn: string | null
    flag: string | null
    visaType: string | null
    accent: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CountryMaxAggregateOutputType = {
    id: string | null
    code: string | null
    nameAr: string | null
    nameEn: string | null
    flag: string | null
    visaType: string | null
    accent: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CountryCountAggregateOutputType = {
    id: number
    code: number
    nameAr: number
    nameEn: number
    flag: number
    visaType: number
    accent: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CountryMinAggregateInputType = {
    id?: true
    code?: true
    nameAr?: true
    nameEn?: true
    flag?: true
    visaType?: true
    accent?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CountryMaxAggregateInputType = {
    id?: true
    code?: true
    nameAr?: true
    nameEn?: true
    flag?: true
    visaType?: true
    accent?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CountryCountAggregateInputType = {
    id?: true
    code?: true
    nameAr?: true
    nameEn?: true
    flag?: true
    visaType?: true
    accent?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Country to aggregate.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithAggregationInput | CountryOrderByWithAggregationInput[]
    by: CountryScalarFieldEnum[] | CountryScalarFieldEnum
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }

  export type CountryGroupByOutputType = {
    id: string
    code: string
    nameAr: string
    nameEn: string
    flag: string
    visaType: string
    accent: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    nameAr?: boolean
    nameEn?: boolean
    flag?: boolean
    visaType?: boolean
    accent?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requests?: boolean | Country$requestsArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["country"]>

  export type CountrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    nameAr?: boolean
    nameEn?: boolean
    flag?: boolean
    visaType?: boolean
    accent?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    nameAr?: boolean
    nameEn?: boolean
    flag?: boolean
    visaType?: boolean
    accent?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectScalar = {
    id?: boolean
    code?: boolean
    nameAr?: boolean
    nameEn?: boolean
    flag?: boolean
    visaType?: boolean
    accent?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CountryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "nameAr" | "nameEn" | "flag" | "visaType" | "accent" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["country"]>
  export type CountryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | Country$requestsArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CountryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CountryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CountryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Country"
    objects: {
      requests: Prisma.$VisaRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      nameAr: string
      nameEn: string
      flag: string
      visaType: string
      accent: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["country"]>
    composites: {}
  }

  type CountryGetPayload<S extends boolean | null | undefined | CountryDefaultArgs> = $Result.GetResult<Prisma.$CountryPayload, S>

  type CountryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CountryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface CountryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Country'], meta: { name: 'Country' } }
    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountryFindUniqueArgs>(args: SelectSubset<T, CountryFindUniqueArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Country that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs>(args: SelectSubset<T, CountryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountryFindFirstArgs>(args?: SelectSubset<T, CountryFindFirstArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs>(args?: SelectSubset<T, CountryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryWithIdOnly = await prisma.country.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CountryFindManyArgs>(args?: SelectSubset<T, CountryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
     */
    create<T extends CountryCreateArgs>(args: SelectSubset<T, CountryCreateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Countries.
     * @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountryCreateManyArgs>(args?: SelectSubset<T, CountryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Countries and returns the data saved in the database.
     * @param {CountryCreateManyAndReturnArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CountryCreateManyAndReturnArgs>(args?: SelectSubset<T, CountryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
     */
    delete<T extends CountryDeleteArgs>(args: SelectSubset<T, CountryDeleteArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountryUpdateArgs>(args: SelectSubset<T, CountryUpdateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountryDeleteManyArgs>(args?: SelectSubset<T, CountryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountryUpdateManyArgs>(args: SelectSubset<T, CountryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries and returns the data updated in the database.
     * @param {CountryUpdateManyAndReturnArgs} args - Arguments to update many Countries.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CountryUpdateManyAndReturnArgs>(args: SelectSubset<T, CountryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
     */
    upsert<T extends CountryUpsertArgs>(args: SelectSubset<T, CountryUpsertArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
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
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Country model
   */
  readonly fields: CountryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requests<T extends Country$requestsArgs<ExtArgs> = {}>(args?: Subset<T, Country$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisaRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Country model
   */
  interface CountryFieldRefs {
    readonly id: FieldRef<"Country", 'String'>
    readonly code: FieldRef<"Country", 'String'>
    readonly nameAr: FieldRef<"Country", 'String'>
    readonly nameEn: FieldRef<"Country", 'String'>
    readonly flag: FieldRef<"Country", 'String'>
    readonly visaType: FieldRef<"Country", 'String'>
    readonly accent: FieldRef<"Country", 'String'>
    readonly isActive: FieldRef<"Country", 'Boolean'>
    readonly createdAt: FieldRef<"Country", 'DateTime'>
    readonly updatedAt: FieldRef<"Country", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Country findUnique
   */
  export type CountryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findFirst
   */
  export type CountryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findMany
   */
  export type CountryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country create
   */
  export type CountryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to create a Country.
     */
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }

  /**
   * Country createMany
   */
  export type CountryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country createManyAndReturn
   */
  export type CountryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country update
   */
  export type CountryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to update a Country.
     */
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country updateManyAndReturn
   */
  export type CountryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country upsert
   */
  export type CountryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The filter to search for the Country to update in case it exists.
     */
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     */
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }

  /**
   * Country delete
   */
  export type CountryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter which Country to delete.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to delete
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to delete.
     */
    limit?: number
  }

  /**
   * Country.requests
   */
  export type Country$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaRequest
     */
    select?: VisaRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaRequest
     */
    omit?: VisaRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaRequestInclude<ExtArgs> | null
    where?: VisaRequestWhereInput
    orderBy?: VisaRequestOrderByWithRelationInput | VisaRequestOrderByWithRelationInput[]
    cursor?: VisaRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisaRequestScalarFieldEnum | VisaRequestScalarFieldEnum[]
  }

  /**
   * Country without action
   */
  export type CountryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
  }


  /**
   * Model VisaRequest
   */

  export type AggregateVisaRequest = {
    _count: VisaRequestCountAggregateOutputType | null
    _min: VisaRequestMinAggregateOutputType | null
    _max: VisaRequestMaxAggregateOutputType | null
  }

  export type VisaRequestMinAggregateOutputType = {
    id: string | null
    referenceCode: string | null
    fullName: string | null
    email: string | null
    phone: string | null
    passportNumber: string | null
    visaType: string | null
    issuingCountry: string | null
    passportExpiryDate: string | null
    passportDocumentName: string | null
    personalPhotoName: string | null
    travelDate: string | null
    status: $Enums.VisaRequestStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    countryId: string | null
  }

  export type VisaRequestMaxAggregateOutputType = {
    id: string | null
    referenceCode: string | null
    fullName: string | null
    email: string | null
    phone: string | null
    passportNumber: string | null
    visaType: string | null
    issuingCountry: string | null
    passportExpiryDate: string | null
    passportDocumentName: string | null
    personalPhotoName: string | null
    travelDate: string | null
    status: $Enums.VisaRequestStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    countryId: string | null
  }

  export type VisaRequestCountAggregateOutputType = {
    id: number
    referenceCode: number
    fullName: number
    email: number
    phone: number
    passportNumber: number
    visaType: number
    issuingCountry: number
    passportExpiryDate: number
    passportDocumentName: number
    personalPhotoName: number
    travelDate: number
    status: number
    createdAt: number
    updatedAt: number
    countryId: number
    _all: number
  }


  export type VisaRequestMinAggregateInputType = {
    id?: true
    referenceCode?: true
    fullName?: true
    email?: true
    phone?: true
    passportNumber?: true
    visaType?: true
    issuingCountry?: true
    passportExpiryDate?: true
    passportDocumentName?: true
    personalPhotoName?: true
    travelDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    countryId?: true
  }

  export type VisaRequestMaxAggregateInputType = {
    id?: true
    referenceCode?: true
    fullName?: true
    email?: true
    phone?: true
    passportNumber?: true
    visaType?: true
    issuingCountry?: true
    passportExpiryDate?: true
    passportDocumentName?: true
    personalPhotoName?: true
    travelDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    countryId?: true
  }

  export type VisaRequestCountAggregateInputType = {
    id?: true
    referenceCode?: true
    fullName?: true
    email?: true
    phone?: true
    passportNumber?: true
    visaType?: true
    issuingCountry?: true
    passportExpiryDate?: true
    passportDocumentName?: true
    personalPhotoName?: true
    travelDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    countryId?: true
    _all?: true
  }

  export type VisaRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisaRequest to aggregate.
     */
    where?: VisaRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisaRequests to fetch.
     */
    orderBy?: VisaRequestOrderByWithRelationInput | VisaRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisaRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisaRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisaRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VisaRequests
    **/
    _count?: true | VisaRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisaRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisaRequestMaxAggregateInputType
  }

  export type GetVisaRequestAggregateType<T extends VisaRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateVisaRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisaRequest[P]>
      : GetScalarType<T[P], AggregateVisaRequest[P]>
  }




  export type VisaRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisaRequestWhereInput
    orderBy?: VisaRequestOrderByWithAggregationInput | VisaRequestOrderByWithAggregationInput[]
    by: VisaRequestScalarFieldEnum[] | VisaRequestScalarFieldEnum
    having?: VisaRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisaRequestCountAggregateInputType | true
    _min?: VisaRequestMinAggregateInputType
    _max?: VisaRequestMaxAggregateInputType
  }

  export type VisaRequestGroupByOutputType = {
    id: string
    referenceCode: string
    fullName: string
    email: string
    phone: string
    passportNumber: string
    visaType: string
    issuingCountry: string | null
    passportExpiryDate: string | null
    passportDocumentName: string | null
    personalPhotoName: string | null
    travelDate: string | null
    status: $Enums.VisaRequestStatus
    createdAt: Date
    updatedAt: Date
    countryId: string
    _count: VisaRequestCountAggregateOutputType | null
    _min: VisaRequestMinAggregateOutputType | null
    _max: VisaRequestMaxAggregateOutputType | null
  }

  type GetVisaRequestGroupByPayload<T extends VisaRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisaRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisaRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisaRequestGroupByOutputType[P]>
            : GetScalarType<T[P], VisaRequestGroupByOutputType[P]>
        }
      >
    >


  export type VisaRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referenceCode?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    passportNumber?: boolean
    visaType?: boolean
    issuingCountry?: boolean
    passportExpiryDate?: boolean
    passportDocumentName?: boolean
    personalPhotoName?: boolean
    travelDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    countryId?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
    requestContext?: boolean | VisaRequest$requestContextArgs<ExtArgs>
    applicants?: boolean | VisaRequest$applicantsArgs<ExtArgs>
    statusHistory?: boolean | VisaRequest$statusHistoryArgs<ExtArgs>
    _count?: boolean | VisaRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visaRequest"]>

  export type VisaRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referenceCode?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    passportNumber?: boolean
    visaType?: boolean
    issuingCountry?: boolean
    passportExpiryDate?: boolean
    passportDocumentName?: boolean
    personalPhotoName?: boolean
    travelDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    countryId?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visaRequest"]>

  export type VisaRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referenceCode?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    passportNumber?: boolean
    visaType?: boolean
    issuingCountry?: boolean
    passportExpiryDate?: boolean
    passportDocumentName?: boolean
    personalPhotoName?: boolean
    travelDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    countryId?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visaRequest"]>

  export type VisaRequestSelectScalar = {
    id?: boolean
    referenceCode?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    passportNumber?: boolean
    visaType?: boolean
    issuingCountry?: boolean
    passportExpiryDate?: boolean
    passportDocumentName?: boolean
    personalPhotoName?: boolean
    travelDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    countryId?: boolean
  }

  export type VisaRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "referenceCode" | "fullName" | "email" | "phone" | "passportNumber" | "visaType" | "issuingCountry" | "passportExpiryDate" | "passportDocumentName" | "personalPhotoName" | "travelDate" | "status" | "createdAt" | "updatedAt" | "countryId", ExtArgs["result"]["visaRequest"]>
  export type VisaRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
    requestContext?: boolean | VisaRequest$requestContextArgs<ExtArgs>
    applicants?: boolean | VisaRequest$applicantsArgs<ExtArgs>
    statusHistory?: boolean | VisaRequest$statusHistoryArgs<ExtArgs>
    _count?: boolean | VisaRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VisaRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }
  export type VisaRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }

  export type $VisaRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VisaRequest"
    objects: {
      country: Prisma.$CountryPayload<ExtArgs>
      requestContext: Prisma.$RequestContextPayload<ExtArgs> | null
      applicants: Prisma.$VisaApplicantPayload<ExtArgs>[]
      statusHistory: Prisma.$StatusHistoryEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      referenceCode: string
      fullName: string
      email: string
      phone: string
      passportNumber: string
      visaType: string
      issuingCountry: string | null
      passportExpiryDate: string | null
      passportDocumentName: string | null
      personalPhotoName: string | null
      travelDate: string | null
      status: $Enums.VisaRequestStatus
      createdAt: Date
      updatedAt: Date
      countryId: string
    }, ExtArgs["result"]["visaRequest"]>
    composites: {}
  }

  type VisaRequestGetPayload<S extends boolean | null | undefined | VisaRequestDefaultArgs> = $Result.GetResult<Prisma.$VisaRequestPayload, S>

  type VisaRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisaRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisaRequestCountAggregateInputType | true
    }

  export interface VisaRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VisaRequest'], meta: { name: 'VisaRequest' } }
    /**
     * Find zero or one VisaRequest that matches the filter.
     * @param {VisaRequestFindUniqueArgs} args - Arguments to find a VisaRequest
     * @example
     * // Get one VisaRequest
     * const visaRequest = await prisma.visaRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisaRequestFindUniqueArgs>(args: SelectSubset<T, VisaRequestFindUniqueArgs<ExtArgs>>): Prisma__VisaRequestClient<$Result.GetResult<Prisma.$VisaRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VisaRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisaRequestFindUniqueOrThrowArgs} args - Arguments to find a VisaRequest
     * @example
     * // Get one VisaRequest
     * const visaRequest = await prisma.visaRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisaRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, VisaRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisaRequestClient<$Result.GetResult<Prisma.$VisaRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisaRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaRequestFindFirstArgs} args - Arguments to find a VisaRequest
     * @example
     * // Get one VisaRequest
     * const visaRequest = await prisma.visaRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisaRequestFindFirstArgs>(args?: SelectSubset<T, VisaRequestFindFirstArgs<ExtArgs>>): Prisma__VisaRequestClient<$Result.GetResult<Prisma.$VisaRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisaRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaRequestFindFirstOrThrowArgs} args - Arguments to find a VisaRequest
     * @example
     * // Get one VisaRequest
     * const visaRequest = await prisma.visaRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisaRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, VisaRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisaRequestClient<$Result.GetResult<Prisma.$VisaRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VisaRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VisaRequests
     * const visaRequests = await prisma.visaRequest.findMany()
     * 
     * // Get first 10 VisaRequests
     * const visaRequests = await prisma.visaRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visaRequestWithIdOnly = await prisma.visaRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisaRequestFindManyArgs>(args?: SelectSubset<T, VisaRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisaRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VisaRequest.
     * @param {VisaRequestCreateArgs} args - Arguments to create a VisaRequest.
     * @example
     * // Create one VisaRequest
     * const VisaRequest = await prisma.visaRequest.create({
     *   data: {
     *     // ... data to create a VisaRequest
     *   }
     * })
     * 
     */
    create<T extends VisaRequestCreateArgs>(args: SelectSubset<T, VisaRequestCreateArgs<ExtArgs>>): Prisma__VisaRequestClient<$Result.GetResult<Prisma.$VisaRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VisaRequests.
     * @param {VisaRequestCreateManyArgs} args - Arguments to create many VisaRequests.
     * @example
     * // Create many VisaRequests
     * const visaRequest = await prisma.visaRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisaRequestCreateManyArgs>(args?: SelectSubset<T, VisaRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VisaRequests and returns the data saved in the database.
     * @param {VisaRequestCreateManyAndReturnArgs} args - Arguments to create many VisaRequests.
     * @example
     * // Create many VisaRequests
     * const visaRequest = await prisma.visaRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VisaRequests and only return the `id`
     * const visaRequestWithIdOnly = await prisma.visaRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VisaRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, VisaRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisaRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VisaRequest.
     * @param {VisaRequestDeleteArgs} args - Arguments to delete one VisaRequest.
     * @example
     * // Delete one VisaRequest
     * const VisaRequest = await prisma.visaRequest.delete({
     *   where: {
     *     // ... filter to delete one VisaRequest
     *   }
     * })
     * 
     */
    delete<T extends VisaRequestDeleteArgs>(args: SelectSubset<T, VisaRequestDeleteArgs<ExtArgs>>): Prisma__VisaRequestClient<$Result.GetResult<Prisma.$VisaRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VisaRequest.
     * @param {VisaRequestUpdateArgs} args - Arguments to update one VisaRequest.
     * @example
     * // Update one VisaRequest
     * const visaRequest = await prisma.visaRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisaRequestUpdateArgs>(args: SelectSubset<T, VisaRequestUpdateArgs<ExtArgs>>): Prisma__VisaRequestClient<$Result.GetResult<Prisma.$VisaRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VisaRequests.
     * @param {VisaRequestDeleteManyArgs} args - Arguments to filter VisaRequests to delete.
     * @example
     * // Delete a few VisaRequests
     * const { count } = await prisma.visaRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisaRequestDeleteManyArgs>(args?: SelectSubset<T, VisaRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisaRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VisaRequests
     * const visaRequest = await prisma.visaRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisaRequestUpdateManyArgs>(args: SelectSubset<T, VisaRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisaRequests and returns the data updated in the database.
     * @param {VisaRequestUpdateManyAndReturnArgs} args - Arguments to update many VisaRequests.
     * @example
     * // Update many VisaRequests
     * const visaRequest = await prisma.visaRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VisaRequests and only return the `id`
     * const visaRequestWithIdOnly = await prisma.visaRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VisaRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, VisaRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisaRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VisaRequest.
     * @param {VisaRequestUpsertArgs} args - Arguments to update or create a VisaRequest.
     * @example
     * // Update or create a VisaRequest
     * const visaRequest = await prisma.visaRequest.upsert({
     *   create: {
     *     // ... data to create a VisaRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VisaRequest we want to update
     *   }
     * })
     */
    upsert<T extends VisaRequestUpsertArgs>(args: SelectSubset<T, VisaRequestUpsertArgs<ExtArgs>>): Prisma__VisaRequestClient<$Result.GetResult<Prisma.$VisaRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VisaRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaRequestCountArgs} args - Arguments to filter VisaRequests to count.
     * @example
     * // Count the number of VisaRequests
     * const count = await prisma.visaRequest.count({
     *   where: {
     *     // ... the filter for the VisaRequests we want to count
     *   }
     * })
    **/
    count<T extends VisaRequestCountArgs>(
      args?: Subset<T, VisaRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisaRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VisaRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VisaRequestAggregateArgs>(args: Subset<T, VisaRequestAggregateArgs>): Prisma.PrismaPromise<GetVisaRequestAggregateType<T>>

    /**
     * Group by VisaRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaRequestGroupByArgs} args - Group by arguments.
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
      T extends VisaRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisaRequestGroupByArgs['orderBy'] }
        : { orderBy?: VisaRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VisaRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisaRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VisaRequest model
   */
  readonly fields: VisaRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VisaRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisaRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    country<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    requestContext<T extends VisaRequest$requestContextArgs<ExtArgs> = {}>(args?: Subset<T, VisaRequest$requestContextArgs<ExtArgs>>): Prisma__RequestContextClient<$Result.GetResult<Prisma.$RequestContextPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    applicants<T extends VisaRequest$applicantsArgs<ExtArgs> = {}>(args?: Subset<T, VisaRequest$applicantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisaApplicantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    statusHistory<T extends VisaRequest$statusHistoryArgs<ExtArgs> = {}>(args?: Subset<T, VisaRequest$statusHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusHistoryEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the VisaRequest model
   */
  interface VisaRequestFieldRefs {
    readonly id: FieldRef<"VisaRequest", 'String'>
    readonly referenceCode: FieldRef<"VisaRequest", 'String'>
    readonly fullName: FieldRef<"VisaRequest", 'String'>
    readonly email: FieldRef<"VisaRequest", 'String'>
    readonly phone: FieldRef<"VisaRequest", 'String'>
    readonly passportNumber: FieldRef<"VisaRequest", 'String'>
    readonly visaType: FieldRef<"VisaRequest", 'String'>
    readonly issuingCountry: FieldRef<"VisaRequest", 'String'>
    readonly passportExpiryDate: FieldRef<"VisaRequest", 'String'>
    readonly passportDocumentName: FieldRef<"VisaRequest", 'String'>
    readonly personalPhotoName: FieldRef<"VisaRequest", 'String'>
    readonly travelDate: FieldRef<"VisaRequest", 'String'>
    readonly status: FieldRef<"VisaRequest", 'VisaRequestStatus'>
    readonly createdAt: FieldRef<"VisaRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"VisaRequest", 'DateTime'>
    readonly countryId: FieldRef<"VisaRequest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VisaRequest findUnique
   */
  export type VisaRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaRequest
     */
    select?: VisaRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaRequest
     */
    omit?: VisaRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaRequestInclude<ExtArgs> | null
    /**
     * Filter, which VisaRequest to fetch.
     */
    where: VisaRequestWhereUniqueInput
  }

  /**
   * VisaRequest findUniqueOrThrow
   */
  export type VisaRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaRequest
     */
    select?: VisaRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaRequest
     */
    omit?: VisaRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaRequestInclude<ExtArgs> | null
    /**
     * Filter, which VisaRequest to fetch.
     */
    where: VisaRequestWhereUniqueInput
  }

  /**
   * VisaRequest findFirst
   */
  export type VisaRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaRequest
     */
    select?: VisaRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaRequest
     */
    omit?: VisaRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaRequestInclude<ExtArgs> | null
    /**
     * Filter, which VisaRequest to fetch.
     */
    where?: VisaRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisaRequests to fetch.
     */
    orderBy?: VisaRequestOrderByWithRelationInput | VisaRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisaRequests.
     */
    cursor?: VisaRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisaRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisaRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisaRequests.
     */
    distinct?: VisaRequestScalarFieldEnum | VisaRequestScalarFieldEnum[]
  }

  /**
   * VisaRequest findFirstOrThrow
   */
  export type VisaRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaRequest
     */
    select?: VisaRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaRequest
     */
    omit?: VisaRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaRequestInclude<ExtArgs> | null
    /**
     * Filter, which VisaRequest to fetch.
     */
    where?: VisaRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisaRequests to fetch.
     */
    orderBy?: VisaRequestOrderByWithRelationInput | VisaRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisaRequests.
     */
    cursor?: VisaRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisaRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisaRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisaRequests.
     */
    distinct?: VisaRequestScalarFieldEnum | VisaRequestScalarFieldEnum[]
  }

  /**
   * VisaRequest findMany
   */
  export type VisaRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaRequest
     */
    select?: VisaRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaRequest
     */
    omit?: VisaRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaRequestInclude<ExtArgs> | null
    /**
     * Filter, which VisaRequests to fetch.
     */
    where?: VisaRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisaRequests to fetch.
     */
    orderBy?: VisaRequestOrderByWithRelationInput | VisaRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VisaRequests.
     */
    cursor?: VisaRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisaRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisaRequests.
     */
    skip?: number
    distinct?: VisaRequestScalarFieldEnum | VisaRequestScalarFieldEnum[]
  }

  /**
   * VisaRequest create
   */
  export type VisaRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaRequest
     */
    select?: VisaRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaRequest
     */
    omit?: VisaRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a VisaRequest.
     */
    data: XOR<VisaRequestCreateInput, VisaRequestUncheckedCreateInput>
  }

  /**
   * VisaRequest createMany
   */
  export type VisaRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VisaRequests.
     */
    data: VisaRequestCreateManyInput | VisaRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VisaRequest createManyAndReturn
   */
  export type VisaRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaRequest
     */
    select?: VisaRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VisaRequest
     */
    omit?: VisaRequestOmit<ExtArgs> | null
    /**
     * The data used to create many VisaRequests.
     */
    data: VisaRequestCreateManyInput | VisaRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VisaRequest update
   */
  export type VisaRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaRequest
     */
    select?: VisaRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaRequest
     */
    omit?: VisaRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a VisaRequest.
     */
    data: XOR<VisaRequestUpdateInput, VisaRequestUncheckedUpdateInput>
    /**
     * Choose, which VisaRequest to update.
     */
    where: VisaRequestWhereUniqueInput
  }

  /**
   * VisaRequest updateMany
   */
  export type VisaRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VisaRequests.
     */
    data: XOR<VisaRequestUpdateManyMutationInput, VisaRequestUncheckedUpdateManyInput>
    /**
     * Filter which VisaRequests to update
     */
    where?: VisaRequestWhereInput
    /**
     * Limit how many VisaRequests to update.
     */
    limit?: number
  }

  /**
   * VisaRequest updateManyAndReturn
   */
  export type VisaRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaRequest
     */
    select?: VisaRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VisaRequest
     */
    omit?: VisaRequestOmit<ExtArgs> | null
    /**
     * The data used to update VisaRequests.
     */
    data: XOR<VisaRequestUpdateManyMutationInput, VisaRequestUncheckedUpdateManyInput>
    /**
     * Filter which VisaRequests to update
     */
    where?: VisaRequestWhereInput
    /**
     * Limit how many VisaRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VisaRequest upsert
   */
  export type VisaRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaRequest
     */
    select?: VisaRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaRequest
     */
    omit?: VisaRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the VisaRequest to update in case it exists.
     */
    where: VisaRequestWhereUniqueInput
    /**
     * In case the VisaRequest found by the `where` argument doesn't exist, create a new VisaRequest with this data.
     */
    create: XOR<VisaRequestCreateInput, VisaRequestUncheckedCreateInput>
    /**
     * In case the VisaRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisaRequestUpdateInput, VisaRequestUncheckedUpdateInput>
  }

  /**
   * VisaRequest delete
   */
  export type VisaRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaRequest
     */
    select?: VisaRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaRequest
     */
    omit?: VisaRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaRequestInclude<ExtArgs> | null
    /**
     * Filter which VisaRequest to delete.
     */
    where: VisaRequestWhereUniqueInput
  }

  /**
   * VisaRequest deleteMany
   */
  export type VisaRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisaRequests to delete
     */
    where?: VisaRequestWhereInput
    /**
     * Limit how many VisaRequests to delete.
     */
    limit?: number
  }

  /**
   * VisaRequest.requestContext
   */
  export type VisaRequest$requestContextArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestContext
     */
    select?: RequestContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestContext
     */
    omit?: RequestContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestContextInclude<ExtArgs> | null
    where?: RequestContextWhereInput
  }

  /**
   * VisaRequest.applicants
   */
  export type VisaRequest$applicantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaApplicant
     */
    select?: VisaApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaApplicant
     */
    omit?: VisaApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaApplicantInclude<ExtArgs> | null
    where?: VisaApplicantWhereInput
    orderBy?: VisaApplicantOrderByWithRelationInput | VisaApplicantOrderByWithRelationInput[]
    cursor?: VisaApplicantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisaApplicantScalarFieldEnum | VisaApplicantScalarFieldEnum[]
  }

  /**
   * VisaRequest.statusHistory
   */
  export type VisaRequest$statusHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistoryEvent
     */
    select?: StatusHistoryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusHistoryEvent
     */
    omit?: StatusHistoryEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryEventInclude<ExtArgs> | null
    where?: StatusHistoryEventWhereInput
    orderBy?: StatusHistoryEventOrderByWithRelationInput | StatusHistoryEventOrderByWithRelationInput[]
    cursor?: StatusHistoryEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StatusHistoryEventScalarFieldEnum | StatusHistoryEventScalarFieldEnum[]
  }

  /**
   * VisaRequest without action
   */
  export type VisaRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaRequest
     */
    select?: VisaRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaRequest
     */
    omit?: VisaRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaRequestInclude<ExtArgs> | null
  }


  /**
   * Model VisaApplicant
   */

  export type AggregateVisaApplicant = {
    _count: VisaApplicantCountAggregateOutputType | null
    _min: VisaApplicantMinAggregateOutputType | null
    _max: VisaApplicantMaxAggregateOutputType | null
  }

  export type VisaApplicantMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    nationality: string | null
    passportNumber: string | null
    issuingCountry: string | null
    passportIssueDate: string | null
    passportExpiryDate: string | null
    passportDocumentName: string | null
    personalPhotoName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    requestId: string | null
  }

  export type VisaApplicantMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    nationality: string | null
    passportNumber: string | null
    issuingCountry: string | null
    passportIssueDate: string | null
    passportExpiryDate: string | null
    passportDocumentName: string | null
    personalPhotoName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    requestId: string | null
  }

  export type VisaApplicantCountAggregateOutputType = {
    id: number
    fullName: number
    nationality: number
    passportNumber: number
    issuingCountry: number
    passportIssueDate: number
    passportExpiryDate: number
    passportDocumentName: number
    personalPhotoName: number
    createdAt: number
    updatedAt: number
    requestId: number
    _all: number
  }


  export type VisaApplicantMinAggregateInputType = {
    id?: true
    fullName?: true
    nationality?: true
    passportNumber?: true
    issuingCountry?: true
    passportIssueDate?: true
    passportExpiryDate?: true
    passportDocumentName?: true
    personalPhotoName?: true
    createdAt?: true
    updatedAt?: true
    requestId?: true
  }

  export type VisaApplicantMaxAggregateInputType = {
    id?: true
    fullName?: true
    nationality?: true
    passportNumber?: true
    issuingCountry?: true
    passportIssueDate?: true
    passportExpiryDate?: true
    passportDocumentName?: true
    personalPhotoName?: true
    createdAt?: true
    updatedAt?: true
    requestId?: true
  }

  export type VisaApplicantCountAggregateInputType = {
    id?: true
    fullName?: true
    nationality?: true
    passportNumber?: true
    issuingCountry?: true
    passportIssueDate?: true
    passportExpiryDate?: true
    passportDocumentName?: true
    personalPhotoName?: true
    createdAt?: true
    updatedAt?: true
    requestId?: true
    _all?: true
  }

  export type VisaApplicantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisaApplicant to aggregate.
     */
    where?: VisaApplicantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisaApplicants to fetch.
     */
    orderBy?: VisaApplicantOrderByWithRelationInput | VisaApplicantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisaApplicantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisaApplicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisaApplicants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VisaApplicants
    **/
    _count?: true | VisaApplicantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisaApplicantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisaApplicantMaxAggregateInputType
  }

  export type GetVisaApplicantAggregateType<T extends VisaApplicantAggregateArgs> = {
        [P in keyof T & keyof AggregateVisaApplicant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisaApplicant[P]>
      : GetScalarType<T[P], AggregateVisaApplicant[P]>
  }




  export type VisaApplicantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisaApplicantWhereInput
    orderBy?: VisaApplicantOrderByWithAggregationInput | VisaApplicantOrderByWithAggregationInput[]
    by: VisaApplicantScalarFieldEnum[] | VisaApplicantScalarFieldEnum
    having?: VisaApplicantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisaApplicantCountAggregateInputType | true
    _min?: VisaApplicantMinAggregateInputType
    _max?: VisaApplicantMaxAggregateInputType
  }

  export type VisaApplicantGroupByOutputType = {
    id: string
    fullName: string
    nationality: string
    passportNumber: string
    issuingCountry: string
    passportIssueDate: string
    passportExpiryDate: string
    passportDocumentName: string
    personalPhotoName: string
    createdAt: Date
    updatedAt: Date
    requestId: string
    _count: VisaApplicantCountAggregateOutputType | null
    _min: VisaApplicantMinAggregateOutputType | null
    _max: VisaApplicantMaxAggregateOutputType | null
  }

  type GetVisaApplicantGroupByPayload<T extends VisaApplicantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisaApplicantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisaApplicantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisaApplicantGroupByOutputType[P]>
            : GetScalarType<T[P], VisaApplicantGroupByOutputType[P]>
        }
      >
    >


  export type VisaApplicantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    nationality?: boolean
    passportNumber?: boolean
    issuingCountry?: boolean
    passportIssueDate?: boolean
    passportExpiryDate?: boolean
    passportDocumentName?: boolean
    personalPhotoName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requestId?: boolean
    request?: boolean | VisaRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visaApplicant"]>

  export type VisaApplicantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    nationality?: boolean
    passportNumber?: boolean
    issuingCountry?: boolean
    passportIssueDate?: boolean
    passportExpiryDate?: boolean
    passportDocumentName?: boolean
    personalPhotoName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requestId?: boolean
    request?: boolean | VisaRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visaApplicant"]>

  export type VisaApplicantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    nationality?: boolean
    passportNumber?: boolean
    issuingCountry?: boolean
    passportIssueDate?: boolean
    passportExpiryDate?: boolean
    passportDocumentName?: boolean
    personalPhotoName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requestId?: boolean
    request?: boolean | VisaRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visaApplicant"]>

  export type VisaApplicantSelectScalar = {
    id?: boolean
    fullName?: boolean
    nationality?: boolean
    passportNumber?: boolean
    issuingCountry?: boolean
    passportIssueDate?: boolean
    passportExpiryDate?: boolean
    passportDocumentName?: boolean
    personalPhotoName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requestId?: boolean
  }

  export type VisaApplicantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "nationality" | "passportNumber" | "issuingCountry" | "passportIssueDate" | "passportExpiryDate" | "passportDocumentName" | "personalPhotoName" | "createdAt" | "updatedAt" | "requestId", ExtArgs["result"]["visaApplicant"]>
  export type VisaApplicantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | VisaRequestDefaultArgs<ExtArgs>
  }
  export type VisaApplicantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | VisaRequestDefaultArgs<ExtArgs>
  }
  export type VisaApplicantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | VisaRequestDefaultArgs<ExtArgs>
  }

  export type $VisaApplicantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VisaApplicant"
    objects: {
      request: Prisma.$VisaRequestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      nationality: string
      passportNumber: string
      issuingCountry: string
      passportIssueDate: string
      passportExpiryDate: string
      passportDocumentName: string
      personalPhotoName: string
      createdAt: Date
      updatedAt: Date
      requestId: string
    }, ExtArgs["result"]["visaApplicant"]>
    composites: {}
  }

  type VisaApplicantGetPayload<S extends boolean | null | undefined | VisaApplicantDefaultArgs> = $Result.GetResult<Prisma.$VisaApplicantPayload, S>

  type VisaApplicantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisaApplicantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisaApplicantCountAggregateInputType | true
    }

  export interface VisaApplicantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VisaApplicant'], meta: { name: 'VisaApplicant' } }
    /**
     * Find zero or one VisaApplicant that matches the filter.
     * @param {VisaApplicantFindUniqueArgs} args - Arguments to find a VisaApplicant
     * @example
     * // Get one VisaApplicant
     * const visaApplicant = await prisma.visaApplicant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisaApplicantFindUniqueArgs>(args: SelectSubset<T, VisaApplicantFindUniqueArgs<ExtArgs>>): Prisma__VisaApplicantClient<$Result.GetResult<Prisma.$VisaApplicantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VisaApplicant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisaApplicantFindUniqueOrThrowArgs} args - Arguments to find a VisaApplicant
     * @example
     * // Get one VisaApplicant
     * const visaApplicant = await prisma.visaApplicant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisaApplicantFindUniqueOrThrowArgs>(args: SelectSubset<T, VisaApplicantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisaApplicantClient<$Result.GetResult<Prisma.$VisaApplicantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisaApplicant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaApplicantFindFirstArgs} args - Arguments to find a VisaApplicant
     * @example
     * // Get one VisaApplicant
     * const visaApplicant = await prisma.visaApplicant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisaApplicantFindFirstArgs>(args?: SelectSubset<T, VisaApplicantFindFirstArgs<ExtArgs>>): Prisma__VisaApplicantClient<$Result.GetResult<Prisma.$VisaApplicantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisaApplicant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaApplicantFindFirstOrThrowArgs} args - Arguments to find a VisaApplicant
     * @example
     * // Get one VisaApplicant
     * const visaApplicant = await prisma.visaApplicant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisaApplicantFindFirstOrThrowArgs>(args?: SelectSubset<T, VisaApplicantFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisaApplicantClient<$Result.GetResult<Prisma.$VisaApplicantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VisaApplicants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaApplicantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VisaApplicants
     * const visaApplicants = await prisma.visaApplicant.findMany()
     * 
     * // Get first 10 VisaApplicants
     * const visaApplicants = await prisma.visaApplicant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visaApplicantWithIdOnly = await prisma.visaApplicant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisaApplicantFindManyArgs>(args?: SelectSubset<T, VisaApplicantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisaApplicantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VisaApplicant.
     * @param {VisaApplicantCreateArgs} args - Arguments to create a VisaApplicant.
     * @example
     * // Create one VisaApplicant
     * const VisaApplicant = await prisma.visaApplicant.create({
     *   data: {
     *     // ... data to create a VisaApplicant
     *   }
     * })
     * 
     */
    create<T extends VisaApplicantCreateArgs>(args: SelectSubset<T, VisaApplicantCreateArgs<ExtArgs>>): Prisma__VisaApplicantClient<$Result.GetResult<Prisma.$VisaApplicantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VisaApplicants.
     * @param {VisaApplicantCreateManyArgs} args - Arguments to create many VisaApplicants.
     * @example
     * // Create many VisaApplicants
     * const visaApplicant = await prisma.visaApplicant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisaApplicantCreateManyArgs>(args?: SelectSubset<T, VisaApplicantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VisaApplicants and returns the data saved in the database.
     * @param {VisaApplicantCreateManyAndReturnArgs} args - Arguments to create many VisaApplicants.
     * @example
     * // Create many VisaApplicants
     * const visaApplicant = await prisma.visaApplicant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VisaApplicants and only return the `id`
     * const visaApplicantWithIdOnly = await prisma.visaApplicant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VisaApplicantCreateManyAndReturnArgs>(args?: SelectSubset<T, VisaApplicantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisaApplicantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VisaApplicant.
     * @param {VisaApplicantDeleteArgs} args - Arguments to delete one VisaApplicant.
     * @example
     * // Delete one VisaApplicant
     * const VisaApplicant = await prisma.visaApplicant.delete({
     *   where: {
     *     // ... filter to delete one VisaApplicant
     *   }
     * })
     * 
     */
    delete<T extends VisaApplicantDeleteArgs>(args: SelectSubset<T, VisaApplicantDeleteArgs<ExtArgs>>): Prisma__VisaApplicantClient<$Result.GetResult<Prisma.$VisaApplicantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VisaApplicant.
     * @param {VisaApplicantUpdateArgs} args - Arguments to update one VisaApplicant.
     * @example
     * // Update one VisaApplicant
     * const visaApplicant = await prisma.visaApplicant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisaApplicantUpdateArgs>(args: SelectSubset<T, VisaApplicantUpdateArgs<ExtArgs>>): Prisma__VisaApplicantClient<$Result.GetResult<Prisma.$VisaApplicantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VisaApplicants.
     * @param {VisaApplicantDeleteManyArgs} args - Arguments to filter VisaApplicants to delete.
     * @example
     * // Delete a few VisaApplicants
     * const { count } = await prisma.visaApplicant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisaApplicantDeleteManyArgs>(args?: SelectSubset<T, VisaApplicantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisaApplicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaApplicantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VisaApplicants
     * const visaApplicant = await prisma.visaApplicant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisaApplicantUpdateManyArgs>(args: SelectSubset<T, VisaApplicantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisaApplicants and returns the data updated in the database.
     * @param {VisaApplicantUpdateManyAndReturnArgs} args - Arguments to update many VisaApplicants.
     * @example
     * // Update many VisaApplicants
     * const visaApplicant = await prisma.visaApplicant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VisaApplicants and only return the `id`
     * const visaApplicantWithIdOnly = await prisma.visaApplicant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VisaApplicantUpdateManyAndReturnArgs>(args: SelectSubset<T, VisaApplicantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisaApplicantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VisaApplicant.
     * @param {VisaApplicantUpsertArgs} args - Arguments to update or create a VisaApplicant.
     * @example
     * // Update or create a VisaApplicant
     * const visaApplicant = await prisma.visaApplicant.upsert({
     *   create: {
     *     // ... data to create a VisaApplicant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VisaApplicant we want to update
     *   }
     * })
     */
    upsert<T extends VisaApplicantUpsertArgs>(args: SelectSubset<T, VisaApplicantUpsertArgs<ExtArgs>>): Prisma__VisaApplicantClient<$Result.GetResult<Prisma.$VisaApplicantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VisaApplicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaApplicantCountArgs} args - Arguments to filter VisaApplicants to count.
     * @example
     * // Count the number of VisaApplicants
     * const count = await prisma.visaApplicant.count({
     *   where: {
     *     // ... the filter for the VisaApplicants we want to count
     *   }
     * })
    **/
    count<T extends VisaApplicantCountArgs>(
      args?: Subset<T, VisaApplicantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisaApplicantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VisaApplicant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaApplicantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VisaApplicantAggregateArgs>(args: Subset<T, VisaApplicantAggregateArgs>): Prisma.PrismaPromise<GetVisaApplicantAggregateType<T>>

    /**
     * Group by VisaApplicant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaApplicantGroupByArgs} args - Group by arguments.
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
      T extends VisaApplicantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisaApplicantGroupByArgs['orderBy'] }
        : { orderBy?: VisaApplicantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VisaApplicantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisaApplicantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VisaApplicant model
   */
  readonly fields: VisaApplicantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VisaApplicant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisaApplicantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    request<T extends VisaRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VisaRequestDefaultArgs<ExtArgs>>): Prisma__VisaRequestClient<$Result.GetResult<Prisma.$VisaRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VisaApplicant model
   */
  interface VisaApplicantFieldRefs {
    readonly id: FieldRef<"VisaApplicant", 'String'>
    readonly fullName: FieldRef<"VisaApplicant", 'String'>
    readonly nationality: FieldRef<"VisaApplicant", 'String'>
    readonly passportNumber: FieldRef<"VisaApplicant", 'String'>
    readonly issuingCountry: FieldRef<"VisaApplicant", 'String'>
    readonly passportIssueDate: FieldRef<"VisaApplicant", 'String'>
    readonly passportExpiryDate: FieldRef<"VisaApplicant", 'String'>
    readonly passportDocumentName: FieldRef<"VisaApplicant", 'String'>
    readonly personalPhotoName: FieldRef<"VisaApplicant", 'String'>
    readonly createdAt: FieldRef<"VisaApplicant", 'DateTime'>
    readonly updatedAt: FieldRef<"VisaApplicant", 'DateTime'>
    readonly requestId: FieldRef<"VisaApplicant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VisaApplicant findUnique
   */
  export type VisaApplicantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaApplicant
     */
    select?: VisaApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaApplicant
     */
    omit?: VisaApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaApplicantInclude<ExtArgs> | null
    /**
     * Filter, which VisaApplicant to fetch.
     */
    where: VisaApplicantWhereUniqueInput
  }

  /**
   * VisaApplicant findUniqueOrThrow
   */
  export type VisaApplicantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaApplicant
     */
    select?: VisaApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaApplicant
     */
    omit?: VisaApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaApplicantInclude<ExtArgs> | null
    /**
     * Filter, which VisaApplicant to fetch.
     */
    where: VisaApplicantWhereUniqueInput
  }

  /**
   * VisaApplicant findFirst
   */
  export type VisaApplicantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaApplicant
     */
    select?: VisaApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaApplicant
     */
    omit?: VisaApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaApplicantInclude<ExtArgs> | null
    /**
     * Filter, which VisaApplicant to fetch.
     */
    where?: VisaApplicantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisaApplicants to fetch.
     */
    orderBy?: VisaApplicantOrderByWithRelationInput | VisaApplicantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisaApplicants.
     */
    cursor?: VisaApplicantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisaApplicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisaApplicants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisaApplicants.
     */
    distinct?: VisaApplicantScalarFieldEnum | VisaApplicantScalarFieldEnum[]
  }

  /**
   * VisaApplicant findFirstOrThrow
   */
  export type VisaApplicantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaApplicant
     */
    select?: VisaApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaApplicant
     */
    omit?: VisaApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaApplicantInclude<ExtArgs> | null
    /**
     * Filter, which VisaApplicant to fetch.
     */
    where?: VisaApplicantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisaApplicants to fetch.
     */
    orderBy?: VisaApplicantOrderByWithRelationInput | VisaApplicantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisaApplicants.
     */
    cursor?: VisaApplicantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisaApplicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisaApplicants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisaApplicants.
     */
    distinct?: VisaApplicantScalarFieldEnum | VisaApplicantScalarFieldEnum[]
  }

  /**
   * VisaApplicant findMany
   */
  export type VisaApplicantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaApplicant
     */
    select?: VisaApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaApplicant
     */
    omit?: VisaApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaApplicantInclude<ExtArgs> | null
    /**
     * Filter, which VisaApplicants to fetch.
     */
    where?: VisaApplicantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisaApplicants to fetch.
     */
    orderBy?: VisaApplicantOrderByWithRelationInput | VisaApplicantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VisaApplicants.
     */
    cursor?: VisaApplicantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisaApplicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisaApplicants.
     */
    skip?: number
    distinct?: VisaApplicantScalarFieldEnum | VisaApplicantScalarFieldEnum[]
  }

  /**
   * VisaApplicant create
   */
  export type VisaApplicantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaApplicant
     */
    select?: VisaApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaApplicant
     */
    omit?: VisaApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaApplicantInclude<ExtArgs> | null
    /**
     * The data needed to create a VisaApplicant.
     */
    data: XOR<VisaApplicantCreateInput, VisaApplicantUncheckedCreateInput>
  }

  /**
   * VisaApplicant createMany
   */
  export type VisaApplicantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VisaApplicants.
     */
    data: VisaApplicantCreateManyInput | VisaApplicantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VisaApplicant createManyAndReturn
   */
  export type VisaApplicantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaApplicant
     */
    select?: VisaApplicantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VisaApplicant
     */
    omit?: VisaApplicantOmit<ExtArgs> | null
    /**
     * The data used to create many VisaApplicants.
     */
    data: VisaApplicantCreateManyInput | VisaApplicantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaApplicantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VisaApplicant update
   */
  export type VisaApplicantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaApplicant
     */
    select?: VisaApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaApplicant
     */
    omit?: VisaApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaApplicantInclude<ExtArgs> | null
    /**
     * The data needed to update a VisaApplicant.
     */
    data: XOR<VisaApplicantUpdateInput, VisaApplicantUncheckedUpdateInput>
    /**
     * Choose, which VisaApplicant to update.
     */
    where: VisaApplicantWhereUniqueInput
  }

  /**
   * VisaApplicant updateMany
   */
  export type VisaApplicantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VisaApplicants.
     */
    data: XOR<VisaApplicantUpdateManyMutationInput, VisaApplicantUncheckedUpdateManyInput>
    /**
     * Filter which VisaApplicants to update
     */
    where?: VisaApplicantWhereInput
    /**
     * Limit how many VisaApplicants to update.
     */
    limit?: number
  }

  /**
   * VisaApplicant updateManyAndReturn
   */
  export type VisaApplicantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaApplicant
     */
    select?: VisaApplicantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VisaApplicant
     */
    omit?: VisaApplicantOmit<ExtArgs> | null
    /**
     * The data used to update VisaApplicants.
     */
    data: XOR<VisaApplicantUpdateManyMutationInput, VisaApplicantUncheckedUpdateManyInput>
    /**
     * Filter which VisaApplicants to update
     */
    where?: VisaApplicantWhereInput
    /**
     * Limit how many VisaApplicants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaApplicantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VisaApplicant upsert
   */
  export type VisaApplicantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaApplicant
     */
    select?: VisaApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaApplicant
     */
    omit?: VisaApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaApplicantInclude<ExtArgs> | null
    /**
     * The filter to search for the VisaApplicant to update in case it exists.
     */
    where: VisaApplicantWhereUniqueInput
    /**
     * In case the VisaApplicant found by the `where` argument doesn't exist, create a new VisaApplicant with this data.
     */
    create: XOR<VisaApplicantCreateInput, VisaApplicantUncheckedCreateInput>
    /**
     * In case the VisaApplicant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisaApplicantUpdateInput, VisaApplicantUncheckedUpdateInput>
  }

  /**
   * VisaApplicant delete
   */
  export type VisaApplicantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaApplicant
     */
    select?: VisaApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaApplicant
     */
    omit?: VisaApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaApplicantInclude<ExtArgs> | null
    /**
     * Filter which VisaApplicant to delete.
     */
    where: VisaApplicantWhereUniqueInput
  }

  /**
   * VisaApplicant deleteMany
   */
  export type VisaApplicantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisaApplicants to delete
     */
    where?: VisaApplicantWhereInput
    /**
     * Limit how many VisaApplicants to delete.
     */
    limit?: number
  }

  /**
   * VisaApplicant without action
   */
  export type VisaApplicantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaApplicant
     */
    select?: VisaApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaApplicant
     */
    omit?: VisaApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaApplicantInclude<ExtArgs> | null
  }


  /**
   * Model RequestContext
   */

  export type AggregateRequestContext = {
    _count: RequestContextCountAggregateOutputType | null
    _min: RequestContextMinAggregateOutputType | null
    _max: RequestContextMaxAggregateOutputType | null
  }

  export type RequestContextMinAggregateOutputType = {
    id: string | null
    channel: string | null
    userAgent: string | null
    deviceType: string | null
    browser: string | null
    operatingSystem: string | null
    createdAt: Date | null
    updatedAt: Date | null
    requestId: string | null
  }

  export type RequestContextMaxAggregateOutputType = {
    id: string | null
    channel: string | null
    userAgent: string | null
    deviceType: string | null
    browser: string | null
    operatingSystem: string | null
    createdAt: Date | null
    updatedAt: Date | null
    requestId: string | null
  }

  export type RequestContextCountAggregateOutputType = {
    id: number
    channel: number
    userAgent: number
    deviceType: number
    browser: number
    operatingSystem: number
    createdAt: number
    updatedAt: number
    requestId: number
    _all: number
  }


  export type RequestContextMinAggregateInputType = {
    id?: true
    channel?: true
    userAgent?: true
    deviceType?: true
    browser?: true
    operatingSystem?: true
    createdAt?: true
    updatedAt?: true
    requestId?: true
  }

  export type RequestContextMaxAggregateInputType = {
    id?: true
    channel?: true
    userAgent?: true
    deviceType?: true
    browser?: true
    operatingSystem?: true
    createdAt?: true
    updatedAt?: true
    requestId?: true
  }

  export type RequestContextCountAggregateInputType = {
    id?: true
    channel?: true
    userAgent?: true
    deviceType?: true
    browser?: true
    operatingSystem?: true
    createdAt?: true
    updatedAt?: true
    requestId?: true
    _all?: true
  }

  export type RequestContextAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestContext to aggregate.
     */
    where?: RequestContextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestContexts to fetch.
     */
    orderBy?: RequestContextOrderByWithRelationInput | RequestContextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestContextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestContexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestContexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RequestContexts
    **/
    _count?: true | RequestContextCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestContextMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestContextMaxAggregateInputType
  }

  export type GetRequestContextAggregateType<T extends RequestContextAggregateArgs> = {
        [P in keyof T & keyof AggregateRequestContext]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequestContext[P]>
      : GetScalarType<T[P], AggregateRequestContext[P]>
  }




  export type RequestContextGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestContextWhereInput
    orderBy?: RequestContextOrderByWithAggregationInput | RequestContextOrderByWithAggregationInput[]
    by: RequestContextScalarFieldEnum[] | RequestContextScalarFieldEnum
    having?: RequestContextScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestContextCountAggregateInputType | true
    _min?: RequestContextMinAggregateInputType
    _max?: RequestContextMaxAggregateInputType
  }

  export type RequestContextGroupByOutputType = {
    id: string
    channel: string | null
    userAgent: string | null
    deviceType: string | null
    browser: string | null
    operatingSystem: string | null
    createdAt: Date
    updatedAt: Date
    requestId: string
    _count: RequestContextCountAggregateOutputType | null
    _min: RequestContextMinAggregateOutputType | null
    _max: RequestContextMaxAggregateOutputType | null
  }

  type GetRequestContextGroupByPayload<T extends RequestContextGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestContextGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestContextGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestContextGroupByOutputType[P]>
            : GetScalarType<T[P], RequestContextGroupByOutputType[P]>
        }
      >
    >


  export type RequestContextSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channel?: boolean
    userAgent?: boolean
    deviceType?: boolean
    browser?: boolean
    operatingSystem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requestId?: boolean
    request?: boolean | VisaRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requestContext"]>

  export type RequestContextSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channel?: boolean
    userAgent?: boolean
    deviceType?: boolean
    browser?: boolean
    operatingSystem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requestId?: boolean
    request?: boolean | VisaRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requestContext"]>

  export type RequestContextSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channel?: boolean
    userAgent?: boolean
    deviceType?: boolean
    browser?: boolean
    operatingSystem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requestId?: boolean
    request?: boolean | VisaRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requestContext"]>

  export type RequestContextSelectScalar = {
    id?: boolean
    channel?: boolean
    userAgent?: boolean
    deviceType?: boolean
    browser?: boolean
    operatingSystem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requestId?: boolean
  }

  export type RequestContextOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "channel" | "userAgent" | "deviceType" | "browser" | "operatingSystem" | "createdAt" | "updatedAt" | "requestId", ExtArgs["result"]["requestContext"]>
  export type RequestContextInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | VisaRequestDefaultArgs<ExtArgs>
  }
  export type RequestContextIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | VisaRequestDefaultArgs<ExtArgs>
  }
  export type RequestContextIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | VisaRequestDefaultArgs<ExtArgs>
  }

  export type $RequestContextPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RequestContext"
    objects: {
      request: Prisma.$VisaRequestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      channel: string | null
      userAgent: string | null
      deviceType: string | null
      browser: string | null
      operatingSystem: string | null
      createdAt: Date
      updatedAt: Date
      requestId: string
    }, ExtArgs["result"]["requestContext"]>
    composites: {}
  }

  type RequestContextGetPayload<S extends boolean | null | undefined | RequestContextDefaultArgs> = $Result.GetResult<Prisma.$RequestContextPayload, S>

  type RequestContextCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequestContextFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequestContextCountAggregateInputType | true
    }

  export interface RequestContextDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RequestContext'], meta: { name: 'RequestContext' } }
    /**
     * Find zero or one RequestContext that matches the filter.
     * @param {RequestContextFindUniqueArgs} args - Arguments to find a RequestContext
     * @example
     * // Get one RequestContext
     * const requestContext = await prisma.requestContext.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequestContextFindUniqueArgs>(args: SelectSubset<T, RequestContextFindUniqueArgs<ExtArgs>>): Prisma__RequestContextClient<$Result.GetResult<Prisma.$RequestContextPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RequestContext that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequestContextFindUniqueOrThrowArgs} args - Arguments to find a RequestContext
     * @example
     * // Get one RequestContext
     * const requestContext = await prisma.requestContext.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequestContextFindUniqueOrThrowArgs>(args: SelectSubset<T, RequestContextFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequestContextClient<$Result.GetResult<Prisma.$RequestContextPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequestContext that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestContextFindFirstArgs} args - Arguments to find a RequestContext
     * @example
     * // Get one RequestContext
     * const requestContext = await prisma.requestContext.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequestContextFindFirstArgs>(args?: SelectSubset<T, RequestContextFindFirstArgs<ExtArgs>>): Prisma__RequestContextClient<$Result.GetResult<Prisma.$RequestContextPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequestContext that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestContextFindFirstOrThrowArgs} args - Arguments to find a RequestContext
     * @example
     * // Get one RequestContext
     * const requestContext = await prisma.requestContext.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequestContextFindFirstOrThrowArgs>(args?: SelectSubset<T, RequestContextFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequestContextClient<$Result.GetResult<Prisma.$RequestContextPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RequestContexts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestContextFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RequestContexts
     * const requestContexts = await prisma.requestContext.findMany()
     * 
     * // Get first 10 RequestContexts
     * const requestContexts = await prisma.requestContext.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestContextWithIdOnly = await prisma.requestContext.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequestContextFindManyArgs>(args?: SelectSubset<T, RequestContextFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestContextPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RequestContext.
     * @param {RequestContextCreateArgs} args - Arguments to create a RequestContext.
     * @example
     * // Create one RequestContext
     * const RequestContext = await prisma.requestContext.create({
     *   data: {
     *     // ... data to create a RequestContext
     *   }
     * })
     * 
     */
    create<T extends RequestContextCreateArgs>(args: SelectSubset<T, RequestContextCreateArgs<ExtArgs>>): Prisma__RequestContextClient<$Result.GetResult<Prisma.$RequestContextPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RequestContexts.
     * @param {RequestContextCreateManyArgs} args - Arguments to create many RequestContexts.
     * @example
     * // Create many RequestContexts
     * const requestContext = await prisma.requestContext.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequestContextCreateManyArgs>(args?: SelectSubset<T, RequestContextCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RequestContexts and returns the data saved in the database.
     * @param {RequestContextCreateManyAndReturnArgs} args - Arguments to create many RequestContexts.
     * @example
     * // Create many RequestContexts
     * const requestContext = await prisma.requestContext.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RequestContexts and only return the `id`
     * const requestContextWithIdOnly = await prisma.requestContext.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequestContextCreateManyAndReturnArgs>(args?: SelectSubset<T, RequestContextCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestContextPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RequestContext.
     * @param {RequestContextDeleteArgs} args - Arguments to delete one RequestContext.
     * @example
     * // Delete one RequestContext
     * const RequestContext = await prisma.requestContext.delete({
     *   where: {
     *     // ... filter to delete one RequestContext
     *   }
     * })
     * 
     */
    delete<T extends RequestContextDeleteArgs>(args: SelectSubset<T, RequestContextDeleteArgs<ExtArgs>>): Prisma__RequestContextClient<$Result.GetResult<Prisma.$RequestContextPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RequestContext.
     * @param {RequestContextUpdateArgs} args - Arguments to update one RequestContext.
     * @example
     * // Update one RequestContext
     * const requestContext = await prisma.requestContext.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequestContextUpdateArgs>(args: SelectSubset<T, RequestContextUpdateArgs<ExtArgs>>): Prisma__RequestContextClient<$Result.GetResult<Prisma.$RequestContextPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RequestContexts.
     * @param {RequestContextDeleteManyArgs} args - Arguments to filter RequestContexts to delete.
     * @example
     * // Delete a few RequestContexts
     * const { count } = await prisma.requestContext.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequestContextDeleteManyArgs>(args?: SelectSubset<T, RequestContextDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestContexts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestContextUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RequestContexts
     * const requestContext = await prisma.requestContext.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequestContextUpdateManyArgs>(args: SelectSubset<T, RequestContextUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestContexts and returns the data updated in the database.
     * @param {RequestContextUpdateManyAndReturnArgs} args - Arguments to update many RequestContexts.
     * @example
     * // Update many RequestContexts
     * const requestContext = await prisma.requestContext.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RequestContexts and only return the `id`
     * const requestContextWithIdOnly = await prisma.requestContext.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RequestContextUpdateManyAndReturnArgs>(args: SelectSubset<T, RequestContextUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestContextPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RequestContext.
     * @param {RequestContextUpsertArgs} args - Arguments to update or create a RequestContext.
     * @example
     * // Update or create a RequestContext
     * const requestContext = await prisma.requestContext.upsert({
     *   create: {
     *     // ... data to create a RequestContext
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RequestContext we want to update
     *   }
     * })
     */
    upsert<T extends RequestContextUpsertArgs>(args: SelectSubset<T, RequestContextUpsertArgs<ExtArgs>>): Prisma__RequestContextClient<$Result.GetResult<Prisma.$RequestContextPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RequestContexts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestContextCountArgs} args - Arguments to filter RequestContexts to count.
     * @example
     * // Count the number of RequestContexts
     * const count = await prisma.requestContext.count({
     *   where: {
     *     // ... the filter for the RequestContexts we want to count
     *   }
     * })
    **/
    count<T extends RequestContextCountArgs>(
      args?: Subset<T, RequestContextCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestContextCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RequestContext.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestContextAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RequestContextAggregateArgs>(args: Subset<T, RequestContextAggregateArgs>): Prisma.PrismaPromise<GetRequestContextAggregateType<T>>

    /**
     * Group by RequestContext.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestContextGroupByArgs} args - Group by arguments.
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
      T extends RequestContextGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestContextGroupByArgs['orderBy'] }
        : { orderBy?: RequestContextGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RequestContextGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestContextGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RequestContext model
   */
  readonly fields: RequestContextFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RequestContext.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestContextClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    request<T extends VisaRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VisaRequestDefaultArgs<ExtArgs>>): Prisma__VisaRequestClient<$Result.GetResult<Prisma.$VisaRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RequestContext model
   */
  interface RequestContextFieldRefs {
    readonly id: FieldRef<"RequestContext", 'String'>
    readonly channel: FieldRef<"RequestContext", 'String'>
    readonly userAgent: FieldRef<"RequestContext", 'String'>
    readonly deviceType: FieldRef<"RequestContext", 'String'>
    readonly browser: FieldRef<"RequestContext", 'String'>
    readonly operatingSystem: FieldRef<"RequestContext", 'String'>
    readonly createdAt: FieldRef<"RequestContext", 'DateTime'>
    readonly updatedAt: FieldRef<"RequestContext", 'DateTime'>
    readonly requestId: FieldRef<"RequestContext", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RequestContext findUnique
   */
  export type RequestContextFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestContext
     */
    select?: RequestContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestContext
     */
    omit?: RequestContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestContextInclude<ExtArgs> | null
    /**
     * Filter, which RequestContext to fetch.
     */
    where: RequestContextWhereUniqueInput
  }

  /**
   * RequestContext findUniqueOrThrow
   */
  export type RequestContextFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestContext
     */
    select?: RequestContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestContext
     */
    omit?: RequestContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestContextInclude<ExtArgs> | null
    /**
     * Filter, which RequestContext to fetch.
     */
    where: RequestContextWhereUniqueInput
  }

  /**
   * RequestContext findFirst
   */
  export type RequestContextFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestContext
     */
    select?: RequestContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestContext
     */
    omit?: RequestContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestContextInclude<ExtArgs> | null
    /**
     * Filter, which RequestContext to fetch.
     */
    where?: RequestContextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestContexts to fetch.
     */
    orderBy?: RequestContextOrderByWithRelationInput | RequestContextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestContexts.
     */
    cursor?: RequestContextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestContexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestContexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestContexts.
     */
    distinct?: RequestContextScalarFieldEnum | RequestContextScalarFieldEnum[]
  }

  /**
   * RequestContext findFirstOrThrow
   */
  export type RequestContextFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestContext
     */
    select?: RequestContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestContext
     */
    omit?: RequestContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestContextInclude<ExtArgs> | null
    /**
     * Filter, which RequestContext to fetch.
     */
    where?: RequestContextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestContexts to fetch.
     */
    orderBy?: RequestContextOrderByWithRelationInput | RequestContextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestContexts.
     */
    cursor?: RequestContextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestContexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestContexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestContexts.
     */
    distinct?: RequestContextScalarFieldEnum | RequestContextScalarFieldEnum[]
  }

  /**
   * RequestContext findMany
   */
  export type RequestContextFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestContext
     */
    select?: RequestContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestContext
     */
    omit?: RequestContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestContextInclude<ExtArgs> | null
    /**
     * Filter, which RequestContexts to fetch.
     */
    where?: RequestContextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestContexts to fetch.
     */
    orderBy?: RequestContextOrderByWithRelationInput | RequestContextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RequestContexts.
     */
    cursor?: RequestContextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestContexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestContexts.
     */
    skip?: number
    distinct?: RequestContextScalarFieldEnum | RequestContextScalarFieldEnum[]
  }

  /**
   * RequestContext create
   */
  export type RequestContextCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestContext
     */
    select?: RequestContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestContext
     */
    omit?: RequestContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestContextInclude<ExtArgs> | null
    /**
     * The data needed to create a RequestContext.
     */
    data: XOR<RequestContextCreateInput, RequestContextUncheckedCreateInput>
  }

  /**
   * RequestContext createMany
   */
  export type RequestContextCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RequestContexts.
     */
    data: RequestContextCreateManyInput | RequestContextCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RequestContext createManyAndReturn
   */
  export type RequestContextCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestContext
     */
    select?: RequestContextSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequestContext
     */
    omit?: RequestContextOmit<ExtArgs> | null
    /**
     * The data used to create many RequestContexts.
     */
    data: RequestContextCreateManyInput | RequestContextCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestContextIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RequestContext update
   */
  export type RequestContextUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestContext
     */
    select?: RequestContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestContext
     */
    omit?: RequestContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestContextInclude<ExtArgs> | null
    /**
     * The data needed to update a RequestContext.
     */
    data: XOR<RequestContextUpdateInput, RequestContextUncheckedUpdateInput>
    /**
     * Choose, which RequestContext to update.
     */
    where: RequestContextWhereUniqueInput
  }

  /**
   * RequestContext updateMany
   */
  export type RequestContextUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RequestContexts.
     */
    data: XOR<RequestContextUpdateManyMutationInput, RequestContextUncheckedUpdateManyInput>
    /**
     * Filter which RequestContexts to update
     */
    where?: RequestContextWhereInput
    /**
     * Limit how many RequestContexts to update.
     */
    limit?: number
  }

  /**
   * RequestContext updateManyAndReturn
   */
  export type RequestContextUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestContext
     */
    select?: RequestContextSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequestContext
     */
    omit?: RequestContextOmit<ExtArgs> | null
    /**
     * The data used to update RequestContexts.
     */
    data: XOR<RequestContextUpdateManyMutationInput, RequestContextUncheckedUpdateManyInput>
    /**
     * Filter which RequestContexts to update
     */
    where?: RequestContextWhereInput
    /**
     * Limit how many RequestContexts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestContextIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RequestContext upsert
   */
  export type RequestContextUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestContext
     */
    select?: RequestContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestContext
     */
    omit?: RequestContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestContextInclude<ExtArgs> | null
    /**
     * The filter to search for the RequestContext to update in case it exists.
     */
    where: RequestContextWhereUniqueInput
    /**
     * In case the RequestContext found by the `where` argument doesn't exist, create a new RequestContext with this data.
     */
    create: XOR<RequestContextCreateInput, RequestContextUncheckedCreateInput>
    /**
     * In case the RequestContext was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestContextUpdateInput, RequestContextUncheckedUpdateInput>
  }

  /**
   * RequestContext delete
   */
  export type RequestContextDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestContext
     */
    select?: RequestContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestContext
     */
    omit?: RequestContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestContextInclude<ExtArgs> | null
    /**
     * Filter which RequestContext to delete.
     */
    where: RequestContextWhereUniqueInput
  }

  /**
   * RequestContext deleteMany
   */
  export type RequestContextDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestContexts to delete
     */
    where?: RequestContextWhereInput
    /**
     * Limit how many RequestContexts to delete.
     */
    limit?: number
  }

  /**
   * RequestContext without action
   */
  export type RequestContextDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestContext
     */
    select?: RequestContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestContext
     */
    omit?: RequestContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestContextInclude<ExtArgs> | null
  }


  /**
   * Model StatusHistoryEvent
   */

  export type AggregateStatusHistoryEvent = {
    _count: StatusHistoryEventCountAggregateOutputType | null
    _min: StatusHistoryEventMinAggregateOutputType | null
    _max: StatusHistoryEventMaxAggregateOutputType | null
  }

  export type StatusHistoryEventMinAggregateOutputType = {
    id: string | null
    fromStatus: string | null
    toStatus: string | null
    note: string | null
    createdAt: Date | null
    requestId: string | null
  }

  export type StatusHistoryEventMaxAggregateOutputType = {
    id: string | null
    fromStatus: string | null
    toStatus: string | null
    note: string | null
    createdAt: Date | null
    requestId: string | null
  }

  export type StatusHistoryEventCountAggregateOutputType = {
    id: number
    fromStatus: number
    toStatus: number
    note: number
    createdAt: number
    requestId: number
    _all: number
  }


  export type StatusHistoryEventMinAggregateInputType = {
    id?: true
    fromStatus?: true
    toStatus?: true
    note?: true
    createdAt?: true
    requestId?: true
  }

  export type StatusHistoryEventMaxAggregateInputType = {
    id?: true
    fromStatus?: true
    toStatus?: true
    note?: true
    createdAt?: true
    requestId?: true
  }

  export type StatusHistoryEventCountAggregateInputType = {
    id?: true
    fromStatus?: true
    toStatus?: true
    note?: true
    createdAt?: true
    requestId?: true
    _all?: true
  }

  export type StatusHistoryEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusHistoryEvent to aggregate.
     */
    where?: StatusHistoryEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusHistoryEvents to fetch.
     */
    orderBy?: StatusHistoryEventOrderByWithRelationInput | StatusHistoryEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatusHistoryEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusHistoryEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusHistoryEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StatusHistoryEvents
    **/
    _count?: true | StatusHistoryEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusHistoryEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusHistoryEventMaxAggregateInputType
  }

  export type GetStatusHistoryEventAggregateType<T extends StatusHistoryEventAggregateArgs> = {
        [P in keyof T & keyof AggregateStatusHistoryEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatusHistoryEvent[P]>
      : GetScalarType<T[P], AggregateStatusHistoryEvent[P]>
  }




  export type StatusHistoryEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusHistoryEventWhereInput
    orderBy?: StatusHistoryEventOrderByWithAggregationInput | StatusHistoryEventOrderByWithAggregationInput[]
    by: StatusHistoryEventScalarFieldEnum[] | StatusHistoryEventScalarFieldEnum
    having?: StatusHistoryEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusHistoryEventCountAggregateInputType | true
    _min?: StatusHistoryEventMinAggregateInputType
    _max?: StatusHistoryEventMaxAggregateInputType
  }

  export type StatusHistoryEventGroupByOutputType = {
    id: string
    fromStatus: string | null
    toStatus: string
    note: string
    createdAt: Date
    requestId: string
    _count: StatusHistoryEventCountAggregateOutputType | null
    _min: StatusHistoryEventMinAggregateOutputType | null
    _max: StatusHistoryEventMaxAggregateOutputType | null
  }

  type GetStatusHistoryEventGroupByPayload<T extends StatusHistoryEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusHistoryEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusHistoryEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusHistoryEventGroupByOutputType[P]>
            : GetScalarType<T[P], StatusHistoryEventGroupByOutputType[P]>
        }
      >
    >


  export type StatusHistoryEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    note?: boolean
    createdAt?: boolean
    requestId?: boolean
    request?: boolean | VisaRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statusHistoryEvent"]>

  export type StatusHistoryEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    note?: boolean
    createdAt?: boolean
    requestId?: boolean
    request?: boolean | VisaRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statusHistoryEvent"]>

  export type StatusHistoryEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    note?: boolean
    createdAt?: boolean
    requestId?: boolean
    request?: boolean | VisaRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statusHistoryEvent"]>

  export type StatusHistoryEventSelectScalar = {
    id?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    note?: boolean
    createdAt?: boolean
    requestId?: boolean
  }

  export type StatusHistoryEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fromStatus" | "toStatus" | "note" | "createdAt" | "requestId", ExtArgs["result"]["statusHistoryEvent"]>
  export type StatusHistoryEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | VisaRequestDefaultArgs<ExtArgs>
  }
  export type StatusHistoryEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | VisaRequestDefaultArgs<ExtArgs>
  }
  export type StatusHistoryEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | VisaRequestDefaultArgs<ExtArgs>
  }

  export type $StatusHistoryEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StatusHistoryEvent"
    objects: {
      request: Prisma.$VisaRequestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fromStatus: string | null
      toStatus: string
      note: string
      createdAt: Date
      requestId: string
    }, ExtArgs["result"]["statusHistoryEvent"]>
    composites: {}
  }

  type StatusHistoryEventGetPayload<S extends boolean | null | undefined | StatusHistoryEventDefaultArgs> = $Result.GetResult<Prisma.$StatusHistoryEventPayload, S>

  type StatusHistoryEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatusHistoryEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatusHistoryEventCountAggregateInputType | true
    }

  export interface StatusHistoryEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StatusHistoryEvent'], meta: { name: 'StatusHistoryEvent' } }
    /**
     * Find zero or one StatusHistoryEvent that matches the filter.
     * @param {StatusHistoryEventFindUniqueArgs} args - Arguments to find a StatusHistoryEvent
     * @example
     * // Get one StatusHistoryEvent
     * const statusHistoryEvent = await prisma.statusHistoryEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatusHistoryEventFindUniqueArgs>(args: SelectSubset<T, StatusHistoryEventFindUniqueArgs<ExtArgs>>): Prisma__StatusHistoryEventClient<$Result.GetResult<Prisma.$StatusHistoryEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StatusHistoryEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatusHistoryEventFindUniqueOrThrowArgs} args - Arguments to find a StatusHistoryEvent
     * @example
     * // Get one StatusHistoryEvent
     * const statusHistoryEvent = await prisma.statusHistoryEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatusHistoryEventFindUniqueOrThrowArgs>(args: SelectSubset<T, StatusHistoryEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatusHistoryEventClient<$Result.GetResult<Prisma.$StatusHistoryEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StatusHistoryEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusHistoryEventFindFirstArgs} args - Arguments to find a StatusHistoryEvent
     * @example
     * // Get one StatusHistoryEvent
     * const statusHistoryEvent = await prisma.statusHistoryEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatusHistoryEventFindFirstArgs>(args?: SelectSubset<T, StatusHistoryEventFindFirstArgs<ExtArgs>>): Prisma__StatusHistoryEventClient<$Result.GetResult<Prisma.$StatusHistoryEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StatusHistoryEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusHistoryEventFindFirstOrThrowArgs} args - Arguments to find a StatusHistoryEvent
     * @example
     * // Get one StatusHistoryEvent
     * const statusHistoryEvent = await prisma.statusHistoryEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatusHistoryEventFindFirstOrThrowArgs>(args?: SelectSubset<T, StatusHistoryEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatusHistoryEventClient<$Result.GetResult<Prisma.$StatusHistoryEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StatusHistoryEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusHistoryEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StatusHistoryEvents
     * const statusHistoryEvents = await prisma.statusHistoryEvent.findMany()
     * 
     * // Get first 10 StatusHistoryEvents
     * const statusHistoryEvents = await prisma.statusHistoryEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statusHistoryEventWithIdOnly = await prisma.statusHistoryEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatusHistoryEventFindManyArgs>(args?: SelectSubset<T, StatusHistoryEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusHistoryEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StatusHistoryEvent.
     * @param {StatusHistoryEventCreateArgs} args - Arguments to create a StatusHistoryEvent.
     * @example
     * // Create one StatusHistoryEvent
     * const StatusHistoryEvent = await prisma.statusHistoryEvent.create({
     *   data: {
     *     // ... data to create a StatusHistoryEvent
     *   }
     * })
     * 
     */
    create<T extends StatusHistoryEventCreateArgs>(args: SelectSubset<T, StatusHistoryEventCreateArgs<ExtArgs>>): Prisma__StatusHistoryEventClient<$Result.GetResult<Prisma.$StatusHistoryEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StatusHistoryEvents.
     * @param {StatusHistoryEventCreateManyArgs} args - Arguments to create many StatusHistoryEvents.
     * @example
     * // Create many StatusHistoryEvents
     * const statusHistoryEvent = await prisma.statusHistoryEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatusHistoryEventCreateManyArgs>(args?: SelectSubset<T, StatusHistoryEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StatusHistoryEvents and returns the data saved in the database.
     * @param {StatusHistoryEventCreateManyAndReturnArgs} args - Arguments to create many StatusHistoryEvents.
     * @example
     * // Create many StatusHistoryEvents
     * const statusHistoryEvent = await prisma.statusHistoryEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StatusHistoryEvents and only return the `id`
     * const statusHistoryEventWithIdOnly = await prisma.statusHistoryEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatusHistoryEventCreateManyAndReturnArgs>(args?: SelectSubset<T, StatusHistoryEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusHistoryEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StatusHistoryEvent.
     * @param {StatusHistoryEventDeleteArgs} args - Arguments to delete one StatusHistoryEvent.
     * @example
     * // Delete one StatusHistoryEvent
     * const StatusHistoryEvent = await prisma.statusHistoryEvent.delete({
     *   where: {
     *     // ... filter to delete one StatusHistoryEvent
     *   }
     * })
     * 
     */
    delete<T extends StatusHistoryEventDeleteArgs>(args: SelectSubset<T, StatusHistoryEventDeleteArgs<ExtArgs>>): Prisma__StatusHistoryEventClient<$Result.GetResult<Prisma.$StatusHistoryEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StatusHistoryEvent.
     * @param {StatusHistoryEventUpdateArgs} args - Arguments to update one StatusHistoryEvent.
     * @example
     * // Update one StatusHistoryEvent
     * const statusHistoryEvent = await prisma.statusHistoryEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatusHistoryEventUpdateArgs>(args: SelectSubset<T, StatusHistoryEventUpdateArgs<ExtArgs>>): Prisma__StatusHistoryEventClient<$Result.GetResult<Prisma.$StatusHistoryEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StatusHistoryEvents.
     * @param {StatusHistoryEventDeleteManyArgs} args - Arguments to filter StatusHistoryEvents to delete.
     * @example
     * // Delete a few StatusHistoryEvents
     * const { count } = await prisma.statusHistoryEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatusHistoryEventDeleteManyArgs>(args?: SelectSubset<T, StatusHistoryEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatusHistoryEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusHistoryEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StatusHistoryEvents
     * const statusHistoryEvent = await prisma.statusHistoryEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatusHistoryEventUpdateManyArgs>(args: SelectSubset<T, StatusHistoryEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatusHistoryEvents and returns the data updated in the database.
     * @param {StatusHistoryEventUpdateManyAndReturnArgs} args - Arguments to update many StatusHistoryEvents.
     * @example
     * // Update many StatusHistoryEvents
     * const statusHistoryEvent = await prisma.statusHistoryEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StatusHistoryEvents and only return the `id`
     * const statusHistoryEventWithIdOnly = await prisma.statusHistoryEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StatusHistoryEventUpdateManyAndReturnArgs>(args: SelectSubset<T, StatusHistoryEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusHistoryEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StatusHistoryEvent.
     * @param {StatusHistoryEventUpsertArgs} args - Arguments to update or create a StatusHistoryEvent.
     * @example
     * // Update or create a StatusHistoryEvent
     * const statusHistoryEvent = await prisma.statusHistoryEvent.upsert({
     *   create: {
     *     // ... data to create a StatusHistoryEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StatusHistoryEvent we want to update
     *   }
     * })
     */
    upsert<T extends StatusHistoryEventUpsertArgs>(args: SelectSubset<T, StatusHistoryEventUpsertArgs<ExtArgs>>): Prisma__StatusHistoryEventClient<$Result.GetResult<Prisma.$StatusHistoryEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StatusHistoryEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusHistoryEventCountArgs} args - Arguments to filter StatusHistoryEvents to count.
     * @example
     * // Count the number of StatusHistoryEvents
     * const count = await prisma.statusHistoryEvent.count({
     *   where: {
     *     // ... the filter for the StatusHistoryEvents we want to count
     *   }
     * })
    **/
    count<T extends StatusHistoryEventCountArgs>(
      args?: Subset<T, StatusHistoryEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusHistoryEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StatusHistoryEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusHistoryEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StatusHistoryEventAggregateArgs>(args: Subset<T, StatusHistoryEventAggregateArgs>): Prisma.PrismaPromise<GetStatusHistoryEventAggregateType<T>>

    /**
     * Group by StatusHistoryEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusHistoryEventGroupByArgs} args - Group by arguments.
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
      T extends StatusHistoryEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatusHistoryEventGroupByArgs['orderBy'] }
        : { orderBy?: StatusHistoryEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StatusHistoryEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusHistoryEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StatusHistoryEvent model
   */
  readonly fields: StatusHistoryEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StatusHistoryEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatusHistoryEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    request<T extends VisaRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VisaRequestDefaultArgs<ExtArgs>>): Prisma__VisaRequestClient<$Result.GetResult<Prisma.$VisaRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StatusHistoryEvent model
   */
  interface StatusHistoryEventFieldRefs {
    readonly id: FieldRef<"StatusHistoryEvent", 'String'>
    readonly fromStatus: FieldRef<"StatusHistoryEvent", 'String'>
    readonly toStatus: FieldRef<"StatusHistoryEvent", 'String'>
    readonly note: FieldRef<"StatusHistoryEvent", 'String'>
    readonly createdAt: FieldRef<"StatusHistoryEvent", 'DateTime'>
    readonly requestId: FieldRef<"StatusHistoryEvent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StatusHistoryEvent findUnique
   */
  export type StatusHistoryEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistoryEvent
     */
    select?: StatusHistoryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusHistoryEvent
     */
    omit?: StatusHistoryEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryEventInclude<ExtArgs> | null
    /**
     * Filter, which StatusHistoryEvent to fetch.
     */
    where: StatusHistoryEventWhereUniqueInput
  }

  /**
   * StatusHistoryEvent findUniqueOrThrow
   */
  export type StatusHistoryEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistoryEvent
     */
    select?: StatusHistoryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusHistoryEvent
     */
    omit?: StatusHistoryEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryEventInclude<ExtArgs> | null
    /**
     * Filter, which StatusHistoryEvent to fetch.
     */
    where: StatusHistoryEventWhereUniqueInput
  }

  /**
   * StatusHistoryEvent findFirst
   */
  export type StatusHistoryEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistoryEvent
     */
    select?: StatusHistoryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusHistoryEvent
     */
    omit?: StatusHistoryEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryEventInclude<ExtArgs> | null
    /**
     * Filter, which StatusHistoryEvent to fetch.
     */
    where?: StatusHistoryEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusHistoryEvents to fetch.
     */
    orderBy?: StatusHistoryEventOrderByWithRelationInput | StatusHistoryEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusHistoryEvents.
     */
    cursor?: StatusHistoryEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusHistoryEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusHistoryEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusHistoryEvents.
     */
    distinct?: StatusHistoryEventScalarFieldEnum | StatusHistoryEventScalarFieldEnum[]
  }

  /**
   * StatusHistoryEvent findFirstOrThrow
   */
  export type StatusHistoryEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistoryEvent
     */
    select?: StatusHistoryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusHistoryEvent
     */
    omit?: StatusHistoryEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryEventInclude<ExtArgs> | null
    /**
     * Filter, which StatusHistoryEvent to fetch.
     */
    where?: StatusHistoryEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusHistoryEvents to fetch.
     */
    orderBy?: StatusHistoryEventOrderByWithRelationInput | StatusHistoryEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusHistoryEvents.
     */
    cursor?: StatusHistoryEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusHistoryEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusHistoryEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusHistoryEvents.
     */
    distinct?: StatusHistoryEventScalarFieldEnum | StatusHistoryEventScalarFieldEnum[]
  }

  /**
   * StatusHistoryEvent findMany
   */
  export type StatusHistoryEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistoryEvent
     */
    select?: StatusHistoryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusHistoryEvent
     */
    omit?: StatusHistoryEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryEventInclude<ExtArgs> | null
    /**
     * Filter, which StatusHistoryEvents to fetch.
     */
    where?: StatusHistoryEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusHistoryEvents to fetch.
     */
    orderBy?: StatusHistoryEventOrderByWithRelationInput | StatusHistoryEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StatusHistoryEvents.
     */
    cursor?: StatusHistoryEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusHistoryEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusHistoryEvents.
     */
    skip?: number
    distinct?: StatusHistoryEventScalarFieldEnum | StatusHistoryEventScalarFieldEnum[]
  }

  /**
   * StatusHistoryEvent create
   */
  export type StatusHistoryEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistoryEvent
     */
    select?: StatusHistoryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusHistoryEvent
     */
    omit?: StatusHistoryEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryEventInclude<ExtArgs> | null
    /**
     * The data needed to create a StatusHistoryEvent.
     */
    data: XOR<StatusHistoryEventCreateInput, StatusHistoryEventUncheckedCreateInput>
  }

  /**
   * StatusHistoryEvent createMany
   */
  export type StatusHistoryEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StatusHistoryEvents.
     */
    data: StatusHistoryEventCreateManyInput | StatusHistoryEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StatusHistoryEvent createManyAndReturn
   */
  export type StatusHistoryEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistoryEvent
     */
    select?: StatusHistoryEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StatusHistoryEvent
     */
    omit?: StatusHistoryEventOmit<ExtArgs> | null
    /**
     * The data used to create many StatusHistoryEvents.
     */
    data: StatusHistoryEventCreateManyInput | StatusHistoryEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StatusHistoryEvent update
   */
  export type StatusHistoryEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistoryEvent
     */
    select?: StatusHistoryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusHistoryEvent
     */
    omit?: StatusHistoryEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryEventInclude<ExtArgs> | null
    /**
     * The data needed to update a StatusHistoryEvent.
     */
    data: XOR<StatusHistoryEventUpdateInput, StatusHistoryEventUncheckedUpdateInput>
    /**
     * Choose, which StatusHistoryEvent to update.
     */
    where: StatusHistoryEventWhereUniqueInput
  }

  /**
   * StatusHistoryEvent updateMany
   */
  export type StatusHistoryEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StatusHistoryEvents.
     */
    data: XOR<StatusHistoryEventUpdateManyMutationInput, StatusHistoryEventUncheckedUpdateManyInput>
    /**
     * Filter which StatusHistoryEvents to update
     */
    where?: StatusHistoryEventWhereInput
    /**
     * Limit how many StatusHistoryEvents to update.
     */
    limit?: number
  }

  /**
   * StatusHistoryEvent updateManyAndReturn
   */
  export type StatusHistoryEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistoryEvent
     */
    select?: StatusHistoryEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StatusHistoryEvent
     */
    omit?: StatusHistoryEventOmit<ExtArgs> | null
    /**
     * The data used to update StatusHistoryEvents.
     */
    data: XOR<StatusHistoryEventUpdateManyMutationInput, StatusHistoryEventUncheckedUpdateManyInput>
    /**
     * Filter which StatusHistoryEvents to update
     */
    where?: StatusHistoryEventWhereInput
    /**
     * Limit how many StatusHistoryEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StatusHistoryEvent upsert
   */
  export type StatusHistoryEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistoryEvent
     */
    select?: StatusHistoryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusHistoryEvent
     */
    omit?: StatusHistoryEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryEventInclude<ExtArgs> | null
    /**
     * The filter to search for the StatusHistoryEvent to update in case it exists.
     */
    where: StatusHistoryEventWhereUniqueInput
    /**
     * In case the StatusHistoryEvent found by the `where` argument doesn't exist, create a new StatusHistoryEvent with this data.
     */
    create: XOR<StatusHistoryEventCreateInput, StatusHistoryEventUncheckedCreateInput>
    /**
     * In case the StatusHistoryEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatusHistoryEventUpdateInput, StatusHistoryEventUncheckedUpdateInput>
  }

  /**
   * StatusHistoryEvent delete
   */
  export type StatusHistoryEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistoryEvent
     */
    select?: StatusHistoryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusHistoryEvent
     */
    omit?: StatusHistoryEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryEventInclude<ExtArgs> | null
    /**
     * Filter which StatusHistoryEvent to delete.
     */
    where: StatusHistoryEventWhereUniqueInput
  }

  /**
   * StatusHistoryEvent deleteMany
   */
  export type StatusHistoryEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusHistoryEvents to delete
     */
    where?: StatusHistoryEventWhereInput
    /**
     * Limit how many StatusHistoryEvents to delete.
     */
    limit?: number
  }

  /**
   * StatusHistoryEvent without action
   */
  export type StatusHistoryEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistoryEvent
     */
    select?: StatusHistoryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusHistoryEvent
     */
    omit?: StatusHistoryEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryEventInclude<ExtArgs> | null
  }


  /**
   * Model AdminCredential
   */

  export type AggregateAdminCredential = {
    _count: AdminCredentialCountAggregateOutputType | null
    _min: AdminCredentialMinAggregateOutputType | null
    _max: AdminCredentialMaxAggregateOutputType | null
  }

  export type AdminCredentialMinAggregateOutputType = {
    id: string | null
    username: string | null
    passwordHash: string | null
    salt: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCredentialMaxAggregateOutputType = {
    id: string | null
    username: string | null
    passwordHash: string | null
    salt: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCredentialCountAggregateOutputType = {
    id: number
    username: number
    passwordHash: number
    salt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminCredentialMinAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    salt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCredentialMaxAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    salt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCredentialCountAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    salt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminCredentialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminCredential to aggregate.
     */
    where?: AdminCredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminCredentials to fetch.
     */
    orderBy?: AdminCredentialOrderByWithRelationInput | AdminCredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminCredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminCredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminCredentials
    **/
    _count?: true | AdminCredentialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminCredentialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminCredentialMaxAggregateInputType
  }

  export type GetAdminCredentialAggregateType<T extends AdminCredentialAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminCredential]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminCredential[P]>
      : GetScalarType<T[P], AggregateAdminCredential[P]>
  }




  export type AdminCredentialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminCredentialWhereInput
    orderBy?: AdminCredentialOrderByWithAggregationInput | AdminCredentialOrderByWithAggregationInput[]
    by: AdminCredentialScalarFieldEnum[] | AdminCredentialScalarFieldEnum
    having?: AdminCredentialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCredentialCountAggregateInputType | true
    _min?: AdminCredentialMinAggregateInputType
    _max?: AdminCredentialMaxAggregateInputType
  }

  export type AdminCredentialGroupByOutputType = {
    id: string
    username: string
    passwordHash: string
    salt: string
    createdAt: Date
    updatedAt: Date
    _count: AdminCredentialCountAggregateOutputType | null
    _min: AdminCredentialMinAggregateOutputType | null
    _max: AdminCredentialMaxAggregateOutputType | null
  }

  type GetAdminCredentialGroupByPayload<T extends AdminCredentialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminCredentialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminCredentialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminCredentialGroupByOutputType[P]>
            : GetScalarType<T[P], AdminCredentialGroupByOutputType[P]>
        }
      >
    >


  export type AdminCredentialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    salt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminCredential"]>

  export type AdminCredentialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    salt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminCredential"]>

  export type AdminCredentialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    salt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminCredential"]>

  export type AdminCredentialSelectScalar = {
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    salt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminCredentialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "passwordHash" | "salt" | "createdAt" | "updatedAt", ExtArgs["result"]["adminCredential"]>

  export type $AdminCredentialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminCredential"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      passwordHash: string
      salt: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adminCredential"]>
    composites: {}
  }

  type AdminCredentialGetPayload<S extends boolean | null | undefined | AdminCredentialDefaultArgs> = $Result.GetResult<Prisma.$AdminCredentialPayload, S>

  type AdminCredentialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminCredentialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCredentialCountAggregateInputType | true
    }

  export interface AdminCredentialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminCredential'], meta: { name: 'AdminCredential' } }
    /**
     * Find zero or one AdminCredential that matches the filter.
     * @param {AdminCredentialFindUniqueArgs} args - Arguments to find a AdminCredential
     * @example
     * // Get one AdminCredential
     * const adminCredential = await prisma.adminCredential.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminCredentialFindUniqueArgs>(args: SelectSubset<T, AdminCredentialFindUniqueArgs<ExtArgs>>): Prisma__AdminCredentialClient<$Result.GetResult<Prisma.$AdminCredentialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminCredential that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminCredentialFindUniqueOrThrowArgs} args - Arguments to find a AdminCredential
     * @example
     * // Get one AdminCredential
     * const adminCredential = await prisma.adminCredential.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminCredentialFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminCredentialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminCredentialClient<$Result.GetResult<Prisma.$AdminCredentialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminCredential that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCredentialFindFirstArgs} args - Arguments to find a AdminCredential
     * @example
     * // Get one AdminCredential
     * const adminCredential = await prisma.adminCredential.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminCredentialFindFirstArgs>(args?: SelectSubset<T, AdminCredentialFindFirstArgs<ExtArgs>>): Prisma__AdminCredentialClient<$Result.GetResult<Prisma.$AdminCredentialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminCredential that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCredentialFindFirstOrThrowArgs} args - Arguments to find a AdminCredential
     * @example
     * // Get one AdminCredential
     * const adminCredential = await prisma.adminCredential.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminCredentialFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminCredentialFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminCredentialClient<$Result.GetResult<Prisma.$AdminCredentialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminCredentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCredentialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminCredentials
     * const adminCredentials = await prisma.adminCredential.findMany()
     * 
     * // Get first 10 AdminCredentials
     * const adminCredentials = await prisma.adminCredential.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminCredentialWithIdOnly = await prisma.adminCredential.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminCredentialFindManyArgs>(args?: SelectSubset<T, AdminCredentialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminCredentialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminCredential.
     * @param {AdminCredentialCreateArgs} args - Arguments to create a AdminCredential.
     * @example
     * // Create one AdminCredential
     * const AdminCredential = await prisma.adminCredential.create({
     *   data: {
     *     // ... data to create a AdminCredential
     *   }
     * })
     * 
     */
    create<T extends AdminCredentialCreateArgs>(args: SelectSubset<T, AdminCredentialCreateArgs<ExtArgs>>): Prisma__AdminCredentialClient<$Result.GetResult<Prisma.$AdminCredentialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminCredentials.
     * @param {AdminCredentialCreateManyArgs} args - Arguments to create many AdminCredentials.
     * @example
     * // Create many AdminCredentials
     * const adminCredential = await prisma.adminCredential.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCredentialCreateManyArgs>(args?: SelectSubset<T, AdminCredentialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminCredentials and returns the data saved in the database.
     * @param {AdminCredentialCreateManyAndReturnArgs} args - Arguments to create many AdminCredentials.
     * @example
     * // Create many AdminCredentials
     * const adminCredential = await prisma.adminCredential.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminCredentials and only return the `id`
     * const adminCredentialWithIdOnly = await prisma.adminCredential.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCredentialCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCredentialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminCredentialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminCredential.
     * @param {AdminCredentialDeleteArgs} args - Arguments to delete one AdminCredential.
     * @example
     * // Delete one AdminCredential
     * const AdminCredential = await prisma.adminCredential.delete({
     *   where: {
     *     // ... filter to delete one AdminCredential
     *   }
     * })
     * 
     */
    delete<T extends AdminCredentialDeleteArgs>(args: SelectSubset<T, AdminCredentialDeleteArgs<ExtArgs>>): Prisma__AdminCredentialClient<$Result.GetResult<Prisma.$AdminCredentialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminCredential.
     * @param {AdminCredentialUpdateArgs} args - Arguments to update one AdminCredential.
     * @example
     * // Update one AdminCredential
     * const adminCredential = await prisma.adminCredential.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminCredentialUpdateArgs>(args: SelectSubset<T, AdminCredentialUpdateArgs<ExtArgs>>): Prisma__AdminCredentialClient<$Result.GetResult<Prisma.$AdminCredentialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminCredentials.
     * @param {AdminCredentialDeleteManyArgs} args - Arguments to filter AdminCredentials to delete.
     * @example
     * // Delete a few AdminCredentials
     * const { count } = await prisma.adminCredential.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminCredentialDeleteManyArgs>(args?: SelectSubset<T, AdminCredentialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminCredentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCredentialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminCredentials
     * const adminCredential = await prisma.adminCredential.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminCredentialUpdateManyArgs>(args: SelectSubset<T, AdminCredentialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminCredentials and returns the data updated in the database.
     * @param {AdminCredentialUpdateManyAndReturnArgs} args - Arguments to update many AdminCredentials.
     * @example
     * // Update many AdminCredentials
     * const adminCredential = await prisma.adminCredential.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminCredentials and only return the `id`
     * const adminCredentialWithIdOnly = await prisma.adminCredential.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminCredentialUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminCredentialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminCredentialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminCredential.
     * @param {AdminCredentialUpsertArgs} args - Arguments to update or create a AdminCredential.
     * @example
     * // Update or create a AdminCredential
     * const adminCredential = await prisma.adminCredential.upsert({
     *   create: {
     *     // ... data to create a AdminCredential
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminCredential we want to update
     *   }
     * })
     */
    upsert<T extends AdminCredentialUpsertArgs>(args: SelectSubset<T, AdminCredentialUpsertArgs<ExtArgs>>): Prisma__AdminCredentialClient<$Result.GetResult<Prisma.$AdminCredentialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminCredentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCredentialCountArgs} args - Arguments to filter AdminCredentials to count.
     * @example
     * // Count the number of AdminCredentials
     * const count = await prisma.adminCredential.count({
     *   where: {
     *     // ... the filter for the AdminCredentials we want to count
     *   }
     * })
    **/
    count<T extends AdminCredentialCountArgs>(
      args?: Subset<T, AdminCredentialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCredentialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminCredential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCredentialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminCredentialAggregateArgs>(args: Subset<T, AdminCredentialAggregateArgs>): Prisma.PrismaPromise<GetAdminCredentialAggregateType<T>>

    /**
     * Group by AdminCredential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCredentialGroupByArgs} args - Group by arguments.
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
      T extends AdminCredentialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminCredentialGroupByArgs['orderBy'] }
        : { orderBy?: AdminCredentialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminCredentialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminCredentialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminCredential model
   */
  readonly fields: AdminCredentialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminCredential.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminCredentialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the AdminCredential model
   */
  interface AdminCredentialFieldRefs {
    readonly id: FieldRef<"AdminCredential", 'String'>
    readonly username: FieldRef<"AdminCredential", 'String'>
    readonly passwordHash: FieldRef<"AdminCredential", 'String'>
    readonly salt: FieldRef<"AdminCredential", 'String'>
    readonly createdAt: FieldRef<"AdminCredential", 'DateTime'>
    readonly updatedAt: FieldRef<"AdminCredential", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminCredential findUnique
   */
  export type AdminCredentialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCredential
     */
    select?: AdminCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminCredential
     */
    omit?: AdminCredentialOmit<ExtArgs> | null
    /**
     * Filter, which AdminCredential to fetch.
     */
    where: AdminCredentialWhereUniqueInput
  }

  /**
   * AdminCredential findUniqueOrThrow
   */
  export type AdminCredentialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCredential
     */
    select?: AdminCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminCredential
     */
    omit?: AdminCredentialOmit<ExtArgs> | null
    /**
     * Filter, which AdminCredential to fetch.
     */
    where: AdminCredentialWhereUniqueInput
  }

  /**
   * AdminCredential findFirst
   */
  export type AdminCredentialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCredential
     */
    select?: AdminCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminCredential
     */
    omit?: AdminCredentialOmit<ExtArgs> | null
    /**
     * Filter, which AdminCredential to fetch.
     */
    where?: AdminCredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminCredentials to fetch.
     */
    orderBy?: AdminCredentialOrderByWithRelationInput | AdminCredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminCredentials.
     */
    cursor?: AdminCredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminCredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminCredentials.
     */
    distinct?: AdminCredentialScalarFieldEnum | AdminCredentialScalarFieldEnum[]
  }

  /**
   * AdminCredential findFirstOrThrow
   */
  export type AdminCredentialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCredential
     */
    select?: AdminCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminCredential
     */
    omit?: AdminCredentialOmit<ExtArgs> | null
    /**
     * Filter, which AdminCredential to fetch.
     */
    where?: AdminCredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminCredentials to fetch.
     */
    orderBy?: AdminCredentialOrderByWithRelationInput | AdminCredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminCredentials.
     */
    cursor?: AdminCredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminCredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminCredentials.
     */
    distinct?: AdminCredentialScalarFieldEnum | AdminCredentialScalarFieldEnum[]
  }

  /**
   * AdminCredential findMany
   */
  export type AdminCredentialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCredential
     */
    select?: AdminCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminCredential
     */
    omit?: AdminCredentialOmit<ExtArgs> | null
    /**
     * Filter, which AdminCredentials to fetch.
     */
    where?: AdminCredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminCredentials to fetch.
     */
    orderBy?: AdminCredentialOrderByWithRelationInput | AdminCredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminCredentials.
     */
    cursor?: AdminCredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminCredentials.
     */
    skip?: number
    distinct?: AdminCredentialScalarFieldEnum | AdminCredentialScalarFieldEnum[]
  }

  /**
   * AdminCredential create
   */
  export type AdminCredentialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCredential
     */
    select?: AdminCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminCredential
     */
    omit?: AdminCredentialOmit<ExtArgs> | null
    /**
     * The data needed to create a AdminCredential.
     */
    data: XOR<AdminCredentialCreateInput, AdminCredentialUncheckedCreateInput>
  }

  /**
   * AdminCredential createMany
   */
  export type AdminCredentialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminCredentials.
     */
    data: AdminCredentialCreateManyInput | AdminCredentialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminCredential createManyAndReturn
   */
  export type AdminCredentialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCredential
     */
    select?: AdminCredentialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminCredential
     */
    omit?: AdminCredentialOmit<ExtArgs> | null
    /**
     * The data used to create many AdminCredentials.
     */
    data: AdminCredentialCreateManyInput | AdminCredentialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminCredential update
   */
  export type AdminCredentialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCredential
     */
    select?: AdminCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminCredential
     */
    omit?: AdminCredentialOmit<ExtArgs> | null
    /**
     * The data needed to update a AdminCredential.
     */
    data: XOR<AdminCredentialUpdateInput, AdminCredentialUncheckedUpdateInput>
    /**
     * Choose, which AdminCredential to update.
     */
    where: AdminCredentialWhereUniqueInput
  }

  /**
   * AdminCredential updateMany
   */
  export type AdminCredentialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminCredentials.
     */
    data: XOR<AdminCredentialUpdateManyMutationInput, AdminCredentialUncheckedUpdateManyInput>
    /**
     * Filter which AdminCredentials to update
     */
    where?: AdminCredentialWhereInput
    /**
     * Limit how many AdminCredentials to update.
     */
    limit?: number
  }

  /**
   * AdminCredential updateManyAndReturn
   */
  export type AdminCredentialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCredential
     */
    select?: AdminCredentialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminCredential
     */
    omit?: AdminCredentialOmit<ExtArgs> | null
    /**
     * The data used to update AdminCredentials.
     */
    data: XOR<AdminCredentialUpdateManyMutationInput, AdminCredentialUncheckedUpdateManyInput>
    /**
     * Filter which AdminCredentials to update
     */
    where?: AdminCredentialWhereInput
    /**
     * Limit how many AdminCredentials to update.
     */
    limit?: number
  }

  /**
   * AdminCredential upsert
   */
  export type AdminCredentialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCredential
     */
    select?: AdminCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminCredential
     */
    omit?: AdminCredentialOmit<ExtArgs> | null
    /**
     * The filter to search for the AdminCredential to update in case it exists.
     */
    where: AdminCredentialWhereUniqueInput
    /**
     * In case the AdminCredential found by the `where` argument doesn't exist, create a new AdminCredential with this data.
     */
    create: XOR<AdminCredentialCreateInput, AdminCredentialUncheckedCreateInput>
    /**
     * In case the AdminCredential was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminCredentialUpdateInput, AdminCredentialUncheckedUpdateInput>
  }

  /**
   * AdminCredential delete
   */
  export type AdminCredentialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCredential
     */
    select?: AdminCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminCredential
     */
    omit?: AdminCredentialOmit<ExtArgs> | null
    /**
     * Filter which AdminCredential to delete.
     */
    where: AdminCredentialWhereUniqueInput
  }

  /**
   * AdminCredential deleteMany
   */
  export type AdminCredentialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminCredentials to delete
     */
    where?: AdminCredentialWhereInput
    /**
     * Limit how many AdminCredentials to delete.
     */
    limit?: number
  }

  /**
   * AdminCredential without action
   */
  export type AdminCredentialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCredential
     */
    select?: AdminCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminCredential
     */
    omit?: AdminCredentialOmit<ExtArgs> | null
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


  export const CountryScalarFieldEnum: {
    id: 'id',
    code: 'code',
    nameAr: 'nameAr',
    nameEn: 'nameEn',
    flag: 'flag',
    visaType: 'visaType',
    accent: 'accent',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const VisaRequestScalarFieldEnum: {
    id: 'id',
    referenceCode: 'referenceCode',
    fullName: 'fullName',
    email: 'email',
    phone: 'phone',
    passportNumber: 'passportNumber',
    visaType: 'visaType',
    issuingCountry: 'issuingCountry',
    passportExpiryDate: 'passportExpiryDate',
    passportDocumentName: 'passportDocumentName',
    personalPhotoName: 'personalPhotoName',
    travelDate: 'travelDate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    countryId: 'countryId'
  };

  export type VisaRequestScalarFieldEnum = (typeof VisaRequestScalarFieldEnum)[keyof typeof VisaRequestScalarFieldEnum]


  export const VisaApplicantScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    nationality: 'nationality',
    passportNumber: 'passportNumber',
    issuingCountry: 'issuingCountry',
    passportIssueDate: 'passportIssueDate',
    passportExpiryDate: 'passportExpiryDate',
    passportDocumentName: 'passportDocumentName',
    personalPhotoName: 'personalPhotoName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    requestId: 'requestId'
  };

  export type VisaApplicantScalarFieldEnum = (typeof VisaApplicantScalarFieldEnum)[keyof typeof VisaApplicantScalarFieldEnum]


  export const RequestContextScalarFieldEnum: {
    id: 'id',
    channel: 'channel',
    userAgent: 'userAgent',
    deviceType: 'deviceType',
    browser: 'browser',
    operatingSystem: 'operatingSystem',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    requestId: 'requestId'
  };

  export type RequestContextScalarFieldEnum = (typeof RequestContextScalarFieldEnum)[keyof typeof RequestContextScalarFieldEnum]


  export const StatusHistoryEventScalarFieldEnum: {
    id: 'id',
    fromStatus: 'fromStatus',
    toStatus: 'toStatus',
    note: 'note',
    createdAt: 'createdAt',
    requestId: 'requestId'
  };

  export type StatusHistoryEventScalarFieldEnum = (typeof StatusHistoryEventScalarFieldEnum)[keyof typeof StatusHistoryEventScalarFieldEnum]


  export const AdminCredentialScalarFieldEnum: {
    id: 'id',
    username: 'username',
    passwordHash: 'passwordHash',
    salt: 'salt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminCredentialScalarFieldEnum = (typeof AdminCredentialScalarFieldEnum)[keyof typeof AdminCredentialScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'VisaRequestStatus'
   */
  export type EnumVisaRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VisaRequestStatus'>
    


  /**
   * Reference to a field of type 'VisaRequestStatus[]'
   */
  export type ListEnumVisaRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VisaRequestStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type CountryWhereInput = {
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    id?: StringFilter<"Country"> | string
    code?: StringFilter<"Country"> | string
    nameAr?: StringFilter<"Country"> | string
    nameEn?: StringFilter<"Country"> | string
    flag?: StringFilter<"Country"> | string
    visaType?: StringFilter<"Country"> | string
    accent?: StringFilter<"Country"> | string
    isActive?: BoolFilter<"Country"> | boolean
    createdAt?: DateTimeFilter<"Country"> | Date | string
    updatedAt?: DateTimeFilter<"Country"> | Date | string
    requests?: VisaRequestListRelationFilter
  }

  export type CountryOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    nameAr?: SortOrder
    nameEn?: SortOrder
    flag?: SortOrder
    visaType?: SortOrder
    accent?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requests?: VisaRequestOrderByRelationAggregateInput
  }

  export type CountryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    nameAr?: StringFilter<"Country"> | string
    nameEn?: StringFilter<"Country"> | string
    flag?: StringFilter<"Country"> | string
    visaType?: StringFilter<"Country"> | string
    accent?: StringFilter<"Country"> | string
    isActive?: BoolFilter<"Country"> | boolean
    createdAt?: DateTimeFilter<"Country"> | Date | string
    updatedAt?: DateTimeFilter<"Country"> | Date | string
    requests?: VisaRequestListRelationFilter
  }, "id" | "code">

  export type CountryOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    nameAr?: SortOrder
    nameEn?: SortOrder
    flag?: SortOrder
    visaType?: SortOrder
    accent?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CountryCountOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    OR?: CountryScalarWhereWithAggregatesInput[]
    NOT?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Country"> | string
    code?: StringWithAggregatesFilter<"Country"> | string
    nameAr?: StringWithAggregatesFilter<"Country"> | string
    nameEn?: StringWithAggregatesFilter<"Country"> | string
    flag?: StringWithAggregatesFilter<"Country"> | string
    visaType?: StringWithAggregatesFilter<"Country"> | string
    accent?: StringWithAggregatesFilter<"Country"> | string
    isActive?: BoolWithAggregatesFilter<"Country"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Country"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Country"> | Date | string
  }

  export type VisaRequestWhereInput = {
    AND?: VisaRequestWhereInput | VisaRequestWhereInput[]
    OR?: VisaRequestWhereInput[]
    NOT?: VisaRequestWhereInput | VisaRequestWhereInput[]
    id?: StringFilter<"VisaRequest"> | string
    referenceCode?: StringFilter<"VisaRequest"> | string
    fullName?: StringFilter<"VisaRequest"> | string
    email?: StringFilter<"VisaRequest"> | string
    phone?: StringFilter<"VisaRequest"> | string
    passportNumber?: StringFilter<"VisaRequest"> | string
    visaType?: StringFilter<"VisaRequest"> | string
    issuingCountry?: StringNullableFilter<"VisaRequest"> | string | null
    passportExpiryDate?: StringNullableFilter<"VisaRequest"> | string | null
    passportDocumentName?: StringNullableFilter<"VisaRequest"> | string | null
    personalPhotoName?: StringNullableFilter<"VisaRequest"> | string | null
    travelDate?: StringNullableFilter<"VisaRequest"> | string | null
    status?: EnumVisaRequestStatusFilter<"VisaRequest"> | $Enums.VisaRequestStatus
    createdAt?: DateTimeFilter<"VisaRequest"> | Date | string
    updatedAt?: DateTimeFilter<"VisaRequest"> | Date | string
    countryId?: StringFilter<"VisaRequest"> | string
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    requestContext?: XOR<RequestContextNullableScalarRelationFilter, RequestContextWhereInput> | null
    applicants?: VisaApplicantListRelationFilter
    statusHistory?: StatusHistoryEventListRelationFilter
  }

  export type VisaRequestOrderByWithRelationInput = {
    id?: SortOrder
    referenceCode?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passportNumber?: SortOrder
    visaType?: SortOrder
    issuingCountry?: SortOrderInput | SortOrder
    passportExpiryDate?: SortOrderInput | SortOrder
    passportDocumentName?: SortOrderInput | SortOrder
    personalPhotoName?: SortOrderInput | SortOrder
    travelDate?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    countryId?: SortOrder
    country?: CountryOrderByWithRelationInput
    requestContext?: RequestContextOrderByWithRelationInput
    applicants?: VisaApplicantOrderByRelationAggregateInput
    statusHistory?: StatusHistoryEventOrderByRelationAggregateInput
  }

  export type VisaRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    referenceCode?: string
    AND?: VisaRequestWhereInput | VisaRequestWhereInput[]
    OR?: VisaRequestWhereInput[]
    NOT?: VisaRequestWhereInput | VisaRequestWhereInput[]
    fullName?: StringFilter<"VisaRequest"> | string
    email?: StringFilter<"VisaRequest"> | string
    phone?: StringFilter<"VisaRequest"> | string
    passportNumber?: StringFilter<"VisaRequest"> | string
    visaType?: StringFilter<"VisaRequest"> | string
    issuingCountry?: StringNullableFilter<"VisaRequest"> | string | null
    passportExpiryDate?: StringNullableFilter<"VisaRequest"> | string | null
    passportDocumentName?: StringNullableFilter<"VisaRequest"> | string | null
    personalPhotoName?: StringNullableFilter<"VisaRequest"> | string | null
    travelDate?: StringNullableFilter<"VisaRequest"> | string | null
    status?: EnumVisaRequestStatusFilter<"VisaRequest"> | $Enums.VisaRequestStatus
    createdAt?: DateTimeFilter<"VisaRequest"> | Date | string
    updatedAt?: DateTimeFilter<"VisaRequest"> | Date | string
    countryId?: StringFilter<"VisaRequest"> | string
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    requestContext?: XOR<RequestContextNullableScalarRelationFilter, RequestContextWhereInput> | null
    applicants?: VisaApplicantListRelationFilter
    statusHistory?: StatusHistoryEventListRelationFilter
  }, "id" | "referenceCode">

  export type VisaRequestOrderByWithAggregationInput = {
    id?: SortOrder
    referenceCode?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passportNumber?: SortOrder
    visaType?: SortOrder
    issuingCountry?: SortOrderInput | SortOrder
    passportExpiryDate?: SortOrderInput | SortOrder
    passportDocumentName?: SortOrderInput | SortOrder
    personalPhotoName?: SortOrderInput | SortOrder
    travelDate?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    countryId?: SortOrder
    _count?: VisaRequestCountOrderByAggregateInput
    _max?: VisaRequestMaxOrderByAggregateInput
    _min?: VisaRequestMinOrderByAggregateInput
  }

  export type VisaRequestScalarWhereWithAggregatesInput = {
    AND?: VisaRequestScalarWhereWithAggregatesInput | VisaRequestScalarWhereWithAggregatesInput[]
    OR?: VisaRequestScalarWhereWithAggregatesInput[]
    NOT?: VisaRequestScalarWhereWithAggregatesInput | VisaRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VisaRequest"> | string
    referenceCode?: StringWithAggregatesFilter<"VisaRequest"> | string
    fullName?: StringWithAggregatesFilter<"VisaRequest"> | string
    email?: StringWithAggregatesFilter<"VisaRequest"> | string
    phone?: StringWithAggregatesFilter<"VisaRequest"> | string
    passportNumber?: StringWithAggregatesFilter<"VisaRequest"> | string
    visaType?: StringWithAggregatesFilter<"VisaRequest"> | string
    issuingCountry?: StringNullableWithAggregatesFilter<"VisaRequest"> | string | null
    passportExpiryDate?: StringNullableWithAggregatesFilter<"VisaRequest"> | string | null
    passportDocumentName?: StringNullableWithAggregatesFilter<"VisaRequest"> | string | null
    personalPhotoName?: StringNullableWithAggregatesFilter<"VisaRequest"> | string | null
    travelDate?: StringNullableWithAggregatesFilter<"VisaRequest"> | string | null
    status?: EnumVisaRequestStatusWithAggregatesFilter<"VisaRequest"> | $Enums.VisaRequestStatus
    createdAt?: DateTimeWithAggregatesFilter<"VisaRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VisaRequest"> | Date | string
    countryId?: StringWithAggregatesFilter<"VisaRequest"> | string
  }

  export type VisaApplicantWhereInput = {
    AND?: VisaApplicantWhereInput | VisaApplicantWhereInput[]
    OR?: VisaApplicantWhereInput[]
    NOT?: VisaApplicantWhereInput | VisaApplicantWhereInput[]
    id?: StringFilter<"VisaApplicant"> | string
    fullName?: StringFilter<"VisaApplicant"> | string
    nationality?: StringFilter<"VisaApplicant"> | string
    passportNumber?: StringFilter<"VisaApplicant"> | string
    issuingCountry?: StringFilter<"VisaApplicant"> | string
    passportIssueDate?: StringFilter<"VisaApplicant"> | string
    passportExpiryDate?: StringFilter<"VisaApplicant"> | string
    passportDocumentName?: StringFilter<"VisaApplicant"> | string
    personalPhotoName?: StringFilter<"VisaApplicant"> | string
    createdAt?: DateTimeFilter<"VisaApplicant"> | Date | string
    updatedAt?: DateTimeFilter<"VisaApplicant"> | Date | string
    requestId?: StringFilter<"VisaApplicant"> | string
    request?: XOR<VisaRequestScalarRelationFilter, VisaRequestWhereInput>
  }

  export type VisaApplicantOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    nationality?: SortOrder
    passportNumber?: SortOrder
    issuingCountry?: SortOrder
    passportIssueDate?: SortOrder
    passportExpiryDate?: SortOrder
    passportDocumentName?: SortOrder
    personalPhotoName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requestId?: SortOrder
    request?: VisaRequestOrderByWithRelationInput
  }

  export type VisaApplicantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VisaApplicantWhereInput | VisaApplicantWhereInput[]
    OR?: VisaApplicantWhereInput[]
    NOT?: VisaApplicantWhereInput | VisaApplicantWhereInput[]
    fullName?: StringFilter<"VisaApplicant"> | string
    nationality?: StringFilter<"VisaApplicant"> | string
    passportNumber?: StringFilter<"VisaApplicant"> | string
    issuingCountry?: StringFilter<"VisaApplicant"> | string
    passportIssueDate?: StringFilter<"VisaApplicant"> | string
    passportExpiryDate?: StringFilter<"VisaApplicant"> | string
    passportDocumentName?: StringFilter<"VisaApplicant"> | string
    personalPhotoName?: StringFilter<"VisaApplicant"> | string
    createdAt?: DateTimeFilter<"VisaApplicant"> | Date | string
    updatedAt?: DateTimeFilter<"VisaApplicant"> | Date | string
    requestId?: StringFilter<"VisaApplicant"> | string
    request?: XOR<VisaRequestScalarRelationFilter, VisaRequestWhereInput>
  }, "id">

  export type VisaApplicantOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    nationality?: SortOrder
    passportNumber?: SortOrder
    issuingCountry?: SortOrder
    passportIssueDate?: SortOrder
    passportExpiryDate?: SortOrder
    passportDocumentName?: SortOrder
    personalPhotoName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requestId?: SortOrder
    _count?: VisaApplicantCountOrderByAggregateInput
    _max?: VisaApplicantMaxOrderByAggregateInput
    _min?: VisaApplicantMinOrderByAggregateInput
  }

  export type VisaApplicantScalarWhereWithAggregatesInput = {
    AND?: VisaApplicantScalarWhereWithAggregatesInput | VisaApplicantScalarWhereWithAggregatesInput[]
    OR?: VisaApplicantScalarWhereWithAggregatesInput[]
    NOT?: VisaApplicantScalarWhereWithAggregatesInput | VisaApplicantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VisaApplicant"> | string
    fullName?: StringWithAggregatesFilter<"VisaApplicant"> | string
    nationality?: StringWithAggregatesFilter<"VisaApplicant"> | string
    passportNumber?: StringWithAggregatesFilter<"VisaApplicant"> | string
    issuingCountry?: StringWithAggregatesFilter<"VisaApplicant"> | string
    passportIssueDate?: StringWithAggregatesFilter<"VisaApplicant"> | string
    passportExpiryDate?: StringWithAggregatesFilter<"VisaApplicant"> | string
    passportDocumentName?: StringWithAggregatesFilter<"VisaApplicant"> | string
    personalPhotoName?: StringWithAggregatesFilter<"VisaApplicant"> | string
    createdAt?: DateTimeWithAggregatesFilter<"VisaApplicant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VisaApplicant"> | Date | string
    requestId?: StringWithAggregatesFilter<"VisaApplicant"> | string
  }

  export type RequestContextWhereInput = {
    AND?: RequestContextWhereInput | RequestContextWhereInput[]
    OR?: RequestContextWhereInput[]
    NOT?: RequestContextWhereInput | RequestContextWhereInput[]
    id?: StringFilter<"RequestContext"> | string
    channel?: StringNullableFilter<"RequestContext"> | string | null
    userAgent?: StringNullableFilter<"RequestContext"> | string | null
    deviceType?: StringNullableFilter<"RequestContext"> | string | null
    browser?: StringNullableFilter<"RequestContext"> | string | null
    operatingSystem?: StringNullableFilter<"RequestContext"> | string | null
    createdAt?: DateTimeFilter<"RequestContext"> | Date | string
    updatedAt?: DateTimeFilter<"RequestContext"> | Date | string
    requestId?: StringFilter<"RequestContext"> | string
    request?: XOR<VisaRequestScalarRelationFilter, VisaRequestWhereInput>
  }

  export type RequestContextOrderByWithRelationInput = {
    id?: SortOrder
    channel?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    deviceType?: SortOrderInput | SortOrder
    browser?: SortOrderInput | SortOrder
    operatingSystem?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requestId?: SortOrder
    request?: VisaRequestOrderByWithRelationInput
  }

  export type RequestContextWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    requestId?: string
    AND?: RequestContextWhereInput | RequestContextWhereInput[]
    OR?: RequestContextWhereInput[]
    NOT?: RequestContextWhereInput | RequestContextWhereInput[]
    channel?: StringNullableFilter<"RequestContext"> | string | null
    userAgent?: StringNullableFilter<"RequestContext"> | string | null
    deviceType?: StringNullableFilter<"RequestContext"> | string | null
    browser?: StringNullableFilter<"RequestContext"> | string | null
    operatingSystem?: StringNullableFilter<"RequestContext"> | string | null
    createdAt?: DateTimeFilter<"RequestContext"> | Date | string
    updatedAt?: DateTimeFilter<"RequestContext"> | Date | string
    request?: XOR<VisaRequestScalarRelationFilter, VisaRequestWhereInput>
  }, "id" | "requestId">

  export type RequestContextOrderByWithAggregationInput = {
    id?: SortOrder
    channel?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    deviceType?: SortOrderInput | SortOrder
    browser?: SortOrderInput | SortOrder
    operatingSystem?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requestId?: SortOrder
    _count?: RequestContextCountOrderByAggregateInput
    _max?: RequestContextMaxOrderByAggregateInput
    _min?: RequestContextMinOrderByAggregateInput
  }

  export type RequestContextScalarWhereWithAggregatesInput = {
    AND?: RequestContextScalarWhereWithAggregatesInput | RequestContextScalarWhereWithAggregatesInput[]
    OR?: RequestContextScalarWhereWithAggregatesInput[]
    NOT?: RequestContextScalarWhereWithAggregatesInput | RequestContextScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RequestContext"> | string
    channel?: StringNullableWithAggregatesFilter<"RequestContext"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"RequestContext"> | string | null
    deviceType?: StringNullableWithAggregatesFilter<"RequestContext"> | string | null
    browser?: StringNullableWithAggregatesFilter<"RequestContext"> | string | null
    operatingSystem?: StringNullableWithAggregatesFilter<"RequestContext"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RequestContext"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RequestContext"> | Date | string
    requestId?: StringWithAggregatesFilter<"RequestContext"> | string
  }

  export type StatusHistoryEventWhereInput = {
    AND?: StatusHistoryEventWhereInput | StatusHistoryEventWhereInput[]
    OR?: StatusHistoryEventWhereInput[]
    NOT?: StatusHistoryEventWhereInput | StatusHistoryEventWhereInput[]
    id?: StringFilter<"StatusHistoryEvent"> | string
    fromStatus?: StringNullableFilter<"StatusHistoryEvent"> | string | null
    toStatus?: StringFilter<"StatusHistoryEvent"> | string
    note?: StringFilter<"StatusHistoryEvent"> | string
    createdAt?: DateTimeFilter<"StatusHistoryEvent"> | Date | string
    requestId?: StringFilter<"StatusHistoryEvent"> | string
    request?: XOR<VisaRequestScalarRelationFilter, VisaRequestWhereInput>
  }

  export type StatusHistoryEventOrderByWithRelationInput = {
    id?: SortOrder
    fromStatus?: SortOrderInput | SortOrder
    toStatus?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    requestId?: SortOrder
    request?: VisaRequestOrderByWithRelationInput
  }

  export type StatusHistoryEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StatusHistoryEventWhereInput | StatusHistoryEventWhereInput[]
    OR?: StatusHistoryEventWhereInput[]
    NOT?: StatusHistoryEventWhereInput | StatusHistoryEventWhereInput[]
    fromStatus?: StringNullableFilter<"StatusHistoryEvent"> | string | null
    toStatus?: StringFilter<"StatusHistoryEvent"> | string
    note?: StringFilter<"StatusHistoryEvent"> | string
    createdAt?: DateTimeFilter<"StatusHistoryEvent"> | Date | string
    requestId?: StringFilter<"StatusHistoryEvent"> | string
    request?: XOR<VisaRequestScalarRelationFilter, VisaRequestWhereInput>
  }, "id">

  export type StatusHistoryEventOrderByWithAggregationInput = {
    id?: SortOrder
    fromStatus?: SortOrderInput | SortOrder
    toStatus?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    requestId?: SortOrder
    _count?: StatusHistoryEventCountOrderByAggregateInput
    _max?: StatusHistoryEventMaxOrderByAggregateInput
    _min?: StatusHistoryEventMinOrderByAggregateInput
  }

  export type StatusHistoryEventScalarWhereWithAggregatesInput = {
    AND?: StatusHistoryEventScalarWhereWithAggregatesInput | StatusHistoryEventScalarWhereWithAggregatesInput[]
    OR?: StatusHistoryEventScalarWhereWithAggregatesInput[]
    NOT?: StatusHistoryEventScalarWhereWithAggregatesInput | StatusHistoryEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StatusHistoryEvent"> | string
    fromStatus?: StringNullableWithAggregatesFilter<"StatusHistoryEvent"> | string | null
    toStatus?: StringWithAggregatesFilter<"StatusHistoryEvent"> | string
    note?: StringWithAggregatesFilter<"StatusHistoryEvent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StatusHistoryEvent"> | Date | string
    requestId?: StringWithAggregatesFilter<"StatusHistoryEvent"> | string
  }

  export type AdminCredentialWhereInput = {
    AND?: AdminCredentialWhereInput | AdminCredentialWhereInput[]
    OR?: AdminCredentialWhereInput[]
    NOT?: AdminCredentialWhereInput | AdminCredentialWhereInput[]
    id?: StringFilter<"AdminCredential"> | string
    username?: StringFilter<"AdminCredential"> | string
    passwordHash?: StringFilter<"AdminCredential"> | string
    salt?: StringFilter<"AdminCredential"> | string
    createdAt?: DateTimeFilter<"AdminCredential"> | Date | string
    updatedAt?: DateTimeFilter<"AdminCredential"> | Date | string
  }

  export type AdminCredentialOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    salt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminCredentialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: AdminCredentialWhereInput | AdminCredentialWhereInput[]
    OR?: AdminCredentialWhereInput[]
    NOT?: AdminCredentialWhereInput | AdminCredentialWhereInput[]
    passwordHash?: StringFilter<"AdminCredential"> | string
    salt?: StringFilter<"AdminCredential"> | string
    createdAt?: DateTimeFilter<"AdminCredential"> | Date | string
    updatedAt?: DateTimeFilter<"AdminCredential"> | Date | string
  }, "id" | "username">

  export type AdminCredentialOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    salt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCredentialCountOrderByAggregateInput
    _max?: AdminCredentialMaxOrderByAggregateInput
    _min?: AdminCredentialMinOrderByAggregateInput
  }

  export type AdminCredentialScalarWhereWithAggregatesInput = {
    AND?: AdminCredentialScalarWhereWithAggregatesInput | AdminCredentialScalarWhereWithAggregatesInput[]
    OR?: AdminCredentialScalarWhereWithAggregatesInput[]
    NOT?: AdminCredentialScalarWhereWithAggregatesInput | AdminCredentialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminCredential"> | string
    username?: StringWithAggregatesFilter<"AdminCredential"> | string
    passwordHash?: StringWithAggregatesFilter<"AdminCredential"> | string
    salt?: StringWithAggregatesFilter<"AdminCredential"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AdminCredential"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminCredential"> | Date | string
  }

  export type CountryCreateInput = {
    id?: string
    code: string
    nameAr: string
    nameEn: string
    flag: string
    visaType: string
    accent: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: VisaRequestCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateInput = {
    id?: string
    code: string
    nameAr: string
    nameEn: string
    flag: string
    visaType: string
    accent: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: VisaRequestUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    visaType?: StringFieldUpdateOperationsInput | string
    accent?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: VisaRequestUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    visaType?: StringFieldUpdateOperationsInput | string
    accent?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: VisaRequestUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryCreateManyInput = {
    id?: string
    code: string
    nameAr: string
    nameEn: string
    flag: string
    visaType: string
    accent: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CountryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    visaType?: StringFieldUpdateOperationsInput | string
    accent?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    visaType?: StringFieldUpdateOperationsInput | string
    accent?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisaRequestCreateInput = {
    id?: string
    referenceCode: string
    fullName: string
    email: string
    phone: string
    passportNumber: string
    visaType: string
    issuingCountry?: string | null
    passportExpiryDate?: string | null
    passportDocumentName?: string | null
    personalPhotoName?: string | null
    travelDate?: string | null
    status?: $Enums.VisaRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    country: CountryCreateNestedOneWithoutRequestsInput
    requestContext?: RequestContextCreateNestedOneWithoutRequestInput
    applicants?: VisaApplicantCreateNestedManyWithoutRequestInput
    statusHistory?: StatusHistoryEventCreateNestedManyWithoutRequestInput
  }

  export type VisaRequestUncheckedCreateInput = {
    id?: string
    referenceCode: string
    fullName: string
    email: string
    phone: string
    passportNumber: string
    visaType: string
    issuingCountry?: string | null
    passportExpiryDate?: string | null
    passportDocumentName?: string | null
    personalPhotoName?: string | null
    travelDate?: string | null
    status?: $Enums.VisaRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    countryId: string
    requestContext?: RequestContextUncheckedCreateNestedOneWithoutRequestInput
    applicants?: VisaApplicantUncheckedCreateNestedManyWithoutRequestInput
    statusHistory?: StatusHistoryEventUncheckedCreateNestedManyWithoutRequestInput
  }

  export type VisaRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passportNumber?: StringFieldUpdateOperationsInput | string
    visaType?: StringFieldUpdateOperationsInput | string
    issuingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    passportExpiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    passportDocumentName?: NullableStringFieldUpdateOperationsInput | string | null
    personalPhotoName?: NullableStringFieldUpdateOperationsInput | string | null
    travelDate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVisaRequestStatusFieldUpdateOperationsInput | $Enums.VisaRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutRequestsNestedInput
    requestContext?: RequestContextUpdateOneWithoutRequestNestedInput
    applicants?: VisaApplicantUpdateManyWithoutRequestNestedInput
    statusHistory?: StatusHistoryEventUpdateManyWithoutRequestNestedInput
  }

  export type VisaRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passportNumber?: StringFieldUpdateOperationsInput | string
    visaType?: StringFieldUpdateOperationsInput | string
    issuingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    passportExpiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    passportDocumentName?: NullableStringFieldUpdateOperationsInput | string | null
    personalPhotoName?: NullableStringFieldUpdateOperationsInput | string | null
    travelDate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVisaRequestStatusFieldUpdateOperationsInput | $Enums.VisaRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    countryId?: StringFieldUpdateOperationsInput | string
    requestContext?: RequestContextUncheckedUpdateOneWithoutRequestNestedInput
    applicants?: VisaApplicantUncheckedUpdateManyWithoutRequestNestedInput
    statusHistory?: StatusHistoryEventUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type VisaRequestCreateManyInput = {
    id?: string
    referenceCode: string
    fullName: string
    email: string
    phone: string
    passportNumber: string
    visaType: string
    issuingCountry?: string | null
    passportExpiryDate?: string | null
    passportDocumentName?: string | null
    personalPhotoName?: string | null
    travelDate?: string | null
    status?: $Enums.VisaRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    countryId: string
  }

  export type VisaRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passportNumber?: StringFieldUpdateOperationsInput | string
    visaType?: StringFieldUpdateOperationsInput | string
    issuingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    passportExpiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    passportDocumentName?: NullableStringFieldUpdateOperationsInput | string | null
    personalPhotoName?: NullableStringFieldUpdateOperationsInput | string | null
    travelDate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVisaRequestStatusFieldUpdateOperationsInput | $Enums.VisaRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisaRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passportNumber?: StringFieldUpdateOperationsInput | string
    visaType?: StringFieldUpdateOperationsInput | string
    issuingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    passportExpiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    passportDocumentName?: NullableStringFieldUpdateOperationsInput | string | null
    personalPhotoName?: NullableStringFieldUpdateOperationsInput | string | null
    travelDate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVisaRequestStatusFieldUpdateOperationsInput | $Enums.VisaRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    countryId?: StringFieldUpdateOperationsInput | string
  }

  export type VisaApplicantCreateInput = {
    id?: string
    fullName: string
    nationality: string
    passportNumber: string
    issuingCountry: string
    passportIssueDate: string
    passportExpiryDate: string
    passportDocumentName: string
    personalPhotoName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    request: VisaRequestCreateNestedOneWithoutApplicantsInput
  }

  export type VisaApplicantUncheckedCreateInput = {
    id?: string
    fullName: string
    nationality: string
    passportNumber: string
    issuingCountry: string
    passportIssueDate: string
    passportExpiryDate: string
    passportDocumentName: string
    personalPhotoName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requestId: string
  }

  export type VisaApplicantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    passportNumber?: StringFieldUpdateOperationsInput | string
    issuingCountry?: StringFieldUpdateOperationsInput | string
    passportIssueDate?: StringFieldUpdateOperationsInput | string
    passportExpiryDate?: StringFieldUpdateOperationsInput | string
    passportDocumentName?: StringFieldUpdateOperationsInput | string
    personalPhotoName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: VisaRequestUpdateOneRequiredWithoutApplicantsNestedInput
  }

  export type VisaApplicantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    passportNumber?: StringFieldUpdateOperationsInput | string
    issuingCountry?: StringFieldUpdateOperationsInput | string
    passportIssueDate?: StringFieldUpdateOperationsInput | string
    passportExpiryDate?: StringFieldUpdateOperationsInput | string
    passportDocumentName?: StringFieldUpdateOperationsInput | string
    personalPhotoName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestId?: StringFieldUpdateOperationsInput | string
  }

  export type VisaApplicantCreateManyInput = {
    id?: string
    fullName: string
    nationality: string
    passportNumber: string
    issuingCountry: string
    passportIssueDate: string
    passportExpiryDate: string
    passportDocumentName: string
    personalPhotoName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requestId: string
  }

  export type VisaApplicantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    passportNumber?: StringFieldUpdateOperationsInput | string
    issuingCountry?: StringFieldUpdateOperationsInput | string
    passportIssueDate?: StringFieldUpdateOperationsInput | string
    passportExpiryDate?: StringFieldUpdateOperationsInput | string
    passportDocumentName?: StringFieldUpdateOperationsInput | string
    personalPhotoName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisaApplicantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    passportNumber?: StringFieldUpdateOperationsInput | string
    issuingCountry?: StringFieldUpdateOperationsInput | string
    passportIssueDate?: StringFieldUpdateOperationsInput | string
    passportExpiryDate?: StringFieldUpdateOperationsInput | string
    passportDocumentName?: StringFieldUpdateOperationsInput | string
    personalPhotoName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestId?: StringFieldUpdateOperationsInput | string
  }

  export type RequestContextCreateInput = {
    id?: string
    channel?: string | null
    userAgent?: string | null
    deviceType?: string | null
    browser?: string | null
    operatingSystem?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    request: VisaRequestCreateNestedOneWithoutRequestContextInput
  }

  export type RequestContextUncheckedCreateInput = {
    id?: string
    channel?: string | null
    userAgent?: string | null
    deviceType?: string | null
    browser?: string | null
    operatingSystem?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requestId: string
  }

  export type RequestContextUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    operatingSystem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: VisaRequestUpdateOneRequiredWithoutRequestContextNestedInput
  }

  export type RequestContextUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    operatingSystem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestId?: StringFieldUpdateOperationsInput | string
  }

  export type RequestContextCreateManyInput = {
    id?: string
    channel?: string | null
    userAgent?: string | null
    deviceType?: string | null
    browser?: string | null
    operatingSystem?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requestId: string
  }

  export type RequestContextUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    operatingSystem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestContextUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    operatingSystem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestId?: StringFieldUpdateOperationsInput | string
  }

  export type StatusHistoryEventCreateInput = {
    id?: string
    fromStatus?: string | null
    toStatus: string
    note: string
    createdAt?: Date | string
    request: VisaRequestCreateNestedOneWithoutStatusHistoryInput
  }

  export type StatusHistoryEventUncheckedCreateInput = {
    id?: string
    fromStatus?: string | null
    toStatus: string
    note: string
    createdAt?: Date | string
    requestId: string
  }

  export type StatusHistoryEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableStringFieldUpdateOperationsInput | string | null
    toStatus?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: VisaRequestUpdateOneRequiredWithoutStatusHistoryNestedInput
  }

  export type StatusHistoryEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableStringFieldUpdateOperationsInput | string | null
    toStatus?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestId?: StringFieldUpdateOperationsInput | string
  }

  export type StatusHistoryEventCreateManyInput = {
    id?: string
    fromStatus?: string | null
    toStatus: string
    note: string
    createdAt?: Date | string
    requestId: string
  }

  export type StatusHistoryEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableStringFieldUpdateOperationsInput | string | null
    toStatus?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusHistoryEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableStringFieldUpdateOperationsInput | string | null
    toStatus?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestId?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCredentialCreateInput = {
    id?: string
    username: string
    passwordHash: string
    salt: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminCredentialUncheckedCreateInput = {
    id?: string
    username: string
    passwordHash: string
    salt: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminCredentialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCredentialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCredentialCreateManyInput = {
    id?: string
    username: string
    passwordHash: string
    salt: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminCredentialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCredentialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type VisaRequestListRelationFilter = {
    every?: VisaRequestWhereInput
    some?: VisaRequestWhereInput
    none?: VisaRequestWhereInput
  }

  export type VisaRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountryCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    nameAr?: SortOrder
    nameEn?: SortOrder
    flag?: SortOrder
    visaType?: SortOrder
    accent?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    nameAr?: SortOrder
    nameEn?: SortOrder
    flag?: SortOrder
    visaType?: SortOrder
    accent?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    nameAr?: SortOrder
    nameEn?: SortOrder
    flag?: SortOrder
    visaType?: SortOrder
    accent?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumVisaRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VisaRequestStatus | EnumVisaRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VisaRequestStatus[] | ListEnumVisaRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VisaRequestStatus[] | ListEnumVisaRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVisaRequestStatusFilter<$PrismaModel> | $Enums.VisaRequestStatus
  }

  export type CountryScalarRelationFilter = {
    is?: CountryWhereInput
    isNot?: CountryWhereInput
  }

  export type RequestContextNullableScalarRelationFilter = {
    is?: RequestContextWhereInput | null
    isNot?: RequestContextWhereInput | null
  }

  export type VisaApplicantListRelationFilter = {
    every?: VisaApplicantWhereInput
    some?: VisaApplicantWhereInput
    none?: VisaApplicantWhereInput
  }

  export type StatusHistoryEventListRelationFilter = {
    every?: StatusHistoryEventWhereInput
    some?: StatusHistoryEventWhereInput
    none?: StatusHistoryEventWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VisaApplicantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StatusHistoryEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VisaRequestCountOrderByAggregateInput = {
    id?: SortOrder
    referenceCode?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passportNumber?: SortOrder
    visaType?: SortOrder
    issuingCountry?: SortOrder
    passportExpiryDate?: SortOrder
    passportDocumentName?: SortOrder
    personalPhotoName?: SortOrder
    travelDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    countryId?: SortOrder
  }

  export type VisaRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    referenceCode?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passportNumber?: SortOrder
    visaType?: SortOrder
    issuingCountry?: SortOrder
    passportExpiryDate?: SortOrder
    passportDocumentName?: SortOrder
    personalPhotoName?: SortOrder
    travelDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    countryId?: SortOrder
  }

  export type VisaRequestMinOrderByAggregateInput = {
    id?: SortOrder
    referenceCode?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passportNumber?: SortOrder
    visaType?: SortOrder
    issuingCountry?: SortOrder
    passportExpiryDate?: SortOrder
    passportDocumentName?: SortOrder
    personalPhotoName?: SortOrder
    travelDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    countryId?: SortOrder
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

  export type EnumVisaRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VisaRequestStatus | EnumVisaRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VisaRequestStatus[] | ListEnumVisaRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VisaRequestStatus[] | ListEnumVisaRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVisaRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.VisaRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVisaRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumVisaRequestStatusFilter<$PrismaModel>
  }

  export type VisaRequestScalarRelationFilter = {
    is?: VisaRequestWhereInput
    isNot?: VisaRequestWhereInput
  }

  export type VisaApplicantCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    nationality?: SortOrder
    passportNumber?: SortOrder
    issuingCountry?: SortOrder
    passportIssueDate?: SortOrder
    passportExpiryDate?: SortOrder
    passportDocumentName?: SortOrder
    personalPhotoName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requestId?: SortOrder
  }

  export type VisaApplicantMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    nationality?: SortOrder
    passportNumber?: SortOrder
    issuingCountry?: SortOrder
    passportIssueDate?: SortOrder
    passportExpiryDate?: SortOrder
    passportDocumentName?: SortOrder
    personalPhotoName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requestId?: SortOrder
  }

  export type VisaApplicantMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    nationality?: SortOrder
    passportNumber?: SortOrder
    issuingCountry?: SortOrder
    passportIssueDate?: SortOrder
    passportExpiryDate?: SortOrder
    passportDocumentName?: SortOrder
    personalPhotoName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requestId?: SortOrder
  }

  export type RequestContextCountOrderByAggregateInput = {
    id?: SortOrder
    channel?: SortOrder
    userAgent?: SortOrder
    deviceType?: SortOrder
    browser?: SortOrder
    operatingSystem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requestId?: SortOrder
  }

  export type RequestContextMaxOrderByAggregateInput = {
    id?: SortOrder
    channel?: SortOrder
    userAgent?: SortOrder
    deviceType?: SortOrder
    browser?: SortOrder
    operatingSystem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requestId?: SortOrder
  }

  export type RequestContextMinOrderByAggregateInput = {
    id?: SortOrder
    channel?: SortOrder
    userAgent?: SortOrder
    deviceType?: SortOrder
    browser?: SortOrder
    operatingSystem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requestId?: SortOrder
  }

  export type StatusHistoryEventCountOrderByAggregateInput = {
    id?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    requestId?: SortOrder
  }

  export type StatusHistoryEventMaxOrderByAggregateInput = {
    id?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    requestId?: SortOrder
  }

  export type StatusHistoryEventMinOrderByAggregateInput = {
    id?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    requestId?: SortOrder
  }

  export type AdminCredentialCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    salt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminCredentialMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    salt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminCredentialMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    salt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisaRequestCreateNestedManyWithoutCountryInput = {
    create?: XOR<VisaRequestCreateWithoutCountryInput, VisaRequestUncheckedCreateWithoutCountryInput> | VisaRequestCreateWithoutCountryInput[] | VisaRequestUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: VisaRequestCreateOrConnectWithoutCountryInput | VisaRequestCreateOrConnectWithoutCountryInput[]
    createMany?: VisaRequestCreateManyCountryInputEnvelope
    connect?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
  }

  export type VisaRequestUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<VisaRequestCreateWithoutCountryInput, VisaRequestUncheckedCreateWithoutCountryInput> | VisaRequestCreateWithoutCountryInput[] | VisaRequestUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: VisaRequestCreateOrConnectWithoutCountryInput | VisaRequestCreateOrConnectWithoutCountryInput[]
    createMany?: VisaRequestCreateManyCountryInputEnvelope
    connect?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VisaRequestUpdateManyWithoutCountryNestedInput = {
    create?: XOR<VisaRequestCreateWithoutCountryInput, VisaRequestUncheckedCreateWithoutCountryInput> | VisaRequestCreateWithoutCountryInput[] | VisaRequestUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: VisaRequestCreateOrConnectWithoutCountryInput | VisaRequestCreateOrConnectWithoutCountryInput[]
    upsert?: VisaRequestUpsertWithWhereUniqueWithoutCountryInput | VisaRequestUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: VisaRequestCreateManyCountryInputEnvelope
    set?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
    disconnect?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
    delete?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
    connect?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
    update?: VisaRequestUpdateWithWhereUniqueWithoutCountryInput | VisaRequestUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: VisaRequestUpdateManyWithWhereWithoutCountryInput | VisaRequestUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: VisaRequestScalarWhereInput | VisaRequestScalarWhereInput[]
  }

  export type VisaRequestUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<VisaRequestCreateWithoutCountryInput, VisaRequestUncheckedCreateWithoutCountryInput> | VisaRequestCreateWithoutCountryInput[] | VisaRequestUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: VisaRequestCreateOrConnectWithoutCountryInput | VisaRequestCreateOrConnectWithoutCountryInput[]
    upsert?: VisaRequestUpsertWithWhereUniqueWithoutCountryInput | VisaRequestUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: VisaRequestCreateManyCountryInputEnvelope
    set?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
    disconnect?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
    delete?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
    connect?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
    update?: VisaRequestUpdateWithWhereUniqueWithoutCountryInput | VisaRequestUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: VisaRequestUpdateManyWithWhereWithoutCountryInput | VisaRequestUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: VisaRequestScalarWhereInput | VisaRequestScalarWhereInput[]
  }

  export type CountryCreateNestedOneWithoutRequestsInput = {
    create?: XOR<CountryCreateWithoutRequestsInput, CountryUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: CountryCreateOrConnectWithoutRequestsInput
    connect?: CountryWhereUniqueInput
  }

  export type RequestContextCreateNestedOneWithoutRequestInput = {
    create?: XOR<RequestContextCreateWithoutRequestInput, RequestContextUncheckedCreateWithoutRequestInput>
    connectOrCreate?: RequestContextCreateOrConnectWithoutRequestInput
    connect?: RequestContextWhereUniqueInput
  }

  export type VisaApplicantCreateNestedManyWithoutRequestInput = {
    create?: XOR<VisaApplicantCreateWithoutRequestInput, VisaApplicantUncheckedCreateWithoutRequestInput> | VisaApplicantCreateWithoutRequestInput[] | VisaApplicantUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: VisaApplicantCreateOrConnectWithoutRequestInput | VisaApplicantCreateOrConnectWithoutRequestInput[]
    createMany?: VisaApplicantCreateManyRequestInputEnvelope
    connect?: VisaApplicantWhereUniqueInput | VisaApplicantWhereUniqueInput[]
  }

  export type StatusHistoryEventCreateNestedManyWithoutRequestInput = {
    create?: XOR<StatusHistoryEventCreateWithoutRequestInput, StatusHistoryEventUncheckedCreateWithoutRequestInput> | StatusHistoryEventCreateWithoutRequestInput[] | StatusHistoryEventUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: StatusHistoryEventCreateOrConnectWithoutRequestInput | StatusHistoryEventCreateOrConnectWithoutRequestInput[]
    createMany?: StatusHistoryEventCreateManyRequestInputEnvelope
    connect?: StatusHistoryEventWhereUniqueInput | StatusHistoryEventWhereUniqueInput[]
  }

  export type RequestContextUncheckedCreateNestedOneWithoutRequestInput = {
    create?: XOR<RequestContextCreateWithoutRequestInput, RequestContextUncheckedCreateWithoutRequestInput>
    connectOrCreate?: RequestContextCreateOrConnectWithoutRequestInput
    connect?: RequestContextWhereUniqueInput
  }

  export type VisaApplicantUncheckedCreateNestedManyWithoutRequestInput = {
    create?: XOR<VisaApplicantCreateWithoutRequestInput, VisaApplicantUncheckedCreateWithoutRequestInput> | VisaApplicantCreateWithoutRequestInput[] | VisaApplicantUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: VisaApplicantCreateOrConnectWithoutRequestInput | VisaApplicantCreateOrConnectWithoutRequestInput[]
    createMany?: VisaApplicantCreateManyRequestInputEnvelope
    connect?: VisaApplicantWhereUniqueInput | VisaApplicantWhereUniqueInput[]
  }

  export type StatusHistoryEventUncheckedCreateNestedManyWithoutRequestInput = {
    create?: XOR<StatusHistoryEventCreateWithoutRequestInput, StatusHistoryEventUncheckedCreateWithoutRequestInput> | StatusHistoryEventCreateWithoutRequestInput[] | StatusHistoryEventUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: StatusHistoryEventCreateOrConnectWithoutRequestInput | StatusHistoryEventCreateOrConnectWithoutRequestInput[]
    createMany?: StatusHistoryEventCreateManyRequestInputEnvelope
    connect?: StatusHistoryEventWhereUniqueInput | StatusHistoryEventWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumVisaRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.VisaRequestStatus
  }

  export type CountryUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<CountryCreateWithoutRequestsInput, CountryUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: CountryCreateOrConnectWithoutRequestsInput
    upsert?: CountryUpsertWithoutRequestsInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutRequestsInput, CountryUpdateWithoutRequestsInput>, CountryUncheckedUpdateWithoutRequestsInput>
  }

  export type RequestContextUpdateOneWithoutRequestNestedInput = {
    create?: XOR<RequestContextCreateWithoutRequestInput, RequestContextUncheckedCreateWithoutRequestInput>
    connectOrCreate?: RequestContextCreateOrConnectWithoutRequestInput
    upsert?: RequestContextUpsertWithoutRequestInput
    disconnect?: RequestContextWhereInput | boolean
    delete?: RequestContextWhereInput | boolean
    connect?: RequestContextWhereUniqueInput
    update?: XOR<XOR<RequestContextUpdateToOneWithWhereWithoutRequestInput, RequestContextUpdateWithoutRequestInput>, RequestContextUncheckedUpdateWithoutRequestInput>
  }

  export type VisaApplicantUpdateManyWithoutRequestNestedInput = {
    create?: XOR<VisaApplicantCreateWithoutRequestInput, VisaApplicantUncheckedCreateWithoutRequestInput> | VisaApplicantCreateWithoutRequestInput[] | VisaApplicantUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: VisaApplicantCreateOrConnectWithoutRequestInput | VisaApplicantCreateOrConnectWithoutRequestInput[]
    upsert?: VisaApplicantUpsertWithWhereUniqueWithoutRequestInput | VisaApplicantUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: VisaApplicantCreateManyRequestInputEnvelope
    set?: VisaApplicantWhereUniqueInput | VisaApplicantWhereUniqueInput[]
    disconnect?: VisaApplicantWhereUniqueInput | VisaApplicantWhereUniqueInput[]
    delete?: VisaApplicantWhereUniqueInput | VisaApplicantWhereUniqueInput[]
    connect?: VisaApplicantWhereUniqueInput | VisaApplicantWhereUniqueInput[]
    update?: VisaApplicantUpdateWithWhereUniqueWithoutRequestInput | VisaApplicantUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: VisaApplicantUpdateManyWithWhereWithoutRequestInput | VisaApplicantUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: VisaApplicantScalarWhereInput | VisaApplicantScalarWhereInput[]
  }

  export type StatusHistoryEventUpdateManyWithoutRequestNestedInput = {
    create?: XOR<StatusHistoryEventCreateWithoutRequestInput, StatusHistoryEventUncheckedCreateWithoutRequestInput> | StatusHistoryEventCreateWithoutRequestInput[] | StatusHistoryEventUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: StatusHistoryEventCreateOrConnectWithoutRequestInput | StatusHistoryEventCreateOrConnectWithoutRequestInput[]
    upsert?: StatusHistoryEventUpsertWithWhereUniqueWithoutRequestInput | StatusHistoryEventUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: StatusHistoryEventCreateManyRequestInputEnvelope
    set?: StatusHistoryEventWhereUniqueInput | StatusHistoryEventWhereUniqueInput[]
    disconnect?: StatusHistoryEventWhereUniqueInput | StatusHistoryEventWhereUniqueInput[]
    delete?: StatusHistoryEventWhereUniqueInput | StatusHistoryEventWhereUniqueInput[]
    connect?: StatusHistoryEventWhereUniqueInput | StatusHistoryEventWhereUniqueInput[]
    update?: StatusHistoryEventUpdateWithWhereUniqueWithoutRequestInput | StatusHistoryEventUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: StatusHistoryEventUpdateManyWithWhereWithoutRequestInput | StatusHistoryEventUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: StatusHistoryEventScalarWhereInput | StatusHistoryEventScalarWhereInput[]
  }

  export type RequestContextUncheckedUpdateOneWithoutRequestNestedInput = {
    create?: XOR<RequestContextCreateWithoutRequestInput, RequestContextUncheckedCreateWithoutRequestInput>
    connectOrCreate?: RequestContextCreateOrConnectWithoutRequestInput
    upsert?: RequestContextUpsertWithoutRequestInput
    disconnect?: RequestContextWhereInput | boolean
    delete?: RequestContextWhereInput | boolean
    connect?: RequestContextWhereUniqueInput
    update?: XOR<XOR<RequestContextUpdateToOneWithWhereWithoutRequestInput, RequestContextUpdateWithoutRequestInput>, RequestContextUncheckedUpdateWithoutRequestInput>
  }

  export type VisaApplicantUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: XOR<VisaApplicantCreateWithoutRequestInput, VisaApplicantUncheckedCreateWithoutRequestInput> | VisaApplicantCreateWithoutRequestInput[] | VisaApplicantUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: VisaApplicantCreateOrConnectWithoutRequestInput | VisaApplicantCreateOrConnectWithoutRequestInput[]
    upsert?: VisaApplicantUpsertWithWhereUniqueWithoutRequestInput | VisaApplicantUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: VisaApplicantCreateManyRequestInputEnvelope
    set?: VisaApplicantWhereUniqueInput | VisaApplicantWhereUniqueInput[]
    disconnect?: VisaApplicantWhereUniqueInput | VisaApplicantWhereUniqueInput[]
    delete?: VisaApplicantWhereUniqueInput | VisaApplicantWhereUniqueInput[]
    connect?: VisaApplicantWhereUniqueInput | VisaApplicantWhereUniqueInput[]
    update?: VisaApplicantUpdateWithWhereUniqueWithoutRequestInput | VisaApplicantUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: VisaApplicantUpdateManyWithWhereWithoutRequestInput | VisaApplicantUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: VisaApplicantScalarWhereInput | VisaApplicantScalarWhereInput[]
  }

  export type StatusHistoryEventUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: XOR<StatusHistoryEventCreateWithoutRequestInput, StatusHistoryEventUncheckedCreateWithoutRequestInput> | StatusHistoryEventCreateWithoutRequestInput[] | StatusHistoryEventUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: StatusHistoryEventCreateOrConnectWithoutRequestInput | StatusHistoryEventCreateOrConnectWithoutRequestInput[]
    upsert?: StatusHistoryEventUpsertWithWhereUniqueWithoutRequestInput | StatusHistoryEventUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: StatusHistoryEventCreateManyRequestInputEnvelope
    set?: StatusHistoryEventWhereUniqueInput | StatusHistoryEventWhereUniqueInput[]
    disconnect?: StatusHistoryEventWhereUniqueInput | StatusHistoryEventWhereUniqueInput[]
    delete?: StatusHistoryEventWhereUniqueInput | StatusHistoryEventWhereUniqueInput[]
    connect?: StatusHistoryEventWhereUniqueInput | StatusHistoryEventWhereUniqueInput[]
    update?: StatusHistoryEventUpdateWithWhereUniqueWithoutRequestInput | StatusHistoryEventUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: StatusHistoryEventUpdateManyWithWhereWithoutRequestInput | StatusHistoryEventUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: StatusHistoryEventScalarWhereInput | StatusHistoryEventScalarWhereInput[]
  }

  export type VisaRequestCreateNestedOneWithoutApplicantsInput = {
    create?: XOR<VisaRequestCreateWithoutApplicantsInput, VisaRequestUncheckedCreateWithoutApplicantsInput>
    connectOrCreate?: VisaRequestCreateOrConnectWithoutApplicantsInput
    connect?: VisaRequestWhereUniqueInput
  }

  export type VisaRequestUpdateOneRequiredWithoutApplicantsNestedInput = {
    create?: XOR<VisaRequestCreateWithoutApplicantsInput, VisaRequestUncheckedCreateWithoutApplicantsInput>
    connectOrCreate?: VisaRequestCreateOrConnectWithoutApplicantsInput
    upsert?: VisaRequestUpsertWithoutApplicantsInput
    connect?: VisaRequestWhereUniqueInput
    update?: XOR<XOR<VisaRequestUpdateToOneWithWhereWithoutApplicantsInput, VisaRequestUpdateWithoutApplicantsInput>, VisaRequestUncheckedUpdateWithoutApplicantsInput>
  }

  export type VisaRequestCreateNestedOneWithoutRequestContextInput = {
    create?: XOR<VisaRequestCreateWithoutRequestContextInput, VisaRequestUncheckedCreateWithoutRequestContextInput>
    connectOrCreate?: VisaRequestCreateOrConnectWithoutRequestContextInput
    connect?: VisaRequestWhereUniqueInput
  }

  export type VisaRequestUpdateOneRequiredWithoutRequestContextNestedInput = {
    create?: XOR<VisaRequestCreateWithoutRequestContextInput, VisaRequestUncheckedCreateWithoutRequestContextInput>
    connectOrCreate?: VisaRequestCreateOrConnectWithoutRequestContextInput
    upsert?: VisaRequestUpsertWithoutRequestContextInput
    connect?: VisaRequestWhereUniqueInput
    update?: XOR<XOR<VisaRequestUpdateToOneWithWhereWithoutRequestContextInput, VisaRequestUpdateWithoutRequestContextInput>, VisaRequestUncheckedUpdateWithoutRequestContextInput>
  }

  export type VisaRequestCreateNestedOneWithoutStatusHistoryInput = {
    create?: XOR<VisaRequestCreateWithoutStatusHistoryInput, VisaRequestUncheckedCreateWithoutStatusHistoryInput>
    connectOrCreate?: VisaRequestCreateOrConnectWithoutStatusHistoryInput
    connect?: VisaRequestWhereUniqueInput
  }

  export type VisaRequestUpdateOneRequiredWithoutStatusHistoryNestedInput = {
    create?: XOR<VisaRequestCreateWithoutStatusHistoryInput, VisaRequestUncheckedCreateWithoutStatusHistoryInput>
    connectOrCreate?: VisaRequestCreateOrConnectWithoutStatusHistoryInput
    upsert?: VisaRequestUpsertWithoutStatusHistoryInput
    connect?: VisaRequestWhereUniqueInput
    update?: XOR<XOR<VisaRequestUpdateToOneWithWhereWithoutStatusHistoryInput, VisaRequestUpdateWithoutStatusHistoryInput>, VisaRequestUncheckedUpdateWithoutStatusHistoryInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumVisaRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VisaRequestStatus | EnumVisaRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VisaRequestStatus[] | ListEnumVisaRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VisaRequestStatus[] | ListEnumVisaRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVisaRequestStatusFilter<$PrismaModel> | $Enums.VisaRequestStatus
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

  export type NestedEnumVisaRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VisaRequestStatus | EnumVisaRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VisaRequestStatus[] | ListEnumVisaRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VisaRequestStatus[] | ListEnumVisaRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVisaRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.VisaRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVisaRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumVisaRequestStatusFilter<$PrismaModel>
  }

  export type VisaRequestCreateWithoutCountryInput = {
    id?: string
    referenceCode: string
    fullName: string
    email: string
    phone: string
    passportNumber: string
    visaType: string
    issuingCountry?: string | null
    passportExpiryDate?: string | null
    passportDocumentName?: string | null
    personalPhotoName?: string | null
    travelDate?: string | null
    status?: $Enums.VisaRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    requestContext?: RequestContextCreateNestedOneWithoutRequestInput
    applicants?: VisaApplicantCreateNestedManyWithoutRequestInput
    statusHistory?: StatusHistoryEventCreateNestedManyWithoutRequestInput
  }

  export type VisaRequestUncheckedCreateWithoutCountryInput = {
    id?: string
    referenceCode: string
    fullName: string
    email: string
    phone: string
    passportNumber: string
    visaType: string
    issuingCountry?: string | null
    passportExpiryDate?: string | null
    passportDocumentName?: string | null
    personalPhotoName?: string | null
    travelDate?: string | null
    status?: $Enums.VisaRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    requestContext?: RequestContextUncheckedCreateNestedOneWithoutRequestInput
    applicants?: VisaApplicantUncheckedCreateNestedManyWithoutRequestInput
    statusHistory?: StatusHistoryEventUncheckedCreateNestedManyWithoutRequestInput
  }

  export type VisaRequestCreateOrConnectWithoutCountryInput = {
    where: VisaRequestWhereUniqueInput
    create: XOR<VisaRequestCreateWithoutCountryInput, VisaRequestUncheckedCreateWithoutCountryInput>
  }

  export type VisaRequestCreateManyCountryInputEnvelope = {
    data: VisaRequestCreateManyCountryInput | VisaRequestCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type VisaRequestUpsertWithWhereUniqueWithoutCountryInput = {
    where: VisaRequestWhereUniqueInput
    update: XOR<VisaRequestUpdateWithoutCountryInput, VisaRequestUncheckedUpdateWithoutCountryInput>
    create: XOR<VisaRequestCreateWithoutCountryInput, VisaRequestUncheckedCreateWithoutCountryInput>
  }

  export type VisaRequestUpdateWithWhereUniqueWithoutCountryInput = {
    where: VisaRequestWhereUniqueInput
    data: XOR<VisaRequestUpdateWithoutCountryInput, VisaRequestUncheckedUpdateWithoutCountryInput>
  }

  export type VisaRequestUpdateManyWithWhereWithoutCountryInput = {
    where: VisaRequestScalarWhereInput
    data: XOR<VisaRequestUpdateManyMutationInput, VisaRequestUncheckedUpdateManyWithoutCountryInput>
  }

  export type VisaRequestScalarWhereInput = {
    AND?: VisaRequestScalarWhereInput | VisaRequestScalarWhereInput[]
    OR?: VisaRequestScalarWhereInput[]
    NOT?: VisaRequestScalarWhereInput | VisaRequestScalarWhereInput[]
    id?: StringFilter<"VisaRequest"> | string
    referenceCode?: StringFilter<"VisaRequest"> | string
    fullName?: StringFilter<"VisaRequest"> | string
    email?: StringFilter<"VisaRequest"> | string
    phone?: StringFilter<"VisaRequest"> | string
    passportNumber?: StringFilter<"VisaRequest"> | string
    visaType?: StringFilter<"VisaRequest"> | string
    issuingCountry?: StringNullableFilter<"VisaRequest"> | string | null
    passportExpiryDate?: StringNullableFilter<"VisaRequest"> | string | null
    passportDocumentName?: StringNullableFilter<"VisaRequest"> | string | null
    personalPhotoName?: StringNullableFilter<"VisaRequest"> | string | null
    travelDate?: StringNullableFilter<"VisaRequest"> | string | null
    status?: EnumVisaRequestStatusFilter<"VisaRequest"> | $Enums.VisaRequestStatus
    createdAt?: DateTimeFilter<"VisaRequest"> | Date | string
    updatedAt?: DateTimeFilter<"VisaRequest"> | Date | string
    countryId?: StringFilter<"VisaRequest"> | string
  }

  export type CountryCreateWithoutRequestsInput = {
    id?: string
    code: string
    nameAr: string
    nameEn: string
    flag: string
    visaType: string
    accent: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CountryUncheckedCreateWithoutRequestsInput = {
    id?: string
    code: string
    nameAr: string
    nameEn: string
    flag: string
    visaType: string
    accent: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CountryCreateOrConnectWithoutRequestsInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutRequestsInput, CountryUncheckedCreateWithoutRequestsInput>
  }

  export type RequestContextCreateWithoutRequestInput = {
    id?: string
    channel?: string | null
    userAgent?: string | null
    deviceType?: string | null
    browser?: string | null
    operatingSystem?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequestContextUncheckedCreateWithoutRequestInput = {
    id?: string
    channel?: string | null
    userAgent?: string | null
    deviceType?: string | null
    browser?: string | null
    operatingSystem?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequestContextCreateOrConnectWithoutRequestInput = {
    where: RequestContextWhereUniqueInput
    create: XOR<RequestContextCreateWithoutRequestInput, RequestContextUncheckedCreateWithoutRequestInput>
  }

  export type VisaApplicantCreateWithoutRequestInput = {
    id?: string
    fullName: string
    nationality: string
    passportNumber: string
    issuingCountry: string
    passportIssueDate: string
    passportExpiryDate: string
    passportDocumentName: string
    personalPhotoName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisaApplicantUncheckedCreateWithoutRequestInput = {
    id?: string
    fullName: string
    nationality: string
    passportNumber: string
    issuingCountry: string
    passportIssueDate: string
    passportExpiryDate: string
    passportDocumentName: string
    personalPhotoName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisaApplicantCreateOrConnectWithoutRequestInput = {
    where: VisaApplicantWhereUniqueInput
    create: XOR<VisaApplicantCreateWithoutRequestInput, VisaApplicantUncheckedCreateWithoutRequestInput>
  }

  export type VisaApplicantCreateManyRequestInputEnvelope = {
    data: VisaApplicantCreateManyRequestInput | VisaApplicantCreateManyRequestInput[]
    skipDuplicates?: boolean
  }

  export type StatusHistoryEventCreateWithoutRequestInput = {
    id?: string
    fromStatus?: string | null
    toStatus: string
    note: string
    createdAt?: Date | string
  }

  export type StatusHistoryEventUncheckedCreateWithoutRequestInput = {
    id?: string
    fromStatus?: string | null
    toStatus: string
    note: string
    createdAt?: Date | string
  }

  export type StatusHistoryEventCreateOrConnectWithoutRequestInput = {
    where: StatusHistoryEventWhereUniqueInput
    create: XOR<StatusHistoryEventCreateWithoutRequestInput, StatusHistoryEventUncheckedCreateWithoutRequestInput>
  }

  export type StatusHistoryEventCreateManyRequestInputEnvelope = {
    data: StatusHistoryEventCreateManyRequestInput | StatusHistoryEventCreateManyRequestInput[]
    skipDuplicates?: boolean
  }

  export type CountryUpsertWithoutRequestsInput = {
    update: XOR<CountryUpdateWithoutRequestsInput, CountryUncheckedUpdateWithoutRequestsInput>
    create: XOR<CountryCreateWithoutRequestsInput, CountryUncheckedCreateWithoutRequestsInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutRequestsInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutRequestsInput, CountryUncheckedUpdateWithoutRequestsInput>
  }

  export type CountryUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    visaType?: StringFieldUpdateOperationsInput | string
    accent?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountryUncheckedUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    visaType?: StringFieldUpdateOperationsInput | string
    accent?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestContextUpsertWithoutRequestInput = {
    update: XOR<RequestContextUpdateWithoutRequestInput, RequestContextUncheckedUpdateWithoutRequestInput>
    create: XOR<RequestContextCreateWithoutRequestInput, RequestContextUncheckedCreateWithoutRequestInput>
    where?: RequestContextWhereInput
  }

  export type RequestContextUpdateToOneWithWhereWithoutRequestInput = {
    where?: RequestContextWhereInput
    data: XOR<RequestContextUpdateWithoutRequestInput, RequestContextUncheckedUpdateWithoutRequestInput>
  }

  export type RequestContextUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    operatingSystem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestContextUncheckedUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    operatingSystem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisaApplicantUpsertWithWhereUniqueWithoutRequestInput = {
    where: VisaApplicantWhereUniqueInput
    update: XOR<VisaApplicantUpdateWithoutRequestInput, VisaApplicantUncheckedUpdateWithoutRequestInput>
    create: XOR<VisaApplicantCreateWithoutRequestInput, VisaApplicantUncheckedCreateWithoutRequestInput>
  }

  export type VisaApplicantUpdateWithWhereUniqueWithoutRequestInput = {
    where: VisaApplicantWhereUniqueInput
    data: XOR<VisaApplicantUpdateWithoutRequestInput, VisaApplicantUncheckedUpdateWithoutRequestInput>
  }

  export type VisaApplicantUpdateManyWithWhereWithoutRequestInput = {
    where: VisaApplicantScalarWhereInput
    data: XOR<VisaApplicantUpdateManyMutationInput, VisaApplicantUncheckedUpdateManyWithoutRequestInput>
  }

  export type VisaApplicantScalarWhereInput = {
    AND?: VisaApplicantScalarWhereInput | VisaApplicantScalarWhereInput[]
    OR?: VisaApplicantScalarWhereInput[]
    NOT?: VisaApplicantScalarWhereInput | VisaApplicantScalarWhereInput[]
    id?: StringFilter<"VisaApplicant"> | string
    fullName?: StringFilter<"VisaApplicant"> | string
    nationality?: StringFilter<"VisaApplicant"> | string
    passportNumber?: StringFilter<"VisaApplicant"> | string
    issuingCountry?: StringFilter<"VisaApplicant"> | string
    passportIssueDate?: StringFilter<"VisaApplicant"> | string
    passportExpiryDate?: StringFilter<"VisaApplicant"> | string
    passportDocumentName?: StringFilter<"VisaApplicant"> | string
    personalPhotoName?: StringFilter<"VisaApplicant"> | string
    createdAt?: DateTimeFilter<"VisaApplicant"> | Date | string
    updatedAt?: DateTimeFilter<"VisaApplicant"> | Date | string
    requestId?: StringFilter<"VisaApplicant"> | string
  }

  export type StatusHistoryEventUpsertWithWhereUniqueWithoutRequestInput = {
    where: StatusHistoryEventWhereUniqueInput
    update: XOR<StatusHistoryEventUpdateWithoutRequestInput, StatusHistoryEventUncheckedUpdateWithoutRequestInput>
    create: XOR<StatusHistoryEventCreateWithoutRequestInput, StatusHistoryEventUncheckedCreateWithoutRequestInput>
  }

  export type StatusHistoryEventUpdateWithWhereUniqueWithoutRequestInput = {
    where: StatusHistoryEventWhereUniqueInput
    data: XOR<StatusHistoryEventUpdateWithoutRequestInput, StatusHistoryEventUncheckedUpdateWithoutRequestInput>
  }

  export type StatusHistoryEventUpdateManyWithWhereWithoutRequestInput = {
    where: StatusHistoryEventScalarWhereInput
    data: XOR<StatusHistoryEventUpdateManyMutationInput, StatusHistoryEventUncheckedUpdateManyWithoutRequestInput>
  }

  export type StatusHistoryEventScalarWhereInput = {
    AND?: StatusHistoryEventScalarWhereInput | StatusHistoryEventScalarWhereInput[]
    OR?: StatusHistoryEventScalarWhereInput[]
    NOT?: StatusHistoryEventScalarWhereInput | StatusHistoryEventScalarWhereInput[]
    id?: StringFilter<"StatusHistoryEvent"> | string
    fromStatus?: StringNullableFilter<"StatusHistoryEvent"> | string | null
    toStatus?: StringFilter<"StatusHistoryEvent"> | string
    note?: StringFilter<"StatusHistoryEvent"> | string
    createdAt?: DateTimeFilter<"StatusHistoryEvent"> | Date | string
    requestId?: StringFilter<"StatusHistoryEvent"> | string
  }

  export type VisaRequestCreateWithoutApplicantsInput = {
    id?: string
    referenceCode: string
    fullName: string
    email: string
    phone: string
    passportNumber: string
    visaType: string
    issuingCountry?: string | null
    passportExpiryDate?: string | null
    passportDocumentName?: string | null
    personalPhotoName?: string | null
    travelDate?: string | null
    status?: $Enums.VisaRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    country: CountryCreateNestedOneWithoutRequestsInput
    requestContext?: RequestContextCreateNestedOneWithoutRequestInput
    statusHistory?: StatusHistoryEventCreateNestedManyWithoutRequestInput
  }

  export type VisaRequestUncheckedCreateWithoutApplicantsInput = {
    id?: string
    referenceCode: string
    fullName: string
    email: string
    phone: string
    passportNumber: string
    visaType: string
    issuingCountry?: string | null
    passportExpiryDate?: string | null
    passportDocumentName?: string | null
    personalPhotoName?: string | null
    travelDate?: string | null
    status?: $Enums.VisaRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    countryId: string
    requestContext?: RequestContextUncheckedCreateNestedOneWithoutRequestInput
    statusHistory?: StatusHistoryEventUncheckedCreateNestedManyWithoutRequestInput
  }

  export type VisaRequestCreateOrConnectWithoutApplicantsInput = {
    where: VisaRequestWhereUniqueInput
    create: XOR<VisaRequestCreateWithoutApplicantsInput, VisaRequestUncheckedCreateWithoutApplicantsInput>
  }

  export type VisaRequestUpsertWithoutApplicantsInput = {
    update: XOR<VisaRequestUpdateWithoutApplicantsInput, VisaRequestUncheckedUpdateWithoutApplicantsInput>
    create: XOR<VisaRequestCreateWithoutApplicantsInput, VisaRequestUncheckedCreateWithoutApplicantsInput>
    where?: VisaRequestWhereInput
  }

  export type VisaRequestUpdateToOneWithWhereWithoutApplicantsInput = {
    where?: VisaRequestWhereInput
    data: XOR<VisaRequestUpdateWithoutApplicantsInput, VisaRequestUncheckedUpdateWithoutApplicantsInput>
  }

  export type VisaRequestUpdateWithoutApplicantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passportNumber?: StringFieldUpdateOperationsInput | string
    visaType?: StringFieldUpdateOperationsInput | string
    issuingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    passportExpiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    passportDocumentName?: NullableStringFieldUpdateOperationsInput | string | null
    personalPhotoName?: NullableStringFieldUpdateOperationsInput | string | null
    travelDate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVisaRequestStatusFieldUpdateOperationsInput | $Enums.VisaRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutRequestsNestedInput
    requestContext?: RequestContextUpdateOneWithoutRequestNestedInput
    statusHistory?: StatusHistoryEventUpdateManyWithoutRequestNestedInput
  }

  export type VisaRequestUncheckedUpdateWithoutApplicantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passportNumber?: StringFieldUpdateOperationsInput | string
    visaType?: StringFieldUpdateOperationsInput | string
    issuingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    passportExpiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    passportDocumentName?: NullableStringFieldUpdateOperationsInput | string | null
    personalPhotoName?: NullableStringFieldUpdateOperationsInput | string | null
    travelDate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVisaRequestStatusFieldUpdateOperationsInput | $Enums.VisaRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    countryId?: StringFieldUpdateOperationsInput | string
    requestContext?: RequestContextUncheckedUpdateOneWithoutRequestNestedInput
    statusHistory?: StatusHistoryEventUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type VisaRequestCreateWithoutRequestContextInput = {
    id?: string
    referenceCode: string
    fullName: string
    email: string
    phone: string
    passportNumber: string
    visaType: string
    issuingCountry?: string | null
    passportExpiryDate?: string | null
    passportDocumentName?: string | null
    personalPhotoName?: string | null
    travelDate?: string | null
    status?: $Enums.VisaRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    country: CountryCreateNestedOneWithoutRequestsInput
    applicants?: VisaApplicantCreateNestedManyWithoutRequestInput
    statusHistory?: StatusHistoryEventCreateNestedManyWithoutRequestInput
  }

  export type VisaRequestUncheckedCreateWithoutRequestContextInput = {
    id?: string
    referenceCode: string
    fullName: string
    email: string
    phone: string
    passportNumber: string
    visaType: string
    issuingCountry?: string | null
    passportExpiryDate?: string | null
    passportDocumentName?: string | null
    personalPhotoName?: string | null
    travelDate?: string | null
    status?: $Enums.VisaRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    countryId: string
    applicants?: VisaApplicantUncheckedCreateNestedManyWithoutRequestInput
    statusHistory?: StatusHistoryEventUncheckedCreateNestedManyWithoutRequestInput
  }

  export type VisaRequestCreateOrConnectWithoutRequestContextInput = {
    where: VisaRequestWhereUniqueInput
    create: XOR<VisaRequestCreateWithoutRequestContextInput, VisaRequestUncheckedCreateWithoutRequestContextInput>
  }

  export type VisaRequestUpsertWithoutRequestContextInput = {
    update: XOR<VisaRequestUpdateWithoutRequestContextInput, VisaRequestUncheckedUpdateWithoutRequestContextInput>
    create: XOR<VisaRequestCreateWithoutRequestContextInput, VisaRequestUncheckedCreateWithoutRequestContextInput>
    where?: VisaRequestWhereInput
  }

  export type VisaRequestUpdateToOneWithWhereWithoutRequestContextInput = {
    where?: VisaRequestWhereInput
    data: XOR<VisaRequestUpdateWithoutRequestContextInput, VisaRequestUncheckedUpdateWithoutRequestContextInput>
  }

  export type VisaRequestUpdateWithoutRequestContextInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passportNumber?: StringFieldUpdateOperationsInput | string
    visaType?: StringFieldUpdateOperationsInput | string
    issuingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    passportExpiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    passportDocumentName?: NullableStringFieldUpdateOperationsInput | string | null
    personalPhotoName?: NullableStringFieldUpdateOperationsInput | string | null
    travelDate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVisaRequestStatusFieldUpdateOperationsInput | $Enums.VisaRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutRequestsNestedInput
    applicants?: VisaApplicantUpdateManyWithoutRequestNestedInput
    statusHistory?: StatusHistoryEventUpdateManyWithoutRequestNestedInput
  }

  export type VisaRequestUncheckedUpdateWithoutRequestContextInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passportNumber?: StringFieldUpdateOperationsInput | string
    visaType?: StringFieldUpdateOperationsInput | string
    issuingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    passportExpiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    passportDocumentName?: NullableStringFieldUpdateOperationsInput | string | null
    personalPhotoName?: NullableStringFieldUpdateOperationsInput | string | null
    travelDate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVisaRequestStatusFieldUpdateOperationsInput | $Enums.VisaRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    countryId?: StringFieldUpdateOperationsInput | string
    applicants?: VisaApplicantUncheckedUpdateManyWithoutRequestNestedInput
    statusHistory?: StatusHistoryEventUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type VisaRequestCreateWithoutStatusHistoryInput = {
    id?: string
    referenceCode: string
    fullName: string
    email: string
    phone: string
    passportNumber: string
    visaType: string
    issuingCountry?: string | null
    passportExpiryDate?: string | null
    passportDocumentName?: string | null
    personalPhotoName?: string | null
    travelDate?: string | null
    status?: $Enums.VisaRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    country: CountryCreateNestedOneWithoutRequestsInput
    requestContext?: RequestContextCreateNestedOneWithoutRequestInput
    applicants?: VisaApplicantCreateNestedManyWithoutRequestInput
  }

  export type VisaRequestUncheckedCreateWithoutStatusHistoryInput = {
    id?: string
    referenceCode: string
    fullName: string
    email: string
    phone: string
    passportNumber: string
    visaType: string
    issuingCountry?: string | null
    passportExpiryDate?: string | null
    passportDocumentName?: string | null
    personalPhotoName?: string | null
    travelDate?: string | null
    status?: $Enums.VisaRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    countryId: string
    requestContext?: RequestContextUncheckedCreateNestedOneWithoutRequestInput
    applicants?: VisaApplicantUncheckedCreateNestedManyWithoutRequestInput
  }

  export type VisaRequestCreateOrConnectWithoutStatusHistoryInput = {
    where: VisaRequestWhereUniqueInput
    create: XOR<VisaRequestCreateWithoutStatusHistoryInput, VisaRequestUncheckedCreateWithoutStatusHistoryInput>
  }

  export type VisaRequestUpsertWithoutStatusHistoryInput = {
    update: XOR<VisaRequestUpdateWithoutStatusHistoryInput, VisaRequestUncheckedUpdateWithoutStatusHistoryInput>
    create: XOR<VisaRequestCreateWithoutStatusHistoryInput, VisaRequestUncheckedCreateWithoutStatusHistoryInput>
    where?: VisaRequestWhereInput
  }

  export type VisaRequestUpdateToOneWithWhereWithoutStatusHistoryInput = {
    where?: VisaRequestWhereInput
    data: XOR<VisaRequestUpdateWithoutStatusHistoryInput, VisaRequestUncheckedUpdateWithoutStatusHistoryInput>
  }

  export type VisaRequestUpdateWithoutStatusHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passportNumber?: StringFieldUpdateOperationsInput | string
    visaType?: StringFieldUpdateOperationsInput | string
    issuingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    passportExpiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    passportDocumentName?: NullableStringFieldUpdateOperationsInput | string | null
    personalPhotoName?: NullableStringFieldUpdateOperationsInput | string | null
    travelDate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVisaRequestStatusFieldUpdateOperationsInput | $Enums.VisaRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutRequestsNestedInput
    requestContext?: RequestContextUpdateOneWithoutRequestNestedInput
    applicants?: VisaApplicantUpdateManyWithoutRequestNestedInput
  }

  export type VisaRequestUncheckedUpdateWithoutStatusHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passportNumber?: StringFieldUpdateOperationsInput | string
    visaType?: StringFieldUpdateOperationsInput | string
    issuingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    passportExpiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    passportDocumentName?: NullableStringFieldUpdateOperationsInput | string | null
    personalPhotoName?: NullableStringFieldUpdateOperationsInput | string | null
    travelDate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVisaRequestStatusFieldUpdateOperationsInput | $Enums.VisaRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    countryId?: StringFieldUpdateOperationsInput | string
    requestContext?: RequestContextUncheckedUpdateOneWithoutRequestNestedInput
    applicants?: VisaApplicantUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type VisaRequestCreateManyCountryInput = {
    id?: string
    referenceCode: string
    fullName: string
    email: string
    phone: string
    passportNumber: string
    visaType: string
    issuingCountry?: string | null
    passportExpiryDate?: string | null
    passportDocumentName?: string | null
    personalPhotoName?: string | null
    travelDate?: string | null
    status?: $Enums.VisaRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisaRequestUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passportNumber?: StringFieldUpdateOperationsInput | string
    visaType?: StringFieldUpdateOperationsInput | string
    issuingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    passportExpiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    passportDocumentName?: NullableStringFieldUpdateOperationsInput | string | null
    personalPhotoName?: NullableStringFieldUpdateOperationsInput | string | null
    travelDate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVisaRequestStatusFieldUpdateOperationsInput | $Enums.VisaRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestContext?: RequestContextUpdateOneWithoutRequestNestedInput
    applicants?: VisaApplicantUpdateManyWithoutRequestNestedInput
    statusHistory?: StatusHistoryEventUpdateManyWithoutRequestNestedInput
  }

  export type VisaRequestUncheckedUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passportNumber?: StringFieldUpdateOperationsInput | string
    visaType?: StringFieldUpdateOperationsInput | string
    issuingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    passportExpiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    passportDocumentName?: NullableStringFieldUpdateOperationsInput | string | null
    personalPhotoName?: NullableStringFieldUpdateOperationsInput | string | null
    travelDate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVisaRequestStatusFieldUpdateOperationsInput | $Enums.VisaRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestContext?: RequestContextUncheckedUpdateOneWithoutRequestNestedInput
    applicants?: VisaApplicantUncheckedUpdateManyWithoutRequestNestedInput
    statusHistory?: StatusHistoryEventUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type VisaRequestUncheckedUpdateManyWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passportNumber?: StringFieldUpdateOperationsInput | string
    visaType?: StringFieldUpdateOperationsInput | string
    issuingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    passportExpiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    passportDocumentName?: NullableStringFieldUpdateOperationsInput | string | null
    personalPhotoName?: NullableStringFieldUpdateOperationsInput | string | null
    travelDate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVisaRequestStatusFieldUpdateOperationsInput | $Enums.VisaRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisaApplicantCreateManyRequestInput = {
    id?: string
    fullName: string
    nationality: string
    passportNumber: string
    issuingCountry: string
    passportIssueDate: string
    passportExpiryDate: string
    passportDocumentName: string
    personalPhotoName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StatusHistoryEventCreateManyRequestInput = {
    id?: string
    fromStatus?: string | null
    toStatus: string
    note: string
    createdAt?: Date | string
  }

  export type VisaApplicantUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    passportNumber?: StringFieldUpdateOperationsInput | string
    issuingCountry?: StringFieldUpdateOperationsInput | string
    passportIssueDate?: StringFieldUpdateOperationsInput | string
    passportExpiryDate?: StringFieldUpdateOperationsInput | string
    passportDocumentName?: StringFieldUpdateOperationsInput | string
    personalPhotoName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisaApplicantUncheckedUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    passportNumber?: StringFieldUpdateOperationsInput | string
    issuingCountry?: StringFieldUpdateOperationsInput | string
    passportIssueDate?: StringFieldUpdateOperationsInput | string
    passportExpiryDate?: StringFieldUpdateOperationsInput | string
    passportDocumentName?: StringFieldUpdateOperationsInput | string
    personalPhotoName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisaApplicantUncheckedUpdateManyWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    passportNumber?: StringFieldUpdateOperationsInput | string
    issuingCountry?: StringFieldUpdateOperationsInput | string
    passportIssueDate?: StringFieldUpdateOperationsInput | string
    passportExpiryDate?: StringFieldUpdateOperationsInput | string
    passportDocumentName?: StringFieldUpdateOperationsInput | string
    personalPhotoName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusHistoryEventUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableStringFieldUpdateOperationsInput | string | null
    toStatus?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusHistoryEventUncheckedUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableStringFieldUpdateOperationsInput | string | null
    toStatus?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusHistoryEventUncheckedUpdateManyWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableStringFieldUpdateOperationsInput | string | null
    toStatus?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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