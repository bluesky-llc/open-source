import { AnyKey } from '@any/any-key'
import { AnyObject } from '@any/any-object'
import { KeyOf } from '@object/key-of'

export type HasProp<A extends AnyObject, B extends AnyKey> = B extends KeyOf<A>
  ? true
  : false
