import delay from './delay';
import * as idGenerator from './idGenerator';

const suppliers = [
	{
		name: 'Starbucks',
		deliveryLine: '199 Late Lane',
		city: 'Black Mountain',
		state: 'NC',
		zip: 29384,
		phone: 7048348931,
		email: 'starbuck@starbucks.support.com',
		id: '-K_qDwzZSwF006ev2_oH',
		category: 'Caffeine'
	},
	{
		name: 'Redbull',
		deliveryLine: '138 Wings Way',
		city: 'High Point',
		state: 'NC',
		zip: 29385,
		phone: 7043838484,
		email: 'getwings@redbull.com',
		id: '-K_qFY5LZOlkbdnrsSiu',
		category: 'Caffeine'
	},
	{
		name: 'Apple Store',
		deliveryLine: '8348 King Street',
		city: 'Charleston',
		state: 'SC',
		zip: 29403,
		phone: 8434059595,
		email: 'apple.charleston@apple.com',
		id: '-K_qFvIgofBqtuCvfrET',
		category: 'Gear'
	},
	{
		name: 'Google',
		deliveryLine: '8348 BetterThanIos Blvd.',
		city: 'Ladson',
		state: 'SC',
		zip: 29838,
		phone: 8439993847,
		email: 'google.charleston@gmail.com',
		id: '-K_qGU0dzljZaBdVv7Jd',
		category: 'Gear'
	},
	{
		name: 'Papa Zuzu',
		deliveryLine: '834 Coleman Blvd.',
		city: 'Mt. Pleasant',
		state: 'SC',
		zip: 29464,
		phone: 8433038348,
		email: 'papazuzu@gmail.com',
		id: '-K_qH3mdL-cutDcvM5kX',
		category: 'Munchies'
	},
	{
		name: 'Xiao Bao Biscuit',
		deliveryLine: '9349 Spring St.',
		city: 'Charleston',
		state: 'SC',
		zip: 29403,
		phone: 8437778283,
		email: 'xiaobao@gmail.com',
		id: '-K_qH_Zy01yG09LltHCl',
		category: 'Munchies'
	}
];

class SupplierApi {
	static getAllSuppliers() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(Object.assign([], suppliers));
			}, delay);
		});
	}

	static saveSupplier(supplier) {
		supplier = Object.assign({}, supplier);

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const minSupplierNameLength = 1;
				const validatePhone = /^\d{10}$/;
				const validateEmail = /(.+)@(.+){2,}\.(.+){2,}/;
				const validateZip = /^\d{5}$/;

				if(!supplier.name) {
					reject(`Supplier name is required`);
				}

				if(!supplier.category) {
					reject(`Supplier category is required`);
				}

				if(supplier.name.length < minSupplierNameLength) {
					reject(`Supplier name must be at least ${minSupplierNameLength} character`);
				}

				if(supplier.zip && validateZip.test(supplier.zip.toString()) === false) {
					reject(`Supplier zip should have 5 numbers`);
				}

				if(supplier.phone && validatePhone.test(supplier.phone.toString()) === false) {
					reject(`Supplier number format is incorrect. Please use same format as provided example`);
				}

				if(supplier.email && validateEmail.test(supplier.email) === false) {
					reject(`Supplier email address ${supplier.email} is invalid`);
				}

				if(supplier.id) {
					const currentSupplierId = suppliers.findIndex(sup => { return sup.id === supplier.id; });
					suppliers.splice(currentSupplierId, 1, supplier);
				} else {
					supplier.id = idGenerator.generateId();
					suppliers.push(supplier);
				}

				resolve(supplier);
			}, delay);
		});
	}

	static deleteSupplier(supplier) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const indexOfSupplierToDelete = suppliers.findIndex(sup => { return sup.id === supplier.id; });
				suppliers.splice(indexOfSupplierToDelete, 1);
				resolve(Object.assign({}, supplier));
			}, delay);
		});
	}
}

export default SupplierApi;