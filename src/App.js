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
function App() {
  return (
    <div className="App">
      {/* import class CardJSX*/}
      {/* dung the dong mo <CardFunction></CardFunction> cung duoc */}
      {/* <CardFunction />
      <CardJSX /> */}
      {/* <BaiTapLayout /> */}
      {/* <DataBinding /> */}
      {/* <HandleEvent /> */}
      {/* <StateDemo /> */}
      {/* <RenderWithMap /> */}
      {/* <DemoProps /> */}
      {/* <ProductList /> */}
      {/* <DemoXemChiTiet /> */}
      {/* <BaiTapGioHang/> */}
      <GameXucXac />  
    </div>
  );
}

export default App;
