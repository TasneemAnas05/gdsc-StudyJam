


function Student(props) {
  
  return (

    
    
      <div className='App'>
        {/* <h1>Tasnim says Hello</h1> */}
        <h3>Student Component :</h3>
        <ul>
            <li>{props.name}</li>
            <li>{props.gpa}</li>
            <li>{props.graduate ? 
          `${props.name} is graduated` :
          `${props.name} is not graduated`}
          </li>
        </ul>
       
       </div>
   
  );
}

export default Student
