import React, { Component } from 'react'
/*
 Cach 1: import file css => anh huong den tat ca component khac
  cach nay duoc dung nhieu hon
*/
import '../assets/styles/index.css'
import ExThayDoiAvatar from './ExThayDoiAvatar';
import ExThayDoiFontChu from './ExThayDoiFontChu';
import ExThayDoiMauXe from './ExThayDoiMauXe';
/*
 Cach 2: import file css chi component nay xai thoi.
 Dat ten cho class css trong file roi dat vao className
 muon dung kem vs Bootstrap thi cach ra va dung binh thuong
*/
import style from './StateDemo.module.css';

export default class StateDemo extends Component {

  // state la thuoc tinh co san duoc ke thua tu reactClassComponent
  /* state quan ly cac trang thai thay doi tren giao dien khi nguoi dung thao tac
    => khi gia tri state thay doi, giao dien se duoc render lai
  */
  state = {
    login: false
  }

  // login = false;
  userName = 'Fuong Peo';

  renderLogin = () => {
    //tra ve noi dung giao dien dang nhap hoac chua dang nhap
    if (this.state.login) {
      // Cach 2: tren web se tu sinh ra ma css tu dong cho style. Vd: StateDemo_text-orange__32p5A
      // return <p className={`${style['text-orange']} m-2`}>
      //   Hello! {this.userName}
      // </p>
      // hoac: let objectStyle = { backgroundColor: '#ffffff' }
      //Cach 3: them style
      return <p style={{ backgroundColor: '#ffffff', padding: '10px' }} className={`${style['text-orange']} m-2`}>
        Hello! {this.userName}
      </p>
    }

    return <button onClick={() => { this.handleLogin() }} type='button' className='btn btn-success'>Login</button>
    //type button thi ko reload, type submit se reload
    //click Login => goi ham handleLogin
  }

  handleLogin = () => {
    // this.login = true;
    // alert('login' + this.login);
    // this.render();
    // let newState = { login: true };
    /*this.setState la thuoc tinh co san cua react class component.
      dung de thay doi gia tri state cua component va tu render lai giao dien.
      this.setState la 1 ham bat dong bo.
    */
    this.setState({ login: true }, () => {
      //ham nay se goi sau khi state thay doi va giao dien render xong
      console.log(this.state);
    });
  }

  render() {
    return (
      <section>
      //b4-navbar-background
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">Action 1</a>
                  <a className="dropdown-item" href="#">Action 2</a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              {/* chi dung cach nay khi noi dung render it */}
              {/* {this.login ? <p className='text-light nav-item'>Hello!</p> : <button className='btn btn-success'>Login</button>} */}
              {/* cach 2: dinh nghia ham ben tren roi binding ham xuong */}

              {this.renderLogin()}
            </form>
          </div>
        </nav>
        <hr />
        <ExThayDoiFontChu />
        <hr />
        <ExThayDoiAvatar />
        <hr />
        <ExThayDoiMauXe />
      </section>
    )
  }
}
