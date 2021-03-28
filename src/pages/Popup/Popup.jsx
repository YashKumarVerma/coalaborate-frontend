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

const NoteCard = ({ author, title, body }) => {
  return (
    <div className="m-4">
      <div className="min-w-0 p-4 text-black rounded-lg shadow-xs border hover:border-green-700">
        <h4 className="mb-4 font-semibold text-green-600">
          {author} - <span className="text-gray-900">{title}</span>
        </h4>
        <p className="text-gray-400 hover:text-gray-700">{body}</p>
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
        this.setState({
          success: true,
          title: '',
          body: '',
          message: 'note saved',
        });
        event.target.reset();
      })
      .catch((e) => {
        this.setState({ success: false });
      });
  };

  render() {
    return (
      <div className="mt-4 mb-4 mr-2 ml-2">
        <div className="my-4" style={{ maxHeight: 300, overflowY: 'scroll' }}>
          {this.state.notes.length === 0 ? (
            <NotificationBar message="No notes for the page found." />
          ) : (
            <div>
              {this.state.notes.map(({ name, body, title }) => (
                <NoteCard author={name} body={body} title={title} />
              ))}
            </div>
          )}
        </div>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <input
            autoComplete="off"
            name="hidden"
            type="text"
            style={{ display: 'none' }}
          />
          <h2>{this.state.message}</h2>
          <div className="mb-4 mr-5 ml-5">
            <input
              autoComplete="off"
              className="w-full bg-drabya-gray appearance-none rounded-md  border border-gray-300 hover:border-green-400 focus:border-green-600  p-4  text-gray-400 focus:text-green-500  focus:outline-none focus:shadow-outline"
              type="text"
              id="title"
              name="title"
              placeholder="Title ? Something like.. Doubt about formula !"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>
          <div className="mb-4 mr-5 ml-5">
            <input
              autoComplete="off"
              className="w-full bg-drabya-gray appearance-none rounded-md  border border-gray-300 hover:border-green-400 focus:border-green-600  p-4  text-gray-400 focus:text-green-500  focus:outline-none focus:shadow-outline"
              type="text"
              name="body"
              id="body"
              placeholder="Something more that you'd like to share"
              onChange={this.handleChange}
              value={this.state.body}
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
