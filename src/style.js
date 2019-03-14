import styled from "styled-components";

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 200px 200px 200px 200px;
  grid-gap: 10px;
  color: #444;
  position: relative;
  z-index: -1;
  top: 30px;
`;

export const Card = styled.div`
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 50%;
  position: relative;
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

export const Results = styled.div`
  position: absolute;
  z-index: 9999;
  color: #40c1ac;
  font-family: "Orbitron", sans-serif;
`;

export const SearchLabel = styled.input`
  font-weight: 200;
`;

export const SearchInput = styled.input`
  margin: 0 20px;
`;
