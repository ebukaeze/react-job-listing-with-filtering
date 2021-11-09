import React from 'react';

const JobBoard = ({
    job:{
        company,
        logo,
        isnew,
        featured,
        position,
        role,
        level,
        postedAt,
        contract, 
        location,
        languages,
        tools
    },
    handleTagClick,
    key,
}) =>{
    const tags = [role, level];
    
    if(tools){
       tags.push(...tools);
    }

    if(languages){
        tags.push(...languages)
    }

    return(
         <div className={`card ${featured && "featured-card"}`} key={key}>
                    <div className="card-items">
                        
                        <div className="main">
                            <div className="left-content">
                            <div className="avatar">
                                <img src={require(`${logo}`).default} alt="company"/>
                            </div>
                            <div className="main-items">
                                <div className="top-items">
                                
                                        <p className="company">{company}</p>
                                        {isnew? <p className="new">new!</p> : ""}
                                        {featured? <p className="featured">featured</p> : ""}
                                

                                    </div>
                                    <div className="middle-items">
                                        <h3>{position}</h3>
                                    </div>
                                    <div className="bottom-items">
                                     <p> {postedAt}</p> <p>*</p>
                                     <p>{contract}</p>  <p>*</p>
                                     <p>{location}</p>  
                                    </div>
                                </div>
                                </div>
                               <hr className="line"/>
                                <div className="tagline">
                                    { tags?
                                    tags.map((tag, index) => (
                                    <p onClick={() => handleTagClick(tag)}>{tag}</p>
                                    ))
                                     : ""
                                    }
                             </div>
                             </div>
                        </div>

                </div>
            )
       
            
}

export default JobBoard;