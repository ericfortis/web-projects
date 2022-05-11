/**
 * Copyright (c) Eric Fortis. All rights reserved.
 * Licensed under the ISC license found in the LICENSE
 * file in the root directory of this source tree.
 */

import {
	Power,
	Minor, Major,
	Diminished, Augmented,
	SuspendedSecond, SuspendedFourth,
	A, C, D, D_Sharp, E, G_Flat, G, G_Sharp
} from './chord-maker.js';


assertChordsAreEqual(Power(C),           [C, G])
assertChordsAreEqual(Power(G),           [G, D])
assertChordsAreEqual(Minor(C),           [C, D_Sharp, G])
assertChordsAreEqual(Major(C),           [C, E, G])
assertChordsAreEqual(SuspendedSecond(G), [G, A, D])
assertChordsAreEqual(SuspendedFourth(D), [D, G, A])
assertChordsAreEqual(Diminished(C),      [C, D_Sharp, G_Flat])
assertChordsAreEqual(Augmented(C),       [C, E, G_Sharp])

function assertChordsAreEqual(chord1, chord2) {
	console.log(chord1, chord2)

	if (chord1.length !== chord2.length)
		throw 'FAILED: The chords have different number of notes'

	for (let i = 0; i < chord1.length; i++)
		if (chord1[i] !== chord2[i])
			throw `FAILED: The note at index: ${i} doesn't match`

	console.log('PASSED')
}
