import DrawerAppBar from "./Navigation_";
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import TerminalTwoToneIcon from '@mui/icons-material/TerminalTwoTone';
import SensorsTwoToneIcon from '@mui/icons-material/SensorsTwoTone';
import PowerTwoToneIcon from '@mui/icons-material/PowerTwoTone';
import ElectricalServicesTwoToneIcon from '@mui/icons-material/ElectricalServicesTwoTone';
import PrecisionManufacturingTwoToneIcon from '@mui/icons-material/PrecisionManufacturingTwoTone';
import LaptopWindowsTwoToneIcon from '@mui/icons-material/LaptopWindowsTwoTone';
import KeyboardAltTwoToneIcon from '@mui/icons-material/KeyboardAltTwoTone';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone';
import BubbleChartTwoToneIcon from '@mui/icons-material/BubbleChartTwoTone';
import Footer from "./Footer";

const Produits_activites = () => {
    return (
        <div>
            <DrawerAppBar />
            <div class="container d-flex" >
                <img
                    alt=""
                    src="/img/produit_2.jpg"
                    width="80%"
                    className="d-inline-block align-top mx-2  d-flex"
                />
            </div>
            <div className="container ">
                <div className="fs-2 fw-bold" style={{ color: "rgb(12, 51, 136)" }}>Nos produits</div>
                <span><HorizontalRuleIcon style={{ fontSize: "100px", color: "rgb(12, 51, 136)" }} />
                    <HorizontalRuleIcon style={{ fontSize: "100px", color: "rgb(223, 142, 21)" }} />
                    <HorizontalRuleIcon style={{ fontSize: "100px", color: "rgb(12, 51, 136)" }} />
                </span>

            </div>


            <div class="mx-5 ">
                <div class="row  ">
                    <div class="col-lg mb-4 d-flex align-items-top justify-content-center">
                        <Card sx={{ maxWidth: 400 }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/img/tracker_2.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6 fw-bold" component="div">Trackers solaire intelligent </Typography>
                                    <Typography className="justifyText " variant="body2" color="text.secondary">
                                        Le but de ce tracker est très simple : il permet d'améliorer le rendement de votre installation photovoltaïque.
                                        Celui-ci dépend en effet de l'orientation et de l'inclinaison des panneaux. En utilisant un suiveur solaire, ces
                                        deux éléments sont optimisés tout au long de la journée.Conçu pour assurer une production maximale des panneaux
                                        solaires, notre dispositif de trackers solaire, comme son nom l’indique, permet de rendre une installation solaire
                                        plus intelligente en production

                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div class="col-lg mb-4 d-flex align-items-top justify-content-center">
                        <Card sx={{ maxWidth: 400 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/img/robot.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6 fw-bold" component="div">Robot nettoyeur des panneaux solaires </Typography>
                                    <Typography className="justifyText " variant="body2" color="text.secondary">
                                        Pour être plus productifs, les cellules photovoltaïques des panneaux solaires doivent être capables de capter le
                                        plus efficacement possible les rayonnements solaires en vue de les transformer en énergie électrique. Ce qui
                                        signifie que toute saleté sur la surface des panneaux solaires réduit considérablement l’efficacité de ces
                                        cellules. Pour y remédier, B’Tech Group met à votre disposition un robot nettoyeur qui aura pour tâche d'éliminer
                                        ces saletés (poussières, etc) pour assurer une production énergétique plus optimale.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div class="col-lg mb-4 d-flex align-items-top justify-content-center">
                        <Card sx={{ maxWidth: 400 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/img/irrigation.webp"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6 fw-bold" component="div"> Système d’irrigation intelligente</Typography>
                                    <Typography className="justifyText" variant="body2" color="text.secondary">
                                        Ce système d’arrosage est doté d’une intelligence lui permettant grâce à plusieurs capteurs, de définir les besoins
                                        en eau des plantes. Il s’enclenche et se désenclenche automatiquement sans aide extérieure. Ainsi, il permet aux
                                        plantes de s’adapter aux conditions climatiques environnantes et d’asseoir toutes les conditions nécessaires pour une
                                        croissance optimale. Pour garantir la bonne croissance des plantes, un bocal est conçu pour contenir des éléments nutritifs
                                        et ainsi assurer le dosage automatique de ceux-ci, afin d’éviter tout surdosage.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div class="col-lg mb-4 d-flex align-items-top justify-content-center">
                        <Card sx={{ maxWidth: 400 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/img/gestion_2.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6 fw-bold" component="div">Système de gestion intelligente </Typography>
                                    <Typography className="justifyText " variant="body2" color="text.secondary">
                                        Au Burkina Faso, malgré les différents moyens employés par les acteurs de l’énergie (sensibilisation, délestages programmés),
                                        la gestion de l’énergie demeure un souci majeur pour le citoyen lambda. Partant de ces raisons, notre équipe grâce à son ingéniosité
                                        propose une solution irréfutable pour la lutte contre les gaspillages d’énergies et les risques liés aux installations.
                                        Ce système permet à tout citoyen le possédant de contrôler entièrement à distance et d’être alerté en temps réel de tout ce qui se passe chez lui.

                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
            </div>

            <div className="py-4 fw-bold fs-1">
                Nos activités
            </div>

            <div class="">
                <div class="row justify-content-center">
                    <div class="col mx-5 justifyText">
                        <p className="fw-bold fs-5">
                            <img
                                alt=""
                                src="/img/renouvellable_2.jpg"
                                width="110"
                                height="110"
                                className="d-inline-block align-top mx-2  d-flex"
                            />
                            Energie renouvelable
                        </p>
                        <p >
                            <span className="fw-bold m-0">Solaire : </span>
                            Chaque année, l’énergie solaire produit plus de 20 fois les besoins énergétiques mondiaux. Et pourtant,
                            elle ne représente encore que 1 % des capacités de production électrique mondiale. L’objectif B’Tech Group ?
                            Tout mettre en œuvre pour développer cette énergie renouvelable en apportant des solution idoines et propres ,
                            en étant présent sur toute la chaîne de valeur : de la recherche à la mise en place des installations en passant
                            par la fabrication des produits solaires pour l’optimisation des rendements énergétiques .
                            C’est pourquoi nous investissons et continuerons d’investir dans l’énergie solaire, une énergie inépuisable et faiblement
                            émettrice de CO2, sans nuisance pour l’environnement et les riverains, qui répond durablement aux besoins des individus en électricité.
                            Le Groupe souhaite contribuer à un monde plus harmonieux, où le progrès répond aux attentes des individus, des populations, un futur
                            respectueux des besoins individuels et collectifs. L’énergie solaire répond parfaitement à ces enjeux, et a toute sa place dans le mix
                            énergétique, comme pilier d’une transition énergétique pérenne.
                        </p>


                        <p>
                            <span className="fw-bold m-0">Éolien : </span>
                            L’éolien est une Energie renouvelable qui est au cœur de la transition énergétique. Il représente aujourd’hui 837 GW de capacité installée dans le monde, avec une augmentation de 12,4 % par rapport à 2020 selon le Global Wind Energy Council.
                            B’Tech Group contribue à cette croissance, et lancera de nombreux projets, pour atteindre une certaine  capacité renouvelables d’ici 2030.
                        </p>
                    </div>
                    <div class="col-md-auto"> </div>
                    <div class="col mx-5 justifyText">
                        <p className="fw-bold fs-5">
                            <img
                                alt=""
                                src="/img/industrielle_2.jpg"
                                width="100"
                                height="100"
                                className="d-inline-block align-top mx-2  d-flex"
                            />
                            Électricité industrielle
                        </p>
                        <p>
                            Vous avez constaté un défaut, un problème électrique, n'improvisez pas ! Faites appel à un professionnel qui saura vous guider et
                            rendre votre installation sûre et aux normes en vigueur. Afin de vous assurer du bon fonctionnement et de la longévité de vos
                            installations, il est nécessaire de les faire vérifier régulièrement.Au moindre doute, contactez nos équipes. Vous éviterez ainsi
                            l’apparition de défaillances qui pourraient avoir des conséquences sur la sécurité de votre logement.

                        </p>
                        <div className="justifyLeft">
                            Nos services en électricité : <p>
                                <p className="m-0">-	Dépannage d'urgence</p>
                                <p className="m-0">-	Mise aux normes de vos tableaux électriques, prises, interrupteurs</p>
                                <p className="m-0">-	Installation de nouvelles lignes de prise et de point d'éclairage</p>
                                <p className="m-0">-	En cas de rénovation de votre cuisine (par exemple), modification des circuits électriques vous permettant de placer vos éléments où vous le désirez</p>
                                <p className="m-0">-	Installation et remplacement de vos équipements électriques, luminaire etc...</p>
                                <p className="m-0">-	Déplacement de ligne téléphonique et d'antenne,</p>
                                <p className="m-0">-	Dimensionnement et installation solaire</p>
                                <p className="m-0">-	Installation bâtiment etc..</p>
                                -	Maintenance électriques</p>
                        </div>
                    </div>
                </div>

                <div class="row justify-content-center py-4">
                    <div class="col mx-5 justifyText">
                        <p className="fw-bold fs-5">
                            <img
                                alt=""
                                src="/img/maintenance.PNG"
                                width="125"
                                height="110"
                                className="d-inline-block align-top mx-2  d-flex"
                            />
                            Maintenance industrielle
                        </p>
                        <p >
                            Nous sommes à votre service pour concevoir, installer et entretenir( maintenance préventives et correctives)
                            vos machines automatisées .Nos prestations vont du dépannage électromécanique à la programmation des automates
                            industriels en passant par le rétrofit des installations et la mise en service de systèmes clés en main.
                        </p>

                    </div>
                    <div class="col-md-auto"> </div>
                    <div class="col mx-5 justifyText">
                        <p className="fw-bold fs-5">
                            <img
                                alt=""
                                src="/img/reseaux_2.jpg"
                                width="150"
                                height="110"
                                className="d-inline-block align-top mx-2  d-flex"
                            />
                            Administration des réseaux informatique/ industrielle
                        </p>
                        <p>
                            L'informatique a envahi tous les secteurs d'activité et ses applications ne cessent d'évoluer. Big data, intelligence
                            artificielle, cybers-sécurité, réalité virtuelle, systèmes embarqués, créent de nouvelles possibilités dans les transports,
                            la santé, la production industrielle, la finance, le marketing, l’Energie...
                            Spécialisée dans les prestations de services dans le domaine informatique, B’Tech Group intervient par exemple dans: la
                            programmation et le conseil en informatique, connexion, ou réseaux, la maintenance informatique et met à votre disposition
                            une équipe compétente et pluri technique pour satisfaire tous vos besoins en informatique.

                        </p>
                        <div className="justifyLeft">
                            Nos services en informatique :
                            <p className="m-0">-	Configuration et maintenance des réseaux informatiques</p>
                            <p className="m-0">-	Développements des sites web et applications mobiles</p>
                            <p className="m-0">-	Maintenance réseaux informatique</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className="py-5 fs-1 fw-bold">
                <span style={{ color: "rgb(12, 51, 136)" }}><SchoolIcon style={{ width: "50px", height: "50px", color: "rgb(223, 142, 21)" }} /> Formations techniques</span>
            </div>


            <div class="px-5 py-5">
                <div class="row justify-content-md-center">
                    <div class="col col-lg-4 justifyText">
                        <TerminalTwoToneIcon style={{ color: "rgb(12, 51, 136)" }} className="fs-1" />
                        <div className="fw-bold fs-4 timeNewRoman mb-3"> Programmation informatique </div>
                        Nos formations dans le domaine de l'informatique sont de plus en plus nombreuses.Ces formations offrent
                        la possibilité de maîtriser un certain nombre de langage de programmation(par exemple c, c++, python, JavaScript etc.)
                        d'effectuer la rédaction de code source et d'appréhender le domaine de l'algorithmique et du langage informatique, associés
                        à la programmation informatique.

                    </div>
                    <div class="col col-lg-4 justifyText">
                        <SensorsTwoToneIcon style={{ color: "rgb(12, 51, 136)" }} className="fs-1" />
                        <div className="fw-bold fs-4 timeNewRoman mb-3">Domotique/Immotique</div>
                        Le développement des solutions domotiques et des objets connectés nécessitent d’avoir des professionnels formés
                        et compétents. C’est pourquoi cette formation domotique vise à vous former dans le bâtiment intelligent qui va de
                        l’intégration audio et vidéo, à la domotique électrique, le contrôle énergétique, toute la partie contrôle d’éclairage,
                        l’accès à distance de vos installations etc….

                    </div>
                    <div class="col col-lg-4 justifyText">
                        <PowerTwoToneIcon style={{ color: "rgb(12, 51, 136)" }} className="fs-1" />
                        <div className="fw-bold fs-4 timeNewRoman mb-3">Installation bâtiment</div>
                        La formation électricien(ne) est plus que jamais porteuse d’avenir.
                        L’équipement électrique des locaux d’habitation constitue l’essentiel de la formation électricien bâtiment organisée
                        par B’Tech Group. La domotique, devenue un équipement électrique incontournable des locaux d’habitation est également
                        intégrée à cette formation en électricité.
                        Cette formation vous permettra de réaliser les circuits de base des locaux d'habitation , de Réaliser les circuits des
                        équipements électriques complémentaires de confort des locaux d'habitation , de Réaliser la distribution électrique générale
                        des locaux d'habitation, de Réaliser les circuits des équipements de type « courants faibles » des locaux d'habitation, de
                        Contrôler et de mettre en service l'installation électrique des locaux d'habitation.

                    </div>
                </div>






                <div class="row justify-content-md-center py-4">
                    <div class="col col-lg-4 justifyText">
                        <KeyboardAltTwoToneIcon style={{ color: "rgb(12, 51, 136)" }} className="fs-1" />
                        <div className="fw-bold fs-4 timeNewRoman mb-3"> Système embarqué/ Électronique </div>
                        Un système embarqué est défini comme un système électronique et informatique autonome, souvent
                        temps réel, spécialisé dans une tâche précise. Cette formation vise à vous donner des compétence tant électronique qu’informatique.


                    </div>
                    <div class="col col-lg-4 justifyText">
                        < PrecisionManufacturingTwoToneIcon style={{ color: "rgb(12, 51, 136)" }} className="fs-1" />
                        <div className="fw-bold fs-4 timeNewRoman mb-3">Conception mécanique</div>
                        Pour répondre au mieux aux besoins actuels et futurs , notre équipe met à votre disposition un panel de formation en conception
                        mécanique qui vous permettra de maitriser  le langage du dessin technique et les fonctions mécaniques élémentaires, ensuite vous
                        pourrez étudier un cahier de charges ou de contribuer à son élaboration, concevoir des formes obtenues par des procédés classiques,
                        participer aux différentes étapes de la conception d'un produit, rédiger et présenter un dossier technique.


                    </div>
                    <div class="col col-lg-4 justifyText">
                        <LaptopWindowsTwoToneIcon style={{ color: "rgb(12, 51, 136)" }} className="fs-1" />
                        <div className="fw-bold fs-4 timeNewRoman mb-3">Utilisation des logiciels DAO,CAO</div>
                        L’intérêt est de vous former sur certains  logiciels de Dessin Assisté par Ordinateur(DAO) ou de la Conception Assistée par Ordinateur
                        (CAO)afin de vous permettre de répondre efficacement au besoins actuels et futurs. Parmi ces logiciels formés on peut citer : SolidWorks,
                        Catia, Autocad, Archicad,KiCad, Electrical see , Packet Tracer etc….

                    </div>
                </div>




                <div class="row justify-content-md-center py-4">
                    <div class="col col-lg-4 justifyText">
                        <GroupsTwoToneIcon style={{ color: "rgb(12, 51, 136)" }} className="fs-1" />
                        <div className="fw-bold fs-4 timeNewRoman mb-3"> Entreprenariat </div>
                        L’entrepreneuriat est l’action de mener un projet d’entreprise, d’entreprendre. Devenir entrepreneur consiste à créer une activité ayant
                        pour objectif de générer des revenus. On peut aussi reprendre une entreprise existante pour la faire prospérer. Tout le monde peut devenir
                        entrepreneur, car les démarches à effectuer sont relativement simples et aucun prérequis n’est exigé. Certaines qualités et compétences sont
                        néanmoins nécessaires au succès d’un projet entrepreneurial : l’organisation, l’autonomie, la rigueur, la capacité à évoluer et à rebondir sont essentielles.
                        Notre équipe mettra à votre disposition tous les moyens nécessaires pour votre formation entrepreneuriale afin de vous outiller au mieux dans le
                        domaine de l’entreprenariat.



                    </div>
                    <div class="col col-lg-4 justifyText">
                        < QuestionMarkIcon style={{ color: "rgb(12, 51, 136)" }} className="fs-1" />
                        <div className="fw-bold fs-4 timeNewRoman mb-3">Autre</div>
                        <span className="fw-bold"> Suivi et conseil énergétique</span>
                        <p>
                            Afin d’être à l’écoute et répondre efficacement aux besoins , l’équipe B’Tech Group met à la disposition de ses clients , un suivi énergétique
                            visant à mutualiser les compétences de spécialistes en énergie pour accompagner au quotidien les élus et leurs services dans la mise en œuvre
                            de leurs projets énergétiques : suivi des consommations d'énergies, conseils neutres, campagnes de mesures, appui à la priorisation des travaux…
                        </p>
                        <span className="fw-bold">Vente des composants électroniques et électriques</span>
                        <p>

                            B’Tech Group met à la disposition des composants électroniques, électriques et informatique
                        </p>


                    </div>
                    <div class="col col-lg-4 justifyText">
                        <BubbleChartTwoToneIcon style={{ color: "rgb(12, 51, 136)" }} className="fs-1" />
                        <div className="fw-bold fs-4 timeNewRoman mb-3">Sous-traitance</div>
                        

                    </div>
                </div>

            </div>

        <Footer/>
        </div>
    );
}

export default Produits_activites;