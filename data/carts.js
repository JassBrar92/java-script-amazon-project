export let carts=JSON.parse(localStorage.getItem('cart'));
if(!carts){
  carts=[{
    productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    productQuantity: 2
  },
  {
    productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
    productQuantity: 1
  }];
}
function storeCartInLocalStorage(){
  localStorage.setItem('cart',JSON.stringify(carts));
}
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
   storeCartInLocalStorage();
}
export function removeItemFromCart(productId){
  const newCart=[];
  carts.forEach((cartItem)=>{
    if(cartItem.productId!==productId){
      newCart.push(cartItem);
    }
  });
  carts=newCart;
  storeCartInLocalStorage();
}