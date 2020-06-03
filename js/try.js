var products;



var productName = document.getElementById("productname")

var productPrice = document.getElementById("productprice")

var productDesc = document.getElementById("productdesc")

var productCompany = document.getElementById("productcompany")

var row = document.getElementById("mydiv")

var ser = document.getElementById("search")

var toggle = false ;

var globalIndex ;


if (localStorage.getItem("products") == null)
{
    products = [] ;
}
else 
{
    products = JSON.parse(localStorage.getItem("products"))
    show(products)
}

mybtn.onclick = function ()
{
    if ( toggle === false)
    {
        add()
    }
    else 
    {
        updatedata()
    }
}

function add() 
{
    var product = 
    {
        name : productName.value ,
        price : productPrice.value,
        description : productDesc.value,
        company : productCompany.value,
    }
    products.push(product)

    localStorage.setItem("products", JSON.stringify(products))
    console.log (products)
    show(products)
}

function show(myarr)
{
    var col = "" ; 
    for (var i = 0 ; i < myarr.length ; i++) 
    {

   

    col+= `<div class="col-md-4">
    
    <div class="mine text-center">
    
    <h1>`+myarr[i].name+`</h1>
    
    <h2>`+myarr[i].description+`</h2>

    <h3>`+myarr[i].company+`</h3>

    <p>`+myarr[i].price+`</p>

    <button class="btn btn-danger" onclick="delet(`+i+`)" > Delete </button>

    <button class="btn btn-warning" type="reset" onclick="ret(`+i+`)" > update </button>
    

   

    </div>
    </div>

    
    `
   }
   row.innerHTML = col
}


function delet (index) 
{
  products.splice(index,1)
  localStorage.setItem("products", JSON.stringify(products))

  show(products)
}

function ret (index)
{
    toggle = true ;
    productName.value = products[index].name
    productPrice.value = products[index].price
    productCompany.value = products[index].company
    productDesc.value = products[index].description
    globalIndex = index;
    mybtn.innerHTML = "Update"

}

function updatedata ()
{
    products[globalIndex].name =  productName.value
    products[globalIndex].price = productPrice.value
    products[globalIndex].company = productCompany.value
    products[globalIndex].description = productDesc.value

    show(products) ; 
    toggle = false 
}

ser.onkeyup = function()
{
   var temp = ser.value ; 

   var found = [] ;
   

   for (var i=0 ; i < products.length ; i++)
   {
     var myName = products[i].name ; 
       if(myName.includes(temp))
       {
           found.push(products[i])
       }
   }

show(found)
}