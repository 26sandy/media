import React from 'react'
import{Link} from 'react-router-dom'

const Contact = () => {
  return (
    <div><ul>
    <li>
        <Link to= "/contact/1">cont1</Link>
    </li>
    <li>
        <Link to= "/contact/2">cont2</Link>
    </li>
    <li>
        <Link to= "/contact/3">cont3</Link>
    </li>
</ul></div>
  )
}

export default Contact