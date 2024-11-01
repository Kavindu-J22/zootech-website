// src/components/Section.js
import React from 'react';

const Section = ({
  title,
  content,
  image,
  SubContent,
  listItem1,
  listItem2,
  listItem3,
  listItem4,
  smallImage,
  className = '',
  teamMembers, // new prop for team members
  contacts // new prop for contacts
}) => (
  <div className={`section ${className}`}>
    {image && <img src={image} alt={title} className="section-image" />}
    {smallImage && <img src={smallImage} alt={title} className="small-image" />}
    <h2>{title}</h2>
    <p>{content}</p>
    <p>{SubContent}</p>
    {listItem1 || listItem2 || listItem3 || listItem4 ? (
      <ul className="section-list">
        {listItem1 && <li><i className="icon">🐾</i>{listItem1}</li>}
        {listItem2 && <li><i className="icon">📊</i>{listItem2}</li>}
        {listItem3 && <li><i className="icon">🌿</i>{listItem3}</li>}
        {listItem4 && <li><i className="icon">🗺️</i>{listItem4}</li>}
      </ul>
    ) : null}

    {/* Render team members */}
    {teamMembers && teamMembers.length > 0 && (
      <div className="team-members">
        <h3>Meet Our Team :</h3>
        <div className="team-list">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.photo} alt={member.name} className="team-photo" />
              <h5>{member.name}</h5>
              <h5>ID: {member.id}</h5>
              <h6>Department: {member.department}</h6>
            </div>
          ))}
        </div>
      </div>
    )}

    {/* Render contacts */}
    {contacts && contacts.length > 0 && (
      <div className="contact-info">
        <h3>Contact Us :</h3>
        <ul className="contact-list">
          {contacts.map((contact, index) => (
            <li key={index}>
              <h5>{contact.name}</h5>
              <h5>Phone: {contact.phone}</h5>
              <h6>Email: {contact.email}</h6>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export default Section;
