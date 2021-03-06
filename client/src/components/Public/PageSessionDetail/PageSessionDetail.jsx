import React, { Component } from 'react'
import TourService from '../../../services/TourService'
import { Link } from 'react-router-dom'
import SessionDetail from './PageSessionDetailStyle'
import ButtonForward from '../../../styles/buttons';
import ButtonBack from '../../../styles/buttonBack';
import HeroInfo from '../../../styles/heroinfo';
import GmapMap from '../../Gmaps/Gmaps Map/GmapsMap';


export default class PageSessionDetail extends Component {
    _isMounted = false;


    constructor(props) {
        super(props)
        this.tourService = new TourService();

    }

    state = {
        sessionId: this.props.location.state.sessionId,

    }

    componentDidMount() {
        console.log(this.props.location.state.sessionId)
        if (this.state.sessionId) {
            const id = this.state.sessionId
            this._isMounted = true;
            this.tourService.sessionDetail(id)
                .then((session) => {
                    console.log(session.tour)
                    if (this._isMounted) {
                        this.setState({
                            ...this.state,
                            session: session,
                        })
                    }
                })
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }



    render() {
        if (this.state.session) {
            const { session } = this.state
            const { tour, currentPeople, duration, date, language, maxPeople, owner, status } = session
            // let formattedDate = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
            //console.log(tour.rates)
            // const mediumRate = Math.round((tour.rates.reduce((ac, cu) => {
            //     return ac + cu
            // }, 0) / rates.length))
            // console.log(tour.rates)
            //const {title} = tour

            //const {tour, currentPeople, duration, date, language, maxPeople, ownter, status} = this.state.session
            return (

                <div className="guides-wrapper">
                    <HeroInfo><h1>Aquí tienes todos los detalles de tu experiencia:</h1></HeroInfo>
                    <SessionDetail>

                        <div className="img-container"><img src={tour.img} /></div>
                        <div className="tour-header">
                        <h1>{tour.title}</h1>
                        <div className="tour-maininfo"><p className="rate"><i class="fas fa-star"></i><span> 9</span>/10</p><p><i class="fas fa-stopwatch"></i> {duration}h</p><p><i class="fas fa-clock"></i> 10:00</p><p><i class="fas fa-euro-sign"></i>{tour.price}</p>
                                </div>
                        </div>
                            
                            <div className="info-wrapper">
                                <h3>Sobre la experiencia:</h3>
                                <p>{tour.description}</p>
                                <h3>Punto de encuentro:</h3>
                                <GmapMap pos={tour.location.coords} marker={true}/>
                                <p className="booking-info">{owner.info.name} te estará esperando en {tour.location.address} hoy a las 10:00</p>
                            
                            <div className="nav-buttons">
                                <ButtonBack><i class="fas fa-arrow-left"></i> Volver</ButtonBack>   
                                <ButtonForward><i class="fas fa-check"></i> <span> Reservar</span></ButtonForward>
                            </div>

                        </div>
                        {/* Aqui toda la info de la sesión con el estate */}
                    </SessionDetail>



                </div>

            )
        } else return (
            <div className="loading">CARGANDO...</div>
        )
    }
}