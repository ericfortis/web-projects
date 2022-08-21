const cFeedbackPulse = 'feedbackPulse'

const h1 = r.bind(null, 'h1')
const div = r.bind(null, 'div')
const label = r.bind(null, 'label')
const input = r.bind(null, 'input')
const output = r.bind(null, 'output')
const legend = r.bind(null, 'legend')
const fieldset = r.bind(null, 'fieldset')

const refRoom = useRef()
const refNorthWall = useRef()
const refEastWall = useRef()
const refSouthWall = useRef()
const refWestWall = useRef()

const refLengthInput = useRef()
const refWidthInput = useRef()
const refHeightInput = useRef()

const refWallFinishRadio = useRef()
const refGallonsNeeded = useRef()

document.body.append(
	div({ className: 'PaintCalculator' },
		h1(null, 'Paint Calculator'),

		div({ className: 'RoomWrap' },
			div({ className: 'Room', ref: refRoom },
				div({ className: 'Wall', ref: refNorthWall }),
				div({ className: 'Wall', ref: refSouthWall }),
				div({ className: 'Wall', ref: refEastWall }),
				div({ className: 'Wall', ref: refWestWall }))),

		fieldset({ className: 'SizeInputs' },
			legend(null, 'Room Size'),

			label(null, 'Width (ft)', input({
				id: 'iWidth',
				ref: refWidthInput,
				type: 'number',
				value: 12,
				min: 1,
				onChange: update
			})),
			label(null, 'Length (ft)', input({
				id: 'iLength',
				ref: refLengthInput,
				type: 'number',
				value: 14,
				min: 1,
				onChange: update
			})),
			label(null, 'Height (ft)', input({
				id: 'iHeight',
				ref: refHeightInput,
				type: 'number',
				value: 8,
				min: 1,
				onChange: update
			}))),

		fieldset({
				ref: refWallFinishRadio,
				className: 'WallFinishRadio'
			},
			legend(null, 'Wall Finish'),

			label(null, input({
				id: 'rSmoothFinish',
				type: 'radio',
				name: 'wallFinish',
				value: 400, // sq.ft. per gallon
				checked: true,
				onChange: update
			}), 'Smooth'),

			label(null, input({
				id: 'rTexturedFinish',
				type: 'radio',
				name: 'wallFinish',
				value: 350,
				onChange: update
			}), 'Textured')),

		fieldset({ className: 'OutputDisplay' },
			legend(null, 'Gallons Needed'),
			output({
				for: 'iWidth iLength iHeight rSmoothFinish rTexturedFinish',
				ref: refGallonsNeeded
			})))
)


update()
function update() {
	const length = refLengthInput.current.valueAsNumber
	const width = refWidthInput.current.valueAsNumber
	const height = refHeightInput.current.valueAsNumber

	const pxLength = length * 10 + 'px'
	const pxWidth = width * 10 + 'px'
	const pxHeight = height * 10 + 'px'

	refRoom.current.style.width = pxLength
	refRoom.current.style.height = pxWidth

	refNorthWall.current.style.width = pxLength
	refSouthWall.current.style.width = pxLength
	refEastWall.current.style.width = pxWidth
	refWestWall.current.style.width = pxWidth

	refNorthWall.current.style.height = pxHeight
	refSouthWall.current.style.height = pxHeight
	refEastWall.current.style.height = pxHeight
	refWestWall.current.style.height = pxHeight

	refNorthWall.current.style.transform = `rotateX(90deg)`
	refSouthWall.current.style.transform = `translateY(${pxWidth}) rotateX(90deg)`
	refEastWall.current.style.transform = `translateY(${pxWidth}) translateX(${pxLength}) rotateY(-90deg) rotateZ(-90deg)`
	refWestWall.current.style.transform = `rotateY(90deg) rotateZ(90deg)`

	const coverage = parseInt(refWallFinishRadio.current.querySelector('input[type=radio]:checked').value, 10)
	const gallonsNeeded = ((2 * height * width) + (2 * height * length)) / coverage
	refGallonsNeeded.current.innerText = gallonsNeeded.toFixed(2)

	refGallonsNeeded.current.classList.remove(cFeedbackPulse)
	requestAnimationFrame(function () {
		refGallonsNeeded.current.classList.add(cFeedbackPulse)
	})
}


// Similar to the `React.createElement` API
function r(tagName, props, ...children) {
	const elem = document.createElement(tagName)
	if (props)
		for (const [key, value] of Object.entries(props))
			if (key === 'onChange')
				elem.addEventListener('change', value)
			else if (key === 'ref')
				value.current = elem
			else if (key in elem)
				elem[key] = value
			else
				elem.setAttribute(key, value)
	elem.append(...children.flat())
	return elem
}

function useRef() {
	return { current: null }
}
