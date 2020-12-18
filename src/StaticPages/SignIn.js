import React, { Component } from 'react'
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
// import StaticPageNavBar from "../NavComponents/StaticPageNavbar";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createUser } from "../Redux/Actions/userAction";
// import { Redirect } from "react-router-dom";
firebase.initializeApp({
    apiKey:"AIzaSyBoIyQqz_8yKUFxjJO7jqBZWEslC7je7U4",
    authDomain:"resume-builder-startup.firebaseapp.com"
})
export class signin extends Component {
    state={
       fullName:"",
       email:"",
       refreshToken:"",
       firstIdToken:"",
       imageUrl:"", 
       userId:""
    }
   uiConfig = {
       
        signInFlow: 'popup',
        
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
         
         
        ],
         callbacks: {
            // Avoid redirects after sign-in.
            signInSuccessWithAuthResult: () => false
          }
        
      };
    //   "AG8BCncuYyWONR4c7SP9fGmO_gINCgVWtBsE4Iik7hw_8Pudgge0wk53iQUniaIYvxfHXYRYbeCXGwSk_7c4NgTR9oV0y-44s5sGQAB4HxRLQRCAtTk6VzLzYWuSdSHbzezRvJc7FjbDsRLwNXcz2_E44t3PS8o_iesL9DAg8QT3JcwZQVQTadYcZ27Gg6FCGTLpA4xjDgA582uPc39wqn079Dp3I1f2V-g-Sf6hyu1JcIIRDCjwo19FFOC18wnFo8L0GW_au9w9YEe3NPJg5Jp6Q99nNcAvj3t7okFXNv-_A72Y59Wvg6FVctXtLErfQWjLjKJQ1zpFnfR3ZV2sDp83I1pRf2Een-nM9wp04Ew0FOw69bCait0QrFvlEBSt5bDA0C3DCuxNfVZqnToRRNMiQEWAk6oqnPV9ES-elJwkT8stDeujVsgJhOUJ1ZnVK-ygWT3TrTev"
componentDidMount = () => {  
    if(this.props.user.authenticated){
        this.props.history.push('/admin')
    } else{
        firebase.auth().onAuthStateChanged(user =>{  
            this.setState({
                refreshToken:user.refreshToken,
                fullName:user.providerData[0].displayName,
                email:user.providerData[0].email,
                imageUrl:user.providerData[0].photoURL,
                firstIdToken:user._lat,
                userId:user.uid
            })
           
            const userData = {
                fullName:this.state.fullName,
                email:this.state.email,
                refreshToken:this.state.refreshToken,
                firstIdToken:this.state.firstIdToken,
                imageUrl:this.state.imageUrl,
                userId:this.state.userId
            }
            this.props.createUser(userData, this.props.history);
        })
    }


}
    render() {
        // const  { user:{ authenticated } } = this.props
        return (
        <>
        {
            this.state.auth ?
            <p>This is AUth</p>:
            <StyledFirebaseAuth uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}/>
        }
       
        </>
        )
    }
}

signin.propTypes ={
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    // UI:PropTypes.object.isRequired,
    createUser:PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
    user: state.user,
    // UI: state.UI
})
export default connect(mapStateToProps, { createUser })(signin)
