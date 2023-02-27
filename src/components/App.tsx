import Header from "./Header";
import DataList from "./DataList"

const App = ({data}) =>
{
	console.log( "First data", data )
	return (
		<div>
			<Header message={ "I lOVE REACT" } />
			<DataList data={ data.data } />
		</div>
	)
};

export default App;
