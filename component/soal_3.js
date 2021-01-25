import Component from "../component/component";

class Soal_3 extends Component {
  constructor() {
    super();
  }

  draw() {
    let txtHtml = `<p> 3. Ceritakan Pengalaman Anda Ketika Tidur   ? </p>`;
    let essayHtml = `<div class="mb-3">
    <label for="essay" class="form-label"> Input Pengalaman Anda
    </label>
    <textarea class="form-control" id="pengalaman" rows="3"></textarea>
  </div>
 `;

    return txtHtml, essayHtml;
  }
}

export default Soal_3;
