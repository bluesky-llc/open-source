import { MatchGroup } from './utils'

/**
 * Evaluate the union of the strings in A matching B
 * @experimental
 * @example
 * ```
 * type Ex = Match<'{{a}} b {{c}}', { start: '{{', end: '}}' }> // 'a' | 'b'
 * ```
 */
export type Match<
  A extends string,
  B extends MatchGroup = MatchGroup<'{{', '}}'>,
  C extends string = never
> = A extends `${infer _}${B['start']}${infer E}${B['end']}${infer F}`
  ? Match<F, B, C | E>
  : C

export {}
