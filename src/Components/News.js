import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner'
import PropTypes from 'prop-types'

export class News extends Component {

  // default props
  static defaultProps = {
    country: 'in',
    size: 6,
    category: 'top'
  }

  static propTypes = {
    country: PropTypes.string,
    size: PropTypes.number,
    category: PropTypes.string
  }

  constructor(props) {
    super(props);
    console.log("hello i am constructor from news component");
    this.state = {
      results: [],
      loading: false,
      nextPage: null,   // token for next page
      prevTokens: []    // stack for previous pages
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });

    let url = `https://newsdata.io/api/1/latest?apikey=${this.props.apiKey}&country=${this.props.country}&category=${this.props.category}&language=en&size=${this.props.size}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      results: Array.isArray(parsedData.results) ? parsedData.results : [],
      nextPage: parsedData.nextPage || null,
      prevTokens: [],
      loading: false,
    });
  }

  handleNextClick = async () => {
    if (this.state.nextPage) {
      this.setState({ loading: true });

      let url = `https://newsdata.io/api/1/latest?apikey=${this.props.apiKey}&country=${this.props.country}&category=${this.props.category}&language=en&size=${this.props.size}&page=${this.state.nextPage}`;
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState((prevState) => ({
        results: Array.isArray(parsedData.results) ? parsedData.results : [],
        nextPage: parsedData.nextPage || null,
        prevTokens: [...prevState.prevTokens, prevState.nextPage], // store old token
        loading: false,
      }));
    }
  };

  handlePrevClick = async () => {
    if (this.state.prevTokens.length > 0) {
      this.setState({ loading: true });

      let prevTokensCopy = [...this.state.prevTokens];
      let prevToken = prevTokensCopy.pop();

      let url = `https://newsdata.io/api/1/latest?apikey=${this.props.apiKey}&country=${this.props.country}&category=${this.props.category}&language=en&size=${this.props.size}&page=${prevToken}`;
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        results: Array.isArray(parsedData.results) ? parsedData.results : [],
        nextPage: parsedData.nextPage || null,
        prevTokens: prevTokensCopy,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          KhabarPoint - Top Headlines
        </h1>

        {this.state.loading && <Spinner />}

        <div className="row">
          {Array.isArray(this.state.results) &&
            this.state.results.map((element) => (
              <div className="col-md-4" key={element.link}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description.slice(0, 88) : ""}
                  imageUrl={element.image_url}
                  newsUrl={element.link}
                  author={element.creator}
                  date={element.pubDate}
                  sources={element.source_name}
                />
              </div>
            ))}
        </div>

        <div className="container d-flex justify-content-between my-3">
          <button
            disabled={this.state.prevTokens.length === 0} // ✅ fix
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>

          <button
            disabled={!this.state.nextPage}  // ✅ fix
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    )
  }
}

export default News
