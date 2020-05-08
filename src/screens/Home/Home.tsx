import React from 'react';
import style from './home.module.scss';

function Home() {
    return (
        <div className={style.container}>
            <img className={style.image} src={require("../../assets/img/docker.png")} alt=""/>
        </div>
    )
}

export default Home
