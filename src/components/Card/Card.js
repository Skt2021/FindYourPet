import moment from 'moment';
import React from 'react';
import "./Card.css";

function Card({name,bornAt}) {
    const dob = new Date(bornAt);
    const today = new Date();
    const ageObject = {
            years: moment.duration(today-dob).years(),
            months: moment.duration(today-dob).months(),
            days : moment.duration(today-dob).days()
        }

    let age;
    if(ageObject.years===0){
        if(ageObject.months===0){
            age = `${ageObject.days} days`
        }
        else{
            age = `${ageObject.months} months ${ageObject.days} days`
        }
    }
    else{
        age = `${ageObject.years} years ${ageObject.months} months ${ageObject.days} days`
    }

    return (
        <div className="card">
            <p className="card-name">{name}</p>
            <p className="card-age">Age: {age} </p>
        </div>
    )
}

export default Card
