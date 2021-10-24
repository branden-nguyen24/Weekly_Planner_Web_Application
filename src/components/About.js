import React from 'react'

const About = () => {
    return (
        <div style={{ margin: "50px", }}>
            <h1> 🍵 <b>About Page</b></h1>
            <hr style={{ color: "#bd9f8f", height: 5, margin: 10, marginTop: 50 }} />
            <div>
                <br />
                Weekly planner created by christopher su for the use of yours truly. 
                <br />
                <br />
                FAQ:
                <br /> Will there be any updates?
                <br />
                <div style={{ marginLeft: 30 }}>
                    yes there will be, any updates will be added and documented right here on the about page!
                </div>
                <br /> I forgot my password, how can I log back into my account?
                <br /> <div style={{ marginLeft: 30 }}>
                    You can email me here with your username attached and I will get back to you ASAP at csu2@mail.sfsu.edu
                </div>
            </div>
        </div>
    )
}

export default About
