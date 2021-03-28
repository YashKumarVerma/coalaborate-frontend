import React from 'react';
// import { DropDown } from './components/dropdown';

import { getCurrentUrl } from './util/urlExtractor';
import { getNotesForUrl } from './scripts/getNotesForUrl';
import { PostNewNote } from './scripts/postNewNote';

/** utility functions */
const NotificationBar = ({ message }) => {
  return (
    <div className="card bg-white py-3 px-5 rounded-xl flex flex-col mb-5">
      <div className="title text-xl font-medium mb-3">
        {/**        <span className="text-green-500">Koala</span>-Borate */}
      </div>
      <p className="text-gray-400">
        Koala's Together <span className="text-green-600">Strong</span>
      </p>
      <div className="w-full">
        <div
          className="py-3 px-5 mb-4 bg-gray-100 text-gray-700 rounded-md text-sm border border-gray-200"
          role="alert"
        >
          {message}
        </div>
      </div>
    </div>
  );
};

/** main application page */
class PopUp extends React.Component {
  constructor() {
    super();

    this.state = {
      notes: [],
      url: undefined,
      title: undefined,
      body: undefined,
      success: false,
    };
  }

  /** to run when component loads */
  async componentDidMount() {
    const url = await getCurrentUrl();
    const notes = await getNotesForUrl(url);
    this.setState({ url, notes });
    console.log(`notes.for.url.${url}`, notes);
  }

  /** function to update changes to state */
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  /**  function to submit the form and perform login mechanism */
  handleSubmit = (event) => {
    event.preventDefault();

    /** to post a new NOTE ! MY BACK HURTS LIKE HELL ATM !  */
    const { body, title, url } = this.state;
    PostNewNote(title, body, url)
      .then((resp) => {
        this.setState({ success: true });
      })
      .catch((e) => {
        this.setState({ success: false });
      });
  };

  render() {
    return (
      <div className="mt-4 mb-4 mr-2 ml-2">
        <div>
          {this.state.notes.length === 0 ? (
            <NotificationBar message="No notes for the page found." />
          ) : (
            true
          )}
        </div>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <input
            autocomplete="false"
            name="hidden"
            type="text"
            style={{ display: 'none' }}
          />
          <div class="mb-4 mr-5 ml-5">
            <input
              autoComplete="false"
              className="w-full bg-drabya-gray appearance-none rounded-md  border border-gray-300 hover:border-green-400 focus:border-green-600  p-4  text-gray-400 focus:text-green-500  focus:outline-none focus:shadow-outline"
              type="text"
              id="title"
              name="title"
              placeholder="Title ? Something like.. Doubt about formula !"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-4 mr-5 ml-5">
            <input
              autoComplete="false"
              className="w-full bg-drabya-gray appearance-none rounded-md  border border-gray-300 hover:border-green-400 focus:border-green-600  p-4  text-gray-400 focus:text-green-500  focus:outline-none focus:shadow-outline"
              type="text"
              name="body"
              id="body"
              placeholder="Something more that you'd like to share"
              onChange={this.handleChange}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-white hover:bg-green-600  border border-green-800 text-green-600 hover:text-white font-bold py-2 px-4 rounded-full"
            >
              Post It !
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default PopUp;
