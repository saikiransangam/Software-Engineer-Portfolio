import { FaJs, FaReact, FaGithub, FaDocker, FaJava, FaPython, FaAws } from "react-icons/fa";

const Skills = () => {
    const skillsArr = [
        {
            "name" : "Java",
            "icon" : FaJava
        },
        {
            "name" : 'JavaScript',
            "icon" : FaJs
        },
        {
            "name" : "Python",
            "icon" : FaPython
        },
        {
            "name" : "Reactjs",
            "icon" : FaReact
        },
        {
            "name" : "Git",
            "icon" : FaGithub
        },
        {
            "name" : "AWS",
            "icon" : FaAws
        },
        {
            "name" : "Docker",
            "icon" : FaDocker
        }
    ];

    return (
        <div id='skills' className='skills'>
            <h2 className='title'>SKILLS</h2>
            <div className='skill-holder'>
                {
                    skillsArr.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <i key={index} className='skill-cards'>
                                <Icon className='skill-icon'/>
                                <p
                                className="skill"
                                >
                                    {skill.name}
                                </p>
                            </i>
                        )
                    })                    
                }
            </div>
        </div>
    )
}

export default Skills;