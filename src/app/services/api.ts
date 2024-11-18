import axios from "axios";

export const getCharactersRequest = async () =>
  axios.get("https://rickandmortyapi.com/api/character");
