import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./packagesales.css";
import axios from "axios";
function PackageSales() {
  const [Data, setData] = useState([]);
  useEffect(async () => {
    const response = await axios.get("//127.0.0.1:8000/trips/");
    console.log(response.data);
    setData(response.data);
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr class="table-headers">
            <th>User</th>
            <th>Package id/package name</th>
            <th>Market rate</th>
            <th>Number of days</th>
            <th>Location</th>
            <th>number of peoples</th>
          </tr>
        </thead>
        <tbody>
            {
                Data?Data.map((item)=>{
                    console.log(item)
                    return<tr>
            <td>{item.username}</td>
            <th class="mobile-header">packageId</th>
            <td>{item.id}/{item.title}</td>
            <th class="mobile-header">Market rate</th>
            <td>{item.amount}</td>
            <th class="mobile-header">Weight</th>
            <td>{item.duration}</td>
            <th class="mobile-header">Value</th>
            <td>{item.location}</td>
            <th class="mobile-header">Value</th>
            <td>{item.no_of_peoples}</td>
          </tr>
                }):<h4>No data</h4>
            }
        </tbody>
      </table>
    </div>
  );
}

export default PackageSales;
