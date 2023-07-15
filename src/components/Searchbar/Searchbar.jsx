import React from 'react';
import css from "./Searchbar.module.css"



export class Searchbar extends React.Component{
    state={
        query: "",
    }
    handleQueryChange = (event)=>{
        this.setState({ query: event.target.value.toLowerCase() });
    }
    handleSearchbar = (event) =>{
        event.preventDefault()
        if(this.state.query.trim() === ""){
            return
        }
        this.props.onSubmit(this.state.query);
        this.setState({query: ""})
       
      }
    render() {
        return(
            <header className={css.searchbar}>
            <form className={css.form} onSubmit={this.handleSearchbar}>
                <button type="submit" className="button">
                <span className="button-label">Search</span>
                </button>

                <input
                className="input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                onChange={this.handleQueryChange}
                />
            </form>
            </header>
        )
    }
}