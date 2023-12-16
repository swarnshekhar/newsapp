import React, { Component } from 'react'

export class newsItem extends Component {
    render() {
        let { title, description, imageurl, newsUrl, author, date, source } = this.props;
        return (
            <div>
                <div className="card ">
                    <div style={{
                        display:'flex',
                        justifyContent:'flex-end',
                        position:'absolute',
                        right:'0'

                    }
                    }>

                        <span class="badge rounded-pill bg-danger">
                            {source}
                        </span>
                    </div>
                    <img src={imageurl ? imageurl : "https://static.tnn.in/thumb/msid-105854031,thumbsize-119528,width-1280,height-720,resizemode-75/105854031.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p class="card-text"><small class="text-success">By {author ? author : "Unknown"} On {new Date(date).toGMTString()} </small></p>
                        <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>

            </div>

        )
    }
}

export default newsItem
