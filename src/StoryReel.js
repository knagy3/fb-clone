import React from 'react'
import "./StoryReel.css"
import Story from './Story'
import csiziProfile from './assests/csizi.jpg'
import csiziPost from './assests/csizi_post.jpg'
import danaProfile from './assests/dana.jpg'
import danaPost from './assests/dana_post.jpg'
import apaProfile from './assests/apa.jpg'
import apaPost from './assests/apa_post.jpg'
import balintProfile from './assests/balint.jpg'
import balintPost from './assests/balint_post.jpg'
import krisPost from './assests/kris_post.jpg'

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image={krisPost}
                profileSrc='https://lh5.googleusercontent.com/-ZAy0Q1TRALU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckqBMiyHlW1NXKcIVPwsFclC4rftQ/s96-c/photo.jpg'
                title='Kristof Nagy'
            />
            <Story
                image={csiziPost}
                profileSrc={csiziProfile}
                title='Laszlo Csizmadia'
            />
            <Story
                image={apaPost}
                profileSrc={apaProfile}
                title='Laszlo Nagy'
            />
            <Story
                image={balintPost}
                profileSrc={balintProfile}
                title='Balint Nagy'
            />
            <Story
                image={danaPost}
                profileSrc={danaProfile}
                title='Daniella Nagy'
            />
        </div>
    )
}

export default StoryReel
