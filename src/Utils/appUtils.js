export const roundPrice = (arr) => {
  if (arr) {
    let copy = [...arr];
    for (let i = 0; i < copy.length; i++) {
      copy[i].amount = Number(
        Math.round(copy[i].amount + "e2") + "e-2"
      ).toFixed(2);
    }
    return (arr = [...copy]);
  }
};

export const colorFirst = (arr) => {
  if (arr) {
    let copy = [...arr];
    let filter = [];
    let index = 0;
    index = copy.map((i) => i.id).indexOf("Color");
    if (index > 0) {
      filter = arr.filter((item) => item.id === "Color");
      copy = arr.filter((item) => item.id !== "Color");
      copy = [...filter, ...copy];
      return (arr = [...copy]);
    } else if (index <= 0) {
      return arr;
    }
  }
};
