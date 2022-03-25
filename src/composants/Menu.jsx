
import { Link, useNavigate } from "react-router-dom"

export const Menu = () => {
    
    return <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <span class="navbar-brand" >
      <img rel="icon" src="https://i.ibb.co/h7CL3dS/Zenabuy-2-25-1.png"  />
      </span>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item nav-padding-catalogue">
          <a href='/' className="tabsMenu nav-item nav-link whitetext ">Catalogue</a>
        </li>


      <li class="achat">
        <a href='/panier' className='tabsMenu  nav-item nav-link whitetext'>Panier 🛒</a>
        
      </li>

      </ul>
    </div>


  </nav>
  
}