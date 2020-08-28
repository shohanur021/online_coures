import React from 'react';
import textColor from '../../fakeColor/color';
import './Main.css';

const Main = (props) => {
    const handleCourse = props.handleCourse;
    const {id,name,image,details,cost} = props.course;
    return (
        <div className="jumbotron main col-md-5 text-center">
            <img src={image} alt=""/>
            <p className={`text text-${textColor[id]}`}><small>{name}</small></p>
            <div className='small'><small>{details}</small></div><br/>
            <div className={`border border-${textColor[id]} pre-cost`}><p className={`cost text-${id>0 ? textColor[id-1] : textColor[id]}`}>Price: {cost} Taka</p></div>
            <button onClick={() => handleCourse(props.course)} className={`btn btn-success`}>Enroll Now</button>
        </div>
    );
};

export default Main;