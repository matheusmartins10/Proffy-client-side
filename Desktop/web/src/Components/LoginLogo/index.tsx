import React from 'react'

import LogoImg from '../../assets/images/logo.svg'

const LoginLogo = () => {
    return (
        <div className="logo">
            <img src={LogoImg} alt="proffy"/>
            <h2>Sua plataforma de estudos online</h2>
        </div>
    )
}

export default LoginLogo
