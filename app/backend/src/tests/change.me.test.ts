// import * as sinon from 'sinon';
// import * as chai from 'chai';
// // @ts-ignore
// import chaiHttp = require('chai-http');

// import { app } from '../app';
// import Example from '../database/models/ExampleModel';

// import { Response } from 'superagent';

// chai.use(chaiHttp);

// const { expect } = chai;

// describe('Teste Login', () => {
//   /**
//    * Exemplo do uso de stubs com tipos
//    */

//   // let chaiHttpResponse: Response;

//   // before(async () => {
//   //   sinon
//   //     .stub(Example, "findOne")
//   //     .resolves({
//   //       ...<Seu mock>
//   //     } as Example);
//   // });

//   // after(()=>{
//   //   (Example.findOne as sinon.SinonStub).restore();
//   // })

//   // it('...', async () => {
//   //   chaiHttpResponse = await chai
//   //      .request(app)
//   //      ...

//   //   expect(...)
//   // });

//   const reqValido = {
//     email: 'usuario@teste.com',
//     password: '123456'
//   };

//   const reqInvalido = {
//     email: 'usuarioteste.com',
//     password: '1234'
//   };

//   // before(() => {
//   //   res.status = sinon.stub().returns(res);
//   //   res.json = sinon.stub();

//   //   sinon.stub(services, 'getAll').resolves(products.allProducts);
//   //   sinon.stub(services, 'create').resolves(products.oneProduct)
//   // });

//   // after(() => {
//   //   services.getAll.restore();
//   //   services.create.restore();
//   // })

//   it('Usuario válido', () => {
//     expect(false).to.be.eq(true);
//   });
// });
