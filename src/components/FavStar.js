// import React, { useState } from "react";
// import '../styles.css';

// function FavStar({ god, handleClick }) {
//     const [liked, setLiked] = useState(true)
    
//     const fullStar = '★'
//     const emptyStar = '☆'

//     // const handleFavorite = () => {
//     //     setLiked(!liked)
//     //     god.forEach(tc => {
//     //         tc.addEventListener('click', removeCraftEvent)
//     // }}

//     const addGodToFavorites = (e) => {
//         // e.preventDefault();
//         setLiked(!liked)
//         const id = e.target.id
//         fetch(`http://localhost:3001/gods/` + id, {
//           method: 'POST',
//         })
//         .then(() => {
//           console.log(id)
//         //   // console.log(crafts)
//         //   debugger
//         //   crafts = crafts.filter(craft => craft.id !== parseInt(id))
//         //   // console.log(crafts)
//         //   renderCraftListPage();
//         })
//       }



//     return (
//         <div className="favStar"> 
//         <div className="eStar" key={god.id} onClick={addGodToFavorites}>{liked ? emptyStar : fullStar}</div>
//         </div>
//     );
// }
// export default FavStar;