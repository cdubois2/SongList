window.onload = loadList;
var current = 0;
var allSongs = [];

//Prototype for Song objects
function Song(song,artist,album,year)
{
  this.song = song;
  this.artist = artist;
  this.album = album;
  this.year = year;

  this.toString = function(){
    return "Released on " + this.album + " in " + this.year + ", " + this.song 
    + " by " + this.artist;
  }
  this.listened = 0;
  this.play = function(){
    this.listened++;
  }
}

//Adds new instances of songs to the list
function loadList()
{
  allSongs.push(new Song("Hey Jude","The Beatles","Let It Be",1970));
  allSongs.push(new Song("Lodi Dodi","Snoop Dogg","Doggystyle",1993));
  allSongs.push(new Song("Get Lucky","Daft Punk","Random Access Memories",2013));
  allSongs.push(new Song("Inevitable","Shakira","Dónde Están los Ladrones?",1998));
  allSongs.push(new Song("Wagon Wheel","Old Crow Medicine Show","Old Crow Medicine Show",2004));
  displaySong();
}

//Progresses to the next song to the list, or if the end of the list has been
//reached, then loop back to the beginning
function nextSong()
{
  current = (current+1)%allSongs.length;
  displaySong();
}

//Show song's information in the "nowPlaying" span
function displaySong()
{
  document.getElementById("nowPlaying").innerHTML = allSongs[current].toString();
}
