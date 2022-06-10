import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import data from "./data";
import Metrics from "./Metrics"

const Gallery = () => {
	const filterMyData = (tab = "") =>{
		return data.filter((each) => each.Tags.includes(tab))
	}

	return (
		
			<div className='metrics'>
				<Tabs defaultActiveKey='Trending' className='tabs'>
					<Tab eventKey='Trending' title='🔥 24h Trending'>						
						<Metrics key='24h Trending' details={filterMyData("24h Trending")} />						
					</Tab>
					<Tab eventKey='Shows' title='🎼 Latest Shows'>
						<Metrics key='Latest Shows' details={filterMyData("Latest Shows")} />	
					</Tab>
					<Tab eventKey='Popular' title='🤩 Most Popular'>
						<Metrics key='Most Popular' details={filterMyData("Most Popular")} />	
					</Tab>

					<Tab eventKey='Genesis' title='💎 In Genesis'>
						<Metrics key='In Genesis' details={filterMyData("In Genesis")} />	
					</Tab>

					<Tab eventKey='Temple' title='🛕 In Temple'>
						<Metrics key='In Temple' details={filterMyData("In Temple")} />	
					</Tab>

					<Tab eventKey='Void' title='🌪️ In Void'>
						<Metrics key='In Void' details={filterMyData("In Void")} />	
					</Tab>

					<Tab eventKey='BAYC' title='🦍 #BAYC'>
						<Metrics key='BAYC' details={filterMyData("BAYC")} />	
					</Tab>
				</Tabs>
			</div>
		
	);
};

export default Gallery;
