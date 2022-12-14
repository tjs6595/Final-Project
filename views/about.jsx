// DEPENDENCIES
const React = require('react');
const Def = require('./default');

function home(){
    return (
        <Def>
            <main>
                <div>
                    {/* <h2>Thanks for visiting!</h2> */}
                    <h3 style={{textDecorationLine: 'underline', fontWeight: 'Bold'}}>About AgNET</h3>
                        <p style={{fontSize: 20}}>AgNET is an application that is intended to be used as a bookeeping service for farmers and ranchers. The user will be 
                            able to log their livestock in their herds. The producer can then use a more detailed view of the herds and their included 
                            livestock to make important decisions based on the information stored.</p>
                    <h3 style={{textDecorationLine: 'underline', fontWeight: 'Bold'}}>How to Use the Application</h3>
                    <div style={{fontSize: 18}}>
                        <li>From the Navigation bar, the user first selects the livestock to be displayed.</li>
                        {/* <li>Create a user and log into the app to retrieve your data.</li> */}
                        {/* <li>Once logged in the user can then choose the livestock herd to be observed or modified.</li> */}
                        <li>The user can then choose the type of livestock herd to be observed or modified.</li>
                        <li>Once selected, the collection of herds will be shown.</li>
                        <li>The user can then select the herd to see a list of the individual members of the herd or modify details about that herd.</li>
                        {/* <li>Clicking on the specific animal will bring up data about that animal.</li> */}
                        {/* <li>The user is able to modify the herd, including creating or deleting herds and adding or removing animals from a specific herd.</li> */}
                        {/* <li>The user is also able to modify the details of the specific members of the herd including ear tag numbers, weights, etc.</li> */}
                    </div>
                    <h3 style={{fontSize: 30, fontWeight: 'Bold', marginTop: 25}}>Check back soon for more features and functionality!!!</h3>
                </div>
            </main>
        </Def>
    )
}

// EXPORTS
module.exports = home