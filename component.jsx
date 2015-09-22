var React = require('react');
var connect = require('react-redux').connect

var component = React.createClass({
  render: function() {
    return <div>Loaded!</div>
  }
});

module.exports = connect()(component)
