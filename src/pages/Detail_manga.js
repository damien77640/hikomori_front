import React from "react"
import Navbar from "../components/NavBar.js";
import '../css/Detail_manga.css';
import SimpleRating from '../components/SimpleRating';
import NavBar2 from '../components/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';






class Detail_manga extends React.Component{

  

  constructor(props){
    super(props);

    this.state = {
        id : this.props.match.params.id,
    }

    
}



// if (e.target.value === '') {
//   document.getElementById("manga").style.display = "initial"
//   document.getElementById("mangaDescription").style.display = "initial"
// } else if ( document.getElementById("manga")) {
//   document.getElementById("manga").style.display = "none";
// } else {
//   document.getElementById("mangaDescription").style.display = "none";
// }



async componentDidMount(){

  // je vais chercher l'ensemble des info du pokemon correspondant à l'id 
  const response = await fetch(`http://localhost:5000/manga/${this.state.id}`)

 


  

  const data = await response.json()
  


  
  this.setState({manga : data})
  
 

  
}



  render(){

    

    return (
        
        <div className="all_page" >
            <NavBar2/>

          
        {this.state.manga ? (

          <div className="manga">
            <Link to="/">
              <FontAwesomeIcon style={{color:"white",width:"10%",height:"30px",marginTop:"30px"}}icon={faArrowLeft} />
            </Link>

            {this.state.manga.map(manga => (
           
                <div>
                  <div className="manga_info" style={{color:"black"}}>

                  
                    <img className="img_manga" style={{float:"left",borderRadius:"13px"}} src={manga.posterImageSmall} alt="Logo" />
                    <div className="info_droite">
                      
                      <h1> {manga.tittles_en} </h1> 
                      <SimpleRating/>
                        <p style={{color:"#E8ECF2",marginLeft:"10px",fontSize:"15px",fontWeight:"bold"}}>Popularity Rank : {manga.popularityRank}</p>
                        <p style={{color:"#E8ECF2",marginLeft:"10px",fontSize:"15px",fontWeight:"bold"}}>Episode Length : {manga.episodeLength}</p>
                    </div>

                  </div>

                <div>
                <h2>SYNOPSIS</h2>

                <div className="synopsis">
                    {manga.synopsis}
                </div>
                </div>

                </div>
                                    
            ))}
          </div>
        ) : (
         <div> Loading... </div>
        )}


      
        


        </div>
      
    );
  }






  }
export default Detail_manga;