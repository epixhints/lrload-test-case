var React = require('react');
var Component = require('./component');
var Provider = require('react-redux').Provider;

React.render(<Provider>{ function() { return <Component/>; } }</Provider>, document.getElementById("react-root"));
