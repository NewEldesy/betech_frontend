import DrawerAppBar from "./Navigation_";
import "./Acceuil.css"
import LinkIcon from '@mui/icons-material/Link';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AdjustIcon from '@mui/icons-material/Adjust';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AppsIcon from '@mui/icons-material/Apps';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import LocalPoliceTwoToneIcon from '@mui/icons-material/LocalPoliceTwoTone';
import EngineeringTwoToneIcon from '@mui/icons-material/EngineeringTwoTone';

import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Footer from "./Footer";



const Groupe = () => {
    return (
        <div>
            <DrawerAppBar />

            <div class="py-4 container-fluid">
                <div class="row justify-content-md-center">
                    <div class="col col-lg-5">
                        <div className="fs-2 justifyText Helvetica fw-bold mt-3">Notre entreprise</div>
                        <div className="mt-3 justifyText"  >B’Tech group est un groupe industriel énergétique Burkinabè .
                            Le groupe est né en 2022 et évolue dans les secteurs des énergies renouvelables , la domotique ,
                            et les systèmes industriels.Les nouvelles technologies étant des domaines très évolutifs, font
                            partie de notre environnement quotidien, pourtant elles ont toujours des difficultés à s’implanter
                            malgré des efforts pour faciliter leurs développements. C’est pourquoi le groupe s’engage sur le
                            marché en se servant de ces technologies pour mettre en place des services pluri techniques.
                            La pluralité de ces services permettra d’intervenir dans plusieurs secteurs tout en proposant
                            des solutions idoines pour révolutionner ces domaines .


                        </div>
                        <div class="btn-group d-flex justify-content-between mt-5" role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn btn-primary me-3">B'Tech Group</button>

                            <button type="button" class="btn btn-outline-primary ms-3">Renseignement</button>
                        </div>
                    </div>
                    <div class="col-md-auto"></div>
                    <div class="col col-lg-5">
                        <img
                            alt=""
                            src="/img/groupe_3.jpg"
                            width="600"
                            height="400"
                            className="d-inline-block align-top mx-2 "
                        />
                    </div>
                </div>
            </div>

            <div className="py-5"></div>

            <div class="mx-5 justifyText">
                <div class="row timeNewRoman " >
                    <div class="col-sm mx-5  py-4">
                        <div><AddCircleOutlineIcon className="ms-2" style={{ width: "60px", height: "60px", color: "rgb(12, 51, 136)" }} /> </div>
                        <div className="fw-bold fs-4" style={{ color: "rgb(12, 51, 136)" }}>Nos valeurs </div>
                        <div>
                            B’Tech Group s’est construite sur ses 4  valeurs :
                            <p className="m-0 p-0 text-secondary">•	Une entreprise apprenante, qui s’enrichit de vos expériences </p>
                            <p className="m-0 p-0 text-secondary">•	De nombreux projets sur lesquels vous avez la possibilité de faire bouger les lignes </p>
                            <p className="m-0 p-0 text-secondary">•	Une politique active en faveur de l’insertion des jeunes en entreprise et de nombreuses perspectives de développement professionnel</p>
                            <p className="m-0 p-0 text-secondary">•	5 valeurs que nous encourageons : agir avec exemplarité, cultiver exigence et professionnalisme, réussir avec intégrité, développer l'esprit d’équipe et oser entreprendre</p>
                        </div>
                    </div>
                    <div class="col-sm mx-5  py-4">
                        <div><AppsIcon className="ms-2" style={{ width: "60px", height: "60px", color: "rgb(218, 189, 31)" }} /> </div>
                        <div className="fw-bold fs-4" style={{ color: "rgb(218, 189, 31)" }}>Nos missions</div>
                        <div>Nos missions envers nos clients s’articulent autour des actions suivantes :

                            <p className="m-0 p-0 text-secondary">•	Des formations techniques</p>
                            <p className="m-0 p-0 text-secondary">•	Le dimensionnement et installation bâtiment</p>
                            <p className="m-0 p-0 text-secondary">•	La Conception mécanique</p>
                            <p className="m-0 p-0 text-secondary">•	Administration réseaux et dépannages des réseaux informatiques</p>
                            <p className="m-0 p-0 text-secondary">•	La Vente des composants électroniques et informatiques</p>
                            <p className="m-0 p-0 text-secondary">•	La Maintenance industrielle</p>
                            <p className="m-0 p-0 text-secondary">•	Le Suivi et conseil de mise en place d’une installation solaire</p>
                            <p className="m-0 p-0 text-secondary">•	La Sous-traitance</p>
                        </div>
                    </div>
                    <div class="col-sm mx-5  py-4">
                        <div><LinkIcon className="ms-2" style={{ width: "60px", height: "60px", color: "rgb(49, 49, 219)" }} /> </div>
                        <div className="fw-bold fs-4" style={{ color: "rgb(49, 49, 219)" }}>Nos engagements </div>
                        <div className="text-secondary ">Le monde change, B’Tech Group aussi
                            . Pour être au rendez-vous des mutation d’aujourd’hui et anticiper celles de demain ,
                            B’Tech Group s’engage auprès de ses clients et collaborateurs  à répondre efficacement
                            aux besoins de tous . </div>
                    </div>
                </div>
            </div>




            <div className="py-5 ">
                <div className="fs-4 mb-3 timeNewRoman"><AddLocationAltIcon style={{ width: "50px", height: "50px" }} /> <span className="fs-3 fw-bold"> Nos implantations</span></div>
                <div className="timeNewRoman mb-4">B’Tech Group est situé dans le quartier Dassasgho à Ouagadougou
                    et intervient sur tout l’étendue du territoire Burkinabè. Et intervient
                    à l’extérieur du Burkina.

                </div>
                <div className="container-fluid" >
                    <img
                        alt=""
                        src="/img/localisation.PNG"
                        width="2000"
                        height="400"
                        className="d-inline-block align-top mx-2  d-flex"
                        style={{ width: "100%" }}
                    />
                </div>
            </div>



            <div class="mx-5 justifyText">
                <div class="row Helvetica  " >
                    <div class="col-sm mx-5  py-4  shadow p-3 mb-5 bg-body rounded">
                        <div className="d-flex align-items-center justify-content-center"><EngineeringTwoToneIcon className="" style={{ width: "60px", height: "60px", color: "rgb(12, 51, 136)" }} /> </div>
                        <div className="fw-bold fs-4 d-flex align-items-center justify-content-center" style={{ color: "rgb(12, 51, 136)" }}>Notre contribution au développement technologique </div>
                        <div className="mt-3">
                            La gestion des reseaux électriques evolue fortement pour favoriser/ integrer l’essor des énergies renouvelables,
                            la domotique/l’immotique, l’industrialisation et l’evolution des modes de consommation
                            Afin de répondre à l’objectif de contribuer à l’essor du développement du Burkina Faso,
                            B’Tech Group déploie des solutions technologiques pour intégrer les EnR tout en se positionnant
                            sur le marché industriel comme étant l’un des acteurs clé pour l’avancée technologique au Burkina

                        </div>
                    </div>
                    <div class="col-sm mx-5  py-4   shadow p-3 mb-5 bg-body rounded">
                        <div className="d-flex align-items-center justify-content-center"><LocalPoliceTwoToneIcon className="" style={{ width: "60px", height: "60px", color: "rgb(218, 189, 31)" }} /> </div>
                        <div className="fw-bold fs-4 d-flex align-items-center justify-content-center" style={{ color: "rgb(218, 189, 31)" }}>Notre politique </div>
                        <div className="mt-3">





                        </div>
                    </div>
                    <div class="col-sm mx-5  py-4 shadow p-3 mb-5 bg-body rounded ">
                        <div className="d-flex align-items-center justify-content-center"><NotificationsActiveTwoToneIcon className=" " style={{ width: "60px", height: "60px", color: "rgb(49, 49, 219)" }} /> </div>
                        <div className="fw-bold fs-4 d-flex align-items-center justify-content-center" style={{ color: "rgb(49, 49, 219)" }}>Notre actualité</div>
                        <div className="mt-3">





                        </div>
                    </div>
                </div>
            </div>




            <div className="py-5 " >
                <div className="fw-bold fs-4">Notre gouvernance</div>
                <div className="row mb-5 d-flex align-items-center justify-content-center">
                    <div className="py-3">B’Tech Group est constituée d’un comité exécutif avec un président à sa tête et de trois autres associés et d’un conseil d’administration .</div>



                    <div class="col-sm mx-5  py-4   p-3  " style={{ maxWidth: "500px" }}>
                        <div className="d-flex align-items-center justify-content-center"><Avatar alt="Remy Sharp" src="img/lompo.jpeg" sx={{ width: 120, height: 120 }} /> </div>
                        <div className="fw-bold timeNewRoman fs-5 d-flex align-items-center justify-content-center" style={{ color: "rgb(12, 51, 136)" }}>Limaba LOMPO </div>
                        <div className="mt-3">
                            <span className="fw-bold">Président , Associé</span>
                            <p>Diplomé d'un master en systèmes des télécommunication et réseaux informatiques</p>

                        </div>
                    </div>
                </div>



                <div class="mx-5 ">
                    <div class="row Helvetica  " >
                        <div class="col-sm mx-5  py-4   p-3 mb-5 ">
                            <div className="d-flex align-items-center justify-content-center"><Avatar alt="Remy Sharp" src="img/patric.jpeg" sx={{ width: 120, height: 140 }} /> </div>
                            <div className="fw-bold timeNewRoman fs-5 d-flex align-items-center justify-content-center" style={{ color: "rgb(12, 51, 136)" }}>Patrick SILGA</div>
                            <div className="mt-3">
                                <span className="fw-bold">Associé</span>
                                <p>Diplomé d'un master spécialisé en ingénierie mécanique</p>


                            </div>
                        </div>
                        <div class="col-sm mx-5  py-4    p-3 mb-5 ">
                            <div className="d-flex align-items-center justify-content-center"><Avatar alt="Remy Sharp" src="img/renaud.jpeg" sx={{ width: 120, height: 125 }} /> </div>
                            <div className="fw-bold timeNewRoman fs-5 d-flex align-items-center justify-content-center" style={{ color: "rgb(12, 51, 136)" }}>P.Renaud Ismaël ZONGO</div>
                            <div className="mt-3">
                                <span className="fw-bold">Associé</span>
                                <p>Diplomé d'une licence en ingénierie électronique et télecommunications</p>
                            </div>
                        </div>
                        <div class="col-sm mx-5  py-4  p-3 mb-5  ">
                            <div className="d-flex align-items-center justify-content-center"><Avatar alt="Remy Sharp" src="img/konkobo_axel.jpg" sx={{ width: 120, height: 124 }} /> </div>
                            <div className="fw-bold timeNewRoman fs-5 d-flex align-items-center justify-content-center" style={{ color: "rgb(12, 51, 136)" }}>Axel Sidney KONKOBO</div>
                            <div className="mt-3">
                                <span className="fw-bold">Associé</span>
                                <p>Diplomé d'un master en système intelligents & énergie </p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className="py-5 " >
                <div className="fw-bold fs-4  text-light mx-3 py-2 mb-2" style={{ background: "rgb(73, 84, 100)" }}>Nos partenariats</div>
                <div className="justifyText container mt-5">
                    
                </div>
                <div className="container d-flex align-items-center justify-content-center my-3 ">
                    <img
                        alt=""
                        src="/img/fbdes.png"
                        width="200"
                        height="88"
                        className="d-inline-block align-top mx-2  d-flex "

                    />
                </div>

            </div>

            <Footer />
        </div>
    );
}

export default Groupe;