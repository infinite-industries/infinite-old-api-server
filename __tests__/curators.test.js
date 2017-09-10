const frisby = require('frisby');
const Joi = frisby.Joi;

const route_name = 'curators';
const singular_route_name = 'curator';
const id = 'ca432195-2a2c-49e4-9a55-32d9f10dcc77';

it('should return json descriptor for ' + route_name + ' entity by id', function(done){
    frisby.get('http://localhost:3003/' + route_name + '/' + id)
        .expect('status', 200)
        .then(function(response){
            expect(response._body.status).toBe('success');

            Joi.assert(response._body[singular_route_name].title, Joi.string());
            Joi.assert(response._body[singular_route_name].id, Joi.string());
        })

        .done(done);
});

it('should return all ' + route_name + ' for /' + route_name + ' path', function(done){
    frisby.get('http://localhost:3003/' + route_name + '/')
        .expect('status', 200)
        .then(function(response){
            expect(response._body.status).toBe('success');
            expect(response._body[route_name].length).toBe(6);
        })

        .done(done);
});

it('should holler back with error if wrong ' + singular_route_name + ' id is used', function(done){
    frisby.get('http://localhost:3003/' + route_name + '/xyz')
        .expect('status', 404)  //Should this be an actuall 500 or not?
        .then(function(response){
            expect(response._body.status).toBe('no_such_id');
        })
        .done(done);
});
