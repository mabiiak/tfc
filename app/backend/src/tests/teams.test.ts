import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';

import Teams from '../database/models/team';

chai.use(chaiHttp);

const { expect } = chai;

describe('6 - Testa rota: GET/teams', () => {
  let chaiHttpResponse: Response;

  it('Retorna todos os times', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/teams');
    
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).length(16);
  });
});

describe('7 - Testa rota: GET/teams/:id', () => {
  let chaiHttpResponse: Response;

  it('Retorna o time procurado', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/teams/1');
    
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).haveOwnProperty('id');
    expect(chaiHttpResponse.body).haveOwnProperty('teamName');
  });
})
