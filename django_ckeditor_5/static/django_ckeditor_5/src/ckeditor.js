import UploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Code from "@ckeditor/ckeditor5-basic-styles/src/code";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import Subscript from "@ckeditor/ckeditor5-basic-styles/src/subscript";
import Superscript from "@ckeditor/ckeditor5-basic-styles/src/superscript";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import CodeBlock from "@ckeditor/ckeditor5-code-block/src/codeblock";
import ClassicEditorBase from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import { FindAndReplace } from "@ckeditor/ckeditor5-find-and-replace";
import Font from "@ckeditor/ckeditor5-font/src/font";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight";
import { HorizontalLine } from "@ckeditor/ckeditor5-horizontal-line";
import { HtmlEmbed } from "@ckeditor/ckeditor5-html-embed";
import { FullPage } from "@ckeditor/ckeditor5-html-support";
import GeneralHtmlSupport from "@ckeditor/ckeditor5-html-support/src/generalhtmlsupport";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageInsert from "@ckeditor/ckeditor5-image/src/imageinsert";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock";
import { LinkImage } from "@ckeditor/ckeditor5-link";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";
import ListProperties from "@ckeditor/ckeditor5-list/src/listproperties";
import TodoList from "@ckeditor/ckeditor5-list/src/todolist";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed";
import Mention from "@ckeditor/ckeditor5-mention/src/mention";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import RemoveFormat from "@ckeditor/ckeditor5-remove-format/src/removeformat";
import { SelectAll } from "@ckeditor/ckeditor5-select-all";
import { ShowBlocks } from "@ckeditor/ckeditor5-show-blocks";
import SourceEditing from "@ckeditor/ckeditor5-source-editing/src/sourceediting";
import { SpecialCharacters } from "@ckeditor/ckeditor5-special-characters";
import { SpecialCharactersEssentials } from "@ckeditor/ckeditor5-special-characters";
import { Style } from "@ckeditor/ckeditor5-style";
import { TableCaption } from "@ckeditor/ckeditor5-table";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import SimpleUploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter";
import WordCount from "@ckeditor/ckeditor5-word-count/src/wordcount";
import { FileUploader } from "@liqd/ckeditor5-file-uploader";
import FullScreen from "@pikulinpw/ckeditor5-fullscreen";
import Audio from "./audio.js";

export default class ClassicEditor extends ClassicEditorBase {}

ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	CodeBlock,
	Autoformat,
	Bold,
	Italic,
	Underline,
	Strikethrough,
	Code,
	Subscript,
	Superscript,
	BlockQuote,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageResize,
	Link,
	List,
	Paragraph,
	Alignment,
	Font,
	PasteFromOffice,
	SimpleUploadAdapter,
	MediaEmbed,
	RemoveFormat,
	Table,
	TableToolbar,
	TableCaption,
	TableProperties,
	TableCellProperties,
	Indent,
	IndentBlock,
	Highlight,
	TodoList,
	ListProperties,
	SourceEditing,
	GeneralHtmlSupport,
	ImageInsert,
	WordCount,
	Mention,
	Style,
	HorizontalLine,
	LinkImage,
	HtmlEmbed,
	FullPage,
	SpecialCharacters,
	SpecialCharactersEssentials,
	FileUploader,
	ShowBlocks,
	SelectAll,
	FindAndReplace,
	FullScreen,
	Audio,
];
