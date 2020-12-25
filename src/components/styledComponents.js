import styled from 'styled-components'
const MainDiv = styled.div`
background-color:gray;`
const PlanetDiv = styled.div`
display:flex;
justify-content:space-between;
flex-wrap:wrap`;

const EachPlanetDiv = styled.div`
width:300px;
border:1px solid green;
border-radius:100%;
height:200px;
display:flex;
justify-content:center;
align-items:center;
margin:10px;
background-color:blue
`;
const ButtonDiv = styled.div`
display:flex;
justify-content:center;`
const Favourite = styled.button`
width:200px;
height:40px;
border-radius:10px;
background-color:yellow`

const FavouriteMainDiv = styled.div`
display:flex;
justify-content:space-between;
flex-wrap:wrap;
background-color:gray;
height:100vh`
export { MainDiv, EachPlanetDiv, PlanetDiv, Favourite, ButtonDiv, FavouriteMainDiv }