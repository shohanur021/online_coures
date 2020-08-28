import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';
import textColor from '../../fakeColor/color';

const Add = (props) => {
    
    const handleRemoveCourse = props.handleRemoveCourse;
    const {name,cost,image,id} = props.addCourse;
    return (
        <div className="jumbotron">
                <div className="bg-dark text-center">Individual Course</div>
                <img style={{width: '80%'}}  src={image} alt=""/>
                <p className="text text-dark">{name}</p>
                <p className={`text text-${id>0 ? textColor[id-1] : textColor[id]}`}><small>Lifetime access to this course.No future payments, ever.Includes completion certificate.</small></p>
                <small className="text text-dark">price: {cost} Taka</small><br/><br/>
                <button className={`btn btn-danger`} onClick={() => handleRemoveCourse(props.addCourse)}><FontAwesomeIcon icon={faBackspace}></FontAwesomeIcon></button>
        </div>
    );
};

export default Add;