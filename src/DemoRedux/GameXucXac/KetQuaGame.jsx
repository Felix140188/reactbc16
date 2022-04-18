import React, { Component } from 'react'

export default class KetQuaGame extends Component {
  render() {
    return (
      <div className='display-4 mt-5 text-center'>
          <div>
              <span>Your Choice: <span className='text-success'>Tai</span></span>
          </div>
          <div>
              <span>Total Win: <span className='text-danger'>0</span></span>
          </div>
          <div>
              <span>Total Played: <span className='text-warning'>0</span></span>
          </div>
          <button className='btn bg-success'>
              <div className='text-white p-2 display-4'>Play Game</div>
          </button>
      </div>
    )
  }
}
