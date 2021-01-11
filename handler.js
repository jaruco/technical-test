const connection = require('./config/database')
const fetch = require('node-fetch')

module.exports.getMoviesAPI = async event => {
  const fetchApi = await fetch('https://swapi.py4e.com/api/films/')
  const result = await fetchApi.json()
  if ( !result ) {
    return generateResponse(400, "Error de consulta");
  }
  return generateResponse(200, result);
}

module.exports.getAllMovies = async event => {
  const q = 'SELECT * FROM sw_movies';
  let result = await connection.query(q);
  await connection.end();

  if ( !result ) {
    return generateResponse(400, "Error de consulta");
  }
  if ( result.length == 0){
    return generateResponse(204, "Sin datos");  
  }
  return generateResponse(200, result);
}

module.exports.getMovie = async event => {
  let { id_episodio } = event.pathParameters;
  
  const q = 'SELECT * FROM sw_movies where id_episodio=' + connection.escape(id_episodio);
  let result = await connection.query(q);
  await connection.end();

  if( !result ){
    return generateResponse(404, "Película no encontrada");
  }
  return generateResponse(200, result);
}

module.exports.createMovie = async event => {
 let { titulo, id_episodio, rastreo_apertura, director, productor, fecha_estreno, personajes, planetas, naves_espaciales, vehiculos, especies, fecha_creacion, fecha_edicion, url } = JSON.parse(event.body);
 
 if ( !id_episodio ) {
   return generateResponse(405, "Id episodio es necesario")
 }
 else {
  personajes = JSON.stringify(personajes);
  planetas = JSON.stringify(planetas);
  naves_espaciales = JSON.stringify(naves_espaciales);
  vehiculos = JSON.stringify(vehiculos);
  especies = JSON.stringify(especies);
  
  let q = 'INSERT INTO `sw_movies` (`titulo`, `id_episodio`, `rastreo_apertura`, `director`, `productor`, `fecha_estreno`, `personajes`, `planetas`, `naves_espaciales`, `vehiculos`, `especies`, `fecha_creacion`, `fecha_edicion`, `url`) VALUES (' + 
           connection.escape(titulo) + ',' + connection.escape(id_episodio) + ',' + connection.escape(rastreo_apertura) + ',' + connection.escape(director) + ',' + connection.escape(productor) + ',' + connection.escape(fecha_estreno) + ',' + connection.escape(personajes) + ',' + connection.escape(planetas) + ',' + connection.escape(naves_espaciales) + ',' + connection.escape(vehiculos) + ',' + connection.escape(especies) + ',' + connection.escape(fecha_creacion) + ',' + connection.escape(fecha_edicion) + ',' + connection.escape(url) + ')' ;
  console.log(q);
  let result = await connection.query(q);
  await connection.end();

  if ( result ) {
    return generateResponse(200, "Se agregó la película!")
  }
  else {
    return generateResponse(400, "Error al registrar película");
  }
 }
}

function generateResponse(respCode, payload) {
  const response = {
    statusCode: respCode,
    body: JSON.stringify(payload)
  }
  return response;
}