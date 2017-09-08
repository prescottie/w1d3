var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },



// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

printPlaylists: function () {
  var playlistsId = "";
  var playlistName = "";
  var playlistTracks = 0;
    for (var key in this.playlists){
    playlistsId = this.playlists[key].id;
    playlistName = this.playlists[key].name;
    playlistTracks = this.playlists[key].tracks.length + 1;
    console.log(playlistsId + ": " + playlistName + " - " + playlistTracks + " tracks");
  }
},

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

printTracks: function () {
  var trackId = "";
  var trackName = "";
  var tackArtist = "";
  var trackAlbum = "";
    for (var i in this.tracks){
      trackId = this.tracks[i].id;
      trackName = this.tracks[i].name;
      trackArtist = this.tracks[i].artist;
      trackAlbum = this.tracks[i].album;
      console.log(trackId + ": " + trackName + " by " + trackArtist + " (" + trackAlbum + ")");
    }
},

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

printPlaylist: function (playlistId) {
  var playlist = this.playlists[playlistId];
  var logPlaylist = `${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`;
  console.log(logPlaylist);

  playlist.tracks.forEach(function(track) {
    var trackId = this.tracks[track];
    var logTrack = `${trackId.id}: ${trackId.name} by ${trackId.artist} (${trackId.album})`;
    console.log(logTrack);
  });
},

// adds an existing track to an existing playlist

addTrackToPlaylist: function (trackId, playlistId) {
  var track = this.tracks[trackId].id;
  var playlist = this.playlists[playlistId].tracks;
  playlist.push(track);
  console.log(playlist);
},

// generates a unique id
// (use this for addTrack and addPlaylist)

uid: function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
},

// adds a track to the library

addTrack: function (name, artist, album) {
  var trackObj = this.tracks;
  var genId = this.uid();
  var newObj = {};
  newObj.id = genId;
  newObj.name = name;
  newObj.artist = artist;
  newObj.album = album;

  trackObj[genId] = newObj;

console.log(trackObj);
},


// adds a playlist to the library
addPlaylist: function (name) {
  var playlistObj = this.playlists;
  var genId = this.uid();
  var newObj = {};
  newObj.id = genId;
  newObj.name = name;
  newObj.tracks = [];


  playlistObj[genId] = newObj;
console.log(playlistObj);
}

};
library.printPlaylists();
library.printTracks();
library.addTrackToPlaylist("t01", "p02");
library.addTrack("scott", "scoot", "scoottt");
library.addPlaylist("muzik songs");



// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {
};
