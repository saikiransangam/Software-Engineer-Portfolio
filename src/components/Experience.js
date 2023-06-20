import IMG from '../assets/coder.jpeg';

const Experience = () => {
    return (
        <div id="experience" className="experience">
            <h1 className="experince-heading">EXPERIENCE:</h1>
            <div className="experience-info">
                <p className="experience-desc">
                 <p>Software Engineer, AutoZone <br></br>
                 <i>Feb 2023 - Present</i><br></br>
                 <br></br>
                 <i>Graduate Research Assistant, Old Dominion University</i><br></br>
                 <i>January 2021 - January 2023</i><br></br>
                 <br></br>
                 <i>Masters in Computer Science, Old Dominion University</i><br></br>
                 <i>January 2021 - August 2022</i><br></br></p>
                </p>
                <div className="experience-img">
                    <div className="experience-img-wrapper">
                        <img src={IMG} alt="coder" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;