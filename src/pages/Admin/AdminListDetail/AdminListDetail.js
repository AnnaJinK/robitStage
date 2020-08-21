import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isLength } from 'validator';
import debounce from 'lodash/debounce';
import * as toyActions from 'redux/modules/toy';
import * as ToyAPI from 'lib/api/toy';
import ErrorText from 'components/ErrorText';
import './AdminListDetail.scss';

class AdminListDetail extends Component {
  state = {
    _id: '',
    active: '',
    index: 0,
    name: '',
    job: '',
    descsum: '',
    mechanism: '',
    linktostore: '',
    image1: '',
    image2: '',
    image3: '',
    linktovideo: '',
    toydesc: '',
    isExists: true
  }

  getFindOneList = async (idx) => {
    try {
      let toy = await ToyAPI.findByIndex(idx);

      this.setState({
        _id: toy.data._id,
        active: toy.data.active,
        index: toy.data.index,
        name: toy.data.name,
        job: toy.data.job,
        descsum: toy.data.descsum,
        mechanism: toy.data.mechanism,
        linktostore: toy.data.linktostore,
        image1: toy.data.image1,
        image2: toy.data.image2,
        image3: toy.data.image3,
        linktovideo: toy.data.linktovideo,
        toydesc: toy.data.toydesc,
        isExists: true
      })
    } catch (e) {
      console.log(e);
      this.setState({
        isExists: false
      })
      return false;
    }
  }

  componentDidMount() {
    this.getFindOneList(this.props.getIndex);
  }

  setError = (message) => {
    const { ToyActions } = this.props;

    ToyActions.setError({
      form: 'form',
      message
    });
  }

  validate = {
    active: (value) => {
      this.setError(null);
      return true;
    },
    index: (value) => {
      // console.log(value);
      // console.log(this.props.getIndex);
      // console.log(typeof(value));
      // console.log(typeof(this.props.getIndex));
      if (this.props.getIndex !== value) {
        value = `'${value}'`;

        if (!isLength(value, { min: 1, max: 999 })) {
          this.setError('노출 순서는 1부터 999까지의 숫자만 입력해 주세요');
          return false;
        }
      }
      return true;
    },
    name: (value) => {
      if (!isLength(value, { min:1, max: 100 })) {
        this.setError('이름은 1자 이상 100자 이하로 작성해 주세요');
        return false;
      }
      this.setError(null); 
      return true;
    },
    job: (value) => {
      if (!isLength(value, { min:1, max: 100 })) {
        this.setError('직업을 1자 이상 100자 이하로 작성해 주세요');
        return false;
      }
      this.setError(null); 
      return true;
    },
    descsum: (value) => {
      if (!isLength(value, { min:1, max: 100 })) {
        this.setError('설명을 1자 이상 100자 이하로 입력해 주세요');
        return false;
      }
      this.setError(null); 
      return true;
    },
    mechanism: (value) => {
      if (!isLength(value, { min:1, max: 100 })) {
        this.setError('작동 원리를 1자 이상 100자 이하로 작성해 주세요');
        return false;
      }
      this.setError(null);
      return true;
    },
    image1: (value) => {
      this.setError(null);
      return true;
    },
    image2: (value) => {
      this.setError(null);
      return true;
    },
    image3: (value) => {
      this.setError(null);
      return true;
    },
    linktostore: (value) => {
      this.setError(null);
      return true;
    },
    linktovideo: (value) => {
      this.setError(null);
      return true;
    },
    toydesc: (value) => {
      if (!isLength(value, { min:1, max: 600 })) {
        this.setError('세부 설명은 1자 이상 600자 이하로 작성해야 합니다');
        return false;
      }
      this.setError(null); 
      return true;
    }
  }

  checkIndexExists = debounce(async (index) => {
    const { ToyActions, getIndex } = this.props;

    try {
      await ToyActions.checkIndexExists(index);

      if (getIndex !== index) {
        if (this.props.exists.index) {
          this.setError('이미 존재하는 번호입니다.');
          return false;
        } else {
          this.setError(null);
        }
      } else {
        this.setError(null);
      }
    } catch (e) {
      console.log(e);
    }
  }, 200)

