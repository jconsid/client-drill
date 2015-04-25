import React from "react";
import $ from "jquery";

var TraningstillfallenComp = React.createClass({
  getInitialState: function() {
    return {
      allTraningstillfallen: [],
      anvandareNamn: ''
    };
  },

  componentDidMount: function() {
    $.get(this.props.source, function(result) {
    	console.log('########## result', result);
      if (this.isMounted()) {
        this.setState({
          allTraningstillfallen: result.results.traningstillfallen,
          anvandareNamn: result.results.namn
        });
      }
    }.bind(this));
  },

  render: function() {
    return (
      <div>
        {this.state.anvandareNamn} har {this.state.allTraningstillfallen.length} st träningstillfällen.
      </div>
    );
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
