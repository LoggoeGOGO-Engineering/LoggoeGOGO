import React from 'react';
import Paper from 'material-ui/Paper';


const SearchListEntry = ({video}) => (
  <Paper style={style}>
    <div onClick={()=>{redirect(video)}} style={{display: 'inline-block'}}>
      <div style={{width: '30%', float: 'left'}}>
        <img className="media-object" 
          src={video.snippet.thumbnails.default.url} 
          alt="" />
      </div>
      <div style={{width: '50%', float: 'right'}}>
        <div style={{fontWeight: 'bold'}}> {video.snippet.title} </div>
        <br/>
        <div style={{color: 'grey'}}> {video.snippet.description} </div>
      </div>
    </div>
  </Paper>
)

const style = {
  height: 'auto',
  width: 'auto',
  margin: '30px',
  textAlign: 'center',
  display: 'block',
  padding: '30px 5px'
}

export default SearchListEntry;