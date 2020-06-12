import React, {Component} from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Quiz from './containers/Quiz/Quiz';
import QuizList from './containers/QuizList/QuizList';
import QuizCreator from './containers/QuizCreator/QuizCreator';
import Auth from './containers/Auth/Auth';
import Logout from './components/Logout/Logout';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { autoLogin } from './containers/Auth/actions';

class App extends Component {

  componentDidMount() {
    this.props.autoLogin();
  }

  render () {
    let routes = (
      <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/quiz/:id" component={Quiz} />
          <Route path="/" exact component={QuizList} />
          <Redirect to="/" />
        </Switch>
    );
  
    if(this.props.isAuth) {
      routes = (
        <Switch>
            <Route path="/quiz-creator" component={QuizCreator} />
            <Route path="/quiz/:id" component={Quiz} />
            <Route path="/logout" component={Logout} />
            <Route path="/" exact component={QuizList} />
            <Redirect to="/" />
          </Switch>
      );
    }
  
    return (
      <Layout>
        {routes}
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
      isAuth: !!state.auth.token
  };
};

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default withRouter(compose(
  withConnect
)(App));
