import './TripArticle.css';
import TripArticleTemplate from './TripArticleTemplate';
import { Link } from 'react-router-dom';

function TripArticle() {
  return (
    <div className="trip">
      <h1>Latest Trips</h1>
      <p>Embark on a journey of discovery with my latest trips!</p>
      <div className="tripcard">
        <TripArticleTemplate
          articleId="1"
          picture="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FudG9yaW5pfGVufDB8fDB8fHwy"
          heading="Santorini Getaway"
          text="Escape to the breathtaking island of Santorini,
           where whitewashed buildings cascade down cliffsides
           against the backdrop of the shimmering Aegean Sea."
        />

        <TripArticleTemplate
          articleId="2"
          picture="https://images.unsplash.com/photo-1475518845976-0fd87b7e4e5d?w=2000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVyb3JhJTIwYm9yZWFsaXN8ZW58MHx8MHx8fDI%3D"
          heading="Chasing the Northern Lights in Alta"
          text="Alta, nestled in Norway's remote Arctic region,
           is a haven for those seeking the enchanting spectacle
           of the Northern Lights."
        />

        <TripArticleTemplate
          articleId="3"
          picture="https://images.unsplash.com/flagged/photo-1575555201693-7cd442b8023f?w=2000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9zJTIwYW5nZWxlc3xlbnwwfHwwfHx8Mg%3D%3D"
          heading="One Week in the City of Dreams"
          text="Discover the vibrant energy and iconic landmarks of
           Los Angeles, where endless sunshine meets Hollywood glamour. "
        />
      </div>
    </div>
  );
}

export default TripArticle;
