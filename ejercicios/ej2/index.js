const textarea = document.querySelector("#textarea");
const textArr = [];
const split = () => {
  text = textarea.value.split(" ");

  text.forEach((x) => console.log(x.isArray));
};
document.querySelector("#button", split);
