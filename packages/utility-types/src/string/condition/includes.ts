import { IsExtension } from '../../any/condition/is-extension'

/**
 * Check if the string `B` is in `A`.
 * @beta
 * @group Condition
 * @group String
 * @example
 * ```
 * type Ex1 = Includes<'book', 'oo'>   // true
 * type Ex2 = Includes<'apple', 'zzz'> // false
 * ```
 */
export type Includes<A extends string, B extends string> = IsExtension<
  A,
  `${string}${B}${string}`
>
