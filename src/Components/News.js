import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {


  // articles = [
  //   {
  //     "source": { "id": "cbs-news", "name": "CBS News" },
  //     "author": null,
  //     "title": "Russia launches its largest drone attack on Ukraine since start of invasion - CBS News",
  //     "description": "Ukraine said on Saturday it downed 74 out of 75 drones Russia launched at it overnight, mostly in the direction of Kyiv.",
  //     "url": "https://www.cbsnews.com/news/russia-launches-largest-drone-attack-ukraine-kyiv-since-start-of-invasion/",
  //     "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/11/26/6840a86a-b121-416a-adf8-bfac9856a53f/thumbnail/1200x630/12ce144153f21848193cb295c1aba486/gettyimages-1802012857.jpg?v=5659e73acd91751548aa89950cf015b0",
  //     "publishedAt": "2023-11-26T01:30:00Z",
  //     "content": "Ukraine said on Saturday it had downed 74 out of 75 drones Russia launched at it overnight, in what it said was the biggest such attack since the start of the invasion.\r\nThe Ukrainian army said Russi… [+4320 chars]"
  //   },
  //   {
  //     "source": { "id": "cbs-news", "name": "CBS News" },
  //     "author": "Faris Tanyos",
  //     "title": "Second group of Hamas-held hostages released after hours-long delay; Temporary cease-fire holds - CBS News",
  //     "description": "Following a lengthy delay, a second group of Hamas-held hostages were freed following the release of an initial group of 24 hostages on Friday.",
  //     "url": "https://www.cbsnews.com/news/second-group-of-hamas-hostages-released-as-gaza-cease-fire-holds/",
  //     "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/11/26/ae52bf7e-4646-42f5-aa6b-07b43fb4197b/thumbnail/1200x630/d4317a55ad1b1496b53ac8ecd1a08f28/gettyimages-1802697687.jpg?v=5659e73acd91751548aa89950cf015b0",
  //     "publishedAt": "2023-11-26T01:10:00Z",
  //     "content": "A second group of 17 hostages who had been held captive in Gaza since being kidnapped by Hamas militants in the Oct. 7 terror attack on Israel were released late Saturday night after an hours-long de… [+10225 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "PBS" },
  //     "author": null,
  //     "title": "Study links ultra-processed foods to higher depression risk - PBS NewsHour",
  //     "description": "The food we eat affects us in many ways. A recent study from Massachusetts General Hospital and Harvard Medical School found a link between the consumption of ultra-processed foods and an increase in the risk of depression. Ali Rogin speaks with Olivia Okerek…",
  //     "url": "https://www.pbs.org/newshour/show/researcher-explains-connection-between-ultra-processed-foods-and-depression",
  //     "urlToImage": "https://d3i6fh83elv35t.cloudfront.net/static/2023/11/Food-1024x683.jpg",
  //     "publishedAt": "2023-11-25T22:40:19Z",
  //     "content": "The food we eat affects us in many ways. A recent study from Massachusetts General Hospital and Harvard Medical School found a link between the consumption of ultra-processed foods and an increase in… [+164 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "UPI.com" },
  //     "author": "Patrick Hilsman",
  //     "title": "North Korea says Kim Jong Un has examined photos from new spy satellite - Yahoo News",
  //     "description": "North Korean leader Kim Jong Un has examined photos taken of an American carrier by the communist nation's first spy satellite, state media reported Saturday...",
  //     "url": "https://www.upi.com/Top_News/World-News/2023/11/25/kim-jong-un-examines-spy-satellite-photos/9181700934290/",
  //     "urlToImage": "https://media.zenfs.com/en/united_press_international_articles_356/58c6e0a19436118a3b4eea231c2e2067",
  //     "publishedAt": "2023-11-25T20:19:18Z",
  //     "content": "Nov. 25 (UPI) -- North Korean leader Kim Jong Un has examined photos taken of an American carrier by the communist nation's first spy satellite, state media reported Saturday.\r\nKim surveyed the photo… [+1277 chars]"
  //   },
  //   {
  //     "source": { "id": "abc-news", "name": "ABC News" },
  //     "author": "The Associated Press",
  //     "title": "One of world's largest icebergs drifting beyond Antarctic waters - ABC News",
  //     "description": "The iceberg is about three times the size of New York City.",
  //     "url": "https://abcnews.go.com/Technology/wireStory/worlds-largest-icebergs-drifting-antarctic-waters-after-grounded-105152907",
  //     "urlToImage": "https://i.abcnewsfe.com/a/e0de6aa5-23bf-46d9-b4dc-5f9c0aea7f59/wirestory_b6fcfc99939659aaa26fdba0b3e17f1f_16x9.jpg?w=992",
  //     "publishedAt": "2023-11-25T17:21:10Z",
  //     "content": "LONDON -- One of the worlds largest icebergs is drifting beyond Antarctic waters, after being grounded for more than three decades, according to the British Antarctic Survey.\r\nThe iceberg, known as A… [+1147 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "YouTube" },
  //     "author": null,
  //     "title": "Hamas releases 10 Thai hostages taken from Israel in separate deal | DW News - DW News",
  //     "description": "Hamas has released ten Thai nationals and one Filipino taken during the October 7 attacks. Thai authorities released images of them in an Israeli hospital. B...",
  //     "url": "https://www.youtube.com/watch?v=DaboSLKSkwA",
  //     "urlToImage": "https://i.ytimg.com/vi/DaboSLKSkwA/maxresdefault.jpg",
  //     "publishedAt": "2023-11-25T13:23:35Z",
  //     "content": null
  //   },
  //   {
  //     "source": { "id": null, "name": "Hindustan Times" },
  //     "author": "Tuhin Das Mahapatra",
  //     "title": "Nasa warns, a 'perfect storm' is expected hit Earth tomorrow - Hindustan Times",
  //     "description": "Geomagnetic storms could enhance aurora and be visible in lower latitudes. Possible collision between CME and Earth by late November 25. | World News",
  //     "url": "https://www.hindustantimes.com/world-news/nasa-warns-a-perfect-storm-is-expected-hit-earth-tomorrow-101700894023342.html",
  //     "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/11/25/1600x900/NASA_1695007668317_1700895269861.jpg",
  //     "publishedAt": "2023-11-25T07:30:19Z",
  //     "content": "The sun is experiencing a surge of activity, with many sunspots appearing on its surface and releasing hot plasma into space.\r\nNASA has shared an image capturing the sun in the midst of a solar flare… [+3426 chars]"
  //   }
  // ]
  static defaultProps = {
    country: 'in',
    pagesize: 8,
    category: "General"

  }
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    console.log('hello people this is a constructor from news component')
    this.state = {
      // articles: this.articles,
      articles: [],
      loading: false,
      page: 1,
      totalResults:0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)}-NewsMonkey`;
  }
  async updatePage() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&category=${this.props.category}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    
    let parseData = await data.json();
    console.log(parseData)
    this.props.setProgress(70);

    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false
    })
    
    this.props.setProgress(99);
  }
  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=c7159207e3784bd6bf50faa2aa32828a&page=1&pagesize=${this.props.pagesize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parseData = await data.json();
    // console.log(parseData)
    // this.setState({ articles: parseData.articles,
    //   totalResults:parseData.totalResults,
    // loading:false })
  this.updatePage();
  }

  handlepreviousclick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=c7159207e3784bd6bf50faa2aa32828a&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parseData = await data.json();
    // console.log(parseData)
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parseData.articles,
    //   loading:false
  this.setState({ page: this.state.page - 1 });
    await this.updatePage();
  }


  handleNexclick = async () => {
    // if(!(this.state.page +1>Math.ceil(this.state.totalResults/this.props.pagesize))){
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=c7159207e3784bd6bf50faa2aa32828a&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
    //   this.setState({loading:true});
    //   let data = await fetch(url);
    //   let parseData = await data.json();
    //   console.log(parseData)
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parseData.articles,
    //     loading:false
    this.setState({ page: this.state.page + 1 });
    await this.updatePage();
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page+1});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=c7159207e3784bd6bf50faa2aa32828a&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData)
    await this.setState({
      articles:this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      loading: false


    
  })
  };


  render() {
    return (
      <div className='container'>
        <h1 className="text-center" style={{ margin: '35px 0px' }} >{this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll style={{overflow:'hidden'}}
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
        
          <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 88) : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
              </div>
            })}
          </div>
        </InfiniteScroll>
      </div>
    )
  }
}

export default News
