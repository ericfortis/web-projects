/**
 * Copyright (c) Eric Fortis. All rights reserved.
 * Licensed under the ISC license found in the LICENSE
 * file in the root directory of this source tree.
 */

export const A       = 0
export const A_Sharp = 1
export const B       = 2
export const C       = 3
export const C_Sharp = 4
export const D       = 5
export const D_Sharp = 6
export const E       = 7
export const F       = 8
export const F_Sharp = 9
export const G       = 10
export const G_Sharp = 11

export const A_Flat = G_Sharp
export const B_Flat = A_Sharp
export const C_Flat = B
export const D_Flat = C_Sharp
export const E_Flat = D_Sharp
export const F_Flat = E
export const G_Flat = F_Sharp

// Offsets (intervals) from root note
const MajorSecond     = 2
const MinorThird      = 3
const MajorThird      = 4
const PerfectFourth   = 5
const DiminishedFifth = 6
const PerfectFifth    = 7
const AugmentedFifth  = 8

export function Power(root)           { return  Diad(root,                PerfectFifth) }
export function SuspendedSecond(root) { return Triad(root, MajorSecond,   PerfectFifth) }
export function Minor(root)           { return Triad(root, MinorThird,    PerfectFifth) }
export function Major(root)           { return Triad(root, MajorThird,    PerfectFifth) }
export function SuspendedFourth(root) { return Triad(root, PerfectFourth, PerfectFifth) }
export function Diminished(root)      { return Triad(root, MinorThird,    DiminishedFifth) }
export function Augmented(root)       { return Triad(root, MajorThird,    AugmentedFifth) }

function Diad(root, offset) {
	return [
		root,
		offsetNote(root, offset)
	]
}

function Triad(root, offsetA, offsetB) {
	return [
		root,
		offsetNote(root, offsetA),
		offsetNote(root, offsetB)
	]
}

function offsetNote(root, offset) {
	const nNotes = 12
	let candidate = root + offset
	if (candidate >= nNotes) // Is the candidate note in the next octave?
		candidate -= nNotes    // If so, substract an octave (this program handles only one)
	return candidate
}

