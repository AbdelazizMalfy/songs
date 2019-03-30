import React from 'react'
import { connect } from 'react-redux';
// import { selectSong } from '../actions';

const SongDetails = (props) => {
    if (!props.song){
        return <div>Select Song</div>
    }else {
        return (
            <div>
                <h3>details for:</h3>
                <p>title: {props.song.title}
                <br />
                duration: {props.song.duration}</p>
            </div>
            
        )
    }
}


const mapStateToProps = (state) => {
    return { song : state.selectedSong}
}

export default connect(mapStateToProps)(SongDetails);