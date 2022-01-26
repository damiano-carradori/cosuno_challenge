import { Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const Select = ({ selected, options, placeholder, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left w-72">
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-full rounded-md text-base shadow-sm px-6 py-4 bg-white font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 items-center"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="text-ellipsis overflow-hidden whitespace-nowrap">
            {selected.length > 0
              ? selected.join(", ")
              : placeholder || "Select a filter"}
          </span>
          <svg
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M7 7l3-3 3 3m0 6l-3 3-3-3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <Transition
        unmount={false}
        show={isOpen}
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        enter="transition ease-in duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <div
          className="origin-top absolute left-0 mt-2 w-full rounded-md shadow-lg bg-white  text-base"
          role="menu"
          tabindex="-1"
        >
          <div className="py-1 overflow-auto max-h-60" role="none">
            {options.map((option) => (
              <div
                key={option}
                className="cursor-pointer select-none relative py-3 pl-12 pr-6 hover:text-indigo-900 hover:bg-indigo-100"
                onClick={() => setSelected(option)}
              >
                {option}
                {selected.includes(option) && (
                  <span
                    className={`text-indigo-600 absolute inset-y-0 left-0 flex items-center pl-5`}
                  >
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </Transition>
    </div>
  );
};

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
