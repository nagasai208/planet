import React from 'react';
import axios from 'axios';
import { MainDiv, EachPlanetDiv, PlanetDiv, Favourite, ButtonDiv, FavouriteMainDiv } from './styledComponents'
class Planet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: [],
            favourite: [],
        }

    }
    componentDidMount() {
        axios.get(`https://assignment-machstatz.herokuapp.com/planet`)
            .then(res => {
                const planets = res.data;
                this.setState({ planets });
            })
    }

    onClickPlanet = (event) => {
        const { favourite, planets } = this.state
        planets.map(eachPlanet => {
            if (event.target.id === eachPlanet.id) {
                if (favourite.length === 0) {
                    favourite.push(eachPlanet)
                }
                else {
                    favourite.filter(eachfavourite => {
                        if (event.target.id !== eachfavourite.id) {
                            favourite.push(eachPlanet)
                        }
                    })
                }

            }
        })

    }
    onClickFavouritePlanets = () => {
        const { favourite, planets } = this.state
        if (favourite.length !== 0) {
            this.setState({ planets, favourite })
        }
        else {
            alert("No favourite planets")
        }
    }
    render() {
        const { planets, favourite } = this.state;
        if (favourite.length !== 0) {
            return <FavouriteMainDiv>
                {
                    favourite.map(planets => <EachPlanetDiv>{planets.name}</EachPlanetDiv>)
                }
            </FavouriteMainDiv>
        }
        return (
            <MainDiv>
                <PlanetDiv>
                    {planets.map(planets => <EachPlanetDiv id={planets.id} onClick={this.onClickPlanet}>{planets.name}</EachPlanetDiv>)}
                </PlanetDiv>
                <ButtonDiv>
                    <Favourite onClick={this.onClickFavouritePlanets}>Favourite List</Favourite>
                </ButtonDiv>
            </MainDiv>
        )
    }
}
export default Planet;