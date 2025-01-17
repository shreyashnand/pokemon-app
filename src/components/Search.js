import React, { useState } from "react";

const SearchForm = ({ types, onSearch, onTypeChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div>
      <select
        className="capitalize border rounded p-2 px-6 bg-gray-50"
        onChange={(e) => onTypeChange(e.target.value)}
      >
        <option value="">All types</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <form onSubmit={handleSubmit} className="mt-3 mb-10 w-auto sm:w-96 flex flex-col sm:flex-row p-4 bg-white shadow-md rounded">
        <input
          type="text"
          placeholder="Search"
          className="outline-none border rounded-tl-none rounded-bl-none sm:rounded-tl-md sm:rounded-bl-md p-2 flex-1 bg-gray-50"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="rounded-tr-none rounded-br-none sm:rounded-tr-md sm:rounded-br-md bg-blue-500 px-4 text-white">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
