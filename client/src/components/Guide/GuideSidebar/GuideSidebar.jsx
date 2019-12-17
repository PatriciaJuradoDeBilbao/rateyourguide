import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import GuideSidebarDiv from './GuideSidebarStyle';
import AuthService from './../../../services/AuthService';
import GuideService from '../../../services/GuideService';
import TourService from '../../../services/TourService';

export default class GuideSidebar extends Component {
    _isMounted = false;
    constructor(props) {
        super(props)
        this.authService = new AuthService();
        this.guideService = new GuideService();
        this.tourService = new TourService();
    }
    state = {
        user: null,
    }

    //    notGuide(){
    //         this.history.push('/book')
    //    }
    setUser = (user) => {
        this.setState({ ...this.state, user })
    }

    logout(){
        this.authService.logout()
        .then(
            //his.history.push("/")
        )
    }

    fetchUser = () => {
        if (this.state.user === null) {
            this.authService.loggedIn()
                .then(
                    (user) => {
           
                        this.setUser(user)
                    },
                    (error) => {
                        this.setUser(false)
                    }
                )
                .catch(() => {
                    this.setUser(false)
                })
        }
    }

    // fetchGuide = () => {
    //     if (this.state.user) {
    //         this._isMounted = true;
    //         this.guideService.getGuide(this.state.user.id)
    //             .then((guide) => {
    //                 if (this._isMounted) {
    //                     this.setState({
    //                         ...this.state,
    //                         guide: guide,
    //                     })
    //                 }
    //             })
    //     }
    // }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        if (!this.state.user) {
            this.fetchUser()
        }
        
        return (
            <GuideSidebarDiv>
                
                <ReactSVG src="./dingologo.svg"></ReactSVG>
                <div className="guide-info">
                {this.state.user && <img src={this.state.user.info.img} alt=""/>}
                {this.state.user && <h2>{this.state.user.info.name}</h2>}
                </div>
                <ul class="main-guidemenu">
                    <li>
                        <Link
                            to={{
                                pathname: "/guides/adminpanel/",
                                guide: this.state.user
                            }}><i class="fas fa-user-circle"></i> Mi resumen</Link></li>
                    <li><Link
                            to={{
                                pathname: "/guides/adminpanel/sessions",
                                guide: this.state.user
                            }}><i class="fas fa-stopwatch"></i> Sesiones Pendientes</Link></li>
                    <li><Link
                            to={{
                                pathname: "/guides/adminpanel/calendar",
                                guide: this.state.user
                            }}><i class="far fa-calendar-alt"></i> Planificación Semanal</Link></li>
                    <li><Link
                            to={{
                                pathname: "/guides/adminpanel/tours",
                                guide: this.state.user
                            }}><i class="fas fa-lightbulb"></i> Mis Tours</Link></li>
                    <li><Link
                            to={{
                                pathname: "/guides/adminpanel/comments",
                                guide: this.state.user
                            }}><i class="fas fa-star"></i> Mis valoraciones</Link></li>
                    <li><Link
                            to={{
                                pathname: "/guides/adminpanel/profile",
                                guide: this.state.user
                            }}><i class="fas fa-user-edit"></i> Editar Perfil</Link></li>
                            <li><Link onClick={()=>this.logout()}><i class="fas fa-user-edit"></i> Logout</Link></li>
                </ul>
               
            </GuideSidebarDiv>
        )
    }
}

