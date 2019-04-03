import React, { Component, Fragment } from 'react';
import NewUser from '../NewUser';
import { uploadFile } from 'react-s3';
import './style.css';
import Auth from '../../../utils/Auth';
import { config } from '../../../config/Config';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


// import { runInThisContext } from 'vm';

class Login extends Component {

  state = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    imageurl: '',
    password: '',
    passwordConfirmed: '',
    reactS3config: {
      bucketName: 'gooddeeds-new',
      region: 'us-east-1',
      accessKeyId: config.awsKey,
      secretAccessKey: config.awsSecret
    }

  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }


  uploadHandler = (event) => {
    console.log('upload handler called    ' + event.target.files[0])
    const imagefile = event.target.files[0];
    console.log(imagefile);
    uploadFile(imagefile, this.state.reactS3config)
      .then(data => {
        console.log(data.location);
        this.setState({ imageurl: data.location });
      })
      .catch(err => console.error(err));
  }




  handlePasswordConfirmed = (event) => {
    if (event.target.passwordConfirmed.value === this.state.password) {
      this.setState({
        passwordIsConfirmed: true
      });
    }
  }



  handleModalFormSubmit = (event) => {
    event.preventDefault();
    const SignUpInfo = this.state;
    console.log(SignUpInfo);
    if (this.state.password === this.state.passwordConfirmed) {
      Auth.signup({
        email: SignUpInfo.email,
        password: SignUpInfo.password,
        firstName: SignUpInfo.firstName,
        lastName: SignUpInfo.lastName,
        userName: SignUpInfo.userName,
        imageurl: SignUpInfo.imageurl
      })
        .then(res => {
          //call the setUser function from MapDispatchToProps in order to set the User Object inside Redux InitialState
          this.props.setUser(res.data.user);
        })
        .catch(err => {
          if (err.response.data.error) {
            // Todo Show the flash message
            //I'll change this to react side flash instead of a window alert
            alert(err.response.data.error);
          }
        });
    } else {
      return console.log('please confirm password');
    }
  }



  //login function
  LoginHandler = (event) => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      Auth.login({
        email: this.state.email,
        password: this.state.password
      })
        .then(res => {
          //call the setUser function from MapDispatchToProps in order to set the User Object inside Redux InitialState
          this.props.setUser(res.data.user);
          //withRouter can be used here in call back, but I chose to use turnery inside the "render" function below in order to route us to next page
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
      <Fragment>
        {this.props.user.authenticated ? (

          <Redirect to='/main' />

        ) : (



            <div id="login-card">
              <div className='row'>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                  Sign up
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
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        imageurl={this.state.imageurl}
                        userName={this.state.userName}
                        email={this.state.email}
                        password={this.state.password}
                        passwordConfirmed={this.state.passwordConfirmed}
                        handleModalFormSubmit={this.handleModalFormSubmit}
                        uploadHandler={this.uploadHandler}
                      />
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      {/* below turnery will enable the save button only once upload handler has returned the image url from S3*/}
                      {this.state.imageurl ?
                        (<button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleModalFormSubmit}>Save changes</button>)
                        :
                        (<button type="button" className="btn btn-primary" data-dismiss="modal" disabled onClick={this.handleModalFormSubmit}>Save changes</button>)}
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









          )}

      </Fragment>
    );
  }
}

//mapStateToProps will import the props on this page from initialState-Redux
const mapStateToProps = state => {
  return {
    user: state.user
  };

};

//mapDispatchToProps will call on the Reducer functions in order to set initialState-Redux
const mapDispatchToProps = dispatch => {
  return {
    setUser: (user) => dispatch({ type: 'LOGIN', payload: user })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
