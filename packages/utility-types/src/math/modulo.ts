import { And } from '../logic/condition/and'
import { IsLessThan } from './condition/is-less-than'
import { IsNatural } from './condition/is-natural'
import { Subtract } from './subtract'

/**
 * Evaluate `A % B`, where `A ∈ ℕ` and `B ∈ ℕ`
 * @group Math
 * @example
 * ```
 * type Ex1 = Modulo<3, 2> // 1
 * type Ex2 = Modulo<4, 2> // 0
 * ```
 */
export type Modulo<A extends number, B extends number> = And<
  IsNatural<A>,
  IsNatural<B>
> extends true
  ? IsLessThan<A, B> extends true
    ? A
    : Modulo<Subtract<A, B>, B>
  : number
