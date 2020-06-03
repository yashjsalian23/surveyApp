import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
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
            <div>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.renderFields()}
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    };
};

export default  reduxForm({
    form: 'surveyForm'
})(SurveyForm);