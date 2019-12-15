export default (designs, { filterDate, show }) => {
  return designs.slice(0, show).sort((a, b) => {
    if (filterDate === "old") {
      return a.createdAt < b.createdAt ? -1 : 1;
    } else if (filterDate === "new") {
      return a.createdAt > b.createdAt ? -1 : 1;
    }
  });
};
