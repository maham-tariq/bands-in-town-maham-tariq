import React from "react";

const numberFormat = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'decimal',
  }).format(value);  //Number of followers with commas

const imagePlaceholder = require('./person-placeholder.jpg');

const Artist = ({ artist }) => {
    const artistThumbnail = artist.image_url === undefined ? imagePlaceholder : artist.image_url;


    if(artist.name !== undefined)
    {
    return(
            <div className="container">
                <div className="row">
                <div className="col-lg-4 artist-profile-img">
                    <figure> <img src={artistThumbnail} width="200" alt="img"/></figure>
                </div>
                <div className="col-lg-5 artist-profile pl-4 mt-5">
                    <h2> {artist.name} </h2>
                    <span> {numberFormat(artist.tracker_count)} Followers </span>
                    <span> - {artist.upcoming_event_count} Upcoming Events</span>
                </div>
                <div className="col-lg-2 artist-links">
                    <a className="btn btn-primary" href={artist.url} role="button"> Bands In Town </a>
                     <a className="btn btn-primary" href={artist.facebook_page_url} role="button"> Facebook Link </a>
                </div>
                </div>
            </div>
        )
    }//If there is no value in API
    else if(artist.name === undefined){
        return(<h3> No artists found by this name! </h3>)
    }
}

export default Artist;