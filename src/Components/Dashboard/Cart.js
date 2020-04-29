export default  function Cart (oldCart){
this.item = oldCart.item || {}
this.totalPrice = oldCart.totalPrice || 0
this.totalQuantity = oldCart.totalQuantity || 0 
this.cartName = "Shopright"


this.addToCart  = function(id,item){
    let storedCart = this.item[id]
    if(!storedCart){
      storedCart = this.item[id] = {item , qty:0, price :0  } 
    }
    storedCart.qty++
    storedCart.price += item.price
    this.totalQuantity++
    this.totalPrice += item.price
}

this.reduceByOne = function(id){

const storedCart = this.item[id]
if(storedCart.qty === 0){
    delete storedCart.item[id]
}
else{
    storedCart.qty--

    storedCart.price -= storedCart.item.price
    this.totalQuantity--
    this.totalPrice -= storedCart.item.price
}

}

this.increaseByOne = function(id){
    const storedCart = this.item[id]
    storedCart.qty++
    storedCart.price += storedCart.item.price
    this.totalQuantity++
    this.totalPrice += storedCart.item.price
    return Cart
}

this.toArray = function(){
    const arr = []
    for (const id in this.item){
        arr.push(this.item[id])
    }
    return arr
}
}