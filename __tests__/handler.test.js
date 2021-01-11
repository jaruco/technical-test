const handler = require('../handler');
const connection = require("../config/database");
    
beforeAll( async() => {
      q = 'INSERT INTO `sw_movies` (`titulo`, `id_episodio`, `rastreo_apertura`, `director`, `productor`, `fecha_estreno`, `personajes`, `planetas`, `naves_espaciales`, `vehiculos`, `especies`, `fecha_creacion`, `fecha_edicion`, `url`) VALUES (' + 
      connection.escape('dataTEST') + ',' + connection.escape(9999999) + ',' + connection.escape('dataTEST') + ',' + connection.escape('dataTEST') + ',' + connection.escape('dataTEST') + ',' + connection.escape('1977-05-25') + ',' + connection.escape('[]') + ',' + connection.escape('[]') + ',' + connection.escape('[]') + ',' + connection.escape('[]') + ',' + connection.escape('[]') + ',' + connection.escape('1977-05-25') + ',' + connection.escape('1977-05-25') + ',' + connection.escape('dataTEST') + ')' ;
      await connection.query(q);
    });

afterAll( async(done) => {
        q = 'DELETE FROM `sw_movies` WHERE id_episodio=' + connection.escape(9999999);
        await connection.query(q);
        await connection.end();
    });
    
    it('fetch StarWars API', async () => {
        const result = await handler.getMoviesAPI();
        expect(JSON.parse(result.body)['results'][0].title).toContain('A New Hope');
        expect(result.statusCode).toBe(200);
        });

    it('Get all movies stored', async () => {
        const result = await handler.getAllMovies();
        expect(JSON.parse(result.body)[0].titulo).toContain('dataTEST');
        expect(result.statusCode).toBe(200);
    })