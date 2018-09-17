import React, { Component}  from 'react';


/* class Search extends Component {
    render() {
        const { value, onChange, children } = this.props;
        return (
            <form>
                {children}
                <input
                type="text"
                value={value}
                onChange={onChange}
                />
            </form>
        );
    }
} */

const Search = ({ value, onChange, children }) => {
    return (
    <form>
        {children} <input
        type="text"
        value={value}
        onChange={onChange}
        />
        </form>
    );
}

export default Search;