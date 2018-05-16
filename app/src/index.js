import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components/App'

export const secretKey = '5d3624cfd3c28db0011d513924c4f6c4'  // Example key, use your own
export const getCoords = cb => navigator.geolocation.getCurrentPosition(cb)
export const baseurl = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/'

ReactDOM.render(<App />, document.getElementById('root'))
