import UncontrolledExample from "./Carrosel";
import Navigation from "./Navigation";
import "./Acceuil.css"
import Footer from "./Footer";


const Acceuil = () => {
    return (
        <div>
            <Navigation />
            <UncontrolledExample />
            <div className="fs-1 py-5 text-secondary container">B’Tech Group vous accompagne dans </div>
            <div className="mx-4 ">
                <div className="row  py-4 d-flex justify-content-between ">
                    <div className="d-flex justify-content-center col col-md-5 ">
                        <img
                            alt=""
                            src="/img/installation.jpeg"
                            width="570"
                            height="300"
                            className="d-inline-block align-top"
                        />
                    </div>
                    <div class="col-md-auto"></div>
                    <div className="col col-md-5 fw-light" >
                        <div className="fs-5 fw-bold py-2 text-start Helvetica"> Le raccordement /modification de votre installation </div>
                        <div className="mt-3 justifyText me-auto "  >Le raccordement électrique ou la modification d’une installation
                            électrique est au cœur des missions de B’Tech Group. Il s’agit de raccorder ou faire
                            l’installation électrique de votre habitation ou local. Dès réception de votre demande
                            en ligne, un Interlocuteur de B’Tech group vous accompagnera à chaque étape afin de donnner
                            vie à votre projet. Nous nous engageons à simplifier vos démarches grâce à la qualité de notre
                            accompagnement personnalisé, et à maitriser nos délais pour être synchronisés avec le planning de votre projet.

                        </div>
                        <hr className="py-2 mx-2"></hr>
                        <div class="btn-group d-flex justify-content-between mt-3" role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn btn-primary me-3">Faire une demande</button>

                            <button type="button" class="btn btn-outline-primary ms-3">Renseignement</button>
                        </div>
                    </div>

                </div>

                <div className="py-5"></div>

                <div className="row justify-content-md-center py-4  d-flex justify-content-between">
                    <div className="col col-md-5 fw-light ">
                        <div className="fs-5 fw-bold py-2 text-start Helvetica"> Installation électrique neuve, rénovation, maintenance et dépannage </div>
                        <div className="mt-3 justifyText mb-3"  >Nous vous  garantissons une sécurité de fonctionnement et d’approvisionnement,
                            et une utilisation optimale de l’énergie. B’Tech Group optimise les fonctions essentielles de confort,
                            de gestion d’énergie ou de sécurité dans l’habitat collectif et individuel.

                        </div>
                        <hr className="py-2 mx-2"></hr>
                        <div class="btn-group d-flex justify-content-between mt-3 " role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn btn-primary me-3">Faire une demande</button>

                            <button type="button" class="btn btn-outline-primary ms-3">Renseignement</button>
                        </div>
                    </div>
                    <div class="col-md-auto"></div>
                    <div className="col col-md-5 d-flex justify-content-center mt-3">
                        <img
                            alt=""
                            src="/img/securite_inst.jpg"
                            width="500"
                            height="300"
                            className="d-inline-block align-top"
                        />
                    </div>
                </div>

                <div className="py-5"></div>

                <div className="fs-5 fw-bold Helvetica">La domotique/ Immotique  </div>
                <div class="row justify-content-md-center">
                    <div class="col col-lg-4 mt-3 justifyText " >
                        La domotique/ l’immotique permet en effet de piloter à distance votre
                        installation électrique ou votre bâtiment notamment les prises électriques, les éclairages,
                        les portes , les interrupteurs etc…soit par radiofréquence ou par wifi connecté , que ce soit
                        à l’aide d’une télécommande ou d’une smartphone.
                    </div>
                    <div class="col-md-auto">
                        <img
                            alt=""
                            src="/img/domotique_.jpg"
                            width="400"
                            height="200"
                            className="d-inline-block align-top  "
                        />
                        <hr className="py-2 mx-2"></hr>
                        <div class="btn-group d-flex justify-content-between my-3" role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn btn-primary me-3">Faire une demande</button>

                            <button type="button" class="btn btn-outline-primary ms-3">Renseignement</button>
                        </div>
                    </div>
                    <div class="col col-lg-4 mt-3 justifyText " >
                        Les possibilités sont multiples .C’est pourquoi
                        B’Tech Group vous accompagne dans vos projets de rénovation électrique, de domotique de l’immotique,
                        d'installation d'alarme ou d'automatisation de vos portes de garage ou de parking ou de votre bâtiment.
                        Les produits proposés sont uniquement de grandes marques afin de vous apporter la sérénité que vous méritez.
                    </div>
                </div>

            </div>
            <hr></hr>
            <Footer/>
        </div>
    );
}

export default Acceuil;