export default (designs, { filterDate }) => {
  return designs.sort((a, b) => {
    if (filterDate === "old") {
      return a.createdAt < b.createdAt ? -1 : 1;
    } else if (filterDate === "new") {
      return a.createdAt > b.createdAt ? -1 : 1;
    }
  });
};
