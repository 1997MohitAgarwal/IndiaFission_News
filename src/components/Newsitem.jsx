import React from "react";

export default function Newsitem(props) {
  return (
    <>
      <div
        className="card"
        style={{
          width: '18rem', // Fixed width
          height: '20rem', // Fixed height
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          margin: '20px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column', // Stack elements vertically
          justifyContent: 'space-between', // Ensures content and button are spaced
          transition: 'transform 0.3s ease',
        }}
      >
        <img
          className="card-img-top"
          src={props.image}
          alt="Card image cap"
          style={{
            height: '50%', // Takes up half of the card
            objectFit: 'cover',
          }}
        />
        <div
          className="card-body"
          style={{
            padding: '15px',
            display: 'flex',
            flexDirection: 'column', // Stack title, description, and button
            justifyContent: 'space-between', // Space items inside the body
            flexGrow: 1,
          }}
        >
          <div>
            <h5
              className="card-title"
              style={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                marginBottom: '10px',
                color: '#333',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {props.title}
            </h5>
            <p
              className="card-text"
              style={{
                fontSize: '0.9rem',
                color: '#555',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {props.description}
            </p>
          </div>
          <a
            href={props.link}
            target="_blank"
            className="btn btn-sm btn-info"
            style={{
              backgroundColor: '#17a2b8',
              borderColor: '#17a2b8',
              color: '#fff',
              padding: '5px 10px',
              borderRadius: '5px',
              transition: 'background-color 0.3s ease',
              marginTop: 'auto', // Pushes the button to the bottom of the body
              alignSelf: 'flex-start', // Aligns the button with other content
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#138496')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#17a2b8')}
          >
            Read more
          </a>
        </div>
      </div>
    </>
  );
}
