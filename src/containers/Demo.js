// import { createMedia } from 'react'
import React from 'react'
import {
  Button,
  Container,
  Divider,
  Segment,
  Form,
  Icon,
  Message,
  Progress,
  Loader,
  Dimmer,
  Image
} from 'semantic-ui-react'
import axios from 'axios'
import { fileUploadURL, facialRecognitionURL } from '../constants'
import ShortParagraphIMG from "../assets/images/short_paragraph.png"
import FaceIMG from "../assets/images/face.png"


class Demo extends React.Component {
  state = {
    fileName: "",
    file: null,
    error: null,
    loading: false,
    statusCode: null,
    progress: 0,
    spinner: false,
    data: null
  }

  handleFileChange = e => {
    if (e.target.files[0]) {
      const size = e.target.files[0].size;
      if (size > 2000000) {
        this.setState({ error: "Image size is greater than 2MB" });
      } else {
        this.setState({
          fileName: e.target.files[0].name,
          file: e.target.files[0],
          error: null
        });
      }
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.file) {
      this.handleFileUpload(this.state.file)
    } else {
      this.setState({
        error: "No file selected"
      })
    }
  }

  handleFileUpload = async file => {
    const __demo_class = this;
    const formData = new FormData();
    formData.append("file", file);
    this.setState({ loading: true });
    const config = {
      onUploadProgress: function (progressEvent) {
        const progress = Math.round
          (100 * progressEvent.loaded / progressEvent.total
        );
        __demo_class.setState({ progress });
        if (progress === 100) {
          __demo_class.setState({
            loading: false,
            spinner: true,
          })
        }
      }
    };
    axios
      .post(fileUploadURL, formData, config)
      .then(res => {
        this.setState({
          data: res.data,
          statusCode: res.status,
          spinner: false
        });
      })
      .catch(err => {
        this.setState({
          error: err.message,
          loading: false,
          spinner: false
        });
      });
  };

  render() {
    const { error, progress, loading, spinner, data } = this.state;
    return (
      <Container style={{ padding: '1em' }}>
        <Segment vertical>
          <Divider horizontal>Try uploading an image</Divider>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>File Input & Upload</label>
              <Button as="label" htmlFor="file" type="button" animated="fade">
                <Button.Content visible>
                  <Icon name="file" />
                </Button.Content>
                <Button.Content hidden>Choose a file (max 2MB)</Button.Content>
              </Button>
              <input
                id="file"
                type="file"
                hidden
                onChange={this.handleFileChange}
              />
              <Form.Input
                fluid
                label="File Chosen: "
                placeholder="Use the above bar to browse your file system"
                readOnly
                value={this.state.fileName}
              />
              <Button primary type="submit">
                Upload
              </Button>
              <a className="ui button" secondary="true" href={FaceIMG} download>
                <i aria-hidden='true' className='download icon' />
                  Use test image
              </a>
            </Form.Field>
          </Form>
          {error && (
            <Message error header="There was an error" content={error} />
          )}
        </Segment>
        <Segment vertical>
          <Divider horizontal>Endpoint</Divider>
          <p>
            POST to {facialRecognitionURL} with headers: "Authentication":
            "Token {"<your_token>"}"
          </p>
        </Segment>

        <Segment vertical>
          <Divider horizontal>JSON Response</Divider>
          {loading &&
            <Progress
              style={{ marginTop: "20px" }}
              percent={progress}
              indicating
              progress
            >
              File Upload Progress
            </Progress>
          }
        </Segment>
        {spinner && (
          <Segment>
            <Dimmer active inverted>
              <Loader inverted>Detecting faces ...</Loader>
            </Dimmer>
            <Image src={ShortParagraphIMG}/>
          </Segment>
        )}
        {data &&
          <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        }
      </Container>
    );
  }
}

export default Demo;