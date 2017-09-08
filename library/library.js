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
             }
};

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  var playlistsId = "";
  var playlistName = "";
  var playlistTracks = 0;
    for (var key in library.playlists){
    playlistsId = library.playlists[key].id;
    playlistName = library.playlists[key].name;
    playlistTracks = library.playlists[key].tracks.length + 1;
    console.log(playlistsId + ": " + playlistName + " - " + playlistTracks + " tracks");

  }

};
// printPlaylists();


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  var trackId = "";
  var trackName = "";
  var tackArtist = "";
  var trackAlbum = "";
    for (var i in library.tracks){
      trackId = library.tracks[i].id;
      trackName = library.tracks[i].name;
      trackArtist = library.tracks[i].artist;
      trackAlbum = library.tracks[i].album;
      console.log(trackId + ": " + trackName + " by " + trackArtist + " (" + trackAlbum + ")");
    }
};
printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var playlist = library.playlists[playlistId];
  var logPlaylist = `${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`;
  console.log(logPlaylist);

  playlist.tracks.forEach(function(track) {
    var trackId = library.tracks[track];
    var logTrack = `${trackId.id}: ${trackId.name} by ${trackId.artist} (${trackId.album})`;
    console.log(logTrack);
  });
};

printPlaylist("p02");

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  var track = library.tracks[trackId].id;
  var playlist = library.playlists[playlistId].tracks;
  playlist.push(track);
  console.log(playlist);
};
addTrackToPlaylist("t01", "p02");

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

// adds a track to the library

var addTrack = function (name, artist, album) {
  var trackObj = library.tracks;
  var genId = uid();
  var newObj = {};
  newObj.id = genId;
  newObj.name = name;
  newObj.artist = artist;
  newObj.album = album;

  trackObj[genId] = newObj;

console.log(trackObj);
};
 addTrack("scott", "scott", "scott");

// adds a playlist to the library

var addPlaylist = function (name) {
  var playlistObj = library.playlists;
  var genId = uid();
  var newObj = {};
  newObj.id = genId;
  newObj.name = name;
  newObj.tracks = [];


  playlistObj[genId] = newObj;
console.log(playlistObj);
};
addPlaylist("muzik");

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

};
