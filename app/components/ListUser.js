import axios from 'axios';
import React from 'react';
import { Link } from 'react-router';

export default class ListUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
    };
  }

  componentDidMount() {
    axios.get(`https://reqres.in/api/users?page`).then((res) => {
      const persons = res.data.data;
      this.setState({ persons });
    });
  }

  shoot(id) {
    const items = this.state.persons.filter((item) => item.id !== id);
    this.setState({ persons: items });
  }
  render() {
    return (
      <div className="users">
        <table style={{ width: '100%', marginLeft: '50px' }}>
          {this.state.persons.map((user, id) => (
            <div key={id}>
              <tr>
                <td style={{ padding: '20px', textAlign: 'left' }}>{user.id}</td>
                <td style={{ padding: '20px', textAlign: 'left' }}>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td style={{ padding: '20px', textAlign: 'left' }}>{user.email}</td>
                <td>
                  {' '}
                  <Link
                    to="/listuser"
                    className="btn btn--login btn--nav"
                    onClick={() => this.shoot(user.id)}>
                    Delete User
                  </Link>
                </td>
              </tr>
            </div>
          ))}
        </table>
      </div>
    );
  }
}
