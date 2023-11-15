export { makeMovingSquare };

const template = document.querySelector("template");

function makeMovingSquare() {
  const square = template.content.firstElementChild.cloneNode(true);

  document.body.append(square);

  return square;
}
