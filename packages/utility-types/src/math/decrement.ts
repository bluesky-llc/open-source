import { Zero } from '../identity'
import { And } from '../logic/antecedent/and'
import { IsGreaterThan } from './antecedent/is-greater-than'
import { IsNatural } from './antecedent/is-natural'
import { Subtract } from './subtract'

/**
 * Evaluate `A - 1`, where `A ∈ ℕ` and `A > 0`
 * @beta
 * @group Math
 * @example
 * ```
 * type Ex1 = Decrement<2> // 1
 * type Ex2 = Decrement<0> // number
 * ```
 */
export type Decrement<A extends number> = And<
  IsNatural<A>,
  IsGreaterThan<A, Zero>
> extends true
  ? Subtract<A, 1>
  : number
