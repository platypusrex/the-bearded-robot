export function generateId() {
	const PUSH_CHARS = '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';
	let lastPushTime = 0;
	let lastRandChars = [];

	function id() {
		let now = new Date().getTime();
		let duplicateTime = (now === lastPushTime);
		lastPushTime = now;

		let timeStampChars = new Array(8);
		for (let i = 7; i >= 0; i--) {
			timeStampChars[i] = PUSH_CHARS.charAt(now % 64);
			now = Math.floor(now / 64);
		}
		if (now !== 0) throw new Error('Should have converted the entire timestamp.');

		let id = timeStampChars.join('');

		if (!duplicateTime) {
			for (let i = 0; i < 12; i++) {
				lastRandChars[i] = Math.floor(Math.random() * 64);
			}
		} else {
			for (let i = 11; i >= 0 && lastRandChars[i] === 63; i--) {
				lastRandChars[i] = 0;
			}
			lastRandChars[i]++;
		}
		for (let i = 0; i < 12; i++) {
			id += PUSH_CHARS.charAt(lastRandChars[i]);
		}
		if(id.length != 20) throw new Error('Length should be 20.');

		return id;
	}
	return id();
}