import React, { Component } from 'react'
import './CreatePost.css'
import profilepic from '../../assests/profile.jpg'
import mount from '../../assests/mount.png'
import person from '../../assests/person.png'
import smile from '../../assests/smile.png'
import PopUp from '../CreatePost/PopUp/popup'


class CreatePost extends Component{
    state={
        showPopUp:false
    }

    openPopUp=(e)=>{
        e.preventDefault()
        this.setState({
            showPopUp:true
        })
    }

    closePopUp=()=>{
        this.setState({
            showPopUp:false
        })
    }

    render(){
        if(this.state.showPopUp){
            return <PopUp closePopUp={this.closePopUp} />
        }
        return(
            <div className='createPost'>
                <div className='container'>
                    <h4 style={{fontWeight:'800'}}>Create Post</h4>
                </div>
                    <hr/>
                <div className='container'>
                    <img  alt='img' src={profilepic} className='profileImgstyling' />
                    <input type='text' id='inputboxstyling' placeholder='Write something here...' onClick={this.openPopUp}/>
                    <hr/>
                    <ul>
                    <li><a href='/' onClick={this.openPopUp}><img src={mount} alt='mountain'/> Photo/Video</a></li>
                    <li><a href='/' onClick={this.openPopUp}><img src={person} alt='tag friend'/>Tag Friend</a></li>
                    <li><a href='/' onClick={this.openPopUp}><img src={smile} alt='feeling/activity'/>    Tag Friends</a></li>
                        <li className="dropdown" style={{display:'inline-block'}}>
                            <span data-toggle="dropdown" style={{fontWeight:'600'}}>...</span>
                            <span class="dropdown-menu-left-show dropdown-menu" style={{borderRadius:'10px'}}>
                            <p className='drowdownstyling'><a href="/" onClick={this.openPopUp}>Check in</a></p>
                            <p className='drowdownstyling'><a href="/" onClick={this.openPopUp}>Live video</a></p>
                            <p className='drowdownstyling'><a href="/" onClick={this.openPopUp}>Gif</a></p>
                            <p className='drowdownstyling'><a href="/" onClick={this.openPopUp}>Watch party</a></p>
                            <p className='drowdownstyling'><a href="/" onClick={this.openPopUp}>Play With Friend</a></p>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default CreatePost