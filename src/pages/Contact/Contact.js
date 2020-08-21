import React, {Component} from 'react';
import PageTemplate from 'components/PageTemplate';
import Visual from 'components/Visual';
import axios from 'axios';
import qs from 'qs';
import './Contact.scss';
import {withTranslation} from "react-i18next";

// 개발자 메일 const url = 'https://script.google.com/macros/s/AKfycbyPHyPYHafQkV88D4aatE4uzGQcWBD3XmPMpLOQiWSrmcpDh6HW/exec'
const url = 'https://script.google.com/macros/s/AKfycbzbCdvJG2ti4Z4Bmv8dlEumGEaFuM-PMMXpfdTBbcGdZ8H5FfRk/exec'

const options = (d) => { 
    return{
        method: 'POST',
        header: {'content-type': 'application/x-www-form-urlencoded'},
        data : qs.stringify(d),
        url
    }
}

const valueFieldState = {
    value: "",
    valid: true,
    typeMismatch: false,
    errMsg: "",
};

const ErrorTxt = ({txt}) => (
    <span className="form-item__errortxt">{txt}</span>
);

const Loading = ({title}) => (
    <div className="box__loading">
        <span className="item__text">{title}</span>
        <i className="item__loading-line"/>
        <i className="item__loading-line"/>
        <i className="item__loading-line"/>
    </div>
);

class Contact extends Component {
    state = {
        isLoading: false,
        category: {
            ...valueFieldState,
            fieldName: "Categories",
            required: true,
            requiredTxt: "form.error.category"
        },
        email: {
            ...valueFieldState,
            fieldName: "Email",
            required: true,
            requiredTxt: "form.error.email",
            formatErrorTxt: "form.error.email.format"
        },
        phone: {
            ...valueFieldState,
            fieldName: "Phone",
            required: false,
            formatErrorTxt: "form.error.phone"
        },
        name: {
            ...valueFieldState,
            fieldName: "Name",
            required: false
        },
        message: {
            ...valueFieldState,
            fieldName: "Massages",
            required: true,
            requiredTxt: "form.error.message.text"
        },
        allFieldsValid: false
    };

    reduceFormValues = formElements => {
        const arrElements = Array.prototype.slice.call(formElements);
        const formValues = arrElements
            .filter(elem => elem.name.length > 0)
            .map(x => {
                const {typeMismatch} = x.validity;
                const {name, type, value} = x;
                return {
                    name,
                    type,
                    typeMismatch,
                    value,
                    valid: x.checkValidity(),
                };
            })
            .reduce((acc, currVal) => {
                const {value, valid, typeMismatch} = currVal;
                const {
                    fieldName,
                    requiredTxt,
                    formatErrorTxt
                } = this.state[currVal.name];

                acc[currVal.name] = {
                    value,
                    valid,
                    typeMismatch,
                    fieldName,
                    requiredTxt,
                    formatErrorTxt
                };
                return acc;
            }, {});
        return formValues;
    };

    checkAllFieldsValid = (formValues) => {
        return !Object.keys(formValues)
            .map(x => formValues[x])
            .some(field => !field.valid);
    };
    

    onSubmit = (e, t) => {
        e.preventDefault();

        const form = e.target;
        const formValues = this.reduceFormValues(form.elements);
        const allFieldsValid = this.checkAllFieldsValid(formValues);

        if (allFieldsValid) {
            this.onSubmitMail(formValues, allFieldsValid, t);
        }

        this.setState({...formValues, allFieldsValid});
    };

    
    onSubmitMail = (formValues, allFieldsValid, t) => {
        if (allFieldsValid) {
            const category = formValues.category.value;
            const phone = formValues.phone.value;
            const name = formValues.name.value;
            const email = formValues.email.value;
            const message = formValues.message.value;

            this.setState({isLoading: true, ...formValues, allFieldsValid}); //we set the state based on the extracted values from Constraint Validation API

            axios(options({
                        data: {
                            name: name,
                            email: email,
                            message: message,
                            category: category,
                            phone: phone
                        }
                    }
                )
            ).then((response) => {
                // console.log(response.data.result);
                if (response.data.result === 'success') {
                    this.setState({isLoading: false});
                    alert(t('form.send.mail.success'));
                    this.onReset(allFieldsValid);
                } else if (response.data.result === 'fail') {
                    alert(t('form.send.mail.fail'));
                    this.setState({isLoading: false});
                }
            }).catch((error) => {
               alert(t('form.send.mail.fail'));
               this.setState({isLoading: false});
            });
        }
    };
    
    

