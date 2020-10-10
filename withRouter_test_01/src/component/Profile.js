import React from 'react';
import WithRouterSample from "./WithRouterSample"

const profileData = {
    foxboxr:{
        name:"rsua",
        job:"student",
    },
    homer:{
        name:"simson",
        job:"dad"
    }
};

function Profile({match}){
    const {userName} = match.params;
    const profile = profileData[userName];
    if(!profile) return <h1>not exist profile.</h1>
    return (
        <div>
            <h1>{userName} : {profile.name}</h1>
            <p>{profile.job}</p>
            <WithRouterSample />
        </div>
    )
}

export default Profile;