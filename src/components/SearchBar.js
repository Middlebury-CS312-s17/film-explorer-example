import React from 'react';




function SearchBar(props){
  const searchField =(
    <input type="text"
        placeholder="Search"
        value={props.searchTerm}
        onChange={(event)=>{props.setTerm(event.target.value)}}
        />
  );

  const sortTool = (
    <select value={props.sortType} onChange={(event)=>{props.setType(event.target.value)}}>
    <option value="title">Title</option>
    <option value="release_date">Date</option>
    <option value="vote_average">Rating</option>
    </select>
  );

  return (
    <div>
    {searchField}
    {sortTool}
    </div>
  );

}


export default SearchBar;
