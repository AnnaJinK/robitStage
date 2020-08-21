import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from 'redux/modules/auth';
import * as userActions from 'redux/modules/user';
import storage from 'lib/storage';
import '../AdminPages.scss';
import './AdminLogin.scss';

const valueFieldState = {
  value: "",
  valid: true,
  typeMismatch: false,
  errMsg: "" //this is where our error message gets across
};

const ErrorTxt = ({txt}) => (
  <span className="form-item__errortxt">{txt}</span>
);

class AdminLogin extends Component {
  state = {
    id: {
      ...valueFieldState,
      fieldName: "id",
      required: true,
      requiredTxt: "아이디를 입력해 주세요.(required)",
    },
    pw: {
      ...valueFieldState,
      fieldName: "pw",
      required: true,
      requiredTxt: "비밀번호를 입력해 주세요.(required)",
    },
    allFieldsValid: false
  };

  componentDidMount() {
    this.initializeUserInfo();
  }

  componentWillUnmount() {
    this.form.reset();
  }

  //we need to extract specific properties in Constraint Validation API using this code snippet
  reduceFormValues = formElements => {
    const arrElements = Array.prototype.slice.call(formElements);
    //we convert elements/inputs into an array found inside form element
    //we need to extract specific properties in Constraint Validation API using this code snippet
    const formValues = arrElements
        .filter(elem => elem.name.length > 0)
        .map(x => {
            const { typeMismatch } = x.validity;
            const { name, type, value } = x;
            return {
                name,
                type,
                typeMismatch, //we use typeMismatch when format is incorrect(e.g. incorrect email)
                value,
                valid: x.checkValidity()
            };
        })
        .reduce((acc, currVal) => { //then we finally use reduce, ready to put it in our state
            const { value, valid, typeMismatch } = currVal;
            const {
                fieldName,
                requiredTxt,
                formatErrorTxt
            } = this.state[currVal.name]; //get the rest of properties inside the state object
  //we'll need to map these properties back to state so we use reducer...
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

  onSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formValues = this.reduceFormValues(form.elements);
    const allFieldsValid = this.checkAllFieldsValid(formValues);

    if (allFieldsValid) {
      const id = formValues.id.value;
      const pw = formValues.pw.value;

      console.log('Now Loading');
      this.setState({ ...formValues, allFieldsValid}); //we set the state based on the extracted values from Constraint Validation API

      this.handleLogin({id: id, password: pw});
    }

    this.setState({ ...formValues, allFieldsValid}); //we set the state based on the extracted values from Constraint Validation API
  }

  onReset = (allFieldsValid) => {
    const init = {
      id: { ...this.state.id, value: "", valid: true },
      pw: { ...this.state.pw, value: "", valid: true }
    }
    const allFieldsValidReset = !allFieldsValid;

    this.setState({allFieldsValid: allFieldsValidReset, ...init})
    this.form.reset();
  }

  initializeUserInfo = async () => {
    const loggedInfo = storage.get('loggedInfo'); // 로그인 정보를 로컬스토리지에서 가져옵니다.
    console.log(storage)
    console.log(loggedInfo);

    if (!loggedInfo) return;

    const { UserActions, history } = this.props;

    UserActions.setLoggedInfo(loggedInfo);

    try {
      await UserActions.checkStatus();
      history.push('/admin');
    } catch (e) {
      console.log(e);
      storage.remove('loggedInfo');
      window.location.href = '/auth/login';
    }
  }

  handleLogin = async ({id, password}) => {
    const { AuthActions, UserActions, history } = this.props;

    try {
        await AuthActions.login({id, password});
        const loggedInfo = this.props.result;
        console.log(loggedInfo);

        UserActions.setLoggedInfo(loggedInfo);
        storage.set('loggedInfo', loggedInfo);
        history.push('/admin');

    } catch (e) {
      console.log(e);
      alert('잘못된 계정정보입니다.');
    }
  }

  render() {
    const { id, pw } = this.state;
    const renderIdValidationError = id.valid ? "" : <ErrorTxt txt={id.requiredTxt} />;
    const renderPwValidationError = pw.valid ? "" : <ErrorTxt txt={pw.requiredTxt} />;

    return (
      <div className="wrap__admin">
        <div className="container__login">
          <div className="area__login">
            <form
              ref={(ref) => this.form=ref}
              className="form__login"
              method="POST"
              onSubmit={this.onSubmit}
              noValidate>
              <h1>Login</h1>
              <p>Sign in to your account</p>
              <span className="form-item__inputbox">
                <label htmlFor="id">ID</label>
                <input
                  type="text"
                  name="id"
                  placeholder="ID"
                  aria-describedby="ID"
                  autoFocus
                  required />
                  <br/>
                  {renderIdValidationError}
              </span>
              <span className="form-item__inputbox">
                <label htmlFor="pw">PW</label>
                <input
                  type="password"
                  name="pw"
                  placeholder="Password"
                  aria-describedby="Password"
                  required />
                  <br/>
                  {renderPwValidationError}
              </span>
              <div className="box__button">
                <button type="submit" className="btn__submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
      form: state.auth.getIn(['login', 'form']),
      error: state.auth.getIn(['login', 'error']),
      result: state.auth.get('result')
  }),
  (dispatch) => ({
      AuthActions: bindActionCreators(authActions, dispatch),
      UserActions: bindActionCreators(userActions, dispatch)
  })
)(AdminLogin);
