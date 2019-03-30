// ACTION CREATOR  
export const selectSong = (song) =>{
    return {
        // RETURN AN ACTION
        type:'SONG_SELECTED',
        payload: song
    }
}