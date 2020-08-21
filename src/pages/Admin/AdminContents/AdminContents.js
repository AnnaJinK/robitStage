import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userActions from 'redux/modules/user';
import storage from 'lib/storage';

import AdminSidebar from 'components/Admin/AdminSidebar';
import AdminList from 'pages/Admin/AdminList'
import AdminRegister from 'pages/Admin/AdminRegister';
import AdminListDetail from 'pages/Admin/AdminListDetail';
import Footer from 'components/Footer';
import '../AdminPages.scss';

class AdminContents extends Component {
  componentDidMount() {
    this.initializeUserInfo();
  }

  initializeUserInfo = async () => {
    const loggedInfo = storage.get('loggedInfo');
    const { UserActions, history } = this.props;

    if (!loggedInfo) {
      history.push('/auth/login')
      return;
    }

    UserActions.setLoggedInfo(loggedInfo);

    try {
      await UserActions.checkStatus();
    } catch (e) {
      console.log(e);
      storage.remove('loggedInfo');
      window.location.href = '/auth/login';
    }
  }

  handleLogout = async () => {
    const { UserActions } = this.props;

    try {
        await UserActions.logout();
    } catch (e) {
        console.log(e);
    }

    storage.remove('loggedInfo');
    window.location.href = '/auth/login'; // 강제 메인 이동
}

  render() {
    const { user } = this.props;
    const loggedInfo = storage.get('loggedInfo');

    return (
      <div className="wrap__admin">
        <header className="header__admin">
          <h1><Link to={"/"}>Robotry</Link></h1>
          {
            user.get('logged') ?
            (<div className="box__menu">
              Hi {loggedInfo.username} | <button onClick={this.handleLogout}>Logout</button>
            </div>) : null
          }
        </header>
        <div className="container__admin">
          <AdminSidebar/>
          <Route exact path='/admin' component={AdminList} />
          <Route path='/admin/list' component={AdminList} />
          { <Route path='/admin/get/index/:index' component={AdminListDetail} /> }
          <Route
            path='/admin/get/index/:index'
            render={({match}) => <AdminListDetail getIndex={match.params.index} />}
          />
          <Route path='/admin/register' component={AdminRegister} />
        </div>
        <Footer extendClass="admin"/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    user: state.user
  }),
  (dispatch) => ({
    UserActions: bindActionCreators(userActions, dispatch)
  })
)(AdminContents);
