import React from 'react';
import './Newtab.css';
import './Newtab.scss';
import { LogInScript } from './script';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      success: localStorage.getItem('token') !== null ? true : false,
    };
  }

  /** function to update changes to state */
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  /**  function to submit the form and perform login mechanism */
  handleSubmit = (event) => {
    event.preventDefault();

    /** login into script  */
    const { email, password } = this.state;
    LogInScript(email, password)
      .then((resp) => {
        this.setState({ success: true });
      })
      .catch((e) => {
        this.setState({ success: false });
      });
  };

  logout = () => {
    localStorage.remoteItem('token');
  };

  render() {
    return (
      <div className="App">
        {this.state.success ? (
          <div>
            <div>
              <section className="text-gray-700 body-font">
                <div className="container px-8 mx-auto pt-36 lg:px-4">
                  <div className="flex flex-col w-full mb-12 text-left lg:text-center">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mx-auto mb-5 text-black bg-gray-200 rounded-full">
                      <svg
                        className="w-10 h-10"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="34"
                        height="24"
                        fill="currentColor"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M5.68 7.314l-1.82 5.914L12 19.442l8.14-6.214-1.82-5.914L16.643 11H7.356L5.681 7.314zM15.357 9l2.888-6.354a.4.4 0 0 1 .747.048l3.367 10.945a.5.5 0 0 1-.174.544L12 21.958 1.816 14.183a.5.5 0 0 1-.174-.544L5.009 2.694a.4.4 0 0 1 .747-.048L8.644 9h6.712z" />
                      </svg>
                    </div>
                    <h1 className="mb-6 text-2xl font-semibold tracking-tighter text-black sm:text-6xl title-font">
                      It's time to
                      <br />
                      <span className="text-green-800">Koala</span> - Borate
                    </h1>
                    <p className="mx-auto text-base font-medium leading-relaxed text-gray-700 lg:w-1/2">
                      <small className="text-gray-300">
                        You're logged in. To logout,{' '}
                        <span
                          className="hover:underline hover:text-green-500"
                          onClick={this.logout}
                        >
                          click here
                        </span>
                        <br />
                        <span className="text-gray-700">
                          Keep an eye on the Koala Icon in the extensions bar.
                        </span>
                      </small>
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        ) : (
          <section className="text-gray-700 body-font">
            <div className="container px-8 pt-48 pb-24 mx-auto lg:px-4">
              <div className="flex flex-col w-full p-8 mx-auto mt-10 border rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
                <h3 class="mb-6 text-4xl font-semibold tracking-tighter text-black sm:text-5xl title-font">
                  <br className="md:hidden" />
                  <span className="text-green-800">Koala</span> - Borate
                </h3>
                <form onSubmit={this.handleSubmit}>
                  <div className="relative ">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your awesome email"
                      onChange={this.handleChange}
                      className="w-full px-4 py-2 mb-4 text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                    />
                  </div>
                  <div className="relative ">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="your secret password"
                      onChange={this.handleChange}
                      className="w-full px-4 py-2 mb-4 text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                    />
                  </div>
                  <button className="px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                    Log In
                  </button>
                  <p className="mx-auto mt-3 text-xs text-gray-500">
                    HooHacks Rocks !
                  </p>
                </form>
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }
}

export default LoginForm;
