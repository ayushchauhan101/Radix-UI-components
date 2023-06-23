import * as Checkbox from "@radix-ui/react-checkbox"
import { CheckIcon } from "@radix-ui/react-icons"

export default function MyCheckbox() {
	return (
		<form>
			<div style={{ display: "flex", alignItems: "center" }}>
				<Checkbox.Root
					style={{ height: "30px", width: "30px", borderRadius: "4px" }}
				>
					<Checkbox.Indicator>
						<CheckIcon />
					</Checkbox.Indicator>
				</Checkbox.Root>
				<label style={{ paddingLeft: "12px" }}>Click the checkbox</label>
			</div>
		</form>
	)
}
