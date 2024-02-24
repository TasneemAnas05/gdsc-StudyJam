
import './App.css'

function App() {
  const heros =[
  {id :0 , name :"spider-man" , company:"marvel"},
 {id :1 , name :"bat-man" , company:"DC-movies"},
 {id :2 , name :"iron-man" , company:"marvel"},
 {id :3, name :"super-man" , company:"DC-movies"},
]

  return (
    <>
      <div className='App'>
        {heros.map((h)=>{
          return (
            <div className="hero-card">
                  <p className="hero-name">{h.name}</p>
                  <p className="hero-company">{h.company}</p>
            </div>
          );
        })}
        
       
       </div>
    </>
  );
}

export default App
