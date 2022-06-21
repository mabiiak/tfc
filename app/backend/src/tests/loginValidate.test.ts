import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

const jwt = require('../utils/jwt');

import { Response } from 'superagent';


chai.use(chaiHttp);

const { expect } = chai;

describe('(01) Testa get/login/validate - usario valido', () => {
  let chaiHttpResponse: Response;

    before(async () => {
      sinon
        .stub(jwt, 'decodedToken')
        .resolves('admin');
    });

    after(()=> {
      (jwt.decodedToken as sinon.SinonStub).restore();
    })

    it('Senha correta', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/login/validate')
        .send({
          email: 'admin@admin.com',
          password: 'segredo'
        });
      
      expect(chaiHttpResponse.status).to.be.equal(200);
    });
});

describe('(01) Testa get/login/validate - usario invalido', () => {
  let chaiHttpResponse: Response;

    before(async () => {
      sinon
        .stub(jwt, 'decodedToken')
        .resolves(undefined);
    });

    after(()=> {
      (jwt.decodedToken as sinon.SinonStub).restore();
    })

    it('Senha correta', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/login/validate')
        .send({
          email: 'admin@admin.com',
          password: 'segredo'
        });
      
      expect(chaiHttpResponse.status).to.be.equal(400);
    });
});
