export default class Client {
	constructor(options) {
    this.model = options.model;
    this.template = options.template;
  }

  render() {
    return this.model;
  }
}
