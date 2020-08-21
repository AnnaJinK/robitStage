import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as ToyAPI from 'lib/api/toy';
import './AdminList.scss';

class AdminList extends Component {
  state = {
    toyList: []
  }

  componentDidMount() {
    this.getToyList();
  }

  getToyList = async () => {
    try {
      let toys = await ToyAPI.sortById();
      
      this.setState({
        toyList: toys.data.map(toy => {
          return this.setToyList(toy)
        })
      })
    } catch (e) {
      console.log(e);
    }
  }

  setToyList = (toy) => {
    return (
      <tr key={toy._id} onClick={() => this.props.history.push('/admin/get/index/' + toy.index)}>
        <td>{toy.index}</td>
        <td>{toy.name}</td>
        <td>{toy.job}</td>
        <td>{toy.descsum}</td>
        <td>
          <label htmlFor="active">
            <input type="checkbox" name="active" checked={toy.active} readOnly/>
            <i className="checkmark"></i>
          </label>
        </td>
      </tr>
    )
  }

  render() {
    const { toyList } = this.state;
    return (
      <div className="area__contents">
        <div className="contents__list">
          <table className="list-toy">
            <thead>
              <tr>
                <th className="list__row-1">순서</th>
                <th className="list__row-2">이름</th>
                <th className="list__row-3">직업</th>
                <th className="list__row-4">설명 요약</th>
                <th className="list__row-5">활성여부</th>
              </tr>
            </thead>
            <tbody>
              {toyList}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default withRouter(AdminList);