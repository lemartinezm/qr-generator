import "./style.css";
import { toCanvas } from "qrcode";

const form = document.querySelector("form");
const canvas = document.querySelector("canvas");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = e.target.querySelector("input").value;

  toCanvas(canvas, text, function (error) {
    if (error) console.error(error);
    console.log("success!");
  });
});
