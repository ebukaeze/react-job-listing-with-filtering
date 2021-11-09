import React,{useState, useEffect} from 'react';
import JobBoard from './JobBoard';
import Data from './data.json';

 const tagNames = ["Javascript", "Frontend", "CSS"];
const JobPanel = () => {
    const [allData, setAllData] = useState([]);
    const [tagName, setTagName] = useState([]);
   
    useEffect(() =>{
      setAllData(Data)
    }, []) 


    function filterFunc({role, level, languages, tools}){
        if(tagName.length === 0){
            return true;
        }
        const tags = [role, level];

        if(tools){
            tags.push(...tools)
        }

        if(languages){
            tags.push(...languages);
        }
        return tagName.every(filter => tags.includes(filter))
    };

    const handleTagClick = (tag) => {
        if(tagName.includes(tag)) return;

            setTagName([...tagName, tag])
    }

function removeTagName(item){
   //const name = tagName.map((t) => t);
   
   const filteredTag = tagName.filter((t) => t !== item);
   setTagName(filteredTag);

   
}
 function handleClear(){
    setTagName([])
}

const filteredJobs = allData.filter(filterFunc)
function search(tags){
    
    return tags.filter((tag) => [...tag.role, ...tag.languages, ...tag.level ].some(t => tagName.indexOf(t) >= 2));

}


    return (
        <div className="card-container">
            {
                tagName.length > 0 &&
            <div className="tag-container">
                <div className="tags">
                { tagName.map((tag, index) => (
                    <div className="tag" key={index}>
                        <p className="tag-item">{tag}</p>
                        <span className="delete-btn" onClick={() => removeTagName(tag)}>x</span>
                    </div>
                ))}
                
                </div>
                <a onClick={handleClear} className="clear">Clear</a>
            </div>
          }
          {
              filteredJobs.map(job =>
          <JobBoard
          job={job}
          key={job.id}
          handleTagClick={handleTagClick}/>
               ) }
       </div>
    )
}


export default JobPanel
