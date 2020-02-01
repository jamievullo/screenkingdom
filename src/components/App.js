import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component {

    state = {
        videos: [], 
        selectedVideo: null
    }

    //sets default video(term) when page first loads
    componentDidMount() {
        this.onTermSubmit('lucas vullo')
    }

    onTermSubmit = async(term) => {
        // console.log(term)
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        // console.log(response.data.items)
        this.setState({
            videos: response.data.items,
            //sets default video in bigger screen after search to first video from data received
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = (video) => {
        // console.log(video)
        this.setState({selectedVideo: video})

    }

    render() {
        return (
        <div className="ui container">
            <SearchBar onTermSubmit={this.onTermSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList 
                            onVideoSelect={this.onVideoSelect} 
                            videos={this.state.videos}
                        />
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default App;
