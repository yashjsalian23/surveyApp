import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component{
    renderFields() {
        return formFields.map(({label, name, key, placeholder}) => {
            return <Field key={key} placeholder={placeholder} component={SurveyField} type="text" label={label} name={name} />
        });
    };
    
    render(){
        return(
            <div style={{marginTop:"20px"}}>
                <form onSubmit={this.props.handleSubmit(() => this.props.onSurveySubmit())}>
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

    errors.recipients = validateEmails(values.recipients || ' ');
    formFields.forEach(({name}) => {
        if(!values[name]){
            errors[name] = `You must provide ${name}`;
        }
    })

    return errors;
}

export default  reduxForm({
    validate: validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);