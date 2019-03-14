import styled from "styled-components";

export const Cards = styled.div`
  display: grid;
  grid-gap: 20px;
  color: #444;
  position: absolute;
  margin-top: 20px;
  z-index: -1;

  @media (max-width: 900px) {
    grid-template-columns: 25% 25% 25% 25%;
  }
`;

export const Card = styled.div`
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  padding: 10px;
  font-size: 50%;
  position: relative;
  top: 30px;
  z-index: -1;
`;

export const Heading = styled.h1`
  font-family: "Orbitron", sans-serif;
  font-size: 2rem;
  color: #fbe122;
`;

export const Wrapper = styled.div`
  width=300px;
  border: 5px solid #fbe122;
  border-radius: 5px;
  padding: 20px;
  margin: 20px;
  min-height:300px;
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
