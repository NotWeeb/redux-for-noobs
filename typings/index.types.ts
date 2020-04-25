

declare module 'redux-for-noobs' {

  import { Action, Store, applyMiddleware } from 'redux'
  import { Provider } from 'react-redux'

  enum OPTIONS {
    STRICT_TYPES,
    STRICT_NAMING
  }

  function Provider()
  function useStore(): any|object
  function simpleStore(defaultState: object, options: OPTIONS[], middleware: any): Store<Object, Action>

  export { Provider, applyMiddleware, useStore, simpleStore, OPTIONS }

}