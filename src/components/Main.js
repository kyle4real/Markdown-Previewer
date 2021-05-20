import "../styles/Main.css";
import marked from "marked";
// import DOMPurify from "dompurify";

marked.setOptions({
    breaks: true,
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}" title="${title}" >${text}</a>`;
};
renderer.code = function (code) {
    return `<pre style="background: #e4e4e4;padding: 10px; font-size: 80%; border-radius: 5px; margin: 8px 0">${code}</pre>`;
};
renderer.image = function (href, title, text) {
    return `<img src="${href}" title="${title}" width="200"></img>`;
};

const Main = (props) => {
    const editorMaximized = props.editor;
    const previewMaximized = props.preview;
    let editor, preview;
    if (editorMaximized) {
        editor = {
            flex: 1,
        };
        preview = {
            flex: 0,
            padding: 0,
            opacity: 0,
            width: 0,
        };
    }
    if (previewMaximized) {
        editor = {
            flex: 0,
            padding: 0,
            opacity: 0,
            width: 0,
        };

        preview = {
            flex: 1,
        };
    }

    const cleanHTML = {
        // __html: DOMPurify.sanitize(marked(props.markdown, { renderer: renderer })),
        __html: marked(props.markdown, { renderer: renderer }),
    };

    return (
        <div className="main">
            <div className="main-container">
                <div className="editor main-child" style={editor}>
                    <div className="toolbar"></div>
                    <textarea
                        id="editor"
                        style={editor}
                        onChange={props.onChange}
                        value={props.markdown}
                    ></textarea>
                </div>
                <div className="preview main-child" style={preview}>
                    <div id="preview" dangerouslySetInnerHTML={cleanHTML}></div>
                </div>
            </div>
        </div>
    );
};

export default Main;
