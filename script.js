const showCustomerId = async ()=>{
    const body = document.querySelector("body");

    await fetch("https://northwind.vercel.app/api/orders")
    .then(res => res.json())
    .then(data =>{
        const ul = document.createElement("ul");
        data.forEach(el => {
            const li = document.createElement("li");
            li.textContent = el.customerId;
            ul.appendChild(li)
        });
        body.append(ul)
    })
}

const showOrderCountByCountryUSA = async ()=>{
    await fetch("https://northwind.vercel.app/api/orders")
    .then(res => res.json())
    .then(data =>{
        var count = 0;
        data.forEach(el=>{
            if(el.shipAddress.country === "USA"){
                count++
            }
        });

        console.log("Order from USA: ",count)
    })
}

const showOrderByDate = async ()=>{
    await fetch("https://northwind.vercel.app/api/orders")
    .then(res => res.json())
    .then(data =>{
        var arr = [];
        data.forEach(el=>{
            if(el.orderDate.includes("1996")){
                arr.push(el)
            }
        });

        console.log("Orders by 1996: ",arr)
    })
}

const showOrderDelayed = async ()=>{
    await fetch("https://northwind.vercel.app/api/orders")
    .then(res => res.json())
    .then(data =>{
        var arr = [];
        data.forEach(el=>{
            var shippedDate = new Date(el.shippedDate).toLocaleDateString();
            var requiredDate = new Date(el.requiredDate).toLocaleDateString();

            if(shippedDate > requiredDate){
                arr.push(el)
            }
        });
        console.log("Delayed order: ",arr)
    })
}

//showCustomerId()
//showOrderCountByCountryUSA();
//showOrderByDate();
//showOrderDelayed();