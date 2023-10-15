const getSuppliers = async () => {
  const response = await fetch("https://northwind.vercel.app/api/suppliers");
  const suppliers = await response.json();

  return suppliers;
};

const suppliersByCompanyNameStartsWithM = async () => {
  const suppliers = await getSuppliers();

  const company = suppliers.filter((supplier) =>
    supplier.companyName.startsWith("M")
  );
  console.log(company);
};

const suppliersFromJapan = async () => {
  const suppliers = await getSuppliers();

  const supplierFromJapan = suppliers.filter(
    (supplier) => supplier.address.country === "Japan"
  );
  console.log(supplierFromJapan);
};

const suppliersToDOM = async () => {
  const suppliers = await getSuppliers();

  const ul = document.createElement("ul");
  suppliers.forEach((supplier) => {
    const li = document.createElement("li")
    li.textContent = supplier.companyName;
    ul.appendChild(li);
  });

  document.body.appendChild(ul);
};

suppliersByCompanyNameStartsWithM();
suppliersFromJapan();
suppliersToDOM();

