class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2023
        Yahir Alexis
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
