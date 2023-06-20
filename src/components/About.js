import IMG from '../assets/Programmer.jpeg';

const About = () => {
    return (
        <div id="about" className="about">
            <h1 className="about-heading">Who is Sai Kiran Sangam?</h1>
            <div className="about-info">
                <p className="about-desc">I am a Software Engineer by profession, driven by my unwavering passion for exploration and adventure. The call of conquering towering peaks and exploring remote corners of the world resonates deep within me, shaping my identity and defining who I am.<br></br>

                <br></br>Professionally, I have dedicated myself to the world of software development. As a Software Engineer, I immerse myself in the intricacies of coding and problem-solving. With each line of code I write and each project I undertake, I strive to enhance my skills and make a meaningful impact in the digital landscape.<br></br>

<br></br>Beyond my professional pursuits, I harbor an insatiable desire to travel the globe. The allure of traversing majestic mountains, exploring vibrant cultures, and discovering hidden gems fuels my wanderlust. Whether it's trekking through the rugged terrains of the Himalayas, embarking on a road trip, or getting lost in the vibrant streets, these are the dreams that drive me forward.<br></br>

<br></br>Every spare moment I have, I dedicate myself to both professional growth and financial stability, working diligently to ensure that I can one day turn my travel aspirations into reality.<br></br>

<br></br>When I'm not engrossed in software development or planning my next great adventure, I find solace in indulging in my favorite hobbies. Solving complex puzzles challenges my problem-solving abilities, playing sports, photography, learning guitar, piano, and diving into captivating books transports me to different worlds of imagination.<br></br>

<br></br>Through the harmonious blend of my profession as a Software Engineer, my unyielding passion for exploration, and my diverse array of hobbies, I have discovered the elements that define me. They shape my ambitions, propel me forward, and contribute to the person I aspire to become. With each step I take, both professionally and personally, 1 inch closer to realizing my dreams and becoming the person I am meant to be.<br></br>
<br></br>That's who I am. That's Sai Kiran Sangam.</p>
                <div className="about-img">
                    <div className="about-img-wrapper">
                        <img src={IMG} alt="Programmer" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;