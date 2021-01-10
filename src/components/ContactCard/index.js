import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const contact = [
  {
    type: 'Phone',
    content: '(+66) 92-504-8989',
    link: '',
    iconFA: 'phone-alt',
  },
  {
    type: 'Email',
    content: 'babyzalot@gmail.com',
    link: '',
    iconFA: 'envelope-open-text',
  },
  {
    type: 'GitHub',
    content: 'https://github.com/ZalotBabyZ',
    link: 'https://github.com/ZalotBabyZ',
    iconFab: 'github',
  },
  {
    type: 'LinkedIn',
    content: ' https://www.linkedin.com/in/BabyZalot',
    link: ' https://www.linkedin.com/in/BabyZalot',
    iconFab: 'linkedin',
  },
];

function ContactCard() {
  return (
    <div className="card contact-card">
      <div className="card-head">CONTACT</div>
      <div className="card-body contact-body">
        {contact.map((item, ind) => {
          return (
            <div className="contact-list" key={ind}>
              <div className="icon">
                {item.iconFab ? (
                  <FontAwesomeIcon icon={['fab', item.iconFab]} />
                ) : item.iconFA ? (
                  <FontAwesomeIcon icon={item.iconFA} />
                ) : null}
              </div>
              <div className="contact-content">
                {item.link ? (
                  <a href={item.link} className="contact-content">
                    {item.content} &nbsp;&nbsp;
                    <FontAwesomeIcon icon="external-link-alt" />
                  </a>
                ) : (
                  <p className="contact-content">{item.content}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContactCard;
