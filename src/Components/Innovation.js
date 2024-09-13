import DrawerAppBar from "./Navigation_";
import Avatar from '@mui/material/Avatar';
import Footer from "./Footer";

const Innovation = () => {
    return (
        <div>
            <DrawerAppBar />

            <div class="py-4">
                <div class="row d-flex justify-content-between d-inline-block ">
                    <div class="col col-lg-2">
                        <img
                            alt=""
                            src="/img/innovation.jpg"
                            width="800"
                            className="d-inline-block align-top mx-2  d-flex"

                        />
                    </div>
                    <div class="col-md-auto fs-1 fw-bold d-flex align-items-center ms-5 py-4 cursive"> Innovation </div>
                    <div class="col col-lg-2"> </div>
                </div>


                <div class="mx-5 py-5">
                    <div class="row Helvetica  " >
                        <div class="col-sm mx-5  py-4   p-3 mb-5 ">
                            <div className="d-flex align-items-center justify-content-center"><Avatar alt="Remy Sharp" src="img/technologie_2.jpg" sx={{ width: 120, height: 120 }} /> </div>
                            <div className="fw-bold timeNewRoman fs-5 d-flex align-items-center justify-content-center" style={{ color: "rgb(12, 51, 136)" }}>Les produits en voie de développement </div>
                            <div className="mt-3">
                                Dans la dynamique de devenir l’un des acteurs du développement technologique au Burkina , l’équipe B’Tech travaille sans relâche afin être en phase avec l’avancée technologique
                                en proposant des produits innovants et plus adaptés.

                            </div>
                        </div>
                        <div class="col-sm mx-5  py-4    p-3 mb-5 ">
                            <div className="d-flex align-items-center justify-content-center"><Avatar alt="Remy Sharp" src="img/corse.PNG" sx={{ width: 120, height: 120 }} /> </div>
                            <div className="fw-bold timeNewRoman fs-5 d-flex align-items-center justify-content-center" style={{ color: "rgb(12, 51, 136)" }}>Nos plateformes technologiques </div>
                            <div className="mt-3">
                                Plateformes des formations (en cours de construction)
                            </div>
                        </div>
                        <div class="col-sm mx-5  py-4  p-3 mb-5  ">
                            <div className="d-flex align-items-center justify-content-center"><Avatar alt="Remy Sharp" src="img/securité.PNG" sx={{ width: 120, height: 120 }} /> </div>
                            <div className="fw-bold timeNewRoman fs-5 d-flex align-items-center justify-content-center" style={{ color: "rgb(12, 51, 136)" }}>Sécurité de nos produits au Burkina et dans le monde</div>
                            <div className="mt-3">
                                Afin de garantir à nos clients/collaborateurs que nos produits fabriqués dans nos locaux respectent un certain nombre de critères et lui conférant une qualité supérieure et sans risque ,
                                nos produits seront labélisés.

                            </div>
                        </div>
                    </div>
                </div>

            </div>




        <Footer/>
        </div>
    );
}

export default Innovation;