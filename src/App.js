import logo from './logo.svg';
import './App.css';
import CardJSX from './Component/DemoComponent/CardJSX';
import CardFunction from './Component/DemoComponent/CardFunction';
import BaiTapLayout from './Component/BaiTapLayout/BaiTapLayout';
import Databinding from './Databinding/DataBinding';
import DataBinding from './Databinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
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
      <HandleEvent />
    </div>
  );
}

export default App;
