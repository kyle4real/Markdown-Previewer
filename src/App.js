import { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";

const placeholder = `
# Welcome to .md Previewer!
## Type whatever you want!

A link to my [Github!](https://www.github.com/kyle4real)

Inline code: \`<div>hello, world!</div>\`
\`\`\`
// multi-line code

function example() {
  return 'hello!';
}
\`\`\`
- heres a list item!
  - and another!
    - and another!

> this is a blockquote
**bold text** _italic text_ **_both_**
~~pretty cool~~... very cool!
![MD Logo](https://cdn0.iconfinder.com/data/icons/octicons/1024/markdown-512.png)
`;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: placeholder,
            editorMaximized: false,
            previewMaximized: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleEditorMaximized = this.handleEditorMaximized.bind(this);
        this.handlePreviewMaximized = this.handlePreviewMaximized.bind(this);
    }

    handleChange(e) {
        this.setState({
            markdown: e.target.value,
        });
    }

    handleEditorMaximized() {
        this.setState({
            editorMaximized: !this.state.editorMaximized,
            previewMaximized: this.state.previewMaximized ? false : this.state.previewMaximized,
        });
    }

    handlePreviewMaximized() {
        this.setState({
            editorMaximized: this.state.editorMaximized ? false : this.state.editorMaximized,
            previewMaximized: !this.state.previewMaximized,
        });
    }

    render() {
        const { editorMaximized, previewMaximized, markdown } = this.state;
        return (
            <>
                <Nav
                    editor={editorMaximized}
                    preview={previewMaximized}
                    editorClick={this.handleEditorMaximized}
                    previewClick={this.handlePreviewMaximized}
                />
                <Main
                    editor={editorMaximized}
                    preview={previewMaximized}
                    onChange={this.handleChange}
                    markdown={markdown}
                />
            </>
        );
    }
}

export default App;
