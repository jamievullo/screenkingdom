import React from 'react';

class SearchBar extends React.Component {

    state = { term: "" }

    onInputChange = (event) => {
        // console.log(event.target.value)
        this.setState({ term: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault()

        //make sure to call callback from parent component
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search Videos</label>
                        <input 
                        type="text" 
                        value={this.state.term} 
                        onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;