import React from 'react'
import {Link} from 'react-router-dom'

const navbar = () => {
  return (
    <div>
        <nav ClassName="navbar navbar-expand-lg navbar-dark bg-dark">
            <div ClassName="container-fluid">
                <Link to='/'>
                    <img src='./titulo-pokemon.png' width='70'></img>
                </Link>
                <button ClassName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span ClassName="navbar-toggler-icon"></span>
                </button>
                <div ClassName="collapse navbar-collapse" id="navbarText">
                    <ul ClassName="navbar-nav me-auto mb-2 mb-lg-0">
                        <li ClassName="nav-item">
                            <Link ClassName="nav-link active" to='/'>Inicio</Link>
                        </li>
                        <li ClassName="nav-item">
                            <Link ClassName="nav-link" to='/pokemon'>Pokemon</Link>
                        </li>
                        <li ClassName="nav-item">
                            <Link ClassName="nav-link" to= '/items'>Items</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default navbar