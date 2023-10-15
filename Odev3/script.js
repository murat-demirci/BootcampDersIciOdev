const productsToDOM = async () => {
  const products = await axios.get("https://northwind.vercel.app/api/products");
  const productsListUlTag = document.getElementById("productsList");

  products.data.forEach((products) => {
    const li = document.createElement("li");
    li.textContent = products.name;
    productsListUlTag.appendChild(li);
  });
};

const postData = async (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const unitPrice = document.getElementById("unitPrice").value;
  const unitsInStock = document.getElementById("inStock").value;
  const categoryId = document.getElementById("categoryId").value;

  const response = await axios.post(
    "https://northwind.vercel.app/api/products",
    {
      name,
      unitPrice,
      unitsInStock,
      categoryId,
    }
  )
  .then((res) => alert("Success"))
  .catch((error) => alert(`Errors : ${error}`));

  console.log(response);
};

const deleteData = async (event) => {
  event.preventDefault();
  const id = document.getElementById("id").value;

  await axios
    .delete("https://northwind.vercel.app/api/products/" + id)
    .then((res) => alert("Success"))
    .catch((error) =>alert(`Errors : ${error}`));
};

productsToDOM();
