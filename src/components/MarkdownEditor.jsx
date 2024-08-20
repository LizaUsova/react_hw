import React, { Component } from 'react';
import { Editor } from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import PropTypes from 'prop-types';

class MarkdownEditor extends Component {
    constructor(props) {
        super(props);
        this.editorRef = React.createRef();
    }

    componentDidMount() {
        const element = this.editorRef.current;
        const editor = new Editor({
            el: element,
            hideModeSwitch: true
        });

        editor.addHook('change', () => {
            const content = editor.getMarkdown();
            if (this.props.onContentChange) {
                this.props.onContentChange(content);
            }
        });

        this.editorInstance = editor;
    }

    componentWillUnmount() {
        if (this.editorInstance) {
            this.editorInstance.destroy();
        }
    }

    render() {
        return <div ref={this.editorRef}></div>;
    }
}

MarkdownEditor.propTypes = {
    onContentChange: PropTypes.func.isRequired
};

export default MarkdownEditor;
