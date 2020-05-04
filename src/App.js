import React from "react"


const divStyle = {
    textAlign: 'center'
}

const ChildApp = () =>{
    return (<p style={divStyle}>I don't bite, honest!</p>)
}

const App = () => {
    return (<div className="header"><h1>Hello World!</h1></div>)
}



export  {App, ChildApp}