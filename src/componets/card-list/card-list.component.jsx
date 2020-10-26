

import {Card} from '../card/card.component'
import './card-list.style.css'
export const CardList  = (props) => {

return (
    props.list.map(row=>{
      return  <Card className="row" key={row.id} {...row}/>
    })
   
);
}

