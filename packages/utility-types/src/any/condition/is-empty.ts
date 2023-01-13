import { IsEmptyArray } from '../../identity/condition/is-array-identity'
import { IsZero } from '../../identity/condition/is-number-additive-identity'
import { IsEmptyObject } from '../../identity/condition/is-object-identity'
import { IsEmptyString } from '../../identity/condition/is-string-identity'
import { Or } from '../../logic/condition/or'

/**
 * If `A extends []` or `A extends ''` or `A extends {}` then `true` else `false`
 * @experimental
 * @group Condition
 * @group Any
 * @example
 * ```
 * type Ex1 = IsEmpty<0>           // true
 * type Ex2 = IsEmpty<''>          // true
 * type Ex3 = IsEmpty<{}>          // true
 * type Ex4 = IsEmpty<[]>          // true
 * type Ex5 = IsEmpty<1>           // false
 * type Ex6 = IsEmpty<'abc'>       // false
 * type Ex7 = IsEmpty<{ a: true }> // false
 * type Ex8 = IsEmpty<[true]>      // false
 * ```
 */
export type IsEmpty<A> = Or<
  IsZero<A>,
  Or<IsEmptyString<A>, Or<IsEmptyObject<A>, IsEmptyArray<A>>>
>

export {}
