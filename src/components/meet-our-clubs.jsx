import React from 'react'
import Link from 'next/link'
import ScrollContainer from 'react-indiana-drag-scroll'
import styles from '../styles/meet-our-clubs.module.css'
import { clubs } from '../data/clubs-info'

function buildClubWidget(name, getInvolved, backgroundImage, socialMedia, x, y) {
  return (
    <Link style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" href={socialMedia.discord}>
      <div
        className={styles['club']}
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          start: { x },
          top: { y },
        }}
      >
        <div className={styles['club-contents']}>
          <h2>{name}</h2>
        </div>
      </div>
    </Link>
  )
}

export default function MeetOurClubs() {
  return (
    <div className={styles['meet-our-clubs']}>
      <h1>Meet Our Clubs</h1>
      <ScrollContainer className={styles['clubs']} hideScrollbars={false}>
        {clubs.map((data, key) => {
          return (
            <div key={key}>
              {buildClubWidget(data.name, data.getInvolved, data.image, data.socialMedia, data.x, data.y)}
            </div>
          )
        })}
      </ScrollContainer>
    </div>
  )
}
