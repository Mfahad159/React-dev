function NameCard()
{
    return(
        <div className="NameCard-Container">
           <div className="pic">
            <img src="/src/assets/myPhoto.jpg" alt="" className="profile-image"/>
           </div>
           <div className="name">Mian Fahad</div>
           <div className="skills">Sr. Software Engineer | Distributed Systems Specialist | Node.js, Microservices Architecture</div>
           <div>
            <button className="resume-button">Download Resume</button>
           </div>
        </div>
    );
}

export default NameCard;