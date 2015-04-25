export default class PoangPerMonth {
	constructor(traningstillfallen) {
		this.allTraningstillfallen = traningstillfallen.map(
			e => {
				return {
					period: this.asPeriod(e.datum),
					traningstillfalle: e	
				}
			}
		);
		this.allPoangByPeriod = {}

		this.allTraningstillfallen.forEach(m => {
			let x = this.allPoangByPeriod[m.period];
			if (!x) {
				this.allPoangByPeriod[m.period] = m.traningstillfalle.poang;
			} else {
				this.allPoangByPeriod[m.period] = this.allPoangByPeriod[m.period] + m.traningstillfalle.poang;
			}
		});

	}

	asPeriod(datum) {
		let p = [];
		let _datum = new Date(datum);
		p.push(_datum.getMonth());
		p.push(_datum.getFullYear());
		return p.join('_');
	}
}
