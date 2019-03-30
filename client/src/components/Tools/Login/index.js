import React, { Component } from 'react';
import NewUser from '../NewUser';
import { uploadFile } from 'react-s3';
import './style.css';
import Auth from '../../../utils/Auth';
import { config } from '../../../config/Config';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Main from '../../Pages/Main';

// import { runInThisContext } from 'vm';

class Login extends Component {

  state = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    imageurl: '',
    password: '',
    passwordConfirmed: ''
  };

  // Auth.session().then(user => {
  //   this.setState({
  //     user: user,
  //     authenticated: user.authenticated
  //   });
  // });

  // this.reactS3config = {
  //   bucketName: 'gooddeeds-new',
  //   region: 'us-east-1',
  //   accessKeyId: config.awsKey,
  //   secretAccessKey: config.awsSecret
  // };

  // this.uploadHandler = this.uploadHandler.bind(this);
  // this.handleInputChange = this.handleInputChange.bind(this);
  // this.LoginHandler = this.LoginHandler.bind(this);
  // this.handleModalFormSubmit = this.handleModalFormSubmit.bind(this);


  // uploadHandler(event) {
  //   const imagefile = event.target.files[0];
  //   console.log(imagefile);
  //   uploadFile(imagefile, this.reactS3config)
  //     .then(data => {
  //       console.log(data.location);
  //       this.setState({ imageurl: data.location });
  //     })
  //     .catch(err => console.error(err));
  // }

  handleInputChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  // handlePasswordConfirmed(event) {
  //   if (event.target.passwordConfirmed.value === this.state.password) {
  //     this.setState({
  //       passwordIsConfirmed: true
  //     });
  //     console.log(this.state.passwordIsConfirmed);
  //   }
  // }



  // handleModalFormSubmit(event) {
  //   event.preventDefault();
  //   const SignUpInfo = this.state;
  //   console.log(SignUpInfo);
  //   if (this.state.password === this.state.passwordConfirmed) {
  //     // console.log(event);
  //     console.log(SignUpInfo);
  //     Auth.signup({
  //       email: SignUpInfo.email,
  //       password: SignUpInfo.password,
  //       firstName: SignUpInfo.firstName,
  //       lastName: SignUpInfo.lastName,
  //       userName: SignUpInfo.userName,
  //       imageurl: SignUpInfo.imageurl
  //     })
  //       .then(res => {
  //         window.location = res.data.redirect;
  //       })
  //       .catch(err => {
  //         if (err.response.data.error) {
  //           // Todo Show the flash message
  //           //I'll change this to react side flash instead of a window alert
  //           alert(err.response.data.error);
  //         }
  //       });
  //   } else {
  //     return console.log('please confirm password');
  //   }
  // }



  //login/authentication function
  LoginHandler = (event) => {
    event.preventDefault();


    if (this.state.email && this.state.password) {
      Auth.login({
        email: this.state.email,
        password: this.state.password
      })
        .then(res => {

          console.log(res.data.user);

          this.props.setUser(res.data.user);
          console.log('back from the promise');
          //after successful authentication we'll redirect to the returned address (we set this on the server side)



          //withRouter can be used here in call back

          //<Redicrect /> 
          // res.data.redirect;
        })
        .catch(err => {
          if (err.response.data.error) {
            // Todo Show the flash message
            //I'll change this to react side flash instead of a window alert
            alert(err.response.data.error);
          }
        });
    }
  }


  render() {
    //turnery on after return says if state(Redux) has a object called "user", which only gets set after login is 
    //complete, redirect the page to /main, otherwise show the login page 


    return (
      <div>
        {this.props.user ? (
          <Redirect to='/main' />
        ) : (
            <div id="login-card">
              <div className='row'>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                  Sing up
          </button>
              </div >
              <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <NewUser
                        header='New User'
                        handleInputChange={this.handleInputChange}
                        firstName={this.props.firstName}
                        lastName={this.props.lastName}
                        imageurl={this.props.imageurl}
                        userName={this.props.userName}
                        email={this.props.email}
                        password={this.props.password}
                        passwordConfirmed={this.props.passwordConfirmed}
                        handleModalFormSubmit={this.handleModalFormSubmit}
                        uploadHandler={this.uploadHandler}
                      />
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary" onClick={this.handleModalFormSubmit}>Save changes</button>
                    </div>
                  </div>
                </div>
              </div>


              <input
                // style={{textAlig: 'left'}}
                name='email'
                onChange={this.handleInputChange}
                type='email'
                label='Email'
                s={12}
              />
              <input
                name='password'
                onChange={this.handleInputChange}
                type='password'
                label='password'
                s={12}
              />
              <button id='login-button' waves='light' onClick={this.LoginHandler}>
                Login
        </button>
            </div >





          )
        }

      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };

};

const mapDispatchToProps = dispatch => {
  return {
    setUser: (user) => dispatch({ type: 'LOGIN', payload: user })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
