const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../src/app');
const connection = require('../../src/db/connection');

const { expect, use } = chai;

const talkerList = [
    {
        id: 1,
        name: 'Henry Passagem',
        age: 62,
        talk_watched_at: '22/10/2020',
        talk_rate: 5,
    },
    {
        id: 2,
        name: 'Vai Nessa',
        age: 67,
        talk_watched_at: '30/10/2020',
        talk_rate: 4,
    }
];

describe('Test talker endpoints', function () {
    it('List all talkers', async function (s) {
        sinon.stub(connection, 'execute').resolves([talkerList]);
       
        const response = await chai
            .request(app)
            .get('/talker');

        expect(response.status).to.equal(200);
        expect(response.body).to.deep.equal(talkerList);
    });

});
