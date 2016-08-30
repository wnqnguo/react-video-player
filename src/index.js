import _ from 'lodash';
import React, { Component }from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
const API_KEY ='AIzaSyDIGZqJQwaGSs6p0BOuQ6UBBupzlzTmgxw';
import VideoDetail from './components/video_detail'
//Create a new component. 

class App extends Component {
	constructor(props){
		super(props);
		this.state = { 
			videos: [],
			selectedVideo: null 
		};
		this.videoSearch('surfboards');
		
	}
	videoSearch(term){
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo : videos[0]
			})
			//same as this.setState ({videos:videos}), es 6 key and properties are the same
		});
	}
	render(){
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
		return (
		<div>
			<SearchBar onSearchTermChange={videoSearch} />
			<VideoDetail video={this.state.selectedVideo}/>
			<VideoList 
				onVideoSelect={selectedVideo => this.setState({selectedVideo})}
				videos={this.state.videos} />
		</div>
		);
	}	
}


//Take this component's generated html and put 
//it on the page(in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));
