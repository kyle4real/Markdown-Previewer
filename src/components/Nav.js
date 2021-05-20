import "../styles/Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { faCompressArrowsAlt } from "@fortawesome/free-solid-svg-icons";

const Nav = (props) => {
    const editor = props.editor ? faCompressArrowsAlt : faExpandArrowsAlt;
    const editorClick = props.editorClick;
    const preview = props.preview ? faCompressArrowsAlt : faExpandArrowsAlt;
    const previewClick = props.previewClick;
    return (
        <div className="navbar">
            <div className="nav-container">
                <span className="logo">Markdown Previewer</span>
                <div className="buttons">
                    <button className="button" onClick={editorClick}>
                        Editor
                        <FontAwesomeIcon icon={editor} className="button-icon" />
                    </button>
                    <button className="button" onClick={previewClick}>
                        Previewer
                        <FontAwesomeIcon icon={preview} className="button-icon" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Nav;
