import {render} from  "react-dom"
import React from "react"
import {App, ChildApp} from "./App"
import './index.css'


render(<div>
    <App/>
    <ChildApp/>
    </div>, document.getElementById("root"))