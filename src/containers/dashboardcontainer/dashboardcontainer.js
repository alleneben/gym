import React from 'react';




const DashboardContainer = (props) => {

    const pay = () => {
        const params = {
            "price": 1,
            "network": "mtn",
            "recipient_number": "026xxxxxxx",
            "sender": "024xxxxxxx",
            "option": "rmta",
            "apikey": "fcaef91c8b3b9c83ae1e",
            "orderID": ""
          }

        fetch('https://client.teamcyst.com/api_call.php',{method: 'post', body: params})
        .then(rd => rd.json())
        .then(rd=>{
            console.log(rd);
            
        })
    }

    return(
        <div>
            Dashboard Under development
            <button onClick={() => pay()}>Pay</button>
        </div>
    )

}

export default DashboardContainer;