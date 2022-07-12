
import './App.css';

function App(props) {
  return (
    <div className = "Wrapper">
      <div className = "id-card">
        <div className='emp-img-cntnr'>
          <div>
            <img id = "emp-photo" src= {props.profile.profileImg} alt = "profile pic"></img>
              {/* {console.log(props.profile.profileImg)} */}
          </div>
          <p className = "title-value" id = "emp-name">{props.profile.name}</p>
        </div>
        <div className='location'>
          <h5 className = "title">Location</h5>
          <p className = "title-value">{props.profile.location}</p>
        </div>
        <div className="blood">
          <h5 className = "title">Blood Group</h5>
          <p className = "title-value">{props.profile.bloodGroup}</p>
        </div>
        <div className="Age">
          <h5 className = "title">Age</h5>
          <p className = "title-value">{props.profile.age}</p>
        </div>
      </div>
    </div>
    
  );
}

export default App;
