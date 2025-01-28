import ButtonView from "@ckeditor/ckeditor5-ui/src/button/buttonview";
import { Plugin } from "ckeditor5/src/core.js";
import musicIcon from "../src/soundwave.svg";

export default class Audio extends Plugin {
	init() {
		const editor = this.editor;

		editor.ui.componentFactory.add("audio", (locale) => {
			const view = new ButtonView(locale);

			view.set({
				label: "Insert Audio",
				icon: musicIcon,
				tooltip: true,
			});

			// Add the button action
			view.on("execute", () => {
				const input = prompt("Enter the audio file URL:");

				try {
					const url = new URL(input);
					editor.model.change((writer) => {
						const audioElement = writer.createElement("audio", {
							src: url,
							controls: "true",
						});
						editor.model.insertContent(
							audioElement,
							editor.model.document.selection,
						);
					});
				} catch (error) {
					alert(`The ${input} is not a valid URL`);
				}
			});

			return view;
		});

		editor.model.schema.register("audio", {
			allowWhere: "$block",
			allowAttributes: ["src", "controls"],
			isObject: true,
		});

		editor.conversion.for("downcast").elementToElement({
			model: "audio",
			view: (modelElement, { writer }) => {
				const src = modelElement.getAttribute("src");
				const controls = modelElement.getAttribute("controls") === "true";

				const audioElement = writer.createContainerElement("audio", {
					src,
					controls,
				});

				return audioElement;
			},
		});

		editor.conversion.for("upcast").elementToElement({
			view: {
				name: "audio",
				attributes: {
					src: true,
				},
			},
			model: (viewElement, { writer }) => {
				const src = viewElement.getAttribute("src");
				return writer.createElement("audio", { src, controls: "true" });
			},
		});
	}
}
