import { IsLessThan } from './is-less-than'

/**
 * Evaluate `A > B`, where `A ∈ ℕ` and `B ∈ ℕ`
 * @beta
 * @group Antecedent
 * @group Math
 * @example
 * ```
 * type Ex1 = IsGreaterThan<3, 1> // true
 * type Ex2 = IsGreaterThan<1, 3> // false
 * ```
 */
export type IsGreaterThan<A extends number, B extends number> = IsLessThan<B, A>
