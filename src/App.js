import logo from "./logo.svg";
import "./App.css";
import CardJSX from "./Component/DemoComponent/CardJSX";
import CardFunction from "./Component/DemoComponent/CardFunction";
import BaiTapLayout from "./Component/BaiTapLayout/BaiTapLayout";
import Databinding from "./Databinding/DataBinding";
import DataBinding from "./Databinding/DataBinding";
import HandleEvent from "./HandleEvent/HandleEvent";
import StateDemo from "./StateDemo/StateDemo";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import DemoProps from "./Props/DemoProp/DemoProps";
import ProductList from "./Props/ShoesShop/ProductList";
import DemoXemChiTiet from "./Props/DemoXemChiTiet/DemoXemChiTiet";
import BaiTapGioHang from "./DemoRedux/BaiTapGioHang/BaiTapGioHang";
import GameXucXac from "./DemoRedux/GameXucXac/GameXucXac";
//component App se la noi chua toan bo giao dien cua ung dung

//<BrowserRouter>: cau hinh router
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import HeaderHome from "./Component/HeaderHome/HeaderHome";
function App() {

  return (
    // <div className="App">
    //   {/* import class CardJSX*/}
    //   {/* dung the dong mo <CardFunction></CardFunction> cung duoc */}
    //   {/* <CardFunction />
    //   <CardJSX /> */}
    //   {/* <BaiTapLayout /> */}
    //   {/* <DataBinding /> */}
    //   {/* <HandleEvent /> */}
    //   {/* <StateDemo /> */}
    //   {/* <RenderWithMap /> */}
    //   {/* <DemoProps /> */}
    //   {/* <ProductList /> */}
    //   {/* <DemoXemChiTiet /> */}
    //   {/* <BaiTapGioHang/> */}
    //   {/* <GameXucXac />   */}
    // </div>

    <BrowserRouter>
      {/* Component Route se khong dc hien thi
        Component Route la cua thu vien react-router-dom sinh ra giup quan ly cac component thong qua duong link url (vd: http://localhost:3000/home se ra giao dien trang home)
      */}
      <HeaderHome />
      {/* <HeaderHome /> de ben ngoai the Switch de luon hien thi o nhung trang ben duoi */}
      <Switch>
        {/* Dung the Switch de chia truong hop*/}
        <Route exact path={'/home'} component={Home} />
        {/* thuoc tinh exact se so sanh chinh xac: co dau "/" va phai co chu "home" */}
        <Route exact path={'/login'} component={Login} />
        <Route exact path={'/register'} component={Register} />
        <Route exact path={'/contact'} component={Contact} />
        <Route exact path={'/about'} component={About} />
        <Route exact path={''} component={Home} />
        {/* path={''} hoac path={'/'} => ko go gi hoac go "/" se ra trang Home */}
        {/* <Route exact path={''} component={Home} /> (trang default) se luon luon nam duoi cung */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
