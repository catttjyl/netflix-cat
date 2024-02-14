import { useEffect } from "react"
import { connect } from "react-redux"
import { Route, Switch, Redirect } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import { auth, createUserProfileDocument } from "./firebase/firebaseUtils"
import Homepage from "./pages/Homepage/Homepage"
import { setCurrentUser } from "./redux/user/user.actions"
import SignIn from "./pages/SignIn/SignIn"

const App = ({ setCurrentUser, currentUser }) => {
    let unsubscribeFromAuth = null

    useEffect(() => {
        unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth)
                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data(),
                    })
                })
            } else setCurrentUser(userAuth)
        })
        return () => unsubscribeFromAuth()
    }, [])

    return (
        <div className="App">
            {currentUser && <Navbar />}
            <Switch>
                <Route exact path="/">
                    <Redirect to="/login" />
                </Route>
                <Route
                    path="/browse"
                    render={() => currentUser ? <Homepage /> : <Redirect to="/login" />}
                />
                <Route
                    path="/login"
                    render={() => currentUser ? <Redirect to="/browse"/> : <SignIn />}
                />
            </Switch>
        </div>
    )
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser,
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
