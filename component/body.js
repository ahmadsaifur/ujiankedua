import Component from "../component/component";

class Body extends Component {
  constructor() {
    super();
  }

  draw() {
    let txtHtml = `<p> 1. Siapakah Penemu Baling - Baling Bambu   ? </p>`;
    let radioHtml = `<div class="form-check">
    <input class="form-check-input" type="radio" name="doraemon" id="doraemon">
    <label class="form-check-label" for="doraemon">
      Doraemon
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="nobita" id="nobita">
    <label class="form-check-label" for="nobita">
      Nobita
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="suneo" id="suneo">
    <label class="form-check-label" for="suneo">
      Suneo
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="naruto" id="naruto">
    <label class="form-check-label" for="naruto">
      Naruto
    </label>
  </div>
 `;

    return txtHtml, radioHtml;
  }
}

export default Body;
