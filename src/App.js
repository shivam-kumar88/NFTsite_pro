import logo from './logo.svg';
import './App.css';
import pic from './images/logo.png'
import { MdNotes } from "react-icons/md"
import { IoAdd } from "react-icons/io5";
import Product_Card from './Components/Product_Card';
import pic1 from './images/pic1.png'
import pic2 from './images/pic2.png'
import pic3 from './images/pic3.png'
import pic4 from './images/pic4.png'


const rarity = ['Common', 'Elite', 'MithiCal', 'Legendery']

const cards = [
  {
    picture:pic1,
    title:"card1",
    rarity:'MithiCal'
  },
  {
    picture:pic2,
    title:"card1",
    rarity:'MithiCal'
  },
  {
    picture:pic3,
    title:"card1",
    rarity:'MithiCal'
  },
  {
    picture:pic4,
    title:"card1",
    rarity:'MithiCal'
  },
]

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
          <div className='itemsbox'>
          <div className='CardContiner'>
            {
              cards.map((item, index)=>{
                return(
                  <Product_Card
                    image={item.picture}
                    title={item.title}
                    rarity={item.rarity}
                  />
                )
              })
            }
          
          </div>
          <div className='earnedToken'>
            <div style={{width:"180px"}}>
            <div className='earnedtokentext'>
              Earned Token
            </div>
            </div>
            <div style={{width:"180px"}}>
              <div className='balanecetext'>
                10.0000
              </div>
            </div>
            <div style={{width:"180px"}}>
              <div className='earningtext'>
                Earning <div style={{color:'#58f032', marginRight:'3px'}}>+0.1</div>  SQUID token daily
              </div>
            </div>
            <div className='harvestbutton'>
              <div style={{color:'black', fontSize:"medium", fontWeight:"800"}}>
                Harvest
              </div>

            </div>
          </div>
          </div>
          
        </div>

      </div>
      <div className="bottomView">
        <div style={{marginLeft:'30px', display:'flex'}}>
          <img src={pic} style={{height:"120px", width:"130px"}}/>
        </div>
        <div style={{marginTop:40}}>
          <div style={{color:'white', fontSize:'medium', fontWeight:'500'}}>
            Contracts
          </div>
          <div style={{display:'flex', flexDirection:'row', marginTop:"30px"}}>
            <div style={{color:'#d6670d', fontSize:"medium", fontWeight:'700', marginRight:"20px"}}>
              SQUID Token
            </div>
            <div style={{color:'#d6670d', fontSize:"medium", fontWeight:'700', marginLeft:"20px"}}>
              Guininfo
            </div>
          </div>

        </div>
        <div style={{color:'white', fontSize:28, marginRight:"30px", marginTop:"40px"}}>
            <div style={{fontSize:"small", color:'white', fontWeight:'500'}}>
              @2021 studio
            </div>
            <div style={{color:'#d6670d', fontSize:'small',}}>
              Documentation
            </div>

        </div>
      </div>

    </div>
  );
}

export default App;
