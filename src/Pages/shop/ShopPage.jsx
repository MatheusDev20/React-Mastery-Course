import React, {Component} from 'react'
import ShopData from './ShopData'

import PreviewCollection from '../../Components/preview-collection/PreviewCollection'
export default class ShopPage extends Component{

    constructor(props){
    super(props)

    this.state = {
        collections: ShopData
    }
    }
    render(){
        const {collections} = this.state
        return(
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <PreviewCollection key={id} {...otherCollectionProps}/>
                        ))
                }
            
         
            </div>
        )
    
}
}
// Preview Collection é um componente que esta sendo renderizado na ShopPage
