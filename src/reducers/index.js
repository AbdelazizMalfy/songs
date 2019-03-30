import { combineReducers } from 'redux';


const songReducer = () => {
    return [
        {title:"Tamali ma3ak", duration:"4:32"},
        {title:"khayef", duration:"3:43"},
        {title:"Ensan", duration:"2:44"},
        {title:"Ebky", duration:"3:59"}
    ]
}


const selectSongReducer = (selectedSong = null, action) => {
    if (action.type ==="SONG_SELECTED"){
        return action.payload ;
    } else {
        return selectedSong;
    }
}


export default combineReducers({
    songs: songReducer,
    selectedSong: selectSongReducer
})