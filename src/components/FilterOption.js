import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const FilterOption = () => {
  const [filterOption, setFilterOption] = useState([]);
  let { type } = useParams();

  useEffect(() => {
    //?limit=100
    const fetchOption = async () => {
      fetch("https://academics.newtonschool.co/api/v1/ott/show?limit=100", {
        method: "GET",
        headers: {
          // Authorization: 'Bearer YOUR_JWT_TOKEN',
          ProjectId: "f104bi07c490",
        },
      })
        .then((response) => response.json())
        .then((data) => setFilterOption(data.data))

        .catch((error) => console.error("Error:", error));
    };
    fetchOption();
  }, []);

  const uniqueFilters = Array.from(
    new Set(filterOption.map((item) => item.type))
  );

  return (
    <div className="filter">
      <label
        style={{
          background: type === undefined && "#000",
          color: type === undefined && "#fff",
        }}
      >
        <Link to="/">All</Link>
      </label>
      {uniqueFilters.map((item, i) => {
        return (
          <label
            style={{
              background: type === item && "#000",
              color: type === item && "#fff",
            }}
          >
            <Link to={`/filter/${item}`}> {item} </Link>
          </label>
        );
      })}{" "}
    </div>
  );
};

export default FilterOption;
