import bcrypt from 'bcrypt';
import PetResource from '../resources/PetResource';
import UserResource from '../resources/UserResource';
import { InsuranceStatus } from '../types/InsuranceStatus-types';
import { IUserResource } from '../types/User-types';
import Claim from './Claim';
import Pet from './Pet';

import User from './User';

describe('Pet', () => {
    let user: IUserResource;

    beforeAll(async () => {
        user = await User.create({
            firstName: 'Ace',
            lastName: 'Ventura',
            email: 'ace.ventura@petdetective.com',
            password: '123',
        });
    });

    describe('create', () => {

        it('should store a new Pet in the database', async () => {
            const data = {
                age: 3,
                insuranceStatusId: 1,
                name: 'Kit-kat',
                typeId: 1,
                ownerId: user.id,
            }

            const pet = await Pet.create(data);

            expect(pet.name).toBe(data.name);
            expect(pet.insuranceStatusId).toBe(data.insuranceStatusId);
            expect(pet.name).toBe(data.name);
            expect(pet.typeId).toBe(data.typeId);
            expect(pet.ownerId).toBe(data.ownerId);
            expect(Date.parse((pet.createdAt))).not.toBeNaN();
            expect(Date.parse((pet.updatedAt))).not.toBeNaN();
        });

    });

    describe('update', () => {

        it('should store a new User in the database', async () => {
            const data = {
                age: 3,
                insuranceStatusId: 2,
                name: 'Boofy',
                typeId: 2,
                ownerId: user.id,
            }

            const pet = await Pet.update(1, data);
            expect(pet.name).toBe(data.name);
            expect(pet.insuranceStatusId).toBe(data.insuranceStatusId);
            expect(pet.name).toBe(data.name);
            expect(pet.typeId).toBe(data.typeId);
        });

    });

    describe('getOne', () => {

        it('should retrieve an existing pet from the database', async () => {
            const pet = await Pet.getOne(1);
            expect(pet).toBeDefined();
        });

    });

    describe('getClaims', () => {

        it('should retrieve all claims for a pet from the database', async () => {
            const claim = await Claim.create({
                cost: 100,
                description: 'New pet insurance',
                statusId: 1,
                petId: 1,
            });

            const claims = await Pet.getClaims(1);
            expect(claims[0].id).toBe(claim.id);
            expect(claims[0].petId).toBe(claim.petId);
        });

    });


    describe('delete', () => {

        it('should delete a pet from the database', async () => {
            await Pet.delete(1);
            const pet = await PetResource.findOne({
                where: {
                    id: 1,
                }
            });
            expect(pet).toBeNull();
        });

    });

});
