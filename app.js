const products = [
{ id:1, name:"Milk", price:50, category:"dairy", img:"https://via.placeholder.com/200"},
{ id:2, name:"Bread", price:40, category:"snacks", img:"https://via.placeholder.com/200"},
{ id:3, name:"Eggs", price:90, category:"dairy", img:"https://via.placeholder.com/200"},
{ id:4, name:"Apples", price:120, category:"fruits", img:"https://via.placeholder.com/200"},
{ id:5, name:"Bananas", price:60, category:"fruits", img:"https://via.placeholder.com/200"},
{ id:6, name:"Chips", price:30, category:"snacks", img:"https://via.placeholder.com/200"}
]

let cart=[]

const productContainer=document.getElementById("products")

function displayProducts(list){
productContainer.innerHTML=""

list.forEach(p=>{
productContainer.innerHTML+=`
<div class="product">
<img src="${p.img}">
<h3>${p.name}</h3>
<p>₹${p.price}</p>
<button onclick="addToCart(${p.id})">Add to Cart</button>
</div>
`
})
}

displayProducts(products)

function addToCart(id){
const product=products.find(p=>p.id===id)
cart.push(product)
updateCart()
}

function updateCart(){

const cartItems=document.getElementById("cart-items")
const cartCount=document.getElementById("cart-count")
const total=document.getElementById("total")

cartItems.innerHTML=""
let sum=0

cart.forEach(item=>{
cartItems.innerHTML+=`<p>${item.name} - ₹${item.price}</p>`
sum+=item.price
})

cartCount.innerText=cart.length
total.innerText=sum
}

function toggleCart(){
document.getElementById("cart").classList.toggle("active")
}

function filterCategory(cat){

if(cat==="all"){
displayProducts(products)
return
}

const filtered=products.filter(p=>p.category===cat)
displayProducts(filtered)
}

document.getElementById("search").addEventListener("input",function(){

const value=this.value.toLowerCase()

const filtered=products.filter(p=>
p.name.toLowerCase().includes(value)
)

displayProducts(filtered)
})

function checkout(){
document.getElementById("checkout-modal").style.display="flex"
cart=[]
updateCart()
}

function closeModal(){
document.getElementById("checkout-modal").style.display="none"
}
