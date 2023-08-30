import React from 'react'
import opps from "./../assets/OOps.svg"

const ErrorPage = () => {
    return (
        <div className="text-center text-white d-flex justify-content-center flex-column align-align-items-center ">
            <h1 className="mt-5">404</h1>
            <h1>Page not found</h1>
            <img src={opps} alt="404" style={{width: "30%", margin: "auto"}}/>
        </div>
    )
}

export default ErrorPage