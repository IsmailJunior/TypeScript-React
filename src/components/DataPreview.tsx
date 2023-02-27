import * as React from "react"
const DataPreview: React.FC<{ data: object; }> = ( { el } ) =>
{
	return (
		<div>
		<div>{ el.age }</div>
		<div>{ el.name }</div>
		</div>
	)
};

export default DataPreview;