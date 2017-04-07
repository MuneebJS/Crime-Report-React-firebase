import React from 'react'
import SignOut from './signout'


const Home = () => {
    return (
        <div>
            <h1>Web and Mobile Web Blood Bank</h1>
            <p>
                This project acts as an important role in saving life of human beings and which is
                also its main aim. The project Web and Mobile Web Blood Bank system is developed
                 so that users can view the information about registered
                  blood donors such as name,
                 address, and other such personal information along with their 
                  of blood group
                 and other medical information of donor. The project
                  also has a login page where in
                  the user is required to register and only then can view the availability of
                   and may also register to donate blood if he/she wishes to. This 
                    requires
                   internet access and thus there is a disadvantage of internet failure. Thus
                    application helps to select the right donor online instantly using medical
                    details along with the blood group. The main aim
                     of developing this application
                     is to reduce the time to a great extent that is spent in searching for the
                      donor and the availability of blood required. Thus this application 
                      provides the
                      required information in no time and also helps in quicker decision making.

            </p>
            <SignOut />
        </div>
    )
}

export default Home;