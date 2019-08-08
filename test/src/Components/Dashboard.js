import React from 'react';

function Dashboard(props) {
    console.log(props);
    return (
    <div>
        <h2>Balls:{props.balls}</h2>
        <h2>Strikes:{props.strikes}</h2> 
    </div>
    );
}

export default Dashboard;