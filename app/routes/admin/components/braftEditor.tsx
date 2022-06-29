import React, { Component } from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'

export default class Main extends Component {

        state = {
                editorState: BraftEditor.createEditorState('<p>初始值</p>'), // 设置编辑器初始内容
                outputHTML: '<p></p>' // 编辑器输出内容
        }

        componentDidMount() {

                this.setState({
                        editorState: BraftEditor.createEditorState('<p>hello，<b>world!</b><p>')
                })
        }

        handleChange = (editorState: any) => {
                this.setState({
                        editorState: editorState,
                        outputHTML: editorState.toHTML()
                }, () => {
                        console.log(editorState)
                        console.log(this.state.outputHTML)
                })
        }

        render() {

                const { editorState, outputHTML } = this.state

                return (
                        <div>
                                <div className="editor-wrapper">
                                        <BraftEditor
                                                value={editorState}
                                                onChange={this.handleChange}
                                        />
                                </div>
                        </div>
                )
        }

}
