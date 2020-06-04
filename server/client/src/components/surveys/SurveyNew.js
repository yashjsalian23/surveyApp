import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import {reduxForm} from 'redux-form'

class SurveyNew extends Component{
    state = { formReview: false };

    renderContent() {
        if(this.state.formReview){
            return <SurveyFormReview onCancel={() => this.setState({formReview: false})} />
        }
        return <SurveyForm onSurveySubmit={() => this.setState({ formReview: true })} />
    }

    render(){
        return(
            <div>
                {this.renderContent()}
            </div>
        );
    };
};

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);