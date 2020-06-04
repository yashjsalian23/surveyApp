import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import {withRouter} from 'react-router-dom';
import * as actions from '../../actions/index';



const formReview = ({onCancel, formValues, submitSurvey, history}) => {
    const reviewFields = formFields.map(field => {
        return (
            <div key={field.key}>
                <div>
                    <label>{field.label}</label>
                </div>
                <div>
                    {formValues[field.name]}
                </div>
            </div>
        );
    })
    return (
        <div>
            <h4>Form review</h4>
            {reviewFields}
            <div style={{marginTop:"20px"}}>
                <button className="yellow darken-3 white-text btn-flat" onClick={onCancel}>
                    Go Back
                    <i className="material-icons right">arrow_back</i>
                </button>
                <button onClick={()=>submitSurvey(formValues, history)}  className="green btn-flat right white-text">
                    Send survey
                    <i className="material-icons right">email</i>
                </button>
            </div>  
        </div>
    );
};

function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values}
}

export default connect(mapStateToProps,actions)(withRouter(formReview));