import Component from "../component/component";

class Soal_2 extends Component {
  constructor() {
    super();
  }

  draw() {
    let txtHtml = `<p> 2. Pilihlah 3 yang benar mengenai Aqil   ? </p>`;
    let checkBoxHtml = `<div class="form-check">
    <input class="form-check-input" type="radio" name="trainer" id="trainer">
    <label class="form-check-label" for="trainer" checked>
    Trainer Juara Coding </label>    
    
  </div>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="manusia" id="manusia">
  <label class="form-check-label" for="manusia" checked>
  Manusia </label>    
  
</div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="anggota" id="anggota">
    <label class="form-check-label" for="anggota">
      Anggota Avengers
    </label>
  </div>
  
 `;

    return txtHtml, checkBoxHtml;
  }
}

export default Soal_2;
