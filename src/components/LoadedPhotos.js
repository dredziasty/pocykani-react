const importAll = (r) => r.keys().map(r);

export default function (short, id) {
  let images;
  switch (`${short}/${id}`) {
    case "p/1595245024571":
      images = importAll(require.context("../images/gallery/p/1595245024571"));
      break;
    case "p/1595245190880":
      images = importAll(require.context("../images/gallery/p/1595245190880"));
      break;
    case "cp/1595245247086":
      images = importAll(require.context("../images/gallery/cp/1595245247086"));
      break;
    case "cp/1595245291439":
      images = importAll(require.context("../images/gallery/cp/1595245291439"));
      break;
    case "sp/1595246138675":
      images = importAll(require.context("../images/gallery/sp/1595246138675"));
      break;
    case "sp/1595246302066":
      images = importAll(require.context("../images/gallery/sp/1595246302066"));
      break;
    case "sp/1595246385189":
      images = importAll(require.context("../images/gallery/sp/1595246385189"));
      break;
    case "sp/1595246433597":
      images = importAll(require.context("../images/gallery/sp/1595246433597"));
      break;
  }
  return images;
}
