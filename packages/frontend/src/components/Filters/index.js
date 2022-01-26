import React from "react";
import Select from "./Select";

const Filters = ({ selects, appliedFilters, onFilter }) => {
  return (
    <div className="mb-6">
      <div className="mb-6">
        <input
          type="text"
          name="first-name"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md px-12 py-4 text-lg"
          placeholder="Search company..."
          onChange={(e) => onFilter({ name: "name", value: e.target.value })}
        />
      </div>
      <div>
        {selects.map((select) => {
          const selected = appliedFilters[select.name] || [];

          return (
            <Select
              key={select.name}
              selected={selected}
              options={select.options}
              placeholder={select.placeholder}
              setSelected={(value) => {
                const isApplied = selected.indexOf(value) !== -1;

                if (isApplied) {
                  onFilter({
                    name: select.name,
                    value: selected.filter((option) => option !== value),
                  });
                } else {
                  onFilter({
                    name: select.name,
                    value: [...selected, value],
                  });
                }
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
