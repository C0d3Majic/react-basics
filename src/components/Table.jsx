import React, { Component}  from 'react';
import Button from './Button';

const isSearched = searchTerm => item =>
item.title.toLowerCase().includes(searchTerm.toLowerCase());
const largeColumn = {
    width: '40%',
    };
    
const midColumn = {
    width: '20%',
};

const smallColumn = {
    width: '10%',
};

const Table = ({ list, pattern, onDismiss }) =>
    <div className="table">
        {list.filter(isSearched(pattern)).map(item =>
            <div key={item.objectID} className="table-row">
                <span className={midColumn}>
                    <a href={item.url}>{item.title}</a>
                </span>
                <span className={largeColumn}>
                    {item.author}
                </span>
                <span className={smallColumn}>
                    {item.num_comments}
                </span>
                <span className={smallColumn}>
                    {item.points}
                </span>
                <span className={smallColumn}>
                    <Button
                        onClick={() => onDismiss(item.objectID)}
                        className="button-inline"
                    >
                    Dismiss
                    </Button>
                </span>
            </div>
        )}
    </div>
export default Table;