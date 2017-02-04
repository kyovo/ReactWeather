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
      <div className="row">
        <div className="row">
          <div className="columns medium-8 large-6 small-centered">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );

module.exports = Main;
