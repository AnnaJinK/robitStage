import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isInt, isLength } from 'validator';
import debounce from 'lodash/debounce';
import * as toyActions from 'redux/modules/toy';
import ErrorText from 'components/ErrorText';
import './AdminRegister.scss';

class AdminRegister extends Component {
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
      if (!isInt(value, { min: 1, max: 999, allow_leading_zeroes: false })) {
        this.setError('노출 순서는 1부터 999까지의 숫자만 입력해 주세요');
        return false;
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
    const { ToyActions } = this.props;
    try {
      await ToyActions.checkIndexExists(index);

      if (this.props.exists.index) {
        this.setError('이미 존재하는 번호입니다.');
        return false;
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

  handleRegister = async (e) => {
    e.preventDefault();
    const { form, ToyActions, error, history } = this.props;
    const { active, index, name, job, descsum, mechanism, image1, image2, image3, linktostore, linktovideo, toydesc } = form;

    const { validate } = this;

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
        await ToyActions.toyRegister({
          active, index, name, job, descsum, mechanism, image1, image2, image3, linktostore, linktovideo, toydesc
        });

        history.push('/admin/list');
    } catch (e) {
        // 에러 처리하기
        if(e.response.status === 409) {
            console.log(e.response);
            // const { key } = e.response.data;
            const message = '이미 존재하는 번호입니다';
            return this.setError(message);
        }
        this.setError('알 수 없는 에러가 발생했습니다.')
    }
  }

  componentWillUnmount() {
    const { ToyActions } = this.props;
    ToyActions.initializeForm('form')
  }

  render() {
    const { error } = this.props;
    const { active, index, name, job, descsum, mechanism, linktostore, linktovideo, toydesc } = this.props.form;
    const { handleChange, handleRegister } = this;

    return (
      <div className="area__contents">
        <div className="contents__register">
          <form className="form__adminRegister" method="POST" noValidate>
            <div className="box__contents">
              <div className="form-title__box">
                <h1 className="form-title">페이퍼토이 등록</h1>
              </div>
              <div className="form-contents">
                <span className="form-item__inputbox">
                  <label htmlFor="active">
                    활성여부
                    <input
                    type="checkbox"
                    name="active"
                    checked={active}
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
                    accept="image/*"
                    aria-describedby="페이퍼토이 이미지 파일명"
                    placeholder="페이퍼토이 이미지 파일명"
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
                    accept="image/*"
                    aria-describedby="페이퍼토이 이미지 파일명"
                    placeholder="페이퍼토이 이미지 파일명"
                    onChange={handleChange}/>
                </span>
                <span className="form-item__inputbox inputbox-image">
                  <label htmlFor="image3">이미지 3</label>
                    <input
                    type="text"
                    className="form-item__input"
                    name="image3"
                    accept="image/*"
                    aria-describedby="페이퍼토이 이미지 파일명"
                    placeholder="페이퍼토이 이미지 파일명"
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
              <button className="btn__submit" onClick={handleRegister}>저장하기</button>
            </div>
          </form>
        </div>
      </div>
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
)(AdminRegister);