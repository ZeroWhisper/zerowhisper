import { createServer, Factory, Model } from 'miragejs';

// criar lista de models, assim terá uma lista de todos os items usados no DB
// Depois de ter essa lista, que vai ser usada para recuperar todas as outras listas
// Ao recuperar as listas, usar o localhost storage codificado pra guardar os dados
// Toda vez que salvar um item, você deve salvar apenas a respectiva lista

export default function MirageServer() {
  createServer({
    models: {
      transaction: Model,
    },

    factories: {
      transaction: Factory.extend({
        createdAt: new Date(),
      }),
    },

    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: 'Comprar Carne',
            type: 'withdraw',
            category: 'Comida',
            amount: 60,
            createdAt: new Date('2022-10-10 00:00:00'),
          },
          {
            id: 2,
            title: 'Recebimento Aluguel',
            type: 'deposit',
            category: 'Salário',
            amount: 1800,
            createdAt: new Date(),
          },
        ],
      });
    },

    routes() {
      this.namespace = 'api';

      this.get('/transactions', schema => {
        return this.schema.all('transaction');
      });

      this.get('*', schema => {
        console.log('this is a log');
        return { result: 'OK' };
      });

      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody);
        data.createdAt = new Date();
        return schema.create('transaction', data);
      });

      this.get('/login', () => {
        return { result: 'OK' };
      });

      this.get('/authors/:id', (schema, request) => {
        let id = request.params.id;
        return (schema as any).authors.find(id);
      });

      this.get('/authors', (schema, request) => {
        let id = request.queryParams.id;
        return (schema as any).authors.find(id);
      });
    },
  });

  // createServer({
  //   models: {
  //     reminder: Model,
  //   },
  //   seeds(server) {
  //     server.create('reminder', { text: 'Text 1' });
  //   },
  //   routes() {
  //     // this.namespace = 'api';
  //     this.get('/api/reminders', (schema, request) => {
  //       return schema.reminders.all();
  //     });
  //     // source: https://miragejs.com/tutorial/part-5/
  //     this.delete('/api/reminders/:id', (schema, request) => {
  //       let id = request.params.id;
  //       return schema.reminders.find(id).destroy();
  //       // source: https://miragejs.com/api/classes/response/
  //       // new Response(400, { some: 'header' }, { errors: [ 'name cannot be blank'] });
  //     });
  //   },
  // });
}
