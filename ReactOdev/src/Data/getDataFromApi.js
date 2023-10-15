async function getDataFromApi(signal) {
  //https://northwind.vercel.app/api/suppliers
  const response = await fetch("https://northwind.vercel.app/api/suppliers",{signal});
  const data = await response.json();

  if (!data) {
    return null;
  }
  return data;
}

export default getDataFromApi;
