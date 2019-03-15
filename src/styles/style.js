import styled from "styled-components";

export const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100%;
  color: #444;
  position: relative;
  top: 30px;
`;

export const Card = styled.div`
  background-color: #444;
  color: #fff;
  border: 2px solid #C8102E;
  border-radius: 5px;
  padding: 5px 25px;
  margin:5px
  font-size: 50%;
  position: relative;
  top: 30px;
  flex-grow: 1;
flex-basis: 0;
  min-height:100px;
  min-width:180px;

  @media (min-width: 920px) {
    min-width: 150px;
  }

  @media (min-width: 480px) and (max-width: 920px) {
    min-width: 150px;
  }

  @media max-width: 480px {
    min-width: 250px;
  }
`;

export const CardHeader = styled.h3`
  font-size:1rem
  font-family: "Orbitron", sans-serif;
  margin-left:25px;
`;

export const Heading = styled.h1`
  font-family: "Orbitron", sans-serif;
  font-size: 2rem;
  color: #fbe122;
`;

export const Wrapper = styled.div`
  border: 5px solid #fbe122;
  border-radius: 5px;
  margin: 20px;
  padding: 0 20px;
  min-height: 440px;
  display: block;
  justify-content: center;
  align-content: center;

  @media (min-width: 920px) {
    margin-right: auto;
    margin-left: auto;
    max-width: 900px;
  }

  @media (min-width: 480px) and (max-width: 920px) {
    margin-right: auto;
    margin-left: auto;
    max-width: 650px;
    padding-right: 10px;
    padding-left: 10px;
  }

  @media max-width: 480px {
    margin-right: auto;
    margin-left: auto;
    max-width: 400px;
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export const SearchBox = styled.div`
  display: grid;
  grid-template-columns: 200px 
  position: absolute;
  z-index: 9999;
  color: #40c1ac;
  font-family: "Orbitron", sans-serif;
  margin-left:40px;
`;

export const SearchLabel = styled.input`
  font-weight: 200;
  position: absolute;
  z-index: 9999;
  width: 200px;
`;

export const SearchInput = styled.input`
  margin: 0;
  width: 200px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const Unordered = styled.ul`
  padding: 0;
  list-style: none;
`;

export const Result = styled.div`
  padding: 3px;
`;
