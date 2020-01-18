import React, { Component } from "react";
import api from "../../services/api";
import moment from "moment";
import logo from "../../assets/logo.png";
import { Container, Form } from "./style";
import CompareList from "../../components/CompareList/index";

export default class Main extends Component {
    state = {
        repositories: [],
        repositoryInput: "",
        repositoryError: false,
        loading: false
    };

    handleAddRepository = async e => {
        e.preventDefault();
        this.setState({ loading: true });
        try {
            const { data: repository } = await api.get(
                `/repos/${this.state.repositoryInput}`
            );
            repository.lastCommit = moment(repository.pushed_at).fromNow();
            this.setState({
                repositories: [...this.state.repositories, repository],
                repositoryInput: "",
                repositoryError: false
            });
        } catch (err) {
            this.setState({ repositoryError: true });
        } finally {
            this.setState({ loading: false });
        }
    };

    render() {
        return (
            <Container>
                <img src={logo} alt="Github Compare" />
                <Form
                    withError={this.state.repositoryError}
                    onSubmit={this.handleAddRepository}
                >
                    <input
                        onChange={e =>
                            this.setState({ repositoryInput: e.target.value })
                        }
                        type="text"
                        placeholder="usuário/repositório"
                        value={this.state.repositoryInput}
                    />
                    <button type="submit">
                        {this.state.loading ? (
                            <i className="fa fa-spinner fa-pulse" />
                        ) : (
                            "OK"
                        )}
                    </button>
                </Form>

                <CompareList repositories={this.state.repositories} />
            </Container>
        );
    }
}
