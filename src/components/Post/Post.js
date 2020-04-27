import React, {Component} from 'react';
import './Post.css'

import childImg1 from '../../assests/child1.jpg'
import childImg2 from '../../assests/child2.jpg'
import childImg3 from '../../assests/child3.jpg'
import montycarlo from '../../assests/cmt1.jpg'
import PaulMolive from '../../assests/cmt2.jpg'
import like from '../../assests/like.png'
import profile from '../../assests/profile2.jpg'
import link from '../../assests/link.svg'
import camera from '../../assests/camera.svg'
import smiley from '../../assests/smiley.svg'
import share from '../../assests/share.svg'


class Post extends Component{
    render() {
        return (
            <div className='Post'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-2'><img src={profile} id='profileimg' alt=''/></div>
                        <div className='col-md-8 '>
                            <h5 id='profileName' style={{fontSize:'16px',fontWeight:'600'}}>Anna Sthesia</h5> <p id='profiletitle'>Add New Post</p>
                            <p style={{color:'#74BBFF'}}>Just Now</p>
                        </div>
                            <div className='col-md-2' style={{marginTop:'-20px',textAlign:'right'}} >
                                <div className="dropup" style={{display:'inline-block'}}>
                                    <span data-toggle="dropdown" style={{fontWeight:'600',fontSize:'35px'}}>...</span>
                                    <span class=" dropdown-menu dropdownwidth" style={{borderRadius:'10px'}}>
                                        <p className='drowdownstyling'><a href="/">Save Post</a></p>
                                        <hr/>
                                        <p className='drowdownstyling'><a href="/"> Hide Post</a></p>
                                        <hr/>
                                        <p className='drowdownstyling'><a href="/">Unfollow USer</a></p>
                                        <hr/>
                                        <p className='drowdownstyling'><a href="/">Notifications</a></p>
                                    </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                                <img src={childImg2} alt='' className='childImgstyling img-responsive '/>
                        </div>
                        <div className='col-lg-6'>
                            <div className='row'>
                                <div>
                                    <img src={childImg1}  alt='' className='childImgstyling img-responsive pb-3 pr-3'/>
                                </div>
                            </div>
                            <div className='row'>
                                <div>
                                    <img src={childImg3} alt='' className='childImgstyling img-responsive pr-3'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='commentSection'>
                        <div className='row'>
                             <div className='col-md-6'>
                                    <img src={like} alt=''/>
                                <div class="dropdown">
                                    <p style={{display:'inline-Block',paddingLeft:'10px'}} className='dropbtn'>140 likes</p>
                                    <div class="dropdown-content">
                                    <a href="/"> monty carlo</a>
                                    <a href="/">monty carlo</a>
                                    <a href="/">monty carlo</a>
                                </div>
                                </div>
                                    <div class="dropdown">
                                    <p style={{display:'inline-Block',paddingLeft:'20px'}} className='dropbtn'>20 Comment</p>
                                    <div class="dropdown-content">
                                    <a href="/">Paul molive</a>
                                    <a href="/">Paul molive</a>
                                    <a href="/">Paul molive</a>
                                </div>
                                </div>
                             
                             </div>
                             <div id='shareinfo' className='col-lg-6 dropbtn'>
                                 <img src={share} id='icon' alt=''/>
                                 <span >99 share</span>
                             </div>
                        </div>
                    </div>

                    <hr style={{marginTop:'0px'}}/>
            
                    <div className='comment'>
                        <div>
                            <div className='row'>
                                <div className='col-lg-1'>
                                    <img src={montycarlo} className='commentimgstyling' alt=''/>
                                </div>
                                <div className='ml-3'>
                                    <h6>Monty Carlo</h6>
                                    <p>Lorem ipsum dolor sit amet</p>
                                    <div className='commentActivity'>
                                        <a href='/'><strong>Like</strong></a>
                                        <a href='/'><strong>Reply</strong></a>
                                        <a href='/'><strong>Translate</strong></a>
                                            <span>5 min</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <div className='row '>
                                <div className='col-lg-1'>
                                    <img src={PaulMolive} className='commentimgstyling' alt=''/>
                                </div>
                                <div className='ml-3 mb-3'>
                                    <h6>Paul Molive</h6>
                                    <p>Lorem ipsum dolor sit amet</p>
                                    <div className='commentActivity'>
                                        <a href='/'><strong>Like</strong></a>
                                        <a href='/'><strong>Reply</strong></a>
                                        <a href='/'><strong>Translate</strong></a>
                                            <span>5 min</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='addcomment'>
                        <form>
                            <input type='text' placeholder='' style={{border:'none',width:'80%'}}/>
                            <div className='inputicons'>
                                <a href='/'><img src={link} className='pr-3 ' alt=''/></a>
                                <a href='/'><img src={smiley} className='pr-3 ' alt=''/></a>
                                <a href='/'><img src={camera}  className='pr-1 ' alt=''/></a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post


