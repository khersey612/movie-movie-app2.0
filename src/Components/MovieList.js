import React from "react";
import ReviewForm from "./ReviewForm";
import Container from "./Container";
export default class MovieList extends React.Component {
    render() {
        return(
            <div>
<div className="FantasticBeasts">
    <img src="https://picfiles.alphacoders.com/383/38391.jpg"
    style={{height: "300px", paddingRight: "10px", paddingTop: "10px"}} ></img>
    <p>
    Fantastic Beasts and Where to Find Them is a spin-off from
    the books in Rowling's Harry Potter series and is intended 
    to be one of the books Harry and his friends use themselves. 
    This book is among Harry Potter's own schoolbooks, with 
    Fantastic Beasts and Where to Find Them purportedly written 
    by Newt Scamander, an expert in "magizoology."
    <b>IMDb Rating: 7.3/10</b>
    </p>
    <Container />
    <ReviewForm />
</div>

<div className="HungerGames">
    <img src="https://www.filmofilia.com/wp-content/uploads/2012/03/the-hunger-games-poster.jpg"
    style={{height: "300px", paddingRight: "10px", paddingTop: "10px"}} ></img>
    <p>A resourceful teen (Jennifer Lawrence) takes her younger
        sister's place in a brutal contest in which youths from 
        each of 12 districts fight to the death on live television.
    <b>IMDb Rating: 7.2/10</b>
    </p>
    <Container />
    <ReviewForm />
</div>
<div className="GuardiansOfTheGalaxy">
    <img src="http://cafmp.com/wp-content/uploads/2016/05/Guardians-of-the-Galaxy-1.jpg"
    style={{height: "300px", paddingRight: "10px", paddingTop: "10px"}} ></img>
    <p>A space adventurer (Chris Pratt) becomes the quarry of
        bounty hunters after he steals an orb coveted by a 
        treacherous villain, but after he discovers the orb's 
        true power, he must find a way to unite four ragtag 
        rivals to save the universe. 
    <b>IMDb Rating: 8/10</b>
    </p>
    <Container />
    <ReviewForm />
</div>


</div>
        );
    }
}
