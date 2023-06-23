import * as AspectRatio from "@radix-ui/react-aspect-ratio"

export default function MyAspectRatio() {
	return (
		<AspectRatio.Root ratio={2 / 3}>
			<img
				src="https://images.unsplash.com/photo-1687073558736-531dc8bfd15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
				width="400px"
			/>
		</AspectRatio.Root>
	)
}
