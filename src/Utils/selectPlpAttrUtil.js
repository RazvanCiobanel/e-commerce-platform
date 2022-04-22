export default function selectPlpAttr(arr, str) {
  if (arr) {
    let b = [...arr];
    let c = [];
    const suffixObj = {};
    if (
      b.findIndex((element) =>
        element.includes(str.split(":")[0])
      ) === -1
    ) {
      b.push(str);
      c = [...b];
    } else {
      b.push(str);
      for (let i = b.length - 1; i >= 0; i--) {
        const getPrefix = b[i].split(":")[0];
        if (!suffixObj.hasOwnProperty(getPrefix)) {
          c.push(b[i]);
          suffixObj[getPrefix] = true;
        }
      }
    }
    c.sort();
    return c;
  }
}
