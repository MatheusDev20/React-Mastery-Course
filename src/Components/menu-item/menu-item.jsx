import React from 'react'
import {withRouter} from 'react-router-dom'
import './menu-item.scss'

const MenuItem = ({title, imageUrl, size , history, linkUrl, match}) => (
<div   className={`${size} menu-item`} onClick={()=> history.push(`${match.url}${linkUrl}`)}> 
    <div className="background-image"
    style={{backgroundImage:`url(${imageUrl})`}}>
    </div>
                <div className="content">
                    <h1 className="title">  {title.toUpperCase()}</h1>
                    <span className="subtitle"> SHOP NOW </span>
                </div>
</div>
)
export default withRouter(MenuItem) // Esta função withRouter nos da acesso ao history do componente MenuItem
                                    // para que possamos navegar entre paginas utilizando o React Router