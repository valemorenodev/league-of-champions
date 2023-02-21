import { React, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';
import axios from 'axios';

const Home = () => {

  const [champsList, setChampsList] = useState([])

  useEffect(() => {
    const endPoint = 'https://league-of-legends-champions.onrender.com/App/Champions'
    axios.get(endPoint)
      .then(res => {
        const apiData = res.data
        console.log(res)
        setChampsList(apiData)
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error
        })
      })
  }, [setChampsList]);


  return (
    <Container>
      <Row>
        {
          champsList.map((champ) => {
            return (
              <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12 my-4 d-flex flex-col justify-content-center' key={champ.id}>
                <div className="card criptoCard" >
                  <div className="card-body">
                    <h5 className="card-title">{champ.champion}</h5>
                    <p className="card-text">Fecha de lanzamiento: {champ.release_date}</p>
                    <img src={champ.img} alt="" />
                    <p>Region: {champ.origen}</p>
                    <p>Fuente de poder: {champ.resource}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </Row>
    </Container>
  );
}

export default Home;
