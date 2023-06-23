import * as Popover from "@radix-ui/react-popover"

export default function MyPopover() {
	return (
		<Popover.Root>
			<Popover.Trigger>Open Popover</Popover.Trigger>
			<Popover.Portal>
				<Popover.Content>You clicked me!</Popover.Content>
			</Popover.Portal>
		</Popover.Root>
	)
}
