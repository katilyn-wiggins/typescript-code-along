import { Character } from '../types/types'; 
const url = process.env.REACT_APP_API_URL as string

export const getCharacters = async(): Promise<Character[]> => {
  const res = await fetch(url); 
  const json = await res.json(); 

  if(!res.ok) throw new Error('EEEEEERORRRRR');
  
  return json; 
}

export const getCharactersById = async(id: string): Promise<Character> => {
  const res = await fetch(`${url}/${id}`);
  const json = await res.json(); 

  if(!res.ok) throw new Error('EEERROORRRRRR'); 

  return json; 
}

//get character by name or partial name 
export const getCharactersByName = async(name: string): Promise<Character[]> => {
  const res = await fetch(`${url}/name/${name}`); 
  const json = await res.json(); 

  if(!res.ok) throw new Error('somethins not right here...'); 

  return json; 
}

//in typescript you want to tell your functions what they are expecting to return 
// go to types folder and make a type (interface) for it 
// import the interface 
//use brackets/array notation to expect more than one 'character'
//in create-react-app .env everything must start with REACT_APP
//must declare url as string 