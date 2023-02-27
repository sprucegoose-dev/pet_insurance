import ClaimResource from '../resources/ClaimResource';
import { IPetResource } from '../types/Pet-types';
import { IUserResource } from '../types/User-types';
import Claim from './Claim';
import Pet from './Pet';
import User from './User';

describe('Claim', () => {
    let pet: IPetResource;
    let user: IUserResource;

    beforeAll(async () => {
        user = await User.create({
            firstName: 'Ace',
            lastName: 'Ventura',
            email: 'ace.ventura@petdetective.com',
            password: '123',
        });

        pet = await Pet.create({
            age: 3,
            insuranceStatusId: 1,
            name: 'Boofy',
            typeId: 1,
            ownerId: user.id,
        });
    });

    describe('create', () => {

        it('should store a new claim in the database', async () => {
            const data = {
                cost: 100,
                description: 'New pet insurance',
                statusId: 1,
                petId: pet.id,
            }

            const claim = await Claim.create(data);

            expect(claim.cost).toBe(data.cost);
            expect(claim.description).toBe(data.description);
            expect(claim.statusId).toBe(data.statusId);
            expect(claim.petId).toBe(data.petId);
            expect(Date.parse((claim.createdAt))).not.toBeNaN();
            expect(Date.parse((claim.updatedAt))).not.toBeNaN();
        });

    });

    describe('update', () => {

        it('should update an existing claim in the database', async () => {
            const data = {
                cost: 150,
                description: 'New description',
                statusId: 2,
                petId: pet.id,
            }

            const claim = await Claim.update(1, data);

            expect(claim.cost).toBe(data.cost);
            expect(claim.description).toBe(data.description);
            expect(claim.statusId).toBe(data.statusId);
            expect(claim.petId).toBe(data.petId);
        });

    });

    describe('getOne', () => {

        it('should retrieve an existing claim from the database', async () => {
            const claim = await Claim.getOne(1);
            expect(claim).toBeDefined();
        });

    });

    describe('delete', () => {

        it('should delete a claim from the database', async () => {
            await Claim.delete(1);

            const claim = await ClaimResource.findOne({
                where: {
                    id: 1,
                }
            });

            expect(claim).toBeNull();
        });

    });

});
