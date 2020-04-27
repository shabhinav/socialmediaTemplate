import React, {Component } from 'react'
import './popup.css';

import profilepic from '../../../assests/profile.jpg'
import game from '../../../assests/Game.png'
import gif from '../../../assests/Gif.png'
import smile from '../../../assests/smile.png'
import live from '../../../assests/Live.png'
import mount from '../../../assests/mount.png'
import navigate from '../../../assests/Navigate.png'
import party from '../../../assests/party.png'
import person from '../../../assests/person.png'


class Popup extends  Component{
    render(){  
        return(
            <div className='MainModal' >
                <div className="Modalcontent">
                    <div>
                        <div className='popuphead container'>
                            <span className="close" onClick={this.props.closePopUp}>&times;</span>
                            <h5 className='popupheading'>Create Post</h5>
                        </div>
                        <hr/>
                        <div className='container'>
                            <img  alt='img' src={profilepic} className='profileImgstyling' />
                            <input type='text' id='inputboxstyling' placeholder='Write something here...' onClick={this.openPopUp}/>
                            <hr/>
                        </div>
                        <div className='container'>
                            <ul className='pt-0 pb-0'>
                                <div className='row'>
                                    <div className='col-lg-6 popupbtnstyle pr-0 pl-2 mr-5'> 
                                        <li><a href='/'><img src={mount} alt=''/>Photo/Video</a></li>
                                    </div>
                                    <div className='col-lg-5 popupbtnstyle'>
                                        <li><a href='/'><img src={person} alt=''/>Tag Friend</a></li>
                                    </div>
                                    <div className='col-lg-6 popupbtnstyle pr-0 mr-5'>
                                        <li><a href='/'><img src={smile} alt=''/>Feeling/Activity</a></li>
                                    </div>
                                    <div className='col-lg-5 popupbtnstyle'>
                                        <li><a href='/'><img src={navigate} alt=''/>Check in</a></li>
                                    </div>
                                    <div className='col-lg-6 popupbtnstyle pr-0 mr-5'>
                                        <li><a href='/'><img src={live} alt=''/>Live Video</a></li>
                                    </div>
                                    <div className='col-lg-5 popupbtnstyle'>
                                        <li><a href='/'><img src={gif} alt=''/>Gif</a></li>
                                    </div>
                                    <div className='col-lg-6 popupbtnstyle pr-0 mr-5'>
                                        <li><a href='/'><img src={party} alt=''/>Watch Party</a></li>
                                    </div>
                                    <div className='col-lg-5 popupbtnstyle'>
                                        <li><a href='/'><img src={game} alt=''/>Play with Friends</a></li>
                                    </div>
                                    </div>
                                {/* <li className='col-lg-6'>
                                    <div className='abc'>
                                        <a href='/'><img src={mount} alt=''/>Photo/Video</a>
                                    </div>
                                </li> */}
                            </ul>
                            <hr/>
                            <div>
                                <div className='row'>
                                     <div className='col-6'>
                                          <img src={profilepic} alt='' className='profileImgstyling'/>
                                          <h6 style={{display:'inline-block'}} className='ml-3'>Your Story</h6>
                                     </div>
                                     <div className='col-6' style={{textAlign:'right'}}>
                                        <button className='btn btn-primary'>Friend</button>
                                     </div>
                                     <div className='container col-12 mt-3'>
                                         <button className='btn btn-primary' style={{width:'100%'}}>Post</button>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Popup