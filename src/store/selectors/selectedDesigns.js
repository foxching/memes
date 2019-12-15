export default (designs, { filterDate, show }) => {
  let filteredDesigns = [];
  for (var i = 0; i < show; i++) {
    let design = { ...designs[i] };
    filteredDesigns.push(design);
  }
  return filteredDesigns.sort((a, b) => {
    if (filterDate === "old") {
      return a.createdAt < b.createdAt ? -1 : 1;
    } else if (filterDate === "new") {
      return a.createdAt > b.createdAt ? -1 : 1;
    }
  });
};
