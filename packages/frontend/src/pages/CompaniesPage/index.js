import { useEffect, useMemo, useState } from "react";
import Filters from "../../components/Filters";
import Table from "../../components/Table";

const CompaniesPage = () => {
  const [companies, setCompanies] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState({});

  useEffect(() => {
    fetch("http://localhost:8080/companies")
      .then((res) => res.json())
      .then((json) => {
        setCompanies(json.data.companies);
      });
  }, []);

  const onFilter = ({ name, value }) =>
    setAppliedFilters((filters) => ({ ...filters, [name]: value }));

  const filteredCompanies = useMemo(
    () =>
      Object.keys(appliedFilters).length
        ? companies.filter((company) => {
            const filterMap = Object.entries(appliedFilters);

            return filterMap
              .map(([filterName, filterValue]) => {
                if (Array.isArray(filterValue)) {
                  return filterValue.every((value) =>
                    company[filterName].includes(value)
                  );
                }

                return company[filterName].includes(filterValue);
              })
              .some(Boolean);
          })
        : companies,
    [appliedFilters, companies]
  );

  const allSpecialities = useMemo(
    () =>
      companies.reduce((prev, company) => {
        const specToAdd = company.specialities.filter(
          (spec) => prev.indexOf(spec) === -1
        );

        return [...prev, ...specToAdd];
      }, []),
    [companies]
  );

  return (
    <>
      <Filters
        selects={[
          {
            name: "specialities",
            options: allSpecialities,
            placeholder: "Filter by specialities",
          },
        ]}
        appliedFilters={appliedFilters}
        onFilter={onFilter}
      />

      {filteredCompanies !== null && <Table data={filteredCompanies} />}
    </>
  );
};

export default CompaniesPage;
