import react from "react"
import "./style.css"
import ChartComponent from "./ChartComponent"
import Dounute from "./Dounute"
import { style } from "d3"

function Dashboard(){
    return(
        <div style={{display:"flex"}}>
<aside id="asidebaar">

<strong><h3 id="dashboard1"> <i class="fa-regular fa-square"></i>           Dashboard </h3></strong>

<p id="dashboard"> <i id="icon"class="fa-regular fa-square"></i>   Dashboard      &gt;    </p>
<p id="dashboard"> <i id="icon"class="fa-brands fa-product-hunt"></i> product     &gt;    </p>
<p id="dashboard"> <i id="icon"class="fa-regular fa-user"></i>        customer    &gt;    </p>
<p id="dashboard"> <i id="icon"class="fa-solid fa-money-bill-wheat"></i> income   &gt;    </p>
<p id="dashboard"> <i id="icon"class="fa-solid fa-gear"></i>           promot     &gt;    </p>
<p id="dashboard"> <i id="icon"class="fa-solid fa-circle-info"></i>      help     &gt;    </p>

<div style={{display:"flex",marginLeft:"20%",marginTop:"170%",backgroundColor:"rgba(240, 258, 257, 0.139)"}}>
<img id="img" src="https://image.shutterstock.com/image-photo/portrait-handsome-caucasian-man-formal-260nw-2142820441.jpg" alt=""/>
<p id="name">evano</p><br/>

</div>
<p id="name1">project manager</p>


</aside>
<div id="seconddiv">
    <div style={{display:"flex"}}>
  <h3 id="h3name">Hello Irfan <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Emoji_u1f44b.svg/480px-Emoji_u1f44b.svg.png" alt="" height="20px"/> </h3> 
  <input type="text" id="input" placeholder="search" style={{}}/>
  </div>
  <div style={{display:"flex" ,marginLeft:"5%",marginTop:"-4%"}}>
  <div id="first"><div id="childfirst"><img id="dollorimg" src="https://www.freepnglogos.com/uploads/dollar-sign-png/dollar-sign-won-and-dollar-signs-comd-19.png" height="50px" alt=""/></div>
  <span style={{fontSize:"12px",color:"gray",marginTop:"19%",marginLeft:"5%"}}>Earnnig</span>
   <i class="fa-solid fa-dollar-sign" style={{marginLeft:"-18%",marginTop:"28%",}}> 198K</i>
   <span style={{marginLeft:"-24%",marginTop:"37%",fontSize:"11px",color:"green",fontWeight:"900"}} >&uarr;37.8%</span> <span style={{marginLeft:"3%",marginTop:"37%",fontSize:"11px",color:"",fontWeight:"500"}}>this month</span>
  
  </div>
  <div id="first"><div id="childfirst1"><img id="dollorimg" src="https://icones.pro/wp-content/uploads/2021/06/icone-fichier-document-noir.png" height="50px" alt=""/></div>
  <span style={{fontSize:"12px",color:"gray",marginTop:"19%",marginLeft:"5%"}}>orders</span>
   <i class="fa-solid fa-dollar-sign" style={{marginLeft:"-15%",marginTop:"28%",}}>2.4K</i>
   <span style={{marginLeft:"-20%",marginTop:"37%",fontSize:"11px",color:"green",fontWeight:"900"}} >&uarr;37.8%</span> <span style={{marginLeft:"3%",marginTop:"37%",fontSize:"11px",color:"",fontWeight:"500"}}>this month</span>
  
  </div>
  <div id="first"><div id="childfirst2"><img id="dollorimg" src="https://cdn1.iconfinder.com/data/icons/sale-19/64/wallet-shopping-money-ecommerce-cash-512.png" height="50px" alt=""/></div>
  <span style={{fontSize:"12px",color:"gray",marginTop:"19%",marginLeft:"5%"}}>Balnce</span>
   <i class="fa-solid fa-dollar-sign" style={{marginLeft:"-18%",marginTop:"28%",}}>2.4K</i>
   <span style={{marginLeft:"-20%",marginTop:"37%",fontSize:"11px",color:"red",fontWeight:"900"}} >&uarr;2.8%</span> <span style={{marginLeft:"3%",marginTop:"37%",fontSize:"11px",color:"",fontWeight:"500"}}>this month</span>
  
  </div>  <div id="first"><div id="childfirst3"><img id="dollorimg" src="https://icons.veryicon.com/png/o/commerce-shopping/jinfeng-technology-icon-library/shopping-bag-37.png" height="50px" alt=""/></div>
  <span style={{fontSize:"12px",color:"gray",marginTop:"19%",marginLeft:"6%"}}> sales</span>
   <i class="fa-solid fa-dollar-sign" style={{marginLeft:"-15%",marginTop:"28%",}}> 89K</i>
   <span style={{marginLeft:"-20%",marginTop:"37%",fontSize:"11px",color:"red",fontWeight:"900"}} >&uarr;2.2%</span> <span style={{marginLeft:"3%",marginTop:"37%",fontSize:"11px",color:"",fontWeight:"500"}}>this month</span>
  
  </div>
  </div>

<div id="third">
    
<h2 style={{marginTop:"4%"}}>overview</h2>
<ChartComponent/>
<div style={{height:"340px",width:"300px",marginLeft:"110%",marginTop:"-40%",backgroundColor:"white",borderRadius:"10px"}}>
    <h3>customer</h3>
    <Dounute/>
</div>
<div style={{height:"200px",width:"150%",backgroundColor:'white',marginTop:"1%",borderRadius:"10px"}}>
    <div style={{height:"40px",width:"100%",display:"flex"}}>
        <p>product  </p>
        <input type="text" placeholder="search" style={{height:"20px",marginLeft:"70%",marginTop:"1%"}}/>
        <select style={{height:"25px",marginTop:"1%"}}>
            <option>Last 30 days</option>
            <option>two </option>
            <option>three</option>
            </select>
       
    </div>
    <div style={{marginTop:"1%",display:"flex"}}>
        <span>product </span>

    <div style={{marginLeft:"%" ,display:"flex",marginTop:"2%"}}>
    <img src=" https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697328000&semt=sph" height="35px" alt="" style={{marginLeft:"-31%"}}/> <span style={{fontWeight:"800",marginLeft:"10px"}}>Abstract 3D</span>
    </div>
    <div style={{marginTop:"6%" ,display:"flex"}}>
    <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697328000&semt=sph"  height="35"alt=" " style={{marginLeft:"-94%"}}/> <span style={{fontWeight:"800",marginLeft:"10px"}}>sherphans illustation</span><br/>

    </div>

    <ul style={{marginLeft:"35%",listStyle:"none",fontSize:"",marginTop:"1%"}}>stock 
    <li>34 </li>
    <li>34</li>

    </ul>
    <ul style={{marginLeft:"3%",listStyle:"none"}}> price 
    <li style={{fontWeight:"900"}}> &#36;45.99</li>
    <li style={{fontWeight:"900"}}> &#36;45.99</li>

    </ul>
    <ul style={{marginLeft:"3%",listStyle:"none"}}> sales
    <li>20</li>
    <li>20</li>

    </ul>
    </div>
{/* 
        <div style={{height:"50px",width:"300px",backgroundColor:"red",marginLeft:"73%",display:"flex",}}>

    </div>
    */}
</div>
</div>

</div>

</div>


    )
}
export default Dashboard