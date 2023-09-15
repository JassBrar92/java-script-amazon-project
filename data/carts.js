export const carts=[{
  productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  productQuantity: 0
},
{
  productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
  productQuantity: 0
}];
export function addToCart(productId)
{
  let matchingItem;
    carts.forEach((item)=>{
      if(productId===item.productId){
        matchingItem=item;
      }
    });
    if(matchingItem){
      matchingItem.productQuantity+=1;
    }else{
    carts.push({
      productId:productId,
      productQuantity:1
    });
   }
}