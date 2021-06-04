import React from 'react'; 
import { Link } from 'react-router-dom'
import styles from './CharacterItem.module.css'; 

//typescript wants you to type your props
interface Props {
  id: number;
  name: string;
  imageUrl: string;
}

//define component and the props it is taking in -- reminds me of proptypes 
//React.FC - react functional component -- typescript notation 

const CharacterItem: React.FC<Props> = ({
  id, name, imageUrl
}) => {
 return (
   <div>
     <Link
      to={`/detail/${id}`}
      className={styles.link}
     >
       <figure>
         <img 
         src={imageUrl}
         alt={name}
         className={styles.img}></img>
         <figcaption>{name}</figcaption>
       </figure>
     </Link>
   </div>
 )
}

export default CharacterItem; 