  // convertFileToBlob = (e) => {
  //   const { ToyActions } = this.props;
  //   const { target } = e;
  //   const { files, name } = target;

  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.onload = (file) => {
  //       let value = file.target.result;
  //       ToyActions.changeInput({
  //         name,
  //         value,
  //         form: 'form'
  //       });
  //       resolve(file.target.result);
  //     };
  //     reader.onerror = (error) => {
  //       reject(error);
  //     };
  //     reader.readAsDataURL(files[0]);
  //   });
  // }

  handleChange = (e) => {
    const { ToyActions } = this.props;
    const { name } = e.target;
    const value = name === 'active' ? e.target.checked : e.target.value

    this.setState({
      [name]: value
    })

    ToyActions.changeInput({
      name,
      value,
      form: 'form'
    });

    // 검증작업 진행
    const validation = this.validate[name](value);
    if(name.indexOf('image') > -1 || name.indexOf('linktostore') > -1 || name.indexOf('linktovideo') > -1 || !validation) return; // 검증 실패하면 여기서 마침

    if (name === 'index') {
      this.checkIndexExists(value)
    }
  }

  handleUpdate = async (e) => {
    e.preventDefault();
    const { form, ToyActions, error } = this.props;
    const { _id, active, index, name, job, descsum, mechanism, image1, image2, image3, linktostore, linktovideo, toydesc } = form.legnth > 0 || null ? form : this.state

    const { validate } = this;

    let body = { _id, active, index, name, job, descsum, mechanism, image1, image2, image3, linktostore, linktovideo, toydesc }

    if (error) return; // 현재 에러가 있는 상태라면 진행하지 않음
    if (!validate['index'](index) 
      || !validate['name'](name) 
      || !validate['job'](job) 
      || !validate['descsum'](descsum) 
      || !validate['mechanism'](mechanism) 
      || !validate['toydesc'](toydesc)) { 
      // 하나라도 실패하면 진행하지 않음
      return;
    }

    try {
        await ToyActions.toyUpdate(body);
        window.location.href = '/admin/list';
    } catch (e) {
        // 에러 처리하기
        if(e.response.status === 409) {
            console.log(e.response);
            // const { key } = e.response.data;
            const message = '이미 존재하는 번호입니다';
            return this.setError(message);
        }
        console.log(e)
        this.setError('에러가 발생했습니다.')
        window.location.reload()
    }
  }

  handleDelete = async (e) => {
    e.preventDefault();
    const { ToyActions } = this.props;
    const { _id } = this.state;

    try {
      await ToyActions.toyDelete(_id);
      window.location.href = '/admin/list';
    } catch (e) {
        // 에러 처리하기
        console.log(e)
        this.setError('에러가 발생했습니다.')
        window.location.reload()
    }
  }

  componentWillUnmount() {
    const { ToyActions } = this.props;
    ToyActions.initializeForm('form')
  }

  render() {
    const { error } = this.props;
    const { active, index, name, job, descsum, mechanism, image1, image2, image3, linktostore, linktovideo, toydesc, isExists } = this.state;
    const { handleChange, handleUpdate, handleDelete } = this;

    return (
        isExists ? 
        <div className="area__contents">
          <div className="contents__register">
            <form className="form__adminRegister" method="POST" noValidate>
              <div className="box__contents">
                <div className="form-title__box">
                  <h1 className="form-title">페이퍼토이 수정</h1>
                </div>
                <div className="form-contents">
                  <span className="form-item__inputbox">
                    <label htmlFor="active">
                      활성여부
                      <input
                      type="checkbox"
                      name="active"
                      checked={active}
                      value={active}
                      onChange={handleChange}
                      />
                    </label>
                  </span>
                  <span className="form-item__inputbox">
                    <label htmlFor="index">노출 순서</label>
                      <input
                      type="number"
                      className="form-item__input"
                      name="index"
                      aria-describedby="페이퍼토이 노출 순서, 숫자로 입력"
                      placeholder="페이퍼토이 노출 순서, 숫자로 입력"
                      value={index}
                      onChange={handleChange}
                      required />
                  </span>
                  <span className="form-item__inputbox">
                    <label htmlFor="name">이름</label>
                      <input
                      type="text"
                      className="form-item__input"
                      name="name"
                      aria-describedby="페이퍼토이 이름"
                      placeholder="페이퍼토이 이름"
                      value={name}
                      onChange={handleChange}
                      required />
                  </span>
                  <span className="form-item__inputbox">
                    <label htmlFor="job">직업</label>
                      <input
                      type="text"
                      className="form-item__input"
                      name="job"
                      aria-describedby="페이퍼토이 직업"
                      placeholder="페이퍼토이 직업"
                      value={job}
                      onChange={handleChange}
                      required />
                  </span>
                  <span className="form-item__inputbox">
                    <label htmlFor="descsum">설명 요약</label>
                      <input
                      type="text"
                      className="form-item__input"
                      name="descsum"
                      aria-describedby="페이퍼토이 설명 요약"
                      placeholder="페이퍼토이 설명 요약"
                      value={descsum}
                      onChange={handleChange}
                      required />
                  </span>
                  <span className="form-item__inputbox">
                    <label htmlFor="mechanism">작동원리</label>
                      <input
                      type="string"
                      className="form-item__input"
                      name="mechanism"
                      aria-describedby="페이퍼토이 작동 원리"
                      placeholder="페이퍼토이 작동 원리"
                      value={mechanism}
                      onChange={handleChange}
                      required />
                  </span>
                  <span className="form-item__inputbox">
                    <label htmlFor="linktostore">스토어 링크</label>
                      <input
                      type="string"
                      className="form-item__input"
                      name="linktostore"
                      aria-describedby="구매 가능한 스토어 링크"
                      placeholder="구매 가능한 스토어 링크"
                      value={linktostore}
                      onChange={handleChange}/>
                  </span>
                  <span className="form-item__inputbox inputbox-image">
                    <label htmlFor="image1">이미지 1</label>
                      <input
                      type="text"
                      className="form-item__input"
                      name="image1"
                      aria-describedby="페이퍼토이 이미지 파일명"
                      placeholder="페이퍼토이 이미지 파일명"
                      value={image1}
                      onChange={handleChange}/>
                      {/* <strong className="text__point">* 이미지는 최대 5MB까지 파일명 가능하며, 용량이 큰 경우 페이퍼토이 메뉴 페이지와 어드민 페이지의 로딩 시간이 길 수 있습니다.</strong> */}
                      <strong className="text__point">* 파일명은 확장자까지 모두 적어주셔야 합니다.</strong>
                  </span>
                  <span className="form-item__inputbox inputbox-image">
                    <label htmlFor="image2">이미지 2</label>
                      <input
                      type="text"
                      className="form-item__input"
                      name="image2"
                      aria-describedby="페이퍼토이 이미지 파일명"
                      placeholder="페이퍼토이 이미지 파일명"
                      value={image2}
                      onChange={handleChange}/>
                  </span>
                  <span className="form-item__inputbox inputbox-image">
                    <label htmlFor="image3">이미지 3</label>
                      <input
                      type="text"
                      className="form-item__input"
                      name="image3"
                      aria-describedby="페이퍼토이 이미지 파일명"
                      placeholder="페이퍼토이 이미지 파일명"
                      value={image3}
                      onChange={handleChange}/>
                  </span>
                  <span className="form-item__inputbox">
                    <label htmlFor="linktovideo">동영상</label>
                      <input
                      type="string"
                      className="form-item__input"
                      name="linktovideo"
                      aria-describedby="동영상 링크"
                      placeholder="동영상 링크"
                      value={linktovideo}
                      onChange={handleChange} />
                      <strong className="text__point">* Youtube 공유하기 내 'embed'경로가 포함된 주소를 입력해 주세요 (예: https://www.youtube.com/embed/axgOoFPcRws)</strong>
                  </span>
                  <span className="form-item__textbox">
                    <label htmlFor="toydesc">특징</label>
                    <textarea
                      className="form-item__textarea"
                      rows="10"
                      name="toydesc"
                      aria-describedby="문의 내용 입력"
                      placeholder="문의 내용 입력"
                      value={toydesc}
                      onChange={handleChange}>
                    </textarea>
                  </span>
                  <div className="box__text-error">
                    { error && <ErrorText>{error}</ErrorText> }
                  </div>
                </div>
              </div>
              <div className="box__button">
                <button className="btn__submit" onClick={handleUpdate}>수정하기</button>
                <button className="btn__cancel" onClick={handleDelete}>삭제하기</button>
              </div>
            </form>
          </div>
        </div>
        : window.location.href = '/admin'
    );
  }
}

export default connect(
  (state) => ({
      // form: state.toy.getIn(['register', 'form'])
      form: state.toy.get('form'),
      error: state.toy.get('error'),
      exists: state.toy.get('exists')
  }),
  (dispatch) => ({
    ToyActions: bindActionCreators(toyActions, dispatch)
  })
)(AdminListDetail);