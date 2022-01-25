// TODO: replace it with a database
const faker = require("faker");

const createCompany = () => {
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  return {
    name: faker.company.companyName(),
    logo: `https://picsum.photos/id/${faker.datatype.number(999)}/300`,
    city: faker.address.city(),
    specialities: Array(faker.datatype.number(5) + 3)
      .fill(null)
      .map(() => faker.commerce.productMaterial())
      .filter(onlyUnique),
  };
};

const list = () => {
  const companies = Array(10)
    .fill(null)
    .map(() => createCompany());

  return companies;
};

module.exports = {
  list,
};
