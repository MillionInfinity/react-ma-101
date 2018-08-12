import PropTypes from 'prop-types';
import React, {Component} from 'react';


const Test = (props) => {
    return (
        <div>
        <h1>my name is {props.str}</h1>
        <p>{(props.bool ? 'JavaScript': 'no bool')}</p>
        <p> I got {props.strOrNum} out of {props.strOrNum}</p>
        <div>{
            props.ary.map((val)=>{
              return(
                  <p key={val}>{val}</p>
              )
            })}
        </div>
            <div>{
                props.aryOfObj.map((val) => {
                    return (
                        <p key={val.pro}>{val.name}, grade= {val.pro}</p>
                    )
                })}
            </div>
            <h2>{props.children}</h2>
        </div>
    )
}
Test.propTypes={
    str:PropTypes.string,
    bool:PropTypes.bool,
    strOrNum:PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ary:PropTypes.arrayOf(PropTypes.number),
    aryOfObj:PropTypes.arrayOf(PropTypes.shape(
     {
         name:PropTypes.string,
         pro:PropTypes.number
     }   
    )),
    children:PropTypes.element.isRequired
}
export default Test;