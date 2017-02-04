var React = require('react');
var {Link} = require('react-router');
// var Examples = React.createClass({
//   render: function (){
//     return(
//       <h2>Examples Component</h2>
//     );
//   }
// });

var Examples = (props) => (
  <div>
    <h1 className="text-center page-title">Ejemplos</h1>
    <p>Here are a few example locations to try out:</p>
    <ol>
      <li>
        <Link to='/?location=Murcia'>Murcia</Link>
      </li>
      <li>
        <Link to='/?location=Rio'>Rio, Brasil</Link>
      </li>
    </ol>
  </div>
);

module.exports = Examples;
