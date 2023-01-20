import { And } from '../../logic/condition/and'
import { IsExtension } from './is-extension'

/**
 * If `A extends B` and `B extends A` then `true` else `false`
 * @beta
 * @group Condition
 * @group Any
 * @example
 * ```
 * type Ex1 = IsEqual<string, string> // true
 * type Ex2 = IsEqual<true, false>    // false
 * ```
 */
export type IsEqual<A, B> = And<IsExtension<A, B>, IsExtension<B, A>>
