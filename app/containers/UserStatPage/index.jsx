import React from "react";
import $ from "jquery";

import PoangPerMonth from "utils/PoangPerMonth";

var TraningstillfallenComp = React.createClass({
  getInitialState: function() {
    return {
      allTraningstillfallen: [],
      anvandareNamn: ''
    };
  },

  componentDidMount: function() {
    $.get(this.props.source, function(result) {
      let stat = new PoangPerMonth(result.results.traningstillfallen)
      console.log('#### stat', stat)
      
      if (this.isMounted()) {
        this.setState({
          allTraningstillfallen: result.results.traningstillfallen,
          poangByPeriod: stat.allPoangByPeriod,
          anvandareNamn: result.results.namn
        });
      }
    }.bind(this));
  },

  render: function() {
    return (
      <div>
        {this.state.anvandareNamn} har {this.state.allTraningstillfallen.length} st träningstillfällen.
		    {this.renderTraningstillfallenView(this.state.allTraningstillfallen)}
        <h2>Poäng per period</h2>
        {this.renderPoang(this.state.poangByPeriod)}
      </div>
    );
  },
  byPeriod(poangByPeriod) {
    let x = [];
    let pos = 1;
    for (var p in poangByPeriod) {
      console.log('poang period', poangByPeriod[p]);
      x.push(<li key={pos++}>{p}: {poangByPeriod[p]}</li>);
    }
    return x;
  },

  renderPoang(poangByPeriod) {
    console.log('€€€€', poangByPeriod)
    return <ul>
      {this.byPeriod(poangByPeriod)}
      </ul>;
  },

  renderTraningstillfallenView(list) {
		return <ul>
			{
				list.map(function(item, idx) {
					return <li key={item._id}>{item.namn}: {item.varde} {item.enhet} ({item.datum})</li>;
				})
			}
		</ul>;
	}
});

export default class UserStatPage extends React.Component {
	static getProps(stores, params) {
		return {
			user: params.user
		};
	}
	render() {
		return <div>
			<h2>Din statistik {this.props.user}</h2>
			<TraningstillfallenComp source="http://localhost:8080/kalle.json" />
		</div>;
	}
}
