import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel className='container-fluid'>
      <Carousel.Item>
        <img
          className="d-block"
          src="img/1.webp"
          alt="First slide"
          width="100%" height="570" 
        />
        <Carousel.Caption>
          <h3>Efficacité énergétique</h3>
          <p>Optimisation des rendements énergétiques.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="img/robot_1.jpg"
          alt="Second slide"
          width="100%" height="570" 
        />

        <Carousel.Caption>
          <h3>Révolution energetique</h3>
          <p>Robot nettoyeur des panneaux solaires</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="img/domotique_1.jpg"
          alt="Third slide"
          width="100%" height="570" 
        />

        <Carousel.Caption>
          <h3>Domotique</h3>
          <p>
          Pilotage à distance des installations électrique.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;