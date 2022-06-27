import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Match from '../database/models/match';

import { Response } from 'superagent';

import { MochaMatches, newMatche } from './mocha/matches';

import { newToken } from '../utils/jwt';

const service = require('../services/matches');

chai.use(chaiHttp);

const { expect } = chai;

const token = newToken({
  id: 1,
  username: 'admin',
  role: 'admin',
  email: 'admin@admin.com'
});

describe('4 - Testa rota: GET/matches', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(service, 'getAll')
      .resolves(MochaMatches);
  });

  after(()=> {
    (service.getAll as sinon.SinonStub).restore();
  });

  it('Retorna todos as partidas', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/matches')
    
    expect(chaiHttpResponse.status).to.be.equal(200);
  });
});

describe('5 - Testa rota: POST/matches', () => {
  describe('Usario válido', () => {
    let chaiHttpResponse: Response;

    before(async () => {
      sinon
        .stub(service, 'create')
        .resolves(newMatche);
    });
  
    after(()=> {
      (service.create as sinon.SinonStub).restore();
    });

    it('Times válidos', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/matches')
        .set({ "Authorization": token })
        .send({
          "homeTeam": 1,
          "homeTeamGoals": 2,
          "awayTeam": 10,
          "awayTeamGoals": 2,
          "inProgress": true
        });
      
      expect(chaiHttpResponse.status).to.be.equal(201);
    });

  //   it('Campos nulos', async () => {
  //     chaiHttpResponse = await chai
  //       .request(app)
  //       .post('/login')
  //       .send({
  //         email: '',
  //         password: ''
  //       });
      
  //     expect(chaiHttpResponse.status).to.be.equal(400);
  //   });
  // });

  // describe('Usario valido', () => {
  //   let chaiHttpResponse: Response;

  //     before(async () => {
  //       sinon
  //         .stub(Users, 'findOne')
  //         .resolves(User[0] as Users);
  //     });

  //     after(()=> {
  //       (Users.findOne as sinon.SinonStub).restore();
  //     })

  //     it('Email correto', async () => {
  //       chaiHttpResponse = await chai
  //         .request(app)
  //         .post('/login')
  //         .send({
  //           email: 'admin@admin.com',
  //           password: 'secret_admin'
  //         });

  //       expect(chaiHttpResponse.status).to.be.equal(200);
  //       expect(chaiHttpResponse.body).to.haveOwnProperty('token');
  //     });
  });
});

describe('6 - Testa rota: PATCH/matches/:id', () => {
  let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(service, 'updateGoals')
  //     .resolves(MochaMatches);
  // });

  // after(()=> {
  //   (service.getAll as sinon.SinonStub).restore();
  // });

  it('Retorna todos as partidas', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .patch('/matches/:id')
      .set({ "Authorization": token })
    
    expect(chaiHttpResponse.status).to.be.equal(200);
  });
});
