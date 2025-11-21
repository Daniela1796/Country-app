import { Link } from 'react-router-dom';

function CountryCard({ country }) {
  return (
    <div className="col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm">
        <img 
          src={country.flags.png} 
          alt={`Flag of ${country.name.common}`}
          className="card-img-top"
          style={{ height: '150px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{country.name.common}</h5>
          <p className="card-text">
            <strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}<br/>
            <strong>Región:</strong> {country.region}<br/>
            <strong>Población:</strong> {country.population.toLocaleString()}
          </p>
          <Link 
            to={`/country/${country.cca3}`}
            className="btn btn-primary btn-sm"
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;