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

describe('(01) Testa push/login - usario valido', () => {

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
});
