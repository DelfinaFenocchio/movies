import { createStore } from 'redux'
import reducer from './Reducer.js'

const store = createStore(reducer)

store.subscribe(() => {
  console.log("cambio actualizado")
  console.log(store.getState())
})

export default store


