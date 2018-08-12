import React, { Component } from 'react';

import './App.css';
// import Header from './Header';
import Test from './Header';
      
// const Test=(props)=>{
// return(
// <h1>{props.str}</h1>
// )
// }


class App extends Component{
  render(){
    return(
      <div className="App">
        <Test 
        str={'Million'}
        bool={true}
        strOrNum={10}
        ary={[1, 2, 3]}
        aryOfObj={[{name:'aregawi', pro:4},{name:'haregu',pro:2}]}
        >
        <div>Child</div>
          <div>Child-1</div>
        </Test>
       </div>
    );
  }
}
export default App;