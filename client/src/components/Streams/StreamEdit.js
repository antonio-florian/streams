import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream  } from '../../actions'
import StreamForm from './StreamForm';


class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) =>{
        this.props.editStream(this.props.match.params.id, formValues)
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm 
                    initialValues={_.pick(this.props.stream, 'title', 'description')}
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}


/* When we call mapStateToProps, it will always have 2 components, one will be state and the other one
will be ownProps wich is the props of the component */
const mapStateToProps= (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);