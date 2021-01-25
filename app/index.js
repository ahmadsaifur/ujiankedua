import Header from "../component/header";
import Body from "../component/body";
import GenerateUI from "./generateui";
import Soal_2 from "../component/soal_2";
import Soal_3 from "../component/soal_3";

let header = new Header("Ujian Minggu Kedua");
let body = new Body();
let soal_2 = new Soal_2();
let soal_3 = new Soal_3();

ui.addComponents(header, body, soal_2, soal_3);
ui.generateUI();
