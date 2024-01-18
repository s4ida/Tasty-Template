const filterdata = document.getElementById('filterdata')
const searchform = document.getElementById('searchform')
const searhinput = document.getElementById('searchinput')
const searchbutton = document.getElementById('searchbutton')
const postform = document.getElementById("postform");
const nameinp = document.getElementById("nameinp");
const priceinp = document.getElementById("priceinp");

function getProducts() {
    table.innerHTML = ``
    axios
      .get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products`)
      .then(res => {
        products = res.data
        products.map(item => {
          console.log(item)
          let addtable = document.createElement("tr")
          addtable.style.display = 'flex'
          addtable.style.width = '100%'
          addtable.innerHTML = ` 
          <div class="boxdiv">
            <img src="${item.image}" alt="">
            <p>${item.name}</p>
            <p>${item.price}</p>
            <button onclick="removeItem(${item.id})">Remove</button>
            </div>
            
              `
          table.appendChild(addtable)
        })
      })
  }
  getProducts()

  function sortDefault(){
   table.innerHTML = ''
    let productvalue = filterdata.value;
    if(productvalue === '1'){
        axios
        .get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products`)
        .then(res => {
          products = res.data
          products.map(item => {
            console.log(item)
            let addtable = document.createElement("tr")
            addtable.style.display = 'flex'
            addtable.style.width = '100%'
            addtable.innerHTML = ` 
            <div class="boxdiv">
            <img src="${item.image}" alt="">
            <p>${item.name}</p>
            <p>${item.price}</p>
            <button onclick="removeItem(${item.id})">Remove</button>
            </div>v
                `
            table.appendChild(addtable)
          })
        })
    }
    }
  filterdata.addEventListener('change',sortDefault)

  function sortAZ(){
    table.innerHTML = ''
    let productvalue = filterdata.value;
    if(productvalue === '2'){
        axios.get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products`)
        .then(res => {
          products = res.data
        let azproduct = products.sort((a,b)=>a.name.localeCompare(b.name))

          azproduct.map(item => {
            console.log(item)
            let addtable = document.createElement("tr")
            addtable.style.display = 'flex'
            addtable.style.width = '100%'
            addtable.innerHTML = ` 
            <div class="boxdiv">
            <img src="${item.image}" alt="">
            <p>${item.name}</p>
            <p>${item.price}</p>
            <button onclick="removeItem(${item.id})">Remove</button>
            </div>
                `
            table.appendChild(addtable)
          })
   
        })
    }
    }
    filterdata.addEventListener('change',sortAZ)

    function sortZA(){
        table.innerHTML = ''
        let productvalue = filterdata.value;
        if(productvalue === '3'){
            axios.get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products`)
            .then(res => {
              products = res.data
            let zaproduct = products.sort((a,b)=>b.name.localeCompare(a.name))
              zaproduct.map(item => {
                console.log(item)
                let addtable = document.createElement("tr")
                addtable.style.display = 'flex'
                addtable.style.width = '100%'
                addtable.innerHTML = ` 
                <div class="boxdiv">
                <img src="${item.image}" alt="">
                <p>${item.name}</p>
                <p>${item.price}</p>
                <button onclick="removeItem(${item.id})">Remove</button>
                </div>
                    `
                table.appendChild(addtable)
              })
       
            })
        }
        }
        filterdata.addEventListener('change',sortZA)


        function removeItem(id) {
            axios
              .delete(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products/${id}`)
              .then((res) => {
                getProducts();
              });
          }
          
          function postProduct(e) {
            e.preventDefault();
            axios
              .post(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products`, {
                name: nameinp.value,
                price: priceinp.value,
              })
              .then((res) => {
                getProducts();
                postform.reset();
              });
          }
          
          postform.addEventListener("submit", postProduct);
          