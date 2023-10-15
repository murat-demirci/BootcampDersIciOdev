import getDataFromApi from "../../Data/getDataFromApi";
import { useEffect, useState } from "react";

function TableIndex() {
  const [suppliers, setSuppliers] = useState([]);

  async function fetchSuppliers(signal) {
    const data = await getDataFromApi(signal);
    setSuppliers(data);
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchSuppliers(signal);

    return ()=>{
        controller.abort();
    }
  }, []);

  return (
    <table className="w3-table w3-striped">
      <thead>
        <tr>
          <td>Id</td>
          <td>Company Name</td>
          <td>Contact Name</td>
          <td>Contact Title</td>
        </tr>
      </thead>
      <tbody>
        {suppliers &&
          suppliers.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.companyName}</td>
                <td>{item.contactName}</td>
                <td>{item.contactTitle}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default TableIndex;
