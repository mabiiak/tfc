import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';

import Teams from '../database/models/team';

chai.use(chaiHttp);

const { expect } = chai;

describe('1 - Testa rota: GET/teams', () => {
  let chaiHttpResponse: Response;

  it('Retorna todos os times', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/leaderboard/home');
    
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).length(16);
  });
});

describe('2 - Testa rota: GET/teams', () => {
  let chaiHttpResponse: Response;

  it('Retorna todos os times', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/leaderboard/away');
    
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).length(16);
  });
});
