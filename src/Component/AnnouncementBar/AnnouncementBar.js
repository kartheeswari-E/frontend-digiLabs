import React from 'react'
import "./AnnouncementBar.css"
function AnnouncementBar() {
    const sentence= "We are happy to announce that we raise $2 Million in Seed Funding";
  return<>
  <section className='announcement-container'>
    <div className='announcement-button'>Announcement</div>
    <div className='announcement-sentence'>{sentence}</div>
  </section>
  </>
}

export default AnnouncementBar