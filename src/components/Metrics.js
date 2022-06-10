import React from "react";
 


const Metrics = (props) => {   
	return (
		<div className='row'>            
             { props.details.map((each)=>{
                return(
                    <div className="col-sm-4 col-xs-12">
                            <div className="card" >
                                <img className="card-img-top" src={each.ImgUrl} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{each.Title}</h5>
                                    <div className="card-text row">
                                        {each.info.map(user =>
                                            <div className="col-sm-3 info">
                                                <p className="username">@{user.userName.length > 11 ? user.userName.slice(0,11)+'...' : user.userName}</p> 
                                                <p className="address">{user.address.length > 8 ? user.address.slice(0,8)+"..." : user.address}</p>  
                                            </div>
                                        )}
                                        
                                    </div>
                                   
                                        
                                </div>
                            </div>
                    </div>
                )
             })}


           
		</div>
	);
};

export default Metrics;
