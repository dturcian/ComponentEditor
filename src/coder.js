import React from "react";
import Form from "react-jsonschema-form";
import { Button, Modal, Tabs, Tab } from "react-bootstrap";
import AceEditor from "react-ace";
import "brace/mode/java";
import "brace/theme/monokai";

import { coderSchema, coderuiSchema } from "./coderSchema.js";

export class Coder extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: false
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

	render() {
		return (
			<div>
				<Button bsStyle="primary" onClick={this.handleShow}>
					Edit Coder
				</Button>

				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Coder Name</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form schema={coderSchema} uiSchema={coderuiSchema} />
						<Tabs defaultActiveKey={1} id="coders-tab">
							<Tab eventKey={1} title="section1">
								<AceEditor
									mode="java"
									theme="monokai"
									name="UNIQUE_ID_OF_DIV"
									editorProps={{ $blockScrolling: true }}
								/>
							</Tab>
							<Tab eventKey={2} title="section2">
								<AceEditor
									mode="java"
									theme="monokai"
									name="UNIQUE_ID_OF_DIV"
									editorProps={{ $blockScrolling: true }}
								/>
							</Tab>
						</Tabs>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.handleClose}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}