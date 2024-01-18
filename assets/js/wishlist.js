const basketdiv = document.getElementById('wishlistdiv')

function getproducts(){
    wishlistdiv.innerHTML = ''
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    wishlist.map((item,index)=>{
        const box  = document.createElement('div')
        box.className = 'box col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4'
        box.innerHTML = `
        <div class="boxdiv">
        <img src="${item.image}" alt="">
        <p>${item.name}</p>
        <p>${item.count}</p>
        <p>${item.price}</p>
        <button onclick="removeItem(${index})">Remove</button>
        </div>

        `
        basketdiv.appendChild(box)
    })
}
getproducts()

function removeItem(index){
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
wishlist.splice(index,1)
localStorage.setItem('wishlist',JSON.stringify(wishlist))
getproducts()
}