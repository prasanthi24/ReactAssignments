
import './App.css';
import ID_Card from './ID_Card';

function App(props) {
  
  return (
    props.profile.map( (profile) => {   // this is not needed for functions component as this represent current isntance of class
      // console.log(profile)
        return(
         <ID_Card profile = {profile}/>
        )
    }
    )
  );
}

export default App;