    onReset = (allFieldsValid) => {
        const init = {
            category: {...this.state.category, value: "", valid: true},
            email: {...this.state.email, value: "", valid: true},
            message: {...this.state.message, value: "", valid: true},
            name: {...this.state.name, value: "", valid: true},
            phone: {...this.state.phone, value: "", valid: true},
        };
        const allFieldsValidReset = !allFieldsValid;

        this.setState({allFieldsValid: allFieldsValidReset, ...init});
        this.form.reset();
    };

    render() {
        const { t } = this.props;
        const title = {
            title: t('banner.title'),
            subtitle: t('banner.subtitle'),
            class: "contact"
        };

        const {category, email, phone, message, isLoading} = this.state;
        const renderCategoryValidationError = category.valid ? "" : <ErrorTxt txt={t(category.requiredTxt)}/>;
        const renderEmailValidationError = email.valid ? "" :
            <ErrorTxt txt={email.typeMismatch ? t(email.formatErrorTxt) : t(email.requiredTxt)}/>;
        const renderPhoneValidationError = phone.valid ? "" : <ErrorTxt txt={t(phone.formatErrorTxt)}/>;
        const renderMsgValidationError = message.valid ? "" : <ErrorTxt txt={t(message.requiredTxt)}/>;
        const renderLoaing = isLoading ? <Loading title={t('loading.title')}/> : null;
        

        return (
            <PageTemplate>
                <Visual {...title} />
  
   
    <div className="container-contents">
        <div className="area area__contact">
            <form ref={(ref) => this.form = ref} className="form__contact" method="POST" onSubmit={(event) => this.onSubmit(event,t)} noValidate>
                <div className="form-elements">
                    <span className="form-item__selectbox">
                        <label htmlFor="category">{t('form.category.label')}</label>
                        <select
                            name="category"
                            className="form-item__select"
                            defaultValue=""
                            required>
                        <option value="" disabled>{t('form.category.placeholder')}</option>
                        <option value="제품 문의">{t('form.category.product.question')}</option>
                        <option value="외주/협력/콜라보레이션">{t('form.category.collaboration')}</option>
                        <option value="교육문의">{t('form.category.education.question')}</option>
                        <option value="기타">{t('form.category.etc')}</option>
                        </select>
                        {renderCategoryValidationError}
                        <br/>
                    </span>
                    <span className="form-item__inputbox">
                        <label htmlFor="email">{t('form.email.label')}</label>
                        <input
                            type="email"
                            className="form-item__input"
                            name="email"
                            aria-describedby={t('form.email.placeholder')}
                            placeholder={t('form.email.placeholder')}
                            required/>
                        <br/>
                        {renderEmailValidationError}
                    </span>
                    <span className="form-item__inputbox">
                        <label htmlFor="phone">{t('form.phone.label')}</label>
                        <input
                            type="tel"
                            className="form-item__input"
                            name="phone"
                            aria-describedby={t('form.phone.placeholder')}
                            placeholder={t('form.phone.placeholder')}
                            pattern="^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}"
                            maxLength="11"/>
                        <br/>
                        {renderPhoneValidationError}
                    </span>
                    <span className="form-item__inputbox">
                        <label htmlFor="name">{t('form.affiliation.label')}</label>
                        <input
                            type="text"
                            className="form-item__input"
                            name="name"
                            aria-describedby={t('form.affiliation.placeholder')}
                            placeholder={t('form.affiliation.placeholder')}/>
                    </span>
                    <span className="form-item__textbox">
                        <label htmlFor="message">{t('form.contents.label')}</label>
                        <textarea
                            className="form-item__textarea"
                            rows="21"
                            name="message"
                            aria-describedby={t('form.contents.placeholder')}
                            placeholder={t('form.contents.placeholder')}
                            required/>
                        <br/>
                        {renderMsgValidationError}
                    </span>

                    <div className="box__button">
                        <button type="submit" className="btn__submit">{t('form.submit.button')}</button>
                    </div>
                </div>
                
            </form>
            {renderLoaing}       
        </div>
    </div>
  
  
            </PageTemplate>
        )
    }
}

export default withTranslation('contact')(Contact);
