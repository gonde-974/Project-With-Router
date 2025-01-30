import React from 'react'
import {Link} from 'react-router-dom'

function ErrorPage() {
  return (
    <>
    <div><h1>Error Page</h1></div>
    <Link to="/">BACK TO HOME</Link>
    </>
  )
}

export default ErrorPage