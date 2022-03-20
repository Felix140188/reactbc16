import React, { Component } from 'react'
import BTContent from './BTContent'
import BTFooter from './BTFooter'
import BTHeader from './BTHeader'
import BTNav from './BTNav'

export default class BaiTapLayout extends Component {
    render() {
        return (
            //noi dung cua component phai duoc chua trong 1 the nao do bao phu
            <section>
                <div>BaiTapLayout</div>
                <BTHeader />
                <div className='d-flex' style={{height: '75vh'}}>
                    <div className='w-25'>
                        <BTNav /></div>
                    <div className='w-75'>
                    <BTContent /></div>
                </div>
                <div>
                <BTFooter />
                </div>
            </section>
        )
    }
}
