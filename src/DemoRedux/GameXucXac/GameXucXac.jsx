import React, { Component } from 'react'
import KetQuaGame from './KetQuaGame'
import XucXac from './XucXac'
import style from './BaiTapGameXucXac.module.css'

export default class GameXucXac extends Component {
    render() {
        return (
            <div className={`${style['game-xuc-xac']}`}>
                <div className='container'>
                <h3 className='display-4 text-center pt-3'>BAI TAP GAME XUC XAC</h3>
                <XucXac />
                <KetQuaGame />
                </div>
            </div>
        )
    }
}
