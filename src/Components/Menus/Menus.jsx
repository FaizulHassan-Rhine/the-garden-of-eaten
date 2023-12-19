
// import { useEffect, useState } from "react";
// import Menu from "../Menu/Menu";

// const Menus = () => {
//   const [menus, setmenus] = useState([]);
//   useEffect(() => {
//     fetch("menu.json")
//       .then((res) => res.json())
//       .then((data) => setmenus(data));
//   }, []);
//   return (
//     <div id="menuss">
//       <h2 className="text-center font-bold text-3xl mb-16 text-orange-400">
//         {" "}
//         Our Best Seller
//       </h2>
//       <div className="grid md:grid md:grid-cols-3 lg:grid-cols-4 mx-5 justify-items-center gap-y-20 ">
//         {menus.map((menu) => (
//           <Menu key={menu.id} menu={menu}></Menu>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Menus;