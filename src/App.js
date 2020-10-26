
import './App.css';
import {Component} from 'react';
import {CardList} from './componets/card-list/card-list.component';
import  {SearchBoxComponent} from './componets/search-box/search-box.components'
class App extends Component{
  constructor(){
    super();
    this.state = {
      list: [],
      searchField: ''
    }

    
  }

   componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=> res.json()).then(response=>{
        this.setState({list: response});
      }).catch(err=> {
        console.error(err)
      })
   }

   onChange = (e) => {
    this.setState({searchField: e.target.value});
   }



  render(){
    const  { list , searchField }  = this.state;
    let filterList = list.filter(row=> row.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        
            <SearchBoxComponent placeholder="Search.." handleChange={this.onChange} />
            <CardList className="container"  list={filterList} />
      </div>
    );
  }
}


export default App;
