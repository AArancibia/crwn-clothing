// REACT
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// REDUX
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "./redux/shop/shop.selector";

// COMPONENTS
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { checkUserSession } from "./redux/user/user.actions";

// STYLES
import "./App.css";
import { selectCurrentUSer } from "./redux/user/user.selector";
import CheckOutPage from "./pages/checkout/checkout.component";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot(snapshot => {
    //       setCurrentUser({
    //         id: snapshot.id,
    //         ...snapshot.data()
    //       });
    //     });
    //   }
    //   setCurrentUser(userAuth);
    // });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        {/*currentUser={this.state.currentUser */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckOutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

/// this.props
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUSer,
  collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

// there is not matchprops = null
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
