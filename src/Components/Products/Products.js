import classes from "./Product.module.css";
import * as React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: "Maybelline New York Lash Sensational Sky High Waterproof Mascara",
    price: "599",
    image:
      "https://images-static.nykaa.com/media/catalog/product/2/8/28449d8MAYBE00000375_1.jpg",
  },
  {
    id: 2,
    title:
      "SUGAR Matte Attack Transferproof Lipstick - 05 Tan Halen (Chocolate Brown)",
    price: "637",
    image:
      "https://images-static.nykaa.com/media/catalog/product/b/4/b457c8f8904320702311_1.jpg",
  },
  {
    id: 3,
    title:
      "Swiss Beauty Ultimate 9 Pigmented Colors Eyeshadow Palette - Shade 02",
    price: "202",
    image:
      "https://images-static.nykaa.com/media/catalog/product/c/3/c3f689cNYSWISSB00255_0.jpg",
  },
];

export default function Products() {
  const productList = DUMMY_PRODUCTS.map((product) => {
    return (
      <div className={classes.products}>
        <ul
          key={product.id}
          className={classes.list}
        >
          <Card sx={{ maxWidth: 300 }} className={classes.item}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
            <div className={classes.content}>
              <h4>₹{product.price}</h4>
              <Button variant="contained" color="secondary">
                Add to Cart
              </Button>
            </div>
          </Card>
        </ul>
      </div>
    );
  });
  return (
    <div>
      {productList}
    </div>
  );
}

// const Products = () => {
//   const productList = DUMMY_PRODUCTS.map((product) => {
//     return (
//       <div className={classes.products}>
//         <ul className={classes.list} key={product.id}>
//           <div className={classes.item}>
//             <h3>{product.title}</h3>
//             <img src={product.image} alt={product.title} />
//             <div className={classes.content}>
//               <h4>₹{product.price}</h4>
//             </div>
//           </div>
//         </ul>
//         ;
//       </div>
//     );
//   });
//   return <div>{productList}</div>;
// };

// export default Products;
