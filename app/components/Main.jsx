var React = require('react'),
    Nav = require('Nav');

// var Main = React.createClass({
//   render: function(){
//     return (
//       <div>
//         <h2>Main Component</h2>
//         <Nav/>
//         {this.props.children}
//       </div>
//     );
//   }
// });

var Main = (props) => (
    <div>
      <Nav/>
      <h2>Main Component</h2>
      {props.children}
    </div>
  );

module.exports = Main;
