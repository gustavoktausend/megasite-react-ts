import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Repository } from '../../store/ducks/repositories/types'
import * as RepositoriesActions from '../../store/ducks/repositories/actions'

import { ApplicationState } from '../../store';


// Mapear informações que vem do mapStateToProps
interface StateProps {
    repositories: Repository[];
}

// Mapear as funções que vem do mapDispatch
interface DispatchProps {
    loadRequest():void
}

// Mapear Qualquer outra propriedade podendo vir de um componente pai por exemplo
// interface OwnProps {

// }

type Props = StateProps & DispatchProps & OwnProps

class RepoList extends Component<Props> {

    componentDidMount() {
        const {loadRequest} = this.props;
        loadRequest()
    }

    render() {
        const {repositories} = this.props;


        return (
            <ul>
                {repositories.map(repository => repository.name)}
            </ul>  
        );
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    bindActionCreators(RepositoriesActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);