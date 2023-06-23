import MyAccordion from "./components/Accordion"
import MyAspectRatio from "./components/AspectRatio"
import MyCheckbox from "./components/Checkbox"
import MyPopover from "./components/Popover"

export default function App() {
	return (
		<div className="app">
			<h3>Popover component</h3>
			<MyPopover />
			<h3>Accordion component</h3>
			<MyAccordion />
			<h3>Checkbox</h3>
			<MyCheckbox />
			<h3>Aspect ratio</h3>
			<MyAspectRatio />
		</div>
	)
}
