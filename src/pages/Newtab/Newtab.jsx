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
      success: false,
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

  render() {
    return (
      <div className="App">
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
      </div>
    );
  }
}

export default LoginForm;
