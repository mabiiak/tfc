import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import Users from '../database/models/user';

import { Response } from 'superagent';

import { User } from './mocha/userServices';

chai.use(chaiHttp);

const { expect } = chai;

describe('1 - Testa rota: POST/login', () => {
  describe('Usario invalido', () => {
    let chaiHttpResponse: Response;

    before(async () => {
      sinon
        .stub(Users, 'findOne')
        .resolves(User[0] as Users);
    });

    after(()=> {
      (Users.findOne as sinon.SinonStub).restore();
    })

    it('Email incorreto', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({
          email: 'testando@test.com',
          password: 'segredo'
        });
      
      expect(chaiHttpResponse.status).to.be.equal(401);
    });

    it('Campos nulos', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({
          email: '',
          password: ''
        });
      
      expect(chaiHttpResponse.status).to.be.equal(400);
    });
  });

  describe('Usario valido', () => {
    let chaiHttpResponse: Response;

      before(async () => {
        sinon
          .stub(Users, 'findOne')
          .resolves(User[0] as Users);
      });

      after(()=> {
        (Users.findOne as sinon.SinonStub).restore();
      })

      it('Email correto', async () => {
        chaiHttpResponse = await chai
          .request(app)
          .post('/login')
          .send({
            email: 'admin@admin.com',
            password: 'secret_admin'
          });

        expect(chaiHttpResponse.status).to.be.equal(200);
        expect(chaiHttpResponse.body).to.haveOwnProperty('token');
      });
  });
});
