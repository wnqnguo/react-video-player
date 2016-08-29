import React from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'
const API_KEY ='AIzaSyDIGZqJQwaGSs6p0BOuQ6UBBupzlzTmgxw';
//Create a new component. 
YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
	console.log(data);
})
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}


//Take this component's generated html and put 
//it on the page(in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));
