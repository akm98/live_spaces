import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import axios from 'axios';
import Metrics from "./Metrics";

const Gallery = () => {
	const[metricData,setMetricData] = useState([]);

	useEffect(()=>{
		getData();
	},[])
	const getData=()=>{
		const url = process.env.REACT_APP_API_URL ;
		axios.get(`${url}GetMetricData`)
      		.then(res => {
				setMetricData(res.data.metricData)
			})
			.catch(error =>{
				alert("An error occured "+error);
			});

	}
	

	const filterMetricData = (tab = "") =>{
		return metricData.filter((each) => each.Tags.includes(tab))
	}

	return (
		
			<div className='metrics'>
				<Tabs defaultActiveKey='Trending' className='tabs'>
					<Tab eventKey='Trending' title='🔥 24h Trending'>						
						<Metrics key='24h Trending' details={filterMetricData("24h Trending")} />						
					</Tab>
					<Tab eventKey='Shows' title='🎼 Latest Shows'>
						<Metrics key='Latest Shows' details={filterMetricData("Latest Shows")} />	
					</Tab>
					<Tab eventKey='Popular' title='🤩 Most Popular'>
						<Metrics key='Most Popular' details={filterMetricData("Most Popular")} />	
					</Tab>

					<Tab eventKey='Genesis' title='💎 In Genesis'>
						<Metrics key='In Genesis' details={filterMetricData("In Genesis")} />	
					</Tab>

					<Tab eventKey='Temple' title='🛕 In Temple'>
						<Metrics key='In Temple' details={filterMetricData("In Temple")} />	
					</Tab>

					<Tab eventKey='Void' title='🌪️ In Void'>
						<Metrics key='In Void' details={filterMetricData("In Void")} />	
					</Tab>

					<Tab eventKey='BAYC' title='🦍 #BAYC'>
						<Metrics key='BAYC' details={filterMetricData("BAYC")} />	
					</Tab>
				</Tabs>
			</div>
		
	);
};

export default Gallery;
