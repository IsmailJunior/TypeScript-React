import DataPreview from "./DataPreview";
import { useEffect, useState } from "react";
import { fetchData } from "../api_client";
import styled from "styled-components"

const PrimeBtn = styled.button`
display: inline-block;
  border-radius: 5px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: black;
  border: 2px solid black;
  cursor: pointer;
`

const DataList = ( { data } ) =>
{
	const [initData, setInitData] = useState(data )
	useEffect( () =>
	{fetchData().then( ( data ) =>
	{
		console.log( data.data )
		setInitData(data)
})
	}, [])
	return (
		<div>
				<PrimeBtn>Hi</PrimeBtn>
				{ initData.map( ( el ) =>
				{
					return <DataPreview key={el._id.$oid} el={el} />
				})}
			</div>
	)
};

export default DataList;