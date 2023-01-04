import { AnyFunction } from 'utility-types'
import createSimpleTypeGuard from '../utils/create-simple-type-guard'

const isFunction = createSimpleTypeGuard<AnyFunction>('function')

export default isFunction