import logo from './logo.svg';
import './App.css';
import pic from './images/logo.png'
import { MdNotes } from "react-icons/md"
import { IoAdd } from "react-icons/io5";
import Product_Card from './Components/Product_Card';

const rarity = ['Common', 'Elite', 'MithiCal', 'Legendery']

function App() {
  return (
    <div className="App">
      <div className={"header"}>
        <div className="logo">
          <img src= {pic} alt="picture" width="90" height="90"/>
          <div className="filter">
            Dashboard
          </div>
          <div className="filter">
            staking
          </div>
          <div className="filter">
            Merchendise
          </div>
        </div>
        <div className="Idbutton">
          <h2>#hefghe78</h2>
        </div>

      </div>
      <div className="main">
        <div className="filtersection">
          <div className="filter__top">
            <div style={{ color:'white', fontSize:23}}>
            <MdNotes style={{color: 'white', fontSize: '25px'}}/>   Filter
            </div>
            <div style={{color:'grey', fontSize:15}}>
              clear Section
            </div>
          </div>
          <div className='status_text' >
            Status
          </div>
          <div className='status__type'>
            <div className='status_box'>
              Stake
            </div>
            <div className='status_box'>
              UnStake
            </div>
          </div>
          <div className='status_text' >
            Rarity
          </div>
          {
            rarity.map((item, index)=>{
              return(
                <div className='filter_checkbox'>
                  <div className='checkbox'></div>
                  <div style={{marginLeft:5, fontSize:14}}>{item}</div>  
                </div>
              )
            })
          }
        </div>
        <div className="content">
          <div className='content_top'>
            <div style={{color:'white', fonts:25}}>
              Your Guin
            </div>
            <div className='add_matammark'>
              <IoAdd style={{color:'orange', fontSize:20}}/> Add SQUID to Matemmark
            </div>
          </div>
          <Product_Card/>
        </div>

      </div>
      <div className="bottomView">
        
      </div>

    </div>
  );
}

export default App;
