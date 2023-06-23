import * as Accordion from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "@radix-ui/react-icons"

export default function MyAccordion() {
	return (
		<Accordion.Root defaultValue={"item-2"} collapsible>
			<Accordion.Item value="item-1">
				<Accordion.Trigger>
					First component
					<ChevronDownIcon />
				</Accordion.Trigger>
				<Accordion.Content>
					Yes. It's unstyled by default, giving you freedom over the look and
					feel.
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-2">
				<Accordion.Trigger>
					Second component
					<ChevronDownIcon />
				</Accordion.Trigger>
				<Accordion.Content>
					Opens by default
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-3">
				<Accordion.Trigger>
					Third component
					<ChevronDownIcon />
				</Accordion.Trigger>
				<Accordion.Content>
					Yes. It's unstyled by default, giving you freedom over the look and
					feel.
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	)
}
