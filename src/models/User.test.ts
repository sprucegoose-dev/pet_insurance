import bcrypt from 'bcrypt';
import UserResource from '../resources/UserResource';
import { InsuranceStatus } from '../types/InsuranceStatus-types';
import Pet from './Pet';

import User from './User';

describe('User', () => {

    describe('create', () => {

        it('should store a new User in the database', async () => {
            const data = {
                firstName: 'Ace',
                lastName: 'Ventura',
                email: 'ace.ventura@petdetective.com',
                password: 'alrighty.then',
            }

            const user = await User.create(data);

            expect(user.firstName).toBe(data.firstName);
            expect(user.lastName).toBe(data.lastName);
            expect(user.email).toBe(data.email);
            expect(await bcrypt.compare(data.password, user.password)).toBe(true);
            expect(Date.parse((user.createdAt))).not.toBeNaN();
            expect(Date.parse((user.updatedAt))).not.toBeNaN();
        });

    });

    describe('update', () => {

        it('should store a new user in the database', async () => {
            const data = {
                firstName: 'Lloyd',
                lastName: 'Christmas ',
                email: 'lloyd.christmas@mutt-cutts.com',
                password: 'landed.on.the.moon!',
            }

            const user = await User.update(1, data);
            expect(user.firstName).toBe(data.firstName);
            expect(user.lastName).toBe(data.lastName);
            expect(user.email).toBe(data.email);
            expect(await bcrypt.compare(data.password, user.password)).toBe(true);
        });

    });

    describe('getOne', () => {

        it('should retrieve an existing user from the database', async () => {
            const user = await User.getOne(1);
            expect(user).toBeDefined();
        });

    });

    describe('getPets', () => {

        it('should retrieve all pets for a user from the database', async () => {
            await Pet.create({
                age: 5,
                insuranceStatusId: 1,
                name: 'Kit-kat',
                typeId: 1,
                ownerId: 1,
            });

            await Pet.create({
                age: 3,
                insuranceStatusId: 2,
                name: 'Boofy',
                typeId: 2,
                ownerId: 1,
            });

            const pets = await User.getPets(1);

            expect(pets.length).toBe(2);
            expect(pets[0].name).toBe('Kit-kat');
            expect(pets[0].type?.type).toBe('Cat');
            expect(pets[0].insuranceStatus?.type).toBe(InsuranceStatus.FULLY_COVERED);
            expect(pets[1].name).toBe('Boofy');
            expect(pets[1].type?.type).toBe('Dog');
            expect(pets[1].insuranceStatus?.type).toBe(InsuranceStatus.ACCIDENT_ONLY);
        });

    });

    describe('delete', () => {

        it('should delete a user from the database', async () => {
            await User.delete(1);
            const user = await UserResource.findOne({
                where: {
                    id: 1,
                }
            });
            expect(user).toBeNull();
        });

    });


});
