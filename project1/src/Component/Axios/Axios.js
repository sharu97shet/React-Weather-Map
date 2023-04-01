import React from "react";

import axios from "axios";

class Axios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  }

  getData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(
      (res) => {
        console.log(res);

        this.setState({
          user: res.data,
        });
      },
      () => {
        alert("something went wrong");
      }
    );

    alert("working");
  };

  render() {
    return (
      <div>
        <div className="container">
          <h1>
            {" "}
            <p> welcome to axios example</p>
          </h1>

          <button
            type="button"
            class="btn btn-primary mt-3"
            onClick={this.getData}
          >
            GET DATA
          </button>
        </div>

        {this.state.user.length > 0 ? (
          <div className="container mt-4">
            <div className="row">
              <div className="col">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>City</th>
                      <th>Company Name</th>
                    </tr>
                  </thead>

                  <tbody>
                    {this.state.user.map((element, index) => {
                      return (
                        <tr>
                          <td>{element.id}</td>
                          <td>{element.name}</td>
                          <td>{element.email}</td>
                          <td>{element.address.city}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="container mt-4">
            <div className="row">
              <div className="col">DATA IS NOT AVAILABLE AT THIS MOMENT</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Axios;
