import Footer from "./Footer";
import DrawerAppBar from "./Navigation_";

const Responsabilite = () => {
    return (
        <div>
            <DrawerAppBar />

            <div class="py-4 container-fluid">
                <div class="row justify-content-md-center">
                    <div class="col col-lg-5 ">
                        <div className="fs-2 justifyText Helvetica fw-bold mt-3">Relations avec les clients</div>
                        <div className="mt-3 justifyText "  >
                            Ayant compris qu’une entreprise ne peut fonctionner sans des clients/collaborateurs , B’Tech Group travaille quotidiennement sur la bonne gestion de sa clientèle pour garder et fidéliser ses clients/ collaborateurs. Dans cette démarche , nous priorisons deux stratégies clés :
                            <p className="m-0">-	Bonne Stratégie d’écoute avec la clientèle</p>
                            <p className="m-0">-	Bonne Stratégie de communication et commerciale </p>

                        </div>

                    </div>
                    <div class="col-md-auto"></div>
                    <div class="col col-lg-5">
                        <img
                            alt=""
                            src="/img/responsabilité_1.jpg"
                            width="600"
                            height="400"
                            className="d-inline-block align-top mx-2 "
                        />
                    </div>
                </div>




                <div class="row justify-content-md-center py-5">
                    <div class="col col-lg-5 ">

                        <img
                            alt=""
                            src="/img/responsable.jpg"
                            width="600"
                            height="400"
                            className="d-inline-block align-top mx-2 "
                        />

                    </div>
                    <div class="col-md-auto"></div>
                    <div class="col col-lg-5">
                        <div className="fs-2 justifyText Helvetica fw-bold mt-3">Une entreprise responsable</div>
                        B’Tech Group est une entreprise fondée sur des valeurs, se tient responsable civilement , pénalement ou socialement.
                    </div>
                </div>

            </div>

            <Footer/>
        </div>
    );
}

export default Responsabilite;