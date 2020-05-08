import React from "react";
import TopRated from "./components/TopRated";
import Nav from "./components/Nav";
import { API_URL as url } from "./components/constants";
import axios from "axios";

class App extends React.Component {
  state = { selected: "top_rated", movies: [] };
  componentDidMount() {
    axios
      .get(
        `${url}${this.state.selected}?api_key=2c8c82d35523c6f5e92a4baf4142f364&language=en-US&page=1`
      )
      .then((resp) => this.setState({ movies: resp.data.results }));
  }

  handleClicked = (id) => {
    this.setState({ selected: id.id });
  };
  handleFetch = (url) => {
    this.setState({ movies: url });
  };

  render() {
    return (
      <>
        <Nav
          onClick={this.handleClicked}
          onSearch={this.handleFetch}
          selected={this.state.selected}
        />
        <TopRated movies={this.state.movies} />
      </>
    );
  }
}

export default App;
