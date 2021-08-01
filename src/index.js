import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React from 'react'
import { render } from 'react-dom'
import 'antd/dist/antd.css'

import App from './App'

const AsciiPunks = () => <App />

render(<AsciiPunks />, document.getElementById('app'))

const element = document.getElementById('app')


