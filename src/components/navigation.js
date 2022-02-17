import React from "react";
import { Link, Outlet } from "react-router-dom";








export const Navigation = (props) => {

  return (
    <>
      <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
        <div className='container'>
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle collapsed'
              data-toggle='collapse'
              data-target='#bs-example-navbar-collapse-1'
            >
              {' '}
              <span className='sr-only'>Toggle navigation</span>{' '}
              <span className='icon-bar'></span>{' '}
              <span className='icon-bar'></span>{' '}
              <span className='icon-bar'></span>{' '}
            </button>
            <Link className='navbar-brand page-scroll' to='/'>
              InikCamper
            </Link>{' '}
          </div>

          <div
            className='collapse navbar-collapse'
            id='bs-example-navbar-collapse-1'
          >
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <Link to='/' className='page-scroll'>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to='/about' className='page-scroll'>
                  Quienes Somos
                </Link>
              </li>

              <li>
                <Link to='/services' className='page-scroll'>
                  Servicios
                </Link>
              </li>
              <li>
                <Link to='/portfolio' className='page-scroll'>
                  Galeria
                </Link>
              </li>
              <li>
                <Link to='/team' className='page-scroll'>
                  Equipo
                </Link>
              </li>
              <li>
                <Link to='/contact' className='page-scroll'>
                  Contacto
                </Link>
              </li>
              <li>
                <a href='https://inikcamper.eu/reservas' className='btn-custom'>
                  Reservas
                </a>
              </li>

              <li>
                <div id="contact-whatsaap">
                  <div className='col-md-12'>
                    <div className='row'>
                      <div className='social'>
                        <ul>
                          <li>
                            <a href={props.data ? props.data.whatsapp : '/'}>
                              <i className='fa fa-whatsapp'></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

            </ul>

          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}
