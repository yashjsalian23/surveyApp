import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';

const FIELDS = [
    {key: "1", label: 'Survey Title', name: 'title'},
    {key: "2", label: 'Survey Line', name: 'subject'},
    {key: "3", label: 'Email Body', name: 'body'},
    {key: "4", label: 'Recipient List', name: 'emails'}      
];

class SurveyForm extends Component{
    renderFields() {
        return FIELDS.map(({label, name, key}) => {
            return <Field key={key} component={SurveyField} type="text" label={label} name={name} />
        });
    };
    
    render(){
        return(
            <div style={{marginTop:"20px"}}>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">
                        CANCEL
                    </Link>
                    <button className="teal btn-flat right white-text" type="submit">
                        NEXT
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    };
};

function validate(values){
    const errors = {};
    FIELDS.forEach(({name}) => {
        if(!values[name]){
            errors[name] = `You must provide a ${name}`;
        }
    })
    return errors;
}

export default  reduxForm({
    validate: validate,
    form: 'surveyForm'
})(SurveyForm);