import React from 'react'
import './directory.scss'
import MenuItem from '../menu-item/menu-item'
class Directory extends React.Component{

    constructor(){
        super()
        this.state ={
            sections: [ // array sections, Cada posição representa um "Quadrado no site"
                {  title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1 ,
                linkUrl:'hats'  },
                {  title: 'Jackets',
                imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',  // O Estado do componente diretório recebe um array 
                id: 2 ,
                linkUrl:"" },
                {  title: 'Sneakers',                              // Recebe um array de objetos que representa cada seção da página
                imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3 ,
                linkUrl:"" },
                {  title: 'Womens',
                imageUrl:'https://i.ibb.co/GCCdy8t/womens.png',
                id: 4,
                size: 'large',
                linkUrl:""},
                {  title: 'Mens',
                imageUrl:'https://i.ibb.co/R70vBrQ/men.png',
                id: 5 ,
                size: 'large',
                linkUrl:""}
            ]
        }
}
 render(){
     return(
            <div className="directory-menu">
                {this.state.sections.map(({title,imageUrl,id,size,linkUrl}) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
                ))}
            </div>
     )
 }
}
export default Directory;